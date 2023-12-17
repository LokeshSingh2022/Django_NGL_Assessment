from rest_framework.response import Response
from rest_framework.decorators import api_view
from adminface.models import Apps
from .serializers import AppsSerializer, UserAppsWithAppSerializer


from userface.models import UserApps

from rest_framework.views import APIView
from django.contrib.auth.models import User




# api to get list of all apps in the app
@api_view(['GET'])
def getApp(request):
    apps = Apps.objects.all()
    serializer = AppsSerializer(apps, many=True)
    return Response(serializer.data)



# api to get list of all apps registered a particular user. 
class UserAppsListAPIView(APIView):
    def get(self, request, username):
        user = User.objects.filter(username=username).first()
        if user:
            user_apps = UserApps.objects.filter(user=user)
            serializer = UserAppsWithAppSerializer(user_apps, many=True)
            return Response(serializer.data)
        else:
            return Response("User not found.", status=404)
        


# api to get list of all apps pending to register by a particular user. 
class UnregisteredAppsListAPIView(APIView):
    def get(self, request, username):
        user = User.objects.filter(username=username).first()
        if user:
            registered_apps = UserApps.objects.filter(user=user).values_list('app', flat=True)
            unregistered_apps = Apps.objects.exclude(id__in=registered_apps)
            serializer = AppsSerializer(unregistered_apps, many=True)
            return Response(serializer.data)
        else:
            return Response("User not found.", status=404)
        

