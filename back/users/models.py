from django.db import models

# Create your models here.

from django.contrib.auth.models import AbstractUser, Group, Permission


class CustomUser(AbstractUser):
    bio = models.CharField(max_length=255, blank=True)
    groups = models.ManyToManyField(Group, related_name='custom_users_groups')
    user_permissions = models.ManyToManyField(
        Permission, related_name='custom_users_permissions'
    )
