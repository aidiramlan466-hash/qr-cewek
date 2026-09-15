const button = document.getElementById("openMessage");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.classList.add("show");
    button.style.display = "none";
});

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 700);

const musik = document.getElementById("bgMusic");
document.body.addEventListener("click", () => {
    musik.play();
}, { once: true });