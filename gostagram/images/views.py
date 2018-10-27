from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers
from gostagram.users import models as user_models
from gostagram.notifications import views
from gostagram.users import serializers as user_serializers

# User(self+following_user) Feed 
class Images(APIView):

    def get(self, request, format=None):
        user = request.user
        following_users = user.following.all()
        image_list = []
        for following_user in following_users:
            user_images = following_user.images.all()[:2]
            for image in user_images:
                image_list.append(image)

        my_images = user.images.all()[:2]
        for image in my_images:
            image_list.append(image)
        
        sorted_list = sorted(image_list, key=lambda image:image.created_at, reverse=True)
        serializer = serializers.ImageSerializer(sorted_list, many=True, context={'request': request})
        return Response(data=serializer.data)

    def post(self, request, format=None):

        user = request.user
        serializer = serializers.InputImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(creator=user)
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DetailedImage(APIView):

    def find_own_image(self, image_id, user):
        try:
            image = models.Image.objects.get(id=image_id, creator=user)
            return image
        except models.Image.DoesNotExist:
            return None

    def get(self, request, image_id, format=None):

        try:
            found_image = models.Image.objects.get(id=image_id)
            serializer = serializers.ImageSerializer(found_image, context={'request':request})
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        except models.Image.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, image_id, format=None):
        user = request.user
        image = self.find_own_image(image_id, user)
        if image is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        serializer = serializers.InputImageSerializer(image, data=request.data, partial=True)
        print(request.data)
        if serializer.is_valid():
            serializer.save(creator=user)
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors ,status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, image_id, format=None):
        user = request.user
        image = self.find_own_image(image_id, user)
        if image is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            image.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)



# Like on Image
class LikeImage(APIView):

    def get(self, request, image_id, format=None):

        likes = models.Like.objects.filter(image__id=image_id)
        like_creator_ids = likes.values('creator_id')
        likes_list = user_models.User.objects.filter(id__in=like_creator_ids)
        serializer = user_serializers.ListUserSerializer(likes_list, many=True)
        return Response(data=serializer.data ,status=status.HTTP_200_OK)



    def post(self, request, image_id, format=None):
        user = request.user
        try:
            found_image = models.Image.objects.get(id=image_id)
        except models.Image.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            preexisting_like = models.Like.objects.get(
                creator = user,
                image = found_image
            )
            return Response(status=status.HTTP_304_NOT_MODIFIED)
        except models.Like.DoesNotExist:
            new_like = models.Like.objects.create(
                creator = user,
                image = found_image
            )
            new_like.save()

            # create_notification
            views.create_notification(user, found_image.creator, "like", image=found_image, comment=None)
            
            return Response(status=status.HTTP_201_CREATED)

class UnLikeImage(APIView):
    def delete(self, request, image_id, format=None):
        user = request.user
        try:
            found_image = models.Image.objects.get(id=image_id)
        except models.Image.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            preexisting_like = models.Like.objects.get(
                creator = user,
                image = found_image
            )
            preexisting_like.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except models.Like.DoesNotExist:
            return Response(status=status.HTTP_304_NOT_MODIFIED)

# comment post
class CommentOnImage(APIView):

    def post(self, request, image_id, format=None):

        try:
            found_image = models.Image.objects.get(id=image_id)
        except models.Image.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        user = request.user
        serializer = serializers.CommentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(creator=user, image=found_image)

            # create_notification
            views.create_notification(user, found_image.creator, "comment", image=found_image, comment=serializer.data['message'])
            
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)

        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# comment delete
class Comment(APIView):

    def delete(self, request, comment_id, format=None):

        user = request.user
        try:
            preexisting_comment = models.Comment.objects.get(id=comment_id, creator=user)
            preexisting_comment.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

        except models.Comment.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class ModerateComment(APIView):

    def delete(self, request, image_id, comment_id, format=None):

        user = request.user
        try:
            comment_to_delete = models.Comment.objects.get(id=comment_id, image__id=image_id, image__creator = user)
            comment_to_delete.delete()
        except models.Comment.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)            
        return Response(status=status.HTTP_204_NO_CONTENT)

class Search(APIView):

    def get(self, request, format=None):

        hashtags = request.query_params.get('hashtags', None)

        if hashtags is not None:
            hashtags = hashtags.split(",")
            images = models.Image.objects.filter(tags__name__in=hashtags).distinct()
            serialize = serializers.ListImageSerializer(images, many=True)
            return Response(data=serialize.data ,status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        

        

