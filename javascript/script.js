
// =====================================
// ADIDAS WEBSITE - COMPLETE JAVASCRIPT
// =====================================


// 1. MOBILE NAVIGATION

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav');

if (menuButton && navigation) {

    menuButton.addEventListener('click', () => {

        const isOpen = navigation.classList.toggle('active');

        menuButton.textContent = isOpen ? '✕' : '☰';

        menuButton.setAttribute(
            'aria-expanded',
            String(isOpen)
        );

    });

    // Close menu after clicking a link

    navigation.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {

            navigation.classList.remove('active');

            menuButton.textContent = '☰';

            menuButton.setAttribute(
                'aria-expanded',
                'false'
            );

        });

    });

    // Close menu when resizing to desktop

    window.addEventListener('resize', () => {

        if (window.innerWidth > 750) {

            navigation.classList.remove('active');

            menuButton.textContent = '☰';

            menuButton.setAttribute(
                'aria-expanded',
                'false'
            );

        }

    });

}


// 2. SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    '.card, .event, .section-title, .description'
);

if ('IntersectionObserver' in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {

        element.classList.add('reveal');

        observer.observe(element);

    });

} else {

    revealElements.forEach(element => {
        element.classList.add('visible');
    });

}


// 3. ACTIVE PAGE NAVIGATION

const currentPage =
    window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('nav a').forEach(link => {

    const linkPage = link.getAttribute('href');

    if (linkPage === currentPage) {

        link.classList.add('current-page');

        link.setAttribute('aria-current', 'page');

    }

});


// 4. SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', event => {

        const targetId = link.getAttribute('href');

        if (targetId === '#') return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        }

    });

});


// 5. BACK TO TOP BUTTON

const topButton = document.createElement('button');

topButton.innerHTML = '↑';
topButton.className = 'back-to-top';
topButton.setAttribute('aria-label', 'Наверх');

document.body.appendChild(topButton);

topButton.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});

window.addEventListener('scroll', () => {

    if (window.scrollY > 400) {

        topButton.classList.add('show');

    } else {

        topButton.classList.remove('show');

    }

}, { passive: true });


// 6. FOOTER YEAR

const yearElement = document.querySelector('.current-year');

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


// 7. IMAGE LOADING

document.querySelectorAll('img').forEach(image => {

    image.loading = 'lazy';

});


// 8. CONSOLE MESSAGE

console.log(
    '%c adidas — IMPOSSIBLE IS NOTHING.',
    'font-size:20px;font-weight:900;color:#111;'
);

console.log('Website successfully loaded!');
