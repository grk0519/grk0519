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

      // Conditional Visit Link
      const visitLink = project.link && project.link !== "#" ? `
        <p><a href="${project.link}" target="_blank">Visit</a></p>
      ` : '';

      // Conditional Source Code Badge
      const sourceBadge = project.github && project.github !== "#" ? `
        <a href="${project.github}" target="_blank" class="project-source-badge">Source Code</a>
      ` : '';

      tile.innerHTML = `
        <div class="badge-container">
          <div class="project-date-badge">${dateText}</div>
          ${sourceBadge}
        </div>
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        ${visitLink}
        <span>${tagsText}</span>
      `;

      container.appendChild(tile);
    });
  });
