function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomCircle() {
    const circle = document.createElement("div");
    circle.className = "circle";

    const size = getRandomInt(20, 100);
    circle.style.width = size + "px";
    circle.style.height = size + "px";

    const r = getRandomInt(0, 255);
    const g = getRandomInt(0, 255);
    const b = getRandomInt(0, 255);
    circle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    const x = getRandomInt(0, window.innerWidth - size);
    const y = getRandomInt(0, window.innerHeight - size);
    circle.style.left = x + "px";
    circle.style.top = y + "px";

    circle.addEventListener('mouseenter', function() {
        const pointer = document.querySelector('.pointer');
        pointer.style.width = '80px'; /* Increase the size */
        pointer.style.height = '80px';
    });

    circle.addEventListener('mouseleave', function() {
        circle.remove(); /* Remove the circle from the DOM */
    });

    document.body.appendChild(circle);
}

const numberOfCircles = 20; // Reduced the number of circles
for (let i = 0; i < numberOfCircles; i++) {
    createRandomCircle();
}

document.addEventListener('mousemove', function(e) {
    const pointer = document.querySelector('.pointer');
    pointer.style.left = e.pageX + 'px';
    pointer.style.top = e.pageY + 'px';
});
