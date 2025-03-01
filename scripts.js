// Initialize AOS (Animate on Scroll) library for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false
    });

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("nav-open");
      menuToggle.classList.toggle("open");
    });


  });
  

//   document.addEventListener("DOMContentLoaded", function () {
   
//   });