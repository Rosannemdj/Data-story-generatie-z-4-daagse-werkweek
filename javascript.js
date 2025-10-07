const scrollBtn = document.getElementById("scrollTopBtn");

  // Wanneer erop wordt geklikt → zacht scrollen naar boven
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
scrollBtn.style.display = "none";