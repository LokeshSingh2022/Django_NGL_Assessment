const store = new Vuex.Store({
    state: {
        username: "", // store current username by created hook
        userapps: [], // Array store details of all list of this user in database by created hook
        balapps: [] // Array store details of all list of this user in database by created hook
        
    },
    mutations: {
        setUsername(state, username){
            state.username = String(username)
        },
        setUserApps(state, userapps){
            state.userapps = Object(userapps)
        },
        setBalApps(state, balapps){
            state.balapps = Object(balapps)
        }
    },
    getters: {
        getUsername: function(state) {
            return state.username
        },
        getUserApps: function(state) {
            return state.userapps
        },
        getBalApps: function(state) {
            return state.balapps
        }
    }
});


const About = Vue.component('about', {
    template: `
    <div>
    <h2><u>Welcome to the Evaluation Project!</u></h2>
    <p>
        This project has been created as part of the recruitment process for <b>NextGrowth Labs</b>. 
        Our goal is to build a powerful Django app that allows administrators to add new apps with details such as URL, category, subcategory, logo, and points for download. 
        Users can explore the available apps, follow links, earn points by submitting screenshots of downloaded apps, and view their earned points.
    </p>

    <h3>Technologies Used</h3>
    <ul>
        <li><b>Django:</b> The Django framework was chosen for its simplicity and built-in essential extensions.</li>
        <li><b>Django Rest Framework:</b> Utilized for implementing APIs, ensuring seamless communication between the frontend and backend.</li>
        <li><b>Pillow:</b> Employed for image processing, providing efficient handling of images in the application.</li>
        <li>
            <b>Vue.js:</b> Vue.js powers the frontend, serving as a robust JavaScript framework for building a dynamic user interface. 
            Within Vue.js, Vuex is used for state management, Vue Router facilitates single-page application functionality, 
            and Chart.js enhances data visualization through dynamic charts.
        </li>
        <li><b>SQLite:</b> Selected as the database to manage data efficiently.</li>
    </ul>

    <h3>Explore and Experience</h3>
    <p>
        Take a journey through the app, explore various features, and immerse yourself in a seamless user experience. 
        Don't forget to provide valuable feedback, as I'm continually striving to join your Organization.
    </p>

    <a href="">Click here to view the Code of the project</a>
    <a href="">Made with ❤️ by Lokesh Singh Rajwar</a>
    
</div>
`
})

