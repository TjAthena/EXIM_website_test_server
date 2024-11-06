// JavaScript to handle item clicks and display corresponding content and image
document.querySelectorAll('.item-tj-200').forEach(item => {
  item.addEventListener('click', () => {
      const target = item.getAttribute('data-target');

      // Get currently active detail and image
      const currentDetail = document.querySelector('.details-tj-200.active');
      const currentImg = document.querySelector('.detailsimg-tj-200.active');

      // Hide the current details and image with fade-out effect
      if (currentDetail) {
          currentDetail.classList.remove('active');
          currentDetail.classList.add('hide'); // Add hide class to trigger upward motion
          setTimeout(() => {
              currentDetail.style.display = 'none'; // Set display to none after fade out
          }, 500); // Match with the transition duration
      }

      if (currentImg) {
          currentImg.classList.remove('active');
          currentImg.style.display = 'none'; // Set display to none immediately
      }

      // Show selected detail and image with fade-in effect
      const activeDetail = document.getElementById(target);
      const activeImg = document.getElementById(`img-${target}`);

      activeDetail.style.display = 'block'; // Set display to block immediately
      activeDetail.classList.remove('hide'); // Remove hide class to allow normal display
      activeDetail.classList.add('show'); // Add show class to trigger downward motion
      activeDetail.classList.add('active'); // Make it visible

      activeImg.style.display = 'block'; // Set display to block immediately
      activeImg.classList.add('active'); // Make it visible
  });
});
