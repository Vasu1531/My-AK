/* ============================================================
   Akhilesh Singhal – Portfolio Scripts
   ------------------------------------------------------------
   Features:
     • Typing effect in hero
     • Sticky navbar shadow on scroll
     • Active nav link highlight (scroll-spy)
     • Mobile menu toggle
     • Scroll-reveal animations (IntersectionObserver)
     • Back-to-top button
     • Image lightbox
     • Current year in footer
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- 1. Current year ---------- */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------- 2. Typing effect ---------- */
    const typingEl = document.getElementById('typing');
    if (typingEl) {
        const phrases = [
            'Python Developer',
            'Web Developer',
            'MCA Graduate',
            'AI Enthusiast',
            'Problem Solver'
        ];
        let pIndex = 0;
        let cIndex = 0;
        let deleting = false;

        const typeSpeed = 90;
        const eraseSpeed = 45;
        const holdTime = 1400;

        const tick = () => {
            const current = phrases[pIndex];

            if (!deleting) {
                typingEl.textContent = current.slice(0, ++cIndex);
                if (cIndex === current.length) {
                    deleting = true;
                    return setTimeout(tick, holdTime);
                }
            } else {
                typingEl.textContent = current.slice(0, --cIndex);
                if (cIndex === 0) {
                    deleting = false;
                    pIndex = (pIndex + 1) % phrases.length;
                }
            }
            setTimeout(tick, deleting ? eraseSpeed : typeSpeed);
        };
        tick();
    }

    /* ---------- 3. Header shadow on scroll ---------- */
    const header = document.getElementById('site-header');
    const topBtn = document.getElementById('topBtn');

    const onScroll = () => {
        const y = window.scrollY;
        if (header) header.classList.toggle('scrolled', y > 40);
        if (topBtn) topBtn.classList.toggle('show', y > 400);
        highlightNav();
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ---------- 4. Scroll-spy for nav links ---------- */
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const sections = Array.from(navLinks)
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    function highlightNav() {
        const pos = window.scrollY + 120;
        let currentId = sections.length ? sections[0].id : '';
        sections.forEach(sec => {
            if (sec.offsetTop <= pos) currentId = sec.id;
        });
        navLinks.forEach(link => {
            link.classList.toggle(
                'active',
                link.getAttribute('href') === `#${currentId}`
            );
        });
    }

    /* ---------- 5. Mobile menu toggle ---------- */
    const menuToggle = document.getElementById('menuToggle');
    const primaryNav = document.getElementById('primaryNav');

    if (menuToggle && primaryNav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = primaryNav.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars', !isOpen);
                icon.classList.toggle('fa-xmark', isOpen);
            }
        });

        // Close menu after clicking a link (mobile)
        primaryNav.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                if (primaryNav.classList.contains('open')) {
                    primaryNav.classList.remove('open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    const icon = menuToggle.querySelector('i');
                    if (icon) {
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-xmark');
                    }
                }
            });
        });
    }

    /* ---------- 6. Scroll-reveal (IntersectionObserver) ---------- */
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealEls.forEach(el => io.observe(el));
    } else {
        // Fallback: just show everything
        revealEls.forEach(el => el.classList.add('show'));
    }

    /* ---------- 7. Back-to-top ---------- */
    if (topBtn) {
        topBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---------- 8. Image lightbox ---------- */
    const popup = document.getElementById('imagePopup');
    const popupImg = document.getElementById('popupImage');
    const closeBtn = document.querySelector('.close-popup');

    const openPopup = (src, alt) => {
        if (!popup || !popupImg) return;
        popupImg.src = src;
        popupImg.alt = alt || '';
        popup.classList.add('active');
        popup.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };
    const closePopup = () => {
        if (!popup) return;
        popup.classList.remove('active');
        popup.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    document.querySelectorAll('.clickable-image').forEach(img => {
        img.addEventListener('click', () => openPopup(img.src, img.alt));
    });

    if (closeBtn) closeBtn.addEventListener('click', closePopup);
    if (popup) {
        popup.addEventListener('click', (e) => {
            if (e.target === popup) closePopup();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePopup();
    });

    // Initial state
    onScroll();
});
