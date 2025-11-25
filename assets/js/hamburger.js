// Hamburger menu toggle for mobile navigation
document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger-menu');
    var nav = document.querySelector('nav');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        nav.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('header')) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    }
});
