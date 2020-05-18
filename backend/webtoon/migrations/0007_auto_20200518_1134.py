# Generated by Django 3.0.5 on 2020-05-18 11:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webtoon', '0006_auto_20200518_1124'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='webtoon',
            name='themes',
        ),
        migrations.AddField(
            model_name='theme',
            name='webtoons',
            field=models.ManyToManyField(related_name='themes', to='webtoon.Webtoon'),
        ),
    ]
