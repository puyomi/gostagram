from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers


class NotifyToUser(APIView):

    def get(self, request, format=None):
        user = request.user
        notification = models.Notification.objects.filter(noti_to_user=user)[:20]
        serializer = serializers.NotificationSerializers(notification, many=True)
        return Response(data=serializer.data ,status=status.HTTP_200_OK)


def create_notification(noti_from, noti_to, noti_type, image=None, comment=None ):

    notification = models.Notification.objects.create(
        noti_from_user = noti_from,
        noti_to_user = noti_to,
        noti_type = noti_type,
        noti_image = image,
        noti_comment = comment,
    )

    notification.save()