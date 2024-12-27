// Smooth Scrolling for Navigation Links
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Dynamic Active Link Highlight in Navbar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu a');

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // Adjust for fixed navbar height
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Search Bar Alert
const searchButton = document.querySelector('.h-text button');
searchButton.addEventListener('click', () => {
    const searchInput = document.querySelector('.h-text input').value;
    if (searchInput.trim() !== '') {
        alert(`You searched for: "${searchInput}"`);
    } else {
        alert('Please enter a search term!');
    }
});

// Gallery Image Modal
const galleryImages = document.querySelectorAll('.portfolio-item .item img');
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <img src="${image.src}" alt="Gallery Image" />
            </div>
        `;
        document.body.appendChild(modal);

        // Close Modal
        modal.querySelector('.close').addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        // Remove Modal on Outside Click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    });
});

// Subscription Form Validation
document.querySelector('.newsletter button').addEventListener('click', () => {
    const emailInput = document.querySelector('.newsletter input').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput)) {
        alert('Thank you for subscribing!');
    } else {
        alert('Please enter a valid email address.');
    }
});
