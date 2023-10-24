let InstallPrompt = null;

LottiePlay = (container, loop = true) => {
    let lottie = container.getLottie();
    lottie.loop = loop;
    lottie.play();
}
LottiePlaySegments = (container, Segments = [0, 0], loop = true) => {
    let lottie = container.getLottie();
    const max = lottie.totalFrames;
    if (Segments[0] === 0 && Segments[1] === 0)
        Segments[1] = max;
    lottie.loop = loop;
    lottie.playSegments(Segments, !loop);
}
OnRender = (container) => {
    let lottie = container.getLottie();
    container.appendChild(lottie.wrapper.parentElement);
}


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
    main.addEventListener('touchmove', function () { e.preventDefault(); }, { passive: false });
}