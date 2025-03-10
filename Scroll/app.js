const scrollUp = document.getElementById('scroll');

window.addEventListener('scroll', function(){
    if(this.window.scrollY > 300) {
        scrollUp.style.display = "block";
        scrollUp.style.opacity = "1";
    } else {
        scrollUp.style.opacity = "0";
        setTimeout(() => scrollUp.style.display = "none", 300);
    }
});

scrollUp.addEventListener('click', function (){
    window.scrollTo({top: 0, behavior: 'smooth' });
});