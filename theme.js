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