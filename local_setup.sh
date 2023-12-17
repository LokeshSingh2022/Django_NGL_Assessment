#! /bin/sh
echo "********************^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*****************************"
echo "This will setup an local virtual environment and install all the required libraries"
echo "--------------------#################################-----------------------------"
if [ -d ".env" ];
then
    echo ".env exists, installing libraries using pip"
else
    echo "creating .env"
    python3 -m venv .env
    echo "installing libraries using pip"
fi

#activate virtual env
. .env/bin/activate

pip install -r requirements.txt

deactivate