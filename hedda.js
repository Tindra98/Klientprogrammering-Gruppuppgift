/* Hämta projekten i heddasProjekt.json */
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});

function loadProjects() {
    fetch('heddasProjekt.json')
        .then(response => response.json())
        .then(data => {
            const projectContainer = document.getElementById('project-container');
            
            projectContainer.innerHTML = '';

            data.forEach((project) => {
                const projectDiv = document.createElement('div');
                projectDiv.classList.add('project-box');
                
                const projectTitle = document.createElement('h2');
                projectTitle.textContent = project.name;
                projectDiv.appendChild(projectTitle);
                
                const projectDescription = document.createElement('p');
                projectDescription.textContent = project.description;
                projectDiv.appendChild(projectDescription);
                
                projectContainer.appendChild(projectDiv);
            });
        })
        .catch(error => console.error('Fel vid laddning av projekt:', error));
}


