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