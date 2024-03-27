!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.dat = {}) }(this, function (e) { "use strict"; function t(e, t) { var n = e.__state.conversionName.toString(), o = Math.round(e.r), i = Math.round(e.g), r = Math.round(e.b), s = e.a, a = Math.round(e.h), l = e.s.toFixed(1), d = e.v.toFixed(1); if (t || "THREE_CHAR_HEX" === n || "SIX_CHAR_HEX" === n) { for (var c = e.hex.toString(16); c.length < 6;)c = "0" + c; return "#" + c } return "CSS_RGB" === n ? "rgb(" + o + "," + i + "," + r + ")" : "CSS_RGBA" === n ? "rgba(" + o + "," + i + "," + r + "," + s + ")" : "HEX" === n ? "0x" + e.hex.toString(16) : "RGB_ARRAY" === n ? "[" + o + "," + i + "," + r + "]" : "RGBA_ARRAY" === n ? "[" + o + "," + i + "," + r + "," + s + "]" : "RGB_OBJ" === n ? "{r:" + o + ",g:" + i + ",b:" + r + "}" : "RGBA_OBJ" === n ? "{r:" + o + ",g:" + i + ",b:" + r + ",a:" + s + "}" : "HSV_OBJ" === n ? "{h:" + a + ",s:" + l + ",v:" + d + "}" : "HSVA_OBJ" === n ? "{h:" + a + ",s:" + l + ",v:" + d + ",a:" + s + "}" : "unknown format" } function n(e, t, n) { Object.defineProperty(e, t, { get: function () { return "RGB" === this.__state.space ? this.__state[t] : (I.recalculateRGB(this, t, n), this.__state[t]) }, set: function (e) { "RGB" !== this.__state.space && (I.recalculateRGB(this, t, n), this.__state.space = "RGB"), this.__state[t] = e } }) } function o(e, t) { Object.defineProperty(e, t, { get: function () { return "HSV" === this.__state.space ? this.__state[t] : (I.recalculateHSV(this), this.__state[t]) }, set: function (e) { "HSV" !== this.__state.space && (I.recalculateHSV(this), this.__state.space = "HSV"), this.__state[t] = e } }) } function i(e) { if ("0" === e || S.isUndefined(e)) return 0; var t = e.match(U); return S.isNull(t) ? 0 : parseFloat(t[1]) } function r(e) { var t = e.toString(); return t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0 } function s(e, t) { var n = Math.pow(10, t); return Math.round(e * n) / n } function a(e, t, n, o, i) { return o + (e - t) / (n - t) * (i - o) } function l(e, t, n, o) { e.style.background = "", S.each(ee, function (i) { e.style.cssText += "background: " + i + "linear-gradient(" + t + ", " + n + " 0%, " + o + " 100%); " }) } function d(e) { e.style.background = "", e.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", e.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);" } function c(e, t, n) { var o = document.createElement("li"); return t && o.appendChild(t), n ? e.__ul.insertBefore(o, n) : e.__ul.appendChild(o), e.onResize(), o } function u(e) { X.unbind(window, "resize", e.__resizeHandler), e.saveToLocalStorageIfPossible && X.unbind(window, "unload", e.saveToLocalStorageIfPossible) } function _(e, t) { var n = e.__preset_select[e.__preset_select.selectedIndex]; n.innerHTML = t ? n.value + "*" : n.value } function h(e, t, n) { if (n.__li = t, n.__gui = e, S.extend(n, { options: function (t) { if (arguments.length > 1) { var o = n.__li.nextElementSibling; return n.remove(), f(e, n.object, n.property, { before: o, factoryArgs: [S.toArray(arguments)] }) } if (S.isArray(t) || S.isObject(t)) { var i = n.__li.nextElementSibling; return n.remove(), f(e, n.object, n.property, { before: i, factoryArgs: [t] }) } }, name: function (e) { return n.__li.firstElementChild.firstElementChild.innerHTML = e, n }, listen: function () { return n.__gui.listen(n), n }, remove: function () { return n.__gui.remove(n), n } }), n instanceof q) { var o = new Q(n.object, n.property, { min: n.__min, max: n.__max, step: n.__step }); S.each(["updateDisplay", "onChange", "onFinishChange", "step"], function (e) { var t = n[e], i = o[e]; n[e] = o[e] = function () { var e = Array.prototype.slice.call(arguments); return i.apply(o, e), t.apply(n, e) } }), X.addClass(t, "has-slider"), n.domElement.insertBefore(o.domElement, n.domElement.firstElementChild) } else if (n instanceof Q) { var i = function (t) { if (S.isNumber(n.__min) && S.isNumber(n.__max)) { var o = n.__li.firstElementChild.firstElementChild.innerHTML, i = n.__gui.__listening.indexOf(n) > -1; n.remove(); var r = f(e, n.object, n.property, { before: n.__li.nextElementSibling, factoryArgs: [n.__min, n.__max, n.__step] }); return r.name(o), i && r.listen(), r } return t }; n.min = S.compose(i, n.min), n.max = S.compose(i, n.max) } else n instanceof K ? (X.bind(t, "click", function () { X.fakeEvent(n.__checkbox, "click") }), X.bind(n.__checkbox, "click", function (e) { e.stopPropagation() })) : n instanceof Z ? (X.bind(t, "click", function () { X.fakeEvent(n.__button, "click") }), X.bind(t, "mouseover", function () { X.addClass(n.__button, "hover") }), X.bind(t, "mouseout", function () { X.removeClass(n.__button, "hover") })) : n instanceof $ && (X.addClass(t, "color"), n.updateDisplay = S.compose(function (e) { return t.style.borderLeftColor = n.__color.toString(), e }, n.updateDisplay), n.updateDisplay()); n.setValue = S.compose(function (t) { return e.getRoot().__preset_select && n.isModified() && _(e.getRoot(), !0), t }, n.setValue) } function p(e, t) { var n = e.getRoot(), o = n.__rememberedObjects.indexOf(t.object); if (-1 !== o) { var i = n.__rememberedObjectIndecesToControllers[o]; if (void 0 === i && (i = {}, n.__rememberedObjectIndecesToControllers[o] = i), i[t.property] = t, n.load && n.load.remembered) { var r = n.load.remembered, s = void 0; if (r[e.preset]) s = r[e.preset]; else { if (!r[se]) return; s = r[se] } if (s[o] && void 0 !== s[o][t.property]) { var a = s[o][t.property]; t.initialValue = a, t.setValue(a) } } } } function f(e, t, n, o) { if (void 0 === t[n]) throw new Error('Object "' + t + '" has no property "' + n + '"'); var i = void 0; if (o.color) i = new $(t, n); else { var r = [t, n].concat(o.factoryArgs); i = ne.apply(e, r) } o.before instanceof z && (o.before = o.before.__li), p(e, i), X.addClass(i.domElement, "c"); var s = document.createElement("span"); X.addClass(s, "property-name"), s.innerHTML = i.property; var a = document.createElement("div"); a.appendChild(s), a.appendChild(i.domElement); var l = c(e, a, o.before); return X.addClass(l, he.CLASS_CONTROLLER_ROW), i instanceof $ ? X.addClass(l, "color") : X.addClass(l, H(i.getValue())), h(e, l, i), e.__controllers.push(i), i } function m(e, t) { return document.location.href + "." + t } function g(e, t, n) { var o = document.createElement("option"); o.innerHTML = t, o.value = t, e.__preset_select.appendChild(o), n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1) } function b(e, t) { t.style.display = e.useLocalStorage ? "block" : "none" } function v(e) { var t = e.__save_row = document.createElement("li"); X.addClass(e.domElement, "has-save"), e.__ul.insertBefore(t, e.__ul.firstChild), X.addClass(t, "save-row"); var n = document.createElement("span"); n.innerHTML = "&nbsp;", X.addClass(n, "button gears"); var o = document.createElement("span"); o.innerHTML = "Save", X.addClass(o, "button"), X.addClass(o, "save"); var i = document.createElement("span"); i.innerHTML = "New", X.addClass(i, "button"), X.addClass(i, "save-as"); var r = document.createElement("span"); r.innerHTML = "Revert", X.addClass(r, "button"), X.addClass(r, "revert"); var s = e.__preset_select = document.createElement("select"); if (e.load && e.load.remembered ? S.each(e.load.remembered, function (t, n) { g(e, n, n === e.preset) }) : g(e, se, !1), X.bind(s, "change", function () { for (var t = 0; t < e.__preset_select.length; t++)e.__preset_select[t].innerHTML = e.__preset_select[t].value; e.preset = this.value }), t.appendChild(s), t.appendChild(n), t.appendChild(o), t.appendChild(i), t.appendChild(r), ae) { var a = document.getElementById("dg-local-explain"), l = document.getElementById("dg-local-storage"); document.getElementById("dg-save-locally").style.display = "block", "true" === localStorage.getItem(m(e, "isLocal")) && l.setAttribute("checked", "checked"), b(e, a), X.bind(l, "change", function () { e.useLocalStorage = !e.useLocalStorage, b(e, a) }) } var d = document.getElementById("dg-new-constructor"); X.bind(d, "keydown", function (e) { !e.metaKey || 67 !== e.which && 67 !== e.keyCode || le.hide() }), X.bind(n, "click", function () { d.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2), le.show(), d.focus(), d.select() }), X.bind(o, "click", function () { e.save() }), X.bind(i, "click", function () { var t = prompt("Enter a new preset name."); t && e.saveAs(t) }), X.bind(r, "click", function () { e.revert() }) } function y(e) { function t(t) { return t.preventDefault(), e.width += i - t.clientX, e.onResize(), i = t.clientX, !1 } function n() { X.removeClass(e.__closeButton, he.CLASS_DRAG), X.unbind(window, "mousemove", t), X.unbind(window, "mouseup", n) } function o(o) { return o.preventDefault(), i = o.clientX, X.addClass(e.__closeButton, he.CLASS_DRAG), X.bind(window, "mousemove", t), X.bind(window, "mouseup", n), !1 } var i = void 0; e.__resize_handle = document.createElement("div"), S.extend(e.__resize_handle.style, { width: "6px", marginLeft: "-3px", height: "200px", cursor: "ew-resize", position: "absolute" }), X.bind(e.__resize_handle, "mousedown", o), X.bind(e.__closeButton, "mousedown", o), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild) } function w(e, t) { e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px") } function x(e, t) { var n = {}; return S.each(e.__rememberedObjects, function (o, i) { var r = {}, s = e.__rememberedObjectIndecesToControllers[i]; S.each(s, function (e, n) { r[n] = t ? e.initialValue : e.getValue() }), n[i] = r }), n } function E(e) { for (var t = 0; t < e.__preset_select.length; t++)e.__preset_select[t].value === e.preset && (e.__preset_select.selectedIndex = t) } function C(e) { 0 !== e.length && oe.call(window, function () { C(e) }), S.each(e, function (e) { e.updateDisplay() }) } var A = Array.prototype.forEach, k = Array.prototype.slice, S = { BREAK: {}, extend: function (e) { return this.each(k.call(arguments, 1), function (t) { (this.isObject(t) ? Object.keys(t) : []).forEach(function (n) { this.isUndefined(t[n]) || (e[n] = t[n]) }.bind(this)) }, this), e }, defaults: function (e) { return this.each(k.call(arguments, 1), function (t) { (this.isObject(t) ? Object.keys(t) : []).forEach(function (n) { this.isUndefined(e[n]) && (e[n] = t[n]) }.bind(this)) }, this), e }, compose: function () { var e = k.call(arguments); return function () { for (var t = k.call(arguments), n = e.length - 1; n >= 0; n--)t = [e[n].apply(this, t)]; return t[0] } }, each: function (e, t, n) { if (e) if (A && e.forEach && e.forEach === A) e.forEach(t, n); else if (e.length === e.length + 0) { var o = void 0, i = void 0; for (o = 0, i = e.length; o < i; o++)if (o in e && t.call(n, e[o], o) === this.BREAK) return } else for (var r in e) if (t.call(n, e[r], r) === this.BREAK) return }, defer: function (e) { setTimeout(e, 0) }, debounce: function (e, t, n) { var o = void 0; return function () { var i = this, r = arguments, s = n || !o; clearTimeout(o), o = setTimeout(function () { o = null, n || e.apply(i, r) }, t), s && e.apply(i, r) } }, toArray: function (e) { return e.toArray ? e.toArray() : k.call(e) }, isUndefined: function (e) { return void 0 === e }, isNull: function (e) { return null === e }, isNaN: function (e) { function t(t) { return e.apply(this, arguments) } return t.toString = function () { return e.toString() }, t }(function (e) { return isNaN(e) }), isArray: Array.isArray || function (e) { return e.constructor === Array }, isObject: function (e) { return e === Object(e) }, isNumber: function (e) { return e === e + 0 }, isString: function (e) { return e === e + "" }, isBoolean: function (e) { return !1 === e || !0 === e }, isFunction: function (e) { return "[object Function]" === Object.prototype.toString.call(e) } }, O = [{ litmus: S.isString, conversions: { THREE_CHAR_HEX: { read: function (e) { var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i); return null !== t && { space: "HEX", hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0) } }, write: t }, SIX_CHAR_HEX: { read: function (e) { var t = e.match(/^#([A-F0-9]{6})$/i); return null !== t && { space: "HEX", hex: parseInt("0x" + t[1].toString(), 0) } }, write: t }, CSS_RGB: { read: function (e) { var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/); return null !== t && { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]) } }, write: t }, CSS_RGBA: { read: function (e) { var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/); return null !== t && { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]), a: parseFloat(t[4]) } }, write: t } } }, { litmus: S.isNumber, conversions: { HEX: { read: function (e) { return { space: "HEX", hex: e, conversionName: "HEX" } }, write: function (e) { return e.hex } } } }, { litmus: S.isArray, conversions: { RGB_ARRAY: { read: function (e) { return 3 === e.length && { space: "RGB", r: e[0], g: e[1], b: e[2] } }, write: function (e) { return [e.r, e.g, e.b] } }, RGBA_ARRAY: { read: function (e) { return 4 === e.length && { space: "RGB", r: e[0], g: e[1], b: e[2], a: e[3] } }, write: function (e) { return [e.r, e.g, e.b, e.a] } } } }, { litmus: S.isObject, conversions: { RGBA_OBJ: { read: function (e) { return !!(S.isNumber(e.r) && S.isNumber(e.g) && S.isNumber(e.b) && S.isNumber(e.a)) && { space: "RGB", r: e.r, g: e.g, b: e.b, a: e.a } }, write: function (e) { return { r: e.r, g: e.g, b: e.b, a: e.a } } }, RGB_OBJ: { read: function (e) { return !!(S.isNumber(e.r) && S.isNumber(e.g) && S.isNumber(e.b)) && { space: "RGB", r: e.r, g: e.g, b: e.b } }, write: function (e) { return { r: e.r, g: e.g, b: e.b } } }, HSVA_OBJ: { read: function (e) { return !!(S.isNumber(e.h) && S.isNumber(e.s) && S.isNumber(e.v) && S.isNumber(e.a)) && { space: "HSV", h: e.h, s: e.s, v: e.v, a: e.a } }, write: function (e) { return { h: e.h, s: e.s, v: e.v, a: e.a } } }, HSV_OBJ: { read: function (e) { return !!(S.isNumber(e.h) && S.isNumber(e.s) && S.isNumber(e.v)) && { space: "HSV", h: e.h, s: e.s, v: e.v } }, write: function (e) { return { h: e.h, s: e.s, v: e.v } } } } }], T = void 0, L = void 0, R = function () { L = !1; var e = arguments.length > 1 ? S.toArray(arguments) : arguments[0]; return S.each(O, function (t) { if (t.litmus(e)) return S.each(t.conversions, function (t, n) { if (T = t.read(e), !1 === L && !1 !== T) return L = T, T.conversionName = n, T.conversion = t, S.BREAK }), S.BREAK }), L }, B = void 0, N = { hsv_to_rgb: function (e, t, n) { var o = Math.floor(e / 60) % 6, i = e / 60 - Math.floor(e / 60), r = n * (1 - t), s = n * (1 - i * t), a = n * (1 - (1 - i) * t), l = [[n, a, r], [s, n, r], [r, n, a], [r, s, n], [a, r, n], [n, r, s]][o]; return { r: 255 * l[0], g: 255 * l[1], b: 255 * l[2] } }, rgb_to_hsv: function (e, t, n) { var o = Math.min(e, t, n), i = Math.max(e, t, n), r = i - o, s = void 0, a = void 0; return 0 === i ? { h: NaN, s: 0, v: 0 } : (a = r / i, s = e === i ? (t - n) / r : t === i ? 2 + (n - e) / r : 4 + (e - t) / r, (s /= 6) < 0 && (s += 1), { h: 360 * s, s: a, v: i / 255 }) }, rgb_to_hex: function (e, t, n) { var o = this.hex_with_component(0, 2, e); return o = this.hex_with_component(o, 1, t), o = this.hex_with_component(o, 0, n) }, component_from_hex: function (e, t) { return e >> 8 * t & 255 }, hex_with_component: function (e, t, n) { return n << (B = 8 * t) | e & ~(255 << B) } }, H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, F = function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }, P = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var o = t[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } } return function (t, n, o) { return n && e(t.prototype, n), o && e(t, o), t } }(), j = function e(t, n, o) { null === t && (t = Function.prototype); var i = Object.getOwnPropertyDescriptor(t, n); if (void 0 === i) { var r = Object.getPrototypeOf(t); return null === r ? void 0 : e(r, n, o) } if ("value" in i) return i.value; var s = i.get; if (void 0 !== s) return s.call(o) }, D = function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }, V = function (e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }, I = function () { function e() { if (F(this, e), this.__state = R.apply(this, arguments), !1 === this.__state) throw new Error("Failed to interpret color arguments"); this.__state.a = this.__state.a || 1 } return P(e, [{ key: "toString", value: function () { return t(this) } }, { key: "toHexString", value: function () { return t(this, !0) } }, { key: "toOriginal", value: function () { return this.__state.conversion.write(this) } }]), e }(); I.recalculateRGB = function (e, t, n) { if ("HEX" === e.__state.space) e.__state[t] = N.component_from_hex(e.__state.hex, n); else { if ("HSV" !== e.__state.space) throw new Error("Corrupted color state"); S.extend(e.__state, N.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v)) } }, I.recalculateHSV = function (e) { var t = N.rgb_to_hsv(e.r, e.g, e.b); S.extend(e.__state, { s: t.s, v: t.v }), S.isNaN(t.h) ? S.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = t.h }, I.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], n(I.prototype, "r", 2), n(I.prototype, "g", 1), n(I.prototype, "b", 0), o(I.prototype, "h"), o(I.prototype, "s"), o(I.prototype, "v"), Object.defineProperty(I.prototype, "a", { get: function () { return this.__state.a }, set: function (e) { this.__state.a = e } }), Object.defineProperty(I.prototype, "hex", { get: function () { return "HEX" !== !this.__state.space && (this.__state.hex = N.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex }, set: function (e) { this.__state.space = "HEX", this.__state.hex = e } }); var z = function () { function e(t, n) { F(this, e), this.initialValue = t[n], this.domElement = document.createElement("div"), this.object = t, this.property = n, this.__onChange = void 0, this.__onFinishChange = void 0 } return P(e, [{ key: "onChange", value: function (e) { return this.__onChange = e, this } }, { key: "onFinishChange", value: function (e) { return this.__onFinishChange = e, this } }, { key: "setValue", value: function (e) { return this.object[this.property] = e, this.__onChange && this.__onChange.call(this, e), this.updateDisplay(), this } }, { key: "getValue", value: function () { return this.object[this.property] } }, { key: "updateDisplay", value: function () { return this } }, { key: "isModified", value: function () { return this.initialValue !== this.getValue() } }]), e }(), M = { HTMLEvents: ["change"], MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"], KeyboardEvents: ["keydown"] }, G = {}; S.each(M, function (e, t) { S.each(e, function (e) { G[e] = t }) }); var U = /(\d+(\.\d+)?)px/, X = { makeSelectable: function (e, t) { void 0 !== e && void 0 !== e.style && (e.onselectstart = t ? function () { return !1 } : function () { }, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off") }, makeFullscreen: function (e, t, n) { var o = n, i = t; S.isUndefined(i) && (i = !0), S.isUndefined(o) && (o = !0), e.style.position = "absolute", i && (e.style.left = 0, e.style.right = 0), o && (e.style.top = 0, e.style.bottom = 0) }, fakeEvent: function (e, t, n, o) { var i = n || {}, r = G[t]; if (!r) throw new Error("Event type " + t + " not supported."); var s = document.createEvent(r); switch (r) { case "MouseEvents": var a = i.x || i.clientX || 0, l = i.y || i.clientY || 0; s.initMouseEvent(t, i.bubbles || !1, i.cancelable || !0, window, i.clickCount || 1, 0, 0, a, l, !1, !1, !1, !1, 0, null); break; case "KeyboardEvents": var d = s.initKeyboardEvent || s.initKeyEvent; S.defaults(i, { cancelable: !0, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1, keyCode: void 0, charCode: void 0 }), d(t, i.bubbles || !1, i.cancelable, window, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.keyCode, i.charCode); break; default: s.initEvent(t, i.bubbles || !1, i.cancelable || !0) }S.defaults(s, o), e.dispatchEvent(s) }, bind: function (e, t, n, o) { var i = o || !1; return e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n), X }, unbind: function (e, t, n, o) { var i = o || !1; return e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n), X }, addClass: function (e, t) { if (void 0 === e.className) e.className = t; else if (e.className !== t) { var n = e.className.split(/ +/); -1 === n.indexOf(t) && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, "")) } return X }, removeClass: function (e, t) { if (t) if (e.className === t) e.removeAttribute("class"); else { var n = e.className.split(/ +/), o = n.indexOf(t); -1 !== o && (n.splice(o, 1), e.className = n.join(" ")) } else e.className = void 0; return X }, hasClass: function (e, t) { return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1 }, getWidth: function (e) { var t = getComputedStyle(e); return i(t["border-left-width"]) + i(t["border-right-width"]) + i(t["padding-left"]) + i(t["padding-right"]) + i(t.width) }, getHeight: function (e) { var t = getComputedStyle(e); return i(t["border-top-width"]) + i(t["border-bottom-width"]) + i(t["padding-top"]) + i(t["padding-bottom"]) + i(t.height) }, getOffset: function (e) { var t = e, n = { left: 0, top: 0 }; if (t.offsetParent) do { n.left += t.offsetLeft, n.top += t.offsetTop, t = t.offsetParent } while (t); return n }, isActive: function (e) { return e === document.activeElement && (e.type || e.href) } }, K = function (e) { function t(e, n) { F(this, t); var o = V(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)), i = o; return o.__prev = o.getValue(), o.__checkbox = document.createElement("input"), o.__checkbox.setAttribute("type", "checkbox"), X.bind(o.__checkbox, "change", function () { i.setValue(!i.__prev) }, !1), o.domElement.appendChild(o.__checkbox), o.updateDisplay(), o } return D(t, z), P(t, [{ key: "setValue", value: function (e) { var n = j(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, e); return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), n } }, { key: "updateDisplay", value: function () { return !0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0, this.__prev = !0) : (this.__checkbox.checked = !1, this.__prev = !1), j(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this) } }]), t }(), Y = function (e) { function t(e, n, o) { F(this, t); var i = V(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)), r = o, s = i; if (i.__select = document.createElement("select"), S.isArray(r)) { var a = {}; S.each(r, function (e) { a[e] = e }), r = a } return S.each(r, function (e, t) { var n = document.createElement("option"); n.innerHTML = t, n.setAttribute("value", e), s.__select.appendChild(n) }), i.updateDisplay(), X.bind(i.__select, "change", function () { var e = this.options[this.selectedIndex].value; s.setValue(e) }), i.domElement.appendChild(i.__select), i } return D(t, z), P(t, [{ key: "setValue", value: function (e) { var n = j(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, e); return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), n } }, { key: "updateDisplay", value: function () { return X.isActive(this.__select) ? this : (this.__select.value = this.getValue(), j(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this)) } }]), t }(), J = function (e) { function t(e, n) { function o() { r.setValue(r.__input.value) } F(this, t); var i = V(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)), r = i; return i.__input = document.createElement("input"), i.__input.setAttribute("type", "text"), X.bind(i.__input, "keyup", o), X.bind(i.__input, "change", o), X.bind(i.__input, "blur", function () { r.__onFinishChange && r.__onFinishChange.call(r, r.getValue()) }), X.bind(i.__input, "keydown", function (e) { 13 === e.keyCode && this.blur() }), i.updateDisplay(), i.domElement.appendChild(i.__input), i } return D(t, z), P(t, [{ key: "updateDisplay", value: function () { return X.isActive(this.__input) || (this.__input.value = this.getValue()), j(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this) } }]), t }(), W = function (e) { function t(e, n, o) { F(this, t); var i = V(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)), s = o || {}; return i.__min = s.min, i.__max = s.max, i.__step = s.step, S.isUndefined(i.__step) ? 0 === i.initialValue ? i.__impliedStep = 1 : i.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(i.initialValue)) / Math.LN10)) / 10 : i.__impliedStep = i.__step, i.__precision = r(i.__impliedStep), i } return D(t, z), P(t, [{ key: "setValue", value: function (e) { var n = e; return void 0 !== this.__min && n < this.__min ? n = this.__min : void 0 !== this.__max && n > this.__max && (n = this.__max), void 0 !== this.__step && n % this.__step != 0 && (n = Math.round(n / this.__step) * this.__step), j(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, n) } }, { key: "min", value: function (e) { return this.__min = e, this } }, { key: "max", value: function (e) { return this.__max = e, this } }, { key: "step", value: function (e) { return this.__step = e, this.__impliedStep = e, this.__precision = r(e), this } }]), t }(), Q = function (e) { function t(e, n, o) { function i() { l.__onFinishChange && l.__onFinishChange.call(l, l.getValue()) } function r(e) { var t = d - e.clientY; l.setValue(l.getValue() + t * l.__impliedStep), d = e.clientY } function s() { X.unbind(window, "mousemove", r), X.unbind(window, "mouseup", s), i() } F(this, t); var a = V(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, o)); a.__truncationSuspended = !1; var l = a, d = void 0; return a.__input = document.createElement("input"), a.__input.setAttribute("type", "text"), X.bind(a.__input, "change", function () { var e = parseFloat(l.__input.value); S.isNaN(e) || l.setValue(e) }), X.bind(a.__input, "blur", function () { i() }), X.bind(a.__input, "mousedown", function (e) { X.bind(window, "mousemove", r), X.bind(window, "mouseup", s), d = e.clientY }), X.bind(a.__input, "keydown", function (e) { 13 === e.keyCode && (l.__truncationSuspended = !0, this.blur(), l.__truncationSuspended = !1, i()) }), a.updateDisplay(), a.domElement.appendChild(a.__input), a } return D(t, W), P(t, [{ key: "updateDisplay", value: function () { return this.__input.value = this.__truncationSuspended ? this.getValue() : s(this.getValue(), this.__precision), j(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this) } }]), t }(), q = function (e) { function t(e, n, o, i, r) { function s(e) { e.preventDefault(); var t = _.__background.getBoundingClientRect(); return _.setValue(a(e.clientX, t.left, t.right, _.__min, _.__max)), !1 } function l() { X.unbind(window, "mousemove", s), X.unbind(window, "mouseup", l), _.__onFinishChange && _.__onFinishChange.call(_, _.getValue()) } function d(e) { var t = e.touches[0].clientX, n = _.__background.getBoundingClientRect(); _.setValue(a(t, n.left, n.right, _.__min, _.__max)) } function c() { X.unbind(window, "touchmove", d), X.unbind(window, "touchend", c), _.__onFinishChange && _.__onFinishChange.call(_, _.getValue()) } F(this, t); var u = V(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, { min: o, max: i, step: r })), _ = u; return u.__background = document.createElement("div"), u.__foreground = document.createElement("div"), X.bind(u.__background, "mousedown", function (e) { document.activeElement.blur(), X.bind(window, "mousemove", s), X.bind(window, "mouseup", l), s(e) }), X.bind(u.__background, "touchstart", function (e) { 1 === e.touches.length && (X.bind(window, "touchmove", d), X.bind(window, "touchend", c), d(e)) }), X.addClass(u.__background, "slider"), X.addClass(u.__foreground, "slider-fg"), u.updateDisplay(), u.__background.appendChild(u.__foreground), u.domElement.appendChild(u.__background), u } return D(t, W), P(t, [{ key: "updateDisplay", value: function () { var e = (this.getValue() - this.__min) / (this.__max - this.__min); return this.__foreground.style.width = 100 * e + "%", j(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this) } }]), t }(), Z = function (e) { function t(e, n, o) { F(this, t); var i = V(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)), r = i; return i.__button = document.createElement("div"), i.__button.innerHTML = void 0 === o ? "Fire" : o, X.bind(i.__button, "click", function (e) { return e.preventDefault(), r.fire(), !1 }), X.addClass(i.__button, "button"), i.domElement.appendChild(i.__button), i } return D(t, z), P(t, [{ key: "fire", value: function () { this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()) } }]), t }(), $ = function (e) { function t(e, n) { function o(e) { u(e), X.bind(window, "mousemove", u), X.bind(window, "touchmove", u), X.bind(window, "mouseup", r), X.bind(window, "touchend", r) } function i(e) { _(e), X.bind(window, "mousemove", _), X.bind(window, "touchmove", _), X.bind(window, "mouseup", s), X.bind(window, "touchend", s) } function r() { X.unbind(window, "mousemove", u), X.unbind(window, "touchmove", u), X.unbind(window, "mouseup", r), X.unbind(window, "touchend", r), c() } function s() { X.unbind(window, "mousemove", _), X.unbind(window, "touchmove", _), X.unbind(window, "mouseup", s), X.unbind(window, "touchend", s), c() } function a() { var e = R(this.value); !1 !== e ? (p.__color.__state = e, p.setValue(p.__color.toOriginal())) : this.value = p.__color.toString() } function c() { p.__onFinishChange && p.__onFinishChange.call(p, p.__color.toOriginal()) } function u(e) { -1 === e.type.indexOf("touch") && e.preventDefault(); var t = p.__saturation_field.getBoundingClientRect(), n = e.touches && e.touches[0] || e, o = n.clientX, i = n.clientY, r = (o - t.left) / (t.right - t.left), s = 1 - (i - t.top) / (t.bottom - t.top); return s > 1 ? s = 1 : s < 0 && (s = 0), r > 1 ? r = 1 : r < 0 && (r = 0), p.__color.v = s, p.__color.s = r, p.setValue(p.__color.toOriginal()), !1 } function _(e) { -1 === e.type.indexOf("touch") && e.preventDefault(); var t = p.__hue_field.getBoundingClientRect(), n = 1 - ((e.touches && e.touches[0] || e).clientY - t.top) / (t.bottom - t.top); return n > 1 ? n = 1 : n < 0 && (n = 0), p.__color.h = 360 * n, p.setValue(p.__color.toOriginal()), !1 } F(this, t); var h = V(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); h.__color = new I(h.getValue()), h.__temp = new I(0); var p = h; h.domElement = document.createElement("div"), X.makeSelectable(h.domElement, !1), h.__selector = document.createElement("div"), h.__selector.className = "selector", h.__saturation_field = document.createElement("div"), h.__saturation_field.className = "saturation-field", h.__field_knob = document.createElement("div"), h.__field_knob.className = "field-knob", h.__field_knob_border = "2px solid ", h.__hue_knob = document.createElement("div"), h.__hue_knob.className = "hue-knob", h.__hue_field = document.createElement("div"), h.__hue_field.className = "hue-field", h.__input = document.createElement("input"), h.__input.type = "text", h.__input_textShadow = "0 1px 1px ", X.bind(h.__input, "keydown", function (e) { 13 === e.keyCode && a.call(this) }), X.bind(h.__input, "blur", a), X.bind(h.__selector, "mousedown", function () { X.addClass(this, "drag").bind(window, "mouseup", function () { X.removeClass(p.__selector, "drag") }) }), X.bind(h.__selector, "touchstart", function () { X.addClass(this, "drag").bind(window, "touchend", function () { X.removeClass(p.__selector, "drag") }) }); var f = document.createElement("div"); return S.extend(h.__selector.style, { width: "122px", height: "102px", padding: "3px", backgroundColor: "#222", boxShadow: "0px 1px 3px rgba(0,0,0,0.3)" }), S.extend(h.__field_knob.style, { position: "absolute", width: "12px", height: "12px", border: h.__field_knob_border + (h.__color.v < .5 ? "#fff" : "#000"), boxShadow: "0px 1px 3px rgba(0,0,0,0.5)", borderRadius: "12px", zIndex: 1 }), S.extend(h.__hue_knob.style, { position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1 }), S.extend(h.__saturation_field.style, { width: "100px", height: "100px", border: "1px solid #555", marginRight: "3px", display: "inline-block", cursor: "pointer" }), S.extend(f.style, { width: "100%", height: "100%", background: "none" }), l(f, "top", "rgba(0,0,0,0)", "#000"), S.extend(h.__hue_field.style, { width: "15px", height: "100px", border: "1px solid #555", cursor: "ns-resize", position: "absolute", top: "3px", right: "3px" }), d(h.__hue_field), S.extend(h.__input.style, { outline: "none", textAlign: "center", color: "#fff", border: 0, fontWeight: "bold", textShadow: h.__input_textShadow + "rgba(0,0,0,0.7)" }), X.bind(h.__saturation_field, "mousedown", o), X.bind(h.__saturation_field, "touchstart", o), X.bind(h.__field_knob, "mousedown", o), X.bind(h.__field_knob, "touchstart", o), X.bind(h.__hue_field, "mousedown", i), X.bind(h.__hue_field, "touchstart", i), h.__saturation_field.appendChild(f), h.__selector.appendChild(h.__field_knob), h.__selector.appendChild(h.__saturation_field), h.__selector.appendChild(h.__hue_field), h.__hue_field.appendChild(h.__hue_knob), h.domElement.appendChild(h.__input), h.domElement.appendChild(h.__selector), h.updateDisplay(), h } return D(t, z), P(t, [{ key: "updateDisplay", value: function () { var e = R(this.getValue()); if (!1 !== e) { var t = !1; S.each(I.COMPONENTS, function (n) { if (!S.isUndefined(e[n]) && !S.isUndefined(this.__color.__state[n]) && e[n] !== this.__color.__state[n]) return t = !0, {} }, this), t && S.extend(this.__color.__state, e) } S.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1; var n = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0, o = 255 - n; S.extend(this.__field_knob.style, { marginLeft: 100 * this.__color.s - 7 + "px", marginTop: 100 * (1 - this.__color.v) - 7 + "px", backgroundColor: this.__temp.toHexString(), border: this.__field_knob_border + "rgb(" + n + "," + n + "," + n + ")" }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, l(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), S.extend(this.__input.style, { backgroundColor: this.__color.toHexString(), color: "rgb(" + n + "," + n + "," + n + ")", textShadow: this.__input_textShadow + "rgba(" + o + "," + o + "," + o + ",.7)" }) } }]), t }(), ee = ["-moz-", "-o-", "-webkit-", "-ms-", ""], te = { load: function (e, t) { var n = t || document, o = n.createElement("link"); o.type = "text/css", o.rel = "stylesheet", o.href = e, n.getElementsByTagName("head")[0].appendChild(o) }, inject: function (e, t) { var n = t || document, o = document.createElement("style"); o.type = "text/css", o.innerHTML = e; var i = n.getElementsByTagName("head")[0]; try { i.appendChild(o) } catch (e) { } } }, ne = function (e, t) { var n = e[t]; return S.isArray(arguments[2]) || S.isObject(arguments[2]) ? new Y(e, t, arguments[2]) : S.isNumber(n) ? S.isNumber(arguments[2]) && S.isNumber(arguments[3]) ? S.isNumber(arguments[4]) ? new q(e, t, arguments[2], arguments[3], arguments[4]) : new q(e, t, arguments[2], arguments[3]) : S.isNumber(arguments[4]) ? new Q(e, t, { min: arguments[2], max: arguments[3], step: arguments[4] }) : new Q(e, t, { min: arguments[2], max: arguments[3] }) : S.isString(n) ? new J(e, t) : S.isFunction(n) ? new Z(e, t, "") : S.isBoolean(n) ? new K(e, t) : null }, oe = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) { setTimeout(e, 1e3 / 60) }, ie = function () { function e() { F(this, e), this.backgroundElement = document.createElement("div"), S.extend(this.backgroundElement.style, { backgroundColor: "rgba(0,0,0,0.8)", top: 0, left: 0, display: "none", zIndex: "1000", opacity: 0, WebkitTransition: "opacity 0.2s linear", transition: "opacity 0.2s linear" }), X.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), S.extend(this.domElement.style, { position: "fixed", display: "none", zIndex: "1001", opacity: 0, WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear", transition: "transform 0.2s ease-out, opacity 0.2s linear" }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement); var t = this; X.bind(this.backgroundElement, "click", function () { t.hide() }) } return P(e, [{ key: "show", value: function () { var e = this; this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), S.defer(function () { e.backgroundElement.style.opacity = 1, e.domElement.style.opacity = 1, e.domElement.style.webkitTransform = "scale(1)" }) } }, { key: "hide", value: function () { var e = this, t = function t() { e.domElement.style.display = "none", e.backgroundElement.style.display = "none", X.unbind(e.domElement, "webkitTransitionEnd", t), X.unbind(e.domElement, "transitionend", t), X.unbind(e.domElement, "oTransitionEnd", t) }; X.bind(this.domElement, "webkitTransitionEnd", t), X.bind(this.domElement, "transitionend", t), X.bind(this.domElement, "oTransitionEnd", t), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)" } }, { key: "layout", value: function () { this.domElement.style.left = window.innerWidth / 2 - X.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - X.getHeight(this.domElement) / 2 + "px" } }]), e }(), re = function (e) { if (e && "undefined" != typeof window) { var t = document.createElement("style"); return t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t), e } }(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n"); te.inject(re); var se = "Default", ae = function () { try { return !!window.localStorage } catch (e) { return !1 } }(), le = void 0, de = !0, ce = void 0, ue = !1, _e = [], he = function e(t) { var n = this, o = t || {}; this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), X.addClass(this.domElement, "dg"), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], o = S.defaults(o, { closeOnTop: !1, autoPlace: !0, width: e.DEFAULT_WIDTH }), o = S.defaults(o, { resizable: o.autoPlace, hideable: o.autoPlace }), S.isUndefined(o.load) ? o.load = { preset: se } : o.preset && (o.load.preset = o.preset), S.isUndefined(o.parent) && o.hideable && _e.push(this), o.resizable = S.isUndefined(o.parent) && o.resizable, o.autoPlace && S.isUndefined(o.scrollable) && (o.scrollable = !0); var i = ae && "true" === localStorage.getItem(m(this, "isLocal")), r = void 0, s = void 0; if (Object.defineProperties(this, { parent: { get: function () { return o.parent } }, scrollable: { get: function () { return o.scrollable } }, autoPlace: { get: function () { return o.autoPlace } }, closeOnTop: { get: function () { return o.closeOnTop } }, preset: { get: function () { return n.parent ? n.getRoot().preset : o.load.preset }, set: function (e) { n.parent ? n.getRoot().preset = e : o.load.preset = e, E(this), n.revert() } }, width: { get: function () { return o.width }, set: function (e) { o.width = e, w(n, e) } }, name: { get: function () { return o.name }, set: function (e) { o.name = e, s && (s.innerHTML = o.name) } }, closed: { get: function () { return o.closed }, set: function (t) { o.closed = t, o.closed ? X.addClass(n.__ul, e.CLASS_CLOSED) : X.removeClass(n.__ul, e.CLASS_CLOSED), this.onResize(), n.__closeButton && (n.__closeButton.innerHTML = t ? e.TEXT_OPEN : e.TEXT_CLOSED) } }, load: { get: function () { return o.load } }, useLocalStorage: { get: function () { return i }, set: function (e) { ae && (i = e, e ? X.bind(window, "unload", r) : X.unbind(window, "unload", r), localStorage.setItem(m(n, "isLocal"), e)) } } }), S.isUndefined(o.parent)) { if (o.closed = !1, X.addClass(this.domElement, e.CLASS_MAIN), X.makeSelectable(this.domElement, !1), ae && i) { n.useLocalStorage = !0; var a = localStorage.getItem(m(this, "gui")); a && (o.load = JSON.parse(a)) } this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = e.TEXT_CLOSED, X.addClass(this.__closeButton, e.CLASS_CLOSE_BUTTON), o.closeOnTop ? (X.addClass(this.__closeButton, e.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (X.addClass(this.__closeButton, e.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), X.bind(this.__closeButton, "click", function () { n.closed = !n.closed }) } else { void 0 === o.closed && (o.closed = !0); var l = document.createTextNode(o.name); X.addClass(l, "controller-name"), s = c(n, l); X.addClass(this.__ul, e.CLASS_CLOSED), X.addClass(s, "title"), X.bind(s, "click", function (e) { return e.preventDefault(), n.closed = !n.closed, !1 }), o.closed || (this.closed = !1) } o.autoPlace && (S.isUndefined(o.parent) && (de && (ce = document.createElement("div"), X.addClass(ce, "dg"), X.addClass(ce, e.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(ce), de = !1), ce.appendChild(this.domElement), X.addClass(this.domElement, e.CLASS_AUTO_PLACE)), this.parent || w(n, o.width)), this.__resizeHandler = function () { n.onResizeDebounced() }, X.bind(window, "resize", this.__resizeHandler), X.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), X.bind(this.__ul, "transitionend", this.__resizeHandler), X.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), o.resizable && y(this), r = function () { ae && "true" === localStorage.getItem(m(n, "isLocal")) && localStorage.setItem(m(n, "gui"), JSON.stringify(n.getSaveObject())) }, this.saveToLocalStorageIfPossible = r, o.parent || function () { var e = n.getRoot(); e.width += 1, S.defer(function () { e.width -= 1 }) }() }; he.toggleHide = function () { ue = !ue, S.each(_e, function (e) { e.domElement.style.display = ue ? "none" : "" }) }, he.CLASS_AUTO_PLACE = "a", he.CLASS_AUTO_PLACE_CONTAINER = "ac", he.CLASS_MAIN = "main", he.CLASS_CONTROLLER_ROW = "cr", he.CLASS_TOO_TALL = "taller-than-window", he.CLASS_CLOSED = "closed", he.CLASS_CLOSE_BUTTON = "close-button", he.CLASS_CLOSE_TOP = "close-top", he.CLASS_CLOSE_BOTTOM = "close-bottom", he.CLASS_DRAG = "drag", he.DEFAULT_WIDTH = 245, he.TEXT_CLOSED = "Close Controls", he.TEXT_OPEN = "Open Controls", he._keydownHandler = function (e) { "text" === document.activeElement.type || 72 !== e.which && 72 !== e.keyCode || he.toggleHide() }, X.bind(window, "keydown", he._keydownHandler, !1), S.extend(he.prototype, { add: function (e, t) { return f(this, e, t, { factoryArgs: Array.prototype.slice.call(arguments, 2) }) }, addColor: function (e, t) { return f(this, e, t, { color: !0 }) }, remove: function (e) { this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1); var t = this; S.defer(function () { t.onResize() }) }, destroy: function () { if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead."); this.autoPlace && ce.removeChild(this.domElement); var e = this; S.each(this.__folders, function (t) { e.removeFolder(t) }), X.unbind(window, "keydown", he._keydownHandler, !1), u(this) }, addFolder: function (e) { if (void 0 !== this.__folders[e]) throw new Error('You already have a folder in this GUI by the name "' + e + '"'); var t = { name: e, parent: this }; t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]); var n = new he(t); this.__folders[e] = n; var o = c(this, n.domElement); return X.addClass(o, "folder"), n }, removeFolder: function (e) { this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name], this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name], u(e); var t = this; S.each(e.__folders, function (t) { e.removeFolder(t) }), S.defer(function () { t.onResize() }) }, open: function () { this.closed = !1 }, close: function () { this.closed = !0 }, onResize: function () { var e = this.getRoot(); if (e.scrollable) { var t = X.getOffset(e.__ul).top, n = 0; S.each(e.__ul.childNodes, function (t) { e.autoPlace && t === e.__save_row || (n += X.getHeight(t)) }), window.innerHeight - t - 20 < n ? (X.addClass(e.domElement, he.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - 20 + "px") : (X.removeClass(e.domElement, he.CLASS_TOO_TALL), e.__ul.style.height = "auto") } e.__resize_handle && S.defer(function () { e.__resize_handle.style.height = e.__ul.offsetHeight + "px" }), e.__closeButton && (e.__closeButton.style.width = e.width + "px") }, onResizeDebounced: S.debounce(function () { this.onResize() }, 50), remember: function () { if (S.isUndefined(le) && ((le = new ie).domElement.innerHTML = '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>'), this.parent) throw new Error("You can only call remember on a top level GUI."); var e = this; S.each(Array.prototype.slice.call(arguments), function (t) { 0 === e.__rememberedObjects.length && v(e), -1 === e.__rememberedObjects.indexOf(t) && e.__rememberedObjects.push(t) }), this.autoPlace && w(this, this.width) }, getRoot: function () { for (var e = this; e.parent;)e = e.parent; return e }, getSaveObject: function () { var e = this.load; return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = x(this)), e.folders = {}, S.each(this.__folders, function (t, n) { e.folders[n] = t.getSaveObject() }), e }, save: function () { this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = x(this), _(this, !1), this.saveToLocalStorageIfPossible() }, saveAs: function (e) { this.load.remembered || (this.load.remembered = {}, this.load.remembered[se] = x(this, !0)), this.load.remembered[e] = x(this), this.preset = e, g(this, e, !0), this.saveToLocalStorageIfPossible() }, revert: function (e) { S.each(this.__controllers, function (t) { this.getRoot().load.remembered ? p(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue()) }, this), S.each(this.__folders, function (e) { e.revert(e) }), e || _(this.getRoot(), !1) }, listen: function (e) { var t = 0 === this.__listening.length; this.__listening.push(e), t && C(this.__listening) }, updateDisplay: function () { S.each(this.__controllers, function (e) { e.updateDisplay() }), S.each(this.__folders, function (e) { e.updateDisplay() }) } }); var pe = { Color: I, math: N, interpret: R }, fe = { Controller: z, BooleanController: K, OptionController: Y, StringController: J, NumberController: W, NumberControllerBox: Q, NumberControllerSlider: q, FunctionController: Z, ColorController: $ }, me = { dom: X }, ge = { GUI: he }, be = he, ve = { color: pe, controllers: fe, dom: me, gui: ge, GUI: be }; e.color = pe, e.controllers = fe, e.dom = me, e.gui = ge, e.GUI = be, e.default = ve, Object.defineProperty(e, "__esModule", { value: !0 }) });
/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
*/

let isPlayingWaves = false, isPlayingWebGl = false;
Test= () => {
    const canvas = document.getElementById('webgl');
    const gl = canvas.getContext('webgl');

     // Define the vertex shader
     const vertexShaderSource = `
     attribute vec2 position;
     void main() {
         gl_Position = vec4(position, 0.0, 1.0);
     }
    `;
    
    // Define the fragment shader
    const fragmentShaderSource = `
        precision highp float;
        uniform vec2 iResolution;
        void main() {
            vec2 uv = gl_FragCoord.xy / iResolution;
            gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);
        }
    `;

    // Compile the vertex shader
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    // Compile the fragment shader
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    // Create and link the shader program
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    resolutionUniformLocation = gl.getUniformLocation(shaderProgram, 'iResolution');
    gl.useProgram(shaderProgram);

    // Define the vertices of a full-screen quad
    const vertices = [
        -1.0,  1.0,
        1.0,  1.0,
        -1.0, -1.0,
        1.0, -1.0,
    ];

    // Create a buffer and bind the vertices to it
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // Get the attribute location and enable it
    const positionLocation = gl.getAttribLocation(shaderProgram, 'position');
    gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Render the scene
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}
WebGl = (name) => {
    let canvas = null, gl = null, shaderProgram = null, renderLoop = null, resolutionUniformLocation = null, timeUniformLocation = null, mouseUniformLocation = null;
    const shaders = [{
        name: "Illuminate",
        vertexShaderSource: `
            attribute vec2 position;
            void main() {
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `,
        fragmentShaderSource: `
            precision highp float;

            uniform vec2 iResolution;
            uniform float iTime;
            uniform vec2 iMouse;

            vec3 palette( float t ) {
                vec3 a = vec3(0.5, 0.5, 0.5);
                vec3 b = vec3(0.5, 0.5, 0.5);
                vec3 c = vec3(1.0, 1.0, 1.0);
                vec3 d = vec3(0.263,0.416,0.557);
            
                return a + b*cos( 6.28318*(c*t+d) );
            }
            
            void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
                vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;
                vec2 uv0 = uv;
                vec3 finalColor = vec3(0.0);
                
                for (float i = 0.0; i < 4.0; i++) {
                    uv = fract(uv * 1.5) - 0.5;
            
                    float d = length(uv) * exp(-length(uv0));
            
                    vec3 col = palette(length(uv0) + i*.4 + iTime*.4);
            
                    d = sin(d*8. + iTime)/8.;
                    d = abs(d);
            
                    d = pow(0.01 / d, 1.2);
            
                    finalColor += col * d;
                }
                    
                fragColor = vec4(finalColor, 1.0);
            }
            void main() {
                mainImage(gl_FragColor, gl_FragCoord.xy);
            }
        `
    // },{
    //     name: "Template",
    //     vertexShaderSource: `
    //         attribute vec2 position;
    //         void main() {
    //             gl_Position = vec4(position, 0.0, 1.0);
    //         }
    //     `,
    //     fragmentShaderSource: `
    //         precision highp float;

    //         uniform vec2 iResolution;
    //         uniform float iTime;
    //         uniform vec2 iMouse;

            
    //         void main() {
    //             mainImage(gl_FragColor, gl_FragCoord.xy);
    //         }
    //     `
    },{
        name: "VanGogh",
        vertexShaderSource: `
            attribute vec2 position;
            void main() {
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `,
        fragmentShaderSource: `
            precision highp float;

            uniform vec2 iResolution;
            uniform float iTime;
            uniform vec2 iMouse;

            #define p(t, a, b, c, d) ( a + b*cos( 6.28318*(c*t+d) ) ) //IQ's palette function (https://www.iquilezles.org/www/articles/palettes/palettes.htm)
            #define sp(t) p(t,vec3(.26,.76,.77),vec3(1,.3,1),vec3(.8,.4,.7),vec3(0,.12,.54)) //sky palette
            #define hue(v) ( .6 + .76 * cos(6.3*(v) + vec4(0,23,21,0) ) ) //hue

            float hash12(vec2 p)
            {
            vec3 p3  = fract(vec3(p.xyx) * .1031);
                p3 += dot(p3, p3.yzx + 33.33);
                return fract((p3.x + p3.y) * p3.z);
            }

            vec2 hash22(vec2 p)
            {
            vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));
                p3 += dot(p3, p3.yzx+33.33);
                return fract((p3.xx+p3.yz)*p3.zy);
            }

            vec2 rotate2D (vec2 st, float a){
                return  mat2(cos(a),-sin(a),sin(a),cos(a))*st;
            }

            float st(float a, float b, float s) //AA bar
            {
                return smoothstep (a-s, a+s, b);
            }

            float noise( in vec2 p ) //gradient noise
            {
                vec2 i = floor( p );
                vec2 f = fract( p );
                
                vec2 u = f*f*(3.-2.*f);

                return mix( mix( dot( hash22( i+vec2(0,0) ), f-vec2(0,0) ), 
                                dot( hash22( i+vec2(1,0) ), f-vec2(1,0) ), u.x),
                            mix( dot( hash22( i+vec2(0,1) ), f-vec2(0,1) ), 
                                dot( hash22( i+vec2(1,1) ), f-vec2(1,1) ), u.x), u.y);
            }

            void mainImage( out vec4 O, in vec2 g)
            {
                vec2 r = iResolution.xy
                    ,uv = (g+g-r)/r.y
                    ,sun_pos = vec2(r.x/r.y*.42,-.53) //sun position 
                    ,tree_pos = vec2(-r.x/r.y*.42,-.2) //tree position 
                    ,sh, u, id, lc, t;

                vec3 f, c;
                float xd, yd, h, a, l;
                vec4 C;
                
                float sm = 3./r.y; //smoothness factor for AA

                sh = rotate2D(sun_pos, noise(uv+iTime*.25)*.3); //big noise on the sky
                
                if (uv.y > -.4) //drawing the sky
                {
                    u = uv + sh;
                    
                    yd = 60.; //number of rings 
                    
                    id =  vec2((length(u)+.01)*yd,0); //segment id: x - ring number, y - segment number in the ring  
                    xd = floor(id.x)*.09; //number of ring segments
                    h = (hash12(floor(id.xx))*.5+.25)*(iTime+10.)*.25; //ring shift
                    t = rotate2D (u,h); //rotate the ring to the desired angle
                
                    id.y = atan(t.y,t.x)*xd;
                    lc = fract(id); //segment local coordinates
                    id -= lc;
                
                    // determining the coordinates of the center of the segment in uv space
                    t = vec2(cos((id.y+.5)/xd)*(id.x+.5)/yd,sin((id.y+.5)/xd)*(id.x+.5)/yd); 
                    t = rotate2D(t,-h) - sh;
                
                    h = noise(t*vec2(.5,1)-vec2(iTime*.2,0)) //clouds
                        * step(-.25,t.y); //do not draw clouds below -.25
                    h = smoothstep (.052,.055, h);
                    
                    
                    lc += (noise(lc*vec2(1,4)+id))*vec2(.7,.2); //add fine noise
                    
                    f = mix (sp(sin(length(u)-.1))*.35, //sky background
                            mix(sp(sin(length(u)-.1)+(hash12(id)-.5)*.15),vec3(1),h), //mix sky color and clouds
                            st(abs(lc.x-.5),.4,sm*yd)*st(abs(lc.y-.5),.48,sm*xd));
                };

                if (uv.y < -.35) //drawing water
                {

                    float cld = noise(-sh*vec2(.5,1)  - vec2(iTime*.2,0)); //cloud density opposite the center of the sun
                    cld = 1.- smoothstep(.0,.15,cld)*.5;

                    u = uv*vec2(1,15);
                    id = floor(u);

                    for (float i = 1.; i > -1.; i--) //drawing a wave and its neighbors from above and below
                    {
                        if (id.y+i < -5.)
                        {
                            lc = fract(u)-.5;
                            lc.y = (lc.y+(sin(uv.x*12.-iTime*3.+id.y+i))*.25-i)*4.; //set the waveform and divide it into four strips
                            h = hash12(vec2(id.y+i,floor(lc.y))); //the number of segments in the strip and its horizontal offset
                            
                            xd = 6.+h*4.;
                            yd = 30.;
                            lc.x = uv.x*xd+sh.x*9.; //divide the strip into segments
                            lc.x += sin(iTime * (.5 + h*2.))*.5; //add a cyclic shift of the strips horizontally
                            h = .8*smoothstep(5.,.0,abs(floor(lc.x)))*cld+.1; //determine brightness of the sun track 
                            f = mix(f,mix(vec3(0,.1,.5),vec3(.35,.35,0),h),st(lc.y,0.,sm*yd)); //mix the color of the water and the color of the track for the background of the water 
                            lc += noise(lc*vec2(3,.5))*vec2(.1,.6); //add fine noise to the segment
                            
                            f = mix(f,                                                                         //mix the background color 
                                mix(hue(hash12(floor(lc))*.1+.56).rgb*(1.2+floor(lc.y)*.17),vec3(1,1,0),h)     //and the stroke color
                                ,st(lc.y,0.,sm*xd)
                                *st(abs(fract(lc.x)-.5),.48,sm*xd)*st(abs(fract(lc.y)-.5),.3,sm*yd)
                                );
                        }
                    }
                }
                
                O = vec4(f,1);

                a = 0.;
                u = uv+noise(uv*2.)*.1 + vec2(0,sin(uv.x*1.+3.)*.4+.8);
                
                f = mix(vec3(.7,.6,.2),vec3(0,1,0),sin(iTime*.2)*.5+.5); //color of the grass, changing from green to yellow and back again
                O = mix(O,vec4(f*.4,1),step(u.y,.0)); //draw grass background

                xd = 60.;  //grass size
                u = u*vec2(xd,xd/3.5); 
                

                if (u.y < 1.2)
                {
                    for (float y = 0.; y > -3.; y--)
                    {
                        for (float x = -2.; x <3.; x++)
                        {
                            id = floor(u) + vec2(x,y);
                            lc = (fract(u) + vec2(1.-x,-y))/vec2(5,3);
                            h = (hash12(id)-.5)*.25+.5; //shade and length for an individual blade of grass

                            lc-= vec2(.3,.5-h*.4);
                            lc.x += sin(((iTime*1.7+h*2.-id.x*.05-id.y*.05)*1.1+id.y*.5)*2.)*(lc.y+.5)*.5;
                            t = abs(lc)-vec2(.02,.5-h*.5);
                            l =  length(max(t,0.)) + min(max(t.x,t.y),0.); //distance to the segment (blade of grass)

                            l -= noise (lc*7.+id)*.1; //add fine noise
                            C = vec4(f*.25,st(l,.1,sm*xd*.09)); //grass outline                
                            C = mix(C,vec4(f                  //grass foregroud
                                        *(1.2+lc.y*2.)  //the grass is a little darker at the root
                                        *(1.8-h*2.5),1.)    //brightness variations for individual blades of grass
                                        ,st(l,.04,sm*xd*.09));
                            
                            O = mix (O,C,C.a*step (id.y,-1.));
                            a = max (a, C.a*step (id.y,-5.));  //a mask to cover the trunk of the tree with grasses in the foreground
                        }
                    }
                }

                float T = sin(iTime*.5); //tree swing cycle
            
                if (abs(uv.x+tree_pos.x-.1-T*.1) < .6) // drawing the tree
                {
                    u = uv + tree_pos;
                    // draw the trunk of the tree first
                    u.x -= sin(u.y+1.)*.2*(T+.75); //the trunk bends in the wind
                    u += noise(u*4.5-7.)*.25; //trunk curvature
                    
                    xd = 10., yd = 60.; 
                    t = u * vec2(1,yd); //divide the trunk into segments
                    h = hash12(floor(t.yy)); //horizontal shift of the segments and the color tint of the segment  
                    t.x += h*.01;
                    t.x *= xd;
                    
                    lc = fract(t); //segment local coordinates
                    
                    float m = st(abs(t.x-.5),.5,sm*xd)*step(abs(t.y+20.),45.); //trunk mask
                    C = mix(vec4(.07) //outline color
                            ,vec4(.5,.3,0,1)*(.4+h*.4) //foreground color 
                            ,st(abs(lc.y-.5),.4,sm*yd)*st(abs(lc.x-.5),.45,sm*xd));
                    C.a = m;
                    
                    xd = 30., yd = 15.;
                    
                    for (float xs =0.;xs<4.;xs++) //drawing four layers of foliage
                    {
                        u = uv + tree_pos + vec2 (xs/xd*.5 -(T +.75)*.15,-.7); //crown position
                        u += noise(u*vec2(2,1)+vec2(-iTime+xs*.05,0))*vec2(-.25,.1)*smoothstep (.5,-1.,u.y+.7)*.75; //leaves rippling in the wind
                
                        t = u * vec2(xd,1.);
                        h = hash12(floor(t.xx)+xs*1.4); //number of segments for the row
                        
                        yd = 5.+ h*7.;
                        t.y *= yd;
                
                        sh = t;
                        lc = fract(t);
                        h = hash12(t-lc); //segment color shade
                
                        
                        t = (t-lc)/vec2(xd,yd)+vec2(0,.7);
                        
                        m = (step(0.,t.y)*step (length(t),.45) //the shape of the crown - the top 
                            + step (t.y,0.)*step (-0.7+sin((floor(u.x)+xs*.5)*15.)*.2,t.y)) //the bottom
                            *step (abs(t.x),.5) //crown size horizontally
                            *st(abs(lc.x-.5),.35,sm*xd*.5); 
                
                        lc += noise((sh)*vec2(1.,3.))*vec2(.3,.3); //add fine noise
                        
                        f = hue((h+(sin(iTime*.2)*.5+.5))*.2).rgb-t.x; //color of the segment changes cyclically
                
                        C = mix(C,
                                vec4(mix(f*.15,f*.6*(.7+xs*.2), //mix outline and foreground color
                                    st(abs(lc.y-.5),.47,sm*yd)*st(abs(lc.x-.5),.2,sm*xd)),m)
                                ,m);
                    }

                    O = mix (O,C,C.a*(1.-a));
                }
            }
            
            void main() {
                mainImage(gl_FragColor, gl_FragCoord.xy);
            }
        `
    },{
        name: "HeavenHighway",
        vertexShaderSource: `
            attribute vec2 position;
            void main() {
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `,
        fragmentShaderSource: `
            precision highp float;

            uniform vec2 iResolution;
            uniform float iTime;
            uniform vec2 iMouse;

            mat2 rot(in float a){float c = cos(a), s = sin(a);return mat2(c,s,-s,c);}
            const mat3 m3 = mat3(0.33338, 0.56034, -0.71817, -0.87887, 0.32651, -0.15323, 0.15162, 0.69596, 0.61339)*1.93;
            float mag2(vec2 p){return dot(p,p);}
            float linstep(in float mn, in float mx, in float x){ return clamp((x - mn)/(mx - mn), 0., 1.); }
            float prm1 = 0.;
            vec2 bsMo = vec2(0);

            vec2 disp(float t){ return vec2(sin(t*0.22)*1., cos(t*0.175)*1.)*2.; }

            vec2 map(vec3 p)
            {
                vec3 p2 = p;
                p2.xy -= disp(p.z).xy;
                p.xy *= rot(sin(p.z+iTime)*(0.1 + prm1*0.05) + iTime*0.09);
                float cl = mag2(p2.xy);
                float d = 0.;
                p *= .61;
                float z = 1.;
                float trk = 1.;
                float dspAmp = 0.1 + prm1*0.2;
                for(int i = 0; i < 5; i++)
                {
                    p += sin(p.zxy*0.75*trk + iTime*trk*.8)*dspAmp;
                    d -= abs(dot(cos(p), sin(p.yzx))*z);
                    z *= 0.57;
                    trk *= 1.4;
                    p = p*m3;
                }
                d = abs(d + prm1*3.)+ prm1*.3 - 2.5 + bsMo.y;
                return vec2(d + cl*.2 + 0.25, cl);
            }

            vec4 render( in vec3 ro, in vec3 rd, float time )
            {
                vec4 rez = vec4(0);
                const float ldst = 8.;
                vec3 lpos = vec3(disp(time + ldst)*0.5, time + ldst);
                float t = 1.5;
                float fogT = 0.;
                for(int i=0; i<130; i++)
                {
                    if(rez.a > 0.99)break;

                    vec3 pos = ro + t*rd;
                    vec2 mpv = map(pos);
                    float den = clamp(mpv.x-0.3,0.,1.)*1.12;
                    float dn = clamp((mpv.x + 2.),0.,3.);
                    
                    vec4 col = vec4(0);
                    if (mpv.x > 0.6)
                    {
                    
                        col = vec4(sin(vec3(5.,0.4,0.2) + mpv.y*0.1 +sin(pos.z*0.4)*0.5 + 1.8)*0.5 + 0.5,0.08);
                        col *= den*den*den;
                        col.rgb *= linstep(4.,-2.5, mpv.x)*2.3;
                        float dif =  clamp((den - map(pos+.8).x)/9., 0.001, 1. );
                        dif += clamp((den - map(pos+.35).x)/2.5, 0.001, 1. );
                        col.xyz *= den*(vec3(0.005,.045,.075) + 1.5*vec3(0.033,0.07,0.03)*dif);
                    }
                    
                    float fogC = exp(t*0.2 - 2.2);
                    col.rgba += vec4(0.06,0.11,0.11, 0.1)*clamp(fogC-fogT, 0., 1.);
                    fogT = fogC;
                    rez = rez + col*(1. - rez.a);
                    t += clamp(0.5 - dn*dn*.05, 0.09, 0.3);
                }
                return clamp(rez, 0.0, 1.0);
            }

            float getsat(vec3 c)
            {
                float mi = min(min(c.x, c.y), c.z);
                float ma = max(max(c.x, c.y), c.z);
                return (ma - mi)/(ma+ 1e-7);
            }

            //from my "Will it blend" shader (https://www.shadertoy.com/view/lsdGzN)
            vec3 iLerp(in vec3 a, in vec3 b, in float x)
            {
                vec3 ic = mix(a, b, x) + vec3(1e-6,0.,0.);
                float sd = abs(getsat(ic) - mix(getsat(a), getsat(b), x));
                vec3 dir = normalize(vec3(2.*ic.x - ic.y - ic.z, 2.*ic.y - ic.x - ic.z, 2.*ic.z - ic.y - ic.x));
                float lgt = dot(vec3(1.0), ic);
                float ff = dot(dir, normalize(ic));
                ic += 1.5*dir*sd*ff*lgt;
                return clamp(ic,0.,1.);
            }

            void mainImage( out vec4 fragColor, in vec2 fragCoord )
            {	
                vec2 q = fragCoord.xy/iResolution.xy;
                vec2 p = (gl_FragCoord.xy - 0.5*iResolution.xy)/iResolution.y;
                bsMo = (iMouse.xy - 0.5*iResolution.xy)/iResolution.y;
                
                float time = iTime*3.;
                vec3 ro = vec3(0,0,time);
                
                ro += vec3(sin(iTime)*0.5,sin(iTime*1.)*0.,0);
                    
                float dspAmp = .85;
                ro.xy += disp(ro.z)*dspAmp;
                float tgtDst = 3.5;
                
                vec3 target = normalize(ro - vec3(disp(time + tgtDst)*dspAmp, time + tgtDst));
                ro.x -= bsMo.x*2.;
                vec3 rightdir = normalize(cross(target, vec3(0,1,0)));
                vec3 updir = normalize(cross(rightdir, target));
                rightdir = normalize(cross(updir, target));
                vec3 rd=normalize((p.x*rightdir + p.y*updir)*1. - target);
                rd.xy *= rot(-disp(time + 3.5).x*0.2 + bsMo.x);
                prm1 = smoothstep(-0.4, 0.4,sin(iTime*0.3));
                vec4 scn = render(ro, rd, time);
                    
                vec3 col = scn.rgb;
                col = iLerp(col.bgr, col.rgb, clamp(1.-prm1,0.05,1.));
                
                col = pow(col, vec3(.55,0.65,0.6))*vec3(1.,.97,.9);

                col *= pow( 16.0*q.x*q.y*(1.0-q.x)*(1.0-q.y), 0.12)*0.7+0.3; //Vign
                
                fragColor = vec4( col, 1.0 );
            }

            void main() {
                mainImage(gl_FragColor, gl_FragCoord.xy);
            }
        `
    },{
        name: "MandelKnott",
        vertexShaderSource: `
            attribute vec2 position;
            void main() {
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `,
        fragmentShaderSource: `
            precision highp float;

            uniform vec2 iResolution;
            uniform float iTime;
            uniform vec2 iMouse;

            float stime, ctime;
            void ry(inout vec3 p, float a){  
                float c,s;vec3 q=p;  
                c = cos(a); s = sin(a);  
                p.x = c * q.x + s * q.z;  
                p.z = -s * q.x + c * q.z; 
            }  

            float pixel_size = 0.0;
            
            vec3 mb(vec3 p) {
                p.xyz = p.xzy;
                vec3 z = p;
                vec3 dz=vec3(0.0);
                float power = 8.0;
                float r, theta, phi;
                float dr = 1.0;
                
                float t0 = 1.0;
                for(int i = 0; i < 7; ++i) {
                    r = length(z);
                    if(r > 2.0) continue;
                    theta = atan(z.y / z.x);
                    #ifdef phase_shift_on
                    phi = asin(z.z / r) + iTime*0.1;
                    #else
                    phi = asin(z.z / r);
                    #endif
                    
                    dr = pow(r, power - 1.0) * dr * power + 1.0;
                
                    r = pow(r, power);
                    theta = theta * power;
                    phi = phi * power;
                    
                    z = r * vec3(cos(theta)*cos(phi), sin(theta)*cos(phi), sin(phi)) + p;
                    
                    t0 = min(t0, r);
                }
                return vec3(0.5 * log(r) * r / dr, t0, 0.0);
            }
            
             vec3 f(vec3 p){ 
                 ry(p, iTime*0.2);
                 return mb(p); 
             } 
            
            
             float softshadow(vec3 ro, vec3 rd, float k ){ 
                 float akuma=1.0,h=0.0; 
                 float t = 0.01;
                 for(int i=0; i < 50; ++i){ 
                     h=f(ro+rd*t).x; 
                     if(h<0.001)return 0.02; 
                     akuma=min(akuma, k*h/t); 
                      t+=clamp(h,0.01,2.0); 
                 } 
                 return akuma; 
             } 
            
            vec3 nor( in vec3 pos )
            {
                vec3 eps = vec3(0.001,0.0,0.0);
                return normalize( vec3(
                       f(pos+eps.xyy).x - f(pos-eps.xyy).x,
                       f(pos+eps.yxy).x - f(pos-eps.yxy).x,
                       f(pos+eps.yyx).x - f(pos-eps.yyx).x ) );
            }
            
            vec3 intersect( in vec3 ro, in vec3 rd )
            {
                float t = 1.0;
                float res_t = 0.0;
                float res_d = 1000.0;
                vec3 c, res_c;
                float max_error = 1000.0;
                float d = 1.0;
                float pd = 100.0;
                float os = 0.0;
                float step = 0.0;
                float error = 1000.0;
                
                for( int i=0; i<48; i++ )
                {
                    if( error < pixel_size*0.5 || t > 20.0 )
                    {
                    }
                    else{  // avoid broken shader on windows
                    
                        c = f(ro + rd*t);
                        d = c.x;
            
                        if(d > os)
                        {
                            os = 0.4 * d*d/pd;
                            step = d + os;
                            pd = d;
                        }
                        else
                        {
                            step =-os; os = 0.0; pd = 100.0; d = 1.0;
                        }
            
                        error = d / t;
            
                        if(error < max_error) 
                        {
                            max_error = error;
                            res_t = t;
                            res_c = c;
                        }
                    
                        t += step;
                    }
            
                }
                if( t>20.0/* || max_error > pixel_size*/ ) res_t=-1.0;
                return vec3(res_t, res_c.y, res_c.z);
            }
            
             void mainImage( out vec4 fragColor, in vec2 fragCoord ) 
             { 
                vec2 q=fragCoord.xy/iResolution.xy; 
                 vec2 uv = -1.0 + 2.0*q; 
                 uv.x*=iResolution.x/iResolution.y; 
                 
                pixel_size = 1.0/(iResolution.x * 3.0);
                // camera
                 stime=0.7+0.3*sin(iTime*0.4); 
                 ctime=0.7+0.3*cos(iTime*0.4); 
            
                 vec3 ta=vec3(0.0,0.0,0.0); 
                vec3 ro = vec3(0.0, 3.*stime*ctime, 3.*(1.-stime*ctime));
            
                 vec3 cf = normalize(ta-ro); 
                vec3 cs = normalize(cross(cf,vec3(0.0,1.0,0.0))); 
                vec3 cu = normalize(cross(cs,cf)); 
                 vec3 rd = normalize(uv.x*cs + uv.y*cu + 3.0*cf);  // transform from view to world
            
                vec3 sundir = normalize(vec3(0.1, 0.8, 0.6)); 
                vec3 sun = vec3(1.64, 1.27, 0.99); 
                vec3 skycolor = vec3(0.6, 1.5, 1.0); 
            
                vec3 bg = exp(uv.y-2.0)*vec3(0.4, 1.6, 1.0);
            
                float halo=clamp(dot(normalize(vec3(-ro.x, -ro.y, -ro.z)), rd), 0.0, 1.0); 
                vec3 col=bg+vec3(1.0,0.8,0.4)*pow(halo,17.0); 
            
            
                float t=0.0;
                vec3 p=ro; 
                 
                vec3 res = intersect(ro, rd);
                 if(res.x > 0.0){
                       p = ro + res.x * rd;
                       vec3 n=nor(p); 
                       float shadow = softshadow(p, sundir, 10.0 );
            
                       float dif = max(0.0, dot(n, sundir)); 
                       float sky = 0.6 + 0.4 * max(0.0, dot(n, vec3(0.0, 1.0, 0.0))); 
                        float bac = max(0.3 + 0.7 * dot(vec3(-sundir.x, -1.0, -sundir.z), n), 0.0); 
                       float spe = max(0.0, pow(clamp(dot(sundir, reflect(rd, n)), 0.0, 1.0), 10.0)); 
            
                       vec3 lin = 4.5 * sun * dif * shadow; 
                       lin += 0.8 * bac * sun; 
                       lin += 0.6 * sky * skycolor*shadow; 
                       lin += 3.0 * spe * shadow; 
            
                       res.y = pow(clamp(res.y, 0.0, 1.0), 0.55);
                       vec3 tc0 = 0.5 + 0.5 * sin(3.0 + 4.2 * res.y + vec3(0.0, 0.5, 1.0));
                       col = lin *vec3(0.9, 0.8, 0.6) *  0.2 * tc0;
                        col=mix(col,bg, 1.0-exp(-0.001*res.x*res.x)); 
                } 
            
                // post
                col=pow(clamp(col,0.0,1.0),vec3(0.45)); 
                col=col*0.6+0.4*col*col*(3.0-2.0*col);  // contrast
                col=mix(col, vec3(dot(col, vec3(0.33))), -0.5);  // satuation
                col*=0.5+0.5*pow(16.0*q.x*q.y*(1.0-q.x)*(1.0-q.y),0.7);  // vigneting
                 fragColor = vec4(col.xyz, smoothstep(0.55, .76, 1.-res.x/5.)); 
             }

            void main() {
                mainImage(gl_FragColor, gl_FragCoord.xy);
            }
        `
    },{
        name: "DarkMatter",
        vertexShaderSource: `
            attribute vec2 position;
            void main() {
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `,
        fragmentShaderSource: `
            precision highp float;

            uniform vec2 iResolution;
            uniform float iTime;
            uniform vec2 iMouse;

            vec3 palette(float d){
                return mix(vec3(0.2,0.7,0.9),vec3(1.,0.,1.),d);
            }
            
            vec2 rotate(vec2 p,float a){
                float c = cos(a);
                float s = sin(a);
                return p*mat2(c,s,-s,c);
            }
            
            float map(vec3 p){
                for( int i = 0; i<8; ++i){
                    float t = iTime*0.2;
                    p.xz =rotate(p.xz,t);
                    p.xy =rotate(p.xy,t*1.89);
                    p.xz = abs(p.xz);
                    p.xz-=.5;
                }
                return dot(sign(p),p)/5.;
            }
            
            vec4 rm (vec3 ro, vec3 rd){
                float t = 0.;
                vec3 col = vec3(0.);
                float d;
                for(float i =0.; i<64.; i++){
                    vec3 p = ro + rd*t;
                    d = map(p)*.5;
                    if(d<0.02){
                        break;
                    }
                    if(d>100.){
                        break;
                    }
                    //col+=vec3(0.6,0.8,0.8)/(400.*(d));
                    col+=palette(length(p)*.1)/(400.*(d));
                    t+=d;
                }
                return vec4(col,1./(d*100.));
            }
            void mainImage( out vec4 fragColor, in vec2 fragCoord )
            {
                vec2 uv = (fragCoord-(iResolution.xy/2.))/iResolution.x;
                vec3 ro = vec3(0.,0.,-50.);
                ro.xz = rotate(ro.xz,iTime);
                vec3 cf = normalize(-ro);
                vec3 cs = normalize(cross(cf,vec3(0.,1.,0.)));
                vec3 cu = normalize(cross(cf,cs));
                
                vec3 uuv = ro+cf*3. + uv.x*cs + uv.y*cu;
                
                vec3 rd = normalize(uuv-ro);
                
                vec4 col = rm(ro,rd);
                
                
                fragColor = col;
            }
            
            void main() {
                mainImage(gl_FragColor, gl_FragCoord.xy);
            }
        `
    },{
        name: "OpenSea",
        vertexShaderSource: `
            attribute vec2 position;
            void main() {
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `,
        fragmentShaderSource: `
            precision highp float;

            uniform vec2 iResolution;
            uniform float iTime;
            uniform vec2 iMouse;

            const int NUM_STEPS = 8;
            const float PI	 	= 3.141592;
            const float EPSILON	= 1e-3;
            #define EPSILON_NRM (0.1 / iResolution.x)
            //#define AA

            // sea
            const int ITER_GEOMETRY = 3;
            const int ITER_FRAGMENT = 5;
            const float SEA_HEIGHT = 0.6;
            const float SEA_CHOPPY = 4.0;
            const float SEA_SPEED = 0.8;
            const float SEA_FREQ = 0.16;
            const vec3 SEA_BASE = vec3(0.0,0.09,0.18);
            const vec3 SEA_WATER_COLOR = vec3(0.8,0.9,0.6)*0.6;
            #define SEA_TIME (1.0 + iTime * SEA_SPEED)
            const mat2 octave_m = mat2(1.6,1.2,-1.2,1.6);

            // math
            mat3 fromEuler(vec3 ang) {
                vec2 a1 = vec2(sin(ang.x),cos(ang.x));
                vec2 a2 = vec2(sin(ang.y),cos(ang.y));
                vec2 a3 = vec2(sin(ang.z),cos(ang.z));
                mat3 m;
                m[0] = vec3(a1.y*a3.y+a1.x*a2.x*a3.x,a1.y*a2.x*a3.x+a3.y*a1.x,-a2.y*a3.x);
                m[1] = vec3(-a2.y*a1.x,a1.y*a2.y,a2.x);
                m[2] = vec3(a3.y*a1.x*a2.x+a1.y*a3.x,a1.x*a3.x-a1.y*a3.y*a2.x,a2.y*a3.y);
                return m;
            }
            float hash( vec2 p ) {
                float h = dot(p,vec2(127.1,311.7));	
                return fract(sin(h)*43758.5453123);
            }
            float noise( in vec2 p ) {
                vec2 i = floor( p );
                vec2 f = fract( p );	
                vec2 u = f*f*(3.0-2.0*f);
                return -1.0+2.0*mix( mix( hash( i + vec2(0.0,0.0) ), 
                                hash( i + vec2(1.0,0.0) ), u.x),
                            mix( hash( i + vec2(0.0,1.0) ), 
                                hash( i + vec2(1.0,1.0) ), u.x), u.y);
            }

            // lighting
            float diffuse(vec3 n,vec3 l,float p) {
                return pow(dot(n,l) * 0.4 + 0.6,p);
            }
            float specular(vec3 n,vec3 l,vec3 e,float s) {    
                float nrm = (s + 8.0) / (PI * 8.0);
                return pow(max(dot(reflect(e,n),l),0.0),s) * nrm;
            }

            // sky
            vec3 getSkyColor(vec3 e) {
                e.y = (max(e.y,0.0)*0.8+0.2)*0.8;
                return vec3(pow(1.0-e.y,2.0), 1.0-e.y, 0.6+(1.0-e.y)*0.4) * 1.1;
            }

            // sea
            float sea_octave(vec2 uv, float choppy) {
                uv += noise(uv);        
                vec2 wv = 1.0-abs(sin(uv));
                vec2 swv = abs(cos(uv));    
                wv = mix(wv,swv,wv);
                return pow(1.0-pow(wv.x * wv.y,0.65),choppy);
            }

            float map(vec3 p) {
                float freq = SEA_FREQ;
                float amp = SEA_HEIGHT;
                float choppy = SEA_CHOPPY;
                vec2 uv = p.xz; uv.x *= 0.75;
                
                float d, h = 0.0;    
                for(int i = 0; i < ITER_GEOMETRY; i++) {        
                    d = sea_octave((uv+SEA_TIME)*freq,choppy);
                    d += sea_octave((uv-SEA_TIME)*freq,choppy);
                    h += d * amp;        
                    uv *= octave_m; freq *= 1.9; amp *= 0.22;
                    choppy = mix(choppy,1.0,0.2);
                }
                return p.y - h;
            }

            float map_detailed(vec3 p) {
                float freq = SEA_FREQ;
                float amp = SEA_HEIGHT;
                float choppy = SEA_CHOPPY;
                vec2 uv = p.xz; uv.x *= 0.75;
                
                float d, h = 0.0;    
                for(int i = 0; i < ITER_FRAGMENT; i++) {        
                    d = sea_octave((uv+SEA_TIME)*freq,choppy);
                    d += sea_octave((uv-SEA_TIME)*freq,choppy);
                    h += d * amp;        
                    uv *= octave_m; freq *= 1.9; amp *= 0.22;
                    choppy = mix(choppy,1.0,0.2);
                }
                return p.y - h;
            }

            vec3 getSeaColor(vec3 p, vec3 n, vec3 l, vec3 eye, vec3 dist) {  
                float fresnel = clamp(1.0 - dot(n,-eye), 0.0, 1.0);
                fresnel = min(pow(fresnel,3.0), 0.5);
                    
                vec3 reflected = getSkyColor(reflect(eye,n));    
                vec3 refracted = SEA_BASE + diffuse(n,l,80.0) * SEA_WATER_COLOR * 0.12; 
                
                vec3 color = mix(refracted,reflected,fresnel);
                
                float atten = max(1.0 - dot(dist,dist) * 0.001, 0.0);
                color += SEA_WATER_COLOR * (p.y - SEA_HEIGHT) * 0.18 * atten;
                
                color += vec3(specular(n,l,eye,60.0));
                
                return color;
            }

            // tracing
            vec3 getNormal(vec3 p, float eps) {
                vec3 n;
                n.y = map_detailed(p);    
                n.x = map_detailed(vec3(p.x+eps,p.y,p.z)) - n.y;
                n.z = map_detailed(vec3(p.x,p.y,p.z+eps)) - n.y;
                n.y = eps;
                return normalize(n);
            }

            float heightMapTracing(vec3 ori, vec3 dir, out vec3 p) {  
                float tm = 0.0;
                float tx = 1000.0;    
                float hx = map(ori + dir * tx);
                if(hx > 0.0) {
                    p = ori + dir * tx;
                    return tx;   
                }
                float hm = map(ori + dir * tm);    
                float tmid = 0.0;
                for(int i = 0; i < NUM_STEPS; i++) {
                    tmid = mix(tm,tx, hm/(hm-hx));                   
                    p = ori + dir * tmid;                   
                    float hmid = map(p);
                    if(hmid < 0.0) {
                        tx = tmid;
                        hx = hmid;
                    } else {
                        tm = tmid;
                        hm = hmid;
                    }
                }
                return tmid;
            }

            vec3 getPixel(in vec2 coord, float time) {    
                vec2 uv = coord / iResolution.xy;
                uv = uv * 2.0 - 1.0;
                uv.x *= iResolution.x / iResolution.y;    
                    
                // ray
                vec3 ang = vec3(sin(time*3.0)*0.1,sin(time)*0.2+0.3,time);    
                vec3 ori = vec3(0.0,3.5,time*5.0);
                vec3 dir = normalize(vec3(uv.xy,-2.0)); dir.z += length(uv) * 0.14;
                dir = normalize(dir) * fromEuler(ang);
                
                // tracing
                vec3 p;
                heightMapTracing(ori,dir,p);
                vec3 dist = p - ori;
                vec3 n = getNormal(p, dot(dist,dist) * EPSILON_NRM);
                vec3 light = normalize(vec3(0.0,1.0,0.8)); 
                        
                // color
                return mix(
                    getSkyColor(dir),
                    getSeaColor(p,n,light,dir,dist),
                    pow(smoothstep(0.0,-0.02,dir.y),0.2));
            }

            // main
            void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
                float time = iTime * 0.3 + iMouse.x*0.01;
                
            #ifdef AA
                vec3 color = vec3(0.0);
                for(int i = -1; i <= 1; i++) {
                    for(int j = -1; j <= 1; j++) {
                        vec2 uv = fragCoord+vec2(i,j)/3.0;
                        color += getPixel(uv, time);
                    }
                }
                color /= 9.0;
            #else
                vec3 color = getPixel(fragCoord, time);
            #endif
                
                // post
                fragColor = vec4(pow(color,vec3(0.65)), 1.0);
            }

            void main() {
                mainImage(gl_FragColor, gl_FragCoord.xy);
            }
        `
    },{
        name: "FreezeRay",
        vertexShaderSource: `
            attribute vec2 position;
            void main() {
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `,
        fragmentShaderSource: `
            precision highp float;

            uniform vec2 iResolution;
            uniform float iTime;
            uniform vec2 iMouse;

            mat2 rot(float a) {
                float c = cos(a), s = sin(a);
                return mat2(c,s,-s,c);
            }
            
            const float pi = acos(-1.0);
            const float pi2 = pi*2.0;
            
            vec2 pmod(vec2 p, float r) {
                float a = atan(p.x, p.y) + pi/r;
                float n = pi2 / r;
                a = floor(a/n)*n;
                return p*rot(-a);
            }
            
            float box( vec3 p, vec3 b ) {
                vec3 d = abs(p) - b;
                return min(max(d.x,max(d.y,d.z)),0.0) + length(max(d,0.0));
            }
            
            float ifsBox(vec3 p) {
                for (int i=0; i<5; i++) {
                    p = abs(p) - 1.0;
                    p.xy *= rot(iTime*0.3);
                    p.xz *= rot(iTime*0.1);
                }
                p.xz *= rot(iTime);
                return box(p, vec3(0.4,0.8,0.3));
            }
            
            float map(vec3 p, vec3 cPos) {
                vec3 p1 = p;
                p1.x = mod(p1.x-5., 10.) - 5.;
                p1.y = mod(p1.y-5., 10.) - 5.;
                p1.z = mod(p1.z, 16.)-8.;
                p1.xy = pmod(p1.xy, 5.0);
                return ifsBox(p1);
            }
            
            void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
                vec2 p = (fragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);
            
                vec3 cPos = vec3(0.0,0.0, -3.0 * iTime);
                // vec3 cPos = vec3(0.3*sin(iTime*0.8), 0.4*cos(iTime*0.3), -6.0 * iTime);
                vec3 cDir = normalize(vec3(0.0, 0.0, -1.0));
                vec3 cUp  = vec3(sin(iTime), 1.0, 0.0);
                vec3 cSide = cross(cDir, cUp);
            
                vec3 ray = normalize(cSide * p.x + cUp * p.y + cDir);
            
                // Phantom Mode https://www.shadertoy.com/view/MtScWW by aiekick
                float acc = 0.0;
                float acc2 = 0.0;
                float t = 0.0;
                for (int i = 0; i < 99; i++) {
                    vec3 pos = cPos + ray * t;
                    float dist = map(pos, cPos);
                    dist = max(abs(dist), 0.02);
                    float a = exp(-dist*3.0);
                    if (mod(length(pos)+24.0*iTime, 30.0) < 3.0) {
                        a *= 2.0;
                        acc2 += a;
                    }
                    acc += a;
                    t += dist * 0.5;
                }
            
                vec3 col = vec3(acc * 0.01, acc * 0.011 + acc2*0.002, acc * 0.012+ acc2*0.005);
                fragColor = vec4(col, 1.0 - t * 0.03);
            }

            void main() {
                mainImage(gl_FragColor, gl_FragCoord.xy);
            }
        `
    },{
        name: "CyberBall",
        vertexShaderSource: `
            attribute vec2 position;
            void main() {
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `,
        fragmentShaderSource: `
            precision highp float;

            uniform vec2 iResolution;
            uniform float iTime;
            uniform vec2 iMouse;

            int hexid;
            vec3 hpos, point, pt;
            float tcol, bcol, hitbol, hexpos, fparam=0.;

            mat2 rot(float a) {
                float s=sin(a),c=cos(a);
                return mat2(c,s,-s,c);
            }

            vec3 path(float t) {
                return vec3(sin(t*.3+cos(t*.2)*.5)*4.,cos(t*.2)*3.,t);
            }

            float hexagon( in vec2 p, in float r )
            {
                const vec3 k = vec3(-0.866025404,0.5,0.577350269);
                p = abs(p);
                p -= 2.0*min(dot(k.xy,p),0.0)*k.xy;
                p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
                return length(p)*sign(p.y);
            }

            float hex(vec2 p) {
                p.x *= 0.57735*2.0;
                p.y += mod(floor(p.x), 2.0)*0.5;
                p = abs((mod(p, 1.0) - 0.5));
                return abs(max(p.x*1.5 + p.y, p.y*2.0) - 1.0);
            }

            mat3 lookat(vec3 dir) {
                vec3 up=vec3(0.,1.,0.);
                vec3 rt=normalize(cross(dir,up));
                return mat3(rt, cross(rt,dir), dir);
            }

            float hash12(vec2 p)
            {
                p *= 1000.;
                vec3 p3  = fract(vec3(p.xyx) * .1031);
                p3 += dot(p3, p3.yzx + 33.33);
                return fract((p3.x + p3.y) * p3.z);
            }

            float de(vec3 p) {
                pt = vec3(p.xy-path(p.z).xy,p.z);
                float h = abs(hexagon(pt.xy,3.+fparam));
                hexpos = hex(pt.yz);
                tcol = smoothstep(.0,.15,hexpos);
                h -= tcol*.1;
                vec3 pp = p-hpos;
                pp = lookat(point)*pp;
                pp.y -= abs(sin(iTime))*3.+(fparam-(2.-fparam));
                pp.yz *= rot(-iTime);
                float bola = length(pp)-1.;
                bcol = smoothstep(0.,.5,hex(pp.xy*3.));
                bola -= bcol*.1;
                vec3 pr = p;
                pr.z = mod(p.z,6.)-3.;
                float d = min(h,bola);
                if (d == bola) {
                    tcol = 1.;
                    hitbol = 1.;
                }
                else {
                    hitbol = 0.;
                    bcol = 1.;
                }
                return d*.5;
            }

            vec3 normal(vec3 p) {
                vec2 e = vec2(0.,.005);
                return normalize(vec3(de(p+e.yxx),de(p+e.xyx),de(p+e.xxy))-de(p));
            }

            vec3 march(vec3 from, vec3 dir) {
                vec3 odir = dir;
                vec3 p = from, col = vec3(0.);
                float d, td = 0.;
                vec3 g = vec3(0.);
                for (int i = 0; i < 200; i++) {
                    d = de(p);
                    if (d < .001 || td > 200.) break;
                    p += dir*d;
                    td += d;
                    g += .1/(.1+d)*hitbol*abs(normalize(point));
                }
                float hp = hexpos*(1.-hitbol);
                p -= dir*.01;
                vec3 n = normal(p);
                if (d < .001) {
                    col = pow(max(0.,dot(-dir,n)),2.)*vec3(.6,.7,.8)*tcol*bcol;
                }
                col += float(hexid);
                vec3 pr = pt;
                dir = reflect(dir,n);
                td = 0.;
                for (int i = 0; i < 200; i++) {
                    d = de(p);
                    if (d < .001 || td > 200.) break;
                    p += dir*d;
                    td += d;
                    g += .1/(.1+d)*abs(normalize(point));
                }
                float zz = p.z;
                if (d < .001) {
                    vec3 refcol = pow(max(0.,dot(-odir,n)),2.)*vec3(.6,.7,.8)*tcol*bcol;
                    p = pr;
                    p = abs(.5-fract(p*.1));
                    float m = 100.;
                    for (int i = 0; i < 10; i++) {
                        p = abs(p)/dot(p,p)-.8;
                        m = min(m,length(p));
                    }
                    col = mix(col,refcol,m)-m*.3;
                    col += step(.3,hp)*step(.9,fract(pr.z*.05+iTime*.5+hp*.1))*.7;
                    col += step(.3,hexpos)*step(.9,fract(zz*.05+iTime+hexpos*.1))*.3;
                }
                col += g*.03;
                col.rb *= rot(odir.y*.5);
                return col;
            }

            void main() {
                vec2 uv = gl_FragCoord.xy / iResolution.xy - 0.5;
                uv.x *= iResolution.x / iResolution.y;
                float t = iTime * 2.;
                vec3 from = path(t);
                if (mod(iTime - 10., 20.) > 10.) {
                    from = path(floor(t / 20.) * 20. + 10.);
                    from.x += 2.;
                }
                hpos = path(t + 3.);
                vec3 adv = path(t + 2.);
                vec3 dir = normalize(vec3(uv, .7));
                vec3 dd = normalize(adv - from);
                point = normalize(adv - hpos);
                point.xz *= rot(sin(iTime) * .2);
                dir = lookat(dd) * dir;
                vec3 col = march(from, dir);
                col *= vec3(1., .9, .8);
                gl_FragColor = vec4(col, 1.0);
            }
        `
    },{
        name: "Hexagon",
        vertexShaderSource: `
            attribute vec2 position;
        
            void main() {
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `,
        fragmentShaderSource: `
        precision highp float;

        #define R3 1.732051
        uniform vec2 iResolution;
        uniform float iTime;
        uniform vec2 iMouse;

        
        vec4 HexCoords(vec2 uv) {
            vec2 s = vec2(1.0, R3);
            vec2 h = 0.5 * s;
        
            vec2 gv = s * uv;
            
            vec2 a = mod(gv, s) - h;
            vec2 b = mod(gv + h, s) - h;
            
            vec2 ab = dot(a, a) < dot(b, b) ? a : b;
            vec2 st = ab;
            vec2 id = gv - ab;
            
            st = ab;
            return vec4(st, id);
        }
        
        float GetSize(vec2 id, float seed) {
            float d = length(id);
            float t = iTime * 0.5;
            float a = sin(d * seed + t) + sin(d * seed * seed * 10.0 + t * 2.0);
            return a / 2.0 + 0.5;
        }
        
        mat2 Rot(float a) {
            float s = sin(a);
            float c = cos(a);
            return mat2(c, -s, s, c);
        }
        
        float Hexagon(vec2 uv, float r, vec2 offs) {
            uv *= Rot(mix(0.0, 3.1415, r));
            
            r /= 1.0 / sqrt(2.0);
            uv = vec2(-uv.y, uv.x);
            uv.x *= R3;
            uv = abs(uv);
            
            vec2 n = normalize(vec2(1.0, 1.0));
            float d = dot(uv, n) - r;
            d = max(d, uv.y - r * 0.707);
            
            d = smoothstep(0.06, 0.02, abs(d));
            
            d += smoothstep(0.1, 0.09, abs(r - 0.5)) * sin(iTime);
            return d;
        }
        
        float Xor(float a, float b) {
            return a + b;
        }
        
        float Layer(vec2 uv, float s) {
            vec4 hu = HexCoords(uv * 2.0);
        
            float d = Hexagon(hu.xy, GetSize(hu.zw, s), vec2(0.0));
            vec2 offs = vec2(1.0, 0.0);
            d = Xor(d, Hexagon(hu.xy - offs, GetSize(hu.zw + offs, s), offs));
            d = Xor(d, Hexagon(hu.xy + offs, GetSize(hu.zw - offs, s), -offs));
            offs = vec2(0.5, 0.8725);
            d = Xor(d, Hexagon(hu.xy - offs, GetSize(hu.zw + offs, s), offs));
            d = Xor(d, Hexagon(hu.xy + offs, GetSize(hu.zw - offs, s), -offs));
            offs = vec2(-0.5, 0.8725);
            d = Xor(d, Hexagon(hu.xy - offs, GetSize(hu.zw + offs, s), offs));
            d = Xor(d, Hexagon(hu.xy + offs, GetSize(hu.zw - offs, s), -offs));
            
            return d;
        }
        
        float N(float p) {
            return fract(sin(p * 123.34) * 345.456);
        }
        
        vec3 Col(float p, float offs) {
            float n = N(p) * 1234.34;
            
            return sin(n * vec3(12.23, 45.23, 56.2) + offs * 3.0) * 0.5 + 0.5;
        }
        
        vec3 GetRayDir(vec2 uv, vec3 p, vec3 lookat, float zoom) {
            vec3 f = normalize(lookat - p),
                r = normalize(cross(vec3(0.0, 1.0, 0.0), f)),
                u = cross(f, r),
                c = p + f * zoom,
                i = c + uv.x * r + uv.y * u,
                d = normalize(i - p);
            return d;
        }
        
        void main() {
            vec2 uv = (gl_FragCoord.xy - vec2(0.5 * iResolution.xy)) / iResolution.y;
            vec2 UV = gl_FragCoord.xy / iResolution.xy - vec2(0.5);
            float duv = dot(UV, UV);
            vec2 m = iMouse.xy / iResolution.xy - vec2(0.5);
            
            float t = iTime * 0.2 + m.x * 10.0 + 5.0;
            
            float y = sin(t * 0.5);
            vec3 ro = vec3(0.0, 20.0 * y, -5.0);
            vec3 lookat = vec3(0.0, 0.0, -10.0);
            vec3 rd = GetRayDir(uv, ro, lookat, 1.0);
            
            vec3 col = vec3(0.0);
            
            vec3 p = ro + rd * (ro.y / rd.y);
            float dp = length(p.xz);
            
            if (ro.y / rd.y > 0.0)
                col *= 0.0;
            else {
                uv = p.xz * 0.1;
        
                uv *= mix(1.0, 5.0, sin(t * 0.5) * 0.5 + 0.5);
        
                uv *= Rot(t);
                m *= Rot(t);
        
                uv.x *= R3;
        
                for (float i = 0.0; i < 1.0; i += 1.0 / 3.0) {
                    float id = floor(i + t);
                    float t = fract(i + t);
                    float z = mix(5.0, 0.1, t);
                    float fade = smoothstep(0.0, 0.3, t) * smoothstep(1.0, 0.7, t);
        
                    col += fade * t * Layer(uv * z, N(i + id)) * Col(id, duv);
                }
            }
            col *= 2.0;
            
            if (ro.y < 0.0)
                col = 1.0 - col;
            
            col *= smoothstep(18.0, 5.0, dp);
            col *= 1.0 - duv * 2.0;
            gl_FragColor = vec4(col, 1.0);
        }
        `
    }]

    isPlayingWebGl = true;
    canvas = document.getElementById('webgl');
    gl = canvas.getContext('webgl');
    canvas.addEventListener('mousemove', function(event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        window.mouseX = mouseX;
        window.mouseY = mouseY;
    });
    
    // Set up
    const shader = shaders.find(x => x.name === name);
    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, shader.vertexShaderSource);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, shader.fragmentShaderSource);
    shaderProgram = linkProgram(gl, vertexShader, fragmentShader);
    resolutionUniformLocation = gl.getUniformLocation(shaderProgram, 'iResolution');
    timeUniformLocation = gl.getUniformLocation(shaderProgram, 'iTime');
    mouseUniformLocation = gl.getUniformLocation(shaderProgram, 'iMouse');
    // Initialize vertex buffer and attribute pointers
    const vertices = [
        -1.0,  1.0,
         1.0,  1.0,
        -1.0, -1.0,
         1.0, -1.0,
    ];
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STREAM_DRAW);
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    
    // Get attribute location and enable it
    const positionLocation = gl.getAttribLocation(shaderProgram, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    let timer = performance.now();

    // Start render loop
    resizeCanvas();
    render();

    function render() {
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(shaderProgram);

        // Set uniform values
        gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
        gl.uniform1f(timeUniformLocation, (performance.now() - timer)/1000.0);
        // gl.uniform1f(timeUniformLocation, new Date().getTime() / 100000.0);
        gl.uniform2f(mouseUniformLocation, window.mouseX || 0, window.mouseY || 0);

        // Bind vertex buffer and draw
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        if (isPlayingWebGl) {   
            requestAnimationFrame(render);
        } else {
            cleanupWebGL();
        }
    }


    function compileShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }

        return shader;
    };

    function linkProgram(gl, vertexShader, fragmentShader) {
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Shader program linking error:', gl.getProgramInfoLog(program));
            gl.deleteProgram(program);
            return null;
        }

        return program;
    };
    
    function cleanupWebGL() {
        gl.deleteProgram(shaderProgram);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        gl.bindTexture(gl.TEXTURE_2D, null);
    }
    
    function resizeCanvas() {
        let width = scaleByPixelRatio(canvas.clientWidth ??= 0);
        let height = scaleByPixelRatio(canvas.clientHeight ??= 0);
        if (canvas.width != width || canvas.height != height) {
            canvas.width = width;
            canvas.height = height;
            return true;
        }
        return false;
    }
    
    function scaleByPixelRatio(input) {
        let pixelRatio = window.devicePixelRatio || 1;
        return Math.floor(input * pixelRatio);
    }
};
WebGlStop = () => {
    isPlayingWebGl = false;
}

