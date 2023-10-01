function updateElementOnScroll() {
    const navElement = document.querySelector('nav');
    if (window.scrollY === 0) {
        document.documentElement.style.setProperty('--cor-de-fundo-nav', 'transparent');
    } else {
        document.documentElement.style.setProperty('--cor-de-fundo-nav', 'white');
    }
}

window.addEventListener('scroll', updateElementOnScroll);

updateElementOnScroll();






