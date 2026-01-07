from rest_framework import serializers
from .models import *


class HalaqatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Halaqat
        fields = ('id', 'name')

class LeagueSerializer(serializers.ModelSerializer):
    class Meta:
        model = League
        fields = ('id', 'name')

class CharacteristicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Characteristic
        fields = ('id', 'name')

class QuranicClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuranicClass
        fields = "__all__"  # Zamuyi amfani da kowane field na cikin wnn Claas