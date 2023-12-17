from django.db import models
# Create your models here.
class Apps(models.Model):
    name = models.CharField(max_length = 30, unique=True)
    link = models.URLField()
    category = models.CharField(max_length = 30)
    subcategory = models.CharField(max_length = 30)
    points = models.IntegerField()
    logo = models.ImageField(upload_to='static/logos/')
    
    def __str__(self):
        return self.name