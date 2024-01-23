from django.contrib import admin
from django.urls import path
from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.home, name="home_page"),
    path("about", views.about, name="about"),
    path("babylon", views.babylon_page, name="babylon"),
]
