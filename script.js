let toggled = false;
  toggleButton.addEventListener("click", () => {
    if (toggled) {
      gallery.src = "./assets/image1.jpg"; 
      toggled = false;
    } else {
      gallery.src = "./assets/image-does-not-exist.jpg"; 
      toggled = true;
    }
  });

  console.log("Page loaded!");
});

