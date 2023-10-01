function updateElementOnScroll() {
    const navElement = document.querySelector('nav');
    if (window.scrollY === 0) {
        navElement.style.setProperty('--cor-de-fundo-nav', 'transparent');
        navElement.style.setProperty('--cor-links-nav', 'white');
    } else {
        navElement.style.setProperty('--cor-de-fundo-nav', 'white');
        navElement.style.setProperty('--cor-links-nav', '#333');
    } 
}

window.addEventListener('scroll', updateElementOnScroll);

updateElementOnScroll();
