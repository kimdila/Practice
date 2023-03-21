import 'src/pages/root.css';
import './info.css';

import {
    projects,
} from 'src/data';
import View from 'src/view';

View.bootstrap(() => init(projects));

function init(projects) {
    const path = window.location.pathname;
    const projectName = path.split('/').at(-1);

    const InfoView = new View('project-content');
    const projectHTML = createProjectHTML(projects[projectName]);

    InfoView.render(projectHTML);
}

function createProjectHTML(project) {
    const descriptionElements = project.description
        .map(value => `<p class="text">${value}</p>`)
        .join('');

    const processDescriptionElements = project.processDescription
        .map(value => `<p>${value}</p>`)
        .join('');
 
    return `
        <section class="support"> 
            <h1>${project.header}</h1>
            <div class="stack_info">
                <strong>Stack:</strong>
                ${project.stack}
            </div>
            ${descriptionElements}
        </section>
        <section class="screen">
            <img class="screen" src="${project.images.large}" alt="${project.name}"/>
        </section>
        <section class="process">
            <h2>Work Highlights</h2>
            ${processDescriptionElements}
        </section>
  `;
        
}

