from rest_framework import  serializers
from adminface.models import Apps
from userface.models import UserApps

class AppsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apps
        fields = '__all__'


class UserAppsWithAppSerializer(serializers.ModelSerializer):
    app = AppsSerializer()

    class Meta:
        model = UserApps
        fields = ('user', 'app', 'date_of_addition', 'screenshot')