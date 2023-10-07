const body = document.getElementsByTagName('Body')[0];

const scripts = [
    //"https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
    "scripts/Lottie-Player.min.js",
    "scripts/Lottie.js",
    "scripts/Waves.js",
    "scripts/Flappy.js",
    "scripts/splashscreen.js",
    "_content/MudBlazor/MudBlazor.min.js",
    "scripts/Brotli.js",
];
scripts.forEach((script) => {
    let register = document.createElement("script");
    register.src = script;
    body.appendChild(register);
});

navigator.serviceWorker.register('service-worker.js');