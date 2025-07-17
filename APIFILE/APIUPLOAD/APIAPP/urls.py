from django.urls import path
from . import views

urlpatterns = [
    path('upload/', views.upload_file, name='upload'),
    path('success/', views.upload_success, name='success'),
]
