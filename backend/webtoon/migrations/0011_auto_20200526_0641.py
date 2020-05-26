# Generated by Django 3.0.5 on 2020-05-26 06:41

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('webtoon', '0010_theme_description'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='theme',
            options={'ordering': ['id']},
        ),
        migrations.AlterModelOptions(
            name='webtoon',
            options={'ordering': ['id']},
        ),
        migrations.AddField(
            model_name='webtoon',
            name='source',
            field=models.URLField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
