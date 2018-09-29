from django.contrib.auth.models import AbstractUser
# from django.db.models import CharField , ImageField, URLField, TextField, ManyToManyField
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):

    """User Model"""

    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
        ('non-specified', 'Not specified')
    )

    profile_image = models.ImageField(null=True)
    name = models.CharField(_("Name of User"), blank=True, max_length=255)
    website = models.URLField(null=True)
    bio = models.TextField(null=True)
    phone = models.CharField(max_length=140, null=True)
    gender = models.CharField(max_length=80, choices=GENDER_CHOICES, null=True)
    followers = models.ManyToManyField("self", blank=True, symmetrical=False, related_name="followers_set")
    following = models.ManyToManyField("self", blank=True, symmetrical=False, related_name="following_set")


    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})

    @property
    def post_count(self):
        return self.images.all().count()

    @property
    def followers_count(self):
        return self.followers.all().count()

    @property
    def following_count(self):
        return self.following.all().count()
