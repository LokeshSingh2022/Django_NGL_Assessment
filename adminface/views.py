from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Apps


# Create your views here.
@login_required
def admin_home(request):
    if request.user.is_superuser: #login redirect url is set as '/app/admin/'. So check if it is super user, else redirect to 'user'
        return render(request, "admin.html")
    else:
        return redirect('/app/user/')
    


# function to add new app to the list
def add_app(request):
    if request.method == 'POST':
        name = request.POST['name']
        link = request.POST['link']
        category = request.POST['category']
        subcategory = request.POST['subcategory']
        points = request.POST['points']
        logo = request.FILES['logo']
        app_obj = Apps(name=name, link=link, category=category, subcategory=subcategory, points=points, logo=logo)
        app_obj.save()
        return render(request, 'admin.html')
    return render(request, 'addApp.html')