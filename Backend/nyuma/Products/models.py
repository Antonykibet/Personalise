from django.db import models

# Create your models here.

class Product(models.Model):
    test= models.CharField()
    name = models.CharField(max_length=200,null=True)
    price = models.IntegerField(null=True)
    canvasJSON = models.JSONField()
    canvasSVG = models.TextField(null=True)
    likes = models.IntegerField(default=0)
    clicked = models.IntegerField(default=0)
    description = models.TextField(null='')

    def __str__(self):
        return self.name