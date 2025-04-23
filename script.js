// 1. Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button was clicked!");
});

document.getElementById("hoverBox").addEventListener("mouseenter", () => {
  event.target.style.background = "lightgreen";
});
document.getElementById("hoverBox").addEventListener("mouseleave", () => {
  event.target.style.background = "lightgray";
});

document.getElementById("keyInput").addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Double-click or long press
let pressTimer;
const secretArea = document.getElementById("secretArea");

secretArea.addEventListener("dblclick", () => {
  alert("Secret double-click unlocked!");
});

secretArea.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => {
    alert("Long press activated!");
  }, 1000);
});

secretArea.addEventListener("mouseup", () => clearTimeout(pressTimer));

// 2. Interactive Elements
document.getElementById("changeColorBtn").addEventListener("click", (e) => {
  e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});

// Image Gallery
const images = [
  "https://via.placeholder.com/300x200/ff7f7f",
  "https://via.placeholder.com/300x200/7fafff",
  "https://via.placeholder.com/300x200/7fffaf"
];
let imgIndex = 0;
document.getElementById("nextImg").addEventListener("click", () => {
  imgIndex = (imgIndex + 1) % images.length;
  document.getElementById("galleryImg").src = images[imgIndex];
});

// Tabs
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(c => c.style.display = "none");
    document.getElementById(tab.dataset.target).style.display = "block";
  });
});

// 3. Form Validation
const passwordField = document.getElementById("password");
const feedback = document.getElementById("feedback");

passwordField.addEventListener("input", () => {
  if (passwordField.value.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
  } else {
    feedback.textContent = "";
  }
});

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = passwordField.value;

  if (!email.includes("@") || password.length < 8) {
    alert("Please enter a valid email and password.");
    return;
  }

  alert("Form submitted successfully!");
});
