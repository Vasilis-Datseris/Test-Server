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
    "red": 0.5, 
    "green": 0.5,
    "blue": 0.5,
    "transparent" : 1.0
}

Fractals = () => {
    window.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
            window.setTimeout(a, 1E3 / 60)
        }
    }();
    init();
}

ChangeColor = (red, green, blue, transparent) => {
    fractalColor.red = red / 255;
    fractalColor.green = green / 255;
    fractalColor.blue = blue / 255;
    fractalColor.transparent = transparent;
}

MovePerspective = (e) => {
    if (Fractal.zoom > 0.4 && e.deltaY < 0 || Fractal.zoom < 2000 && e.deltaY > 0) {
        if (e.deltaY > 0)
            Fractal.zoom += Fractal.zoom / 10;
        else
            Fractal.zoom -= Fractal.zoom / 10;
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
        },
        sin: {
            name: "Kreis",
            code: "vec2 startp(float x,float y) {float d = sqrt(x * x + y * y);x*=sin(1.0*x);y*=cos(1.0*y);return vec2(x,y);}"
        },
        exp: {
            name: "Exponentiell",
            code: "vec2 startp(float x,float y) {\t\t\t\tfloat d = sqrt(x * x + y * y);x=x*exp(x/d);y=y*exp(y/d);return vec2(x,y);}"
        }
    },
    calculator: {
        z2: {
            name: "Quad",
            code: "y = y * x;\t\t\ty += y + py;\t\t\tx = xsqr - ysqr + px;"
        },
        z3: {
            name: "Cubic",
            code: "x = x * (xsqr - 3.0 * ysqr) + px;\t\t\ty = y * (3.0 * xsqr - ysqr) + py;"
        },
        z4: {
            name: "Quart",
            code: "y = y * x * (4.0 * xsqr - 4.0 * ysqr) + py;\t\t\tx = (xsqr * xsqr + (ysqr - 6.0 * xsqr) * ysqr) + px;"
        },
        z5: {
            name: "Quint",
            code: "y = y * (5.0 * xsqr * (xsqr - 2.0 * ysqr) + ysqr * ysqr) + py;\t\t\tx = x * (xsqr * xsqr + 5.0 * ysqr * (ysqr - 2.0 * xsqr)) + px;"
        },
        z6: {
            name: "Hex",
            code: "float yt, xt, ydm = y;\t\t\tyt = y * (5.0 * xsqr * (xsqr - 2.0 * ysqr) + ysqr * ysqr);\t\t\txt = x * (xsqr * xsqr + 5.0 * ysqr * (ysqr - 2.0 * xsqr));\t\t\ty = yt * x + xt * ydm + py;\t\t\tx = xt * x - yt * ydm + px;"
        },
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
        },
        poly: {
            name: "Polynom",
            code: "xysqr =xsqr*xsqr +(ysqr*ysqr*ysqr);"
        },
        exp: {
            name: "Exponentiell",
            code: "xysqr =exp(xsqr) +exp(ysqr);"
        }
    },
    paramanim: {
        zero: {
            name: "Zero",
            f: function (a, b) {
                b.cx = 0;
                b.cy = 0
            }
        },
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
        },
        cardio: {
            name: "Kardio",
            f: function (a, b) {
                b.cx = (Math.cos(a) - Math.cos(2 * a) / 2) / 2;
                b.cy = (Math.sin(a) - Math.sin(2 * a) / 2) / 2
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
        },
        var1: {
            code: "float x=p.x, y=ps.y,px=ps.x,py=p.y;vec2 d=startp(x,py);x=d[0];py=d[1];",
            name: "var1"
        },
        var2: {
            code: "float x=ps.x, y=p.y,px=p.x,py=ps.y;vec2 d=startp(px,y);px=d[0];y=d[1];",
            name: "var2"
        }
    }
};
function fragmentShaderSrc(a) {
    //var b = "precision highp float;varying vec2 p;varying vec2 ps;varying float clr;const int maxit = 50;const float border = 100.0;float mfac=1.0/log(border);vec4 getcolor(int n,float x, float y, float xysqr) {float v =( float(n) - log2( mfac * log(sqrt(xysqr)))) / float(maxit);v = ( 1.0+(sin(27.0*v)) )/2.0;return vec4(v,v*v,0.1-v*0.1, 1.0);}vec4 getcolorinside(float x, float y, float xysqr) {float c =  log( 1.0 / ( (x-y)*(x+y) ));return vec4(c*0.0,c*0.0,c*0.0, 0.0);}" + optionsdef.startparamusage[a.startparamusage].code;
    var b = "precision highp float;varying vec2 p;varying vec2 ps;varying float clr;const int maxit = 50;const float border = 100.0;float mfac=1.0/log(border);vec4 getcolor(int n,float x, float y, float xysqr) {float v =( float(n) - log2( mfac * log(sqrt(xysqr)))) / float(maxit);v = ( 1.0+(sin(27.0*v)) )/2.0;return vec4(" + fractalColor.red + "-v," + fractalColor.green + "-v," + fractalColor.blue + "-(v*.3), " + fractalColor.transparent + ");}vec4 getcolorinside(float x, float y, float xysqr) {float c =  log( 1.0 / ( (x-y)*(x+y) ));return vec4(c*0.0,c*0.0,c*0.0, 0.0);}" + optionsdef.startparamusage[a.startparamusage].code;
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
        i = {
            //x: Fractal.center[0] + (e.x - x) / 10,
            x: 2 * (e.clientX / g.width - 0.5) * (g.width / g.height) / Fractal.zoom + Fractal.center[0],
            y: Fractal.center[1] - 2 * (e.clientY / g.height - 0.5) / Fractal.zoom,
            //y: Fractal.center[1]-(e.y - y) / 10,
            x0: Fractal.center[0],
            y0: Fractal.center[1],
            f: 0
        }
        //console.log("i", i.x, i.y);
        x = e.x;
        y = e.y;
    }
    var g = document.getElementById("canvas"), f = initGL(), j, p, q, m, r, n, x, y;
    let destset = Fractal.destset, startparamusage = Fractal.startparamusage, xy = Fractal.xysqrcalc, anim = Fractal.paramanim, calc = Fractal.calculator;
    let red = fractalColor.red, green = fractalColor.green, blue = fractalColor.blue, transparent = fractalColor.transparent;
    g.addEventListener("mouseup", (e) => {
        x = 0;
        y = 0;
        g.removeEventListener("mousemove", k);
    });
    g.addEventListener("mousedown", (e) => {
        e.preventDefault();
        x = e.x;
        y = e.y;
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
        requestAnimFrame(e);
        if (destset != Fractal.destset || startparamusage != Fractal.startparamusage || xy != Fractal.xysqrcalc || anim != Fractal.paramanim || calc != Fractal.calculator || red != fractalColor || green != fractalColor.green || blue != fractalColor.blue || transparent != fractalColor.transparent)
        {
            destset = Fractal.destset, startparamusage = Fractal.startparamusage, xy = Fractal.xysqrcalc, anim = Fractal.paramanim, calc = Fractal.calculator, red = fractalColor.red, green = fractalColor.green, blue = fractalColor.blue, transparent = fractalColor.transparent;
            a();
        }
        o += parseFloat(Fractal.animationspeed / 1e4);
        optionsdef.paramanim[Fractal.paramanim].f(o, Fractal);
        if (i) {
            i.f++;
            var h = i.f / 10;
            h *= h;
            Fractal.center[0] = i.x0 + h * (i.x - i.x0);
            Fractal.center[1] = i.y0 + h * (i.y - i.y0);
            if (i.f == 10)
                i = null
        }
        b()
    }
    )();
    b();
}
