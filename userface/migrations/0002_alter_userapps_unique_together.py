# Generated by Django 4.2.2 on 2023-06-28 12:40

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('adminface', '0003_alter_apps_logo'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('userface', '0001_initial'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='userapps',
            unique_together={('user', 'app')},
        ),
    ]
