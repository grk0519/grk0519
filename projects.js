// projects.js
fetch("projects.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projects-container");
    data.forEach(project => {
      const tile = document.createElement("div");
      tile.className = "project-tile";

      tile.innerHTML = `
        <div class="project-date-badge">${formatDate(project.date)}</div>
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">Visit</a>
        <p><span>${project.tags.join(', ')}</span></p>
      `;

      container.appendChild(tile);
    });
  });

// Helper to format date as "Jul 12, 2025"
function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString(undefined, options);
}
