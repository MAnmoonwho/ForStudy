
// MOBILE MENU

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav');

if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
        navigation.classList.toggle('active');
    });
}

// REVEAL ANIMATION

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

document.querySelectorAll('.card, .event, .section-title, .description')
.forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
});

// CURRENT PAGE

const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('nav a').forEach(link => {
    const linkPage = link.getAttribute('href');

    if (linkPage === currentPage) {
        link.style.color = '#aaa';
    }
});

// CLOSE MOBILE MENU AFTER CLICK

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navigation?.classList.remove('active');
    });
});
