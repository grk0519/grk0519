function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString(undefined, options);
}

function getTodayDate() {
  return new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
}

fetch("projects.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projects-container");
    data.forEach(project => {
      const tile = document.createElement("div");
      tile.className = "project-tile";

      const dateText = formatDate(project.date || getTodayDate());
      const tagsText = project.tags ? project.tags.join(', ') : '';

      tile.innerHTML = `
        <div class="project-date-badge">${dateText}</div>
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <p><a href="${project.link}" target="_blank">Visit</a></p>
        <span>${tagsText}</span>
      `;
      
      container.appendChild(tile);
    });
  });
