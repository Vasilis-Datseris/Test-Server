var Fractal = {
    destset: "julia",
    startparamusage: "invert",
    xysqrcalc: "sinx",
    paramanim: "c2",
    calculator: "sin",
    cx: 0,
    cy: 0,
    zoom: 0.75,
    center: [0, 0],
    animationspeed: 3
}
let fractalColor = {
    "red": 0.01,
    "green": 0.01,
    "blue": 0.99,
    "transparent": 1.0
}
let interval = 0;
let isPlayingFractals = false, isRainbow = true;
let r = 0, g = 0, b = 255;

FractalRainbow = (Playing) => {
    isRainbow = Playing;
    if (isRainbow)
        Rainbow();
}

FractalsStop = () => {
    isPlayingFractals = false;
}

Fractals = () => {
    isPlayingFractals = true;
    window.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
            window.setTimeout(a, 1E3 / 60)
        }
    }();
    Rainbow();
    init();
}

Rainbow = () => {
    setTimeout(() => {
        if (r < 255 && g == 0 && b <= 255) {
            r++;
        }

        if (r == 255 && g == 0 && b > 0) {
            b--;
        }

        if (r == 255 && b == 0 && g <= 255) {
            g++;
        }

        if (r > 0 && g == 255 && b == 0) {
            r--;
        }

        if (r == 0 && g == 255 && b <= 255) {
            b++;
        }

        if (b == 255 && g == 255 && r > 0) {
            r--;
        }

        if (r == 0 && b == 255 && g > 0) {
            g--;
        }

        fractalColor.red = r / 256;
        fractalColor.green = g / 256;
        fractalColor.blue = b / 256;

        if (isPlayingFractals && isRainbow)
            Rainbow();
    }, 50);
}

ChangeColor = (red, green, blue, transparent) => {
    fractalColor.red = red / 255;
    fractalColor.green = green / 255;
    fractalColor.blue = blue / 255;
    fractalColor.transparent = transparent;
}

MovePerspective = (e) => {
    if (Fractal.zoom > 0.4 && e.deltaY > 0 || Fractal.zoom < 1000 && e.deltaY < 0) {
        if (e.deltaY > 0)
            Fractal.zoom -= Fractal.zoom / 10;
        else
            Fractal.zoom += Fractal.zoom / 10;
    }
}

UpdateSpeed = (e) => {
    Fractal.animationspeed = e;
}

UpdateFractal = (e) => {
    Fractal.destset = e;
}

UpdateFractalType = (e) => {
    Fractal.startparamusage = e;
}

UpdateFractalSquare = (e) => {
    Fractal.xysqrcalc = e;
}

UpdateFractalAnimation = (e) => {
    Fractal.paramanim = e;
}

UpdateFractalExecution = (e) => {
    Fractal.calculator = e;
}

