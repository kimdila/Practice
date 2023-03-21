
import { projects, list } from "./data";
window.addEventListener("DOMContentLoaded", () => init(projects, list));

function init(projects, list) {
  const projectListWrapper = document.getElementById("project-list");
  const projectListHTML = prepareProjectList(projects, list);
  console.log("initcall");
  projectListWrapper.insertAdjacentHTML("afterbegin", projectListHTML);
}

function prepareProjectList(projects, list) {
  return list.reduce((accum, projectName) => {
    const project = projects[projectName];
    const html = createProjectHTML(project);

    return accum + html;
  }, "");
}

function createProjectHTML(project) {
  return `
        <div class="case-study">
          <a
            href="${project.href}"
            class="case-study-thumbnail"
            id="${project.color}"
          >
            <img
              class="case-study-logo"
              src="${project.logo}"
              alt="${project.name} Logo"
            />
            <img 
              src="${project.images.large}"
              alt="${project.name}"
            />
          </a>
          <div>
            <p class="description">
              ${project.title}
            </p>
            <p class="location"><a href="#">${project.url}</a> ${project.address}</p>
          </div>
        </div>
    `;
}
