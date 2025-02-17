// DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all functionality
  initNavbarScroll();
  initSmoothScroll();
  initAnimations();
  initHamburgerMenu();
});

// Navbar Scroll Effect
function initNavbarScroll() {
  const navbar = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  const navbar = document.querySelector("nav");
  const navHeight = navbar.offsetHeight; // Get navbar height
  const links = document.querySelectorAll("nav a[href^='#']");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const targetPosition = targetElement.offsetTop - navHeight; // Offset by navbar height

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// GSAP Animations
function initAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  setupAboutAnimations();
  setupStandAnimations();

  // Update animations on window resize
  window.addEventListener("resize", () => {
    gsap.killTweensOf([
      "#can",
      "#leaf",
      "#black-berry1",
      "#black-berry2",
      "#black-berry3",
      "#stand img",
    ]);
    setupAboutAnimations();
    setupStandAnimations();
  });
}

// About Section Animations
function setupAboutAnimations() {
  const isMobile = window.innerWidth <= 768; // Check if the screen is mobile-sized

  const canAnimation = {
    top: isMobile ? "130%" : "150%",
    left: isMobile ? "70%" : "80%",
    scale: isMobile ? "0.6" : "0.8",
    rotate: "-30deg",
    duration: 1.5,
  };

  const leafAnimation = {
    top: isMobile ? "130%" : "170%",
    left: isMobile ? "87%" : "90%",
    scale: isMobile ? "0.6" : "0.8",
    rotate: "0deg",
    zIndex: 3,
    duration: 1.5,
  };

  const blackBerry1Animation = {
    top: isMobile ? "109%" : "120%",
    left: isMobile ? "2%" : "10%",
    scale: isMobile ? "0.4" : "0.5",
    rotate: "90deg",
    zIndex: -1,
    duration: 1.5,
  };

  const blackBerry2Animation = {
    top: isMobile ? "120%" : "140%",
    left: isMobile ? "85%" : "85%",
    scale: isMobile ? "0.6" : "0.8",
    rotate: "90deg",
    duration: 1.5,
  };

  const blackBerry3Animation = {
    top: isMobile ? "135%" : "170%",
    left: isMobile ? "60%" : "76%",
    scale: isMobile ? "0.3" : "0.4",
    rotate: "30deg",
    duration: 1.5,
  };

  // GSAP Timeline for About Section
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "5% 95%",
        end: "90% 70%",
        scrub: true,
      },
    })
    .to("#can", canAnimation, "can")
    .to("#leaf", leafAnimation, "can")
    .to("#black-berry1", blackBerry1Animation, "can")
    .to("#black-berry2", blackBerry2Animation, "can")
    .to("#black-berry3", blackBerry3Animation, "can");
}

// Stand Section Animations
function setupStandAnimations() {
  const isMobile = window.innerWidth <= 768; // Check if the screen is mobile-sized

  const canAnimation = {
    top: isMobile ? "250%" : "250%",
    left: isMobile ? "50%" : "50%",
    scale: isMobile ? 0.8 : 1,
    rotate: "360deg",
    duration: 1.5,
    ease: "power2.out",
  };

  const blackBerry1Animation = {
    top: isMobile ? "220%" : "230%",
    left: isMobile ? "20%" : "20%",
    scale: isMobile ? 0.9 : 1,
    rotate: "80deg",
    duration: 1.5,
    ease: "none",
    zIndex: -1,
  };

  const blackBerry2Animation = {
    top: isMobile ? "230%" : "230%",
    left: isMobile ? "80%" : "80%",
    scale: isMobile ? 0.7 : 0.9,
    rotate: "80deg",
    duration: 1.5,
    ease: "none",
    zIndex: -1,
  };

  const blackBerry3Animation = {
    top: isMobile ? "250%" : "250%",
    left: isMobile ? "30%" : "20%",
    scale: isMobile ? 0.7 : 0.9,
    rotate: "80deg",
    duration: 1.5,
    ease: "none",
    zIndex: -1,
  };
  const leafAnimation = {
    top: isMobile ? "260%" : "250%",
    left: isMobile ? "65%" : "80%",
    scale: isMobile ? 0.7 : 0.9,
    rotate: "0deg",
    duration: 1.5,
    ease: "none",
    zIndex: -1,
  };

  const standImageAnimation = {
    scale: isMobile ? 1 : 1,
    duration: 1.5,
    ease: "elastic.out(1, 0.5)",
  };

  // GSAP Timeline for Stand Section
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
    .to("#leaf", leafAnimation, "can")
    .to("#stand img", standImageAnimation, "-=1");
}

// Hamburger Menu Toggle
// function initHamburgerMenu() {
//   const hamburger = document.getElementById("hamburger");
//   const navMenu = document.getElementById("nav-menu");

//   hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
//   });
// }
function initHamburgerMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  // Toggle hamburger menu on click
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close hamburger menu on scroll
  window.addEventListener("scroll", () => {
    if (hamburger.classList.contains("active")) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
}