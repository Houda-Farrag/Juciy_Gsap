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
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("nav");
  const navHeight = navbar.offsetHeight; // Get navbar height
  const links = document.querySelectorAll("nav a[href^='#']");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const targetPosition = targetElement.offsetTop - navHeight - 20; // Offset by navbar height + extra space

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

gsap.registerPlugin(ScrollTrigger);

// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".about",
//       start: "0% 95%",
//       end: "80% 60%",
//       scrub: true,
//     },
//   })
//   .to(
//     "#can",
//     {
//       top: "150%",
//       left: "80%",
//       scale: ".8",
//       rotate: "-30deg",
//       duration: 1.5,
//     },
//     "can"
//   )
//   .to(
//     "#leaf",
//     {
//       top: "170%",
//       left: "90%",
//       scale: ".8",
//       rotate: "0deg",
//       zIndex: 5,
//       duration: 1.5,
//     },
//     "can"
//   )
//   .to(
//     "#black-berry1",
//     {
//       top: "120%",
//       left: "10%",
//       scale: ".5",
//       rotate: "90deg",
//       duration: 1.5,
//     },
//     "can"
//   )
//   .to(
//     "#black-berry2",
//     {
//       top: "140%",
//       left: "85%",
//       scale: ".8",
//       rotate: "90deg",
//       duration: 1.5,
//     },
//     "can"
//   )
//   .to(
//     "#black-berry3",
//     {
//       top: "170%",
//       left: "76%",
//       scale: ".4",
//       rotate: "-30deg",
//       duration: 1.5,
//     },
//     "can"
//   );
// Function to handle responsive GSAP animations
function setupAnimations() {
  const isMobile = window.innerWidth <= 768; // Check if the screen is mobile-sized

  // Define animation properties based on screen size
  const canAnimation = {
    top: isMobile ? "120%" : "150%",
    left: isMobile ? "60%" : "80%",
    scale: isMobile ? "0.6" : "0.8",
    rotate: "-30deg",
    duration: 1.5,
  };

  const leafAnimation = {
    top: isMobile ? "140%" : "170%",
    left: isMobile ? "70%" : "90%",
    scale: isMobile ? "0.6" : "0.8",
    rotate: "0deg",
    zIndex: 5,
    duration: 1.5,
  };

  const blackBerry1Animation = {
    top: isMobile ? "100%" : "120%",
    left: isMobile ? "5%" : "10%",
    scale: isMobile ? "0.4" : "0.5",
    rotate: "90deg",
    duration: 1.5,
  };

  const blackBerry2Animation = {
    top: isMobile ? "120%" : "140%",
    left: isMobile ? "70%" : "85%",
    scale: isMobile ? "0.6" : "0.8",
    rotate: "90deg",
    duration: 1.5,
  };

  const blackBerry3Animation = {
    top: isMobile ? "140%" : "170%",
    left: isMobile ? "60%" : "76%",
    scale: isMobile ? "0.3" : "0.4",
    rotate: "-30deg",
    duration: 1.5,
  };

  // GSAP Timeline
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "0% 95%",
        end: "80% 60%",
        scrub: true,
      },
    })
    .to("#can", canAnimation, "can")
    .to("#leaf", leafAnimation, "can")
    .to("#black-berry1", blackBerry1Animation, "can")
    .to("#black-berry2", blackBerry2Animation, "can")
    .to("#black-berry3", blackBerry3Animation, "can");
}

// Call the function to set up animations

// Update animations on window resize

// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".stand",
//       start: "20% 95%",
//       end: "80% 60%",
//       scrub: true,
//     },
//   })
//   .to(
//     "#can",
//     {
//       top: "250%",
//       left: "50%",
//       scale: 1,
//       rotate: "360deg",
//       duration: 1.5,
//       ease: "power2.out",
//     },
//     "can"
//   )
//   .to(
//     "#can",
//     {
//       scale: 1.1,

//       duration: 1.2,
//       ease: "power2.out",
//       zIndex: 10,
//     },
//     "+=0.5"
//   )
//   .to(
//     "#black-berry1",
//     {
//       top: "230%",
//       left: "20%",
//       scale: 0.9,
//       rotate: "80deg",
//       duration: 1.5,
//       ease: "none",
//       zIndex: -1,
//     },
//     "can"
//   )
//   .to(
//     "#black-berry2",
//     {
//       top: "230%",
//       left: "80%",
//       scale: 0.9,
//       rotate: "80deg",
//       duration: 1.5,
//       ease: "none",
//       zIndex: -1,
//     },
//     "can"
//   )
//   .to(
//     "#black-berry3",
//     {
//       top: "250%",
//       left: "20%",
//       scale: 0.9,
//       rotate: "80deg",
//       duration: 1.5,
//       ease: "none",
//       zIndex: -1,
//     },
//     "can"
//   )
//   .to(
//     "#stand img",
//     {
//       scale: 1.2,
//       duration: 1.5,
//       ease: "elastic.out(1, 0.5)",
//     },
//     "-=1"
//   );
function setupStandAnimations() {
  const isMobile = window.innerWidth <= 768; // Check if the screen is mobile-sized

  // Define animation properties based on screen size
  const canAnimation = {
    top: isMobile ? "250%" : "250%",
    left: isMobile ? "50%" : "50%",
    scale: isMobile ? 0.8 : 1,
    rotate: "360deg",
    duration: 1.5,
    ease: "power2.out",
  };

  const blackBerry1Animation = {
    top: isMobile ? "230%" : "230%",
    left: isMobile ? "15%" : "20%",
    scale: isMobile ? 0.7 : 1,
    rotate: "80deg",
    duration: 1.5,
    ease: "none",
    zIndex: -1,
  };

  const blackBerry2Animation = {
    top: isMobile ? "240%" : "230%",
    left: isMobile ? "70%" : "80%",
    scale: isMobile ? 0.7 : 0.9,
    rotate: "80deg",
    duration: 1.5,
    ease: "none",
    zIndex: -1,
  };

  const blackBerry3Animation = {
    top: isMobile ? "230%" : "250%",
    left: isMobile ? "60%" : "20%",
    scale: isMobile ? 0.7 : 0.9,
    rotate: "80deg",
    duration: 1.5,
    ease: "none",
    zIndex: -1,
  };

  const standImageAnimation = {
    scale: isMobile ? 1 : 1,
    duration: 1.5,
    ease: "elastic.out(1, 0.5)",
  };

  // GSAP Timeline
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".stand",
        start: "20% 95%",
        end: "80% 60%",
        scrub: true,
      },
    })
    .to("#can", canAnimation, "can")
    .to(
      "#can",
      {
        scale: isMobile ? 1 : 1.1,
        duration: 1.2,
        ease: "power2.out",
        zIndex: 10,
      },
      "+=0.5"
    )
    .to("#black-berry1", blackBerry1Animation, "can")
    .to("#black-berry2", blackBerry2Animation, "can")
    .to("#black-berry3", blackBerry3Animation, "can")
    .to("#stand img", standImageAnimation, "-=1");
}

// Call the function to set up animations
setupAnimations();
setupStandAnimations();

// Update animations on window resize
// window.addEventListener("resize", () => {
//   gsap.killTweensOf(["#can", "#black-berry1", "#black-berry2", "#black-berry3", "#stand img"]); // Kill existing animations
//   setupAnimations(); // Re-run the setup function
//   setupStandAnimations(); // Re-run the setup function
// });

window.addEventListener("resize", () => {
  gsap.killTweensOf([
    "#can",
    "#leaf",
    "#black-berry1",
    "#black-berry2",
    "#black-berry3",
  ]); // Kill existing animations

});
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
