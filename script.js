document.addEventListener("DOMContentLoaded", () => {

  const colorBtn = document.getElementById("colorBtn");
  const darkModeBtn = document.getElementById("darkModeBtn");

  colorBtn.addEventListener("click", () => {
    const randomColor = `hsl(${Math.random() * 360}, 80%, 85%)`;
    document.body.style.background = randomColor;
  });

  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

});
