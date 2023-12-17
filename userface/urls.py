from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_home, name="user-home"),
    path('app/<str:username>/add/<str:app>/', views.add_userapps, name="add-userapps"),
    
]
