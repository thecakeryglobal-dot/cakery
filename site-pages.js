document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".mobile-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeMenuButton = document.querySelector(".close-menu");

  function setMenuOpen(isOpen) {
    mobileMenu.classList.toggle("open", isOpen);
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  }

  menuToggle.addEventListener("click", () => {
    setMenuOpen(!mobileMenu.classList.contains("open"));
  });
  closeMenuButton.addEventListener("click", () => {
    setMenuOpen(false);
    menuToggle.focus();
  });
  mobileMenu.addEventListener("click", (event) => {
    if (event.target === mobileMenu) setMenuOpen(false);
  });
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileMenu.classList.contains("open")) {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });
  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  }, { passive: true });
  header.classList.toggle("is-scrolled", window.scrollY > 20);
});
