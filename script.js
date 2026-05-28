const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");
const themeToggle = document.querySelector(".theme-toggle");
const year = document.querySelector("#year");
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-list a");

year.textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem("profile-theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

navToggle.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("profile-theme", document.body.classList.contains("dark") ? "dark" : "light");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  {
    rootMargin: "-45% 0px -45% 0px",
    threshold: 0,
  }
);

sections.forEach((section) => observer.observe(section));
