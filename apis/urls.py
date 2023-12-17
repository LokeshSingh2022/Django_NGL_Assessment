from django.urls import path
from . import apis

# url for different apis in apis.py
urlpatterns = [
    path('Apps/', apis.getApp),
    path('User/<str:username>/apps/', apis.UserAppsListAPIView.as_view(), name='user-apps'),
    path('User/<str:username>/unregistered-apps/', apis.UnregisteredAppsListAPIView.as_view(), name='unregistered-apps'),
    
]