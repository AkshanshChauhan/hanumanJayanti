var aud = new Audio("raghunath.mp3");

function ply() {
    aud.play();
    aud.volume = 1;
    document.getElementById("pBtn").setAttribute("class", "active");
    document.getElementById("chakara").setAttribute("style", "animation: chakar 60s cubic-bezier(1, 1, 1, 1) 0s infinite;");
}

function pause() {
    aud.pause();
    document.getElementById("chakara").setAttribute("style", "");
}