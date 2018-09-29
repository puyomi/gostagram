from django.contrib import admin
from . import models

@admin.register(models.Notification)
class NotificationAdmin(admin.ModelAdmin):

    list_display = (
        'noti_from_user',
        'noti_to_user',
        'noti_type',
        'noti_image',
        'created_at',
        'updated_at',
    )
