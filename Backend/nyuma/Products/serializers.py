from Products.models import Product, Theme
from rest_framework import serializers


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = "__all__" 

class ThemeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Theme
        fields = "__all__" 