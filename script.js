function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.querySelector('.menu-btn');
    const menuIcon = menuBtn.querySelector('i');
    
    sidebar.classList.toggle('active');
    menuBtn.classList.toggle('active');
    
    // Toggle between right and left arrow icons
    if (sidebar.classList.contains('active')) {
        menuIcon.classList.replace('fa-angle-right', 'fa-angle-left');
    } else {
        menuIcon.classList.replace('fa-angle-left', 'fa-angle-right');
    }
} 

// Scroll animation
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', handleScrollAnimation); 