const Summary = Vue.component('graph', {
    template: `
    <div>
        <h3> These pie charts shows the current status of your account</h3>
        <p>They are interactive charts, you can select only the options you want</p>
        <div class="row">
            <div class="col-md-6 border">
                <canvas id="0"></canvas>
            </div>
            <div class="col-md-6 border">
                <canvas id="1"></canvas>
            </div>
            
        </div>
    </div>`,

    data: function() {
        return {
            summary: {}
        }
    },

    computed: {
        numberOfUserList: function() {
            return this.$store.state.userapps.length;
        },
        numberOfBalList: function() {
            return this.$store.state.balapps.length;
        },
        totalList: function() {
            return this.numberOfBalList+this.numberOfUserList
        },
        sumOfBalPoints: function() {
            return this.$store.state.balapps.reduce((total, item) => total + item.points, 0);
        },
        sumOfPoints: function() {
            return this.$store.state.userapps.reduce((sum, item) => sum + item.app.points, 0);
        },
        totalPoints: function() {
            return this.sumOfBalPoints+this.sumOfPoints
        }
    },


    async mounted() {  
        const ctx0 = document.getElementById('0');
        const ctx1 = document.getElementById('1');
  
        try{
            new Chart(ctx0, {
            type: 'pie',
            data: {
                labels: [
                    'Number of Installed apps',
                    'Number of pending apps'
                ],
                datasets: [{
                    label: 'Number of apps',
                    data: [this.numberOfUserList, this.numberOfBalList],
                    backgroundColor: [
                        'rgb(34, 139, 34)',
                        'rgb(153, 102, 51)'
                    ],
                    hoverOffset: 20
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Number of apps'
                    }
                }
            }
        });
    }catch(err){
        console.log(err)
    }

        try{
            new Chart(ctx1, {
            type: 'pie',
            data: {
                labels: [
                    'Points Earned',
                    'Points Pending'
                ],
                datasets: [{
                    label: 'Points',
                    data: [this.sumOfPoints, this.sumOfBalPoints],
                    backgroundColor: [
                        'rgb(0, 255, 0)',
                        'rgb(153, 102, 51)'
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Points'
                    }
                }
            }
        });
    }catch(error){
        console.log(error)
    }


        
    }
})

const Dashboard = Vue.component('user-apps', {
    template: `
    <div class="row" id="dash_inside_row">

        <div class="col-md-6 border">
            <h3>You have earned {{sumOfPoints}} points</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category<br>Subcategory</th>
                        <th>Points<br>Earned</th>
                        <th>Logo</th>
                        <th>Added Date</th>
                        <th>Proof</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in userapps" :key="item.app.id">
                        <td>{{ item.app.name }}</td>
                        <td>{{ item.app.category }}/<br>{{ item.app.subcategory }}</td>
                        <td>{{ item.app.points }}</td>
                        <td><img :src="item.app.logo" alt="Logo" width="50" height="50"></td>
                        <td>{{ item.date_of_addition }}</td>
                        <td><img :src="item.screenshot" alt="Screenshot" width="100" height="100"></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="col-md-6 border">
            <h3> These are Pending Apps worth {{sumOfBalPoints}} points. Explore these too...!</h3>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Link</th>
                    <th>Category/<br>Subcategory</th>
                    <th>Points</th>
                    <th>Logo</th>
                    <th>Earn point</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="app in balapps" :key="app.id">
                    <td>{{ app.name }}</td>
                    <td><a :href="app.link">{{ app.link }}</a></td>
                    <td>{{ app.category }}/<br>{{ app.subcategory }}</td>
                    <td>{{ app.points }}</td>
                    <td><img :src="app.logo" :alt="app.name" width="50" height="50" /></td>
                    <td><button title="Add User App" class="btn btn-success" v-on:click="redirectToForm(app.name)">
                        Earn<i class="bi bi-cash-coin"></i>
                        </button></td>
                </tr>
                </tbody>
            </table>
            

        </div>
    </div>
    `,




    data: function() {
        return {
            username: "", // store current user username by mounted hook
            
        }
    },


    computed: {
        number_of_list: function() {
            return this.$store.state.userapps.length;
        },
        sumOfBalPoints: function() {
            return this.$store.state.balapps.reduce((total, item) => total + item.points, 0);
        },
        sumOfPoints: function() {
            return this.$store.state.userapps.reduce((sum, item) => sum + item.app.points, 0);
        },
        userapps: function() {
            return store.getters.getUserApps;
        },
        balapps: function() {
            return store.getters.getBalApps;
        }
    },


    async beforeMount() {
        this.username = store.getters.getUsername;
        
    },





    methods: {
        redirectToForm(app) {
            let url = 'http://127.0.0.1:8000/app/user/app/'+this.username+'/add/'+app
            window.location.href = url;
        }
        
    }
})

const routes = [
    {
        path: '/',
        component: Dashboard
    },{
        path: '/summary',
        component: Summary
    },{
        path: '/about',
        component: About
    }
];

const router = new VueRouter({
    routes // short for `routes: routes`
})



Vue.config.devtools = true

var app = new Vue({
    el:"#userview",
    router: router,
    store: store,

    //delimeters: ['${','}'],
    data() {
        return {
            msg: "Testing Vue.js",
            fetchdate: {}
        }
    },


    async created() { //fetch data on login and save to vuex store
        this.$store.commit('setUsername', document.getElementById('username').getAttribute('data-value')); // ascessing login user email from sidebar.html
        
        let url = "http://localhost:8000/api/User/"+this.$store.state.username+"/apps/"
        
        await fetch(url, {headers: {'Content-Type': 'application/json'} } ) //Fetching current user details from database
        .then(response => response.json())
        .then(data => this.$store.commit('setUserApps', data));

        url = "http://localhost:8000/api/User/"+this.$store.state.username+"/unregistered-apps/"
        await fetch(url, {headers: {'Content-Type': 'application/json'} } ) //Fetching current user details from database
        .then(response => response.json())
        .then(data => this.$store.commit('setBalApps', data));
        
    }


});