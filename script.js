// Wait for the page to load
document.addEventListener("DOMContentLoaded", () => {

  // BUTTON 1: Change background color
  const colorBtn = document.getElementById("colorBtn");

  colorBtn.addEventListener("click", () => {
    // Random pastel color generator
    const randomColor = `hsl(${Math.random() * 360}, 80%, 85%)`;
    document.body.style.background = randomColor;
  });

  // BUTTON 2: Dark Mode Toggle
  const darkModeBtn = document.getElementById("darkModeBtn");

  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

});

