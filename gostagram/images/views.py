from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers

# User(self+following_user) Feed 
class Feed(APIView):

    def get(self, request, format=None):

        user = request.user

        following_users = user.following.all()

        image_list = []

        for following_user in following_users:

            user_images = following_user.images.all()[:2]

            for image in user_images:

                image_list.append(image)

        sorted_list = sorted(image_list, key=lambda image:image.created_at, reverse=True)

        serializer = serializers.ImageSerializer(sorted_list, many=True)

        return Response(data=serializer.data)

# Like on Image
class LikeImage(APIView):
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


class Search(APIView):

    def get(self, request, format=None):

        hashtags = request.query_params.get('hashtags', None)

        if hashtags is not None:
            hashtags = hashtags.split(",")
            images = models.Image.objects.filter(tags__name__in=hashtags).distinct()
            print(hashtags)
            serialize = serializers.ListImageSerializer(images, many=True)
            return Response(data=serialize.data ,status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        

        

