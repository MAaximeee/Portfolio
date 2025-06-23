const cursorDot = document.querySelector('.custom-cursor-dot');
const cursorRing = document.querySelector('.custom-cursor-ring');
let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
let ringX = mouseX, ringY = mouseY;


if (cursorDot) {
    cursorDot.style.opacity = 0;
    setTimeout(() => {
        cursorDot.style.transition = "opacity 0.3s";
        cursorDot.style.opacity = 1;
    }, 50);
}
if (cursorRing) {
    cursorRing.style.opacity = 0;
    setTimeout(() => {
        cursorRing.style.transition = "opacity 3s";
        cursorRing.style.opacity = 1;
    }, 50);
}

window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorDot) {
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    }
});

function animateRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    if (cursorRing) {
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';
    }
    requestAnimationFrame(animateRing);
}
animateRing();


const interactiveSelectors = 'a, button, input, textarea, select, label, [tabindex]:not([tabindex="-1"]), summary';
document.addEventListener('mouseover', e => {
    if (e.target.closest(interactiveSelectors)) {
        if (cursorRing) cursorRing.classList.add('cursor-hover');
    }
});
document.addEventListener('mouseout', e => {
    if (e.target.closest(interactiveSelectors)) {
        if (cursorRing) cursorRing.classList.remove('cursor-hover');
    }
});