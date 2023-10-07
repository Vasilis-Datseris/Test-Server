const body = document.getElementsByTagName('Body')[0];

//let framework = document.createElement("script");
//framework.src = "_framework/blazor.webassembly.js";
//framework.autostart = "false";
//body.appendChild(framework);

const scripts = [
    //"https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
    "scripts/Lottie-Player.min.js",
    "scripts/Brotli.min.js",
    "scripts/Lottie.js",
    "scripts/Waves.js",
    "scripts/Flappy.js",
    "scripts/splashscreen.js",
    //"_framework/blazor.webassembly.js",
    "_content/MudBlazor/MudBlazor.min.js",
    // "scripts/Brotli.js",
];
const modules = [
    "scripts/Brotli.min.js",
]

modules.forEach((module) => {
    let register = document.createElement("script");
    register.src = module;
    register.type = "module";
    body.appendChild(register);
});
scripts.forEach((script) => {
    let register = document.createElement("script");
    register.src = script;
    body.appendChild(register);
});
//let Brotli = document.createElement("script");
//Brotli.src = "scripts/Brotli.js";
//Brotli.type = "module";
//body.appendChild(Brotli);
