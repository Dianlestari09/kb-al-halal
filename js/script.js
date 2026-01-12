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
// PRAYER TIME CALCULATION
// ============================================

function calculatePrayerTimes() {
    // Get today's date
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    // Default prayer times (adjust according to your location)
    // These are sample times and should be updated based on your city
    const prayerTimes = {
        1: { subuh: '04:45', dzuhur: '12:15', ashar: '15:45', maghrib: '18:10', isya: '19:40' },
        2: { subuh: '04:30', dzuhur: '12:20', ashar: '16:00', maghrib: '18:30', isya: '20:00' },
        3: { subuh: '04:10', dzuhur: '12:25', ashar: '16:10', maghrib: '18:50', isya: '20:15' },
        4: { subuh: '03:50', dzuhur: '12:30', ashar: '16:20', maghrib: '19:10', isya: '20:30' },
        5: { subuh: '03:35', dzuhur: '12:35', ashar: '16:25', maghrib: '19:25', isya: '20:40' },
        6: { subuh: '03:30', dzuhur: '12:40', ashar: '16:30', maghrib: '19:35', isya: '20:50' },
        7: { subuh: '03:45', dzuhur: '12:35', ashar: '16:25', maghrib: '19:30', isya: '20:45' },
        8: { subuh: '04:00', dzuhur: '12:30', ashar: '16:15', maghrib: '19:15', isya: '20:30' },
        9: { subuh: '04:15', dzuhur: '12:25', ashar: '16:00', maghrib: '18:55', isya: '20:15' },
        10: { subuh: '04:30', dzuhur: '12:20', ashar: '15:50', maghrib: '18:35', isya: '20:00' },
        11: { subuh: '04:45', dzuhur: '12:15', ashar: '15:45', maghrib: '18:20', isya: '19:45' },
        12: { subuh: '05:00', dzuhur: '12:10', ashar: '15:40', maghrib: '18:15', isya: '19:40' }
    };

    // Get times for current month or use default
    const times = prayerTimes[month] || prayerTimes[1];

    // Update prayer times on page
    document.getElementById('subuh').textContent = times.subuh;
    document.getElementById('dzuhur').textContent = times.dzuhur;
    document.getElementById('ashar').textContent = times.ashar;
    document.getElementById('maghrib').textContent = times.maghrib;
    document.getElementById('isya').textContent = times.isya;
}

// Calculate prayer times on page load
document.addEventListener('DOMContentLoaded', calculatePrayerTimes);

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
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

        // Here you can add code to send the form data to your backend
        // Example using fetch:
        /*
        fetch('process_contact.php', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showNotification('Pesan berhasil dikirim!', 'success');
                contactForm.reset();
            } else {
                showNotification('Terjadi kesalahan, silakan coba lagi', 'error');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showNotification('Terjadi kesalahan, silakan coba lagi', 'error');
        });
        */
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

const observer = new IntersectionObserver(function(entries) {
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
// CTA BUTTON CLICK HANDLING
// ============================================

document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.id === 'contactForm' || this.closest('form')) {
            return; // Don't scroll if it's a form submission
        }
        // Scroll to contact section
        document.getElementById('kontak').scrollIntoView({
            behavior: 'smooth'
        });
    });
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
    .nav-link.active {
        color: var(--accent-color) !important;
        border-bottom: 2px solid var(--accent-color);
        padding-bottom: 5px;
    }
`;
document.head.appendChild(style);

updateActiveNavLink();

// ============================================
// GALLERY LIGHTBOX
// ============================================

function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const src = img.src;
            const alt = img.alt;

            showLightbox(src, alt);
        });
    });
}

function showLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">&times;</button>
            <img src="${src}" alt="${alt}">
            <p>${alt}</p>
        </div>
    `;

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

    document.body.appendChild(lightbox);

    // Close lightbox
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.className === 'lightbox-close') {
            document.body.removeChild(lightbox);
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.parentNode) {
            document.body.removeChild(lightbox);
        }
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

    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// READY EVENT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Masjid Halal siap digunakan!');
    // All initialization is done above
});
