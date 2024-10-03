// Vänta tills hela DOM:en är laddad innan koden körs
document.addEventListener('DOMContentLoaded', () => {
    // Endast kör koden när sidan laddas första gången
    loadProjects();
});

// Funktion för att ladda och visa projekt från JSON-fil
function loadProjects() {
    fetch('heddasProjekt.json')
        .then(response => response.json())
        .then(data => {
            const projectContainer = document.getElementById('project-container');
            
            // Rensa tidigare innehåll för att undvika dubbletter
            projectContainer.innerHTML = '';

            // Loopar igenom JSON-data och skapar element för varje projekt
            data.forEach((project) => {
                const projectDiv = document.createElement('div');
                projectDiv.classList.add('project-box');
                
                // Skapa och lägg till titel för projektet
                const projectTitle = document.createElement('h2');
                projectTitle.textContent = project.name;
                projectDiv.appendChild(projectTitle);
                
                // Skapa och lägg till beskrivning för projektet
                const projectDescription = document.createElement('p');
                projectDescription.textContent = project.description;
                projectDiv.appendChild(projectDescription);
                
                // Lägg till projektboxen i container-elementet
                projectContainer.appendChild(projectDiv);
            });
        })
        .catch(error => console.error('Fel vid laddning av projekt:', error));
}


