from django.db import models

from users.models import CustomUser


# Create your models here.
class LorcanaCard(models.Model):
    set_id = models.TextField(null=True)
    set_name = models.TextField(null=True)
    set_num = models.IntegerField(null=True)
    artist = models.TextField(null=True)
    color = models.TextField(null=False)
    image_url = models.TextField(null=True)
    cost = models.IntegerField(null=False)
    inkable = models.BooleanField(null=False)
    name = models.TextField(null=False, unique=True)
    type = models.TextField(null=False)
    rarity = models.TextField(null=False)
    flavor_text = models.TextField(null=True)
    card_number = models.IntegerField(null=False)
    body_text = models.TextField(null=True)
    lore = models.IntegerField(null=True)
    willpower = models.IntegerField(null=True)
    strength = models.IntegerField(null=True)
    move_cost = models.IntegerField(null=True)
    classifications = models.TextField(null=True)
    abilities = models.TextField(null=True)
    card_variants = models.TextField(null=True)


class LorcanaCollection(models.Model):
    name = models.TextField(null=True)
    is_public = models.BooleanField(null=False, default=False)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    cards = models.ManyToManyField(LorcanaCard, blank=True)