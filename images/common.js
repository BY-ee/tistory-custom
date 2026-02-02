// common.js
let lastScrollY = window.scrollY;

document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScrollY = window.scrollY;

    if (!header) return;

    if (currentScrollY > lastScrollY) {
        header.style.top = '-83px';
    } else {
        header.style.top = '0';
    }

    lastScrollY = currentScrollY;
});