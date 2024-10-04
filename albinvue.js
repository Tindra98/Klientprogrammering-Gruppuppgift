// Skapar en ny Vue-applikation
const app = Vue.createApp({ 
    // Definierar data som applikationen kommer att använda
    data() {
        return {
            projects: [] // Här lagras projektens data som kommer att hämtas från JSON-fil
        };
    },
    
    created() {
        // Anropar en get-förfrågan för att hämta data från albin.json
        axios.get('albin.json')
            .then((response) => {
                
                this.projects = response.data;
            })
            .catch(error => {
                // Felmdelenade 
                console.error("Error fetching data:", error);
            });
    }
});

// Monterar Vue-applikationen på id 'app' i html
app.mount('#app');

