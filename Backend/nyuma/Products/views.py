from django.shortcuts import render
from rest_framework import permissions, viewsets
from Products.models import Product
from Products.serializers import ProductSerializer
# Create your views here.

from django.http import HttpResponse

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer