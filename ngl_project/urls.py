"""
URL configuration for ngl_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views


urlpatterns = [
    path('admin/', admin.site.urls), # Djangos default admin page
    path('', views.home, name='home'), # Home url
    path('register/', views.register_user, name="register"), # to register new user
    path('accounts/', include("django.contrib.auth.urls")), # for account modifications, the html will be checked on "templates/registration folder"
    path('app/user/', include('userface.urls')), # user page
    path('app/admin/', include('adminface.urls')), # app admin page
    path('api/', include('apis.urls')) # api url
]
