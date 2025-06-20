/*
// script.js
const today = new Date();
const options = { year: 'numeric', month: 'short', day: 'numeric' };
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('date-display').textContent = today.toLocaleDateString(undefined, options);
});
*/
document.addEventListener("DOMContentLoaded", function () {
  // Show today’s date
  const today = new Date();
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const dateDisplay = document.getElementById('date-display');
  if (dateDisplay) {
    dateDisplay.textContent = today.toLocaleDateString(undefined, options);
  }

  // Handle resume download click
  const resumeLink = document.getElementById('resume-link');
  if (resumeLink) {
    resumeLink.addEventListener('click', function () {
      setTimeout(() => {
        alert("✅ Thank you for downloading my resume!\n\nIf it sparked your interest, I’d love to hear your thoughts or answer any questions you may have.");
      }, 500); // slight delay for smoother feel
    });
  }
});

