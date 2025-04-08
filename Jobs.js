// jobs.js
// Functionalities I've put in place
//Active Navigation Link: When a navigation link is clicked, it visually becomes "
// Apply Now Button: Pops up an alert message when the "Apply Now" button is clicked.

//Hover Effect for Employers: Changes the background color for featured employers on hover.

//Welcome Message Animation: Adds a fade-in effect to the "Welcome to Remote Hub" message.

//Email Validation: Prompts the user to enter their email in the contact section, ensuring it's valid before submission.

// Highlight active navigation link
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});

// Apply Now button functionality
document.addEventListener("DOMContentLoaded", () => {
  const applyButtons = document.querySelectorAll(".job button");
  applyButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Thank you for applying! We'll review your application.");
    });
  });
});

// Featured Employers hover effect
document.addEventListener("DOMContentLoaded", () => {
  const employers = document.querySelectorAll("#featured-employers .employer");
  employers.forEach(employer => {
    employer.addEventListener("mouseenter", () => {
      employer.style.backgroundColor = "#F3F4F6";
      employer.style.transition = "background-color 0.3s ease";
    });
    employer.addEventListener("mouseleave", () => {
      employer.style.backgroundColor = "#FFF";
    });
  });
});

// Welcome message animation
document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector("#intro h2");
  intro.style.opacity = 0;
  intro.style.transition = "opacity 2s";
  setTimeout(() => {
    intro.style.opacity = 1;
  }, 500);
});

// Contact section email validation
document.addEventListener("DOMContentLoaded", () => {
  const contactLink = document.querySelector("#contact a");
  contactLink.addEventListener("click", (event) => {
    const email = prompt("Enter your email:");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
    } else {
      alert("Thank you for contacting us!");
    }
  });
});
