const isSmall = window.innerWidth <= 480;
const isMobile = window.innerWidth <= 768;
const isTablet = window.innerWidth <= 1024;

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all functionality
  initNavbarScroll();
  initSmoothScroll();
  initAnimations();
  initHamburgerMenu();
  initHoverEffects();
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
  const canAnimation = {
    top: isSmall ? "150%" : isMobile ? "130%" : "150%",
    left: isSmall ? "75%" : isMobile ? "70%" : "80%",
    scale: isSmall ? "0.5" : isMobile ? "0.6" : "0.8",
    rotate: "-30deg",
    duration: 1.5,
  };

  const leafAnimation = {
    top: isSmall ? "140%" : isMobile ? "130%" : "170%",
    left: isSmall ? "90%" : isMobile ? "87%" : "90%",
    scale: isSmall ? "0.5" : isMobile ? "0.6" : "0.8",
    rotate: "0deg",
    zIndex: 3,
    duration: 1.5,
  };

  const blackBerry1Animation = {
    top: isSmall ? "115%" : isMobile ? "109%" : "120%",
    left: isSmall ? "5%" : isMobile ? "2%" : "10%",
    scale: isSmall ? "0.3" : isMobile ? "0.4" : "0.5",
    rotate: "90deg",
    zIndex: -1,
    duration: 1.5,
  };

  const blackBerry2Animation = {
    top: isSmall ? "125%" : isMobile ? "120%" : "140%",
    left: isSmall ? "80%" : isMobile ? "85%" : "85%",
    scale: isSmall ? "0.5" : isMobile ? "0.6" : "0.8",
    rotate: "90deg",
    duration: 1.5,
  };

  const blackBerry3Animation = {
    top: isSmall ? "140%" : isMobile ? "135%" : "170%",
    left: isSmall ? "85%" : isMobile ? "60%" : "76%",
    scale: isSmall ? "0.2" : isMobile ? "0.3" : "0.4",
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
  const canAnimation = {
    top: isSmall ? "270%" : isMobile ? "250%" : "254%",
    left: isSmall ? "50%" : isMobile ? "50%" : "50%",
    scale: isSmall ? 0.7 : isMobile ? 0.8 : .8,
    rotate: "360deg",
    duration: 1.5,
    ease: "power2.out",
  };

  const blackBerry1Animation = {
    top: isSmall ? "230%" : isMobile ? "220%" : "230%",
    left: isSmall ? "25%" : isMobile ? "20%" : "20%",
    scale: isSmall ? 0.8 : isMobile ? 0.9 : 1,
    rotate: "80deg",
    duration: 1.5,
    ease: "none",
    zIndex: -1,
  };

  const blackBerry2Animation = {
    top: isSmall ? "240%" : isMobile ? "230%" : "230%",
    left: isSmall ? "75%" : isMobile ? "80%" : "80%",
    scale: isSmall ? 0.6 : isMobile ? 0.7 : 0.9,
    rotate: "80deg",
    duration: 1.5,
    ease: "none",
    zIndex: -1,
  };

  const blackBerry3Animation = {
    top: isSmall ? "260%" : isMobile ? "250%" : "250%",
    left: isSmall ? "35%" : isMobile ? "30%" : "20%",
    scale: isSmall ? 0.6 : isMobile ? 0.7 : 0.9,
    rotate: "80deg",
    duration: 1.5,
    ease: "none",
    zIndex: -1,
  };

  const leafAnimation = {
    top: isSmall ? "270%" : isMobile ? "260%" : "250%",
    left: isSmall ? "70%" : isMobile ? "65%" : "80%",
    scale: isSmall ? 0.6 : isMobile ? 0.7 : 0.9,
    rotate: "0deg",
    duration: 1.5,
    ease: "none",
    zIndex: -1,
  };

  const standImageAnimation = {

    rotate: "0deg",
    scale: isSmall ? 0.9 : isMobile ? 1 : 1,
    duration: 1.5,
    ease: "elastic.out(1, 0.5)",
  };

  // GSAP Timeline for Stand Section
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".stand",
        start: isSmall ? "10% 95%" : isMobile ? "5% 95%" : "5% 95%",
        end: "80% 70%",
        scrub: true,
      },
    })
    .to("#can", canAnimation, "can")
    .to(
      "#can",
      {
        scale: isSmall ? 0.9 : isMobile ? 1 : 1,
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

// Function to initialize hover effects

function initHoverEffects() {
  const can = document.getElementById("can");
  const h1 = document.querySelector("header .container h1");
  const blackBerry1 = document.getElementById("black-berry1");
  const blackBerry2 = document.getElementById("black-berry2");
  const blackBerry3 = document.getElementById("black-berry3");
  const leaf = document.getElementById("leaf");

  if (!can || !h1 || !blackBerry1 || !blackBerry2 || !blackBerry3 || !leaf) {
    console.error("One or more elements not found!");
    return;
  }

  // Store initial transform values using GSAP's getProperty
  const initialTransforms = {
    can: {
      x: gsap.getProperty(can, "x"),
      y: gsap.getProperty(can, "y"),
      scale: gsap.getProperty(can, "scale"),
      rotate: gsap.getProperty(can, "rotate"),
    },
    blackBerry1: {
      x: gsap.getProperty(blackBerry1, "x"),
      y: gsap.getProperty(blackBerry1, "y"),
      rotate: gsap.getProperty(blackBerry1, "rotate"),
    },
    blackBerry2: {
      x: gsap.getProperty(blackBerry2, "x"),
      y: gsap.getProperty(blackBerry2, "y"),
      scale: gsap.getProperty(blackBerry2, "scale"),
    },
    blackBerry3: {
      x: gsap.getProperty(blackBerry3, "x"),
      y: gsap.getProperty(blackBerry3, "y"),
      rotate: gsap.getProperty(blackBerry3, "rotate"),
    },
    leaf: {
      x: gsap.getProperty(leaf, "x"),
      y: gsap.getProperty(leaf, "y"),
      rotate: gsap.getProperty(leaf, "rotate"),
    },
  };

  // Define responsive animation values
  const hoverValues = {
    can: {
      scale: isSmall ? 1.1 : isMobile ? 1.15 : 1.2,
      rotate: isSmall ? 5 : isMobile ? 8 : 10,
    },
    h1: {
      color: "#825dd2",
      textShadow: "0 0 20px #e2e1e7, 0 0 30px #825dd2",
    },
    blackBerry1: {
      x: isSmall ? -100 : isMobile ? -150 : -200,
      rotate: isSmall ? 15 : isMobile ? 20 : 30,
      scale: isSmall ? 1.5 : isMobile ? 1.08 : 1.1,
    },
    blackBerry2: {
      y: isSmall ? -100 : isMobile ? -150 : -200,
      scale: isSmall ? 1.5 : isMobile ? 1.08 : 1.1,
    },
    blackBerry3: {
      x: isSmall ? -120 : isMobile ? -200 : -300,
      y: isSmall ? -15 : isMobile ? -8 : -10,
      rotate: isSmall ? -5 : isMobile ? -8 : -10,
    },
    leaf: {
      x: isSmall ? 180 : isMobile ? 150 : 200,
      y: isSmall ? -200 : isMobile ? -300 : -400,
      rotate: isSmall ? 10 : isMobile ? -75 : -100,
    },
  };

  // Hover effect for #can
  can.addEventListener("mouseenter", () => {
    gsap.to(can, { scale: hoverValues.can.scale, rotate: hoverValues.can.rotate, duration: 0.3 });
    gsap.to(h1, { color: hoverValues.h1.color, textShadow: hoverValues.h1.textShadow, duration: 0.3 });
    gsap.to(blackBerry1, { x: hoverValues.blackBerry1.x, rotate: hoverValues.blackBerry1.rotate, duration: 0.3 });
    gsap.to(blackBerry2, { y: hoverValues.blackBerry2.y, scale: hoverValues.blackBerry2.scale, duration: 0.3 });
    gsap.to(blackBerry3, { x: hoverValues.blackBerry3.x, y: hoverValues.blackBerry3.y, rotate: hoverValues.blackBerry3.rotate, duration: 0.3 });
    gsap.to(leaf, { x: hoverValues.leaf.x, y: hoverValues.leaf.y, rotate: hoverValues.leaf.rotate, duration: 0.3 });
  });

  // Reset to initial state on mouse leave
  can.addEventListener("mouseleave", () => {
    gsap.to(can, {
      x: initialTransforms.can.x,
      y: initialTransforms.can.y,
      scale: initialTransforms.can.scale,
      rotate: initialTransforms.can.rotate,
      duration: 0.3,
    });
    gsap.to(h1, {
      color: "inherit",
      textShadow: "none",
      duration: 0.3,
    });
    gsap.to(blackBerry1, {
      x: initialTransforms.blackBerry1.x,
      y: initialTransforms.blackBerry1.y,
      rotate: initialTransforms.blackBerry1.rotate,
      duration: 0.3,
    });
    gsap.to(blackBerry2, {
      x: initialTransforms.blackBerry2.x,
      y: initialTransforms.blackBerry2.y,
      scale: initialTransforms.blackBerry2.scale,
      duration: 0.3,
    });
    gsap.to(blackBerry3, {
      x: initialTransforms.blackBerry3.x,
      y: initialTransforms.blackBerry3.y,
      rotate: initialTransforms.blackBerry3.rotate,
      duration: 0.3,
    });
    gsap.to(leaf, {
      x: initialTransforms.leaf.x,
      y: initialTransforms.leaf.y,
      rotate: initialTransforms.leaf.rotate,
      duration: 0.3,
    });
  });
}