// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = anchor.getAttribute('href');
      const target = document.querySelector(targetId);

      if (target) {
          target.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});

// Animation effects on hover for icons
const iconsContainer = document.querySelector('.icons-container');

iconsContainer.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('icon')) {
      const icon = e.target;
      icon.style.transform = `scale(1.2)`;
      icon.style.transition = `transform 0.3s ease`;
  }
});

iconsContainer.addEventListener('mouseout', (e) => {
  if (e.target.classList.contains('icon')) {
      const icon = e.target;
      icon.style.transform = `scale(1)`;
      icon.style.transition = `transform 0.3s ease`;
  }
});

// Function to handle smooth scrolling for anchor links
const handleSmoothScroll = (e) => {
  e.preventDefault();

  const targetId = e.target.getAttribute('href');
  const target = document.querySelector(targetId);

  if (target) {
      target.scrollIntoView({
          behavior: 'smooth'
      });
  }
};

// Add event listener for smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', handleSmoothScroll);
});

// Function to handle animation effects on hover for icons
const handleIconHover = (e) => {
  if (e.target.classList.contains('icon')) {
      const icon = e.target;
      icon.style.transform = `scale(1.2)`;
      icon.style.transition = `transform 0.3s ease`;
  }
};

// Function to handle animation effects on mouseout for icons
const handleIconMouseOut = (e) => {
  if (e.target.classList.contains('icon')) {
      const icon = e.target;
      icon.style.transform = `scale(1)`;
      icon.style.transition = `transform 0.3s ease`;
  }
};

// Add event listeners for animation effects to the container element
iconsContainer.addEventListener('mouseover', handleIconHover);
iconsContainer.addEventListener('mouseout', handleIconMouseOut);
