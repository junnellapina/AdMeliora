document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".animated");

  function checkScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        section.classList.add("show");
      } else {
        section.classList.remove("show");
      }
    });
  }

  function handleVisibilityChange() {
    if (!document.hidden) {
      // Page is visible, check scroll position
      checkScroll();
    }
  }

  // Initial check
  checkScroll();

  // Check on scroll
  window.addEventListener("scroll", checkScroll);

  // Check on page visibility change
  document.addEventListener("visibilitychange", handleVisibilityChange);

  // Smooth scroll on navigation link click
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
