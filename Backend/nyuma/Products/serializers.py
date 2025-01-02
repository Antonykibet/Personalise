from Products.models import ThemedProduct, Theme, AvailableProducts
from rest_framework import serializers


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ThemedProduct
        fields = "__all__" 

class ThemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Theme
        fields = "__all__" 

class AvailableItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = AvailableProducts
        fields = "__all__" 