self.addEventListener("message", (e) => {
    let Value = e.data[0];
    let Time = e.data[1];

    self.postMessage([Value, Math.abs(Date.now() - Time)]);
}, false);