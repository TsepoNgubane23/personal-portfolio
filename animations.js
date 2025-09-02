// Simple Portfolio Animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Typing Animation for Header
    initTypingAnimation();
    
    // Smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Animate elements on scroll
    initScrollAnimations();
    
    // Add hover effects to cards
    initCardAnimations();
    
    // Add moving words effect
    initMovingWords();
    
    // Add floating particles
    initFloatingParticles();
});

// Typing Animation
function initTypingAnimation() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;
    
    const words = [
        'Software Developer',
        'UI/UX Designer', 
        'Full-Stack Developer',
        'Creative Technologist',
        'Problem Solver'
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before next word
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    typeWriter();
}

// Smooth Scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements to animate
    const elementsToAnimate = document.querySelectorAll('.sub-title, .work, .services-list div, .card');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Card Hover Animations
function initCardAnimations() {
    const cards = document.querySelectorAll('.card, .work, .services-list div');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Moving Words Effect
function initMovingWords() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const title = section.querySelector('.sub-title');
        if (!title) return;
        
        // Create moving words effect on hover
        title.addEventListener('mouseenter', function() {
            const words = this.textContent.split(' ');
            this.innerHTML = words.map(word => 
                `<span class="moving-word" style="display: inline-block; transition: all 0.3s ease;">${word}</span>`
            ).join(' ');
            
            // Animate each word
            const wordElements = this.querySelectorAll('.moving-word');
            wordElements.forEach((word, index) => {
                setTimeout(() => {
                    word.style.transform = 'translateY(-5px) rotate(2deg)';
                    word.style.color = '#ff004f';
                }, index * 100);
            });
        });
        
        title.addEventListener('mouseleave', function() {
            const wordElements = this.querySelectorAll('.moving-word');
            wordElements.forEach((word, index) => {
                setTimeout(() => {
                    word.style.transform = 'translateY(0) rotate(0deg)';
                    word.style.color = '';
                }, index * 50);
            });
        });
    });
}

// Floating Particles
function initFloatingParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    document.body.appendChild(particleContainer);
    
    // Create particles
    for (let i = 0; i < 20; i++) {
        createParticle(particleContainer);
    }
    
    function createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 0, 79, 0.3);
            border-radius: 50%;
            animation: float ${3 + Math.random() * 4}s infinite ease-in-out;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        container.appendChild(particle);
    }
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { 
                transform: translateY(0px) translateX(0px); 
                opacity: 0.3; 
            }
            25% { 
                transform: translateY(-20px) translateX(10px); 
                opacity: 0.6; 
            }
            50% { 
                transform: translateY(-40px) translateX(-10px); 
                opacity: 0.8; 
            }
            75% { 
                transform: translateY(-20px) translateX(5px); 
                opacity: 0.6; 
            }
        }
        
        .animate-in {
            animation: slideInUp 0.6s ease forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Add some interactive effects
document.addEventListener('mousemove', function(e) {
    const particles = document.querySelectorAll('.particle');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.5;
        const xPos = x * speed * 20;
        const yPos = y * speed * 20;
        
        particle.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});

// Add click effects to buttons
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn, .btn2')) {
        // Create ripple effect
        const button = e.target;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);
