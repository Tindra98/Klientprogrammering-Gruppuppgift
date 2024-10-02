
document.querySelectorAll(".carousel").forEach(carousel => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml =  Array.from (items,() =>{
    return `<span class="carousel__button"></span>`;;
  });
  
  carousel.insertAdjacentHTML("beforeend", 
     `<div class="carousel__nav">
    ${ buttonsHtml.join("") }
    </div>` 
    );
   const buttons = carousel.querySelectorAll(".carousel__button");

    buttons.forEach((button, i) =>{
       button.addEventListener("click", () =>{
        items.forEach(item=> item.classList.remove("carousel__item--selected"))
        buttons.forEach(button => button.classList.remove("carousel__button--selected"));

        items[i].classList.add("carousel__item--selected");
        button.classList.add("carousel__button--selected");
       });
    });

    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
    
  });

  new Vue({
    el: '#app',
    data: {
      projects: [], // Här kommer de hämtade projekten lagras
      filter: ''    
    },
    computed: {
      filteredProjects() {
        // Filtrera projekten baserat på filtersträngen
        return this.projects.filter(project => {
          const filterText = this.filter.toLowerCase();
          return project.title.toLowerCase().includes(filterText) ||
                 project.client.toLowerCase().includes(filterText) ||
                 project.year.toLowerCase().includes(filterText);
        });
      }
    },
    methods: {
      // Hämta projekten från JSON-filen
      loadProjects() {
          fetch('projectsemma.json')
              .then(response => response.json())
              .then(data => {
                  console.log('Fetched JSON data:',data);
                  this.projects = data;  
              })
              .catch(error => console.error('Error fetching JSON:', error));
      },
      
      checkForChange() {
          
          console.log("Filtrera: ", this.filter);
      }
    },
    
    created() {
      this.loadProjects();
    }
    });
    
    