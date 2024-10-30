// Smooth scrolling for anchor links
const smoothScroll = (e) => {
  e.preventDefault();
  const targetId = e.target.getAttribute('href');
  const target = document.querySelector(targetId);

  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};

// Add event listener for smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', smoothScroll);
});

// Function to handle icon scaling on hover
const handleIconHover = (e) => {
  if (e.target.classList.contains('icon')) {
    e.target.style.transform = 'scale(1.2)';
  }
};

// Function to reset icon scaling on mouse out
const resetIconScale = (e) => {
  if (e.target.classList.contains('icon')) {
    e.target.style.transform = 'scale(1)';
  }
};

// Add event listeners for icon hover effects
const iconsContainer = document.querySelector('.icons-container');
iconsContainer.addEventListener('mouseover', handleIconHover);
iconsContainer.addEventListener('mouseout', resetIconScale);
