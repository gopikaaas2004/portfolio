// Typing Animation
$(document).ready(function () {

  const roles = [
    "Python Full Stack Developer",
    "Web Developer",
    "Frontend Developer"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeText() {
    const current = roles[roleIndex];

    if (deleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    $("#typing").text(current.substring(0, charIndex));

    let delay = deleting ? 55 : 100;

    if (!deleting && charIndex === current.length) {
      deleting = true;
      delay = 1600;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 350;
    }

    setTimeout(typeText, delay);
  }

  typeText();

  // Navbar closes after clicking a link on mobile
  $(".navbar-nav .nav-link").on("click", function () {
    const menu = document.getElementById("navbarMenu");
    const instance = bootstrap.Collapse.getInstance(menu);

    if (instance) {
      instance.hide();
    }
  });

  // Reveal animation
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach(function (el) {
    observer.observe(el);
  });

  // Current year
  $("#year").text(new Date().getFullYear());

  // Contact Form
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();

    if (!name || !email || !message) {
      alert("Please fill all the fields.");
      return;
    }

    // Replace this with your real public email address
    const myEmail = "YOUR_EMAIL@example.com";

    if (myEmail === "gopikas1904@gmail.com") {
      alert("Please configure your contact email first.");
      return;
    }

    const subject = encodeURIComponent(
      "Portfolio Contact from " + name
    );

    const body = encodeURIComponent(
      "Name: " + name +
      "\nEmail: " + email +
      "\n\nMessage:\n" + message
    );

    window.location.href =
      "mailto:" + myEmail +
      "?subject=" + subject +
      "&body=" + body;
  });

});