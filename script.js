let toggled = false;
  toggleButton.addEventListener("click", () => {
    if (toggled) {
      gallery.src = "./assets/image1.jpg"; 
      toggled = false;
    } else {
      gallery.src = "https://github.com/HCHsanjacHamilton/Adding-Interaction-Week-13/blob/main/assets/strawberry_PNG2631.png?raw=true"; 
      toggled = true;
    }
  });

  console.log("Page loaded!");
});

