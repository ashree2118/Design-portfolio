const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Frontend Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Graphic Designer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Calligrapher";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);

var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'Graphic Designer', 'Calligrapher'],
    typeSpeed: 107,
    backspeed: 90,
    loop: true,
});
 