from django import forms
from .models import UserApps

class UserAppsForm(forms.ModelForm):
    class Meta:
        model = UserApps
        fields = ('date_of_addition', 'screenshot')
