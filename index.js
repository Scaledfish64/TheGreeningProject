document.addEventListener('scroll', () => {
    const header = document.querySelector('nav');

    if (window.scrollY > 0) {
        header.classList.add('nav-got-scrolled');
    } else {
        header.classList.remove('nav-got-scrolled')
    }
})