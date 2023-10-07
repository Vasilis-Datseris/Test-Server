//let Splash = lottie.loadAnimation({
//    wrapper: document.getElementsByClassName('Splash-lottie')[0],
//    renderer: 'svg',
//    loop: true,
//    autoplay: true,
//    path: 'css/Lottie/Splash.json',
//    name: 'Splash',
//});
//Splash.playSegments([63, 150], false);

//const splashscreen = document.getElementsByClassName('splashscreen')[0]

//for (let i = 1; i < 100; i++) {
//    let row = document.createElement("div");
//    row.className = "splash-row";
//    splashscreen.appendChild(row);
//    for (let j = 1; j < 100; j++) {
//        let cube = document.createElement("div");
//        cube.className = "splash-cube";
//        cube.style.animationDelay = `${j * i * 0.125}ms`;
//        row.appendChild(cube);
//    }
//}

//Evaporize = () => {
//    let max = 0;
//    const cubes = document.getElementsByClassName('splash-cube');
//    [].forEach.call(cubes, (child) => {
//        let number = Number(child.style.animationDelay.replace('ms', '').replace('s', ''));
//        if (number > max)
//            max = number;
//        child.classList.add("splash-cube-fade");
//    });
//    setTimeout(() => {
//        try {
//            cubes[0].parentNode.parentNode.parentNode.removeChild(cubes[0].parentNode.parentNode);
//        }
//        catch (e) { console.log("error", e) }
//    }, max + 0.5);
//}
let Splash = document.getElementsByClassName('Splashscreen')[0];
let Spaceship = document.getElementsByClassName('lottie-spaceship')[0];
let Loading = document.getElementsByClassName('lottie-loading')[0];
let SpaceshipLottie, LoadingLottie;

Spaceship.addEventListener('ready', () => {
    SpaceshipLottie = Spaceship.getLottie();
    SpaceshipLottie.loop = true;
    SpaceshipLottie.playSegments([43, 102], true);
});
Loading.addEventListener('ready', () => {
    LoadingLottie = Loading.getLottie();
    LoadingLottie.loop = true;
    LoadingLottie.play();
});

Spaceship.addEventListener('complete', () => {
    Splash.classList.add('Evaporize')
    setTimeout(() => {
        Splash.parentElement.removeChild(Splash);
    }, 1000);
});

Evaporize = () => {
    try {
        SpaceshipLottie.loop = false;
        SpaceshipLottie.playSegments([210, 269], false);
    }
    catch (e) {
        Spaceship.dispatchEvent(new CustomEvent('complete', null));
    }
}