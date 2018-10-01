from rest_framework import serializers
from . import models
from gostagram.images import serializers as images_serializers


class ListUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.User
        fields = (
            'id',
            'profile_image',
            'username',
            'name',
        )



class UserProfileSerializer(serializers.ModelSerializer):

    images = images_serializers.ListImageSerializer(many=True, read_only=True)
    post_count = serializers.ReadOnlyField()
    followers_count = serializers.ReadOnlyField()
    following_count = serializers.ReadOnlyField()
    class Meta:

        model = models.User
        fields = (
            'id',
            'username',
            'name',
            'profile_image',
            'bio',
            'website',
            'post_count',
            'followers_count',
            'following_count',
            'images',
        )        