const body = document.getElementsByTagName('Body')[0];
const parallelWorker = new Worker("Scripts/ParallelWorker.js");
let Net;
parallelWorker.addEventListener("message", (e) => {
    const data = e.data;

    Net.invokeMethodAsync('Process', data[0], data[1]);
});

const scripts = [
    //"https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
    "Scripts/Brotli.js",
    "Scripts/Lottie-Player.min.js",
    "Scripts/Lottie.js",
    "Scripts/ParallelWorker.js",
    "Scripts/Waves.js",
    "Scripts/Fractals.js",
    "Scripts/Flappy.js",
    "Scripts/Splashscreen.js",
    "_content/MudBlazor/MudBlazor.min.js",
];
scripts.forEach((script) => {
    let register = document.createElement("script");
    register.src = script;
    body.appendChild(register);
});

navigator.serviceWorker.register('service-worker.js');

window.addEventListener('beforeinstallprompt', (e) => {
    InstallPrompt = e;

    InstallPrompt.userChoice.then(function (choiceResult) {
        //console.log(choiceResult.outcome); // either "accepted" or "dismissed"

        //try {
        //    DotNet.invokeMethod('Portfolio_Blazor.Client', 'Download_Toast', choiceResultmax-width: {(_isPhone ? "100%" : _isTablet ? "75%" : "50%")}       return Result.outcome === 'accepted';
    });
})

installPortfolio = async () => {
    if (InstallPrompt !== null) {
        let result = await InstallPrompt.prompt();
        return result.outcome === 'accepted';
    }
}
initialization = async () => {
    let main = document.getElementsByClassName('main-container')[0];
    main.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, { passive: false });
}
webWorker = async (dotNet, Value) => {
    Net ??= dotNet;
    parallelWorker.postMessage([Value, Date.now()]);
}
    