from django.contrib import admin
from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('halaqat', HalaqatViewset, basename='halaqat'),
router.register('league', LeagueViewset, basename='league'),
router.register('characteristic', CharacteristicViewset, basename='characteristic')

urlpatterns = router.urls
