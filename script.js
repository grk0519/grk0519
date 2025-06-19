// script.js
const today = new Date();
const options = { year: 'numeric', month: 'short', day: 'numeric' };
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('date-display').textContent = today.toLocaleDateString(undefined, options);
});
