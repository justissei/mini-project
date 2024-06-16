// JavaScript untuk animasi teks pada jumbotron saat scroll
document.addEventListener("DOMContentLoaded", function() {
  var jumbotron = document.querySelector(".jumbotron-custom");

  function fadeInOnScroll() {
    var distanceFromTop = jumbotron.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (distanceFromTop < windowHeight - 100) {
      jumbotron.classList.add("animate-fade-in");
    } else {
      jumbotron.classList.remove("animate-fade-in");
    }
  }

  fadeInOnScroll();

  window.addEventListener("scroll", function() {
    fadeInOnScroll();
  });
});