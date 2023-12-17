Vue.component('app-detail', {
    template: `
    <div>
        <h3> These are existing Apps. </h3>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Link</th>
                <th>Category</th>
                <th>Subcategory</th>
                <th>Points</th>
                <th>Logo</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="app in apps" :key="app.id">
                <td>{{ app.name }}</td>
                <td><a :href="app.link">{{ app.link }}</a></td>
                <td>{{ app.category }}</td>
                <td>{{ app.subcategory }}</td>
                <td>{{ app.points }}</td>
                <td><img :src="app.logo" :alt="app.name" width="50" height="50" /></td>
            </tr>
            </tbody>
        </table>
    </div>
        `,
    data: function () {
        return {
            apps: [], // store current user object by created hook
        }
    },


    async created() {
        url = "http://localhost:8000/api/Apps/" 
        await fetch(url, { headers: { 'Content-Type': 'application/json' } }) //Fetching all apps available in the website
            .then(response => response.json())
            .then(data => this.apps = data);
    },

    
})




var app = new Vue({
    el: "#applist",
});