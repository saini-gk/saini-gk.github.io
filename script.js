const words = ["Gunjan Kumar", "a Creative Developer", "a Tech Enthusiast"];
let i = 0, j = 0, current = "", isDeleting = false;

function typeEffect() {
    current = words[i];
    document.getElementById("typed").textContent = current.substring(0, j);

    if (!isDeleting && j++ === current.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (isDeleting && j-- === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let k = 0; k < 60; k++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        dx: (Math.random() - 0.5) * 0.7,
        dy: (Math.random() - 0.5) * 0.7
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

const navPills = document.querySelectorAll(".nav-pill");

function updateNav() {
    const scrollMiddle = window.scrollY + window.innerHeight / 2;

    let currentSection = sections[0].getAttribute("id"); // default first section

    sections.forEach((section, index) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        // For last section, include all remaining scroll
        if (index === sections.length - 1) {
            if (scrollMiddle >= top) currentSection = section.getAttribute("id");
        } else {
            if (scrollMiddle >= top && scrollMiddle < bottom) {
                currentSection = section.getAttribute("id");
            }
        }
    });

    navPills.forEach(p => p.classList.remove("active"));
    const activePill = document.querySelector(`.nav-pill[data-section="${currentSection}"]`);
    if (activePill) activePill.classList.add("active");
}

window.addEventListener("scroll", updateNav);
window.addEventListener("resize", updateNav);
updateNav();

const scrollButtons = document.querySelectorAll(".scroll-btn, .nav-pill");
scrollButtons.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        const targetId = btn.dataset.target || btn.dataset.section;
        const target = document.getElementById(targetId);
        if (target) {
            const offset = 70;
            const elementPosition = target.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth"
            });
            
            // Set active nav pill immediately
            if (btn.classList.contains("nav-pill")) {
                navPills.forEach(p => p.classList.remove("active"));
                btn.classList.add("active");
            }
        }
    });
});

const toggleBtn = document.querySelector(".toggle-btn");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        const overlay = card.querySelector(".overlay");
        if (overlay) overlay.style.opacity = 1;
    });
    card.addEventListener("mouseleave", () => {
        const overlay = card.querySelector(".overlay");
        if (overlay) overlay.style.opacity = 0;
    });
});
