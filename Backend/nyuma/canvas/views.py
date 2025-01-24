from django.shortcuts import render
from rest_framework import permissions, viewsets, status
from canvas.models import StockImage
from canvas.serializers import StockImageSerializer
# Create your views here.

class StockImageViewSet(viewsets.ModelViewSet):
    queryset = StockImage.objects.all()
    serializer_class = StockImageSerializer