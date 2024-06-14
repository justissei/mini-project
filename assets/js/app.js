// Custom JavaScript for Ayam Bakar Beller

document.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener("hide.bs.dropdown", function () {
            var dropdownMenu = dropdown.querySelector(".dropdown-menu");
            dropdownMenu.style.transition = "opacity 0.3s, transform 0.3s";
            dropdownMenu.style.opacity = "0";
            dropdownMenu.style.transform = "translateY(-10px)";
        });

        dropdown.addEventListener("hidden.bs.dropdown", function () {
            var dropdownMenu = dropdown.querySelector(".dropdown-menu");
            dropdownMenu.style.transition = "";
            dropdownMenu.style.opacity = "";
            dropdownMenu.style.transform = "";
        });
    });
});
