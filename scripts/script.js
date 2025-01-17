function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.querySelector('.menu-btn');
    const menuIcon = menuBtn.querySelector('i');
    
    sidebar.classList.toggle('active');
    menuBtn.classList.toggle('active');
    

    if (!menuIcon.classList.contains("rotateArrow")) {
        menuIcon.classList.add('rotateArrow');
    } else {
        menuIcon.classList.remove("rotateArrow")
    }
    
} 


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

async function loadNavbar() {
    const response = await fetch("components/navbar.html");
    const navbarHtml = await response.text();
    document.getElementById("navbar").innerHTML = navbarHtml;
  }
  
  async function loadFooter() {
    const response = await fetch("components/footer.html");
    const navbarHtml = await response.text();
    document.getElementById("footer").innerHTML = navbarHtml;
  }
  
  loadFooter();
  loadNavbar();


document.addEventListener('DOMContentLoaded', handleScrollAnimation); 