Waves = () => {
    function SetCanvas(Width, Height) {
        try {
            canvas.clientWidth = Width;
            canvas.clientHeight = Height;
        } catch (e) { console.error(e) }
    }

    isPlayingWaves = true;
    let canvas;
    try {
        canvas = document.getElementById('canvas');
        if (canvas === null)
            canvas = document.getElementById('background');
    } catch (e) {
        console.log(e);
    }

    resizeCanvas();

    let config = {
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 1024,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 1,
        VELOCITY_DISSIPATION: 0.2,
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 20,
        CURL: 30,
        SPLAT_RADIUS: 0.25,
        SPLAT_FORCE: 6000,
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 10,
        PAUSED: false,
        BACK_COLOR: { r: 0, g: 0, b: 0 },
        TRANSPARENT: false,
        BLOOM: true,
        BLOOM_ITERATIONS: 8,
        BLOOM_RESOLUTION: 256,
        BLOOM_INTENSITY: 0.8,
        BLOOM_THRESHOLD: 0.6,
        BLOOM_SOFT_KNEE: 0.7,
        SUNRAYS: true,
        SUNRAYS_RESOLUTION: 196,
        SUNRAYS_WEIGHT: 1.0,
    }

    function pointerPrototype() {
        this.id = -1;
        this.texcoordX = 0;
        this.texcoordY = 0;
        this.prevTexcoordX = 0;
        this.prevTexcoordY = 0;
        this.deltaX = 0;
        this.deltaY = 0;
        this.down = false;
        this.moved = false;
        this.color = [30, 0, 300];
    }

    let pointers = [];
    let splatStack = [];
    pointers.push(new pointerPrototype());

    const { gl, ext } = getWebGLContext(canvas);

    config.DYE_RESOLUTION = 512;
    if (!ext.supportLinearFiltering) {
        config.SHADING = false;
        config.BLOOM = false;
        config.SUNRAYS = false;
    }

    function getWebGLContext(canvas) {
        const params = { alpha: true, depth: false, stencil: false, antialias: false, preserveDrawingBuffer: false };

        let gl = canvas.getContext('webgl2', params);
        const isWebGL2 = !!gl;
        if (!isWebGL2)
            gl = canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params);

        let halfFloat;
        let supportLinearFiltering;
        if (isWebGL2) {
            gl.getExtension('EXT_color_buffer_float');
            supportLinearFiltering = gl.getExtension('OES_texture_float_linear');
        } else {
            halfFloat = gl.getExtension('OES_texture_half_float');
            supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear');
        }

        gl.clearColor(0.0, 0.0, 0.0, 1.0);

        const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat.HALF_FLOAT_OES;
        let formatRGBA;
        let formatRG;
        let formatR;

        if (isWebGL2) {
            formatRGBA = getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloatTexType);
            formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
            formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
        }
        else {
            formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
            formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
            formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
        }

        return {
            gl,
            ext: {
                formatRGBA,
                formatRG,
                formatR,
                halfFloatTexType,
                supportLinearFiltering
            }
        };
    }

    function resizeCanvas() {
        let width = scaleByPixelRatio(canvas.clientWidth ??= 0);
        let height = scaleByPixelRatio(canvas.clientHeight ??= 0);
        if (canvas.width != width || canvas.height != height) {
            canvas.width = width;
            canvas.height = height;
            return true;
        }
        return false;
    }

    function getSupportedFormat(gl, internalFormat, format, type) {
        if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
            switch (internalFormat) {
                case gl.R16F:
                    return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
                case gl.RG16F:
                    return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
                default:
                    return null;
            }
        }

        return {
            internalFormat,
            format
        }
    }

    function supportRenderTextureFormat(gl, internalFormat, format, type) {
        let texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);

        let fbo = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

        let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        return status == gl.FRAMEBUFFER_COMPLETE;
    }

    function captureScreenshot() {
        let res = getResolution(config.CAPTURE_RESOLUTION);
        let target = createFBO(res.width, res.height, ext.formatRGBA.internalFormat, ext.formatRGBA.format, ext.halfFloatTexType, gl.NEAREST);
        render(target);

        let texture = framebufferToTexture(target);
        texture = normalizeTexture(texture, target.width, target.height);

        let captureCanvas = textureToCanvas(texture, target.width, target.height);
        let datauri = captureCanvas.toDataURL();
        downloadURI('fluid.png', datauri);
        URL.revokeObjectURL(datauri);
    }

    function framebufferToTexture(target) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
        let length = target.width * target.height * 4;
        let texture = new Float32Array(length);
        gl.readPixels(0, 0, target.width, target.height, gl.RGBA, gl.FLOAT, texture);
        return texture;
    }

    function normalizeTexture(texture, width, height) {
        let result = new Uint8Array(texture.length);
        let id = 0;
        for (let i = height - 1; i >= 0; i--) {
            for (let j = 0; j < width; j++) {
                let nid = i * width * 4 + j * 4;
                result[nid + 0] = clamp01(texture[id + 0]) * 255;
                result[nid + 1] = clamp01(texture[id + 1]) * 255;
                result[nid + 2] = clamp01(texture[id + 2]) * 255;
                result[nid + 3] = clamp01(texture[id + 3]) * 255;
                id += 4;
            }
        }
        return result;
    }

    function clamp01(input) {
        return Math.min(Math.max(input, 0), 1);
    }

    function textureToCanvas(texture, width, height) {
        let captureCanvas = document.createElement('canvas');
        let ctx = captureCanvas.getContext('2d');
        captureCanvas.width = width;
        captureCanvas.height = height;

        let imageData = ctx.createImageData(width, height);
        imageData.data.set(texture);
        ctx.putImageData(imageData, 0, 0);

        return captureCanvas;
    }

    class Material {
        constructor(vertexShader, fragmentShaderSource) {
            this.vertexShader = vertexShader;
            this.fragmentShaderSource = fragmentShaderSource;
            this.programs = [];
            this.activeProgram = null;
            this.uniforms = [];
        }

        setKeywords(keywords) {
            let hash = 0;
            for (let i = 0; i < keywords.length; i++)
                hash += hashCode(keywords[i]);

            let program = this.programs[hash];
            if (program == null) {
                let fragmentShader = compileShader(gl.FRAGMENT_SHADER, this.fragmentShaderSource, keywords);
                program = createProgram(this.vertexShader, fragmentShader);
                this.programs[hash] = program;
            }

            if (program == this.activeProgram) return;

            this.uniforms = getUniforms(program);
            this.activeProgram = program;
        }

        bind() {
            gl.useProgram(this.activeProgram);
        }
    }

    class Program {
        constructor(vertexShader, fragmentShader) {
            this.uniforms = {};
            this.program = createProgram(vertexShader, fragmentShader);
            this.uniforms = getUniforms(this.program);
        }

        bind() {
            gl.useProgram(this.program);
        }
    }

    function createProgram(vertexShader, fragmentShader) {
        let program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS))
            console.trace(gl.getProgramInfoLog(program));

        return program;
    }

    function getUniforms(program) {
        let uniforms = [];
        let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < uniformCount; i++) {
            let uniformName = gl.getActiveUniform(program, i).name;
            uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
        }
        return uniforms;
    }

    function compileShader(type, source, keywords) {
        source = addKeywords(source, keywords);

        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
            console.trace(gl.getShaderInfoLog(shader));

        return shader;
    };

    function addKeywords(source, keywords) {
        if (keywords == null) return source;
        let keywordsString = '';
        keywords.forEach(keyword => {
            keywordsString += '#define ' + keyword + '\n';
        });
        return keywordsString + source;
    }

    const baseVertexShader = compileShader(gl.VERTEX_SHADER, `
        precision highp float;

        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;

        void main () {
            vUv = aPosition * 0.5 + 0.5;
            vL = vUv - vec2(texelSize.x, 0.0);
            vR = vUv + vec2(texelSize.x, 0.0);
            vT = vUv + vec2(0.0, texelSize.y);
            vB = vUv - vec2(0.0, texelSize.y);
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
    `);

    const blurVertexShader = compileShader(gl.VERTEX_SHADER, `
        precision highp float;

        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        uniform vec2 texelSize;

        void main () {
            vUv = aPosition * 0.5 + 0.5;
            float offset = 1.33333333;
            vL = vUv - texelSize * offset;
            vR = vUv + texelSize * offset;
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
    `);

    const blurShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;

        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        uniform sampler2D uTexture;

        void main () {
            vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
            sum += texture2D(uTexture, vL) * 0.35294117;
            sum += texture2D(uTexture, vR) * 0.35294117;
            gl_FragColor = sum;
        }
    `);

    const copyShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;

        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
    `);

    const clearShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;

        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
    `);

    const colorShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;

        uniform vec4 color;

        void main () {
            gl_FragColor = color;
        }
    `);

    const checkerboardShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;

        varying vec2 vUv;
        uniform sampler2D uTexture;
        uniform float aspectRatio;

        #define SCALE 25.0

        void main () {
            vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
            float v = mod(uv.x + uv.y, 2.0);
            v = v * 0.1 + 0.8;
            gl_FragColor = vec4(vec3(v), 1.0);
        }
    `);

    const displayShaderSource = `
        precision highp float;
        precision highp sampler2D;

        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uTexture;
        uniform sampler2D uBloom;
        uniform sampler2D uSunrays;
        uniform sampler2D uDithering;
        uniform vec2 ditherScale;
        uniform vec2 texelSize;

        vec3 linearToGamma (vec3 color) {
            color = max(color, vec3(0));
            return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
        }

        void main () {
            vec3 c = texture2D(uTexture, vUv).rgb;

        #ifdef SHADING
            vec3 lc = texture2D(uTexture, vL).rgb;
            vec3 rc = texture2D(uTexture, vR).rgb;
            vec3 tc = texture2D(uTexture, vT).rgb;
            vec3 bc = texture2D(uTexture, vB).rgb;

            float dx = length(rc) - length(lc);
            float dy = length(tc) - length(bc);

            vec3 n = normalize(vec3(dx, dy, length(texelSize)));
            vec3 l = vec3(0.0, 0.0, 1.0);

            float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
            c *= diffuse;
        #endif

        #ifdef BLOOM
            vec3 bloom = texture2D(uBloom, vUv).rgb;
        #endif

        #ifdef SUNRAYS
            float sunrays = texture2D(uSunrays, vUv).r;
            c *= sunrays;
        #ifdef BLOOM
            bloom *= sunrays;
        #endif
        #endif

        #ifdef BLOOM
            float noise = texture2D(uDithering, vUv * ditherScale).r;
            noise = noise * 2.0 - 1.0;
            bloom += noise / 255.0;
            bloom = linearToGamma(bloom);
            c += bloom;
        #endif

            float a = max(c.r, max(c.g, c.b));
            gl_FragColor = vec4(c, a);
        }
    `;

    const bloomPrefilterShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;

        varying vec2 vUv;
        uniform sampler2D uTexture;
        uniform vec3 curve;
        uniform float threshold;

        void main () {
            vec3 c = texture2D(uTexture, vUv).rgb;
            float br = max(c.r, max(c.g, c.b));
            float rq = clamp(br - curve.x, 0.0, curve.y);
            rq = curve.z * rq * rq;
            c *= max(rq, br - threshold) / max(br, 0.0001);
            gl_FragColor = vec4(c, 0.0);
        }
    `);

    const bloomBlurShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;

        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uTexture;

        void main () {
            vec4 sum = vec4(0.0);
            sum += texture2D(uTexture, vL);
            sum += texture2D(uTexture, vR);
            sum += texture2D(uTexture, vT);
            sum += texture2D(uTexture, vB);
            sum *= 0.25;
            gl_FragColor = sum;
        }
    `);

    const bloomFinalShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;

        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uTexture;
        uniform float intensity;

        void main () {
            vec4 sum = vec4(0.0);
            sum += texture2D(uTexture, vL);
            sum += texture2D(uTexture, vR);
            sum += texture2D(uTexture, vT);
            sum += texture2D(uTexture, vB);
            sum *= 0.25;
            gl_FragColor = sum * intensity;
        }
    `);

    const sunraysMaskShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;

        varying vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            vec4 c = texture2D(uTexture, vUv);
            float br = max(c.r, max(c.g, c.b));
            c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
            gl_FragColor = c;
        }
    `);

    const sunraysShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;

        varying vec2 vUv;
        uniform sampler2D uTexture;
        uniform float weight;

        #define ITERATIONS 16

        void main () {
            float Density = 0.3;
            float Decay = 0.95;
            float Exposure = 0.7;

            vec2 coord = vUv;
            vec2 dir = vUv - 0.5;

            dir *= 1.0 / float(ITERATIONS) * Density;
            float illuminationDecay = 1.0;

            float color = texture2D(uTexture, vUv).a;

            for (int i = 0; i < ITERATIONS; i++)
            {
                coord -= dir;
                float col = texture2D(uTexture, coord).a;
                color += col * illuminationDecay * weight;
                illuminationDecay *= Decay;
            }

            gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
        }
    `);

    const splatShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;

        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float aspectRatio;
        uniform vec3 color;
        uniform vec2 point;
        uniform float radius;

        void main () {
            vec2 p = vUv - point.xy;
            p.x *= aspectRatio;
            vec3 splat = exp(-dot(p, p) / radius) * color;
            vec3 base = texture2D(uTarget, vUv).xyz;
            gl_FragColor = vec4(base + splat, 1.0);
        }
    `);

    const advectionShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;

        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform vec2 dyeTexelSize;
        uniform float dt;
        uniform float dissipation;

        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
            vec2 st = uv / tsize - 0.5;

            vec2 iuv = floor(st);
            vec2 fuv = fract(st);

            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
        }

        void main () {
        #ifdef MANUAL_FILTERING
            vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
            vec4 result = bilerp(uSource, coord, dyeTexelSize);
        #else
            vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
            vec4 result = texture2D(uSource, coord);
        #endif
            float decay = 1.0 + dissipation * dt;
            gl_FragColor = result / decay;
        }`,
        ext.supportLinearFiltering ? null : ['MANUAL_FILTERING']
    );

    const divergenceShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;

        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).x;
            float R = texture2D(uVelocity, vR).x;
            float T = texture2D(uVelocity, vT).y;
            float B = texture2D(uVelocity, vB).y;

            vec2 C = texture2D(uVelocity, vUv).xy;
            if (vL.x < 0.0) { L = -C.x; }
            if (vR.x > 1.0) { R = -C.x; }
            if (vT.y > 1.0) { T = -C.y; }
            if (vB.y < 0.0) { B = -C.y; }

            float div = 0.5 * (R - L + T - B);
            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
    `);

    const curlShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;

        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).y;
            float R = texture2D(uVelocity, vR).y;
            float T = texture2D(uVelocity, vT).x;
            float B = texture2D(uVelocity, vB).x;
            float vorticity = R - L - T + B;
            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
        }
    `);

    const vorticityShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;

        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        uniform sampler2D uCurl;
        uniform float curl;
        uniform float dt;

        void main () {
            float L = texture2D(uCurl, vL).x;
            float R = texture2D(uCurl, vR).x;
            float T = texture2D(uCurl, vT).x;
            float B = texture2D(uCurl, vB).x;
            float C = texture2D(uCurl, vUv).x;

            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
            force /= length(force) + 0.0001;
            force *= curl * C;
            force.y *= -1.0;

            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity += force * dt;
            velocity = min(max(velocity, -1000.0), 1000.0);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
    `);

    const pressureShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;

        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            float C = texture2D(uPressure, vUv).x;
            float divergence = texture2D(uDivergence, vUv).x;
            float pressure = (L + R + B + T - divergence) * 0.25;
            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
    `);

    const gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;

        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity.xy -= vec2(R - L, T - B);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
    `);

    const blit = (() => {
        gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
        gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(0);

        return (target, clear = false) => {
            if (target == null) {
                gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
                gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            }
            else {
                gl.viewport(0, 0, target.width, target.height);
                gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
            }
            if (clear) {
                gl.clearColor(0.0, 0.0, 0.0, 1.0);
                gl.clear(gl.COLOR_BUFFER_BIT);
            }
            // CHECK_FRAMEBUFFER_STATUS();
            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
        }
    })();

    function CHECK_FRAMEBUFFER_STATUS() {
        let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        if (status != gl.FRAMEBUFFER_COMPLETE)
            console.trace("Framebuffer error: " + status);
    }

    let dye;
    let velocity;
    let divergence;
    let curl;
    let pressure;
    let bloom;
    let bloomFramebuffers = [];
    let sunrays;
    let sunraysTemp;

    let ditheringTexture = createTextureAsync(null);
     //ditheringTexture = createTextureAsync('Images/vanishing-stripes.svg');
     //ditheringTexture = createTextureAsync('Images/abstract-timekeeper-media.svg');

    const blurProgram = new Program(blurVertexShader, blurShader);
    const copyProgram = new Program(baseVertexShader, copyShader);
    const clearProgram = new Program(baseVertexShader, clearShader);
    const colorProgram = new Program(baseVertexShader, colorShader);
    const checkerboardProgram = new Program(baseVertexShader, checkerboardShader);
    const bloomPrefilterProgram = new Program(baseVertexShader, bloomPrefilterShader);
    const bloomBlurProgram = new Program(baseVertexShader, bloomBlurShader);
    const bloomFinalProgram = new Program(baseVertexShader, bloomFinalShader);
    const sunraysMaskProgram = new Program(baseVertexShader, sunraysMaskShader);
    const sunraysProgram = new Program(baseVertexShader, sunraysShader);
    const splatProgram = new Program(baseVertexShader, splatShader);
    const advectionProgram = new Program(baseVertexShader, advectionShader);
    const divergenceProgram = new Program(baseVertexShader, divergenceShader);
    const curlProgram = new Program(baseVertexShader, curlShader);
    const vorticityProgram = new Program(baseVertexShader, vorticityShader);
    const pressureProgram = new Program(baseVertexShader, pressureShader);
    const gradienSubtractProgram = new Program(baseVertexShader, gradientSubtractShader);

    const displayMaterial = new Material(baseVertexShader, displayShaderSource);

    function initFramebuffers() {
        let simRes = getResolution(config.SIM_RESOLUTION);
        let dyeRes = getResolution(config.DYE_RESOLUTION);

        const texType = ext.halfFloatTexType;
        const rgba = ext.formatRGBA;
        const rg = ext.formatRG;
        const r = ext.formatR;
        const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;

        gl.disable(gl.BLEND);

        if (dye == null)
            dye = createDoubleFBO(dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
        else
            dye = resizeDoubleFBO(dye, dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);

        if (velocity == null)
            velocity = createDoubleFBO(simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
        else
            velocity = resizeDoubleFBO(velocity, simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);

        divergence = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
        curl = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
        pressure = createDoubleFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);

        initBloomFramebuffers();
        initSunraysFramebuffers();
    }

    function initBloomFramebuffers() {
        let res = getResolution(config.BLOOM_RESOLUTION);

        const texType = ext.halfFloatTexType;
        const rgba = ext.formatRGBA;
        const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;

        bloom = createFBO(res.width, res.height, rgba.internalFormat, rgba.format, texType, filtering);

        bloomFramebuffers.length = 0;
        for (let i = 0; i < config.BLOOM_ITERATIONS; i++) {
            let width = res.width >> (i + 1);
            let height = res.height >> (i + 1);

            if (width < 2 || height < 2) break;

            let fbo = createFBO(width, height, rgba.internalFormat, rgba.format, texType, filtering);
            bloomFramebuffers.push(fbo);
        }
    }

    function initSunraysFramebuffers() {
        let res = getResolution(config.SUNRAYS_RESOLUTION);

        const texType = ext.halfFloatTexType;
        const r = ext.formatR;
        const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;

        sunrays = createFBO(res.width, res.height, r.internalFormat, r.format, texType, filtering);
        sunraysTemp = createFBO(res.width, res.height, r.internalFormat, r.format, texType, filtering);
    }

    function createFBO(w, h, internalFormat, format, type, param) {
        gl.activeTexture(gl.TEXTURE0);
        let texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

        let fbo = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
        gl.viewport(0, 0, w, h);
        gl.clear(gl.COLOR_BUFFER_BIT);

        let texelSizeX = 1.0 / w;
        let texelSizeY = 1.0 / h;

        return {
            texture,
            fbo,
            width: w,
            height: h,
            texelSizeX,
            texelSizeY,
            attach(id) {
                gl.activeTexture(gl.TEXTURE0 + id);
                gl.bindTexture(gl.TEXTURE_2D, texture);
                return id;
            }
        };
    }

    function createDoubleFBO(w, h, internalFormat, format, type, param) {
        let fbo1 = createFBO(w, h, internalFormat, format, type, param);
        let fbo2 = createFBO(w, h, internalFormat, format, type, param);

        return {
            width: w,
            height: h,
            texelSizeX: fbo1.texelSizeX,
            texelSizeY: fbo1.texelSizeY,
            get read() {
                return fbo1;
            },
            set read(value) {
                fbo1 = value;
            },
            get write() {
                return fbo2;
            },
            set write(value) {
                fbo2 = value;
            },
            swap() {
                let temp = fbo1;
                fbo1 = fbo2;
                fbo2 = temp;
            }
        }
    }

    function resizeFBO(target, w, h, internalFormat, format, type, param) {
        let newFBO = createFBO(w, h, internalFormat, format, type, param);
        copyProgram.bind();
        gl.uniform1i(copyProgram.uniforms.uTexture, target.attach(0));
        blit(newFBO);
        return newFBO;
    }

    function resizeDoubleFBO(target, w, h, internalFormat, format, type, param) {
        if (target.width == w && target.height == h)
            return target;
        target.read = resizeFBO(target.read, w, h, internalFormat, format, type, param);
        target.write = createFBO(w, h, internalFormat, format, type, param);
        target.width = w;
        target.height = h;
        target.texelSizeX = 1.0 / w;
        target.texelSizeY = 1.0 / h;
        return target;
    }

    function createTextureAsync(url) {
        let texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255]));

        let obj = {
            texture,
            width: 1,
            height: 1,
            attach(id) {
                gl.activeTexture(gl.TEXTURE0 + id);
                gl.bindTexture(gl.TEXTURE_2D, texture);
                return id;
            }
        };

        let image = new Image();
        image.onload = () => {
            obj.width = image.width;
            obj.height = image.height;
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
        };
        image.src = url;

        return obj;
    }

    function updateKeywords() {
        let displayKeywords = [];
        if (config.SHADING) displayKeywords.push("SHADING");
        if (config.BLOOM) displayKeywords.push("BLOOM");
        if (config.SUNRAYS) displayKeywords.push("SUNRAYS");
        displayMaterial.setKeywords(displayKeywords);
    }

    updateKeywords();
    initFramebuffers();
    multipleSplats(parseInt(Math.random() * 20) + 5);

    let lastUpdateTime = Date.now();
    let colorUpdateTimer = 0.0;
    update();

    function update() {
        const dt = calcDeltaTime();
        if (resizeCanvas())
            initFramebuffers();
        updateColors(dt);
        applyInputs();
        if (!config.PAUSED)
            step(dt);
        render(null);
        if (isPlayingWaves)
            requestAnimationFrame(update);
    }

    function calcDeltaTime() {
        let now = Date.now();
        let dt = (now - lastUpdateTime) / 1000;
        dt = Math.min(dt, 0.016666);
        lastUpdateTime = now;
        return dt;
    }

    function updateColors(dt) {
        if (!config.COLORFUL) return;

        colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED;
        if (colorUpdateTimer >= 1) {
            colorUpdateTimer = wrap(colorUpdateTimer, 0, 1);
            pointers.forEach(p => {
                p.color = generateColor();
            });
        }
    }

    function applyInputs() {
        if (splatStack.length > 0)
            multipleSplats(splatStack.pop());

        pointers.forEach(p => {
            if (p.moved) {
                p.moved = false;
                splatPointer(p);
            }
        });
    }

    function step(dt) {
        gl.disable(gl.BLEND);

        curlProgram.bind();
        gl.uniform2f(curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
        gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
        blit(curl);

        vorticityProgram.bind();
        gl.uniform2f(vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
        gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
        gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
        gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
        gl.uniform1f(vorticityProgram.uniforms.dt, dt);
        blit(velocity.write);
        velocity.swap();

        divergenceProgram.bind();
        gl.uniform2f(divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
        gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
        blit(divergence);

        clearProgram.bind();
        gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
        gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE);
        blit(pressure.write);
        pressure.swap();

        pressureProgram.bind();
        gl.uniform2f(pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
        gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
        for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
            gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));
            blit(pressure.write);
            pressure.swap();
        }

        gradienSubtractProgram.bind();
        gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
        gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
        gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
        blit(velocity.write);
        velocity.swap();

        advectionProgram.bind();
        gl.uniform2f(advectionProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
        if (!ext.supportLinearFiltering)
            gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, velocity.texelSizeX, velocity.texelSizeY);
        let velocityId = velocity.read.attach(0);
        gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId);
        gl.uniform1i(advectionProgram.uniforms.uSource, velocityId);
        gl.uniform1f(advectionProgram.uniforms.dt, dt);
        gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
        blit(velocity.write);
        velocity.swap();

        if (!ext.supportLinearFiltering)
            gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, dye.texelSizeX, dye.texelSizeY);
        gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
        gl.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1));
        gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
        blit(dye.write);
        dye.swap();
    }

    function render(target) {
        if (config.BLOOM)
            applyBloom(dye.read, bloom);
        if (config.SUNRAYS) {
            applySunrays(dye.read, dye.write, sunrays);
            blur(sunrays, sunraysTemp, 1);
        }

        if (target == null || !config.TRANSPARENT) {
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            gl.enable(gl.BLEND);
        }
        else {
            gl.disable(gl.BLEND);
        }

        if (!config.TRANSPARENT)
            drawColor(target, normalizeColor(config.BACK_COLOR));
        if (target == null && config.TRANSPARENT)
            drawCheckerboard(target);
        drawDisplay(target);
    }

    function drawColor(target, color) {
        colorProgram.bind();
        gl.uniform4f(colorProgram.uniforms.color, color.r, color.g, color.b, 1);
        blit(target);
    }

    function drawCheckerboard(target) {
        checkerboardProgram.bind();
        gl.uniform1f(checkerboardProgram.uniforms.aspectRatio, canvas.width / canvas.height);
        blit(target);
    }

    function drawDisplay(target) {
        let width = target == null ? gl.drawingBufferWidth : target.width;
        let height = target == null ? gl.drawingBufferHeight : target.height;

        displayMaterial.bind();
        if (config.SHADING)
            gl.uniform2f(displayMaterial.uniforms.texelSize, 1.0 / width, 1.0 / height);
        gl.uniform1i(displayMaterial.uniforms.uTexture, dye.read.attach(0));
        if (config.BLOOM) {
            gl.uniform1i(displayMaterial.uniforms.uBloom, bloom.attach(1));
            gl.uniform1i(displayMaterial.uniforms.uDithering, ditheringTexture.attach(2));
            let scale = getTextureScale(ditheringTexture, width, height);
            gl.uniform2f(displayMaterial.uniforms.ditherScale, scale.x, scale.y);
        }
        if (config.SUNRAYS)
            gl.uniform1i(displayMaterial.uniforms.uSunrays, sunrays.attach(3));
        blit(target);
    }

    function applyBloom(source, destination) {
        if (bloomFramebuffers.length < 2)
            return;

        let last = destination;

        gl.disable(gl.BLEND);
        bloomPrefilterProgram.bind();
        let knee = config.BLOOM_THRESHOLD * config.BLOOM_SOFT_KNEE + 0.0001;
        let curve0 = config.BLOOM_THRESHOLD - knee;
        let curve1 = knee * 2;
        let curve2 = 0.25 / knee;
        gl.uniform3f(bloomPrefilterProgram.uniforms.curve, curve0, curve1, curve2);
        gl.uniform1f(bloomPrefilterProgram.uniforms.threshold, config.BLOOM_THRESHOLD);
        gl.uniform1i(bloomPrefilterProgram.uniforms.uTexture, source.attach(0));
        blit(last);

        bloomBlurProgram.bind();
        for (let i = 0; i < bloomFramebuffers.length; i++) {
            let dest = bloomFramebuffers[i];
            gl.uniform2f(bloomBlurProgram.uniforms.texelSize, last.texelSizeX, last.texelSizeY);
            gl.uniform1i(bloomBlurProgram.uniforms.uTexture, last.attach(0));
            blit(dest);
            last = dest;
        }

        gl.blendFunc(gl.ONE, gl.ONE);
        gl.enable(gl.BLEND);

        for (let i = bloomFramebuffers.length - 2; i >= 0; i--) {
            let baseTex = bloomFramebuffers[i];
            gl.uniform2f(bloomBlurProgram.uniforms.texelSize, last.texelSizeX, last.texelSizeY);
            gl.uniform1i(bloomBlurProgram.uniforms.uTexture, last.attach(0));
            gl.viewport(0, 0, baseTex.width, baseTex.height);
            blit(baseTex);
            last = baseTex;
        }

        gl.disable(gl.BLEND);
        bloomFinalProgram.bind();
        gl.uniform2f(bloomFinalProgram.uniforms.texelSize, last.texelSizeX, last.texelSizeY);
        gl.uniform1i(bloomFinalProgram.uniforms.uTexture, last.attach(0));
        gl.uniform1f(bloomFinalProgram.uniforms.intensity, config.BLOOM_INTENSITY);
        blit(destination);
    }

    function applySunrays(source, mask, destination) {
        gl.disable(gl.BLEND);
        sunraysMaskProgram.bind();
        gl.uniform1i(sunraysMaskProgram.uniforms.uTexture, source.attach(0));
        blit(mask);

        sunraysProgram.bind();
        gl.uniform1f(sunraysProgram.uniforms.weight, config.SUNRAYS_WEIGHT);
        gl.uniform1i(sunraysProgram.uniforms.uTexture, mask.attach(0));
        blit(destination);
    }

    function blur(target, temp, iterations) {
        blurProgram.bind();
        for (let i = 0; i < iterations; i++) {
            gl.uniform2f(blurProgram.uniforms.texelSize, target.texelSizeX, 0.0);
            gl.uniform1i(blurProgram.uniforms.uTexture, target.attach(0));
            blit(temp);

            gl.uniform2f(blurProgram.uniforms.texelSize, 0.0, target.texelSizeY);
            gl.uniform1i(blurProgram.uniforms.uTexture, temp.attach(0));
            blit(target);
        }
    }

    function splatPointer(pointer) {
        let dx = pointer.deltaX * config.SPLAT_FORCE;
        let dy = pointer.deltaY * config.SPLAT_FORCE;
        splat(pointer.texcoordX, pointer.texcoordY, dx, dy, pointer.color);
    }

    function multipleSplats(amount) {
        for (let i = 0; i < amount; i++) {
            const color = generateColor();
            color.r *= 10.0;
            color.g *= 10.0;
            color.b *= 10.0;
            const x = Math.random();
            const y = Math.random();
            const dx = 1000 * (Math.random() - 0.5);
            const dy = 1000 * (Math.random() - 0.5);
            splat(x, y, dx, dy, color);
        }
    }

    function splat(x, y, dx, dy, color) {
        splatProgram.bind();
        gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
        gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
        gl.uniform2f(splatProgram.uniforms.point, x, y);
        gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0.0);
        gl.uniform1f(splatProgram.uniforms.radius, correctRadius(config.SPLAT_RADIUS / 100.0));
        blit(velocity.write);
        velocity.swap();

        gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0));
        gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
        blit(dye.write);
        dye.swap();
    }

    function correctRadius(radius) {
        let aspectRatio = canvas.width / canvas.height;
        if (aspectRatio > 1)
            radius *= aspectRatio;
        return radius;
    }

    canvas.addEventListener('mousedown', e => {
        let posX = scaleByPixelRatio(e.offsetX);
        let posY = scaleByPixelRatio(e.offsetY);
        let pointer = pointers.find(p => p.id == -1);
        if (pointer == null)
            pointer = new pointerPrototype();
        updatePointerDownData(pointer, -1, posX, posY);
    });

    canvas.addEventListener('mousemove', e => {
        let pointer = pointers[0];
        if (!pointer.down) return;
        let posX = scaleByPixelRatio(e.offsetX);
        let posY = scaleByPixelRatio(e.offsetY);
        updatePointerMoveData(pointer, posX, posY);
    });

    window.addEventListener('mouseup', () => {
        updatePointerUpData(pointers[0]);
    });

    canvas.addEventListener('touchstart', e => {
        e.preventDefault();
        const touches = e.targetTouches;
        while (touches.length >= pointers.length)
            pointers.push(new pointerPrototype());
        for (let i = 0; i < touches.length; i++) {
            let posX = scaleByPixelRatio(touches[i].pageX);
            let posY = scaleByPixelRatio(touches[i].pageY);
            updatePointerDownData(pointers[i + 1], touches[i].identifier, posX, posY);
        }
    });

    canvas.addEventListener('touchmove', e => {
        e.preventDefault();
        const touches = e.targetTouches;
        for (let i = 0; i < touches.length; i++) {
            let pointer = pointers[i + 1];
            if (!pointer.down) continue;
            let posX = scaleByPixelRatio(touches[i].pageX);
            let posY = scaleByPixelRatio(touches[i].pageY);
            updatePointerMoveData(pointer, posX, posY);
        }
    }, false);

    window.addEventListener('touchend', e => {
        const touches = e.changedTouches;
        for (let i = 0; i < touches.length; i++) {
            let pointer = pointers.find(p => p.id == touches[i].identifier);
            if (pointer == null) continue;
            updatePointerUpData(pointer);
        }
    });

    window.addEventListener('keydown', e => {
        if (e.code === 'KeyP')
            config.PAUSED = !config.PAUSED;
        if (e.key === ' ')
            splatStack.push(parseInt(Math.random() * 20) + 5);
    });

    function updatePointerDownData(pointer, id, posX, posY) {
        pointer.id = id;
        pointer.down = true;
        pointer.moved = false;
        pointer.texcoordX = posX / canvas.width;
        pointer.texcoordY = 1.0 - posY / canvas.height;
        pointer.prevTexcoordX = pointer.texcoordX;
        pointer.prevTexcoordY = pointer.texcoordY;
        pointer.deltaX = 0;
        pointer.deltaY = 0;
        pointer.color = generateColor();
    }

    function updatePointerMoveData(pointer, posX, posY) {
        pointer.prevTexcoordX = pointer.texcoordX;
        pointer.prevTexcoordY = pointer.texcoordY;
        pointer.texcoordX = posX / canvas.width;
        pointer.texcoordY = 1.0 - posY / canvas.height;
        pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX);
        pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY);
        pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
    }

    function updatePointerUpData(pointer) {
        pointer.down = false;
    }

    function correctDeltaX(delta) {
        let aspectRatio = canvas.width / canvas.height;
        if (aspectRatio < 1) delta *= aspectRatio;
        return delta;
    }

    function correctDeltaY(delta) {
        let aspectRatio = canvas.width / canvas.height;
        if (aspectRatio > 1) delta /= aspectRatio;
        return delta;
    }

    function generateColor() {
        let c = HSVtoRGB(Math.random(), 1.0, 1.0);
        c.r *= 0.15;
        c.g *= 0.15;
        c.b *= 0.15;
        return c;
    }

    function HSVtoRGB(h, s, v) {
        let r, g, b, i, f, p, q, t;
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);

        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }

        return {
            r,
            g,
            b
        };
    }

    function normalizeColor(input) {
        let output = {
            r: input.r / 255,
            g: input.g / 255,
            b: input.b / 255
        };
        return output;
    }

    function wrap(value, min, max) {
        let range = max - min;
        if (range == 0) return min;
        return (value - min) % range + min;
    }

    function getResolution(resolution) {
        let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
        if (aspectRatio < 1)
            aspectRatio = 1.0 / aspectRatio;

        let min = Math.round(resolution);
        let max = Math.round(resolution * aspectRatio);

        if (gl.drawingBufferWidth > gl.drawingBufferHeight)
            return { width: max, height: min };
        else
            return { width: min, height: max };
    }

    function getTextureScale(texture, width, height) {
        return {
            x: width / texture.width,
            y: height / texture.height
        };
    }

    function scaleByPixelRatio(input) {
        let pixelRatio = window.devicePixelRatio || 1;
        return Math.floor(input * pixelRatio);
    }

    function hashCode(s) {
        if (s.length == 0) return 0;
        let hash = 0;
        for (let i = 0; i < s.length; i++) {
            hash = (hash << 5) - hash + s.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };
}
WavesStop = () => {
    isPlayingWaves = false;
}