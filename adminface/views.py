from django.shortcuts import render, redirect, HttpResponse
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

# function to delete an existing app from the list
def delete_app(request):
    if request.method == 'POST':
        app_name = request.POST.get('app_name')  # Retrieve app name from the form
        try:
            app_to_delete = Apps.objects.get(name=app_name)
            app_to_delete.delete()
            return render(request, 'admin.html')  # Redirect to the admin home page after deletion
        except Apps.DoesNotExist:
            return HttpResponse("No App with such name Exist !!!")