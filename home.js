 document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('nav-links');
    const navItems  = document.querySelectorAll('#nav-links a');

    /* Toggle menu */
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    /* Close menu on link click (mobile only) */
    navItems.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove('show');
        }
      });
    });

    /* Close menu if window resized to desktop */
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) navLinks.classList.remove('show');
    });

    /* Active link highlight */
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) current = section.id;
      });
      navItems.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
      });
    });
  });


function openCertificate() {
    document.getElementById("certificateModal").style.display = "block";
}

function closeCertificate() {
    document.getElementById("certificateModal").style.display = "none";
}


function scrollCertificates(direction) {
    const container = document.getElementById('certificatesScroll');
    const scrollAmount = 320;

    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}


/* Smooth horizontal scroll using the fixed‑end arrows */
function scrollProjects(direction) {
    const container = document.getElementById("projectsScroll");
    const scrollAmount = 440; // width of card + gap
    container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
    });
}

/* Opens modal and injects project‑specific HTML description */
function openProjectDescription(key) {
    const modal   = document.getElementById("projectModal");
    const content = document.getElementById("projectModalContent");

    /* Project‑specific descriptions stored here */
    const descriptions = {
        rentify: `
            <h2>RentiFy – Car Rental Website</h2>
            <p><strong>Overview:</strong> Responsive platform for exploring, filtering, and booking cars across Basic, Average, and Luxury tiers. Includes Home, About, Blog, Contact and secure login pages.</p>
            <p><strong>My Contribution:</strong> Designed &amp; built the entire frontend, implemented the booking UI and category filters.</p>
            <p><strong>Technologies Used:</strong> HTML5, CSS3, JavaScript, Netlify (hosting)</p>
            <p><strong>Duration:</strong> 5 days</p>
            <p><strong>Outcome:</strong> Sharpened responsive‑design skills and UI/UX layout planning.</p>
        `,
        task: `
            <h2>Task Manager – College Edition</h2>
            <p><strong>Overview:</strong> Web app to manage semester tasks (assignments, labs, projects) by subject. Students log in to view and update their workload.</p>
            <p><strong>My Contribution:</strong> Implemented full authentication flow (signup/login) with JWT, built REST APIs and integrated them into the React frontend.</p>
            <p><strong>Technologies Used:</strong> React (Vite), Node.js, Express.js, MongoDB, JWT, CSS3</p>
            <p><strong>Duration:</strong> 7 days</p>
            <p><strong>Outcome:</strong> Hands‑on MERN stack experience, learned secure API handling and collaborative Git workflow.</p>
        `
    };

    content.innerHTML = descriptions[key] || "<p>No description available.</p>";
    modal.style.display = "flex";
}

/* Close modal */
function closeProjectModal() {
    document.getElementById("projectModal").style.display = "none";
}

/* Optional: close modal when user clicks outside the description box */
document.getElementById("projectModal").addEventListener("click", e => {
    if (e.target.id === "projectModal") closeProjectModal();
});

document.addEventListener("DOMContentLoaded", () => {
  const roles = ["Full Stack Developer", "MERN Stack Learner", "Problem Solver"];
  const typedText = document.getElementById("typed-text");
  const speed = 100;
  let roleIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < roles[roleIndex].length) {
      typedText.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, speed);
    } else {
      setTimeout(erase, 1500);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedText.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, speed / 2);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 500);
    }
  }

  type();
});



document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  status.textContent = "Your message has been prepared. Please send it manually.";

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const mailtoLink = `mailto:anbuv0012@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message)}`;
  window.location.href = mailtoLink;
});