function compileShader(a, b, d) {
    d = a.createShader(d);
    a.shaderSource(d, b);
    a.compileShader(d);
    if (!a.getShaderParameter(d, a.COMPILE_STATUS))
        throw "could not compile shader:" + a.getShaderInfoLog(d);
    return d
}
function createProgram(a, b, d) {
    var g = a.createProgram();
    a.attachShader(g, b);
    a.attachShader(g, d);
    a.linkProgram(g);
    if (!a.getProgramParameter(g, a.LINK_STATUS))
        throw "program filed to link:" + a.getProgramInfoLog(g);
    return g
}
function createProgramFromSrc(a, b, d) {
    return createProgram(a, compileShader(a, b, a.VERTEX_SHADER), compileShader(a, d, a.FRAGMENT_SHADER))
}
function getShader(a, b) {
    var d = document.getElementById(b);
    if (!d)
        return null;
    for (var g = "", c = d.firstChild; c;) {
        if (c.nodeType == 3)
            g += c.textContent;
        c = c.nextSibling
    }
    if (d.type == "x-shader/x-fragment")
        d = a.createShader(a.FRAGMENT_SHADER);
    else if (d.type == "x-shader/x-vertex")
        d = a.createShader(a.VERTEX_SHADER);
    else
        return null;
    a.shaderSource(d, g);
    a.compileShader(d);
    if (!a.getShaderParameter(d, a.COMPILE_STATUS)) {
        alert(a.getShaderInfoLog(d));
        return null
    }
    return d
}
function initShaders(a) {
    var b = getShader(a, "shader-vs")
        , d = getShader(a, "shader-fs")
        , g = a.createProgram();
    a.attachShader(g, b);
    a.attachShader(g, d);
    a.linkProgram(g);
    a.getProgramParameter(g, a.LINK_STATUS) || alert("Could not initialise shaders");
    return g
}
function initGL() {
    var a = document.getElementById("canvas")
        , b = a.getContext("webgl") || a.getContext("experimental-webgl");
    b.disable(b.DEPTH_TEST);
    b.clearColor(0, 0, 0, 0);
    b.viewport(0, 0, a.width, a.height);
    return b
}
function vertexShaderSrc() {
    return "precision highp float;attribute vec2 v;uniform vec2 center;uniform vec2 scalev;uniform vec2 start;uniform float time;varying vec2 p;varying vec2 ps;varying float clr;void main(void) {gl_Position = vec4(v.x, v.y, 0, 1);p = v*scalev+center;ps = start;clr=time;}"
}
var optionsdef = {
    startparamusage: {
        standard: {
            name: "Standard",
            code: "vec2 startp(float x,float y) {return vec2(x,y);}"
        },
        invert: {
            code: "vec2 startp(float x,float y) {float d = x * x + y * y; if (d == 0.0) { x = y = 10e10; } else { x /= d; y /= d;};return vec2(x,y);}",
            name: "Invertiert"
        }
    },
    calculator: {
        reziprok: {
            name: "Reziprok",
            code: "float xdm = x;\t\t\tx = px + (x * px + y * py) / (xsqr + ysqr) + sin(x * (xsqr - 3.0 * ysqr));\t\t\ty = py + (px * y - xdm * py) / (xsqr + ysqr) + y * (3.0 * xsqr - ysqr) + py;"
        },
        sin: {
            name: "Sin",
            code: "float expy = exp(y),expmy = exp(-y);\t\t\tfloat xx= sin(x)*(expy+expmy)*0.5;\t\t\tfloat yy= cos(x)*(expy-expmy)*0.5;\t\t\ty = yy*px+xx*py;\t\t\tx = xx*px-yy*py;"
        }
    },
    xysqrcalc: {
        standard: {
            name: "keine",
            code: "xysqr =xsqr+ ysqr;"
        },
        sinx: {
            name: "sin(y)",
            code: "xysqr =sin(xsqr) + ysqr;"
        },
        siny: {
            name: "sin(y)",
            code: "xysqr =xsqr + sin(ysqr);"
        }
    },
    paramanim: {
        c1: {
            name: "Kreis Radius .25 um (-1,0)",
            f: function (a, b) {
                b.cx = 0.25 * Math.cos(a) - 1;
                b.cy = 0.25 * Math.sin(a)
            }
        },
        c2: {
            name: "Kreis Radius 1 um (0,0)",
            f: function (a, b) {
                b.cx = Math.cos(a);
                b.cy = Math.sin(a)
            }
        }
    },
    destset: {
        julia: {
            code: "float x=p.x,y=p.y,px=ps.x,py=ps.y;vec2 d=startp(x,y);x=d[0];y=d[1];",
            name: "Julia"
        },
        mandel: {
            code: "float x=ps.x, y=ps.y,px=p.x,py=p.y;vec2 d=startp(px,py);px=d[0];py=d[1];",
            name: "Mandelbrot"
        }
    }
};
function fragmentShaderSrc(a) {
    //var b = "precision highp float;varying vec2 p;varying vec2 ps;varying float clr;const int maxit = 50;const float border = 100.0;float mfac=1.0/log(border);vec4 getcolor(int n,float x, float y, float xysqr) {float v =( float(n) - log2( mfac * log(sqrt(xysqr)))) / float(maxit);v = ( 1.0+(sin(27.0*v)) )/2.0;return vec4(v,v*v,0.1-v*0.1, 1.0);}vec4 getcolorinside(float x, float y, float xysqr) {float c =  log( 1.0 / ( (x-y)*(x+y) ));return vec4(c*0.0,c*0.0,c*0.0, 0.0);}" + optionsdef.startparamusage[a.startparamusage].code;
    var b = "precision highp float;varying vec2 p;varying vec2 ps;varying float clr;const int maxit = 50;const float border = 100.0;float mfac=1.0/log(border);vec4 getcolor(int n,float x, float y, float xysqr) {float v =( float(n) - log2( mfac * log(sqrt(xysqr)))) / float(maxit);v = ( 1.0+(sin(27.0*v)) )/2.0;return vec4(" + fractalColor.red.toFixed(2) + "-v," + fractalColor.green.toFixed(2) + "-v," + fractalColor.blue.toFixed(2) + "-v, " + fractalColor.transparent + ");}vec4 getcolorinside(float x, float y, float xysqr) {float c =  log( 1.0 / ( (x-y)*(x+y) ));return vec4(c*0.0,c*0.0,c*0.0, 0.0);}" + optionsdef.startparamusage[a.startparamusage].code;
    b += "void main(void) {" + optionsdef.destset[a.destset].code + "float xsqr;float ysqr;float xysqr;bool inside = true;";
    b += "xsqr = x * x;ysqr = y * y;for (int n=0;n<maxit;n++){" + optionsdef.calculator[a.calculator].code + "xsqr = x * x;\tysqr = y * y;" + optionsdef.xysqrcalc[a.xysqrcalc].code + "\tif ( xysqr > border ) {\t\tgl_FragColor = getcolor(n,x,y,xysqr);\t\tinside = false;\t\tbreak;\t}}if (inside) {\tgl_FragColor = getcolorinside(x,y,xysqr);}}";
    //b += "xsqr = x * x;ysqr = y * y;for (int n=0;n<maxit;n++){" + optionsdef.calculator[a.calculator].code + "xsqr = x * x;\tysqr = y * y;" + optionsdef.xysqrcalc[a.xysqrcalc].code + "\tif ( xysqr > border ) {\t\tgl_FragColor = getcolor(n,x,y,xysqr);\t\tinside = false;\t\tbreak;\t}}if (inside) {\tgl_FragColor = getcolorinside(x,y,xysqr);}}";
    return b
}
function init() {
    function a() {
        j && f.deleteProgram(j);
        j = createProgramFromSrc(f, vertexShaderSrc(), fragmentShaderSrc(Fractal));
        p = f.getUniformLocation(j, "center");
        q = f.getUniformLocation(j, "scalev");
        m = f.getUniformLocation(j, "start");
        r = f.getUniformLocation(j, "time");
        n = f.getAttribLocation(j, "v");
        f.useProgram(j)
    }
    function b() {
        var e = g.width / g.height;
        f.clear(f.COLOR_BUFFER_BIT);
        f.uniform2f(q, e / Fractal.zoom, 1 / Fractal.zoom);
        f.uniform2f(m, Fractal.cx, Fractal.cy);
        f.uniform2f(p, Fractal.center[0], Fractal.center[1]);
        f.uniform1f(r, o);
        f.drawArrays(f.TRIANGLE_STRIP, 0, 4)
    }
    function k(e) {
        x = xBase - e.clientX;
        y = e.clientY - yBase;
        xBase = e.clientX;
        yBase = e.clientY;
    }
    var g = document.getElementById("canvas"), f = initGL(), j, p, listener, q, m, r, n, x = Fractal.center[0], y = Fractal.center[1], xBase, yBase;
    let destset = Fractal.destset, startparamusage = Fractal.startparamusage, xy = Fractal.xysqrcalc, anim = Fractal.paramanim, calc = Fractal.calculator;
    let red = fractalColor.red, green = fractalColor.green, blue = fractalColor.blue, transparent = fractalColor.transparent;
    g.addEventListener("mouseup", (e) => {
        g.removeEventListener("mousemove", k);
        k(e);
    });
    g.addEventListener("mousedown", (e) => {
        e.preventDefault();
        xBase = e.clientX;
        yBase = e.clientY;
        g.addEventListener("mousemove", k);
        //e = e.originalEvent;
        //var h = e.detail;
        //if (e = h ? h * -120 : e.wheelDeltaY) {
        //    h = 1.125;
        //    if (e < 0)
        //        h = 1 / h;
        //    c.zoom *= h;
        //    b()
        //}
    });
    a();
    var o = 0;
    f.enableVertexAttribArray(n);
    var u = f.createBuffer();
    f.bindBuffer(f.ARRAY_BUFFER, u);
    f.bufferData(f.ARRAY_BUFFER, new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]), f.STATIC_DRAW);
    f.vertexAttribPointer(n, 2, f.FLOAT, false, 0, 0);
    window.onresize = function () {
        var e = document.getElementById('canvas').parentElement
            , h = document.getElementsByTagName("body")[0];
        //g.width = h.offsetWidth || window.innerWidth || e.clientWidth || h.clientWidth;
        //g.height = h.offsetHeight || window.innerHeight || e.clientHeight || h.clientHeight;
        g.width = h.clientWidth;
        g.height = h.clientHeight;
        f.viewport(0, 0, h.clientWidth, h.clientHeight);
    };

    window.onresize();
    f.uniform2f(m, Fractal.cx, Fractal.cy);
    var i = null;
    (function e() {
        if (isPlayingFractals)
            requestAnimFrame(e);
        if (destset != Fractal.destset || startparamusage != Fractal.startparamusage || xy != Fractal.xysqrcalc || anim != Fractal.paramanim || calc != Fractal.calculator || red != fractalColor || green != fractalColor.green || blue != fractalColor.blue || transparent != fractalColor.transparent) {
            destset = Fractal.destset, startparamusage = Fractal.startparamusage, xy = Fractal.xysqrcalc, anim = Fractal.paramanim, calc = Fractal.calculator, red = fractalColor.red, green = fractalColor.green, blue = fractalColor.blue, transparent = fractalColor.transparent;
            a();
        }
        o += parseFloat(Fractal.animationspeed / 1e4);
        optionsdef.paramanim[Fractal.paramanim].f(o, Fractal);
        //if (i) {
        //    i.f++;
        //    var h = i.f / 10;
        //    h *= h;
        //    Fractal.center[0] = i.x0 + h * (i.x - i.x0);
        //    Fractal.center[1] = i.y0 + h * (i.y - i.y0);
        //    if (i.f == 10)
        //        i = null
        //}
        //const offset = {
        //    x: Fractal.center[0] + (x / (100 * Fractal.zoom)),
        //    y: Fractal.center[1] + (y / (100 * Fractal.zoom))
        //}
        //if (Fractal.center[0] != offset.x || Fractal.center[1] != offset.y) {
        //    Fractal.center[0] = offset.x;
        //    Fractal.center[1] = offset.y;
        //}
        if (Fractal.center[0] != Fractal.center[0] + (x / (100 * Fractal.zoom)))
            Fractal.center[0] = Fractal.center[0] + (x / (100 * Fractal.zoom));
        if (Fractal.center[1] != Fractal.center[1] + (y / (100 * Fractal.zoom)))
            Fractal.center[1] = Fractal.center[1] + (y / (100 * Fractal.zoom));
        if (isPlayingFractals)
            b();
    }
    )();
    b();
}
