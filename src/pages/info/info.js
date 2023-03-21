
import { projects, list } from "./data";



window.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const projectName = path.split("/")
    .pop()
    .replace(/-/g, '_');
  init(projects, list, projectName)
});
function init(projects, list, projectName) {
  const projectContentWrapper = document.getElementById("project-content");
  const projectHTML = prepareProjectList(projects, projectName);
  console.log("initcall");
  projectContentWrapper.insertAdjacentHTML("afterbegin", projectHTML);
}
function prepareProjectList(projects, projectName) {
    const project = projects[projectName];
    const html = createProjectHTML(project);

    return html;
}
function createProjectHTML(project) {
  const descriptionElements = project.description
    .map(value => `<p class="text">${value}</p>`)
    .join("");

  const processDescriptionElements = project.processDescription
    .map(value => `<p>${value}</p>`)
    .join("");
 
  return `
    <section class="support"> 
    <h1>${project.header}</h1>
      <div class="stack_info">
      <strong>Stack:</strong>
      ${project.stack}</div>
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
console.log(path);

