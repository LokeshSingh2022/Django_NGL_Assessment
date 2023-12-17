from django.db import models


# Create your models here.
class Apps(models.Model):
    name = models.CharField(max_length = 30, unique=True)
    link = models.URLField()
    category = models.CharField(max_length = 30) # https://docs.djangoproject.com/en/4.2/ref/models/fields/#common-model-field-options , to implement choice later
    subcategory = models.CharField(max_length = 30)
    points = models.IntegerField()
    logo = models.ImageField(upload_to='static/logos/') # https://stackoverflow.com/questions/65466375/storing-images-in-sqlite-django
    
    def __str__(self):
        return self.name