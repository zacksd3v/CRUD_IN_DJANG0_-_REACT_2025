from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import *
from .models import *
from rest_framework.response import Response

class HalaqatViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Halaqat.objects.all()
    serializers_class = HalaqatSerializer

    def list(self, request):
        queryset = Halaqat.objects.all()
        serializers = self.serializers_class(queryset, many=True)
        return Response(serializers.data)
    
class LeagueViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = League.objects.all()
    serializers_class = LeagueSerializer

    def list(self, request):
        queryset = League.objects.all()
        serializers = self.serializers_class(queryset, many=True)
        return Response(serializers.data)
    
class CharacteristicViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Characteristic.objects.all()
    serializers_class = CharacteristicSerializer

    def list(self, request):
        queryset = Characteristic.objects.all()
        serializers = self.serializers_class(queryset, many=True)
        return Response(serializers.data)