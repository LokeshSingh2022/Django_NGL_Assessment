# NextGrowth Labs
#### Screening evaluation Project

This evaluation project is done for the **NextGrowth Labs** recruitment process.


## Problem Set 1


``` python
import re

text = '{"orders":[{"id":1},{"id":2},{"id":3},{"id":4},{"id":5},{"id":6},{"id":7},{"id":8},{"id":9},{"id":10},{"id":11},{"id":648},{"id":649},{"id":650},{"id":651},{"id":652},{"id":653}],"errors":[{"code":3,"message":"[PHP Warning #2] count(): Parameter must be an array or an object that implements Countable (153)"}]}'

numbers = re.findall(r'(?<=:)\d+', text)
print(numbers)

```

``` output
List:- ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '648', '649', '650', '651', '652', '653']
```


## Problem Set 2

### Description

The aim of the project is to build a Django app, in which admin is able to add a new app with it's details like url, category, subcategory, logo and points for download. And a user should be able to view the apps available, follow the link, earn points by saving a screen shot of the app and view points earned.

### Video demo

NB: Follow this [link]() for a video demo of the app.


### Technologies used


*	`Django`
    > Django framework is used for the app creation as it is simple and have most of the essential extensions inbuilt.

*	`Django Rest Framework`
    > Used for implimenting APIs.

*	`Pillow`
    > Used to process images.

*	`VueJS`
    > Used as a JavaScript framework for building UI & UX. Inside vue.js used:
    > - Vuex as the state management library
    > - Vue Router as router for making it a single page application
    > - Also Chart.js for generating charts.

*	`SQlite`
    > As the database.



### DB Schema Design

![ER Diagram!](ER-Diagram.png "ER Diagram")

The DB has three tables, User, Apps and AppsUser. Apart from all primary keys, username in User table is having a unique constrain. Alao name in Apps table is having a unique constrain. AppsUser is a one to many relationship table between User table and Apps table. The combination of User(id) ans Apps(id) foreign keys is having a uniwue constraint also. Each relation is having delete cascade option, so once a parent object is deleted all its children will be deleted.


### API Design

API elements are created only for the READ operation of Apps and UserApps model. The yamil file is present in ‘Open_API’ folder along with the project code.

### Architecture and Features

The entire project is organised as a proper full stack structure. All the HTML files are stored inside ‘templates’ folder. The Python codes are separated into different modules according to their purposes and are stored inside corresponding folders. The external packages need to be installed are listed in the ‘requirements.txt’ file. The project can be executed buy running “local_setup.sh” file followed by “local_run.sh” file in a Linux based command prompt.

On running the app will be accessible only by registering and logging in. Once a user is logged in user will be taken to their home page. Where they can view all the list of apps available and their points. The apps are separated as completed and pending. There are options for earn more points by adding screenshots of pending apps.

Only an admin can add new apps to the list. A user with superuser status is considered as admin. When such an user is loged in he will be taken to the Admin view, where he can view all the lists and can add new ones too

 Following are the features available
*	UI with Vue & Vue Components
*	Apps list using fetch API
*	Chart showing summary of task completion


