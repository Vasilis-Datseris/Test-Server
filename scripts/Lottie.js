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


