/* Skillbar */
new Vue({
    el: '#skills-app',
    data() {
        return {
            skills: [
                { name: 'Tillmötesgående', level: 90, currentLevel: 0, displayedLevel: 0 },
                { name: 'Samarbetsvillig', level: 95, currentLevel: 0, displayedLevel: 0 },
                { name: 'Nogrann', level: 85, currentLevel: 0, displayedLevel: 0 },
                { name: 'Strukturerad', level: 85, currentLevel: 0, displayedLevel: 0 }
            ]
        };
    },
    mounted() {
        this.animateSkills();
    },
    methods: {
        animateSkills() {
            this.skills.forEach(skill => {
                let start = 0;
                const end = skill.level;
                const duration = 2000; 
                const increment = Math.ceil(end / (duration / 60)); 

                const animate = () => {
                    start += increment;
                    skill.currentLevel = Math.min(start, end); 
                    skill.displayedLevel = Math.min(start, end); 

                    if (start < end) {
                        requestAnimationFrame(animate); 
                    }
                };
                
                requestAnimationFrame(animate); 
            });
        }
    }
});


/* Bildspel */
Vue.component('carousel', VueCarousel.Carousel);
Vue.component('slide', VueCarousel.Slide);

new Vue({
    el: '#carousel-app',
    data() {
        return {
            images: [
                'heddaP1.png',  
                'heddaP2.png',
                'heddaP3.png',
                'heddaP4.png'
            ]
        };
    }
});

