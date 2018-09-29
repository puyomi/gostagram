# Generated by Django 2.0.8 on 2018-09-29 12:39

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_auto_20180929_0729'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='followings',
        ),
        migrations.AddField(
            model_name='user',
            name='following',
            field=models.ManyToManyField(blank=True, related_name='following_set', to=settings.AUTH_USER_MODEL),
        ),
    ]
