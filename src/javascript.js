
  // JavaScript to toggle mobile menu
  document.addEventListener('DOMContentLoaded', function() {
      const mobileMenuOpen = document.getElementById('mobile-menu-open');
      const mobileMenuClose = document.getElementById('mobile-menu-close');
      const mobileMenu = document.getElementById('mobile-menu');
      
      // Open mobile menu
      mobileMenuOpen.addEventListener('click', function() {
          mobileMenu.classList.remove('hidden');
      });
      
      // Close mobile menu
      mobileMenuClose.addEventListener('click', function() {
          mobileMenu.classList.add('hidden');
      });
      
      // Toggle desktop dropdown menu
      const menuButton = document.getElementById('menu-button');
      const flyoutMenu = document.getElementById('flyout-menu');
      
      menuButton.addEventListener('click', function() {
          const expanded = menuButton.getAttribute('aria-expanded') === 'true';
          menuButton.setAttribute('aria-expanded', !expanded);
          flyoutMenu.classList.toggle('hidden');
      });
      
      // Close flyout when clicking outside
      document.addEventListener('click', function(event) {
          if (!menuButton.contains(event.target) && !flyoutMenu.contains(event.target)) {
              menuButton.setAttribute('aria-expanded', 'false');
              flyoutMenu.classList.add('hidden');
          }
      });
  });

  const dropdownButton = document.getElementById('dropdownButton');
  const dropdownMenu = document.getElementById('dropdownMenu');
  
  dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
  });
  
  // Close dropdown when clicking outside
  window.addEventListener('click', (event) => {
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.add('hidden');
    }
  });

  