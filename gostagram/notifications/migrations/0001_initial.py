# Generated by Django 2.0.8 on 2018-09-29 22:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('images', '0008_image_tags'),
    ]

    operations = [
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('noti_type', models.CharField(choices=[('like', 'Like'), ('comment', 'Comment'), ('follow', 'Follow')], max_length=20)),
                ('noti_from_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='noti_from_user', to=settings.AUTH_USER_MODEL)),
                ('noti_image', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='noti_image', to='images.Image')),
                ('noti_to_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='noti_to_user', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
