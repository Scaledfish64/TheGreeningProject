//Scroll Elements

document.addEventListener('scroll', () => {
    const header = document.querySelector('nav');

    if (window.scrollY > 0) {
        header.classList.add('nav-got-scrolled');
    } else {
        header.classList.remove('nav-got-scrolled')
    }
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElementsLeft = document.querySelectorAll('.hidden');
const hiddenElementsRight = document.querySelectorAll('.hidden-right');
hiddenElementsLeft.forEach((el) => observer.observe(el));
hiddenElementsRight.forEach((el) => observer.observe(el));