from rest_framework import serializers
from . import models
from gostagram.users import serializers as user_serializers
from gostagram.images import serializers as image_serializers

class NotificationSerializers(serializers.ModelSerializer):

    noti_from_user = user_serializers.ListUserSerializer()
    noti_image = image_serializers.SmallImageSerializer()

    class Meta:
        model = models.Notification
        fields = (
            'noti_from_user',
            'noti_to_user',
            'noti_type',
            'noti_image',
            'created_at'
        )