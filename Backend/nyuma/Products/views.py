from rest_framework import permissions, viewsets, status
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from Products.models import ThemedProduct, Theme, AvailableProducts
from Products.serializers import ProductSerializer, ThemeSerializer, AvailableItemSerializer
# Create your views here.


class ProductViewSet(viewsets.ModelViewSet):
    queryset = ThemedProduct.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = ThemedProduct.objects.all()
        theme = self.request.query_params.get('themeName', None) 
        themeType = self.request.query_params.get('themeType', None) 
        if themeType:
            queryset = queryset.filter(theme__type = themeType)
        if theme:
            queryset = queryset.filter(theme__name = theme)
        return queryset


class ThemeViewSet(viewsets.ModelViewSet):
    queryset = Theme.objects.all()
    serializer_class = ThemeSerializer
    
    def get_queryset(self):
        queryset = Theme.objects.all()
        themetype = self.request.query_params.get('themeType', None) 
        if themetype:
            queryset = queryset.filter(type = themetype)
        return queryset
    
class AvailableItemViewSet(viewsets.ModelViewSet):
    queryset = AvailableProducts.objects.all()
    serializer_class = AvailableItemSerializer
    