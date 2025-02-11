document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
// document.addEventListener("DOMContentLoaded", function () {
//   const navbar = document.querySelector("nav");
//   const navHeight = navbar.offsetHeight; // Get navbar height
//   const links = document.querySelectorAll("nav a[href^='#']");

//   links.forEach((link) => {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();
//       const targetId = this.getAttribute("href");
//       const targetElement = document.querySelector(targetId);

//       if (targetElement) {
//         const targetPosition = targetElement.offsetTop - navHeight - 20; // Offset by navbar height + extra space

//         window.scrollTo({
//           top: targetPosition,
//           behavior: "smooth",
//         });
//       }
//     });
//   });
// });
