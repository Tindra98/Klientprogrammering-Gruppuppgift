const app = Vue.createApp({
    data() {
        return {
            projects: []
        }
    },
    created() {
        axios.get('tindraNotes.json')
            .then((response) => {
                this.projects = response.data.projects; // Assign the projects array
            })
    }
});

app.mount('#app');