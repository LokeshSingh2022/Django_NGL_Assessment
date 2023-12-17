#! /bin/sh
echo "***************************************************"
echo "This will setup an local run environment of the app"
echo "---------------------------------------------------"
if [ -d ".env" ];
then
    echo "Activating local run"
else
    echo "No .env present. Try again after running local_setup."
    exit N
fi

#activate virtual env
. .env/bin/activate

export ENV=development
python manage.py runserver

deactivate