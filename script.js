const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Frontend Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Graphic Designer";
    }, 3500);
    setTimeout(() => {
        text.textContent = "Calligrapher";
    }, 7000);
}

textLoad();
setInterval(textLoad, 9500);

var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'Graphic Designer', 'Calligrapher'],
    typeSpeed: 107,
    backspeed: 90,
    loop: true,
});
 