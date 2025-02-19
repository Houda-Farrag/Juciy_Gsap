const themeToggle = document.getElementById("theme-toggle");
const themeSwitch = document.querySelector(".theme-switch");
const switchSlider = document.querySelector(".switch");
const currentTheme = localStorage.getItem("theme") || "dark";
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
const toggleTheme = () => {
  const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  themeToggle.textContent = newTheme === "light" ? "🌞" : "🌙";
  if (newTheme === "light") {
    document.body.classList.add("light-theme"); 
    switchSlider.style.transform = "translateX(37px)";
  } else {
    document.body.classList.remove("light-theme");
    switchSlider.style.transform = "translateX(0)";
  }
};
themeToggle.addEventListener("click", toggleTheme);
themeSwitch.addEventListener("click", toggleTheme);