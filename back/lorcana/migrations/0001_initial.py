# Generated by Django 5.0.4 on 2024-04-30 13:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='LorcanaCard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('set_id', models.TextField(null=True)),
                ('set_name', models.TextField(null=True)),
                ('set_num', models.IntegerField(null=True)),
                ('artist', models.TextField(null=True)),
                ('color', models.TextField()),
                ('image_url', models.TextField(null=True)),
                ('cost', models.IntegerField()),
                ('inkable', models.BooleanField()),
                ('name', models.TextField(unique=True)),
                ('type', models.TextField()),
                ('rarity', models.TextField()),
                ('flavor_text', models.TextField(null=True)),
                ('card_number', models.IntegerField()),
                ('body_text', models.TextField(null=True)),
                ('lore', models.IntegerField(null=True)),
                ('willpower', models.IntegerField(null=True)),
                ('strength', models.IntegerField(null=True)),
                ('move_cost', models.IntegerField(null=True)),
                ('classifications', models.TextField(null=True)),
                ('abilities', models.TextField(null=True)),
                ('card_variants', models.TextField(null=True)),
            ],
        ),
    ]
