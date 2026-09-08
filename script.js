"use strict";

// Content and navigation work without JavaScript. These are optional conveniences.
const printButtons = document.querySelectorAll("[data-print]");
printButtons.forEach((button) => {
  button.hidden = false;
  button.addEventListener("click", () => window.print());
});

// Include collapsed project records in print, then preserve the reader's open state.
let detailsBeforePrint = null;
window.addEventListener("beforeprint", () => {
  if (detailsBeforePrint !== null) return;
  detailsBeforePrint = [...document.querySelectorAll("details")].map(
    (element) => ({
      element,
      open: element.open,
    }),
  );
  detailsBeforePrint.forEach(({ element }) => {
    element.open = true;
  });
});
window.addEventListener("afterprint", () => {
  detailsBeforePrint?.forEach(({ element, open }) => {
    element.open = open;
  });
  detailsBeforePrint = null;
});

const copyButton = document.querySelector("[data-copy-email]");
const copyStatus = document.querySelector(".copy-status");
let statusTimeout;
if (copyButton && navigator.clipboard?.writeText && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    clearTimeout(statusTimeout);
    try {
      await navigator.clipboard.writeText("ljw5953@gmail.com");
      copyStatus.textContent = "이메일 주소를 복사했습니다.";
    } catch {
      copyStatus.textContent =
        "복사하지 못했습니다. 위 이메일 주소를 직접 선택해 주세요.";
    }
    statusTimeout = setTimeout(() => {
      copyStatus.textContent = "";
    }, 6000);
  });
}

// An incoming project link opens its record, including direct links and back/forward.
function openLinkedRecord(hash = window.location.hash) {
  let id;
  try {
    id = decodeURIComponent(hash.slice(1));
  } catch {
    return;
  }
  const target = document.getElementById(id);
  const details = target?.matches("details")
    ? target
    : target?.querySelector("details");
  if (details && target.classList.contains("archive-row")) details.open = true;
}
openLinkedRecord();
window.addEventListener("hashchange", () => openLinkedRecord());
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  // Clicking an already-current hash does not fire hashchange.
  link.addEventListener("click", () => openLinkedRecord(link.hash));
});

// Track the section nearest the sticky header without interfering with native anchors.
const navLinks = [...document.querySelectorAll("nav a[href^='#']")];
const navSections = navLinks.map((link) =>
  document.getElementById(link.hash.slice(1)),
);
let scrollQueued = false;
function updateNavigation() {
  const headerBottom = document
    .querySelector(".site-header")
    .getBoundingClientRect().bottom;
  let current = -1;
  navSections.forEach((section, index) => {
    if (section && section.getBoundingClientRect().top <= headerBottom + 100)
      current = index;
  });
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 10
  ) {
    current = navLinks.length - 1;
  }
  navLinks.forEach((link, index) => {
    if (index === current) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  scrollQueued = false;
}
function queueNavigationUpdate() {
  if (!scrollQueued) {
    scrollQueued = true;
    window.requestAnimationFrame(updateNavigation);
  }
}
window.addEventListener("scroll", queueNavigationUpdate, { passive: true });
window.addEventListener("resize", queueNavigationUpdate);
document
  .querySelectorAll("details")
  .forEach((details) =>
    details.addEventListener("toggle", queueNavigationUpdate),
  );
updateNavigation();
