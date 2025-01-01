from django.db import models

# Create your models here.

class Theme(models.Model):
    theme_types = {
        'RANDOM THEME':'Random theme',
        'GIFT THEME':'Gift theme',
    }
    name = models.CharField(max_length=200,null=True)
    type = models.CharField(choices=theme_types) 

class Product(models.Model):
    name = models.CharField(max_length=200,null=True, unique=True)
    theme = models.ForeignKey(Theme,on_delete=models.PROTECT,
        related_name='products',null=True)
    price = models.IntegerField(null=True)
    canvasJSON = models.JSONField()
    canvasSVG = models.TextField(null=True)
    canvasPNG = models.TextField(null=True)
    likes = models.IntegerField(default=0)
    clicked = models.IntegerField(default=0)
    description = models.TextField(null='')

    def __str__(self):
        return self.name