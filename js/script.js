// ============================================
// MOBILE MENU TOGGLE
// ============================================

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu on hamburger click
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;

        // Validate form
        if (!name || !email || !message) {
            showNotification('Harap isi semua field yang diperlukan', 'error');
            return;
        }

        // Validate email
        if (!isValidEmail(email)) {
            showNotification('Format email tidak valid', 'error');
            return;
        }

        // Show success message
        showNotification('Pesan Anda telah dikirim! Terima kasih telah menghubungi kami.', 'success');

        // Reset form
        this.reset();
    });
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }

        .notification-success {
            background-color: #4caf50;
        }

        .notification-error {
            background-color: #f44336;
        }

        .notification-info {
            background-color: #2196f3;
        }

        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }

        @media (max-width: 480px) {
            .notification {
                right: 10px;
                left: 10px;
                bottom: auto;
                top: auto;
            }
        }
    `;

    if (!document.querySelector('style[data-notification]')) {
        style.setAttribute('data-notification', 'true');
        document.head.appendChild(style);
    }

    // Add to DOM
    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// ============================================
// EMAIL VALIDATION
// ============================================

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ============================================
// SMOOTH SCROLL ENHANCEMENT
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'slideUp 0.8s ease';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe activity cards and gallery items
document.querySelectorAll('.activity-card, .gallery-item, .prayer-card, .info-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ============================================

// ACTIVE NAV LINK HIGHLIGHTING
// ============================================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Add active state styling
const style = document.createElement('style');
style.textContent = `
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }

        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
            text-align: center;
        }

        .lightbox-content img {
            max-width: 100%;
            max-height: 80vh;
            border-radius: 8px;
        }

        .lightbox-content p {
            color: white;
            margin-top: 1rem;
            font-size: 1.1rem;
        }

        .lightbox-close {
            position: absolute;
            top: -40px;
            right: 0;
            background: none;
            border: none;
            color: white;
            font-size: 3rem;
            cursor: pointer;
            padding: 0;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `;

if (!document.querySelector('style[data-lightbox]')) {
    style.setAttribute('data-lightbox', 'true');
    document.head.appendChild(style);
}

// ============================================
// GALLERY LIGHTBOX FUNCTION
// ============================================

function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            
            const content = document.createElement('div');
            content.className = 'lightbox-content';
            
            const imgClone = this.cloneNode();
            const caption = this.parentElement.querySelector('.gallery-caption');
            
            const closeBtn = document.createElement('button');
            closeBtn.className = 'lightbox-close';
            closeBtn.textContent = '×';
            
            content.appendChild(imgClone);
            if (caption) {
                const p = document.createElement('p');
                p.textContent = caption.textContent;
                content.appendChild(p);
            }
            content.appendChild(closeBtn);
            
            lightbox.appendChild(content);
            document.body.appendChild(lightbox);
            
            // Close lightbox
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox || e.target === closeBtn) {
                    document.body.removeChild(lightbox);
                }
            });
            
            // Close on ESC key
            document.addEventListener('keydown', function closeLightbox(e) {
                if (e.key === 'Escape' && lightbox.parentNode) {
                    document.body.removeChild(lightbox);
                    document.removeEventListener('keydown', closeLightbox);
                }
            });
        });
    });
}

// Initialize lightbox on page load
document.addEventListener('DOMContentLoaded', initGalleryLightbox);

// ============================================
// PAGE LOAD ANIMATIONS
// ============================================

window.addEventListener('load', () => {
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'slideDown 0.8s ease';
    }
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy loading for images (if needed)
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
}

// ============================================
// READY EVENT
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    console.log('Website KB Al Halal siap digunakan!');
});