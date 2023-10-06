// Automatically adjust slide width based on the number of slides
window.addEventListener("DOMContentLoaded", function() {
    const slideTrack = document.querySelector(".slide2-track");
    const slides = document.querySelectorAll(".slide2");
    const slideWidth = slideTrack.offsetWidth / slides.length;
    
    slides.forEach(function(slide) {
      slide.style.width = slideWidth + "px";
    });
    slideTrack.style.animationIterationCount = "1";

  });
  
