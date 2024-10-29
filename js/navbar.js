document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        link.classList.remove('active'); // Remove 'active' from all links
        if (link.href === currentUrl) {
            link.classList.add('active'); // Add 'active' to the current link
        }
    });
});