### Local Development Run
> #### Run 'local_setup.sh' in a linux shell
> - This will create a virtual environment folder '.env' if not present already
> - Then it will activate the virtual environment and install all packages listed in "requirements.txt"
>
> #### Run 'local_run.sh'
> - This will activate the virtual environment
> - Then will run the 'main.py'
> - Now you can view the app in a web browser with the link [http://localhost:8000]
>
>
>> ### If not working
>> - If you are not using a Linux environment try to replicate the scenerios in 'local_setup.sh' and 'local_run.sh' files, manually with appropriate codes.


### Folder Structure

- `adminface` is where python modules related to admin view is stored
- `apis` is where python modules for api implementation is stored
- `ngl_project` is where all the core python modules including settings.py, wsgi.py, asgi.py, urls.py etc. are stored
- `static` is the static directory registerred with the project. Apart from all CSS and JS files. All images and other static files will stored here
- `templates` is where all the html templates are stored
- `userface` is where python modules related to user view is stored



```
.
├── adminface
│   ├── admin.py
│   ├── apps.py
│   ├── __init__.py
│   ├── migrations
│   │   ├── 0001_initial.py
│   │   ├── 0002_alter_apps_name.py
│   │   ├── 0003_alter_apps_logo.py
│   │   ├── __init__.py
│   │   └── __pycache__
│   │       ├── 
│   │       ├── 
│   ├── models.py
│   ├── __pycache__
│   │   ├── 
│   │   ├── 
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── apis
│   ├── apis.py
│   ├── __init__.py
│   ├── __pycache__
│   │   ├── 
│   │   ├── 
│   ├── serializers.py
│   └── urls.py
├── db.sqlite3
├── local_run.sh
├── local_setup.sh
├── manage.py
├── ngl_project
│   ├── asgi.py
│   ├── forms.py
│   ├── __init__.py
│   ├── __pycache__
│   │   ├── 
│   │   ├── 
│   ├── settings.py
│   ├── urls.py
│   ├── views.py
│   └── wsgi.py
├── Open_API
│   └── openapi.yaml
├── README.md
├── requirements.txt
├── static
│   ├── admin.js
│   ├── logos
│   │   ├── 
│   │   ├── 
│   ├── screenshots
│   │   ├── 
│   │   ├── 
│   ├── style.css
│   └── user.js
├── templates
│   ├── addApp.html
│   ├── addUserApp.html
│   ├── admin.html
│   ├── base.html
│   ├── index.html
│   ├── registration
│   │   ├── form.html
│   │   ├── logged_out.html
│   │   ├── login.html
│   │   └── register.html
│   ├── sidebar.html
│   └── user.html
└── userface
    ├── admin.py
    ├── apps.py
    ├── forms.py
    ├── __init__.py
    ├── migrations
    │   ├── 0001_initial.py
    │   ├── 0002_alter_userapps_unique_together.py
    │   ├── __init__.py
    │   └── __pycache__
    │       ├── 
    │       ├── 
    ├── models.py
    ├── __pycache__
    │   ├── 
    │   ├── 
    ├── tests.py
    ├── urls.py
    └── views.py

```
117 directories, 232 files




## Problem Set 3

#### Write and share a small note about your choice of system to schedule periodic tasks (such as downloading a list of ISINs every 24 hours). Why did you choose it? Is it reliable enough; Or will it scale? If not, what are the problems with it? And, what else would you recommend to fix this problem at scale in production?

`
"Currently, I'm leaning towards leveraging the Celery task queue in tandem with Redis as the message broker. Admittedly, my familiarity with this combination is a significant factor in this choice. While it might not be the most robust rationale, I believe in starting with what I know. What adds to Celery's appeal is its language-agnostic protocol, allowing implementation in any language, and its interoperability with other languages through webhooks. Given our current limited understanding of the system's intricacies and requirements, these features make Celery a pragmatic initial choice.

However, it's essential to acknowledge that Celery has faced challenges in terms of support and maintenance, potentially affecting its relevance and freshness. Some insights suggest that, especially for large-scale applications, transitioning from Redis to RabbitMQ could enhance performance. As part of my ongoing research, Apache Airflow has emerged as a promising alternative. Further testing is necessary before drawing any definitive conclusions on its suitability for our specific needs."
`

#### In what circumstances would you use Flask instead of Django and vice versa?

##### Flask
> `Pros`
> - Lightweight and minimalist approach.
> - Ideal for small to medium apps.
> - Suitable for RESTful APIs and microservices.
> - If you want a lot of flexibility with choice of external packages used etc.
>
> `Cons`
> - Lightwight and minimalist approach makes it hard for developing large-scale applications.
> - There are only few in built functionality. So we have to import a lot of other packages, in turm making it heavy for large apps.

##### Django
> `Pros`
> - Suitable for large scale projects.
> - Rapid developement is possible.
> - Have a lot of inbuilt functanality, reducing import of external dependencies.
>
> `Cons`
> - Not suitable for smaller applications with minimal functanality.
> - As most features are inbuilt it is waste of resource to import a better performing dependent libraries.


>>  Project Repo Link :- <https://github.com/LokeshSingh2022/Django_NGL_Assessment>
