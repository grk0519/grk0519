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
        // Show alert after clicking the download link 
        alert("✅ Thank you for taking the time to review my resume. I'm excited about the opportunity to contribute and would be happy to connect for a deeper conversation.");
      }, 500); // slight delay for smoother feel
    });
  }
});

