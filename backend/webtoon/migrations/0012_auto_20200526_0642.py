# Generated by Django 3.0.5 on 2020-05-26 06:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webtoon', '0011_auto_20200526_0641'),
    ]

    operations = [
        migrations.AlterField(
            model_name='theme',
            name='description',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='webtoon',
            name='description',
            field=models.TextField(),
        ),
    ]
