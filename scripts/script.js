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


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let valid = true;
    
    // Name Validation
    const name = document.getElementById('name').value;
    if (name === '' || !/^[a-zA-Z ]+$/.test(name)) {
      document.getElementById('nameError').textContent = 'Please enter a valid name.';
      valid = false;
    } else {
      document.getElementById('nameError').textContent = '';
    }
  
    // Email Validation
    const email = document.getElementById('email').value;
    if (email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email.';
      valid = false;
    } else {
      document.getElementById('emailError').textContent = '';
    }
  
    // Phone Validation
    const phone = document.getElementById('phone').value;
    if (phone === '' || !/^\d{9}$/.test(phone)) {
      document.getElementById('phoneError').textContent = 'Please enter a valid 9-digit phone number.';
      valid = false;
    } else {
      document.getElementById('phoneError').textContent = '';
    }
  
    // Message (Textarea) Validation
    const message = document.getElementById('message').value;
    if (message === '' || message.length < 10) {
      document.getElementById('messageError').textContent = 'Please enter a message with at least 10 characters.';
      valid = false;
    } else {
      document.getElementById('messageError').textContent = '';
    }
});