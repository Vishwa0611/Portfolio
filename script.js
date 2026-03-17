// ============================================
// CUSTOM CURSOR
// ============================================
const cursor = document.querySelector('[data-cursor]');
const trails = document.querySelectorAll('.cursor-trail');

let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;
const trailPositions = Array.from(trails).map(() => ({ x: 0, y: 0 }));

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    
    let prevX = cursorX, prevY = cursorY;
    
    trails.forEach((trail, index) => {
        const speed = 0.3 - (index * 0.05);
        trailPositions[index].x += (prevX - trailPositions[index].x) * speed;
        trailPositions[index].y += (prevY - trailPositions[index].y) * speed;
        
        trail.style.left = `${trailPositions[index].x}px`;
        trail.style.top = `${trailPositions[index].y}px`;
        
        prevX = trailPositions[index].x;
        prevY = trailPositions[index].y;
    });
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Cursor hover effects
const interactiveElements = document.querySelectorAll('a, button, .project-card, .stat-card, .other-project-card, .contact-detail-item, .contact-card, .project-image');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

document.addEventListener('mousedown', () => cursor.classList.add('click'));
document.addEventListener('mouseup', () => cursor.classList.remove('click'));

// ============================================
// NAVIGATION
// ============================================
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// ANIMATED COUNTERS
// ============================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ============================================
// INTERSECTION OBSERVER
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            if (entry.target.classList.contains('stat-number')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
            }
        }
    });
}, observerOptions);

document.querySelectorAll('section, .project-card, .stat-card, .other-project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// EXPERIENCE TABS
// ============================================
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));
        
        button.classList.add('active');
        document.querySelector(`[data-panel="${targetTab}"]`).classList.add('active');
    });
});

// ============================================
// PARALLAX EFFECT
// ============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (hero && heroImage && window.innerWidth > 768) {
        hero.style.transform = `translateY(${scrolled * 0.2}px)`;
        heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// ============================================
// ACTIVE NAV STATE
// ============================================
const sections = document.querySelectorAll('section[id]');

function activateNavOnScroll() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', activateNavOnScroll);

// ============================================
// 3D TILT EFFECT FOR PROJECT IMAGES
// ============================================
const tiltElements = document.querySelectorAll('[data-tilt]');

tiltElements.forEach(element => {
    const inner = element.querySelector('.project-image-inner');
    const shine = element.querySelector('.project-image-shine');
    const shadow = element.querySelector('.project-image-shadow');
    
    if (!inner) return;
    
    const config = {
        maxTilt: 15,
        perspective: 1000,
        scale: 1.05,
        speed: 400,
        easing: 'cubic-bezier(0.03, 0.98, 0.52, 0.99)'
    };
    
    let rect, isHovering = false;
    
    element.addEventListener('mouseenter', () => {
        isHovering = true;
        rect = element.getBoundingClientRect();
        inner.style.transition = `transform ${config.speed}ms ${config.easing}`;
        
        setTimeout(() => {
            inner.style.transition = 'transform 0.1s ease-out';
        }, config.speed);
    });
    
    element.addEventListener('mousemove', (e) => {
        if (!isHovering || window.innerWidth <= 768) return;
        
        rect = element.getBoundingClientRect();
        
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const xPercent = (mouseX / rect.width) - 0.5;
        const yPercent = (mouseY / rect.height) - 0.5;
        
        const tiltX = -(yPercent * config.maxTilt);
        const tiltY = xPercent * config.maxTilt;
        
        inner.style.transform = `
            perspective(${config.perspective}px)
            rotateX(${tiltX}deg)
            rotateY(${tiltY}deg)
            scale3d(${config.scale}, ${config.scale}, ${config.scale})
        `;
        
        if (shine) {
            const shineX = mouseX / rect.width * 100;
            const shineY = mouseY / rect.height * 100;
            shine.style.background = `
                radial-gradient(
                    circle at ${shineX}% ${shineY}%,
                    rgba(255, 255, 255, 0.3) 0%,
                    rgba(255, 255, 255, 0.1) 40%,
                    transparent 60%
                )
            `;
        }
        
        if (shadow) {
            const shadowX = xPercent * 20;
            const shadowY = yPercent * 10;
            shadow.style.transform = `translateX(${shadowX}px) translateY(${shadowY}px)`;
        }
    });
    
    element.addEventListener('mouseleave', () => {
        isHovering = false;
        
        inner.style.transition = `transform ${config.speed}ms ${config.easing}`;
        inner.style.transform = `
            perspective(${config.perspective}px)
            rotateX(0deg)
            rotateY(0deg)
            scale3d(1, 1, 1)
        `;
        
        if (shadow) {
            shadow.style.transform = 'translateX(0) translateY(0)';
        }
    });
});

// ============================================
// 3D TILT FOR OTHER PROJECT CARDS
// ============================================
document.querySelectorAll('.other-project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return;
        
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `
            perspective(1000px) 
            rotateX(${-rotateX}deg) 
            rotateY(${rotateY}deg) 
            translateY(-10px)
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        card.style.transition = 'transform 0.5s ease';
    });
    
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease';
    });
});

// ============================================
// FLOATING RESUME BUTTON
// ============================================
const floatingResume = document.querySelector('.floating-resume');

if (floatingResume) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            floatingResume.classList.add('visible');
        } else {
            floatingResume.classList.remove('visible');
        }
    });
}

// ============================================
// TYPING EFFECT
// ============================================
const titleElement = document.querySelector('.hero-title');
if (titleElement) {
    const text = titleElement.textContent.trim();
    titleElement.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            titleElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    }
    
    setTimeout(typeWriter, 500);
}

// Console message
console.log('%c🚀 Portfolio Loaded!', 'color: #dc143c; font-size: 20px; font-weight: bold;');
console.log('%cDesigned by Ayush Vishwakarma', 'color: #b3b3b3; font-size: 14px;');