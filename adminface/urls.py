from django.urls import path
from . import views

urlpatterns = [
    path('', views.admin_home, name="admin-home"),
    path('DeleteApp', views.delete_app, name="delete-app"),
    path('AddApp', views.add_app, name="add-app"),
]
