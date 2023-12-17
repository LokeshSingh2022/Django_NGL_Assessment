from django.shortcuts import render

from django.contrib.auth.models import User
from adminface.models import Apps
from django.shortcuts import get_object_or_404
from django.contrib.auth.decorators import login_required

from django.shortcuts import redirect
from .forms import UserAppsForm

# Create your views here.
@login_required
def user_home(request):
    return render(request, "user.html")


@login_required
def add_userapps(request, username, app):
    if request.method == 'POST':
        form = UserAppsForm(request.POST, request.FILES)
        if form.is_valid():
            user = get_object_or_404(User, username=username)
            selected_app = get_object_or_404(Apps, name=app)
            instance = form.save(commit=False)
            instance.user = user
            instance.app = selected_app
            instance.save()
            return redirect('user-home')  # Redirect to a user-home page
    else:
        form = UserAppsForm()

    return render(request, 'addUserApp.html', {'form': form})
