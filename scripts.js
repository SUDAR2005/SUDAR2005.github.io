document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }
    
    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    }

    const texts = ["Hi this is Sudar...", "I'm an AI Enthusiast and CyberSec Analyst"];
    const textElement = document.getElementById('changing-text');
    
    function changeText() {
        const randomIndex = Math.floor(Math.random() * texts.length);
        textElement.textContent = texts[randomIndex];
        textElement.style.opacity = 1;
        const randomTime = Math.floor(Math.random() * 3000) + 2000;
        setTimeout(() => {
            textElement.style.opacity = 0;
        }, randomTime - 500);
        setTimeout(changeText, randomTime);
    }
    const originalColors = new Map();
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6,b');
    textElements.forEach(element => {
        originalColors.set(element, window.getComputedStyle(element).color);
    });
    document.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'P' || target.tagName === 'SPAN' || target.tagName === 'DIV' || target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3' || target.tagName === 'H4' || target.tagName === 'H5' || target.tagName === 'H6') {
            if (target.style.color === 'red') {
                target.style.color = originalColors.get(target);
            } else {
                target.style.color = 'red';
            }
        }
    });

    changeText();
});
