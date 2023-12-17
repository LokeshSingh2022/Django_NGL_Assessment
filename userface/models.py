from django.db import models
from django.contrib.auth.models import User
from adminface.models import Apps

from django.utils import timezone

# Create your models here.
class UserApps(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    app = models.ForeignKey(Apps, on_delete=models.SET_NULL, null=True)
    date_of_addition = models.DateTimeField(default=timezone.now)
    screenshot = models.ImageField(upload_to='static/screenshots/', null=False, blank=False)

    class Meta:
        unique_together = ['user', 'app']

    def __str__(self):
        return f"{self.user.username} - {self.app.name}"