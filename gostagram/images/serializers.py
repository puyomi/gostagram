from rest_framework import serializers
from . import models
from gostagram.users import models as user_models
from taggit_serializer.serializers import TagListSerializerField, TaggitSerializer


class ListImageSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.Image
        fields = (
            'id',
            'file',
            'like_count',
            'comment_count'
        )



class FeedUserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = user_models.User
        fields = (
            'username',
            'profile_image'
        )


class CommentSerializer(serializers.ModelSerializer):
    
    creator = FeedUserSerializer(read_only=True)

    class Meta:
        model = models.Comment
        fields = (
            'id',
            'creator',
            'message',
        )


class ImageSerializer(serializers.ModelSerializer):

    comments = CommentSerializer(many=True)
    creator = FeedUserSerializer()
    tags = TagListSerializerField()

    class Meta:
        model = models.Image
        fields = (
            'id',
            'creator',
            'file',
            'location',
            'caption',
            'comments',
            'like_count',
            'tags',
        )


