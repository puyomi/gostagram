from django.db import models
from gostagram.users import models as user_models
from gostagram.images import models as image_models

class Notification(image_models.TimeStampedModel):

    TYPE_CHOICES = (
        ('like', 'Like'),
        ('comment', 'Comment'),
        ('follow', 'Follow'),
    )

    noti_from_user = models.ForeignKey(user_models.User, on_delete=models.CASCADE, related_name="noti_from_user")
    noti_to_user = models.ForeignKey(user_models.User, on_delete=models.CASCADE, related_name="noti_to_user")
    noti_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    noti_image = models.ForeignKey(image_models.Image, on_delete=models.CASCADE, related_name="noti_image",null=True, blank=True)
    noti_comment = models.TextField(null=True, blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return 'From: {}  -  To: {}  -  {}'.format(self.noti_from_user, self.noti_to_user, self.noti_type)