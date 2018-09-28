from django.contrib.auth.models import AbstractUser
from django.db.models import CharField , ImageField, URLField, TextField, ManyToManyField
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):

    """User Model"""

    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
        ('non-specified', 'Not specified')
    )

    # First Name and Last Name do not cover name patterns
    # around the globe.
    profile_image = ImageField(null=True)
    name = CharField(_("Name of User"), blank=True, max_length=255)
    website = URLField(null=True)
    bio = TextField(null=True)
    phone = CharField(max_length=140, null=True)
    gender = CharField(max_length=80, choices=GENDER_CHOICES, null=True)
    follower = ManyToManyField("self")
    following = ManyToManyField("self")


    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})
