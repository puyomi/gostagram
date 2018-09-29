from django.urls import path
from . import views

app_name = "notifications"
urlpatterns = [
    path("", view=views.NotifyToUser.as_view(), name="notify_to_user"),
]
