# Generated by Django 4.2.6 on 2023-12-29 10:31

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('mainApp', '0003_remove_customuser_is_superuser_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='messages',
            name='timestamp',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
