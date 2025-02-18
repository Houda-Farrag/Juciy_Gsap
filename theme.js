// const themeToggle = document.getElementById("theme-toggle");
// const currentTheme = localStorage.getItem("theme") || "dark";

// document.documentElement.setAttribute("data-theme", currentTheme);

// if (currentTheme === "light") {
//   themeToggle.textContent = "🌞";
// } else {
//   themeToggle.textContent = "🌙";
// }

// themeToggle.addEventListener("click", () => {
//   const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
//   document.documentElement.setAttribute("data-theme", newTheme);
//   localStorage.setItem("theme", newTheme);
//   themeToggle.textContent = newTheme === "light" ? "🌞" : "🌙";
// });
// ============================================================================================
// const themeToggle = document.getElementById("theme-toggle");

// // Retrieve theme from localStorage or default to "dark"
// const currentTheme = localStorage.getItem("theme") || "dark";

// // Set the initial theme and icon
// document.documentElement.setAttribute("data-theme", currentTheme);
// themeToggle.textContent = currentTheme === "light" ? "🌞" : "🌙";

// // Function to toggle the theme
// const toggleTheme = () => {
//   const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
//   document.documentElement.setAttribute("data-theme", newTheme);
//   localStorage.setItem("theme", newTheme);
//   themeToggle.textContent = newTheme === "light" ? "🌞" : "🌙";

//   // Optional: Add smooth transition for theme change
//   document.body.classList.add("theme-transition");
//   setTimeout(() => document.body.classList.remove("theme-transition"), 500);
// };

// // Add event listener to the theme toggle button
// themeToggle.addEventListener("click", toggleTheme);

// // Optional: Add system preference detection
// const systemPreference = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
// if (!localStorage.getItem("theme")) {
//   document.documentElement.setAttribute("data-theme", systemPreference);
//   themeToggle.textContent = systemPreference === "light" ? "🌞" : "🌙";
// }


// ===================
const themeToggle = document.getElementById("theme-toggle");
const themeSwitch = document.querySelector(".theme-switch");
const switchSlider = document.querySelector(".switch");

// Retrieve theme from localStorage or default to "dark"
const currentTheme = localStorage.getItem("theme") || "dark";

// Set the initial theme and switch position
document.documentElement.setAttribute("data-theme", currentTheme);
themeToggle.textContent = currentTheme === "light" ? "🌞" : "🌙";
switchSlider.innerHTML = currentTheme === "light" ? "🌞" : "🌙";
if (currentTheme === "light") {
  document.body.classList.add("light-theme");
  switchSlider.style.transform = "translateX(37px)";
} else {
  document.body.classList.remove("light-theme");
  switchSlider.style.transform = "translateX(0)";
}

// Function to toggle the theme
const toggleTheme = () => {
  const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  themeToggle.textContent = newTheme === "light" ? "🌞" : "🌙";

  // Toggle the light-theme class and move the switch slider
  if (newTheme === "light") {
    document.body.classList.add("light-theme"); 
    switchSlider.style.transform = "translateX(37px)";
    // switchSlider.innerHTML = "🌞";
  } else {
    document.body.classList.remove("light-theme");
    switchSlider.style.transform = "translateX(0)";
    // switchSlider.innerHTML = "🌙";
  }
};

// Add event listeners
themeToggle.addEventListener("click", toggleTheme);
themeSwitch.addEventListener("click", toggleTheme);