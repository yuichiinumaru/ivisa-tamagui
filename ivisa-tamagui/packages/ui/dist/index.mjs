var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    "use strict";
    function _typeof2(o) {
      "@babel/helpers - typeof";
      return module.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(o);
    }
    module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/toPrimitive.js
var require_toPrimitive = __commonJS({
  "../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/toPrimitive.js"(exports, module) {
    "use strict";
    var _typeof2 = require_typeof()["default"];
    function toPrimitive(t, r) {
      if ("object" != _typeof2(t) || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof2(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }
    module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/toPropertyKey.js
var require_toPropertyKey = __commonJS({
  "../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/toPropertyKey.js"(exports, module) {
    "use strict";
    var _typeof2 = require_typeof()["default"];
    var toPrimitive = require_toPrimitive();
    function toPropertyKey(t) {
      var i = toPrimitive(t, "string");
      return "symbol" == _typeof2(i) ? i : i + "";
    }
    module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/defineProperty.js
var require_defineProperty = __commonJS({
  "../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/defineProperty.js"(exports, module) {
    "use strict";
    var toPropertyKey = require_toPropertyKey();
    function _defineProperty(e, r, t) {
      return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[r] = t, e;
    }
    module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/objectSpread2.js
var require_objectSpread2 = __commonJS({
  "../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/objectSpread2.js"(exports, module) {
    "use strict";
    var defineProperty = require_defineProperty();
    function ownKeys(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r2) {
          return Object.getOwnPropertyDescriptor(e, r2).enumerable;
        })), t.push.apply(t, o);
      }
      return t;
    }
    function _objectSpread24(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
          defineProperty(e, r2, t[r2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
        });
      }
      return e;
    }
    module.exports = _objectSpread24, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var require_objectWithoutPropertiesLoose = __commonJS({
  "../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"(exports, module) {
    "use strict";
    function _objectWithoutPropertiesLoose14(r, e) {
      if (null == r) return {};
      var t = {};
      for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
      }
      return t;
    }
    module.exports = _objectWithoutPropertiesLoose14, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/.pnpm/@react-native+normalize-colors@0.74.89/node_modules/@react-native/normalize-colors/index.js
var require_normalize_colors = __commonJS({
  "../../node_modules/.pnpm/@react-native+normalize-colors@0.74.89/node_modules/@react-native/normalize-colors/index.js"(exports, module) {
    "use strict";
    function normalizeColor6(color) {
      if (typeof color === "number") {
        if (color >>> 0 === color && color >= 0 && color <= 4294967295) {
          return color;
        }
        return null;
      }
      if (typeof color !== "string") {
        return null;
      }
      const matchers = getMatchers();
      let match;
      if (match = matchers.hex6.exec(color)) {
        return parseInt(match[1] + "ff", 16) >>> 0;
      }
      const colorFromKeyword = normalizeKeyword(color);
      if (colorFromKeyword != null) {
        return colorFromKeyword;
      }
      if (match = matchers.rgb.exec(color)) {
        return (parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        255) >>> // a
        0;
      }
      if (match = matchers.rgba.exec(color)) {
        if (match[6] !== void 0) {
          return (parse255(match[6]) << 24 | // r
          parse255(match[7]) << 16 | // g
          parse255(match[8]) << 8 | // b
          parse1(match[9])) >>> // a
          0;
        }
        return (parse255(match[2]) << 24 | // r
        parse255(match[3]) << 16 | // g
        parse255(match[4]) << 8 | // b
        parse1(match[5])) >>> // a
        0;
      }
      if (match = matchers.hex3.exec(color)) {
        return parseInt(
          match[1] + match[1] + // r
          match[2] + match[2] + // g
          match[3] + match[3] + // b
          "ff",
          // a
          16
        ) >>> 0;
      }
      if (match = matchers.hex8.exec(color)) {
        return parseInt(match[1], 16) >>> 0;
      }
      if (match = matchers.hex4.exec(color)) {
        return parseInt(
          match[1] + match[1] + // r
          match[2] + match[2] + // g
          match[3] + match[3] + // b
          match[4] + match[4],
          // a
          16
        ) >>> 0;
      }
      if (match = matchers.hsl.exec(color)) {
        return (hslToRgb(
          parse360(match[1]),
          // h
          parsePercentage(match[2]),
          // s
          parsePercentage(match[3])
          // l
        ) | 255) >>> // a
        0;
      }
      if (match = matchers.hsla.exec(color)) {
        if (match[6] !== void 0) {
          return (hslToRgb(
            parse360(match[6]),
            // h
            parsePercentage(match[7]),
            // s
            parsePercentage(match[8])
            // l
          ) | parse1(match[9])) >>> // a
          0;
        }
        return (hslToRgb(
          parse360(match[2]),
          // h
          parsePercentage(match[3]),
          // s
          parsePercentage(match[4])
          // l
        ) | parse1(match[5])) >>> // a
        0;
      }
      if (match = matchers.hwb.exec(color)) {
        return (hwbToRgb(
          parse360(match[1]),
          // h
          parsePercentage(match[2]),
          // w
          parsePercentage(match[3])
          // b
        ) | 255) >>> // a
        0;
      }
      return null;
    }
    function hue2rgb(p, q, t) {
      if (t < 0) {
        t += 1;
      }
      if (t > 1) {
        t -= 1;
      }
      if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
      }
      if (t < 1 / 2) {
        return q;
      }
      if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
      }
      return p;
    }
    function hslToRgb(h, s, l) {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      const r = hue2rgb(p, q, h + 1 / 3);
      const g = hue2rgb(p, q, h);
      const b = hue2rgb(p, q, h - 1 / 3);
      return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
    }
    function hwbToRgb(h, w2, b) {
      if (w2 + b >= 1) {
        const gray = Math.round(w2 * 255 / (w2 + b));
        return gray << 24 | gray << 16 | gray << 8;
      }
      const red = hue2rgb(0, 1, h + 1 / 3) * (1 - w2 - b) + w2;
      const green = hue2rgb(0, 1, h) * (1 - w2 - b) + w2;
      const blue = hue2rgb(0, 1, h - 1 / 3) * (1 - w2 - b) + w2;
      return Math.round(red * 255) << 24 | Math.round(green * 255) << 16 | Math.round(blue * 255) << 8;
    }
    var NUMBER = "[-+]?\\d*\\.?\\d+";
    var PERCENTAGE = NUMBER + "%";
    function call(...args) {
      return "\\(\\s*(" + args.join(")\\s*,?\\s*(") + ")\\s*\\)";
    }
    function callWithSlashSeparator(...args) {
      return "\\(\\s*(" + args.slice(0, args.length - 1).join(")\\s*,?\\s*(") + ")\\s*/\\s*(" + args[args.length - 1] + ")\\s*\\)";
    }
    function commaSeparatedCall(...args) {
      return "\\(\\s*(" + args.join(")\\s*,\\s*(") + ")\\s*\\)";
    }
    var cachedMatchers;
    function getMatchers() {
      if (cachedMatchers === void 0) {
        cachedMatchers = {
          rgb: new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER)),
          rgba: new RegExp(
            "rgba(" + commaSeparatedCall(NUMBER, NUMBER, NUMBER, NUMBER) + "|" + callWithSlashSeparator(NUMBER, NUMBER, NUMBER, NUMBER) + ")"
          ),
          hsl: new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE)),
          hsla: new RegExp(
            "hsla(" + commaSeparatedCall(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER) + "|" + callWithSlashSeparator(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER) + ")"
          ),
          hwb: new RegExp("hwb" + call(NUMBER, PERCENTAGE, PERCENTAGE)),
          hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#([0-9a-fA-F]{6})$/,
          hex8: /^#([0-9a-fA-F]{8})$/
        };
      }
      return cachedMatchers;
    }
    function parse255(str) {
      const int = parseInt(str, 10);
      if (int < 0) {
        return 0;
      }
      if (int > 255) {
        return 255;
      }
      return int;
    }
    function parse360(str) {
      const int = parseFloat(str);
      return (int % 360 + 360) % 360 / 360;
    }
    function parse1(str) {
      const num = parseFloat(str);
      if (num < 0) {
        return 0;
      }
      if (num > 1) {
        return 255;
      }
      return Math.round(num * 255);
    }
    function parsePercentage(str) {
      const int = parseFloat(str);
      if (int < 0) {
        return 0;
      }
      if (int > 100) {
        return 1;
      }
      return int / 100;
    }
    function normalizeKeyword(name) {
      switch (name) {
        case "transparent":
          return 0;
        // http://www.w3.org/TR/css3-color/#svg-color
        case "aliceblue":
          return 4042850303;
        case "antiquewhite":
          return 4209760255;
        case "aqua":
          return 16777215;
        case "aquamarine":
          return 2147472639;
        case "azure":
          return 4043309055;
        case "beige":
          return 4126530815;
        case "bisque":
          return 4293182719;
        case "black":
          return 255;
        case "blanchedalmond":
          return 4293643775;
        case "blue":
          return 65535;
        case "blueviolet":
          return 2318131967;
        case "brown":
          return 2771004159;
        case "burlywood":
          return 3736635391;
        case "burntsienna":
          return 3934150143;
        case "cadetblue":
          return 1604231423;
        case "chartreuse":
          return 2147418367;
        case "chocolate":
          return 3530104575;
        case "coral":
          return 4286533887;
        case "cornflowerblue":
          return 1687547391;
        case "cornsilk":
          return 4294499583;
        case "crimson":
          return 3692313855;
        case "cyan":
          return 16777215;
        case "darkblue":
          return 35839;
        case "darkcyan":
          return 9145343;
        case "darkgoldenrod":
          return 3095792639;
        case "darkgray":
          return 2846468607;
        case "darkgreen":
          return 6553855;
        case "darkgrey":
          return 2846468607;
        case "darkkhaki":
          return 3182914559;
        case "darkmagenta":
          return 2332068863;
        case "darkolivegreen":
          return 1433087999;
        case "darkorange":
          return 4287365375;
        case "darkorchid":
          return 2570243327;
        case "darkred":
          return 2332033279;
        case "darksalmon":
          return 3918953215;
        case "darkseagreen":
          return 2411499519;
        case "darkslateblue":
          return 1211993087;
        case "darkslategray":
          return 793726975;
        case "darkslategrey":
          return 793726975;
        case "darkturquoise":
          return 13554175;
        case "darkviolet":
          return 2483082239;
        case "deeppink":
          return 4279538687;
        case "deepskyblue":
          return 12582911;
        case "dimgray":
          return 1768516095;
        case "dimgrey":
          return 1768516095;
        case "dodgerblue":
          return 512819199;
        case "firebrick":
          return 2988581631;
        case "floralwhite":
          return 4294635775;
        case "forestgreen":
          return 579543807;
        case "fuchsia":
          return 4278255615;
        case "gainsboro":
          return 3705462015;
        case "ghostwhite":
          return 4177068031;
        case "gold":
          return 4292280575;
        case "goldenrod":
          return 3668254975;
        case "gray":
          return 2155905279;
        case "green":
          return 8388863;
        case "greenyellow":
          return 2919182335;
        case "grey":
          return 2155905279;
        case "honeydew":
          return 4043305215;
        case "hotpink":
          return 4285117695;
        case "indianred":
          return 3445382399;
        case "indigo":
          return 1258324735;
        case "ivory":
          return 4294963455;
        case "khaki":
          return 4041641215;
        case "lavender":
          return 3873897215;
        case "lavenderblush":
          return 4293981695;
        case "lawngreen":
          return 2096890111;
        case "lemonchiffon":
          return 4294626815;
        case "lightblue":
          return 2916673279;
        case "lightcoral":
          return 4034953471;
        case "lightcyan":
          return 3774873599;
        case "lightgoldenrodyellow":
          return 4210742015;
        case "lightgray":
          return 3553874943;
        case "lightgreen":
          return 2431553791;
        case "lightgrey":
          return 3553874943;
        case "lightpink":
          return 4290167295;
        case "lightsalmon":
          return 4288707327;
        case "lightseagreen":
          return 548580095;
        case "lightskyblue":
          return 2278488831;
        case "lightslategray":
          return 2005441023;
        case "lightslategrey":
          return 2005441023;
        case "lightsteelblue":
          return 2965692159;
        case "lightyellow":
          return 4294959359;
        case "lime":
          return 16711935;
        case "limegreen":
          return 852308735;
        case "linen":
          return 4210091775;
        case "magenta":
          return 4278255615;
        case "maroon":
          return 2147483903;
        case "mediumaquamarine":
          return 1724754687;
        case "mediumblue":
          return 52735;
        case "mediumorchid":
          return 3126187007;
        case "mediumpurple":
          return 2473647103;
        case "mediumseagreen":
          return 1018393087;
        case "mediumslateblue":
          return 2070474495;
        case "mediumspringgreen":
          return 16423679;
        case "mediumturquoise":
          return 1221709055;
        case "mediumvioletred":
          return 3340076543;
        case "midnightblue":
          return 421097727;
        case "mintcream":
          return 4127193855;
        case "mistyrose":
          return 4293190143;
        case "moccasin":
          return 4293178879;
        case "navajowhite":
          return 4292783615;
        case "navy":
          return 33023;
        case "oldlace":
          return 4260751103;
        case "olive":
          return 2155872511;
        case "olivedrab":
          return 1804477439;
        case "orange":
          return 4289003775;
        case "orangered":
          return 4282712319;
        case "orchid":
          return 3664828159;
        case "palegoldenrod":
          return 4008225535;
        case "palegreen":
          return 2566625535;
        case "paleturquoise":
          return 2951671551;
        case "palevioletred":
          return 3681588223;
        case "papayawhip":
          return 4293907967;
        case "peachpuff":
          return 4292524543;
        case "peru":
          return 3448061951;
        case "pink":
          return 4290825215;
        case "plum":
          return 3718307327;
        case "powderblue":
          return 2967529215;
        case "purple":
          return 2147516671;
        case "rebeccapurple":
          return 1714657791;
        case "red":
          return 4278190335;
        case "rosybrown":
          return 3163525119;
        case "royalblue":
          return 1097458175;
        case "saddlebrown":
          return 2336560127;
        case "salmon":
          return 4202722047;
        case "sandybrown":
          return 4104413439;
        case "seagreen":
          return 780883967;
        case "seashell":
          return 4294307583;
        case "sienna":
          return 2689740287;
        case "silver":
          return 3233857791;
        case "skyblue":
          return 2278484991;
        case "slateblue":
          return 1784335871;
        case "slategray":
          return 1887473919;
        case "slategrey":
          return 1887473919;
        case "snow":
          return 4294638335;
        case "springgreen":
          return 16744447;
        case "steelblue":
          return 1182971135;
        case "tan":
          return 3535047935;
        case "teal":
          return 8421631;
        case "thistle":
          return 3636451583;
        case "tomato":
          return 4284696575;
        case "turquoise":
          return 1088475391;
        case "violet":
          return 4001558271;
        case "wheat":
          return 4125012991;
        case "white":
          return 4294967295;
        case "whitesmoke":
          return 4126537215;
        case "yellow":
          return 4294902015;
        case "yellowgreen":
          return 2597139199;
      }
      return null;
    }
    module.exports = normalizeColor6;
  }
});

// ../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/utils/capitalizeString.js
var require_capitalizeString = __commonJS({
  "../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/utils/capitalizeString.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = capitalizeString;
    function capitalizeString(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }
});

// ../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/utils/prefixProperty.js
var require_prefixProperty = __commonJS({
  "../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/utils/prefixProperty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = prefixProperty;
    var _capitalizeString = require_capitalizeString();
    var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function prefixProperty(prefixProperties, property, style) {
      var requiredPrefixes = prefixProperties[property];
      if (requiredPrefixes && style.hasOwnProperty(property)) {
        var capitalizedProperty = (0, _capitalizeString2.default)(property);
        for (var i = 0; i < requiredPrefixes.length; ++i) {
          var prefixedProperty = requiredPrefixes[i] + capitalizedProperty;
          if (!style[prefixedProperty]) {
            style[prefixedProperty] = style[property];
          }
        }
      }
      return style;
    }
  }
});

// ../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/utils/prefixValue.js
var require_prefixValue = __commonJS({
  "../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/utils/prefixValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = prefixValue;
    function prefixValue(plugins, property, value, style, metaData) {
      for (var i = 0, len = plugins.length; i < len; ++i) {
        var processedValue = plugins[i](property, value, style, metaData);
        if (processedValue) {
          return processedValue;
        }
      }
    }
  }
});

// ../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/utils/addNewValuesOnly.js
var require_addNewValuesOnly = __commonJS({
  "../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/utils/addNewValuesOnly.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = addNewValuesOnly;
    function addIfNew(list, value) {
      if (list.indexOf(value) === -1) {
        list.push(value);
      }
    }
    function addNewValuesOnly(list, values) {
      if (Array.isArray(values)) {
        for (var i = 0, len = values.length; i < len; ++i) {
          addIfNew(list, values[i]);
        }
      } else {
        addIfNew(list, values);
      }
    }
  }
});

// ../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/utils/isObject.js
var require_isObject = __commonJS({
  "../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/utils/isObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isObject;
    function isObject(value) {
      return value instanceof Object && !Array.isArray(value);
    }
  }
});

// ../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/createPrefixer.js
var require_createPrefixer = __commonJS({
  "../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/createPrefixer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = createPrefixer2;
    var _prefixProperty = require_prefixProperty();
    var _prefixProperty2 = _interopRequireDefault(_prefixProperty);
    var _prefixValue = require_prefixValue();
    var _prefixValue2 = _interopRequireDefault(_prefixValue);
    var _addNewValuesOnly = require_addNewValuesOnly();
    var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);
    var _isObject = require_isObject();
    var _isObject2 = _interopRequireDefault(_isObject);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function createPrefixer2(_ref) {
      var prefixMap = _ref.prefixMap, plugins = _ref.plugins;
      return function prefix(style) {
        for (var property in style) {
          var value = style[property];
          if ((0, _isObject2.default)(value)) {
            style[property] = prefix(value);
          } else if (Array.isArray(value)) {
            var combinedValue = [];
            for (var i = 0, len = value.length; i < len; ++i) {
              var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
              (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
            }
            if (combinedValue.length > 0) {
              style[property] = combinedValue;
            }
          } else {
            var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);
            if (_processedValue) {
              style[property] = _processedValue;
            }
            style = (0, _prefixProperty2.default)(prefixMap, property, style);
          }
        }
        return style;
      };
    }
  }
});

// ../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/assignStyle.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function filterUniqueArray(arr) {
  return arr.filter(function(val, index) {
    return arr.lastIndexOf(val) === index;
  });
}
function assignStyle(base) {
  for (var i = 0, len = arguments.length <= 1 ? 0 : arguments.length - 1; i < len; ++i) {
    var style = i + 1 < 1 || arguments.length <= i + 1 ? void 0 : arguments[i + 1];
    for (var property in style) {
      var value = style[property];
      var baseValue = base[property];
      if (baseValue && value) {
        if (Array.isArray(baseValue)) {
          base[property] = filterUniqueArray(baseValue.concat(value));
          continue;
        }
        if (Array.isArray(value)) {
          base[property] = filterUniqueArray([baseValue].concat(_toConsumableArray(value)));
          continue;
        }
        if (_typeof(value) === "object") {
          base[property] = assignStyle({}, baseValue, value);
          continue;
        }
      }
      base[property] = value;
    }
  }
  return base;
}
var init_assignStyle = __esm({
  "../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/assignStyle.js"() {
    "use strict";
  }
});

// ../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/camelCaseProperty.js
function toUpper(match) {
  return match[1].toUpperCase();
}
function camelCaseProperty(property) {
  if (cache2.hasOwnProperty(property)) {
    return cache2[property];
  }
  var camelProp = property.replace(DASH, toUpper).replace(MS, "ms");
  cache2[property] = camelProp;
  return camelProp;
}
var DASH, MS, cache2;
var init_camelCaseProperty = __esm({
  "../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/camelCaseProperty.js"() {
    "use strict";
    DASH = /-([a-z])/g;
    MS = /^Ms/g;
    cache2 = {};
  }
});

// ../../node_modules/.pnpm/hyphenate-style-name@1.1.0/node_modules/hyphenate-style-name/index.js
var hyphenate_style_name_exports = {};
__export(hyphenate_style_name_exports, {
  default: () => hyphenate_style_name_default
});
function toHyphenLower2(match) {
  return "-" + match.toLowerCase();
}
function hyphenateStyleName2(name) {
  if (cache3.hasOwnProperty(name)) {
    return cache3[name];
  }
  var hName = name.replace(uppercasePattern2, toHyphenLower2);
  return cache3[name] = msPattern2.test(hName) ? "-" + hName : hName;
}
var uppercasePattern2, msPattern2, cache3, hyphenate_style_name_default;
var init_hyphenate_style_name = __esm({
  "../../node_modules/.pnpm/hyphenate-style-name@1.1.0/node_modules/hyphenate-style-name/index.js"() {
    "use strict";
    uppercasePattern2 = /[A-Z]/g;
    msPattern2 = /^ms-/;
    cache3 = {};
    hyphenate_style_name_default = hyphenateStyleName2;
  }
});

// ../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/hyphenateProperty.js
function hyphenateProperty(property) {
  return hyphenate_style_name_default(property);
}
var init_hyphenateProperty = __esm({
  "../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/hyphenateProperty.js"() {
    "use strict";
    init_hyphenate_style_name();
  }
});

// ../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/cssifyDeclaration.js
function cssifyDeclaration(property, value) {
  return hyphenateProperty(property) + ":" + value;
}
var init_cssifyDeclaration = __esm({
  "../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/cssifyDeclaration.js"() {
    "use strict";
    init_hyphenateProperty();
  }
});

// ../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/cssifyObject.js
function cssifyObject(style) {
  var css = "";
  for (var property in style) {
    var value = style[property];
    if (typeof value !== "string" && typeof value !== "number") {
      continue;
    }
    if (css) {
      css += ";";
    }
    css += cssifyDeclaration(property, value);
  }
  return css;
}
var init_cssifyObject = __esm({
  "../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/cssifyObject.js"() {
    "use strict";
    init_cssifyDeclaration();
  }
});

// ../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/isPrefixedProperty.js
function isPrefixedProperty(property) {
  return RE.test(property);
}
var RE;
var init_isPrefixedProperty = __esm({
  "../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/isPrefixedProperty.js"() {
    "use strict";
    RE = /^(Webkit|Moz|O|ms)/;
  }
});

// ../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/isPrefixedValue.js
function isPrefixedValue(value) {
  return typeof value === "string" && RE2.test(value);
}
var RE2;
var init_isPrefixedValue = __esm({
  "../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/isPrefixedValue.js"() {
    "use strict";
    RE2 = /-webkit-|-moz-|-ms-/;
  }
});

// ../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/isUnitlessProperty.js
function getPrefixedProperty(prefix, property) {
  return prefix + property.charAt(0).toUpperCase() + property.slice(1);
}
function isUnitlessProperty(property) {
  return unitlessProperties.hasOwnProperty(property);
}
var unitlessProperties, prefixedUnitlessProperties, prefixes2, property, j, jLen, i, len, _property;
var init_isUnitlessProperty = __esm({
  "../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/isUnitlessProperty.js"() {
    "use strict";
    init_hyphenateProperty();
    unitlessProperties = {
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      fontWeight: true,
      lineHeight: true,
      opacity: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      // SVG-related properties
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    prefixedUnitlessProperties = ["animationIterationCount", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "order"];
    prefixes2 = ["Webkit", "ms", "Moz", "O"];
    for (i = 0, len = prefixedUnitlessProperties.length; i < len; ++i) {
      property = prefixedUnitlessProperties[i];
      unitlessProperties[property] = true;
      for (j = 0, jLen = prefixes2.length; j < jLen; ++j) {
        unitlessProperties[getPrefixedProperty(prefixes2[j], property)] = true;
      }
    }
    for (_property in unitlessProperties) {
      unitlessProperties[hyphenateProperty(_property)] = true;
    }
  }
});

// ../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/unprefixProperty.js
function unprefixProperty(property) {
  var propertyWithoutPrefix = property.replace(RE3, "");
  return propertyWithoutPrefix.charAt(0).toLowerCase() + propertyWithoutPrefix.slice(1);
}
var RE3;
var init_unprefixProperty = __esm({
  "../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/unprefixProperty.js"() {
    "use strict";
    RE3 = /^(ms|Webkit|Moz|O)/;
  }
});

// ../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/normalizeProperty.js
function normalizeProperty(property) {
  return unprefixProperty(camelCaseProperty(property));
}
var init_normalizeProperty = __esm({
  "../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/normalizeProperty.js"() {
    "use strict";
    init_camelCaseProperty();
    init_unprefixProperty();
  }
});

// ../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/resolveArrayValue.js
function resolveArrayValue(property, value) {
  return value.join(";" + hyphenateProperty(property) + ":");
}
var init_resolveArrayValue = __esm({
  "../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/resolveArrayValue.js"() {
    "use strict";
    init_hyphenateProperty();
  }
});

// ../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/unprefixValue.js
function unprefixValue(value) {
  if (typeof value === "string") {
    return value.replace(RE4, "");
  }
  return value;
}
var RE4;
var init_unprefixValue = __esm({
  "../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/unprefixValue.js"() {
    "use strict";
    RE4 = /(-ms-|-webkit-|-moz-|-o-)/g;
  }
});

// ../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/index.js
var es_exports = {};
__export(es_exports, {
  assignStyle: () => assignStyle,
  camelCaseProperty: () => camelCaseProperty,
  cssifyDeclaration: () => cssifyDeclaration,
  cssifyObject: () => cssifyObject,
  hyphenateProperty: () => hyphenateProperty,
  isPrefixedProperty: () => isPrefixedProperty,
  isPrefixedValue: () => isPrefixedValue,
  isUnitlessProperty: () => isUnitlessProperty,
  normalizeProperty: () => normalizeProperty,
  resolveArrayValue: () => resolveArrayValue,
  unprefixProperty: () => unprefixProperty,
  unprefixValue: () => unprefixValue
});
var init_es = __esm({
  "../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/es/index.js"() {
    "use strict";
    init_assignStyle();
    init_camelCaseProperty();
    init_cssifyDeclaration();
    init_cssifyObject();
    init_hyphenateProperty();
    init_isPrefixedProperty();
    init_isPrefixedValue();
    init_isUnitlessProperty();
    init_normalizeProperty();
    init_resolveArrayValue();
    init_unprefixProperty();
    init_unprefixValue();
  }
});

// ../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/plugins/crossFade.js
var require_crossFade = __commonJS({
  "../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/plugins/crossFade.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = crossFade2;
    var _cssInJsUtils = (init_es(), __toCommonJS(es_exports));
    var CROSS_FADE_REGEX = /cross-fade\(/g;
    var prefixes4 = ["-webkit-", ""];
    function crossFade2(property, value) {
      if (typeof value === "string" && !(0, _cssInJsUtils.isPrefixedValue)(value) && value.indexOf("cross-fade(") !== -1) {
        return prefixes4.map(function(prefix) {
          return value.replace(CROSS_FADE_REGEX, prefix + "cross-fade(");
        });
      }
    }
  }
});

// ../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/lib/isPrefixedValue.js
var require_isPrefixedValue = __commonJS({
  "../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/lib/isPrefixedValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = isPrefixedValue2;
    var RE5 = /-webkit-|-moz-|-ms-/;
    function isPrefixedValue2(value) {
      return typeof value === "string" && RE5.test(value);
    }
  }
});

// ../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/plugins/imageSet.js
var require_imageSet = __commonJS({
  "../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/plugins/imageSet.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = imageSet2;
    var _isPrefixedValue = require_isPrefixedValue();
    var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var prefixes4 = ["-webkit-", ""];
    function imageSet2(property, value) {
      if (typeof value === "string" && !(0, _isPrefixedValue2.default)(value) && value.indexOf("image-set(") > -1) {
        return prefixes4.map(function(prefix) {
          return value.replace(/image-set\(/g, prefix + "image-set(");
        });
      }
    }
  }
});

// ../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/plugins/logical.js
var require_logical = __commonJS({
  "../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/plugins/logical.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = logical2;
    var alternativeProps = {
      marginBlockStart: ["WebkitMarginBefore"],
      marginBlockEnd: ["WebkitMarginAfter"],
      marginInlineStart: ["WebkitMarginStart", "MozMarginStart"],
      marginInlineEnd: ["WebkitMarginEnd", "MozMarginEnd"],
      paddingBlockStart: ["WebkitPaddingBefore"],
      paddingBlockEnd: ["WebkitPaddingAfter"],
      paddingInlineStart: ["WebkitPaddingStart", "MozPaddingStart"],
      paddingInlineEnd: ["WebkitPaddingEnd", "MozPaddingEnd"],
      borderBlockStart: ["WebkitBorderBefore"],
      borderBlockStartColor: ["WebkitBorderBeforeColor"],
      borderBlockStartStyle: ["WebkitBorderBeforeStyle"],
      borderBlockStartWidth: ["WebkitBorderBeforeWidth"],
      borderBlockEnd: ["WebkitBorderAfter"],
      borderBlockEndColor: ["WebkitBorderAfterColor"],
      borderBlockEndStyle: ["WebkitBorderAfterStyle"],
      borderBlockEndWidth: ["WebkitBorderAfterWidth"],
      borderInlineStart: ["WebkitBorderStart", "MozBorderStart"],
      borderInlineStartColor: ["WebkitBorderStartColor", "MozBorderStartColor"],
      borderInlineStartStyle: ["WebkitBorderStartStyle", "MozBorderStartStyle"],
      borderInlineStartWidth: ["WebkitBorderStartWidth", "MozBorderStartWidth"],
      borderInlineEnd: ["WebkitBorderEnd", "MozBorderEnd"],
      borderInlineEndColor: ["WebkitBorderEndColor", "MozBorderEndColor"],
      borderInlineEndStyle: ["WebkitBorderEndStyle", "MozBorderEndStyle"],
      borderInlineEndWidth: ["WebkitBorderEndWidth", "MozBorderEndWidth"]
    };
    function logical2(property, value, style) {
      if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
        var alternativePropList = alternativeProps[property];
        for (var i = 0, len = alternativePropList.length; i < len; ++i) {
          style[alternativePropList[i]] = value;
        }
      }
    }
  }
});

// ../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/plugins/position.js
var require_position = __commonJS({
  "../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/plugins/position.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = position2;
    function position2(property, value) {
      if (property === "position" && value === "sticky") {
        return ["-webkit-sticky", "sticky"];
      }
    }
  }
});

// ../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/plugins/sizing.js
var require_sizing = __commonJS({
  "../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/plugins/sizing.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = sizing2;
    var prefixes4 = ["-webkit-", "-moz-", ""];
    var properties = {
      maxHeight: true,
      maxWidth: true,
      width: true,
      height: true,
      columnWidth: true,
      minWidth: true,
      minHeight: true
    };
    var values = {
      "min-content": true,
      "max-content": true,
      "fill-available": true,
      "fit-content": true,
      "contain-floats": true
    };
    function sizing2(property, value) {
      if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
        return prefixes4.map(function(prefix) {
          return prefix + value;
        });
      }
    }
  }
});

// ../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/lib/hyphenateProperty.js
var require_hyphenateProperty = __commonJS({
  "../../node_modules/.pnpm/css-in-js-utils@3.1.0/node_modules/css-in-js-utils/lib/hyphenateProperty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = hyphenateProperty2;
    var _hyphenateStyleName = (init_hyphenate_style_name(), __toCommonJS(hyphenate_style_name_exports));
    var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function hyphenateProperty2(property) {
      return (0, _hyphenateStyleName2["default"])(property);
    }
  }
});

// ../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/plugins/transition.js
var require_transition = __commonJS({
  "../../node_modules/.pnpm/inline-style-prefixer@7.0.1/node_modules/inline-style-prefixer/lib/plugins/transition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = transition2;
    var _hyphenateProperty = require_hyphenateProperty();
    var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);
    var _isPrefixedValue = require_isPrefixedValue();
    var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
    var _capitalizeString = require_capitalizeString();
    var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var properties = {
      transition: true,
      transitionProperty: true,
      WebkitTransition: true,
      WebkitTransitionProperty: true,
      MozTransition: true,
      MozTransitionProperty: true
    };
    var prefixMapping = {
      Webkit: "-webkit-",
      Moz: "-moz-",
      ms: "-ms-"
    };
    function prefixValue(value, propertyPrefixMap) {
      if ((0, _isPrefixedValue2.default)(value)) {
        return value;
      }
      var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
      for (var i = 0, len = multipleValues.length; i < len; ++i) {
        var singleValue = multipleValues[i];
        var values = [singleValue];
        for (var property in propertyPrefixMap) {
          var dashCaseProperty = (0, _hyphenateProperty2.default)(property);
          if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== "order") {
            var prefixes4 = propertyPrefixMap[property];
            for (var j = 0, pLen = prefixes4.length; j < pLen; ++j) {
              values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes4[j]] + dashCaseProperty));
            }
          }
        }
        multipleValues[i] = values.join(",");
      }
      return multipleValues.join(",");
    }
    function transition2(property, value, style, propertyPrefixMap) {
      if (typeof value === "string" && properties.hasOwnProperty(property)) {
        var outputValue = prefixValue(value, propertyPrefixMap);
        var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(val) {
          return !/-moz-|-ms-/.test(val);
        }).join(",");
        if (property.indexOf("Webkit") > -1) {
          return webkitOutput;
        }
        var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(val) {
          return !/-webkit-|-ms-/.test(val);
        }).join(",");
        if (property.indexOf("Moz") > -1) {
          return mozOutput;
        }
        style["Webkit" + (0, _capitalizeString2.default)(property)] = webkitOutput;
        style["Moz" + (0, _capitalizeString2.default)(property)] = mozOutput;
        return outputValue;
      }
    }
  }
});

// ../../node_modules/.pnpm/styleq@0.1.3/node_modules/styleq/dist/transform-localize-style.js
var require_transform_localize_style = __commonJS({
  "../../node_modules/.pnpm/styleq@0.1.3/node_modules/styleq/dist/transform-localize-style.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.localizeStyle = localizeStyle2;
    var cache6 = /* @__PURE__ */ new WeakMap();
    var markerProp = "$$css$localize";
    function compileStyle(style, isRTL) {
      var compiledStyle = {};
      for (var prop in style) {
        if (prop !== markerProp) {
          var value = style[prop];
          if (Array.isArray(value)) {
            compiledStyle[prop] = isRTL ? value[1] : value[0];
          } else {
            compiledStyle[prop] = value;
          }
        }
      }
      return compiledStyle;
    }
    function localizeStyle2(style, isRTL) {
      if (style[markerProp] != null) {
        var compiledStyleIndex = isRTL ? 1 : 0;
        if (cache6.has(style)) {
          var _cachedStyles = cache6.get(style);
          var _compiledStyle = _cachedStyles[compiledStyleIndex];
          if (_compiledStyle == null) {
            _compiledStyle = compileStyle(style, isRTL);
            _cachedStyles[compiledStyleIndex] = _compiledStyle;
            cache6.set(style, _cachedStyles);
          }
          return _compiledStyle;
        }
        var compiledStyle = compileStyle(style, isRTL);
        var cachedStyles = new Array(2);
        cachedStyles[compiledStyleIndex] = compiledStyle;
        cache6.set(style, cachedStyles);
        return compiledStyle;
      }
      return style;
    }
  }
});

// ../../node_modules/.pnpm/styleq@0.1.3/node_modules/styleq/transform-localize-style.js
var require_transform_localize_style2 = __commonJS({
  "../../node_modules/.pnpm/styleq@0.1.3/node_modules/styleq/transform-localize-style.js"(exports, module) {
    "use strict";
    module.exports = require_transform_localize_style();
  }
});

// ../../node_modules/.pnpm/styleq@0.1.3/node_modules/styleq/dist/styleq.js
var require_styleq = __commonJS({
  "../../node_modules/.pnpm/styleq@0.1.3/node_modules/styleq/dist/styleq.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.styleq = void 0;
    var cache6 = /* @__PURE__ */ new WeakMap();
    var compiledKey = "$$css";
    function createStyleq(options) {
      var disableCache;
      var disableMix;
      var transform;
      if (options != null) {
        disableCache = options.disableCache === true;
        disableMix = options.disableMix === true;
        transform = options.transform;
      }
      return function styleq3() {
        var definedProperties = [];
        var className = "";
        var inlineStyle = null;
        var nextCache = disableCache ? null : cache6;
        var styles9 = new Array(arguments.length);
        for (var i = 0; i < arguments.length; i++) {
          styles9[i] = arguments[i];
        }
        while (styles9.length > 0) {
          var possibleStyle = styles9.pop();
          if (possibleStyle == null || possibleStyle === false) {
            continue;
          }
          if (Array.isArray(possibleStyle)) {
            for (var _i = 0; _i < possibleStyle.length; _i++) {
              styles9.push(possibleStyle[_i]);
            }
            continue;
          }
          var style = transform != null ? transform(possibleStyle) : possibleStyle;
          if (style.$$css) {
            var classNameChunk = "";
            if (nextCache != null && nextCache.has(style)) {
              var cacheEntry = nextCache.get(style);
              if (cacheEntry != null) {
                classNameChunk = cacheEntry[0];
                definedProperties.push.apply(definedProperties, cacheEntry[1]);
                nextCache = cacheEntry[2];
              }
            } else {
              var definedPropertiesChunk = [];
              for (var prop in style) {
                var value = style[prop];
                if (prop === compiledKey) continue;
                if (typeof value === "string" || value === null) {
                  if (!definedProperties.includes(prop)) {
                    definedProperties.push(prop);
                    if (nextCache != null) {
                      definedPropertiesChunk.push(prop);
                    }
                    if (typeof value === "string") {
                      classNameChunk += classNameChunk ? " " + value : value;
                    }
                  }
                } else {
                  console.error("styleq: ".concat(prop, " typeof ").concat(String(value), ' is not "string" or "null".'));
                }
              }
              if (nextCache != null) {
                var weakMap = /* @__PURE__ */ new WeakMap();
                nextCache.set(style, [classNameChunk, definedPropertiesChunk, weakMap]);
                nextCache = weakMap;
              }
            }
            if (classNameChunk) {
              className = className ? classNameChunk + " " + className : classNameChunk;
            }
          } else {
            if (disableMix) {
              if (inlineStyle == null) {
                inlineStyle = {};
              }
              inlineStyle = Object.assign({}, style, inlineStyle);
            } else {
              var subStyle = null;
              for (var _prop in style) {
                var _value = style[_prop];
                if (_value !== void 0) {
                  if (!definedProperties.includes(_prop)) {
                    if (_value != null) {
                      if (inlineStyle == null) {
                        inlineStyle = {};
                      }
                      if (subStyle == null) {
                        subStyle = {};
                      }
                      subStyle[_prop] = _value;
                    }
                    definedProperties.push(_prop);
                    nextCache = null;
                  }
                }
              }
              if (subStyle != null) {
                inlineStyle = Object.assign(subStyle, inlineStyle);
              }
            }
          }
        }
        var styleProps2 = [className, inlineStyle];
        return styleProps2;
      };
    }
    var styleq2 = createStyleq();
    exports.styleq = styleq2;
    styleq2.factory = createStyleq;
  }
});

// ../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/parse.js
var require_parse = __commonJS({
  "../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/parse.js"(exports, module) {
    "use strict";
    var openParentheses = "(".charCodeAt(0);
    var closeParentheses = ")".charCodeAt(0);
    var singleQuote = "'".charCodeAt(0);
    var doubleQuote = '"'.charCodeAt(0);
    var backslash = "\\".charCodeAt(0);
    var slash = "/".charCodeAt(0);
    var comma = ",".charCodeAt(0);
    var colon = ":".charCodeAt(0);
    var star = "*".charCodeAt(0);
    var uLower = "u".charCodeAt(0);
    var uUpper = "U".charCodeAt(0);
    var plus = "+".charCodeAt(0);
    var isUnicodeRange = /^[a-f0-9?-]+$/i;
    module.exports = function(input) {
      var tokens2 = [];
      var value = input;
      var next, quote, prev, token, escape, escapePos, whitespacePos, parenthesesOpenPos;
      var pos = 0;
      var code = value.charCodeAt(pos);
      var max = value.length;
      var stack = [{ nodes: tokens2 }];
      var balanced = 0;
      var parent;
      var name = "";
      var before = "";
      var after = "";
      while (pos < max) {
        if (code <= 32) {
          next = pos;
          do {
            next += 1;
            code = value.charCodeAt(next);
          } while (code <= 32);
          token = value.slice(pos, next);
          prev = tokens2[tokens2.length - 1];
          if (code === closeParentheses && balanced) {
            after = token;
          } else if (prev && prev.type === "div") {
            prev.after = token;
            prev.sourceEndIndex += token.length;
          } else if (code === comma || code === colon || code === slash && value.charCodeAt(next + 1) !== star && (!parent || parent && parent.type === "function" && parent.value !== "calc")) {
            before = token;
          } else {
            tokens2.push({
              type: "space",
              sourceIndex: pos,
              sourceEndIndex: next,
              value: token
            });
          }
          pos = next;
        } else if (code === singleQuote || code === doubleQuote) {
          next = pos;
          quote = code === singleQuote ? "'" : '"';
          token = {
            type: "string",
            sourceIndex: pos,
            quote
          };
          do {
            escape = false;
            next = value.indexOf(quote, next + 1);
            if (~next) {
              escapePos = next;
              while (value.charCodeAt(escapePos - 1) === backslash) {
                escapePos -= 1;
                escape = !escape;
              }
            } else {
              value += quote;
              next = value.length - 1;
              token.unclosed = true;
            }
          } while (escape);
          token.value = value.slice(pos + 1, next);
          token.sourceEndIndex = token.unclosed ? next : next + 1;
          tokens2.push(token);
          pos = next + 1;
          code = value.charCodeAt(pos);
        } else if (code === slash && value.charCodeAt(pos + 1) === star) {
          next = value.indexOf("*/", pos);
          token = {
            type: "comment",
            sourceIndex: pos,
            sourceEndIndex: next + 2
          };
          if (next === -1) {
            token.unclosed = true;
            next = value.length;
            token.sourceEndIndex = next;
          }
          token.value = value.slice(pos + 2, next);
          tokens2.push(token);
          pos = next + 2;
          code = value.charCodeAt(pos);
        } else if ((code === slash || code === star) && parent && parent.type === "function" && parent.value === "calc") {
          token = value[pos];
          tokens2.push({
            type: "word",
            sourceIndex: pos - before.length,
            sourceEndIndex: pos + token.length,
            value: token
          });
          pos += 1;
          code = value.charCodeAt(pos);
        } else if (code === slash || code === comma || code === colon) {
          token = value[pos];
          tokens2.push({
            type: "div",
            sourceIndex: pos - before.length,
            sourceEndIndex: pos + token.length,
            value: token,
            before,
            after: ""
          });
          before = "";
          pos += 1;
          code = value.charCodeAt(pos);
        } else if (openParentheses === code) {
          next = pos;
          do {
            next += 1;
            code = value.charCodeAt(next);
          } while (code <= 32);
          parenthesesOpenPos = pos;
          token = {
            type: "function",
            sourceIndex: pos - name.length,
            value: name,
            before: value.slice(parenthesesOpenPos + 1, next)
          };
          pos = next;
          if (name === "url" && code !== singleQuote && code !== doubleQuote) {
            next -= 1;
            do {
              escape = false;
              next = value.indexOf(")", next + 1);
              if (~next) {
                escapePos = next;
                while (value.charCodeAt(escapePos - 1) === backslash) {
                  escapePos -= 1;
                  escape = !escape;
                }
              } else {
                value += ")";
                next = value.length - 1;
                token.unclosed = true;
              }
            } while (escape);
            whitespacePos = next;
            do {
              whitespacePos -= 1;
              code = value.charCodeAt(whitespacePos);
            } while (code <= 32);
            if (parenthesesOpenPos < whitespacePos) {
              if (pos !== whitespacePos + 1) {
                token.nodes = [
                  {
                    type: "word",
                    sourceIndex: pos,
                    sourceEndIndex: whitespacePos + 1,
                    value: value.slice(pos, whitespacePos + 1)
                  }
                ];
              } else {
                token.nodes = [];
              }
              if (token.unclosed && whitespacePos + 1 !== next) {
                token.after = "";
                token.nodes.push({
                  type: "space",
                  sourceIndex: whitespacePos + 1,
                  sourceEndIndex: next,
                  value: value.slice(whitespacePos + 1, next)
                });
              } else {
                token.after = value.slice(whitespacePos + 1, next);
                token.sourceEndIndex = next;
              }
            } else {
              token.after = "";
              token.nodes = [];
            }
            pos = next + 1;
            token.sourceEndIndex = token.unclosed ? next : pos;
            code = value.charCodeAt(pos);
            tokens2.push(token);
          } else {
            balanced += 1;
            token.after = "";
            token.sourceEndIndex = pos + 1;
            tokens2.push(token);
            stack.push(token);
            tokens2 = token.nodes = [];
            parent = token;
          }
          name = "";
        } else if (closeParentheses === code && balanced) {
          pos += 1;
          code = value.charCodeAt(pos);
          parent.after = after;
          parent.sourceEndIndex += after.length;
          after = "";
          balanced -= 1;
          stack[stack.length - 1].sourceEndIndex = pos;
          stack.pop();
          parent = stack[balanced];
          tokens2 = parent.nodes;
        } else {
          next = pos;
          do {
            if (code === backslash) {
              next += 1;
            }
            next += 1;
            code = value.charCodeAt(next);
          } while (next < max && !(code <= 32 || code === singleQuote || code === doubleQuote || code === comma || code === colon || code === slash || code === openParentheses || code === star && parent && parent.type === "function" && parent.value === "calc" || code === slash && parent.type === "function" && parent.value === "calc" || code === closeParentheses && balanced));
          token = value.slice(pos, next);
          if (openParentheses === code) {
            name = token;
          } else if ((uLower === token.charCodeAt(0) || uUpper === token.charCodeAt(0)) && plus === token.charCodeAt(1) && isUnicodeRange.test(token.slice(2))) {
            tokens2.push({
              type: "unicode-range",
              sourceIndex: pos,
              sourceEndIndex: next,
              value: token
            });
          } else {
            tokens2.push({
              type: "word",
              sourceIndex: pos,
              sourceEndIndex: next,
              value: token
            });
          }
          pos = next;
        }
      }
      for (pos = stack.length - 1; pos; pos -= 1) {
        stack[pos].unclosed = true;
        stack[pos].sourceEndIndex = value.length;
      }
      return stack[0].nodes;
    };
  }
});

// ../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/walk.js
var require_walk = __commonJS({
  "../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/walk.js"(exports, module) {
    "use strict";
    module.exports = function walk(nodes, cb, bubble) {
      var i, max, node, result;
      for (i = 0, max = nodes.length; i < max; i += 1) {
        node = nodes[i];
        if (!bubble) {
          result = cb(node, i, nodes);
        }
        if (result !== false && node.type === "function" && Array.isArray(node.nodes)) {
          walk(node.nodes, cb, bubble);
        }
        if (bubble) {
          cb(node, i, nodes);
        }
      }
    };
  }
});

// ../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/stringify.js
var require_stringify = __commonJS({
  "../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/stringify.js"(exports, module) {
    "use strict";
    function stringifyNode(node, custom) {
      var type = node.type;
      var value = node.value;
      var buf;
      var customResult;
      if (custom && (customResult = custom(node)) !== void 0) {
        return customResult;
      } else if (type === "word" || type === "space") {
        return value;
      } else if (type === "string") {
        buf = node.quote || "";
        return buf + value + (node.unclosed ? "" : buf);
      } else if (type === "comment") {
        return "/*" + value + (node.unclosed ? "" : "*/");
      } else if (type === "div") {
        return (node.before || "") + value + (node.after || "");
      } else if (Array.isArray(node.nodes)) {
        buf = stringify(node.nodes, custom);
        if (type !== "function") {
          return buf;
        }
        return value + "(" + (node.before || "") + buf + (node.after || "") + (node.unclosed ? "" : ")");
      }
      return value;
    }
    function stringify(nodes, custom) {
      var result, i;
      if (Array.isArray(nodes)) {
        result = "";
        for (i = nodes.length - 1; ~i; i -= 1) {
          result = stringifyNode(nodes[i], custom) + result;
        }
        return result;
      }
      return stringifyNode(nodes, custom);
    }
    module.exports = stringify;
  }
});

// ../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/unit.js
var require_unit = __commonJS({
  "../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/unit.js"(exports, module) {
    "use strict";
    var minus = "-".charCodeAt(0);
    var plus = "+".charCodeAt(0);
    var dot = ".".charCodeAt(0);
    var exp = "e".charCodeAt(0);
    var EXP = "E".charCodeAt(0);
    function likeNumber(value) {
      var code = value.charCodeAt(0);
      var nextCode;
      if (code === plus || code === minus) {
        nextCode = value.charCodeAt(1);
        if (nextCode >= 48 && nextCode <= 57) {
          return true;
        }
        var nextNextCode = value.charCodeAt(2);
        if (nextCode === dot && nextNextCode >= 48 && nextNextCode <= 57) {
          return true;
        }
        return false;
      }
      if (code === dot) {
        nextCode = value.charCodeAt(1);
        if (nextCode >= 48 && nextCode <= 57) {
          return true;
        }
        return false;
      }
      if (code >= 48 && code <= 57) {
        return true;
      }
      return false;
    }
    module.exports = function(value) {
      var pos = 0;
      var length = value.length;
      var code;
      var nextCode;
      var nextNextCode;
      if (length === 0 || !likeNumber(value)) {
        return false;
      }
      code = value.charCodeAt(pos);
      if (code === plus || code === minus) {
        pos++;
      }
      while (pos < length) {
        code = value.charCodeAt(pos);
        if (code < 48 || code > 57) {
          break;
        }
        pos += 1;
      }
      code = value.charCodeAt(pos);
      nextCode = value.charCodeAt(pos + 1);
      if (code === dot && nextCode >= 48 && nextCode <= 57) {
        pos += 2;
        while (pos < length) {
          code = value.charCodeAt(pos);
          if (code < 48 || code > 57) {
            break;
          }
          pos += 1;
        }
      }
      code = value.charCodeAt(pos);
      nextCode = value.charCodeAt(pos + 1);
      nextNextCode = value.charCodeAt(pos + 2);
      if ((code === exp || code === EXP) && (nextCode >= 48 && nextCode <= 57 || (nextCode === plus || nextCode === minus) && nextNextCode >= 48 && nextNextCode <= 57)) {
        pos += nextCode === plus || nextCode === minus ? 3 : 2;
        while (pos < length) {
          code = value.charCodeAt(pos);
          if (code < 48 || code > 57) {
            break;
          }
          pos += 1;
        }
      }
      return {
        number: value.slice(0, pos),
        unit: value.slice(pos)
      };
    };
  }
});

// ../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/index.js"(exports, module) {
    "use strict";
    var parse = require_parse();
    var walk = require_walk();
    var stringify = require_stringify();
    function ValueParser(value) {
      if (this instanceof ValueParser) {
        this.nodes = parse(value);
        return this;
      }
      return new ValueParser(value);
    }
    ValueParser.prototype.toString = function() {
      return Array.isArray(this.nodes) ? stringify(this.nodes) : "";
    };
    ValueParser.prototype.walk = function(cb, bubble) {
      walk(this.nodes, cb, bubble);
      return this;
    };
    ValueParser.unit = require_unit();
    ValueParser.walk = walk;
    ValueParser.stringify = stringify;
    module.exports = ValueParser;
  }
});

// ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/extends.js
var require_extends = __commonJS({
  "../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/extends.js"(exports, module) {
    "use strict";
    function _extends13() {
      return module.exports = _extends13 = Object.assign ? Object.assign.bind() : function(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e];
          for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }
        return n;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _extends13.apply(null, arguments);
    }
    module.exports = _extends13, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/.pnpm/fbjs@3.0.5/node_modules/fbjs/lib/invariant.js
var require_invariant = __commonJS({
  "../../node_modules/.pnpm/fbjs@3.0.5/node_modules/fbjs/lib/invariant.js"(exports, module) {
    "use strict";
    var validateFormat = process.env.NODE_ENV !== "production" ? function(format2) {
      if (format2 === void 0) {
        throw new Error("invariant(...): Second argument must be a string.");
      }
    } : function(format2) {
    };
    function invariant22(condition, format2) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      validateFormat(format2);
      if (!condition) {
        var error2;
        if (format2 === void 0) {
          error2 = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        } else {
          var argIndex = 0;
          error2 = new Error(format2.replace(/%s/g, function() {
            return String(args[argIndex++]);
          }));
          error2.name = "Invariant Violation";
        }
        error2.framesToPop = 1;
        throw error2;
      }
    }
    module.exports = invariant22;
  }
});

// ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/arrayLikeToArray.js
var require_arrayLikeToArray = __commonJS({
  "../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/arrayLikeToArray.js"(exports, module) {
    "use strict";
    function _arrayLikeToArray2(r, a) {
      (null == a || a > r.length) && (a = r.length);
      for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
      return n;
    }
    module.exports = _arrayLikeToArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js
var require_unsupportedIterableToArray = __commonJS({
  "../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"(exports, module) {
    "use strict";
    var arrayLikeToArray = require_arrayLikeToArray();
    function _unsupportedIterableToArray2(r, a) {
      if (r) {
        if ("string" == typeof r) return arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
      }
    }
    module.exports = _unsupportedIterableToArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/createForOfIteratorHelperLoose.js
var require_createForOfIteratorHelperLoose = __commonJS({
  "../../node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/createForOfIteratorHelperLoose.js"(exports, module) {
    "use strict";
    var unsupportedIterableToArray = require_unsupportedIterableToArray();
    function _createForOfIteratorHelperLoose6(r, e) {
      var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (t) return (t = t.call(r)).next.bind(t);
      if (Array.isArray(r) || (t = unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var o = 0;
        return function() {
          return o >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[o++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    module.exports = _createForOfIteratorHelperLoose6, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/.pnpm/fbjs@3.0.5/node_modules/fbjs/lib/emptyFunction.js
var require_emptyFunction = __commonJS({
  "../../node_modules/.pnpm/fbjs@3.0.5/node_modules/fbjs/lib/emptyFunction.js"(exports, module) {
    "use strict";
    function makeEmptyFunction(arg) {
      return function() {
        return arg;
      };
    }
    var emptyFunction2 = function emptyFunction3() {
    };
    emptyFunction2.thatReturns = makeEmptyFunction;
    emptyFunction2.thatReturnsFalse = makeEmptyFunction(false);
    emptyFunction2.thatReturnsTrue = makeEmptyFunction(true);
    emptyFunction2.thatReturnsNull = makeEmptyFunction(null);
    emptyFunction2.thatReturnsThis = function() {
      return this;
    };
    emptyFunction2.thatReturnsArgument = function(arg) {
      return arg;
    };
    module.exports = emptyFunction2;
  }
});

// ../../node_modules/.pnpm/fbjs@3.0.5/node_modules/fbjs/lib/warning.js
var require_warning = __commonJS({
  "../../node_modules/.pnpm/fbjs@3.0.5/node_modules/fbjs/lib/warning.js"(exports, module) {
    "use strict";
    var emptyFunction2 = require_emptyFunction();
    function printWarning(format2) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var argIndex = 0;
      var message = "Warning: " + format2.replace(/%s/g, function() {
        return args[argIndex++];
      });
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        throw new Error(message);
      } catch (x) {
      }
    }
    var warning2 = process.env.NODE_ENV !== "production" ? function(condition, format2) {
      if (format2 === void 0) {
        throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
      }
      if (!condition) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }
        printWarning.apply(void 0, [format2].concat(args));
      }
    } : emptyFunction2;
    module.exports = warning2;
  }
});

// ../../node_modules/.pnpm/nullthrows@1.1.1/node_modules/nullthrows/nullthrows.js
var require_nullthrows = __commonJS({
  "../../node_modules/.pnpm/nullthrows@1.1.1/node_modules/nullthrows/nullthrows.js"(exports, module) {
    "use strict";
    function nullthrows2(x, message) {
      if (x != null) {
        return x;
      }
      var error2 = new Error(message !== void 0 ? message : "Got unexpected " + x);
      error2.framesToPop = 1;
      throw error2;
    }
    module.exports = nullthrows2;
    module.exports.default = nullthrows2;
    Object.defineProperty(module.exports, "__esModule", { value: true });
  }
});

// src/atoms/Alert.tsx
import { styled, Text, XStack } from "tamagui";
var AlertFrame = styled(XStack, {
  name: "Alert",
  tag: "div",
  role: "alert",
  alignItems: "flex-start",
  borderRadius: "$4",
  borderWidth: 1,
  padding: "$4",
  gap: "$4",
  variants: {
    variant: {
      default: {
        backgroundColor: "$background",
        borderColor: "$borderColor"
      },
      destructive: {
        borderColor: "$destructive",
        // We might want a subtle background for destructive, but following shadcn default:
        // border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive
        backgroundColor: "$background"
      }
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var AlertTitleFrame = styled(Text, {
  name: "AlertTitle",
  tag: "h5",
  fontWeight: "500",
  lineHeight: 1,
  letterSpacing: -0.05,
  marginBottom: "$1",
  color: "$foreground",
  variants: {
    variant: {
      default: {
        color: "$foreground"
      },
      destructive: {
        color: "$destructive"
      }
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var AlertDescriptionFrame = styled(Text, {
  name: "AlertDescription",
  tag: "div",
  fontSize: "$3",
  lineHeight: "$4",
  color: "$mutedForeground",
  variants: {
    variant: {
      default: {
        color: "$mutedForeground"
      },
      destructive: {
        color: "$destructive"
      }
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var Alert = AlertFrame;
var AlertTitle = AlertTitleFrame;
var AlertDescription = AlertDescriptionFrame;

// src/atoms/Avatar.tsx
import { Avatar as TamaguiAvatar, styled as styled2 } from "tamagui";
var AvatarFrame = styled2(TamaguiAvatar, {
  name: "Avatar",
  circular: true,
  size: "$10",
  // Default size (40px)
  borderWidth: 0,
  overflow: "hidden"
});
var AvatarImage = styled2(TamaguiAvatar.Image, {
  name: "AvatarImage",
  source: { uri: "" },
  // Default source object for TS
  width: "100%",
  height: "100%"
});
var AvatarFallback = styled2(TamaguiAvatar.Fallback, {
  name: "AvatarFallback",
  backgroundColor: "$muted",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%"
});
var Avatar = AvatarFrame;
var AvatarImageComponent = AvatarImage;
var AvatarFallbackComponent = AvatarFallback;

// src/molecules/Accordion.tsx
import { Accordion as TamaguiAccordion, styled as styled3, Paragraph, Square } from "tamagui";
import React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Accordion = styled3(TamaguiAccordion, {
  name: "Accordion",
  width: "100%",
  type: "multiple"
  // Default to multiple or single? Shadcn defaults to single usually, but prop controls it.
});
var AccordionItem = styled3(TamaguiAccordion.Item, {
  name: "AccordionItem",
  borderBottomWidth: 1,
  borderColor: "$borderColor"
});
var AccordionTriggerFrame = styled3(TamaguiAccordion.Trigger, {
  name: "AccordionTrigger",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingVertical: "$4",
  backgroundColor: "transparent",
  hoverStyle: {
    backgroundColor: "transparent"
    // Shadcn just underlines text usually
  },
  focusStyle: {
    outlineColor: "$ring",
    outlineStyle: "solid",
    outlineWidth: 2
  }
});
var AccordionContentFrame = styled3(TamaguiAccordion.Content, {
  name: "AccordionContent",
  overflow: "hidden",
  paddingBottom: "$4",
  // Animation
  animation: "medium",
  enterStyle: { opacity: 0, height: 0 },
  exitStyle: { opacity: 0, height: 0 }
});
var AccordionTrigger = React.forwardRef(({ children, ...props }, ref) => {
  return /* @__PURE__ */ jsxs(AccordionTriggerFrame, { ref, ...props, children: [
    /* @__PURE__ */ jsx(TamaguiAccordion.Header, { children: /* @__PURE__ */ jsx(Paragraph, { fontWeight: "500", fontSize: "$3", children }) }),
    /* @__PURE__ */ jsx(Square, { animation: "quick", rotate: "0deg", children: /* @__PURE__ */ jsx(Paragraph, { fontSize: "$2", children: "\u25BC" }) })
  ] });
});
AccordionTrigger.displayName = "AccordionTrigger";
var AccordionContent = React.forwardRef(({ children, ...props }, ref) => {
  return /* @__PURE__ */ jsx(AccordionContentFrame, { ref, ...props, children: /* @__PURE__ */ jsx(Paragraph, { fontSize: "$3", color: "$mutedForeground", children }) });
});
AccordionContent.displayName = "AccordionContent";

// src/atoms/Badge.tsx
import { styled as styled4, Text as Text2, View } from "tamagui";
var Badge = styled4(View, {
  name: "Badge",
  tag: "div",
  borderRadius: "$10",
  // Pill shape usually
  borderWidth: 1,
  paddingHorizontal: "$2.5",
  paddingVertical: "$0.5",
  alignItems: "center",
  justifyContent: "center",
  // Default text styles for children
  // Note: Tamagui doesn't cascade text styles to non-Text children easily without context,
  // but if we use <Badge><Text>...</Text></Badge>, we might need a specific Text component or just rely on inheritance if configured.
  // For now, we'll assume usage like <Badge><Text>Label</Text></Badge> or just style the container.
  variants: {
    variant: {
      default: {
        backgroundColor: "$primary",
        borderColor: "transparent"
        // Text color needs to be handled. Usually primary-foreground.
        // In Tamagui we can use `color` prop on the container and hope it cascades or use specific Text theme.
      },
      secondary: {
        backgroundColor: "$secondary",
        borderColor: "transparent"
      },
      destructive: {
        backgroundColor: "$destructive",
        borderColor: "transparent"
      },
      outline: {
        backgroundColor: "transparent",
        borderColor: "$borderColor"
      }
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var BadgeText = styled4(Text2, {
  name: "BadgeText",
  fontSize: "$1",
  fontWeight: "600",
  variants: {
    variant: {
      default: {
        color: "$primaryForeground"
      },
      secondary: {
        color: "$secondaryForeground"
      },
      destructive: {
        color: "$destructiveForeground"
      },
      outline: {
        color: "$foreground"
      }
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

// src/atoms/Button/Button.tsx
import React3 from "react";
import { Button as TamaguiButton, styled as styled5 } from "tamagui";

// src/utils/withErrorLogging.tsx
import React2 from "react";

// src/utils/logging.ts
function logComponentError(componentName, error2, componentStack) {
  const timestamp = (/* @__PURE__ */ new Date()).toISOString();
  const details = error2 instanceof Error ? `${error2.name}: ${error2.message}` : String(error2);
  if (componentStack) {
    console.error(`[${timestamp}] [${componentName}] render failure -> ${details}
${componentStack}`);
  } else {
    console.error(`[${timestamp}] [${componentName}] render failure -> ${details}`);
  }
}

// src/utils/withErrorLogging.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function withErrorLogging(componentName, Component2) {
  const Wrapped = React2.forwardRef((props, ref) => {
    try {
      return /* @__PURE__ */ jsx2(Component2, { ...props, ref });
    } catch (error2) {
      logComponentError(componentName, error2);
      throw error2;
    }
  });
  Wrapped.displayName = componentName;
  return Wrapped;
}

// src/atoms/Button/Button.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var StyledButton = styled5(TamaguiButton, {
  name: "Button",
  variants: {
    variant: {
      default: {
        backgroundColor: "$primary",
        color: "$background",
        hoverStyle: {
          backgroundColor: "$primaryHover"
        }
      },
      secondary: {
        backgroundColor: "$secondary",
        color: "$background",
        hoverStyle: {
          backgroundColor: "$secondaryHover"
        }
      },
      destructive: {
        backgroundColor: "$destructive",
        color: "$background",
        hoverStyle: {
          opacity: 0.9
        }
      },
      outline: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "$borderColor",
        color: "$foreground",
        hoverStyle: {
          backgroundColor: "$muted"
        }
      },
      ghost: {
        backgroundColor: "transparent",
        color: "$foreground",
        hoverStyle: {
          backgroundColor: "$muted"
        }
      }
    },
    size: {
      sm: {
        height: "$5",
        px: "$3",
        fontSize: "$2"
      },
      default: {
        height: "$10",
        px: "$4",
        fontSize: "$3"
      },
      lg: {
        height: "$12",
        px: "$6",
        fontSize: "$4"
      }
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
var ButtonImpl = React3.forwardRef(
  ({ variant = "default", size = "default", ...props }, ref) => {
    return /* @__PURE__ */ jsx3(
      StyledButton,
      {
        ref,
        variant,
        size,
        type: "button",
        ...props
      }
    );
  }
);
ButtonImpl.displayName = "Button";
var Button = withErrorLogging("Button", ButtonImpl);

// src/atoms/Input/Input.tsx
import React4 from "react";
import { Input as TamaguiInput, styled as styled6 } from "tamagui";
import { jsx as jsx4 } from "react/jsx-runtime";
var StyledInput = styled6(TamaguiInput, {
  name: "Input",
  variants: {
    variant: {
      default: {
        borderWidth: 1,
        borderColor: "$borderColor",
        backgroundColor: "$background",
        color: "$foreground",
        placeholderTextColor: "$color.gray10",
        focusStyle: {
          borderColor: "$ring",
          borderWidth: 2
        }
      },
      filled: {
        borderWidth: 1,
        borderColor: "transparent",
        backgroundColor: "$muted",
        color: "$foreground",
        placeholderTextColor: "$color.gray10",
        focusStyle: {
          borderColor: "$ring",
          borderWidth: 1
        }
      }
    },
    size: {
      sm: {
        height: "$8",
        px: "$3",
        fontSize: "$2"
      },
      default: {
        height: "$10",
        px: "$3",
        fontSize: "$3"
      },
      lg: {
        height: "$12",
        px: "$4",
        fontSize: "$4"
      }
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
var InputImpl = React4.forwardRef(
  ({ variant = "default", size = "default", ...props }, ref) => {
    return /* @__PURE__ */ jsx4(
      StyledInput,
      {
        ref,
        variant,
        size,
        ...props
      }
    );
  }
);
InputImpl.displayName = "Input";
var Input = withErrorLogging("Input", InputImpl);

// src/atoms/Switch.tsx
import { Switch as TamaguiSwitch, styled as styled7 } from "tamagui";
import React5 from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var SwitchFrame = styled7(TamaguiSwitch, {
  name: "Switch",
  borderRadius: "$10",
  // Full pill
  borderWidth: 0,
  backgroundColor: "$input",
  // Default unchecked
  minHeight: 24,
  minWidth: 44,
  // Focus styles
  focusStyle: {
    outlineColor: "$ring",
    outlineStyle: "solid",
    outlineWidth: 2,
    outlineOffset: 2
  },
  variants: {
    checked: {
      true: {
        backgroundColor: "$primary"
      },
      false: {
        backgroundColor: "$input"
      }
    }
  },
  defaultVariants: {
    checked: false
  }
});
var SwitchThumb = styled7(TamaguiSwitch.Thumb, {
  name: "SwitchThumb",
  backgroundColor: "$background",
  borderRadius: "$10",
  // Full circle
  height: 20,
  width: 20,
  animation: "quick"
  // Assuming 'quick' animation exists in config, otherwise use 'bouncy' or define one
  // Shadcn uses translate for state, Tamagui handles this internally with the primitive.
  // We just need to ensure the thumb size and color are correct.
});
var SwitchFrameExport = SwitchFrame;
var SwitchThumbComponent = SwitchThumb;
var SwitchComponent = React5.forwardRef((props, ref) => {
  return /* @__PURE__ */ jsx5(SwitchFrame, { ref, ...props, children: /* @__PURE__ */ jsx5(SwitchThumb, {}) });
});
SwitchComponent.displayName = "Switch";
var Switch = SwitchComponent;

// src/atoms/Slider.tsx
import { Slider as TamaguiSlider, styled as styled8 } from "tamagui";
import React6 from "react";
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var SliderFrame = styled8(TamaguiSlider, {
  name: "Slider",
  defaultValue: [0],
  max: 100,
  step: 1,
  orientation: "horizontal",
  height: 20,
  // Container height
  justifyContent: "center"
});
var SliderTrack = styled8(TamaguiSlider.Track, {
  name: "SliderTrack",
  backgroundColor: "$secondary",
  height: 8,
  // h-2
  borderRadius: "$10"
  // rounded-full
});
var SliderRange = styled8(TamaguiSlider.TrackActive, {
  name: "SliderRange",
  backgroundColor: "$primary",
  borderRadius: "$10"
});
var SliderThumb = styled8(TamaguiSlider.Thumb, {
  name: "SliderThumb",
  index: 0,
  circular: true,
  size: "$5",
  // h-5 w-5 (20px)
  backgroundColor: "$background",
  borderWidth: 2,
  borderColor: "$primary",
  focusStyle: {
    outlineColor: "$ring",
    outlineStyle: "solid",
    outlineWidth: 2,
    outlineOffset: 2
  },
  hoverStyle: {
    cursor: "pointer"
  }
});
var Slider = React6.forwardRef((props, ref) => {
  return /* @__PURE__ */ jsxs2(SliderFrame, { ref, ...props, children: [
    /* @__PURE__ */ jsx6(SliderTrack, { children: /* @__PURE__ */ jsx6(SliderRange, {}) }),
    /* @__PURE__ */ jsx6(SliderThumb, {})
  ] });
});
Slider.displayName = "Slider";

// src/atoms/Skeleton.tsx
import { styled as styled9, YStack as YStack2 } from "tamagui";
var SkeletonFrame = styled9(YStack2, {
  name: "Skeleton",
  backgroundColor: "$muted",
  // bg-muted
  borderRadius: "$4",
  // rounded-md
  // Animation
  // Tamagui requires an animation driver and config.
  // Assuming 'quick' or 'bouncy' exists.
  // For a pulse effect, we'd ideally use a keyframe animation or a loop.
  // Tamagui's animation prop is for transitions.
  // For continuous pulse, we might need a CSS animation or a reanimated loop.
  // For now, we'll just style it static or add a simple enter animation.
  animation: "quick",
  enterStyle: { opacity: 0.5 }
});
var Skeleton = SkeletonFrame;

// src/atoms/Progress.tsx
import { Progress as TamaguiProgress, styled as styled10 } from "tamagui";
import React7 from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var ProgressFrame = styled10(TamaguiProgress, {
  name: "Progress",
  height: 16,
  // h-4
  width: "100%",
  backgroundColor: "$secondary",
  borderRadius: "$10",
  // rounded-full
  overflow: "hidden"
});
var ProgressIndicator = styled10(TamaguiProgress.Indicator, {
  name: "ProgressIndicator",
  backgroundColor: "$primary",
  height: "100%",
  width: "100%",
  animation: "quick"
  // transition-all
});
var Progress = React7.forwardRef((props, ref) => {
  return /* @__PURE__ */ jsx7(ProgressFrame, { ref, value: props.value, ...props, children: /* @__PURE__ */ jsx7(ProgressIndicator, {}) });
});
Progress.displayName = "Progress";

// src/atoms/Separator.tsx
import { Separator as TamaguiSeparator, styled as styled11 } from "tamagui";
var SeparatorFrame = styled11(TamaguiSeparator, {
  name: "Separator",
  backgroundColor: "$border",
  // bg-border
  variants: {
    orientation: {
      horizontal: {
        height: 1,
        width: "100%"
      },
      vertical: {
        height: "100%",
        width: 1
      }
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
});
var Separator = SeparatorFrame;

// src/atoms/Toggle/Toggle.tsx
import { styled as styled12, Button as Button2 } from "tamagui";
import React8 from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var ToggleFrame = styled12(Button2, {
  name: "Toggle",
  backgroundColor: "transparent",
  borderRadius: "$4",
  paddingHorizontal: "$3",
  height: 40,
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 0,
  hoverStyle: {
    backgroundColor: "$muted",
    color: "$mutedForeground"
  },
  variants: {
    pressed: {
      true: {
        backgroundColor: "$accent",
        color: "$accentForeground"
      }
    }
  }
});
var Toggle = React8.forwardRef((props, ref) => {
  const { pressed, onPressedChange, onPress, ...rest } = props;
  return /* @__PURE__ */ jsx8(
    ToggleFrame,
    {
      ref,
      pressed,
      onPress: (e) => {
        onPress?.(e);
        onPressedChange?.(!pressed);
      },
      ...rest
    }
  );
});
Toggle.displayName = "Toggle";

// src/atoms/ScrollArea.tsx
import { ScrollView as TamaguiScrollView, styled as styled13 } from "tamagui";
var ScrollAreaFrame = styled13(TamaguiScrollView, {
  name: "ScrollArea",
  width: "100%",
  height: "100%",
  overflow: "hidden"
  // Tamagui ScrollView handles overflow internally usually
  // Custom scrollbar styling is tricky in cross-platform.
  // Tamagui supports `showsVerticalScrollIndicator` etc.
  // For web, we can use CSS in `contentContainerStyle` or similar if needed.
  // But for now, we map to the primitive.
});
var ScrollBar = styled13(TamaguiScrollView, {
  // This is a placeholder. In Radix, ScrollBar is a separate interactive element.
  // In Native/Tamagui, scrollbars are usually native.
  // We can't easily implement a custom cross-platform scrollbar without a dedicated library.
  // So we will just export a stub or a styled view that does nothing for now, 
  // or we can omit it and just let ScrollArea handle scrolling.
  name: "ScrollBar",
  display: "none"
});
var ScrollArea = ScrollAreaFrame;

// src/atoms/Textarea/Textarea.tsx
import React9 from "react";
import { TextArea as TamaguiTextArea, styled as styled14 } from "tamagui";
import { jsx as jsx9 } from "react/jsx-runtime";
var StyledTextarea = styled14(TamaguiTextArea, {
  name: "Textarea",
  fontFamily: "$body",
  color: "$foreground",
  backgroundColor: "$background",
  placeholderTextColor: "$color.gray10",
  borderColor: "$borderColor",
  borderWidth: 1,
  borderRadius: "$sm",
  width: "100%",
  minHeight: 120,
  px: "$3",
  py: "$2",
  focusStyle: {
    borderColor: "$ring",
    borderWidth: 2
  },
  disabledStyle: {
    opacity: 0.6
  },
  variants: {
    variant: {
      default: {},
      filled: {
        backgroundColor: "$muted",
        borderColor: "transparent",
        focusStyle: {
          borderColor: "$ring"
        }
      },
      subtle: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderBottomColor: "$borderColor",
        borderBottomWidth: 1,
        borderRadius: 0,
        px: 0,
        focusStyle: {
          borderBottomColor: "$ring"
        }
      }
    },
    size: {
      sm: {
        minHeight: 96,
        fontSize: "$2",
        px: "$2",
        py: "$2"
      },
      default: {
        minHeight: 124,
        fontSize: "$3"
      },
      lg: {
        minHeight: 156,
        fontSize: "$4",
        px: "$4",
        py: "$3"
      }
    },
    invalid: {
      true: {
        borderColor: "$destructive"
      }
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
var TextareaImpl = React9.forwardRef(
  ({
    variant = "default",
    size = "default",
    invalid = false,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx9(
      StyledTextarea,
      {
        ref,
        variant,
        size,
        invalid: invalid || void 0,
        "aria-invalid": invalid,
        style: { resize: "vertical" },
        ...props
      }
    );
  }
);
TextareaImpl.displayName = "Textarea";
var Textarea = withErrorLogging(
  "Textarea",
  TextareaImpl
);

// src/atoms/Checkbox/Checkbox.tsx
import React10 from "react";
import { Checkbox as TamaguiCheckbox, styled as styled15, View as View2 } from "tamagui";
import { jsx as jsx10 } from "react/jsx-runtime";
var CheckIcon = () => /* @__PURE__ */ jsx10(
  View2,
  {
    width: 8,
    height: 10,
    borderColor: "$primaryForeground",
    borderBottomWidth: 2,
    borderRightWidth: 2,
    rotate: "45deg",
    marginBottom: 2
  }
);
var StyledCheckbox = styled15(TamaguiCheckbox, {
  name: "Checkbox",
  width: "$5",
  height: "$5",
  borderWidth: 1,
  borderColor: "$borderColor",
  borderRadius: "$sm",
  backgroundColor: "$background",
  alignItems: "center",
  justifyContent: "center",
  hoverStyle: {
    borderColor: "$primary"
  },
  focusStyle: {
    borderColor: "$ring",
    borderWidth: 2
  },
  variants: {
    checked: {
      true: {
        backgroundColor: "$primary",
        borderColor: "$primary"
      }
    },
    disabled: {
      true: {
        opacity: 0.5,
        backgroundColor: "$muted",
        borderColor: "$muted"
      }
    }
  }
});
var StyledIndicator = styled15(TamaguiCheckbox.Indicator, {
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%"
});
var CheckboxImpl = React10.forwardRef(
  ({ checked, onCheckedChange, ...props }, ref) => {
    return /* @__PURE__ */ jsx10(
      StyledCheckbox,
      {
        ref,
        checked,
        onCheckedChange,
        ...props,
        children: /* @__PURE__ */ jsx10(StyledIndicator, { children: /* @__PURE__ */ jsx10(CheckIcon, {}) })
      }
    );
  }
);
CheckboxImpl.displayName = "Checkbox";
var Checkbox = withErrorLogging(
  "Checkbox",
  CheckboxImpl
);

// src/molecules/Card/Card.tsx
import { View as View3, Text as Text3, styled as styled16 } from "tamagui";
var CardFrame = styled16(View3, {
  name: "Card",
  backgroundColor: "$background",
  borderWidth: 1,
  borderColor: "$borderColor",
  borderRadius: "$lg",
  p: "$lg",
  variants: {
    variant: {
      default: {
        backgroundColor: "$background"
      },
      elevated: {
        backgroundColor: "$background",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2
      }
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var CardHeader = styled16(View3, {
  name: "CardHeader",
  marginBottom: "$md"
});
var CardTitle = styled16(Text3, {
  name: "CardTitle",
  fontSize: "$6",
  fontWeight: "600",
  color: "$foreground",
  marginBottom: "$sm"
});
var CardDescription = styled16(Text3, {
  name: "CardDescription",
  fontSize: "$3",
  color: "$mutedForeground",
  lineHeight: "$3"
});
var CardContent = styled16(View3, {
  name: "CardContent"
});
var CardFooter = styled16(View3, {
  name: "CardFooter",
  marginTop: "$lg",
  paddingTop: "$lg",
  borderTopWidth: 1,
  borderTopColor: "$borderColor"
});

// src/molecules/Dialog/Dialog.tsx
import React11 from "react";
import { Dialog as TamaguiDialog, styled as styled17, Unspaced, Button as Button3, XStack as XStack2, Text as Text4 } from "tamagui";
import { jsx as jsx11, jsxs as jsxs3 } from "react/jsx-runtime";
var DialogOverlay = styled17(TamaguiDialog.Overlay, {
  name: "DialogOverlay",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  animation: "quick",
  opacity: 1,
  enterStyle: { opacity: 0 },
  exitStyle: { opacity: 0 }
});
var DialogContent = styled17(TamaguiDialog.Content, {
  name: "DialogContent",
  backgroundColor: "$background",
  borderRadius: "$lg",
  padding: "$lg",
  width: "90%",
  maxWidth: 512,
  borderWidth: 1,
  borderColor: "$borderColor",
  // Animation
  animation: [
    "quick",
    {
      opacity: {
        overshootClamping: true
      }
    }
  ],
  enterStyle: { x: 0, y: -20, opacity: 0, scale: 0.9 },
  exitStyle: { x: 0, y: 10, opacity: 0, scale: 0.95 },
  x: 0,
  scale: 1,
  opacity: 1,
  y: 0
});
var DialogHeader = styled17(XStack2, {
  name: "DialogHeader",
  flexDirection: "column",
  marginBottom: "$md",
  gap: "$sm"
});
var DialogTitle = styled17(TamaguiDialog.Title, {
  name: "DialogTitle",
  fontSize: "$6",
  fontWeight: "600",
  color: "$foreground"
});
var DialogDescription = styled17(TamaguiDialog.Description, {
  name: "DialogDescription",
  fontSize: "$3",
  color: "$mutedForeground",
  lineHeight: "$4"
});
var DialogFooter = styled17(XStack2, {
  name: "DialogFooter",
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: "$3",
  marginTop: "$md"
});
var Dialog = TamaguiDialog;
var DialogTrigger = TamaguiDialog.Trigger;
var DialogPortal = TamaguiDialog.Portal;
var DialogClose = TamaguiDialog.Close;
var DialogContentComposite = React11.forwardRef((props, ref) => {
  return /* @__PURE__ */ jsxs3(DialogPortal, { children: [
    /* @__PURE__ */ jsx11(DialogOverlay, {}, "overlay"),
    /* @__PURE__ */ jsxs3(DialogContent, { ref, ...props, children: [
      props.children,
      /* @__PURE__ */ jsx11(Unspaced, { children: /* @__PURE__ */ jsx11(TamaguiDialog.Close, { asChild: true, children: /* @__PURE__ */ jsx11(
        Button3,
        {
          position: "absolute",
          top: "$3",
          right: "$3",
          size: "$2",
          circular: true,
          backgroundColor: "transparent",
          pressStyle: { backgroundColor: "$muted" },
          children: /* @__PURE__ */ jsx11(Text4, { color: "$mutedForeground", children: "\u2715" })
        }
      ) }) })
    ] }, "content")
  ] });
});
DialogContentComposite.displayName = "DialogContent";

// src/molecules/Sheet.tsx
import { Sheet as TamaguiSheet } from "@tamagui/sheet";
import { styled as styled18, XStack as XStack3, YStack as YStack3, H2, Paragraph as Paragraph2 } from "tamagui";
import React12 from "react";
import { Fragment, jsx as jsx12, jsxs as jsxs4 } from "react/jsx-runtime";
var Sheet2 = TamaguiSheet;
var SheetTrigger = TamaguiSheet.Trigger;
var SheetClose = TamaguiSheet.Close;
var SheetOverlay = styled18(TamaguiSheet.Overlay, {
  name: "SheetOverlay",
  backgroundColor: "$black",
  opacity: 0.5,
  enterStyle: { opacity: 0 },
  exitStyle: { opacity: 0 }
});
var SheetHandle = styled18(TamaguiSheet.Handle, {
  name: "SheetHandle",
  backgroundColor: "$borderColor",
  opacity: 0.8
});
var SheetContentFrame = styled18(TamaguiSheet.Frame, {
  name: "SheetContent",
  backgroundColor: "$background",
  padding: "$4",
  borderTopLeftRadius: "$4",
  borderTopRightRadius: "$4",
  // Shadow and elevation
  shadowColor: "$shadowColor",
  shadowOpacity: 0.2,
  shadowRadius: 10,
  elevation: 5
});
var SheetContent = React12.forwardRef((props, ref) => {
  return /* @__PURE__ */ jsxs4(Fragment, { children: [
    /* @__PURE__ */ jsx12(SheetOverlay, {}),
    /* @__PURE__ */ jsx12(SheetHandle, {}),
    /* @__PURE__ */ jsx12(SheetContentFrame, { ref, ...props })
  ] });
});
SheetContent.displayName = "SheetContent";
var SheetHeader = styled18(YStack3, {
  name: "SheetHeader",
  gap: "$2",
  marginBottom: "$4"
});
var SheetFooter = styled18(XStack3, {
  name: "SheetFooter",
  justifyContent: "flex-end",
  gap: "$2",
  marginTop: "$4"
});
var SheetTitle = styled18(H2, {
  name: "SheetTitle",
  fontWeight: "bold",
  fontSize: "$6",
  color: "$foreground"
});
var SheetDescription = styled18(Paragraph2, {
  name: "SheetDescription",
  fontSize: "$3",
  color: "$mutedForeground"
});

// src/molecules/Drawer.tsx
var Drawer = Sheet2;
var DrawerTrigger = SheetTrigger;
var DrawerContent = SheetContent;
var DrawerHeader = SheetHeader;
var DrawerFooter = SheetFooter;
var DrawerTitle = SheetTitle;
var DrawerDescription = SheetDescription;
var DrawerOverlay = SheetOverlay;
var DrawerClose = SheetClose;

// src/molecules/Popover/Popover.tsx
import React13 from "react";
import {
  Popover as TamaguiPopover,
  styled as styled19
} from "tamagui";
import { jsx as jsx13, jsxs as jsxs5 } from "react/jsx-runtime";
var PopoverContentFrame = styled19(TamaguiPopover.Content, {
  name: "PopoverContent",
  backgroundColor: "$background",
  borderColor: "$borderColor",
  borderWidth: 1,
  padding: "$md",
  borderRadius: "$md",
  // Shadow
  shadowColor: "$shadowColor",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 5,
  // Animation
  animation: [
    "quick",
    {
      opacity: {
        overshootClamping: true
      }
    }
  ],
  enterStyle: { y: -10, opacity: 0 },
  exitStyle: { y: -10, opacity: 0 },
  y: 0,
  opacity: 1
});
var PopoverArrow = styled19(TamaguiPopover.Arrow, {
  name: "PopoverArrow",
  borderWidth: 1,
  borderColor: "$borderColor",
  backgroundColor: "$background"
});
var PopoverContent = React13.forwardRef(
  ({ children, ...props }, ref) => {
    return /* @__PURE__ */ jsxs5(PopoverContentFrame, { ref, ...props, children: [
      /* @__PURE__ */ jsx13(PopoverArrow, { size: "$3" }),
      children
    ] });
  }
);
PopoverContent.displayName = "PopoverContent";
var Popover = TamaguiPopover;
var PopoverTrigger = TamaguiPopover.Trigger;
var PopoverAnchor = TamaguiPopover.Anchor;
var PopoverClose = TamaguiPopover.Close;

// src/molecules/RadioGroup.tsx
import { RadioGroup as TamaguiRadioGroup, styled as styled20 } from "tamagui";
import React14 from "react";
import { jsx as jsx14 } from "react/jsx-runtime";
var RadioGroup = styled20(TamaguiRadioGroup, {
  name: "RadioGroup",
  gap: "$2"
});
var RadioGroupItemFrame = styled20(TamaguiRadioGroup.Item, {
  name: "RadioGroupItem",
  size: "$4",
  // h-4 w-4 (16px)
  width: 16,
  height: 16,
  borderRadius: "$10",
  // rounded-full
  borderWidth: 1,
  borderColor: "$primary",
  backgroundColor: "$background",
  alignItems: "center",
  justifyContent: "center",
  focusStyle: {
    outlineColor: "$ring",
    outlineStyle: "solid",
    outlineWidth: 2,
    outlineOffset: 2
  },
  hoverStyle: {
    borderColor: "$primaryHover"
  }
});
var RadioGroupIndicator = styled20(TamaguiRadioGroup.Indicator, {
  name: "RadioGroupIndicator",
  backgroundColor: "$primary",
  width: 8,
  height: 8,
  borderRadius: "$10"
});
var RadioGroupItem = React14.forwardRef((props, ref) => {
  return /* @__PURE__ */ jsx14(RadioGroupItemFrame, { ref, ...props, children: /* @__PURE__ */ jsx14(RadioGroupIndicator, {}) });
});
RadioGroupItem.displayName = "RadioGroupItem";

// src/molecules/Resizable.tsx
import { styled as styled21, YStack as YStack5, XStack as XStack4 } from "tamagui";
import React15 from "react";
import { jsx as jsx15 } from "react/jsx-runtime";
var ResizablePanelGroupFrame = styled21(XStack4, {
  name: "ResizablePanelGroup",
  flex: 1,
  width: "100%",
  height: "100%",
  variants: {
    direction: {
      vertical: {
        flexDirection: "column"
      },
      horizontal: {
        flexDirection: "row"
      }
    }
  },
  defaultVariants: {
    direction: "horizontal"
  }
});
var ResizablePanelFrame = styled21(YStack5, {
  name: "ResizablePanel",
  flex: 1
  // Default to flex 1, but can be overridden by defaultSize (which we'd need to map to flex basis or grow)
});
var ResizableHandleFrame = styled21(YStack5, {
  name: "ResizableHandle",
  backgroundColor: "$border",
  variants: {
    withHandle: {
      true: {
        // Add handle styling if needed
      }
    },
    direction: {
      vertical: {
        height: 1,
        width: "100%"
      },
      horizontal: {
        width: 1,
        height: "100%"
      }
    }
  }
});
var ResizablePanelGroup = React15.forwardRef((props, ref) => {
  return /* @__PURE__ */ jsx15(ResizablePanelGroupFrame, { ref, ...props });
});
ResizablePanelGroup.displayName = "ResizablePanelGroup";
var ResizablePanel = React15.forwardRef((props, ref) => {
  const { defaultSize, ...rest } = props;
  return /* @__PURE__ */ jsx15(ResizablePanelFrame, { ref, ...rest });
});
ResizablePanel.displayName = "ResizablePanel";
var ResizableHandle = React15.forwardRef((props, ref) => {
  return /* @__PURE__ */ jsx15(ResizableHandleFrame, { ref, ...props });
});
ResizableHandle.displayName = "ResizableHandle";

// src/molecules/Select/Select.tsx
import React16, { useMemo } from "react";
import { Button as Button4, isWeb, Select as TamaguiSelect, Sheet as Sheet3, styled as styled22, View as View4, Text as Text6, Adapt as Adapt3 } from "tamagui";
import { Fragment as Fragment2, jsx as jsx16, jsxs as jsxs6 } from "react/jsx-runtime";
var SelectTriggerFrame = styled22(Button4, {
  name: "SelectTrigger",
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderWidth: 1,
  borderColor: "$borderColor",
  backgroundColor: "$background",
  color: "$foreground",
  paddingHorizontal: "$3",
  height: "$10",
  hoverStyle: {
    backgroundColor: "$backgroundHover"
  },
  focusStyle: {
    borderColor: "$ring",
    borderWidth: 2
  }
});
var SelectIconFrame = styled22(View4, {
  name: "SelectIcon",
  marginLeft: "$2"
});
var ChevronDownIcon = () => /* @__PURE__ */ jsx16(Text6, { fontSize: "$1", color: "$mutedForeground", children: "\u25BC" });
var CheckIcon2 = () => /* @__PURE__ */ jsx16(Text6, { fontSize: "$3", color: "$primary", children: "\u2713" });
var SelectImpl = React16.forwardRef(
  ({
    items,
    placeholder,
    children,
    disablePreventBodyScroll = true,
    ...props
  }, ref) => {
    const hasCustomChildren = React16.Children.count(children) > 0;
    const content = useMemo(() => {
      if (hasCustomChildren) return children;
      if (!items || items.length === 0) return null;
      return /* @__PURE__ */ jsxs6(Fragment2, { children: [
        /* @__PURE__ */ jsx16(TamaguiSelect.Trigger, { icon: ChevronDownIcon, asChild: true, children: /* @__PURE__ */ jsx16(SelectTriggerFrame, { children: /* @__PURE__ */ jsx16(TamaguiSelect.Value, { placeholder }) }) }),
        /* @__PURE__ */ jsx16(Adapt3, { when: "sm", platform: "touch", children: /* @__PURE__ */ jsxs6(
          Sheet3,
          {
            native: !isWeb,
            modal: true,
            dismissOnSnapToBottom: true,
            animationConfig: {
              type: "spring",
              damping: 20,
              mass: 1.2,
              stiffness: 250
            },
            children: [
              /* @__PURE__ */ jsx16(Sheet3.Frame, { children: /* @__PURE__ */ jsx16(Sheet3.ScrollView, { children: /* @__PURE__ */ jsx16(Adapt3.Contents, {}) }) }),
              /* @__PURE__ */ jsx16(
                Sheet3.Overlay,
                {
                  animation: "lazy",
                  enterStyle: { opacity: 0 },
                  exitStyle: { opacity: 0 }
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs6(TamaguiSelect.Content, { zIndex: 2e5, children: [
          /* @__PURE__ */ jsx16(TamaguiSelect.ScrollUpButton, {}),
          /* @__PURE__ */ jsx16(TamaguiSelect.Viewport, { minWidth: 200, children: /* @__PURE__ */ jsxs6(TamaguiSelect.Group, { children: [
            props.label && /* @__PURE__ */ jsx16(TamaguiSelect.Label, { children: props.label }),
            items.map((item, index) => /* @__PURE__ */ jsxs6(TamaguiSelect.Item, { value: item.value, index, children: [
              /* @__PURE__ */ jsx16(TamaguiSelect.ItemText, { children: item.label }),
              /* @__PURE__ */ jsx16(TamaguiSelect.ItemIndicator, { marginLeft: "auto", children: /* @__PURE__ */ jsx16(CheckIcon2, {}) })
            ] }, item.value))
          ] }) }),
          /* @__PURE__ */ jsx16(TamaguiSelect.ScrollDownButton, {})
        ] })
      ] });
    }, [items, placeholder, props.label, children, hasCustomChildren]);
    return /* @__PURE__ */ jsx16(
      TamaguiSelect,
      {
        disablePreventBodyScroll,
        ...props,
        children: content
      }
    );
  }
);
SelectImpl.displayName = "Select";
var SelectWithLogging = withErrorLogging(
  "Select",
  SelectImpl
);
var Select = Object.assign(SelectWithLogging, {
  Trigger: TamaguiSelect.Trigger,
  Value: TamaguiSelect.Value,
  Content: TamaguiSelect.Content,
  Item: TamaguiSelect.Item,
  ItemText: TamaguiSelect.ItemText,
  ItemIndicator: TamaguiSelect.ItemIndicator,
  Group: TamaguiSelect.Group,
  Viewport: TamaguiSelect.Viewport,
  Label: TamaguiSelect.Label,
  ScrollUpButton: TamaguiSelect.ScrollUpButton,
  ScrollDownButton: TamaguiSelect.ScrollDownButton,
  TriggerFrame: SelectTriggerFrame,
  IconFrame: SelectIconFrame
});

// src/molecules/Toast.tsx
import { createContext, useContext, useState, useCallback } from "react";
import { styled as styled23, XStack as XStack5, YStack as YStack6, Text as Text7, Button as Button5, AnimatePresence } from "tamagui";
import { Portal } from "@tamagui/portal";
import { jsx as jsx17, jsxs as jsxs7 } from "react/jsx-runtime";
var ToastContext = createContext(void 0);
var useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
var ToastViewportFrame = styled23(YStack6, {
  name: "ToastViewport",
  position: "absolute",
  bottom: 0,
  right: 0,
  padding: "$4",
  gap: "$2",
  width: 390,
  maxWidth: "100%",
  zIndex: 1e4,
  // High z-index
  pointerEvents: "box-none"
  // Allow clicks through empty space
});
var ToastFrame = styled23(XStack5, {
  name: "Toast",
  backgroundColor: "$background",
  borderRadius: "$4",
  borderWidth: 1,
  borderColor: "$borderColor",
  padding: "$4",
  gap: "$3",
  alignItems: "flex-start",
  shadowColor: "$shadowColor",
  shadowRadius: 10,
  shadowOpacity: 0.1,
  elevation: 5,
  minHeight: 64,
  variants: {
    variant: {
      default: {
        borderColor: "$borderColor"
      },
      destructive: {
        borderColor: "$destructive",
        backgroundColor: "$destructive"
        // Or keep background and use text color
        // Shadcn destructive: destructive group border-destructive bg-destructive text-destructive-foreground
      },
      success: {
        borderColor: "$green9"
        // Assuming green9 exists or similar
      }
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var ToastTitle = styled23(Text7, {
  name: "ToastTitle",
  fontWeight: "600",
  fontSize: "$3",
  color: "$foreground",
  variants: {
    variant: {
      default: {},
      destructive: { color: "$destructiveForeground" },
      success: { color: "$green11" }
    }
  }
});
var ToastDescription = styled23(Text7, {
  name: "ToastDescription",
  fontSize: "$2",
  color: "$mutedForeground",
  opacity: 0.9,
  variants: {
    variant: {
      default: {},
      destructive: { color: "$destructiveForeground" },
      success: { color: "$green11" }
    }
  }
});
var ToastCloseButton = styled23(Button5, {
  size: "$2",
  circular: true,
  chromeless: true,
  position: "absolute",
  top: "$2",
  right: "$2",
  opacity: 0.5,
  hoverStyle: { opacity: 1 }
});
var ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const toast = useCallback(({ duration = 5e3, ...props }) => {
    const id2 = Math.random().toString(36).substring(2, 9);
    const newToast = { ...props, id: id2, duration };
    setToasts((prev) => [...prev, newToast]);
    if (duration > 0) {
      setTimeout(() => {
        dismiss(id2);
      }, duration);
    }
  }, []);
  const dismiss = useCallback((id2) => {
    setToasts((prev) => prev.filter((t) => t.id !== id2));
  }, []);
  return /* @__PURE__ */ jsxs7(ToastContext.Provider, { value: { toasts, toast, dismiss }, children: [
    children,
    /* @__PURE__ */ jsx17(Portal, { children: /* @__PURE__ */ jsx17(ToastViewportFrame, { children: /* @__PURE__ */ jsx17(AnimatePresence, { children: toasts.map((t) => /* @__PURE__ */ jsx17(ToastItem, { toast: t, onDismiss: () => dismiss(t.id) }, t.id)) }) }) })
  ] });
};
var ToastItem = ({ toast, onDismiss }) => {
  return /* @__PURE__ */ jsxs7(
    ToastFrame,
    {
      variant: toast.variant,
      animation: "quick",
      enterStyle: { opacity: 0, scale: 0.9, y: 10 },
      exitStyle: { opacity: 0, scale: 0.9, y: 10 },
      opacity: 1,
      scale: 1,
      y: 0,
      children: [
        /* @__PURE__ */ jsxs7(YStack6, { flex: 1, gap: "$1", children: [
          toast.title && /* @__PURE__ */ jsx17(ToastTitle, { variant: toast.variant, children: toast.title }),
          toast.description && /* @__PURE__ */ jsx17(ToastDescription, { variant: toast.variant, children: toast.description })
        ] }),
        toast.action,
        /* @__PURE__ */ jsx17(ToastCloseButton, { onPress: onDismiss, children: /* @__PURE__ */ jsx17(Text7, { children: "\u2715" }) })
      ]
    }
  );
};

// src/molecules/Tabs.tsx
import { Tabs as TamaguiTabs, styled as styled24 } from "tamagui";
var Tabs = styled24(TamaguiTabs, {
  name: "Tabs",
  flexDirection: "column",
  defaultValue: "tab1"
});
var TabsList = styled24(TamaguiTabs.List, {
  name: "TabsList",
  flexDirection: "row",
  backgroundColor: "$muted",
  borderRadius: "$4",
  padding: "$1",
  gap: "$1"
});
var TabsTrigger = styled24(TamaguiTabs.Tab, {
  name: "TabsTrigger",
  backgroundColor: "transparent",
  borderRadius: "$3",
  paddingVertical: "$1.5",
  paddingHorizontal: "$3",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  // Distribute space evenly if needed, or remove for auto width
  hoverStyle: {
    backgroundColor: "$backgroundHover"
    // Subtle hover
  },
  // Active state styling in Tamagui Tabs is usually handled by the 'active' prop or interaction state
  // But Tamagui Tabs.Tab doesn't automatically get an 'active' variant unless we use the context or 'unstyled' + custom logic.
  // However, Tamagui's default Tabs.Tab supports 'data-state="active"' styling if we use the right selectors,
  // OR we can use the `interactionState` if we were using the headless primitive directly.
  // For simplicity in this wrapper, we'll rely on Tamagui's default behavior or add a simple active style if possible.
  // Actually, Tamagui Tabs.Tab has an `active` state in its theme/variants if configured.
  // Let's try to simulate shadcn's active state: bg-background text-foreground shadow-sm
  variants: {
    active: {
      true: {
        backgroundColor: "$background",
        color: "$foreground",
        shadowColor: "$shadowColor",
        shadowRadius: 2,
        shadowOpacity: 0.1,
        elevation: 2
      }
    }
  }
});
var TabsContent = styled24(TamaguiTabs.Content, {
  name: "TabsContent",
  backgroundColor: "$background",
  padding: "$4",
  borderRadius: "$4",
  borderWidth: 1,
  borderColor: "$borderColor",
  marginTop: "$2",
  // Animation
  key: "tab-content",
  animation: "quick",
  enterStyle: { opacity: 0, scale: 0.95, y: 10 },
  exitStyle: { opacity: 0, scale: 0.95, y: 10 },
  opacity: 1,
  scale: 1,
  y: 0
});

// src/molecules/Calendar/Calendar.tsx
import { useState as useState2 } from "react";
import { useDatePicker } from "@rehookify/datepicker";
import { YStack as YStack7, XStack as XStack6, Text as Text8, styled as styled25 } from "tamagui";
import { jsx as jsx18, jsxs as jsxs8 } from "react/jsx-runtime";
var CalendarContainer = styled25(YStack7, {
  width: 320,
  padding: "$4",
  borderRadius: "$md",
  borderWidth: 1,
  borderColor: "$borderColor",
  backgroundColor: "$background"
});
var WeekDaysGrid = styled25(XStack6, {
  justifyContent: "space-between",
  marginBottom: "$2"
});
var DaysGrid = styled25(XStack6, {
  flexWrap: "wrap"
});
var DayCell = styled25(Button, {
  width: 40,
  height: 40,
  padding: 0,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
  borderRadius: "$md",
  borderWidth: 0,
  variants: {
    selected: {
      true: {
        backgroundColor: "$primary",
        color: "$primaryForeground",
        hoverStyle: {
          backgroundColor: "$primaryHover"
        }
      }
    },
    today: {
      true: {
        backgroundColor: "$muted",
        color: "$foreground"
      }
    },
    outside: {
      true: {
        opacity: 0.5
      }
    },
    disabled: {
      true: {
        opacity: 0.3,
        pointerEvents: "none"
      }
    }
  }
});
var DayText = styled25(Text8, {
  fontSize: "$3",
  variants: {
    selected: {
      true: {
        color: "$background"
      }
    }
  }
});
var HeaderText = styled25(Text8, {
  fontSize: "$4",
  fontWeight: "600"
});
var Calendar = ({
  selectedDate = /* @__PURE__ */ new Date(),
  onDateChange,
  minDate,
  maxDate
}) => {
  const [selectedDates, onDatesChange] = useState2(selectedDate ? [selectedDate] : []);
  const {
    data: { calendars, weekDays, months },
    propGetters: { dayButton, subtractOffset, addOffset }
  } = useDatePicker({
    selectedDates,
    onDatesChange: (dates) => {
      onDatesChange(dates);
      if (dates[0] && onDateChange) {
        onDateChange(dates[0]);
      }
    },
    calendar: {
      startDay: 0
      // Sunday
    },
    dates: {
      minDate,
      maxDate
    }
  });
  const currentMonth = calendars[0];
  const currentMonthData = months[0];
  if (!currentMonth) return null;
  const prevBtn = subtractOffset({ months: 1 });
  const nextBtn = addOffset({ months: 1 });
  return /* @__PURE__ */ jsxs8(CalendarContainer, { children: [
    /* @__PURE__ */ jsxs8(XStack6, { justifyContent: "space-between", alignItems: "center", marginBottom: "$4", children: [
      /* @__PURE__ */ jsx18(
        Button,
        {
          circular: true,
          size: "sm",
          variant: "ghost",
          onPress: prevBtn.onClick,
          children: "<"
        }
      ),
      /* @__PURE__ */ jsxs8(HeaderText, { children: [
        currentMonth.month,
        " ",
        currentMonth.year
      ] }),
      /* @__PURE__ */ jsx18(
        Button,
        {
          circular: true,
          size: "sm",
          variant: "ghost",
          onPress: nextBtn.onClick,
          children: ">"
        }
      )
    ] }),
    /* @__PURE__ */ jsx18(WeekDaysGrid, { children: weekDays.map((day) => /* @__PURE__ */ jsx18(Text8, { width: 40, textAlign: "center", color: "$mutedForeground", fontSize: "$2", children: day.substring(0, 2) }, day)) }),
    /* @__PURE__ */ jsx18(DaysGrid, { children: currentMonth.days.map((day, index) => {
      const { onClick, ...dayProps } = dayButton(day);
      return /* @__PURE__ */ jsx18(
        DayCell,
        {
          selected: day.selected,
          today: day.now,
          outside: !day.inCurrentMonth,
          disabled: day.disabled,
          onPress: (e) => {
            onClick?.(e);
          },
          children: /* @__PURE__ */ jsx18(DayText, { selected: day.selected, children: day.day })
        },
        index
      );
    }) })
  ] });
};

// src/molecules/DatePicker.tsx
import { useState as useState3 } from "react";
import { format } from "date-fns";
import { XStack as XStack7 } from "tamagui";
import { Text as Text9 } from "tamagui";
import { jsx as jsx19, jsxs as jsxs9 } from "react/jsx-runtime";
var DatePicker = ({
  date,
  onDateChange,
  placeholder = "Pick a date"
}) => {
  const [open, setOpen] = useState3(false);
  const handleSelect = (newDate) => {
    onDateChange?.(newDate);
    setOpen(false);
  };
  return /* @__PURE__ */ jsxs9(Popover, { open, onOpenChange: setOpen, placement: "bottom-start", children: [
    /* @__PURE__ */ jsx19(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx19(
      Button,
      {
        variant: "outline",
        justifyContent: "flex-start",
        textAlign: "left",
        width: 240,
        paddingLeft: "$3",
        children: /* @__PURE__ */ jsxs9(XStack7, { gap: "$2", alignItems: "center", children: [
          /* @__PURE__ */ jsx19(Text9, { children: "\u{1F4C5}" }),
          /* @__PURE__ */ jsx19(Text9, { color: date ? "$foreground" : "$mutedForeground", children: date ? format(date, "PPP") : placeholder })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsx19(PopoverContent, { padding: 0, width: "auto", children: /* @__PURE__ */ jsx19(
      Calendar,
      {
        selectedDate: date,
        onDateChange: handleSelect
      }
    ) })
  ] });
};

// src/molecules/OTPInput/OTPInput.tsx
import React20 from "react";
import { Input as TamaguiInput2, YStack as YStack8, isWeb as isWeb2, styled as styled26 } from "tamagui";
import { jsx as jsx20 } from "react/jsx-runtime";
var OTPInputFrame = styled26(YStack8, {
  name: "OTPInputFrame",
  flexDirection: "row",
  gap: "$2",
  alignItems: "center"
});
var OTPCellInput = styled26(TamaguiInput2, {
  name: "OTPInputCell",
  width: 48,
  height: "$10",
  textAlign: "center",
  fontSize: "$5",
  borderWidth: 1,
  borderColor: "$borderColor",
  borderRadius: "$md",
  backgroundColor: "$background",
  focusStyle: {
    borderColor: "$ring",
    borderWidth: 2
  }
});
var sanitizeChar = (value, allowed) => {
  const regex = allowed === "alphanumeric" ? /[a-z0-9]/i : /\d/;
  const match = value.match(regex);
  return match ? match[match.length - 1] : "";
};
var sanitizeToLength = (value, allowed, length) => {
  const regex = allowed === "alphanumeric" ? /[a-z0-9]/gi : /\d/g;
  const matches = value.match(regex);
  if (!matches) return "";
  return matches.join("").slice(0, length);
};
var valueToArray = (value, length) => {
  const chars = value.split("").slice(0, length);
  while (chars.length < length) {
    chars.push("");
  }
  return chars;
};
var OTPInputImpl = React20.forwardRef(
  ({
    length: lengthProp = 6,
    value: valueProp,
    defaultValue: defaultValue2 = "",
    onChange,
    onComplete,
    allowedCharacters = "numeric",
    mask = false,
    autoFocus = false,
    disabled = false,
    inputProps,
    ...frameProps
  }, ref) => {
    const length = React20.useMemo(() => Math.max(1, Math.floor(lengthProp)), [lengthProp]);
    const [internalValue, setInternalValue] = React20.useState(
      () => sanitizeToLength(defaultValue2 ?? "", allowedCharacters, length)
    );
    const isControlled = valueProp !== void 0;
    const resolvedValue = React20.useMemo(
      () => sanitizeToLength((valueProp ?? internalValue) || "", allowedCharacters, length),
      [allowedCharacters, internalValue, length, valueProp]
    );
    React20.useEffect(() => {
      if (!isControlled) {
        setInternalValue((prev) => sanitizeToLength(prev, allowedCharacters, length));
      }
    }, [allowedCharacters, isControlled, length]);
    const inputRefs = React20.useRef([]);
    const setValue = React20.useCallback(
      (next) => {
        const sanitized = sanitizeToLength(next, allowedCharacters, length);
        if (!isControlled) {
          setInternalValue(sanitized);
        }
        onChange?.(sanitized);
        return sanitized;
      },
      [allowedCharacters, isControlled, length, onChange]
    );
    const valueArray = React20.useMemo(() => valueToArray(resolvedValue, length), [resolvedValue, length]);
    const focusInput = React20.useCallback((index) => {
      const node = inputRefs.current[index];
      node?.focus?.();
    }, []);
    const selectInput = React20.useCallback((index) => {
      if (!isWeb2) return;
      const node = inputRefs.current[index];
      if (node && typeof node.select === "function") {
        node.select();
      } else if (node && typeof node?.setSelectionRange === "function") {
        ;
        node.setSelectionRange(0, node.value?.length ?? 0);
      }
    }, []);
    const notifyCompletion = React20.useCallback(
      (chars) => {
        if (chars.every(Boolean)) {
          onComplete?.(chars.join(""));
        }
      },
      [onComplete]
    );
    const setCharacterAtIndex = React20.useCallback(
      (index, char) => {
        const chars = valueToArray(resolvedValue, length);
        chars[index] = char;
        setValue(chars.join(""));
        notifyCompletion(chars);
      },
      [length, notifyCompletion, resolvedValue, setValue]
    );
    const handleInputChange = React20.useCallback(
      (index, rawValue) => {
        const sanitized = sanitizeChar(rawValue.slice(-1), allowedCharacters);
        if (!sanitized) {
          setCharacterAtIndex(index, "");
          return;
        }
        setCharacterAtIndex(index, sanitized);
        if (index < length - 1) {
          focusInput(index + 1);
        }
      },
      [allowedCharacters, focusInput, length, setCharacterAtIndex]
    );
    const handlePaste = React20.useCallback(
      (index, event3) => {
        if (!isWeb2) return;
        event3.preventDefault?.();
        const data = event3.clipboardData?.getData("text") ?? "";
        const sanitized = sanitizeToLength(data, allowedCharacters, length - index);
        if (!sanitized) return;
        const chars = valueToArray(resolvedValue, length);
        sanitized.split("").forEach((char, offset) => {
          if (index + offset < length) {
            chars[index + offset] = char;
          }
        });
        setValue(chars.join(""));
        notifyCompletion(chars);
        const nextIndex = Math.min(index + sanitized.length, length - 1);
        focusInput(nextIndex);
        selectInput(nextIndex);
      },
      [allowedCharacters, focusInput, length, notifyCompletion, resolvedValue, selectInput, setValue]
    );
    const handleKeyDown = React20.useCallback(
      (index, event3) => {
        if (event3.key === "Backspace") {
          const hasValue = valueArray[index];
          if (hasValue) {
            event3.preventDefault();
            setCharacterAtIndex(index, "");
          } else if (index > 0) {
            event3.preventDefault();
            focusInput(index - 1);
            setCharacterAtIndex(index - 1, "");
          }
        }
        if (event3.key === "ArrowLeft" && index > 0) {
          event3.preventDefault();
          focusInput(index - 1);
        }
        if (event3.key === "ArrowRight" && index < length - 1) {
          event3.preventDefault();
          focusInput(index + 1);
        }
      },
      [focusInput, length, setCharacterAtIndex, valueArray]
    );
    React20.useEffect(() => {
      if (autoFocus) {
        focusInput(0);
        selectInput(0);
      }
    }, [autoFocus, focusInput, selectInput]);
    return /* @__PURE__ */ jsx20(OTPInputFrame, { ref, ...frameProps, children: valueArray.map((char, index) => /* @__PURE__ */ jsx20(
      OTPCellInput,
      {
        ref: (node) => {
          inputRefs.current[index] = node;
        },
        value: char,
        onChange: (event3) => handleInputChange(index, event3?.target?.value ?? ""),
        onChangeText: (text) => handleInputChange(index, text ?? ""),
        ...isWeb2 ? {
          onKeyDown: (event3) => handleKeyDown(index, event3),
          onPaste: (event3) => handlePaste(index, event3),
          type: mask ? "password" : "text",
          inputMode: allowedCharacters === "numeric" ? "numeric" : "text"
        } : {
          keyboardType: allowedCharacters === "numeric" ? "number-pad" : "default",
          secureTextEntry: mask,
          editable: !disabled
        },
        onFocus: () => selectInput(index),
        autoFocus: autoFocus && index === 0,
        autoCorrect: false,
        autoCapitalize: "none",
        disabled: isWeb2 ? disabled : void 0,
        ...inputProps
      },
      `otp-input-${index}`
    )) });
  }
);
OTPInputImpl.displayName = "OTPInput";
var OTPInput = withErrorLogging("OTPInput", OTPInputImpl);

// src/molecules/Pagination/Pagination.tsx
import { useMemo as useMemo3 } from "react";
import { Button as Button6, XStack as XStack8, Text as Text10, styled as styled27, VisuallyHidden } from "tamagui";
import { jsx as jsx21, jsxs as jsxs10 } from "react/jsx-runtime";
var PaginationRoot = styled27(XStack8, {
  name: "PaginationRoot",
  alignItems: "center",
  gap: "$2"
});
var PaginationButton = styled27(Button6, {
  name: "PaginationButton",
  unstyled: true,
  borderRadius: "$full",
  borderWidth: 1,
  borderColor: "$borderColor",
  minWidth: 40,
  height: "$6",
  paddingHorizontal: "$3",
  alignItems: "center",
  justifyContent: "center",
  color: "$foreground",
  backgroundColor: "transparent",
  hoverStyle: {
    backgroundColor: "$muted"
  },
  pressStyle: {
    backgroundColor: "$muted",
    opacity: 0.85
  },
  disabledStyle: {
    opacity: 0.4,
    backgroundColor: "transparent"
  },
  variants: {
    active: {
      true: {
        backgroundColor: "$primary",
        color: "$background",
        borderColor: "$primary",
        hoverStyle: {
          backgroundColor: "$primaryHover"
        }
      }
    },
    size: {
      sm: {
        height: "$5",
        minWidth: 32,
        paddingHorizontal: "$2",
        fontSize: "$2"
      },
      md: {
        height: "$6",
        fontSize: "$3"
      },
      lg: {
        height: "$8",
        fontSize: "$4"
      }
    }
  },
  defaultVariants: {
    size: "md",
    active: false
  }
});
var PaginationEllipsis = styled27(Text10, {
  name: "PaginationEllipsis",
  color: "$mutedForeground",
  px: "$2",
  fontSize: "$3"
});
var DOTS = "DOTS";
var range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => start + index);
};
var usePaginationRange = ({ currentPage, totalPages, siblingCount }) => {
  return useMemo3(() => {
    if (totalPages <= 0) return [];
    const totalPageNumbers = siblingCount * 2 + 5;
    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;
    const firstPageIndex = 1;
    const lastPageIndex = totalPages;
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPages];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [firstPageIndex, DOTS, ...rightRange];
    }
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
    return range(1, totalPages);
  }, [currentPage, siblingCount, totalPages]);
};
var Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showEdges = true,
  disabled = false,
  size = "md",
  ariaLabel = "Pagination"
}) => {
  const paginationRange = usePaginationRange({ currentPage, totalPages, siblingCount });
  const handleChange = (page) => {
    if (disabled) return;
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange?.(page);
  };
  if (totalPages <= 1 || paginationRange.length === 0) {
    return null;
  }
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  return /* @__PURE__ */ jsxs10(PaginationRoot, { role: "navigation", "aria-label": ariaLabel, children: [
    showEdges && /* @__PURE__ */ jsxs10(
      PaginationButton,
      {
        size,
        disabled: disabled || isFirstPage,
        "aria-label": "First page",
        onPress: () => handleChange(1),
        children: [
          /* @__PURE__ */ jsx21(VisuallyHidden, { children: "First page" }),
          "\xAB"
        ]
      }
    ),
    /* @__PURE__ */ jsxs10(
      PaginationButton,
      {
        size,
        disabled: disabled || isFirstPage,
        "aria-label": "Previous page",
        onPress: () => handleChange(currentPage - 1),
        children: [
          /* @__PURE__ */ jsx21(VisuallyHidden, { children: "Previous page" }),
          "\u2039"
        ]
      }
    ),
    paginationRange.map((pageNumber, index) => {
      if (pageNumber === DOTS) {
        return /* @__PURE__ */ jsx21(PaginationEllipsis, { "aria-hidden": true, children: "\u2026" }, `dots-${index}`);
      }
      const pageValue = pageNumber;
      const isActive = pageValue === currentPage;
      return /* @__PURE__ */ jsx21(
        PaginationButton,
        {
          size,
          active: isActive,
          "aria-current": isActive ? "page" : void 0,
          "aria-label": `Go to page ${pageValue}`,
          disabled,
          onPress: () => handleChange(pageValue),
          children: pageValue
        },
        pageValue
      );
    }),
    /* @__PURE__ */ jsxs10(
      PaginationButton,
      {
        size,
        disabled: disabled || isLastPage,
        "aria-label": "Next page",
        onPress: () => handleChange(currentPage + 1),
        children: [
          /* @__PURE__ */ jsx21(VisuallyHidden, { children: "Next page" }),
          "\u203A"
        ]
      }
    ),
    showEdges && /* @__PURE__ */ jsxs10(
      PaginationButton,
      {
        size,
        disabled: disabled || isLastPage,
        "aria-label": "Last page",
        onPress: () => handleChange(totalPages),
        children: [
          /* @__PURE__ */ jsx21(VisuallyHidden, { children: "Last page" }),
          "\xBB"
        ]
      }
    )
  ] });
};
Pagination.displayName = "Pagination";

// src/molecules/Breadcrumb/Breadcrumb.tsx
import { Anchor, Button as Button7, Text as Text11, XStack as XStack9, styled as styled28 } from "tamagui";
import { jsx as jsx22, jsxs as jsxs11 } from "react/jsx-runtime";
var BreadcrumbRoot = styled28(XStack9, {
  name: "BreadcrumbRoot",
  alignItems: "center",
  gap: "$2"
});
var BreadcrumbList = styled28(XStack9, {
  name: "BreadcrumbList",
  gap: "$2",
  alignItems: "center",
  flexWrap: "wrap"
});
var BreadcrumbItemWrapper = styled28(XStack9, {
  name: "BreadcrumbItem",
  alignItems: "center",
  gap: "$2"
});
var BreadcrumbSeparator = styled28(Text11, {
  name: "BreadcrumbSeparator",
  color: "$mutedForeground",
  fontSize: "$2"
});
var BreadcrumbLink = styled28(Anchor, {
  name: "BreadcrumbLink",
  color: "$foreground",
  fontWeight: "500",
  hoverStyle: {
    color: "$primary"
  }
});
var BreadcrumbButton = styled28(Button7, {
  name: "BreadcrumbButton",
  unstyled: true,
  padding: 0,
  minWidth: 0,
  backgroundColor: "transparent",
  hoverStyle: {
    opacity: 0.8
  }
});
var BreadcrumbButtonLabel = styled28(Text11, {
  name: "BreadcrumbButtonLabel",
  color: "$foreground",
  fontWeight: "500"
});
var BreadcrumbCurrent = styled28(Text11, {
  name: "BreadcrumbCurrent",
  color: "$mutedForeground",
  fontWeight: "600"
});
var Breadcrumb = ({
  items,
  separator = "/",
  ariaLabel = "Breadcrumb"
}) => {
  if (!items || items.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx22(BreadcrumbRoot, { role: "navigation", "aria-label": ariaLabel, children: /* @__PURE__ */ jsx22(BreadcrumbList, { role: "list", children: items.map((item, index) => {
    const isLast = index === items.length - 1;
    const linkRel = item.rel ?? (item.target === "_blank" ? "noreferrer noopener" : void 0);
    return /* @__PURE__ */ jsxs11(BreadcrumbItemWrapper, { role: "listitem", children: [
      isLast ? /* @__PURE__ */ jsx22(BreadcrumbCurrent, { "aria-current": "page", children: item.label }) : item.href ? /* @__PURE__ */ jsx22(
        BreadcrumbLink,
        {
          href: item.href,
          target: item.target,
          rel: linkRel,
          onPress: item.onPress,
          children: item.label
        }
      ) : /* @__PURE__ */ jsx22(BreadcrumbButton, { onPress: item.onPress, children: /* @__PURE__ */ jsx22(BreadcrumbButtonLabel, { children: item.label }) }),
      !isLast && /* @__PURE__ */ jsx22(BreadcrumbSeparator, { "aria-hidden": true, children: separator })
    ] }, `${item.label}-${index}`);
  }) }) });
};
Breadcrumb.displayName = "Breadcrumb";

// src/molecules/ComponentErrorBoundary.tsx
import React22 from "react";
var ComponentErrorBoundary = class extends React22.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error2, errorInfo) {
    logComponentError(this.props.componentName, error2, errorInfo.componentStack || void 0);
    if (process.env.NODE_ENV === "test") {
      throw error2;
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }
  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
};

// src/molecules/NavigationMenu.tsx
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { styled as styled29, YStack as YStack9 } from "tamagui";
var NavigationMenu = styled29(NavigationMenuPrimitive.Root, {
  name: "NavigationMenu",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  width: "100%"
});
var NavigationMenuList = styled29(NavigationMenuPrimitive.List, {
  name: "NavigationMenuList",
  display: "flex",
  gap: "$2",
  m: 0,
  px: "$1",
  py: "$1",
  borderRadius: "$lg",
  backgroundColor: "$background",
  borderWidth: 1,
  borderColor: "$borderColor"
});
var NavigationMenuItem = NavigationMenuPrimitive.Item;
var NavigationMenuTrigger = styled29(NavigationMenuPrimitive.Trigger, {
  name: "NavigationMenuTrigger",
  borderRadius: "$md",
  paddingHorizontal: "$4",
  paddingVertical: "$2",
  color: "$foreground",
  backgroundColor: "transparent",
  borderWidth: 1,
  borderColor: "transparent",
  transition: "all 150ms ease",
  hoverStyle: {
    backgroundColor: "$muted"
  },
  pressStyle: {
    backgroundColor: "$muted"
  },
  focusVisibleStyle: {
    borderColor: "$primary"
  }
});
var NavigationMenuContent = styled29(NavigationMenuPrimitive.Content, {
  name: "NavigationMenuContent",
  position: "absolute",
  top: "calc(100% + 0.5rem)",
  left: 0,
  backgroundColor: "$background",
  borderRadius: "$xl",
  borderWidth: 1,
  borderColor: "$borderColor",
  padding: "$4",
  minWidth: 320,
  zIndex: 20
});
var NavigationMenuLink = styled29(NavigationMenuPrimitive.Link, {
  name: "NavigationMenuLink",
  display: "block",
  borderRadius: "$lg",
  padding: "$4",
  color: "$foreground",
  hoverStyle: {
    backgroundColor: "$muted"
  },
  focusVisibleStyle: {
    outlineWidth: 2,
    outlineStyle: "solid",
    outlineColor: "$primary"
  }
});
var NavigationMenuIndicator = styled29(NavigationMenuPrimitive.Indicator, {
  name: "NavigationMenuIndicator",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  height: 10,
  top: "100%",
  transition: "width, transform 200ms ease"
});
var IndicatorArrow = styled29(YStack9, {
  width: 20,
  height: 20,
  backgroundColor: "$background",
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderTopWidth: 1,
  borderColor: "$borderColor",
  transform: "rotate(45deg)",
  marginTop: -8
});
var NavigationMenuViewport = styled29(NavigationMenuPrimitive.Viewport, {
  name: "NavigationMenuViewport",
  position: "absolute",
  top: "100%",
  left: 0,
  width: "100%",
  backgroundColor: "$background",
  borderRadius: "$xl",
  borderWidth: 1,
  borderColor: "$borderColor",
  marginTop: "$2",
  overflow: "hidden"
});

// src/molecules/Menubar/Menubar.tsx
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "@tamagui/lucide-icons";
import React23 from "react";
import { styled as styled30, Paragraph as Paragraph3 } from "tamagui";
import { jsx as jsx23, jsxs as jsxs12 } from "react/jsx-runtime";
var MenubarFrame = styled30(MenubarPrimitive.Root, {
  name: "Menubar",
  display: "flex",
  flexDirection: "row",
  height: "auto",
  alignItems: "center",
  gap: "$1",
  borderRadius: "$md",
  borderWidth: 1,
  borderColor: "$borderColor",
  backgroundColor: "$background",
  padding: "$1"
});
var MenubarMenu = MenubarPrimitive.Menu;
var MenubarGroup = MenubarPrimitive.Group;
var MenubarPortal = MenubarPrimitive.Portal;
var MenubarTriggerFrame = styled30(MenubarPrimitive.Trigger, {
  name: "MenubarTrigger",
  display: "flex",
  alignItems: "center",
  paddingVertical: "$1.5",
  paddingHorizontal: "$3",
  borderRadius: "$sm",
  outlineWidth: 0,
  cursor: "default",
  userSelect: "none",
  fontSize: "$3",
  fontWeight: "500",
  color: "$foreground",
  backgroundColor: "transparent",
  borderWidth: 0,
  hoverStyle: {
    backgroundColor: "$muted",
    color: "$foreground"
  },
  focusStyle: {
    backgroundColor: "$muted",
    color: "$foreground"
  },
  pressStyle: {
    backgroundColor: "$muted",
    color: "$foreground"
  },
  "$platform-web": {
    '&[data-state="open"]': {
      backgroundColor: "$muted",
      color: "$foreground"
    }
  }
});
var MenubarTrigger = React23.forwardRef((props, ref) => /* @__PURE__ */ jsx23(MenubarTriggerFrame, { ref, ...props }));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
var MenubarContentFrame = styled30(MenubarPrimitive.Content, {
  name: "MenubarContent",
  minWidth: 192,
  overflow: "hidden",
  borderRadius: "$md",
  borderWidth: 1,
  borderColor: "$borderColor",
  backgroundColor: "$background",
  padding: "$1",
  zIndex: 50,
  shadowColor: "$shadowColor",
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1
});
var MenubarContent = React23.forwardRef(({ align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ jsx23(MenubarPrimitive.Portal, { children: /* @__PURE__ */ jsx23(
  MenubarContentFrame,
  {
    ref,
    align,
    alignOffset,
    sideOffset,
    ...props
  }
) }));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
var MenubarItemFrame = styled30(MenubarPrimitive.Item, {
  name: "MenubarItem",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "$sm",
  paddingVertical: "$1.5",
  paddingHorizontal: "$2",
  outlineWidth: 0,
  userSelect: "none",
  cursor: "default",
  fontSize: "$3",
  color: "$foreground",
  hoverStyle: {
    backgroundColor: "$accent",
    color: "$accentForeground"
  },
  focusStyle: {
    backgroundColor: "$accent",
    color: "$accentForeground"
  },
  "$platform-web": {
    "&[data-disabled]": {
      pointerEvents: "none",
      opacity: 0.5
    }
  }
});
var MenubarItem = React23.forwardRef(({ inset, ...props }, ref) => /* @__PURE__ */ jsx23(
  MenubarItemFrame,
  {
    ref,
    paddingLeft: inset ? "$8" : "$2",
    ...props
  }
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
var MenubarCheckboxItemFrame = styled30(MenubarPrimitive.CheckboxItem, {
  name: "MenubarCheckboxItem",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "$sm",
  paddingVertical: "$1.5",
  paddingLeft: "$8",
  paddingRight: "$2",
  outlineWidth: 0,
  userSelect: "none",
  cursor: "default",
  fontSize: "$3",
  color: "$foreground",
  hoverStyle: {
    backgroundColor: "$accent",
    color: "$accentForeground"
  },
  focusStyle: {
    backgroundColor: "$accent",
    color: "$accentForeground"
  },
  "$platform-web": {
    "&[data-disabled]": {
      pointerEvents: "none",
      opacity: 0.5
    }
  }
});
var MenubarItemIndicator = styled30(MenubarPrimitive.ItemIndicator, {
  position: "absolute",
  left: "$2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "$4",
  height: "$4"
});
var MenubarCheckboxItem = React23.forwardRef(({ children, checked, ...props }, ref) => /* @__PURE__ */ jsxs12(MenubarCheckboxItemFrame, { ref, checked, ...props, children: [
  /* @__PURE__ */ jsx23(MenubarItemIndicator, { children: /* @__PURE__ */ jsx23(Check, { size: 14 }) }),
  children
] }));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
var MenubarRadioItemFrame = styled30(MenubarPrimitive.RadioItem, {
  name: "MenubarRadioItem",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "$sm",
  paddingVertical: "$1.5",
  paddingLeft: "$8",
  paddingRight: "$2",
  outlineWidth: 0,
  userSelect: "none",
  cursor: "default",
  fontSize: "$3",
  color: "$foreground",
  hoverStyle: {
    backgroundColor: "$accent",
    color: "$accentForeground"
  },
  focusStyle: {
    backgroundColor: "$accent",
    color: "$accentForeground"
  },
  "$platform-web": {
    "&[data-disabled]": {
      pointerEvents: "none",
      opacity: 0.5
    }
  }
});
var MenubarRadioItem = React23.forwardRef(({ children, ...props }, ref) => /* @__PURE__ */ jsxs12(MenubarRadioItemFrame, { ref, ...props, children: [
  /* @__PURE__ */ jsx23(MenubarItemIndicator, { children: /* @__PURE__ */ jsx23(Circle, { size: 8, fill: "currentColor" }) }),
  children
] }));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
var MenubarLabel = styled30(MenubarPrimitive.Label, {
  name: "MenubarLabel",
  paddingHorizontal: "$2",
  paddingVertical: "$1.5",
  fontSize: "$3",
  fontWeight: "600",
  color: "$foreground",
  paddingLeft: "$2"
});
var MenubarLabelWithInset = React23.forwardRef(({ inset, ...props }, ref) => /* @__PURE__ */ jsx23(MenubarLabel, { ref, paddingLeft: inset ? "$8" : "$2", ...props }));
MenubarLabelWithInset.displayName = MenubarPrimitive.Label.displayName;
var MenubarSeparator = styled30(MenubarPrimitive.Separator, {
  name: "MenubarSeparator",
  height: 1,
  backgroundColor: "$muted",
  // or $border
  marginVertical: "$1",
  marginHorizontal: "-$1"
});
var MenubarShortcut = styled30(Paragraph3, {
  name: "MenubarShortcut",
  marginLeft: "auto",
  fontSize: "$1",
  color: "$mutedForeground",
  letterSpacing: "$1"
});
var MenubarSubTriggerFrame = styled30(MenubarPrimitive.SubTrigger, {
  name: "MenubarSubTrigger",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "$sm",
  paddingVertical: "$1.5",
  paddingHorizontal: "$2",
  outlineWidth: 0,
  userSelect: "none",
  cursor: "default",
  fontSize: "$3",
  color: "$foreground",
  hoverStyle: {
    backgroundColor: "$accent",
    color: "$accentForeground"
  },
  focusStyle: {
    backgroundColor: "$accent",
    color: "$accentForeground"
  },
  "$platform-web": {
    '&[data-state="open"]': {
      backgroundColor: "$accent",
      color: "$accentForeground"
    }
  }
});
var MenubarSubTrigger = React23.forwardRef(({ children, inset, ...props }, ref) => /* @__PURE__ */ jsxs12(
  MenubarSubTriggerFrame,
  {
    ref,
    paddingLeft: inset ? "$8" : "$2",
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx23(ChevronRight, { size: 14, style: { marginLeft: "auto" } })
    ]
  }
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
var MenubarSubContentFrame = styled30(MenubarPrimitive.SubContent, {
  name: "MenubarSubContent",
  minWidth: 128,
  overflow: "hidden",
  borderRadius: "$md",
  borderWidth: 1,
  borderColor: "$borderColor",
  backgroundColor: "$background",
  padding: "$1",
  shadowColor: "$shadowColor",
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  zIndex: 50
});
var MenubarSubContent = React23.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx23(MenubarSubContentFrame, { ref, ...props }));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
var MenubarSub = MenubarPrimitive.Sub;
var MenubarRadioGroup = MenubarPrimitive.RadioGroup;

// src/molecules/ToggleGroup/ToggleGroup.tsx
import { ToggleGroup as TamaguiToggleGroup, styled as styled31 } from "tamagui";
var ToggleGroupFrame = styled31(TamaguiToggleGroup, {
  name: "ToggleGroup",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "$1"
});
var ToggleGroupItemFrame = styled31(TamaguiToggleGroup.Item, {
  name: "ToggleGroupItem",
  backgroundColor: "transparent",
  borderRadius: "$4",
  paddingHorizontal: "$3",
  height: 40,
  // h-10
  alignItems: "center",
  justifyContent: "center",
  hoverStyle: {
    backgroundColor: "$muted",
    color: "$mutedForeground"
  },
  focusStyle: {
    outlineColor: "$ring",
    outlineStyle: "solid",
    outlineWidth: 2,
    outlineOffset: 2
  },
  // Active/On state
  variants: {
    active: {
      true: {
        backgroundColor: "$accent",
        color: "$accentForeground"
      }
    }
  }
});

// src/molecules/Tooltip/Tooltip.tsx
import { Tooltip as TamaguiTooltip, styled as styled32, Paragraph as Paragraph4 } from "tamagui";
import React24 from "react";
import { jsx as jsx24, jsxs as jsxs13 } from "react/jsx-runtime";
var TooltipContent = styled32(TamaguiTooltip.Content, {
  name: "TooltipContent",
  enterStyle: { x: 0, y: -5, opacity: 0, scale: 0.9 },
  exitStyle: { x: 0, y: -5, opacity: 0, scale: 0.9 },
  scale: 1,
  x: 0,
  y: 0,
  opacity: 1,
  animation: "quick",
  maxWidth: 350,
  padding: "$2",
  backgroundColor: "$background",
  borderColor: "$borderColor",
  borderWidth: 1,
  borderRadius: "$md",
  zIndex: 1e3
});
var TooltipArrow = styled32(TamaguiTooltip.Arrow, {
  name: "TooltipArrow",
  borderColor: "$borderColor",
  borderWidth: 1,
  backgroundColor: "$background"
});
var Tooltip = React24.forwardRef(({ children, content, ...props }, ref) => {
  return /* @__PURE__ */ jsxs13(TamaguiTooltip, { ...props, children: [
    /* @__PURE__ */ jsx24(TamaguiTooltip.Trigger, { asChild: true, children }),
    /* @__PURE__ */ jsxs13(TooltipContent, { children: [
      /* @__PURE__ */ jsx24(TooltipArrow, {}),
      typeof content === "string" ? /* @__PURE__ */ jsx24(Paragraph4, { size: "$2", children: content }) : content
    ] })
  ] });
});
Tooltip.displayName = "Tooltip";

// src/molecules/NavigationMenu.tsx
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { styled as styled29, YStack as YStack9 } from "tamagui";
var NavigationMenu = styled29(NavigationMenuPrimitive.Root, {
  name: "NavigationMenu",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  width: "100%"
});
var NavigationMenuList = styled29(NavigationMenuPrimitive.List, {
  name: "NavigationMenuList",
  display: "flex",
  gap: "$2",
  m: 0,
  px: "$1",
  py: "$1",
  borderRadius: "$lg",
  backgroundColor: "$background",
  borderWidth: 1,
  borderColor: "$borderColor"
});
var NavigationMenuItem = NavigationMenuPrimitive.Item;
var NavigationMenuTrigger = styled29(NavigationMenuPrimitive.Trigger, {
  name: "NavigationMenuTrigger",
  borderRadius: "$md",
  paddingHorizontal: "$4",
  paddingVertical: "$2",
  color: "$foreground",
  backgroundColor: "transparent",
  borderWidth: 1,
  borderColor: "transparent",
  transition: "all 150ms ease",
  hoverStyle: {
    backgroundColor: "$muted"
  },
  pressStyle: {
    backgroundColor: "$muted"
  },
  focusVisibleStyle: {
    borderColor: "$primary"
  }
});
var NavigationMenuContent = styled29(NavigationMenuPrimitive.Content, {
  name: "NavigationMenuContent",
  position: "absolute",
  top: "calc(100% + 0.5rem)",
  left: 0,
  backgroundColor: "$background",
  borderRadius: "$xl",
  borderWidth: 1,
  borderColor: "$borderColor",
  padding: "$4",
  minWidth: 320,
  zIndex: 20
});
var NavigationMenuLink = styled29(NavigationMenuPrimitive.Link, {
  name: "NavigationMenuLink",
  display: "block",
  borderRadius: "$lg",
  padding: "$4",
  color: "$foreground",
  hoverStyle: {
    backgroundColor: "$muted"
  },
  focusVisibleStyle: {
    outlineWidth: 2,
    outlineStyle: "solid",
    outlineColor: "$primary"
  }
});
var NavigationMenuIndicator = styled29(NavigationMenuPrimitive.Indicator, {
  name: "NavigationMenuIndicator",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  height: 10,
  top: "100%",
  transition: "width, transform 200ms ease"
});
var IndicatorArrow = styled29(YStack9, {
  width: 20,
  height: 20,
  backgroundColor: "$background",
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderTopWidth: 1,
  borderColor: "$borderColor",
  transform: "rotate(45deg)",
  marginTop: -8
});
var NavigationMenuViewport = styled29(NavigationMenuPrimitive.Viewport, {
  name: "NavigationMenuViewport",
  position: "absolute",
  top: "100%",
  left: 0,
  width: "100%",
  backgroundColor: "$background",
  borderRadius: "$xl",
  borderWidth: 1,
  borderColor: "$borderColor",
  marginTop: "$2",
  overflow: "hidden"
});

// src/molecules/Menubar/Menubar.tsx
import { XStack as XStack11, styled as styled30, Paragraph as Paragraph3 } from "tamagui";
import React23 from "react";
import { jsx as jsx23 } from "react/jsx-runtime";
var MenubarFrame = styled30(XStack11, {
  name: "Menubar",
  backgroundColor: "$background",
  borderWidth: 1,
  borderColor: "$borderColor",
  borderRadius: "$md",
  padding: "$1",
  gap: "$1"
});
var Menubar = React23.forwardRef((props, ref) => {
  return /* @__PURE__ */ jsx23(MenubarFrame, { ref, ...props, children: props.children });
});
Menubar.displayName = "Menubar";
var MenubarMenu = styled30(XStack11, {});
var MenubarTrigger = styled30(Paragraph3, {
  padding: "$2",
  cursor: "pointer",
  hoverStyle: {
    backgroundColor: "$muted",
    borderRadius: "$sm"
  }
});
var MenubarContent = styled30(XStack11, {});
var MenubarItem = styled30(Paragraph3, {});

// src/molecules/ToggleGroup/ToggleGroup.tsx
import { ToggleGroup as TamaguiToggleGroup, styled as styled31 } from "tamagui";
var ToggleGroupFrame = styled31(TamaguiToggleGroup, {
  name: "ToggleGroup",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "$1"
});
var ToggleGroupItemFrame = styled31(TamaguiToggleGroup.Item, {
  name: "ToggleGroupItem",
  backgroundColor: "transparent",
  borderRadius: "$4",
  paddingHorizontal: "$3",
  height: 40,
  // h-10
  alignItems: "center",
  justifyContent: "center",
  hoverStyle: {
    backgroundColor: "$muted",
    color: "$mutedForeground"
  },
  focusStyle: {
    outlineColor: "$ring",
    outlineStyle: "solid",
    outlineWidth: 2,
    outlineOffset: 2
  },
  // Active/On state
  variants: {
    active: {
      true: {
        backgroundColor: "$accent",
        color: "$accentForeground"
      }
    }
  }
});

// src/molecules/Tooltip/Tooltip.tsx
import { Tooltip as TamaguiTooltip, styled as styled32, Paragraph as Paragraph4 } from "tamagui";
import React24 from "react";
import { jsx as jsx24, jsxs as jsxs12 } from "react/jsx-runtime";
var TooltipContent = styled32(TamaguiTooltip.Content, {
  name: "TooltipContent",
  enterStyle: { x: 0, y: -5, opacity: 0, scale: 0.9 },
  exitStyle: { x: 0, y: -5, opacity: 0, scale: 0.9 },
  scale: 1,
  x: 0,
  y: 0,
  opacity: 1,
  animation: "quick",
  maxWidth: 350,
  padding: "$2",
  backgroundColor: "$background",
  borderColor: "$borderColor",
  borderWidth: 1,
  borderRadius: "$md",
  zIndex: 1e3
});
var TooltipArrow = styled32(TamaguiTooltip.Arrow, {
  name: "TooltipArrow",
  borderColor: "$borderColor",
  borderWidth: 1,
  backgroundColor: "$background"
});
var Tooltip = React24.forwardRef(({ children, content, ...props }, ref) => {
  return /* @__PURE__ */ jsxs12(TamaguiTooltip, { ...props, children: [
    /* @__PURE__ */ jsx24(TamaguiTooltip.Trigger, { asChild: true, children }),
    /* @__PURE__ */ jsxs12(TooltipContent, { children: [
      /* @__PURE__ */ jsx24(TooltipArrow, {}),
      typeof content === "string" ? /* @__PURE__ */ jsx24(Paragraph4, { size: "$2", children: content }) : content
    ] })
  ] });
});
Tooltip.displayName = "Tooltip";

// src/organisms/Form/Form.tsx
import * as React25 from "react";
import {
  Controller,
  FormProvider,
  useFormContext
} from "react-hook-form";
import { View as View5, Label, Text as Text12, styled as styled33, YStack as YStack10 } from "tamagui";
import { jsx as jsx25 } from "react/jsx-runtime";
var Form = FormProvider;
var FormFieldContext = React25.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx25(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx25(Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React25.useContext(FormFieldContext);
  const itemContext = React25.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id: id2 } = itemContext;
  return {
    id: id2,
    name: fieldContext.name,
    formItemId: `${id2}-form-item`,
    formDescriptionId: `${id2}-form-item-description`,
    formMessageId: `${id2}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React25.createContext(
  {}
);
var FormItemFrame = styled33(YStack10, {
  name: "FormItem",
  space: "$2"
});
var FormItem = React25.forwardRef(
  ({ ...props }, ref) => {
    const id2 = React25.useId();
    return /* @__PURE__ */ jsx25(FormItemContext.Provider, { value: { id: id2 }, children: /* @__PURE__ */ jsx25(FormItemFrame, { ref, ...props }) });
  }
);
FormItem.displayName = "FormItem";
var FormLabelFrame = styled33(Label, {
  name: "FormLabel",
  color: "$color",
  fontWeight: "500",
  fontSize: "$3",
  variants: {
    error: {
      true: {
        color: "$destructive"
      }
    }
  }
});
var FormLabel = React25.forwardRef(
  ({ ...props }, ref) => {
    const { error: error2, formItemId } = useFormField();
    return /* @__PURE__ */ jsx25(
      FormLabelFrame,
      {
        ref,
        htmlFor: formItemId,
        error: !!error2,
        ...props
      }
    );
  }
);
FormLabel.displayName = "FormLabel";
var FormControl = React25.forwardRef(
  ({ ...props }, ref) => {
    const { error: error2, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /* @__PURE__ */ jsx25(
      View5,
      {
        ref,
        id: formItemId,
        "aria-describedby": !error2 ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error2,
        ...props
      }
    );
  }
);
FormControl.displayName = "FormControl";
var FormDescriptionFrame = styled33(Text12, {
  name: "FormDescription",
  fontSize: "$2",
  color: "$mutedForeground"
});
var FormDescription = React25.forwardRef(
  ({ ...props }, ref) => {
    const { formDescriptionId } = useFormField();
    return /* @__PURE__ */ jsx25(
      FormDescriptionFrame,
      {
        ref,
        id: formDescriptionId,
        ...props
      }
    );
  }
);
FormDescription.displayName = "FormDescription";
var FormMessageFrame = styled33(Text12, {
  name: "FormMessage",
  fontSize: "$2",
  fontWeight: "500",
  color: "$destructive"
});
var FormMessage = React25.forwardRef(
  ({ children, ...props }, ref) => {
    const { error: error2, formMessageId } = useFormField();
    const body = error2 ? String(error2?.message) : children;
    if (!body) {
      return null;
    }
    return /* @__PURE__ */ jsx25(
      FormMessageFrame,
      {
        ref,
        id: formMessageId,
        ...props,
        children: body
      }
    );
  }
);
FormMessage.displayName = "FormMessage";

// src/organisms/DataTable/DataTable.tsx
import { useState as useState4 } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel
} from "@tanstack/react-table";
import {
  YStack as YStack11,
  XStack as XStack12,
  Text as Text13,
  styled as styled34,
  ScrollView,
  View as View6
} from "tamagui";
import { jsx as jsx26, jsxs as jsxs13 } from "react/jsx-runtime";
var TableContainer = styled34(YStack11, {
  borderColor: "$borderColor",
  borderWidth: 1,
  borderRadius: "$md",
  // Changed from $4 to $md
  overflow: "hidden"
});
var TableHeader = styled34(YStack11, {
  backgroundColor: "$background",
  borderBottomWidth: 1,
  borderColor: "$borderColor"
});
var TableRow = styled34(XStack12, {
  borderBottomWidth: 1,
  borderColor: "$borderColor",
  paddingVertical: "$3",
  paddingHorizontal: "$4",
  alignItems: "center",
  hoverStyle: {
    backgroundColor: "$backgroundHover"
  }
});
var TableHeadText = styled34(Text13, {
  color: "$mutedForeground",
  fontSize: "$3",
  fontWeight: "500"
});
var TableCellText = styled34(Text13, {
  color: "$foreground",
  fontSize: "$3"
});
function DataTable({
  columns,
  data
}) {
  const [sorting, setSorting] = useState4([]);
  const [columnFilters, setColumnFilters] = useState4([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters
    }
  });
  return /* @__PURE__ */ jsxs13(YStack11, { gap: "$4", width: "100%", children: [
    /* @__PURE__ */ jsx26(TableContainer, { children: /* @__PURE__ */ jsx26(ScrollView, { horizontal: true, showsHorizontalScrollIndicator: true, children: /* @__PURE__ */ jsxs13(YStack11, { minWidth: "100%", children: [
      /* @__PURE__ */ jsx26(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx26(TableRow, { borderBottomWidth: 1, paddingVertical: "$3", children: headerGroup.headers.map((header) => {
        return /* @__PURE__ */ jsx26(View6, { style: { flex: 1, minWidth: 100 }, children: header.isPlaceholder ? null : flexRender(
          header.column.columnDef.header,
          header.getContext()
        ) }, header.id);
      }) }, headerGroup.id)) }),
      /* @__PURE__ */ jsx26(YStack11, { children: table.getRowModel().rows?.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx26(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx26(View6, { style: { flex: 1, minWidth: 100 }, children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id)) }, row.id)) : /* @__PURE__ */ jsx26(TableRow, { children: /* @__PURE__ */ jsx26(View6, { style: { flex: 1, alignItems: "center", padding: 20 }, children: /* @__PURE__ */ jsx26(TableHeadText, { children: "No results." }) }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs13(XStack12, { alignItems: "center", justifyContent: "flex-end", gap: "$2", children: [
      /* @__PURE__ */ jsx26(
        Button,
        {
          variant: "outline",
          size: "sm",
          onPress: () => table.previousPage(),
          disabled: !table.getCanPreviousPage(),
          children: "Previous"
        }
      ),
      /* @__PURE__ */ jsx26(
        Button,
        {
          variant: "outline",
          size: "sm",
          onPress: () => table.nextPage(),
          disabled: !table.getCanNextPage(),
          children: "Next"
        }
      )
    ] })
  ] });
}
var Table = {
  Container: TableContainer,
  Header: TableHeader,
  Row: TableRow,
  HeadText: TableHeadText,
  CellText: TableCellText
};

// src/organisms/Carousel/Carousel.tsx
import React27, { useCallback as useCallback2, useEffect, useState as useState5 } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { styled as styled35, YStack as YStack12, XStack as XStack13, View as View7, Text as Text14 } from "tamagui";
import { jsx as jsx27 } from "react/jsx-runtime";
var CarouselContext = React27.createContext(null);
function useCarousel() {
  const context = React27.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
var CarouselFrame = styled35(YStack12, {
  width: "100%",
  position: "relative"
});
var Carousel = React27.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = useState5(false);
    const [canScrollNext, setCanScrollNext] = useState5(false);
    const onSelect = useCallback2((api2) => {
      if (!api2) return;
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = useCallback2(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = useCallback2(() => {
      api?.scrollNext();
    }, [api]);
    useEffect(() => {
      if (!api || !setApi) return;
      setApi(api);
    }, [api, setApi]);
    useEffect(() => {
      if (!api) return;
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx27(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx27(
          CarouselFrame,
          {
            ref,
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
var CarouselContentFrame = styled35(XStack13, {
  display: "flex"
});
var CarouselContent = React27.forwardRef(
  ({ ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsx27(View7, { ref: carouselRef, overflow: "hidden", children: /* @__PURE__ */ jsx27(
      CarouselContentFrame,
      {
        ref,
        flexDirection: orientation === "horizontal" ? "row" : "column",
        marginTop: orientation === "horizontal" ? 0 : "-$4",
        paddingTop: orientation === "horizontal" ? 0 : "$4",
        marginLeft: orientation === "horizontal" ? "-$4" : 0,
        paddingLeft: orientation === "horizontal" ? "$4" : 0,
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
var CarouselItemFrame = styled35(YStack12, {
  minWidth: 0,
  flexShrink: 0,
  flexGrow: 0,
  flexBasis: "100%"
});
var CarouselItem = React27.forwardRef(
  ({ ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsx27(
      CarouselItemFrame,
      {
        ref,
        paddingTop: orientation === "horizontal" ? 0 : "$4",
        paddingLeft: orientation === "horizontal" ? "$4" : 0,
        role: "group",
        "aria-roledescription": "slide",
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
var ArrowLeft = () => /* @__PURE__ */ jsx27(Text14, { children: "<" });
var ArrowRight = () => /* @__PURE__ */ jsx27(Text14, { children: ">" });
var CarouselPrevious = React27.forwardRef(
  ({ variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsx27(
      Button,
      {
        ref,
        variant,
        size,
        circular: true,
        disabled: !canScrollPrev,
        onPress: scrollPrev,
        icon: ArrowLeft,
        position: "absolute",
        zIndex: 10,
        ...orientation === "horizontal" ? {
          left: "-$12",
          top: "50%",
          y: "-50%"
        } : {
          top: "-$12",
          left: "50%",
          x: "-50%",
          rotate: "90deg"
        },
        ...props
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = React27.forwardRef(
  ({ variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsx27(
      Button,
      {
        ref,
        variant,
        size,
        circular: true,
        disabled: !canScrollNext,
        onPress: scrollNext,
        icon: ArrowRight,
        position: "absolute",
        zIndex: 10,
        ...orientation === "horizontal" ? {
          right: "-$12",
          top: "50%",
          y: "-50%"
        } : {
          bottom: "-$12",
          left: "50%",
          x: "-50%",
          rotate: "90deg"
        },
        ...props
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";

// src/organisms/Command/Command.tsx
import React28 from "react";
import { Command as CommandPrimitive } from "cmdk";
import { styled as styled36, View as View8, Text as Text15 } from "tamagui";
import { jsx as jsx28, jsxs as jsxs14 } from "react/jsx-runtime";
var CommandFrame = styled36(View8, {
  name: "Command",
  flexDirection: "column",
  overflow: "hidden",
  backgroundColor: "$background",
  borderRadius: "$md",
  // We need to target the [cmdk-root] if possible, but styling the wrapper is usually enough
  width: "100%",
  height: "100%"
});
var Command = React28.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx28(CommandFrame, { ref, asChild: true, children: /* @__PURE__ */ jsx28(CommandPrimitive, { ...props }) })
);
Command.displayName = CommandPrimitive.displayName;
var CommandDialog = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx28(Dialog, { ...props, children: /* @__PURE__ */ jsx28(DialogContentComposite, { padding: 0, overflow: "hidden", maxWidth: 600, children: /* @__PURE__ */ jsx28(
    Command,
    {
      className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
      children
    }
  ) }) });
};
var CommandInputFrame = styled36(View8, {
  flexDirection: "row",
  alignItems: "center",
  borderBottomWidth: 1,
  borderBottomColor: "$borderColor",
  paddingHorizontal: "$3"
});
var SearchIcon = () => /* @__PURE__ */ jsx28(Text15, { fontSize: "$4", marginRight: "$2", children: "\u{1F50D}" });
var CommandInput = React28.forwardRef(
  ({ ...props }, ref) => /* @__PURE__ */ jsxs14(CommandInputFrame, { children: [
    /* @__PURE__ */ jsx28(SearchIcon, {}),
    /* @__PURE__ */ jsx28(
      CommandPrimitive.Input,
      {
        ref,
        style: {
          flex: 1,
          height: 44,
          fontSize: 14,
          outline: "none",
          border: "none",
          background: "transparent",
          color: "var(--color-foreground)"
          // Need to ensure colors work
        },
        ...props
      }
    )
  ] })
);
CommandInput.displayName = CommandPrimitive.Input.displayName;
var CommandListFrame = styled36(View8, {
  maxHeight: 300,
  overflowY: "auto",
  overflowX: "hidden"
});
var CommandList = React28.forwardRef(
  ({ ...props }, ref) => /* @__PURE__ */ jsx28(CommandListFrame, { ref, asChild: true, children: /* @__PURE__ */ jsx28(CommandPrimitive.List, { ...props }) })
);
CommandList.displayName = CommandPrimitive.List.displayName;
var CommandEmpty = React28.forwardRef(
  (props, ref) => /* @__PURE__ */ jsx28(
    CommandPrimitive.Empty,
    {
      ref,
      style: {
        padding: 24,
        textAlign: "center",
        fontSize: 14
      },
      ...props
    }
  )
);
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
var CommandGroupFrame = styled36(View8, {
  overflow: "hidden",
  padding: "$1"
  // Styling the label text is tricky with pure styled wrapper around Group
  // cmdk renders the label itself
});
var CommandGroup = React28.forwardRef(
  ({ heading, ...props }, ref) => /* @__PURE__ */ jsx28(CommandGroupFrame, { ref, asChild: true, children: /* @__PURE__ */ jsx28(CommandPrimitive.Group, { heading, ...props }) })
);
CommandGroup.displayName = CommandPrimitive.Group.displayName;
var CommandSeparatorFrame = styled36(View8, {
  height: 1,
  backgroundColor: "$borderColor",
  marginHorizontal: "-$1"
});
var CommandSeparator = React28.forwardRef(
  ({ ...props }, ref) => /* @__PURE__ */ jsx28(CommandSeparatorFrame, { ref, asChild: true, children: /* @__PURE__ */ jsx28(CommandPrimitive.Separator, { ...props }) })
);
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
var CommandItemFrame = styled36(View8, {
  flexDirection: "row",
  alignItems: "center",
  padding: "$2",
  borderRadius: "$sm",
  cursor: "pointer",
  // Hover/Selected styles handled by cmdk data attributes usually
  // but we can add default hover
  hoverStyle: {
    backgroundColor: "$muted"
  }
});
var CommandItem = React28.forwardRef(
  ({ ...props }, ref) => /* @__PURE__ */ jsx28(CommandItemFrame, { ref, asChild: true, children: /* @__PURE__ */ jsx28(
    CommandPrimitive.Item,
    {
      className: "aria-selected:bg-muted aria-selected:text-accent-foreground",
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
        // Styles for cmdk selection usually need CSS or classNames
      },
      ...props
    }
  ) })
);
CommandItem.displayName = CommandPrimitive.Item.displayName;
var CommandShortcut = styled36(Text15, {
  marginLeft: "auto",
  fontSize: "$2",
  color: "$mutedForeground"
});

// src/organisms/Sidebar/Sidebar.tsx
import { useState as useState6 } from "react";
import { YStack as YStack13, AnimatePresence as AnimatePresence3, useMedia } from "tamagui";
import { ChevronLeft, ChevronRight, Menu } from "@tamagui/lucide-icons";
import { jsx as jsx29, jsxs as jsxs15 } from "react/jsx-runtime";
var Sidebar = ({ children, variant = "fixed" }) => {
  const [isCollapsed, setIsCollapsed] = useState6(false);
  const media = useMedia();
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  if (media.sm) {
    return /* @__PURE__ */ jsxs15(Sheet2, { children: [
      /* @__PURE__ */ jsx29(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx29(Button, { icon: Menu, circular: true }) }),
      /* @__PURE__ */ jsx29(SheetContent, { position: "left", size: "$20", children: /* @__PURE__ */ jsx29(YStack13, { space: "$4", paddingTop: "$8", children }) })
    ] });
  }
  const desktopSidebar = /* @__PURE__ */ jsx29(AnimatePresence3, { children: /* @__PURE__ */ jsxs15(
    YStack13,
    {
      animation: "medium",
      width: isCollapsed && variant === "collapsible" ? 60 : 280,
      borderRightWidth: 1,
      borderColor: "$borderColor",
      padding: "$4",
      space: "$2",
      ...variant === "floating" && {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "$background",
        zIndex: 10
      },
      children: [
        children,
        variant === "collapsible" && /* @__PURE__ */ jsx29(
          Button,
          {
            icon: isCollapsed ? ChevronRight : ChevronLeft,
            onPress: toggleSidebar,
            circular: true,
            position: "absolute",
            top: 20,
            right: -15,
            zIndex: 20
          }
        )
      ]
    }
  ) });
  return desktopSidebar;
};

// src/organisms/Charts/BarChart.tsx
import { VictoryBar, VictoryChart, VictoryAxis, VictoryContainer } from "victory";
import { useTheme } from "tamagui";
import { jsx as jsx30, jsxs as jsxs16 } from "react/jsx-runtime";
var BarChart = ({
  data,
  xKey,
  yKey,
  color = "$primary",
  height = 300,
  width
}) => {
  const theme = useTheme();
  const barColor = theme[color]?.get() || color;
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const gridColor = theme.borderColor?.get() || "#eee";
  return /* @__PURE__ */ jsx30("div", { style: { height, width: width || "100%" }, children: /* @__PURE__ */ jsxs16(
    VictoryChart,
    {
      domainPadding: { x: 20 },
      height,
      width,
      containerComponent: /* @__PURE__ */ jsx30(VictoryContainer, { responsive: !width }),
      children: [
        /* @__PURE__ */ jsx30(
          VictoryAxis,
          {
            style: {
              axis: { stroke: axisColor },
              tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: "inherit" }
            }
          }
        ),
        /* @__PURE__ */ jsx30(
          VictoryAxis,
          {
            dependentAxis: true,
            style: {
              axis: { stroke: "transparent" },
              tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: "inherit" },
              grid: { stroke: gridColor, strokeDasharray: "4, 4" }
            }
          }
        ),
        /* @__PURE__ */ jsx30(
          VictoryBar,
          {
            data,
            x: xKey,
            y: yKey,
            style: {
              data: { fill: barColor }
            },
            cornerRadius: { top: 4 }
          }
        )
      ]
    }
  ) });
};

// src/providers/AppProviders.tsx
import { TamaguiProvider } from "tamagui";
import { PortalProvider as PortalProvider2 } from "@tamagui/portal";

// src/tamagui.config.ts
import { createTamagui, createFont as createFont2 } from "tamagui";

// ../../node_modules/.pnpm/@tamagui+constants@1.138.0_react-native@0.82.1_@babel+core@7.28.5_@types+react@18.3.26_react@18.3.1__react@18.3.1/node_modules/@tamagui/constants/dist/esm/constants.mjs
import React30, { useEffect as useEffect2, useLayoutEffect } from "react";
var IS_REACT_19 = typeof React30.use < "u";
var isWeb3 = true;
var isWindowDefined = typeof window < "u";
var isServer = isWeb3 && !isWindowDefined;
var isClient = isWeb3 && isWindowDefined;
var useIsomorphicLayoutEffect = isServer ? useEffect2 : useLayoutEffect;
var isChrome = typeof navigator < "u" && /Chrome/.test(navigator.userAgent || "");
var isWebTouchable = isClient && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
var isIos = process.env.TEST_NATIVE_PLATFORM === "ios";

// ../../node_modules/.pnpm/@tamagui+use-presence@1.138.0_react-dom@18.3.1_react@18.3.1__react-native@0.82.1_@babel+core@_5oet4udxghpyywyfh2vrvufspe/node_modules/@tamagui/use-presence/dist/esm/PresenceContext.mjs
import * as React31 from "react";
import { jsx as jsx31 } from "react/jsx-runtime";
var PresenceContext = React31.createContext(null);
var ResetPresence = (props) => {
  const parent = React31.useContext(PresenceContext);
  return /* @__PURE__ */ jsx31(PresenceContext.Provider, {
    value: props.disable ? parent : null,
    children: props.children
  });
};

// ../../node_modules/.pnpm/@tamagui+use-presence@1.138.0_react-dom@18.3.1_react@18.3.1__react-native@0.82.1_@babel+core@_5oet4udxghpyywyfh2vrvufspe/node_modules/@tamagui/use-presence/dist/esm/usePresence.mjs
import * as React32 from "react";
function usePresence() {
  const context = React32.useContext(PresenceContext);
  if (!context) return [true, null, context];
  const {
    id: id2,
    isPresent: isPresent2,
    onExitComplete,
    register
  } = context;
  return React32.useEffect(() => register(id2), []), !isPresent2 && onExitComplete ? [false, () => onExitComplete?.(id2), context] : [true, void 0, context];
}

// ../../node_modules/.pnpm/@tamagui+use-event@1.138.0_react-native@0.82.1_@babel+core@7.28.5_@types+react@18.3.26_react@18.3.1__react@18.3.1/node_modules/@tamagui/use-event/dist/esm/useGet.mjs
import * as React33 from "react";
function useGet(currentValue, initialValue, forwardToFunction) {
  const curRef = React33.useRef(initialValue ?? currentValue);
  return useIsomorphicLayoutEffect(() => {
    curRef.current = currentValue;
  }), React33.useCallback(forwardToFunction ? (...args) => curRef.current?.apply(null, args) : () => curRef.current, []);
}

// ../../node_modules/.pnpm/@tamagui+use-event@1.138.0_react-native@0.82.1_@babel+core@7.28.5_@types+react@18.3.26_react@18.3.1__react@18.3.1/node_modules/@tamagui/use-event/dist/esm/useEvent.mjs
function useEvent(callback) {
  return useGet(callback, defaultValue, true);
}
var defaultValue = () => {
  throw new Error("Cannot call an event handler while rendering.");
};

// ../../node_modules/.pnpm/@tamagui+animations-react-native@1.138.0_react-dom@18.3.1_react@18.3.1__react-native@0.82.1_@_z4rnrn5nrvapgyf2h4auel4kim/node_modules/@tamagui/animations-react-native/dist/esm/createAnimations.mjs
import React60 from "react";

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/AccessibilityUtil/isDisabled.js
var isDisabled = (props) => props.disabled || Array.isArray(props.accessibilityStates) && props.accessibilityStates.indexOf("disabled") > -1;
var isDisabled_default = isDisabled;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js
var accessibilityRoleToWebRole = {
  adjustable: "slider",
  button: "button",
  header: "heading",
  image: "img",
  imagebutton: null,
  keyboardkey: null,
  label: null,
  link: "link",
  none: "presentation",
  search: "search",
  summary: "region",
  text: null
};
var propsToAriaRole = (_ref) => {
  var accessibilityRole = _ref.accessibilityRole, role = _ref.role;
  var _role = role || accessibilityRole;
  if (_role) {
    var inferredRole = accessibilityRoleToWebRole[_role];
    if (inferredRole !== null) {
      return inferredRole || _role;
    }
  }
};
var propsToAriaRole_default = propsToAriaRole;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAccessibilityComponent.js
var roleComponents = {
  article: "article",
  banner: "header",
  blockquote: "blockquote",
  button: "button",
  code: "code",
  complementary: "aside",
  contentinfo: "footer",
  deletion: "del",
  emphasis: "em",
  figure: "figure",
  insertion: "ins",
  form: "form",
  list: "ul",
  listitem: "li",
  main: "main",
  navigation: "nav",
  paragraph: "p",
  region: "section",
  strong: "strong"
};
var emptyObject = {};
var propsToAccessibilityComponent = function propsToAccessibilityComponent2(props) {
  if (props === void 0) {
    props = emptyObject;
  }
  var roleProp = props.role || props.accessibilityRole;
  if (roleProp === "label") {
    return "label";
  }
  var role = propsToAriaRole_default(props);
  if (role) {
    if (role === "heading") {
      var level = props.accessibilityLevel || props["aria-level"];
      if (level != null) {
        return "h" + level;
      }
      return "h1";
    }
    return roleComponents[role];
  }
};
var propsToAccessibilityComponent_default = propsToAccessibilityComponent;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js
var AccessibilityUtil = {
  isDisabled: isDisabled_default,
  propsToAccessibilityComponent: propsToAccessibilityComponent_default,
  propsToAriaRole: propsToAriaRole_default
};
var AccessibilityUtil_default = AccessibilityUtil;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/createDOMProps/index.js
var import_objectSpread23 = __toESM(require_objectSpread2());
var import_objectWithoutPropertiesLoose3 = __toESM(require_objectWithoutPropertiesLoose());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/StyleSheet/index.js
var import_objectSpread22 = __toESM(require_objectSpread2());
var import_objectWithoutPropertiesLoose2 = __toESM(require_objectWithoutPropertiesLoose());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/StyleSheet/compiler/index.js
var import_objectSpread2 = __toESM(require_objectSpread2());
var import_objectWithoutPropertiesLoose = __toESM(require_objectWithoutPropertiesLoose());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/StyleSheet/compiler/unitlessNumbers.js
var unitlessNumbers = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowGap: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnGap: true,
  gridColumnStart: true,
  lineClamp: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  // transform types
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  // RN properties
  shadowOpacity: true
};
var prefixes = ["ms", "Moz", "O", "Webkit"];
var prefixKey = (prefix, key) => {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};
Object.keys(unitlessNumbers).forEach((prop) => {
  prefixes.forEach((prefix) => {
    unitlessNumbers[prefixKey(prefix, prop)] = unitlessNumbers[prop];
  });
});
var unitlessNumbers_default = unitlessNumbers;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/isWebColor/index.js
var isWebColor = (color) => color === "currentcolor" || color === "currentColor" || color === "inherit" || color.indexOf("var(") === 0;
var isWebColor_default = isWebColor;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/processColor/index.js
var import_normalize_colors = __toESM(require_normalize_colors());
var processColor = (color) => {
  if (color === void 0 || color === null) {
    return color;
  }
  var int32Color = (0, import_normalize_colors.default)(color);
  if (int32Color === void 0 || int32Color === null) {
    return void 0;
  }
  int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0;
  return int32Color;
};
var processColor_default = processColor;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/StyleSheet/compiler/normalizeColor.js
var normalizeColor2 = function normalizeColor3(color, opacity) {
  if (opacity === void 0) {
    opacity = 1;
  }
  if (color == null) return;
  if (typeof color === "string" && isWebColor_default(color)) {
    return color;
  }
  var colorInt = processColor_default(color);
  if (colorInt != null) {
    var r = colorInt >> 16 & 255;
    var g = colorInt >> 8 & 255;
    var b = colorInt & 255;
    var a = (colorInt >> 24 & 255) / 255;
    var alpha = (a * opacity).toFixed(2);
    return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
  }
};
var normalizeColor_default = normalizeColor2;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/StyleSheet/compiler/normalizeValueWithProperty.js
var colorProps = {
  backgroundColor: true,
  borderColor: true,
  borderTopColor: true,
  borderRightColor: true,
  borderBottomColor: true,
  borderLeftColor: true,
  color: true,
  shadowColor: true,
  textDecorationColor: true,
  textShadowColor: true
};
function normalizeValueWithProperty(value, property) {
  var returnValue = value;
  if ((property == null || !unitlessNumbers_default[property]) && typeof value === "number") {
    returnValue = value + "px";
  } else if (property != null && colorProps[property]) {
    returnValue = normalizeColor_default(value);
  }
  return returnValue;
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/canUseDom/index.js
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var canUseDom_default = canUseDOM;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/StyleSheet/compiler/createReactDOMStyle.js
var emptyObject2 = {};
var supportsCSS3TextDecoration = !canUseDom_default || window.CSS != null && window.CSS.supports != null && (window.CSS.supports("text-decoration-line", "none") || window.CSS.supports("-webkit-text-decoration-line", "none"));
var MONOSPACE_FONT_STACK = "monospace,monospace";
var SYSTEM_FONT_STACK = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif';
var STYLE_SHORT_FORM_EXPANSIONS = {
  borderColor: ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"],
  borderBlockColor: ["borderTopColor", "borderBottomColor"],
  borderInlineColor: ["borderRightColor", "borderLeftColor"],
  borderRadius: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
  borderStyle: ["borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle"],
  borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
  borderInlineStyle: ["borderRightStyle", "borderLeftStyle"],
  borderWidth: ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"],
  borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
  borderInlineWidth: ["borderRightWidth", "borderLeftWidth"],
  insetBlock: ["top", "bottom"],
  insetInline: ["left", "right"],
  marginBlock: ["marginTop", "marginBottom"],
  marginInline: ["marginRight", "marginLeft"],
  paddingBlock: ["paddingTop", "paddingBottom"],
  paddingInline: ["paddingRight", "paddingLeft"],
  overflow: ["overflowX", "overflowY"],
  overscrollBehavior: ["overscrollBehaviorX", "overscrollBehaviorY"],
  borderBlockStartColor: ["borderTopColor"],
  borderBlockStartStyle: ["borderTopStyle"],
  borderBlockStartWidth: ["borderTopWidth"],
  borderBlockEndColor: ["borderBottomColor"],
  borderBlockEndStyle: ["borderBottomStyle"],
  borderBlockEndWidth: ["borderBottomWidth"],
  //borderInlineStartColor: ['borderLeftColor'],
  //borderInlineStartStyle: ['borderLeftStyle'],
  //borderInlineStartWidth: ['borderLeftWidth'],
  //borderInlineEndColor: ['borderRightColor'],
  //borderInlineEndStyle: ['borderRightStyle'],
  //borderInlineEndWidth: ['borderRightWidth'],
  borderEndStartRadius: ["borderBottomLeftRadius"],
  borderEndEndRadius: ["borderBottomRightRadius"],
  borderStartStartRadius: ["borderTopLeftRadius"],
  borderStartEndRadius: ["borderTopRightRadius"],
  insetBlockEnd: ["bottom"],
  insetBlockStart: ["top"],
  //insetInlineEnd: ['right'],
  //insetInlineStart: ['left'],
  marginBlockStart: ["marginTop"],
  marginBlockEnd: ["marginBottom"],
  //marginInlineStart: ['marginLeft'],
  //marginInlineEnd: ['marginRight'],
  paddingBlockStart: ["paddingTop"],
  paddingBlockEnd: ["paddingBottom"]
  //paddingInlineStart: ['marginLeft'],
  //paddingInlineEnd: ['marginRight'],
};
var createReactDOMStyle = (style, isInline) => {
  if (!style) {
    return emptyObject2;
  }
  var resolvedStyle = {};
  var _loop = function _loop2() {
    var value = style[prop];
    if (
      // Ignore everything with a null value
      value == null
    ) {
      return "continue";
    }
    if (prop === "backgroundClip") {
      if (value === "text") {
        resolvedStyle.backgroundClip = value;
        resolvedStyle.WebkitBackgroundClip = value;
      }
    } else if (prop === "flex") {
      if (value === -1) {
        resolvedStyle.flexGrow = 0;
        resolvedStyle.flexShrink = 1;
        resolvedStyle.flexBasis = "auto";
      } else {
        resolvedStyle.flex = value;
      }
    } else if (prop === "font") {
      resolvedStyle[prop] = value.replace("System", SYSTEM_FONT_STACK);
    } else if (prop === "fontFamily") {
      if (value.indexOf("System") > -1) {
        var stack = value.split(/,\s*/);
        stack[stack.indexOf("System")] = SYSTEM_FONT_STACK;
        resolvedStyle[prop] = stack.join(",");
      } else if (value === "monospace") {
        resolvedStyle[prop] = MONOSPACE_FONT_STACK;
      } else {
        resolvedStyle[prop] = value;
      }
    } else if (prop === "textDecorationLine") {
      if (!supportsCSS3TextDecoration) {
        resolvedStyle.textDecoration = value;
      } else {
        resolvedStyle.textDecorationLine = value;
      }
    } else if (prop === "writingDirection") {
      resolvedStyle.direction = value;
    } else {
      var _value = normalizeValueWithProperty(style[prop], prop);
      var longFormProperties = STYLE_SHORT_FORM_EXPANSIONS[prop];
      if (isInline && prop === "inset") {
        if (style.insetInline == null) {
          resolvedStyle.left = _value;
          resolvedStyle.right = _value;
        }
        if (style.insetBlock == null) {
          resolvedStyle.top = _value;
          resolvedStyle.bottom = _value;
        }
      } else if (isInline && prop === "margin") {
        if (style.marginInline == null) {
          resolvedStyle.marginLeft = _value;
          resolvedStyle.marginRight = _value;
        }
        if (style.marginBlock == null) {
          resolvedStyle.marginTop = _value;
          resolvedStyle.marginBottom = _value;
        }
      } else if (isInline && prop === "padding") {
        if (style.paddingInline == null) {
          resolvedStyle.paddingLeft = _value;
          resolvedStyle.paddingRight = _value;
        }
        if (style.paddingBlock == null) {
          resolvedStyle.paddingTop = _value;
          resolvedStyle.paddingBottom = _value;
        }
      } else if (longFormProperties) {
        longFormProperties.forEach((longForm, i) => {
          if (style[longForm] == null) {
            resolvedStyle[longForm] = _value;
          }
        });
      } else {
        resolvedStyle[prop] = _value;
      }
    }
  };
  for (var prop in style) {
    var _ret = _loop();
    if (_ret === "continue") continue;
  }
  return resolvedStyle;
};
var createReactDOMStyle_default = createReactDOMStyle;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/StyleSheet/compiler/hash.js
function murmurhash2_32_gc(str, seed) {
  var l = str.length, h = seed ^ l, i = 0, k;
  while (l >= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = (k & 65535) * 1540483477 + (((k >>> 16) * 1540483477 & 65535) << 16);
    k ^= k >>> 24;
    k = (k & 65535) * 1540483477 + (((k >>> 16) * 1540483477 & 65535) << 16);
    h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16) ^ k;
    l -= 4;
    ++i;
  }
  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16);
  }
  h ^= h >>> 13;
  h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16);
  h ^= h >>> 15;
  return h >>> 0;
}
var hash = (str) => murmurhash2_32_gc(str, 1).toString(36);
var hash_default = hash;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/StyleSheet/compiler/hyphenateStyleName.js
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};
function toHyphenLower(match) {
  return "-" + match.toLowerCase();
}
function hyphenateStyleName(name) {
  if (name in cache) {
    return cache[name];
  }
  var hName = name.replace(uppercasePattern, toHyphenLower);
  return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
}
var hyphenateStyleName_default = hyphenateStyleName;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/prefixStyles/index.js
var import_createPrefixer = __toESM(require_createPrefixer());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/prefixStyles/static.js
var import_crossFade = __toESM(require_crossFade());
var import_imageSet = __toESM(require_imageSet());
var import_logical = __toESM(require_logical());
var import_position = __toESM(require_position());
var import_sizing = __toESM(require_sizing());
var import_transition = __toESM(require_transition());
var w = ["Webkit"];
var m = ["Moz"];
var wm = ["Webkit", "Moz"];
var wms = ["Webkit", "ms"];
var wmms = ["Webkit", "Moz", "ms"];
var static_default = {
  plugins: [import_crossFade.default, import_imageSet.default, import_logical.default, import_position.default, import_sizing.default, import_transition.default],
  prefixMap: {
    appearance: wmms,
    userSelect: wm,
    textEmphasisPosition: wms,
    textEmphasis: wms,
    textEmphasisStyle: wms,
    textEmphasisColor: wms,
    boxDecorationBreak: wms,
    clipPath: w,
    maskImage: wms,
    maskMode: wms,
    maskRepeat: wms,
    maskPosition: wms,
    maskClip: wms,
    maskOrigin: wms,
    maskSize: wms,
    maskComposite: wms,
    mask: wms,
    maskBorderSource: wms,
    maskBorderMode: wms,
    maskBorderSlice: wms,
    maskBorderWidth: wms,
    maskBorderOutset: wms,
    maskBorderRepeat: wms,
    maskBorder: wms,
    maskType: wms,
    textDecorationStyle: w,
    textDecorationSkip: w,
    textDecorationLine: w,
    textDecorationColor: w,
    filter: w,
    breakAfter: w,
    breakBefore: w,
    breakInside: w,
    columnCount: w,
    columnFill: w,
    columnGap: w,
    columnRule: w,
    columnRuleColor: w,
    columnRuleStyle: w,
    columnRuleWidth: w,
    columns: w,
    columnSpan: w,
    columnWidth: w,
    backdropFilter: w,
    hyphens: w,
    flowInto: w,
    flowFrom: w,
    regionFragment: w,
    textOrientation: w,
    tabSize: m,
    fontKerning: w,
    textSizeAdjust: w
  }
};

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/prefixStyles/index.js
var prefixAll = (0, import_createPrefixer.default)(static_default);
var prefixStyles_default = prefixAll;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/StyleSheet/compiler/index.js
var _excluded = ["animationKeyframes"];
var cache4 = /* @__PURE__ */ new Map();
var emptyObject3 = {};
var classicGroup = 1;
var atomicGroup = 3;
var customGroup = {
  borderColor: 2,
  borderRadius: 2,
  borderStyle: 2,
  borderWidth: 2,
  display: 2,
  flex: 2,
  inset: 2,
  margin: 2,
  overflow: 2,
  overscrollBehavior: 2,
  padding: 2,
  insetBlock: 2.1,
  insetInline: 2.1,
  marginInline: 2.1,
  marginBlock: 2.1,
  paddingInline: 2.1,
  paddingBlock: 2.1,
  borderBlockStartColor: 2.2,
  borderBlockStartStyle: 2.2,
  borderBlockStartWidth: 2.2,
  borderBlockEndColor: 2.2,
  borderBlockEndStyle: 2.2,
  borderBlockEndWidth: 2.2,
  borderInlineStartColor: 2.2,
  borderInlineStartStyle: 2.2,
  borderInlineStartWidth: 2.2,
  borderInlineEndColor: 2.2,
  borderInlineEndStyle: 2.2,
  borderInlineEndWidth: 2.2,
  borderEndStartRadius: 2.2,
  borderEndEndRadius: 2.2,
  borderStartStartRadius: 2.2,
  borderStartEndRadius: 2.2,
  insetBlockEnd: 2.2,
  insetBlockStart: 2.2,
  insetInlineEnd: 2.2,
  insetInlineStart: 2.2,
  marginBlockStart: 2.2,
  marginBlockEnd: 2.2,
  marginInlineStart: 2.2,
  marginInlineEnd: 2.2,
  paddingBlockStart: 2.2,
  paddingBlockEnd: 2.2,
  paddingInlineStart: 2.2,
  paddingInlineEnd: 2.2
};
var borderTopLeftRadius = "borderTopLeftRadius";
var borderTopRightRadius = "borderTopRightRadius";
var borderBottomLeftRadius = "borderBottomLeftRadius";
var borderBottomRightRadius = "borderBottomRightRadius";
var borderLeftColor = "borderLeftColor";
var borderLeftStyle = "borderLeftStyle";
var borderLeftWidth = "borderLeftWidth";
var borderRightColor = "borderRightColor";
var borderRightStyle = "borderRightStyle";
var borderRightWidth = "borderRightWidth";
var right = "right";
var marginLeft = "marginLeft";
var marginRight = "marginRight";
var paddingLeft = "paddingLeft";
var paddingRight = "paddingRight";
var left = "left";
var PROPERTIES_FLIP = {
  [borderTopLeftRadius]: borderTopRightRadius,
  [borderTopRightRadius]: borderTopLeftRadius,
  [borderBottomLeftRadius]: borderBottomRightRadius,
  [borderBottomRightRadius]: borderBottomLeftRadius,
  [borderLeftColor]: borderRightColor,
  [borderLeftStyle]: borderRightStyle,
  [borderLeftWidth]: borderRightWidth,
  [borderRightColor]: borderLeftColor,
  [borderRightStyle]: borderLeftStyle,
  [borderRightWidth]: borderLeftWidth,
  [left]: right,
  [marginLeft]: marginRight,
  [marginRight]: marginLeft,
  [paddingLeft]: paddingRight,
  [paddingRight]: paddingLeft,
  [right]: left
};
var PROPERTIES_I18N = {
  borderStartStartRadius: borderTopLeftRadius,
  borderStartEndRadius: borderTopRightRadius,
  borderEndStartRadius: borderBottomLeftRadius,
  borderEndEndRadius: borderBottomRightRadius,
  borderInlineStartColor: borderLeftColor,
  borderInlineStartStyle: borderLeftStyle,
  borderInlineStartWidth: borderLeftWidth,
  borderInlineEndColor: borderRightColor,
  borderInlineEndStyle: borderRightStyle,
  borderInlineEndWidth: borderRightWidth,
  insetInlineEnd: right,
  insetInlineStart: left,
  marginInlineStart: marginLeft,
  marginInlineEnd: marginRight,
  paddingInlineStart: paddingLeft,
  paddingInlineEnd: paddingRight
};
var PROPERTIES_VALUE = ["clear", "float", "textAlign"];
function atomic(style) {
  var compiledStyle = {
    $$css: true
  };
  var compiledRules = [];
  function atomicCompile(srcProp, prop, value) {
    var valueString = stringifyValueWithProperty(value, prop);
    var cacheKey = prop + valueString;
    var cachedResult = cache4.get(cacheKey);
    var identifier;
    if (cachedResult != null) {
      identifier = cachedResult[0];
      compiledRules.push(cachedResult[1]);
    } else {
      var v = srcProp !== prop ? cacheKey : valueString;
      identifier = createIdentifier("r", srcProp, v);
      var order = customGroup[srcProp] || atomicGroup;
      var rules = createAtomicRules(identifier, prop, value);
      var orderedRules = [rules, order];
      compiledRules.push(orderedRules);
      cache4.set(cacheKey, [identifier, orderedRules]);
    }
    return identifier;
  }
  Object.keys(style).sort().forEach((srcProp) => {
    var value = style[srcProp];
    if (value != null) {
      var localizeableValue;
      if (PROPERTIES_VALUE.indexOf(srcProp) > -1) {
        var _left = atomicCompile(srcProp, srcProp, "left");
        var _right = atomicCompile(srcProp, srcProp, "right");
        if (value === "start") {
          localizeableValue = [_left, _right];
        } else if (value === "end") {
          localizeableValue = [_right, _left];
        }
      }
      var propPolyfill = PROPERTIES_I18N[srcProp];
      if (propPolyfill != null) {
        var ltr = atomicCompile(srcProp, propPolyfill, value);
        var rtl = atomicCompile(srcProp, PROPERTIES_FLIP[propPolyfill], value);
        localizeableValue = [ltr, rtl];
      }
      if (srcProp === "transitionProperty") {
        var values = Array.isArray(value) ? value : [value];
        var polyfillIndices = [];
        for (var i = 0; i < values.length; i++) {
          var val = values[i];
          if (typeof val === "string" && PROPERTIES_I18N[val] != null) {
            polyfillIndices.push(i);
          }
        }
        if (polyfillIndices.length > 0) {
          var ltrPolyfillValues = [...values];
          var rtlPolyfillValues = [...values];
          polyfillIndices.forEach((i2) => {
            var ltrVal = ltrPolyfillValues[i2];
            if (typeof ltrVal === "string") {
              var ltrPolyfill = PROPERTIES_I18N[ltrVal];
              var rtlPolyfill = PROPERTIES_FLIP[ltrPolyfill];
              ltrPolyfillValues[i2] = ltrPolyfill;
              rtlPolyfillValues[i2] = rtlPolyfill;
              var _ltr = atomicCompile(srcProp, srcProp, ltrPolyfillValues);
              var _rtl = atomicCompile(srcProp, srcProp, rtlPolyfillValues);
              localizeableValue = [_ltr, _rtl];
            }
          });
        }
      }
      if (localizeableValue == null) {
        localizeableValue = atomicCompile(srcProp, srcProp, value);
      } else {
        compiledStyle["$$css$localize"] = true;
      }
      compiledStyle[srcProp] = localizeableValue;
    }
  });
  return [compiledStyle, compiledRules];
}
function classic(style, name) {
  var compiledStyle = {
    $$css: true
  };
  var compiledRules = [];
  var animationKeyframes = style.animationKeyframes, rest = (0, import_objectWithoutPropertiesLoose.default)(style, _excluded);
  var identifier = createIdentifier("css", name, JSON.stringify(style));
  var selector = "." + identifier;
  var animationName;
  if (animationKeyframes != null) {
    var _processKeyframesValu = processKeyframesValue(animationKeyframes), animationNames = _processKeyframesValu[0], keyframesRules = _processKeyframesValu[1];
    animationName = animationNames.join(",");
    compiledRules.push(...keyframesRules);
  }
  var block = createDeclarationBlock((0, import_objectSpread2.default)((0, import_objectSpread2.default)({}, rest), {}, {
    animationName
  }));
  compiledRules.push("" + selector + block);
  compiledStyle[identifier] = identifier;
  return [compiledStyle, [[compiledRules, classicGroup]]];
}
function inline(originalStyle, isRTL) {
  var style = originalStyle || emptyObject3;
  var frozenProps = {};
  var nextStyle = {};
  var _loop = function _loop2() {
    var originalValue = style[originalProp];
    var prop = originalProp;
    var value = originalValue;
    if (!Object.prototype.hasOwnProperty.call(style, originalProp) || originalValue == null) {
      return "continue";
    }
    if (PROPERTIES_VALUE.indexOf(originalProp) > -1) {
      if (originalValue === "start") {
        value = isRTL ? "right" : "left";
      } else if (originalValue === "end") {
        value = isRTL ? "left" : "right";
      }
    }
    var propPolyfill = PROPERTIES_I18N[originalProp];
    if (propPolyfill != null) {
      prop = isRTL ? PROPERTIES_FLIP[propPolyfill] : propPolyfill;
    }
    if (originalProp === "transitionProperty") {
      var originalValues = Array.isArray(originalValue) ? originalValue : [originalValue];
      originalValues.forEach((val, i) => {
        if (typeof val === "string") {
          var valuePolyfill = PROPERTIES_I18N[val];
          if (valuePolyfill != null) {
            originalValues[i] = isRTL ? PROPERTIES_FLIP[valuePolyfill] : valuePolyfill;
            value = originalValues.join(" ");
          }
        }
      });
    }
    if (!frozenProps[prop]) {
      nextStyle[prop] = value;
    }
    if (prop === originalProp) {
      frozenProps[prop] = true;
    }
  };
  for (var originalProp in style) {
    var _ret = _loop();
    if (_ret === "continue") continue;
  }
  return createReactDOMStyle_default(nextStyle, true);
}
function stringifyValueWithProperty(value, property) {
  var normalizedValue = normalizeValueWithProperty(value, property);
  return typeof normalizedValue !== "string" ? JSON.stringify(normalizedValue || "") : normalizedValue;
}
function createAtomicRules(identifier, property, value) {
  var rules = [];
  var selector = "." + identifier;
  switch (property) {
    case "animationKeyframes": {
      var _processKeyframesValu2 = processKeyframesValue(value), animationNames = _processKeyframesValu2[0], keyframesRules = _processKeyframesValu2[1];
      var block = createDeclarationBlock({
        animationName: animationNames.join(",")
      });
      rules.push("" + selector + block, ...keyframesRules);
      break;
    }
    // Equivalent to using '::placeholder'
    case "placeholderTextColor": {
      var _block = createDeclarationBlock({
        color: value,
        opacity: 1
      });
      rules.push(selector + "::-webkit-input-placeholder" + _block, selector + "::-moz-placeholder" + _block, selector + ":-ms-input-placeholder" + _block, selector + "::placeholder" + _block);
      break;
    }
    // Polyfill for additional 'pointer-events' values
    // See d13f78622b233a0afc0c7a200c0a0792c8ca9e58
    // See https://reactnative.dev/docs/view#pointerevents
    case "pointerEvents": {
      var finalValue = value;
      if (value === "auto") {
        finalValue = "auto!important";
      } else if (value === "none") {
        finalValue = "none!important";
        var _block2 = createDeclarationBlock({
          pointerEvents: "none"
        });
        rules.push(selector + ">* " + _block2);
      } else if (value === "box-none") {
        finalValue = "none!important";
        var _block3 = createDeclarationBlock({
          pointerEvents: "auto"
        });
        rules.push(selector + ">* " + _block3);
      } else if (value === "box-only") {
        finalValue = "auto!important";
        var _block4 = createDeclarationBlock({
          pointerEvents: "none"
        });
        rules.push(selector + ">* " + _block4);
      }
      var _block5 = createDeclarationBlock({
        pointerEvents: finalValue
      });
      rules.push("" + selector + _block5);
      break;
    }
    // Polyfill for draft spec
    // https://drafts.csswg.org/css-scrollbars-1/
    case "scrollbarWidth": {
      if (value === "none") {
        rules.push(selector + "::-webkit-scrollbar{display:none}");
      }
      var _block6 = createDeclarationBlock({
        scrollbarWidth: value
      });
      rules.push("" + selector + _block6);
      break;
    }
    default: {
      var _block7 = createDeclarationBlock({
        [property]: value
      });
      rules.push("" + selector + _block7);
      break;
    }
  }
  return rules;
}
function createDeclarationBlock(style) {
  var domStyle = prefixStyles_default(createReactDOMStyle_default(style));
  var declarationsString = Object.keys(domStyle).map((property) => {
    var value = domStyle[property];
    var prop = hyphenateStyleName_default(property);
    if (Array.isArray(value)) {
      return value.map((v) => prop + ":" + v).join(";");
    } else {
      return prop + ":" + value;
    }
  }).sort().join(";");
  return "{" + declarationsString + ";}";
}
function createIdentifier(prefix, name, key) {
  var hashedString = hash_default(name + key);
  return process.env.NODE_ENV !== "production" ? prefix + "-" + name + "-" + hashedString : prefix + "-" + hashedString;
}
function createKeyframes(keyframes) {
  var prefixes4 = ["-webkit-", ""];
  var identifier = createIdentifier("r", "animation", JSON.stringify(keyframes));
  var steps = "{" + Object.keys(keyframes).map((stepName) => {
    var rule = keyframes[stepName];
    var block = createDeclarationBlock(rule);
    return "" + stepName + block;
  }).join("") + "}";
  var rules = prefixes4.map((prefix) => {
    return "@" + prefix + "keyframes " + identifier + steps;
  });
  return [identifier, rules];
}
function processKeyframesValue(keyframesValue) {
  if (typeof keyframesValue === "number") {
    throw new Error("Invalid CSS keyframes type: " + typeof keyframesValue);
  }
  var animationNames = [];
  var rules = [];
  var value = Array.isArray(keyframesValue) ? keyframesValue : [keyframesValue];
  value.forEach((keyframes) => {
    if (typeof keyframes === "string") {
      animationNames.push(keyframes);
    } else {
      var _createKeyframes = createKeyframes(keyframes), identifier = _createKeyframes[0], keyframesRules = _createKeyframes[1];
      animationNames.push(identifier);
      rules.push(...keyframesRules);
    }
  });
  return [animationNames, rules];
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/StyleSheet/dom/createCSSStyleSheet.js
function createCSSStyleSheet(id2, rootNode, textContent) {
  if (canUseDom_default) {
    var root = rootNode != null ? rootNode : document;
    var element = root.getElementById(id2);
    if (element == null) {
      element = document.createElement("style");
      element.setAttribute("id", id2);
      if (typeof textContent === "string") {
        element.appendChild(document.createTextNode(textContent));
      }
      if (root instanceof ShadowRoot) {
        root.insertBefore(element, root.firstChild);
      } else {
        var head = root.head;
        if (head) {
          head.insertBefore(element, head.firstChild);
        }
      }
    }
    return element.sheet;
  } else {
    return null;
  }
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/StyleSheet/dom/createOrderedCSSStyleSheet.js
var slice = Array.prototype.slice;
function createOrderedCSSStyleSheet(sheet2) {
  var groups = {};
  var selectors = {};
  if (sheet2 != null) {
    var group;
    slice.call(sheet2.cssRules).forEach((cssRule, i) => {
      var cssText = cssRule.cssText;
      if (cssText.indexOf("stylesheet-group") > -1) {
        group = decodeGroupRule(cssRule);
        groups[group] = {
          start: i,
          rules: [cssText]
        };
      } else {
        var selectorText = getSelectorText(cssText);
        if (selectorText != null) {
          selectors[selectorText] = true;
          groups[group].rules.push(cssText);
        }
      }
    });
  }
  function sheetInsert(sheet3, group2, text) {
    var orderedGroups = getOrderedGroups(groups);
    var groupIndex = orderedGroups.indexOf(group2);
    var nextGroupIndex = groupIndex + 1;
    var nextGroup = orderedGroups[nextGroupIndex];
    var position2 = nextGroup != null && groups[nextGroup].start != null ? groups[nextGroup].start : sheet3.cssRules.length;
    var isInserted = insertRuleAt(sheet3, text, position2);
    if (isInserted) {
      if (groups[group2].start == null) {
        groups[group2].start = position2;
      }
      for (var i = nextGroupIndex; i < orderedGroups.length; i += 1) {
        var groupNumber = orderedGroups[i];
        var previousStart = groups[groupNumber].start || 0;
        groups[groupNumber].start = previousStart + 1;
      }
    }
    return isInserted;
  }
  var OrderedCSSStyleSheet = {
    /**
     * The textContent of the style sheet.
     */
    getTextContent() {
      return getOrderedGroups(groups).map((group2) => {
        var rules = groups[group2].rules;
        var marker = rules.shift();
        rules.sort();
        rules.unshift(marker);
        return rules.join("\n");
      }).join("\n");
    },
    /**
     * Insert a rule into the style sheet
     */
    insert(cssText, groupValue) {
      var group2 = Number(groupValue);
      if (groups[group2] == null) {
        var markerRule = encodeGroupRule(group2);
        groups[group2] = {
          start: null,
          rules: [markerRule]
        };
        if (sheet2 != null) {
          sheetInsert(sheet2, group2, markerRule);
        }
      }
      var selectorText = getSelectorText(cssText);
      if (selectorText != null && selectors[selectorText] == null) {
        selectors[selectorText] = true;
        groups[group2].rules.push(cssText);
        if (sheet2 != null) {
          var isInserted = sheetInsert(sheet2, group2, cssText);
          if (!isInserted) {
            groups[group2].rules.pop();
          }
        }
      }
    }
  };
  return OrderedCSSStyleSheet;
}
function encodeGroupRule(group) {
  return '[stylesheet-group="' + group + '"]{}';
}
var groupPattern = /["']/g;
function decodeGroupRule(cssRule) {
  return Number(cssRule.selectorText.split(groupPattern)[1]);
}
function getOrderedGroups(obj) {
  return Object.keys(obj).map(Number).sort((a, b) => a > b ? 1 : -1);
}
var selectorPattern = /\s*([,])\s*/g;
function getSelectorText(cssText) {
  var selector = cssText.split("{")[0].trim();
  return selector !== "" ? selector.replace(selectorPattern, "$1") : null;
}
function insertRuleAt(root, cssText, position2) {
  try {
    root.insertRule(cssText, position2);
    return true;
  } catch (e) {
    return false;
  }
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/StyleSheet/dom/index.js
var defaultId = "react-native-stylesheet";
var roots = /* @__PURE__ */ new WeakMap();
var sheets = [];
var initialRules = [
  // minimal top-level reset
  "html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}",
  "body{margin:0;}",
  // minimal form pseudo-element reset
  "button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}",
  "input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}"
];
function createSheet(root, id2) {
  if (id2 === void 0) {
    id2 = defaultId;
  }
  var sheet2;
  if (canUseDom_default) {
    var rootNode = root != null ? root.getRootNode() : document;
    if (sheets.length === 0) {
      sheet2 = createOrderedCSSStyleSheet(createCSSStyleSheet(id2));
      initialRules.forEach((rule) => {
        sheet2.insert(rule, 0);
      });
      roots.set(rootNode, sheets.length);
      sheets.push(sheet2);
    } else {
      var index = roots.get(rootNode);
      if (index == null) {
        var initialSheet = sheets[0];
        var textContent = initialSheet != null ? initialSheet.getTextContent() : "";
        sheet2 = createOrderedCSSStyleSheet(createCSSStyleSheet(id2, rootNode, textContent));
        roots.set(rootNode, sheets.length);
        sheets.push(sheet2);
      } else {
        sheet2 = sheets[index];
      }
    }
  } else {
    if (sheets.length === 0) {
      sheet2 = createOrderedCSSStyleSheet(createCSSStyleSheet(id2));
      initialRules.forEach((rule) => {
        sheet2.insert(rule, 0);
      });
      sheets.push(sheet2);
    } else {
      sheet2 = sheets[0];
    }
  }
  return {
    getTextContent() {
      return sheet2.getTextContent();
    },
    id: id2,
    insert(cssText, groupValue) {
      sheets.forEach((s) => {
        s.insert(cssText, groupValue);
      });
    }
  };
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/StyleSheet/index.js
var import_transform_localize_style = __toESM(require_transform_localize_style2());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/warnOnce/index.js
var warnedKeys = {};
function warnOnce(key, message) {
  if (process.env.NODE_ENV !== "production") {
    if (warnedKeys[key]) {
      return;
    }
    console.warn(message);
    warnedKeys[key] = true;
  }
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/StyleSheet/preprocess.js
var emptyObject4 = {};
var defaultOffset = {
  height: 0,
  width: 0
};
var createBoxShadowValue = (style) => {
  var shadowColor = style.shadowColor, shadowOffset = style.shadowOffset, shadowOpacity = style.shadowOpacity, shadowRadius = style.shadowRadius;
  var _ref = shadowOffset || defaultOffset, height = _ref.height, width = _ref.width;
  var offsetX = normalizeValueWithProperty(width);
  var offsetY = normalizeValueWithProperty(height);
  var blurRadius = normalizeValueWithProperty(shadowRadius || 0);
  var color = normalizeColor_default(shadowColor || "black", shadowOpacity);
  if (color != null && offsetX != null && offsetY != null && blurRadius != null) {
    return offsetX + " " + offsetY + " " + blurRadius + " " + color;
  }
};
var createTextShadowValue = (style) => {
  var textShadowColor = style.textShadowColor, textShadowOffset = style.textShadowOffset, textShadowRadius = style.textShadowRadius;
  var _ref2 = textShadowOffset || defaultOffset, height = _ref2.height, width = _ref2.width;
  var radius = textShadowRadius || 0;
  var offsetX = normalizeValueWithProperty(width);
  var offsetY = normalizeValueWithProperty(height);
  var blurRadius = normalizeValueWithProperty(radius);
  var color = normalizeValueWithProperty(textShadowColor, "textShadowColor");
  if (color && (height !== 0 || width !== 0 || radius !== 0) && offsetX != null && offsetY != null && blurRadius != null) {
    return offsetX + " " + offsetY + " " + blurRadius + " " + color;
  }
};
var mapBoxShadow = (boxShadow) => {
  if (typeof boxShadow === "string") {
    return boxShadow;
  }
  var offsetX = normalizeValueWithProperty(boxShadow.offsetX) || 0;
  var offsetY = normalizeValueWithProperty(boxShadow.offsetY) || 0;
  var blurRadius = normalizeValueWithProperty(boxShadow.blurRadius) || 0;
  var spreadDistance = normalizeValueWithProperty(boxShadow.spreadDistance) || 0;
  var color = normalizeColor_default(boxShadow.color) || "black";
  var position2 = boxShadow.inset ? "inset " : "";
  return "" + position2 + offsetX + " " + offsetY + " " + blurRadius + " " + spreadDistance + " " + color;
};
var createBoxShadowArrayValue = (value) => {
  return value.map(mapBoxShadow).join(", ");
};
var mapTransform = (transform) => {
  var type = Object.keys(transform)[0];
  var value = transform[type];
  if (type === "matrix" || type === "matrix3d") {
    return type + "(" + value.join(",") + ")";
  } else {
    var normalizedValue = normalizeValueWithProperty(value, type);
    return type + "(" + normalizedValue + ")";
  }
};
var createTransformValue = (value) => {
  return value.map(mapTransform).join(" ");
};
var createTransformOriginValue = (value) => {
  return value.map((v) => normalizeValueWithProperty(v)).join(" ");
};
var PROPERTIES_STANDARD = {
  borderBottomEndRadius: "borderEndEndRadius",
  borderBottomStartRadius: "borderEndStartRadius",
  borderTopEndRadius: "borderStartEndRadius",
  borderTopStartRadius: "borderStartStartRadius",
  borderEndColor: "borderInlineEndColor",
  borderEndStyle: "borderInlineEndStyle",
  borderEndWidth: "borderInlineEndWidth",
  borderStartColor: "borderInlineStartColor",
  borderStartStyle: "borderInlineStartStyle",
  borderStartWidth: "borderInlineStartWidth",
  end: "insetInlineEnd",
  marginEnd: "marginInlineEnd",
  marginHorizontal: "marginInline",
  marginStart: "marginInlineStart",
  marginVertical: "marginBlock",
  paddingEnd: "paddingInlineEnd",
  paddingHorizontal: "paddingInline",
  paddingStart: "paddingInlineStart",
  paddingVertical: "paddingBlock",
  start: "insetInlineStart"
};
var ignoredProps = {
  elevation: true,
  overlayColor: true,
  resizeMode: true,
  tintColor: true
};
var preprocess = function preprocess2(originalStyle, options) {
  if (options === void 0) {
    options = {};
  }
  var style = originalStyle || emptyObject4;
  var nextStyle = {};
  if (options.shadow === true, style.shadowColor != null || style.shadowOffset != null || style.shadowOpacity != null || style.shadowRadius != null) {
    warnOnce("shadowStyles", '"shadow*" style props are deprecated. Use "boxShadow".');
    var boxShadowValue = createBoxShadowValue(style);
    if (boxShadowValue != null) {
      nextStyle.boxShadow = boxShadowValue;
    }
  }
  if (options.textShadow === true, style.textShadowColor != null || style.textShadowOffset != null || style.textShadowRadius != null) {
    warnOnce("textShadowStyles", '"textShadow*" style props are deprecated. Use "textShadow".');
    var textShadowValue = createTextShadowValue(style);
    if (textShadowValue != null && nextStyle.textShadow == null) {
      var textShadow = style.textShadow;
      var value = textShadow ? textShadow + ", " + textShadowValue : textShadowValue;
      nextStyle.textShadow = value;
    }
  }
  for (var originalProp in style) {
    if (
      // Ignore some React Native styles
      ignoredProps[originalProp] != null || originalProp === "shadowColor" || originalProp === "shadowOffset" || originalProp === "shadowOpacity" || originalProp === "shadowRadius" || originalProp === "textShadowColor" || originalProp === "textShadowOffset" || originalProp === "textShadowRadius"
    ) {
      continue;
    }
    var originalValue = style[originalProp];
    var prop = PROPERTIES_STANDARD[originalProp] || originalProp;
    var _value = originalValue;
    if (!Object.prototype.hasOwnProperty.call(style, originalProp) || prop !== originalProp && style[prop] != null) {
      continue;
    }
    if (prop === "aspectRatio" && typeof _value === "number") {
      nextStyle[prop] = _value.toString();
    } else if (prop === "boxShadow") {
      if (Array.isArray(_value)) {
        _value = createBoxShadowArrayValue(_value);
      }
      var boxShadow = nextStyle.boxShadow;
      nextStyle.boxShadow = boxShadow ? _value + ", " + boxShadow : _value;
    } else if (prop === "fontVariant") {
      if (Array.isArray(_value) && _value.length > 0) {
        _value = _value.join(" ");
      }
      nextStyle[prop] = _value;
    } else if (prop === "textAlignVertical") {
      if (style.verticalAlign == null) {
        nextStyle.verticalAlign = _value === "center" ? "middle" : _value;
      }
    } else if (prop === "transform") {
      if (Array.isArray(_value)) {
        _value = createTransformValue(_value);
      }
      nextStyle.transform = _value;
    } else if (prop === "transformOrigin") {
      if (Array.isArray(_value)) {
        _value = createTransformOriginValue(_value);
      }
      nextStyle.transformOrigin = _value;
    } else {
      nextStyle[prop] = _value;
    }
  }
  return nextStyle;
};

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/StyleSheet/index.js
var import_styleq = __toESM(require_styleq());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/StyleSheet/validate.js
var import_postcss_value_parser = __toESM(require_lib());
var invalidShortforms = {
  background: true,
  borderBottom: true,
  borderLeft: true,
  borderRight: true,
  borderTop: true,
  font: true,
  grid: true,
  outline: true,
  textDecoration: true
};
var invalidMultiValueShortforms = {
  flex: true,
  margin: true,
  padding: true,
  borderColor: true,
  borderRadius: true,
  borderStyle: true,
  borderWidth: true,
  inset: true,
  insetBlock: true,
  insetInline: true,
  marginBlock: true,
  marginInline: true,
  marginHorizontal: true,
  marginVertical: true,
  paddingBlock: true,
  paddingInline: true,
  paddingHorizontal: true,
  paddingVertical: true,
  overflow: true,
  overscrollBehavior: true,
  backgroundPosition: true
};
function error(message) {
  console.error(message);
}
function validate(obj) {
  for (var k in obj) {
    var prop = k.trim();
    var value = obj[prop];
    var isInvalid = false;
    if (value === null) {
      continue;
    }
    if (typeof value === "string" && value.indexOf("!important") > -1) {
      error('Invalid style declaration "' + prop + ":" + value + '". Values cannot include "!important"');
      isInvalid = true;
    } else {
      var suggestion = "";
      if (prop === "animation" || prop === "animationName") {
        suggestion = 'Did you mean "animationKeyframes"?';
        isInvalid = true;
      } else if (prop === "direction") {
        suggestion = 'Did you mean "writingDirection"?';
        isInvalid = true;
      } else if (invalidShortforms[prop]) {
        suggestion = "Please use long-form properties.";
        isInvalid = true;
      } else if (invalidMultiValueShortforms[prop]) {
        if (typeof value === "string" && (0, import_postcss_value_parser.default)(value).nodes.length > 1) {
          suggestion = 'Value is "' + value + '" but only single values are supported.';
          isInvalid = true;
        }
      }
      if (suggestion !== "") {
        error('Invalid style property of "' + prop + '". ' + suggestion);
      }
    }
    if (isInvalid) {
      delete obj[k];
    }
  }
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/StyleSheet/index.js
var _excluded2 = ["writingDirection"];
var staticStyleMap = /* @__PURE__ */ new WeakMap();
var sheet = createSheet();
var defaultPreprocessOptions = {
  shadow: true,
  textShadow: true
};
function customStyleq(styles9, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, writingDirection = _options.writingDirection, preprocessOptions = (0, import_objectWithoutPropertiesLoose2.default)(_options, _excluded2);
  var isRTL = writingDirection === "rtl";
  return import_styleq.styleq.factory({
    transform(style) {
      var compiledStyle = staticStyleMap.get(style);
      if (compiledStyle != null) {
        return (0, import_transform_localize_style.localizeStyle)(compiledStyle, isRTL);
      }
      return preprocess(style, (0, import_objectSpread22.default)((0, import_objectSpread22.default)({}, defaultPreprocessOptions), preprocessOptions));
    }
  })(styles9);
}
function insertRules(compiledOrderedRules) {
  compiledOrderedRules.forEach((_ref) => {
    var rules = _ref[0], order = _ref[1];
    if (sheet != null) {
      rules.forEach((rule) => {
        sheet.insert(rule, order);
      });
    }
  });
}
function compileAndInsertAtomic(style) {
  var _atomic = atomic(preprocess(style, defaultPreprocessOptions)), compiledStyle = _atomic[0], compiledOrderedRules = _atomic[1];
  insertRules(compiledOrderedRules);
  return compiledStyle;
}
function compileAndInsertReset(style, key) {
  var _classic = classic(style, key), compiledStyle = _classic[0], compiledOrderedRules = _classic[1];
  insertRules(compiledOrderedRules);
  return compiledStyle;
}
var absoluteFillObject = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
var absoluteFill = create({
  x: (0, import_objectSpread22.default)({}, absoluteFillObject)
}).x;
function create(styles9) {
  Object.keys(styles9).forEach((key) => {
    var styleObj = styles9[key];
    if (styleObj != null && styleObj.$$css !== true) {
      var compiledStyles;
      if (key.indexOf("$raw") > -1) {
        compiledStyles = compileAndInsertReset(styleObj, key.split("$raw")[0]);
      } else {
        if (process.env.NODE_ENV !== "production") {
          validate(styleObj);
          styles9[key] = Object.freeze(styleObj);
        }
        compiledStyles = compileAndInsertAtomic(styleObj);
      }
      staticStyleMap.set(styleObj, compiledStyles);
    }
  });
  return styles9;
}
function compose(style1, style2) {
  if (process.env.NODE_ENV !== "production") {
    var len = arguments.length;
    if (len > 2) {
      var readableStyles = [...arguments].map((a) => flatten(a));
      throw new Error("StyleSheet.compose() only accepts 2 arguments, received " + len + ": " + JSON.stringify(readableStyles));
    }
  }
  return [style1, style2];
}
function flatten() {
  for (var _len = arguments.length, styles9 = new Array(_len), _key = 0; _key < _len; _key++) {
    styles9[_key] = arguments[_key];
  }
  var flatArray = styles9.flat(Infinity);
  var result = {};
  for (var i = 0; i < flatArray.length; i++) {
    var style = flatArray[i];
    if (style != null && typeof style === "object") {
      Object.assign(result, style);
    }
  }
  return result;
}
function getSheet() {
  return {
    id: sheet.id,
    textContent: sheet.getTextContent()
  };
}
function StyleSheet(styles9, options) {
  if (options === void 0) {
    options = {};
  }
  var isRTL = options.writingDirection === "rtl";
  var styleProps2 = customStyleq(styles9, options);
  if (Array.isArray(styleProps2) && styleProps2[1] != null) {
    styleProps2[1] = inline(styleProps2[1], isRTL);
  }
  return styleProps2;
}
StyleSheet.absoluteFill = absoluteFill;
StyleSheet.absoluteFillObject = absoluteFillObject;
StyleSheet.create = create;
StyleSheet.compose = compose;
StyleSheet.flatten = flatten;
StyleSheet.getSheet = getSheet;
StyleSheet.hairlineWidth = 1;
if (canUseDom_default && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = StyleSheet.flatten;
}
var stylesheet = StyleSheet;
var StyleSheet_default = stylesheet;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/createDOMProps/index.js
var _excluded3 = ["aria-activedescendant", "accessibilityActiveDescendant", "aria-atomic", "accessibilityAtomic", "aria-autocomplete", "accessibilityAutoComplete", "aria-busy", "accessibilityBusy", "aria-checked", "accessibilityChecked", "aria-colcount", "accessibilityColumnCount", "aria-colindex", "accessibilityColumnIndex", "aria-colspan", "accessibilityColumnSpan", "aria-controls", "accessibilityControls", "aria-current", "accessibilityCurrent", "aria-describedby", "accessibilityDescribedBy", "aria-details", "accessibilityDetails", "aria-disabled", "accessibilityDisabled", "aria-errormessage", "accessibilityErrorMessage", "aria-expanded", "accessibilityExpanded", "aria-flowto", "accessibilityFlowTo", "aria-haspopup", "accessibilityHasPopup", "aria-hidden", "accessibilityHidden", "aria-invalid", "accessibilityInvalid", "aria-keyshortcuts", "accessibilityKeyShortcuts", "aria-label", "accessibilityLabel", "aria-labelledby", "accessibilityLabelledBy", "aria-level", "accessibilityLevel", "aria-live", "accessibilityLiveRegion", "aria-modal", "accessibilityModal", "aria-multiline", "accessibilityMultiline", "aria-multiselectable", "accessibilityMultiSelectable", "aria-orientation", "accessibilityOrientation", "aria-owns", "accessibilityOwns", "aria-placeholder", "accessibilityPlaceholder", "aria-posinset", "accessibilityPosInSet", "aria-pressed", "accessibilityPressed", "aria-readonly", "accessibilityReadOnly", "aria-required", "accessibilityRequired", "role", "accessibilityRole", "aria-roledescription", "accessibilityRoleDescription", "aria-rowcount", "accessibilityRowCount", "aria-rowindex", "accessibilityRowIndex", "aria-rowspan", "accessibilityRowSpan", "aria-selected", "accessibilitySelected", "aria-setsize", "accessibilitySetSize", "aria-sort", "accessibilitySort", "aria-valuemax", "accessibilityValueMax", "aria-valuemin", "accessibilityValueMin", "aria-valuenow", "accessibilityValueNow", "aria-valuetext", "accessibilityValueText", "dataSet", "focusable", "id", "nativeID", "pointerEvents", "style", "tabIndex", "testID"];
var emptyObject5 = {};
var hasOwnProperty = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var uppercasePattern3 = /[A-Z]/g;
function toHyphenLower3(match) {
  return "-" + match.toLowerCase();
}
function hyphenateString(str) {
  return str.replace(uppercasePattern3, toHyphenLower3);
}
function processIDRefList(idRefList) {
  return isArray(idRefList) ? idRefList.join(" ") : idRefList;
}
var pointerEventsStyles = StyleSheet_default.create({
  auto: {
    pointerEvents: "auto"
  },
  "box-none": {
    pointerEvents: "box-none"
  },
  "box-only": {
    pointerEvents: "box-only"
  },
  none: {
    pointerEvents: "none"
  }
});
var createDOMProps = (elementType, props, options) => {
  if (!props) {
    props = emptyObject5;
  }
  var _props = props, ariaActiveDescendant = _props["aria-activedescendant"], accessibilityActiveDescendant = _props.accessibilityActiveDescendant, ariaAtomic = _props["aria-atomic"], accessibilityAtomic = _props.accessibilityAtomic, ariaAutoComplete = _props["aria-autocomplete"], accessibilityAutoComplete = _props.accessibilityAutoComplete, ariaBusy = _props["aria-busy"], accessibilityBusy = _props.accessibilityBusy, ariaChecked = _props["aria-checked"], accessibilityChecked = _props.accessibilityChecked, ariaColumnCount = _props["aria-colcount"], accessibilityColumnCount = _props.accessibilityColumnCount, ariaColumnIndex = _props["aria-colindex"], accessibilityColumnIndex = _props.accessibilityColumnIndex, ariaColumnSpan = _props["aria-colspan"], accessibilityColumnSpan = _props.accessibilityColumnSpan, ariaControls = _props["aria-controls"], accessibilityControls = _props.accessibilityControls, ariaCurrent = _props["aria-current"], accessibilityCurrent = _props.accessibilityCurrent, ariaDescribedBy = _props["aria-describedby"], accessibilityDescribedBy = _props.accessibilityDescribedBy, ariaDetails = _props["aria-details"], accessibilityDetails = _props.accessibilityDetails, ariaDisabled = _props["aria-disabled"], accessibilityDisabled = _props.accessibilityDisabled, ariaErrorMessage = _props["aria-errormessage"], accessibilityErrorMessage = _props.accessibilityErrorMessage, ariaExpanded = _props["aria-expanded"], accessibilityExpanded = _props.accessibilityExpanded, ariaFlowTo = _props["aria-flowto"], accessibilityFlowTo = _props.accessibilityFlowTo, ariaHasPopup = _props["aria-haspopup"], accessibilityHasPopup = _props.accessibilityHasPopup, ariaHidden = _props["aria-hidden"], accessibilityHidden = _props.accessibilityHidden, ariaInvalid = _props["aria-invalid"], accessibilityInvalid = _props.accessibilityInvalid, ariaKeyShortcuts = _props["aria-keyshortcuts"], accessibilityKeyShortcuts = _props.accessibilityKeyShortcuts, ariaLabel = _props["aria-label"], accessibilityLabel = _props.accessibilityLabel, ariaLabelledBy = _props["aria-labelledby"], accessibilityLabelledBy = _props.accessibilityLabelledBy, ariaLevel = _props["aria-level"], accessibilityLevel = _props.accessibilityLevel, ariaLive = _props["aria-live"], accessibilityLiveRegion = _props.accessibilityLiveRegion, ariaModal = _props["aria-modal"], accessibilityModal = _props.accessibilityModal, ariaMultiline = _props["aria-multiline"], accessibilityMultiline = _props.accessibilityMultiline, ariaMultiSelectable = _props["aria-multiselectable"], accessibilityMultiSelectable = _props.accessibilityMultiSelectable, ariaOrientation = _props["aria-orientation"], accessibilityOrientation = _props.accessibilityOrientation, ariaOwns = _props["aria-owns"], accessibilityOwns = _props.accessibilityOwns, ariaPlaceholder = _props["aria-placeholder"], accessibilityPlaceholder = _props.accessibilityPlaceholder, ariaPosInSet = _props["aria-posinset"], accessibilityPosInSet = _props.accessibilityPosInSet, ariaPressed = _props["aria-pressed"], accessibilityPressed = _props.accessibilityPressed, ariaReadOnly = _props["aria-readonly"], accessibilityReadOnly = _props.accessibilityReadOnly, ariaRequired = _props["aria-required"], accessibilityRequired = _props.accessibilityRequired, ariaRole = _props.role, accessibilityRole = _props.accessibilityRole, ariaRoleDescription = _props["aria-roledescription"], accessibilityRoleDescription = _props.accessibilityRoleDescription, ariaRowCount = _props["aria-rowcount"], accessibilityRowCount = _props.accessibilityRowCount, ariaRowIndex = _props["aria-rowindex"], accessibilityRowIndex = _props.accessibilityRowIndex, ariaRowSpan = _props["aria-rowspan"], accessibilityRowSpan = _props.accessibilityRowSpan, ariaSelected = _props["aria-selected"], accessibilitySelected = _props.accessibilitySelected, ariaSetSize = _props["aria-setsize"], accessibilitySetSize = _props.accessibilitySetSize, ariaSort = _props["aria-sort"], accessibilitySort = _props.accessibilitySort, ariaValueMax = _props["aria-valuemax"], accessibilityValueMax = _props.accessibilityValueMax, ariaValueMin = _props["aria-valuemin"], accessibilityValueMin = _props.accessibilityValueMin, ariaValueNow = _props["aria-valuenow"], accessibilityValueNow = _props.accessibilityValueNow, ariaValueText = _props["aria-valuetext"], accessibilityValueText = _props.accessibilityValueText, dataSet = _props.dataSet, focusable = _props.focusable, id2 = _props.id, nativeID = _props.nativeID, pointerEvents = _props.pointerEvents, style = _props.style, tabIndex = _props.tabIndex, testID = _props.testID, domProps = (0, import_objectWithoutPropertiesLoose3.default)(_props, _excluded3);
  var disabled = ariaDisabled || accessibilityDisabled;
  var role = AccessibilityUtil_default.propsToAriaRole(props);
  var _ariaActiveDescendant = ariaActiveDescendant != null ? ariaActiveDescendant : accessibilityActiveDescendant;
  if (_ariaActiveDescendant != null) {
    domProps["aria-activedescendant"] = _ariaActiveDescendant;
  }
  var _ariaAtomic = ariaAtomic != null ? ariaActiveDescendant : accessibilityAtomic;
  if (_ariaAtomic != null) {
    domProps["aria-atomic"] = _ariaAtomic;
  }
  var _ariaAutoComplete = ariaAutoComplete != null ? ariaAutoComplete : accessibilityAutoComplete;
  if (_ariaAutoComplete != null) {
    domProps["aria-autocomplete"] = _ariaAutoComplete;
  }
  var _ariaBusy = ariaBusy != null ? ariaBusy : accessibilityBusy;
  if (_ariaBusy != null) {
    domProps["aria-busy"] = _ariaBusy;
  }
  var _ariaChecked = ariaChecked != null ? ariaChecked : accessibilityChecked;
  if (_ariaChecked != null) {
    domProps["aria-checked"] = _ariaChecked;
  }
  var _ariaColumnCount = ariaColumnCount != null ? ariaColumnCount : accessibilityColumnCount;
  if (_ariaColumnCount != null) {
    domProps["aria-colcount"] = _ariaColumnCount;
  }
  var _ariaColumnIndex = ariaColumnIndex != null ? ariaColumnIndex : accessibilityColumnIndex;
  if (_ariaColumnIndex != null) {
    domProps["aria-colindex"] = _ariaColumnIndex;
  }
  var _ariaColumnSpan = ariaColumnSpan != null ? ariaColumnSpan : accessibilityColumnSpan;
  if (_ariaColumnSpan != null) {
    domProps["aria-colspan"] = _ariaColumnSpan;
  }
  var _ariaControls = ariaControls != null ? ariaControls : accessibilityControls;
  if (_ariaControls != null) {
    domProps["aria-controls"] = processIDRefList(_ariaControls);
  }
  var _ariaCurrent = ariaCurrent != null ? ariaCurrent : accessibilityCurrent;
  if (_ariaCurrent != null) {
    domProps["aria-current"] = _ariaCurrent;
  }
  var _ariaDescribedBy = ariaDescribedBy != null ? ariaDescribedBy : accessibilityDescribedBy;
  if (_ariaDescribedBy != null) {
    domProps["aria-describedby"] = processIDRefList(_ariaDescribedBy);
  }
  var _ariaDetails = ariaDetails != null ? ariaDetails : accessibilityDetails;
  if (_ariaDetails != null) {
    domProps["aria-details"] = _ariaDetails;
  }
  if (disabled === true) {
    domProps["aria-disabled"] = true;
    if (elementType === "button" || elementType === "form" || elementType === "input" || elementType === "select" || elementType === "textarea") {
      domProps.disabled = true;
    }
  }
  var _ariaErrorMessage = ariaErrorMessage != null ? ariaErrorMessage : accessibilityErrorMessage;
  if (_ariaErrorMessage != null) {
    domProps["aria-errormessage"] = _ariaErrorMessage;
  }
  var _ariaExpanded = ariaExpanded != null ? ariaExpanded : accessibilityExpanded;
  if (_ariaExpanded != null) {
    domProps["aria-expanded"] = _ariaExpanded;
  }
  var _ariaFlowTo = ariaFlowTo != null ? ariaFlowTo : accessibilityFlowTo;
  if (_ariaFlowTo != null) {
    domProps["aria-flowto"] = processIDRefList(_ariaFlowTo);
  }
  var _ariaHasPopup = ariaHasPopup != null ? ariaHasPopup : accessibilityHasPopup;
  if (_ariaHasPopup != null) {
    domProps["aria-haspopup"] = _ariaHasPopup;
  }
  var _ariaHidden = ariaHidden != null ? ariaHidden : accessibilityHidden;
  if (_ariaHidden === true) {
    domProps["aria-hidden"] = _ariaHidden;
  }
  var _ariaInvalid = ariaInvalid != null ? ariaInvalid : accessibilityInvalid;
  if (_ariaInvalid != null) {
    domProps["aria-invalid"] = _ariaInvalid;
  }
  var _ariaKeyShortcuts = ariaKeyShortcuts != null ? ariaKeyShortcuts : accessibilityKeyShortcuts;
  if (_ariaKeyShortcuts != null) {
    domProps["aria-keyshortcuts"] = processIDRefList(_ariaKeyShortcuts);
  }
  var _ariaLabel = ariaLabel != null ? ariaLabel : accessibilityLabel;
  if (_ariaLabel != null) {
    domProps["aria-label"] = _ariaLabel;
  }
  var _ariaLabelledBy = ariaLabelledBy != null ? ariaLabelledBy : accessibilityLabelledBy;
  if (_ariaLabelledBy != null) {
    domProps["aria-labelledby"] = processIDRefList(_ariaLabelledBy);
  }
  var _ariaLevel = ariaLevel != null ? ariaLevel : accessibilityLevel;
  if (_ariaLevel != null) {
    domProps["aria-level"] = _ariaLevel;
  }
  var _ariaLive = ariaLive != null ? ariaLive : accessibilityLiveRegion;
  if (_ariaLive != null) {
    domProps["aria-live"] = _ariaLive === "none" ? "off" : _ariaLive;
  }
  var _ariaModal = ariaModal != null ? ariaModal : accessibilityModal;
  if (_ariaModal != null) {
    domProps["aria-modal"] = _ariaModal;
  }
  var _ariaMultiline = ariaMultiline != null ? ariaMultiline : accessibilityMultiline;
  if (_ariaMultiline != null) {
    domProps["aria-multiline"] = _ariaMultiline;
  }
  var _ariaMultiSelectable = ariaMultiSelectable != null ? ariaMultiSelectable : accessibilityMultiSelectable;
  if (_ariaMultiSelectable != null) {
    domProps["aria-multiselectable"] = _ariaMultiSelectable;
  }
  var _ariaOrientation = ariaOrientation != null ? ariaOrientation : accessibilityOrientation;
  if (_ariaOrientation != null) {
    domProps["aria-orientation"] = _ariaOrientation;
  }
  var _ariaOwns = ariaOwns != null ? ariaOwns : accessibilityOwns;
  if (_ariaOwns != null) {
    domProps["aria-owns"] = processIDRefList(_ariaOwns);
  }
  var _ariaPlaceholder = ariaPlaceholder != null ? ariaPlaceholder : accessibilityPlaceholder;
  if (_ariaPlaceholder != null) {
    domProps["aria-placeholder"] = _ariaPlaceholder;
  }
  var _ariaPosInSet = ariaPosInSet != null ? ariaPosInSet : accessibilityPosInSet;
  if (_ariaPosInSet != null) {
    domProps["aria-posinset"] = _ariaPosInSet;
  }
  var _ariaPressed = ariaPressed != null ? ariaPressed : accessibilityPressed;
  if (_ariaPressed != null) {
    domProps["aria-pressed"] = _ariaPressed;
  }
  var _ariaReadOnly = ariaReadOnly != null ? ariaReadOnly : accessibilityReadOnly;
  if (_ariaReadOnly != null) {
    domProps["aria-readonly"] = _ariaReadOnly;
    if (elementType === "input" || elementType === "select" || elementType === "textarea") {
      domProps.readOnly = true;
    }
  }
  var _ariaRequired = ariaRequired != null ? ariaRequired : accessibilityRequired;
  if (_ariaRequired != null) {
    domProps["aria-required"] = _ariaRequired;
    if (elementType === "input" || elementType === "select" || elementType === "textarea") {
      domProps.required = accessibilityRequired;
    }
  }
  if (role != null) {
    domProps["role"] = role === "none" ? "presentation" : role;
  }
  var _ariaRoleDescription = ariaRoleDescription != null ? ariaRoleDescription : accessibilityRoleDescription;
  if (_ariaRoleDescription != null) {
    domProps["aria-roledescription"] = _ariaRoleDescription;
  }
  var _ariaRowCount = ariaRowCount != null ? ariaRowCount : accessibilityRowCount;
  if (_ariaRowCount != null) {
    domProps["aria-rowcount"] = _ariaRowCount;
  }
  var _ariaRowIndex = ariaRowIndex != null ? ariaRowIndex : accessibilityRowIndex;
  if (_ariaRowIndex != null) {
    domProps["aria-rowindex"] = _ariaRowIndex;
  }
  var _ariaRowSpan = ariaRowSpan != null ? ariaRowSpan : accessibilityRowSpan;
  if (_ariaRowSpan != null) {
    domProps["aria-rowspan"] = _ariaRowSpan;
  }
  var _ariaSelected = ariaSelected != null ? ariaSelected : accessibilitySelected;
  if (_ariaSelected != null) {
    domProps["aria-selected"] = _ariaSelected;
  }
  var _ariaSetSize = ariaSetSize != null ? ariaSetSize : accessibilitySetSize;
  if (_ariaSetSize != null) {
    domProps["aria-setsize"] = _ariaSetSize;
  }
  var _ariaSort = ariaSort != null ? ariaSort : accessibilitySort;
  if (_ariaSort != null) {
    domProps["aria-sort"] = _ariaSort;
  }
  var _ariaValueMax = ariaValueMax != null ? ariaValueMax : accessibilityValueMax;
  if (_ariaValueMax != null) {
    domProps["aria-valuemax"] = _ariaValueMax;
  }
  var _ariaValueMin = ariaValueMin != null ? ariaValueMin : accessibilityValueMin;
  if (_ariaValueMin != null) {
    domProps["aria-valuemin"] = _ariaValueMin;
  }
  var _ariaValueNow = ariaValueNow != null ? ariaValueNow : accessibilityValueNow;
  if (_ariaValueNow != null) {
    domProps["aria-valuenow"] = _ariaValueNow;
  }
  var _ariaValueText = ariaValueText != null ? ariaValueText : accessibilityValueText;
  if (_ariaValueText != null) {
    domProps["aria-valuetext"] = _ariaValueText;
  }
  if (dataSet != null) {
    for (var dataProp in dataSet) {
      if (hasOwnProperty.call(dataSet, dataProp)) {
        var dataName = hyphenateString(dataProp);
        var dataValue = dataSet[dataProp];
        if (dataValue != null) {
          domProps["data-" + dataName] = dataValue;
        }
      }
    }
  }
  if (tabIndex === 0 || tabIndex === "0" || tabIndex === -1 || tabIndex === "-1") {
    domProps.tabIndex = tabIndex;
  } else {
    if (focusable === false) {
      domProps.tabIndex = "-1";
    }
    if (
      // These native elements are keyboard focusable by default
      elementType === "a" || elementType === "button" || elementType === "input" || elementType === "select" || elementType === "textarea"
    ) {
      if (focusable === false || accessibilityDisabled === true) {
        domProps.tabIndex = "-1";
      }
    } else if (
      // These roles are made keyboard focusable by default
      role === "button" || role === "checkbox" || role === "link" || role === "radio" || role === "textbox" || role === "switch"
    ) {
      if (focusable !== false) {
        domProps.tabIndex = "0";
      }
    } else {
      if (focusable === true) {
        domProps.tabIndex = "0";
      }
    }
  }
  if (pointerEvents != null) {
    warnOnce("pointerEvents", "props.pointerEvents is deprecated. Use style.pointerEvents");
  }
  var _StyleSheet = StyleSheet_default([style, pointerEvents && pointerEventsStyles[pointerEvents]], (0, import_objectSpread23.default)({
    writingDirection: "ltr"
  }, options)), className = _StyleSheet[0], inlineStyle = _StyleSheet[1];
  if (className) {
    domProps.className = className;
  }
  if (inlineStyle) {
    domProps.style = inlineStyle;
  }
  var _id = id2 != null ? id2 : nativeID;
  if (_id != null) {
    domProps.id = _id;
  }
  if (testID != null) {
    domProps["data-testid"] = testID;
  }
  if (domProps.type == null && elementType === "button") {
    domProps.type = "button";
  }
  return domProps;
};
var createDOMProps_default = createDOMProps;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/createElement/index.js
import React35 from "react";

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/useLocale/index.js
import React34, { createContext as createContext4, useContext as useContext5 } from "react";

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/useLocale/isLocaleRTL.js
var rtlScripts = /* @__PURE__ */ new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]);
var rtlLangs = /* @__PURE__ */ new Set([
  "ae",
  // Avestan
  "ar",
  // Arabic
  "arc",
  // Aramaic
  "bcc",
  // Southern Balochi
  "bqi",
  // Bakthiari
  "ckb",
  // Sorani
  "dv",
  // Dhivehi
  "fa",
  "far",
  // Persian
  "glk",
  // Gilaki
  "he",
  "iw",
  // Hebrew
  "khw",
  // Khowar
  "ks",
  // Kashmiri
  "ku",
  // Kurdish
  "mzn",
  // Mazanderani
  "nqo",
  // N'Ko
  "pnb",
  // Western Punjabi
  "ps",
  // Pashto
  "sd",
  // Sindhi
  "ug",
  // Uyghur
  "ur",
  // Urdu
  "yi"
  // Yiddish
]);
var cache5 = /* @__PURE__ */ new Map();
function isLocaleRTL(locale) {
  var cachedRTL = cache5.get(locale);
  if (cachedRTL) {
    return cachedRTL;
  }
  var isRTL = false;
  if (Intl.Locale) {
    try {
      var script = new Intl.Locale(locale).maximize().script;
      isRTL = rtlScripts.has(script);
    } catch (_unused) {
      var lang = locale.split("-")[0];
      isRTL = rtlLangs.has(lang);
    }
  } else {
    var _lang = locale.split("-")[0];
    isRTL = rtlLangs.has(_lang);
  }
  cache5.set(locale, isRTL);
  return isRTL;
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/useLocale/index.js
var defaultLocale = {
  direction: "ltr",
  locale: "en-US"
};
var LocaleContext = /* @__PURE__ */ createContext4(defaultLocale);
function getLocaleDirection(locale) {
  return isLocaleRTL(locale) ? "rtl" : "ltr";
}
function LocaleProvider(props) {
  var direction = props.direction, locale = props.locale, children = props.children;
  var needsContext = direction || locale;
  return needsContext ? /* @__PURE__ */ React34.createElement(LocaleContext.Provider, {
    children,
    value: {
      direction: locale ? getLocaleDirection(locale) : direction,
      locale
    }
  }) : children;
}
function useLocaleContext() {
  return useContext5(LocaleContext);
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/createElement/index.js
var createElement = (component, props, options) => {
  var accessibilityComponent;
  if (component && component.constructor === String) {
    accessibilityComponent = AccessibilityUtil_default.propsToAccessibilityComponent(props);
  }
  var Component2 = accessibilityComponent || component;
  var domProps = createDOMProps_default(Component2, props, options);
  var element = /* @__PURE__ */ React35.createElement(Component2, domProps);
  var elementWithLocaleProvider = domProps.dir ? /* @__PURE__ */ React35.createElement(LocaleProvider, {
    children: element,
    direction: domProps.dir,
    locale: domProps.lang
  }) : element;
  return elementWithLocaleProvider;
};
var createElement_default = createElement;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js
var getBoundingClientRect = (node) => {
  if (node != null) {
    var isElement = node.nodeType === 1;
    if (isElement && typeof node.getBoundingClientRect === "function") {
      return node.getBoundingClientRect();
    }
  }
};
var getBoundingClientRect_default = getBoundingClientRect;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/unitlessNumbers/index.js
var unitlessNumbers2 = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowGap: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnGap: true,
  gridColumnStart: true,
  lineClamp: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  // transform types
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  // RN properties
  shadowOpacity: true
};
var prefixes3 = ["ms", "Moz", "O", "Webkit"];
var prefixKey2 = (prefix, key) => {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};
Object.keys(unitlessNumbers2).forEach((prop) => {
  prefixes3.forEach((prefix) => {
    unitlessNumbers2[prefixKey2(prefix, prop)] = unitlessNumbers2[prop];
  });
});
var unitlessNumbers_default2 = unitlessNumbers2;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/setValueForStyles/dangerousStyleValue.js
function dangerousStyleValue(name, value, isCustomProperty) {
  var isEmpty = value == null || typeof value === "boolean" || value === "";
  if (isEmpty) {
    return "";
  }
  if (!isCustomProperty && typeof value === "number" && value !== 0 && !(unitlessNumbers_default2.hasOwnProperty(name) && unitlessNumbers_default2[name])) {
    return value + "px";
  }
  return ("" + value).trim();
}
var dangerousStyleValue_default = dangerousStyleValue;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/setValueForStyles/index.js
function setValueForStyles(node, styles9) {
  var style = node.style;
  for (var styleName in styles9) {
    if (!styles9.hasOwnProperty(styleName)) {
      continue;
    }
    var isCustomProperty = styleName.indexOf("--") === 0;
    var styleValue = dangerousStyleValue_default(styleName, styles9[styleName], isCustomProperty);
    if (styleName === "float") {
      styleName = "cssFloat";
    }
    if (isCustomProperty) {
      style.setProperty(styleName, styleValue);
    } else {
      style[styleName] = styleValue;
    }
  }
}
var setValueForStyles_default = setValueForStyles;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/UIManager/index.js
var getRect = (node) => {
  var height = node.offsetHeight;
  var width = node.offsetWidth;
  var left2 = node.offsetLeft;
  var top = node.offsetTop;
  node = node.offsetParent;
  while (node && node.nodeType === 1) {
    left2 += node.offsetLeft + node.clientLeft - node.scrollLeft;
    top += node.offsetTop + node.clientTop - node.scrollTop;
    node = node.offsetParent;
  }
  top -= window.scrollY;
  left2 -= window.scrollX;
  return {
    width,
    height,
    top,
    left: left2
  };
};
var measureLayout = (node, relativeToNativeNode, callback) => {
  var relativeNode = relativeToNativeNode || node && node.parentNode;
  if (node && relativeNode) {
    setTimeout(() => {
      if (node.isConnected && relativeNode.isConnected) {
        var relativeRect = getRect(relativeNode);
        var _getRect = getRect(node), height = _getRect.height, left2 = _getRect.left, top = _getRect.top, width = _getRect.width;
        var x = left2 - relativeRect.left;
        var y = top - relativeRect.top;
        callback(x, y, width, height, left2, top);
      }
    }, 0);
  }
};
var elementsToIgnore = {
  A: true,
  BODY: true,
  INPUT: true,
  SELECT: true,
  TEXTAREA: true
};
var UIManager = {
  blur(node) {
    try {
      node.blur();
    } catch (err) {
    }
  },
  focus(node) {
    try {
      var name = node.nodeName;
      if (node.getAttribute("tabIndex") == null && node.isContentEditable !== true && elementsToIgnore[name] == null) {
        node.setAttribute("tabIndex", "-1");
      }
      node.focus();
    } catch (err) {
    }
  },
  measure(node, callback) {
    measureLayout(node, null, callback);
  },
  measureInWindow(node, callback) {
    if (node) {
      setTimeout(() => {
        var _getBoundingClientRec = getBoundingClientRect_default(node), height = _getBoundingClientRec.height, left2 = _getBoundingClientRec.left, top = _getBoundingClientRec.top, width = _getBoundingClientRec.width;
        callback(left2, top, width, height);
      }, 0);
    }
  },
  measureLayout(node, relativeToNativeNode, onFail, onSuccess) {
    measureLayout(node, relativeToNativeNode, onSuccess);
  },
  updateView(node, props) {
    for (var prop in props) {
      if (!Object.prototype.hasOwnProperty.call(props, prop)) {
        continue;
      }
      var value = props[prop];
      switch (prop) {
        case "style": {
          setValueForStyles_default(node, value);
          break;
        }
        case "class":
        case "className": {
          node.setAttribute("class", value);
          break;
        }
        case "text":
        case "value":
          node.value = value;
          break;
        default:
          node.setAttribute(prop, value);
      }
    }
  },
  configureNextLayoutAnimation(config2, onAnimationDidEnd) {
    onAnimationDidEnd();
  },
  // mocks
  setLayoutAnimationEnabledExperimental() {
  }
};
var UIManager_default = UIManager;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/Animated.js
var import_objectSpread223 = __toESM(require_objectSpread2());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/Platform/index.js
var Platform = {
  OS: "web",
  select: (obj) => "web" in obj ? obj.web : obj.default,
  get isTesting() {
    if (process.env.NODE_ENV === "test") {
      return true;
    }
    return false;
  },
  get Version() {
    return "0.0.0";
  }
};
var Platform_default = Platform;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/components/AnimatedFlatList.js
var import_extends7 = __toESM(require_extends());
import * as React50 from "react";

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/FlatList/index.js
var import_extends5 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose8 = __toESM(require_objectWithoutPropertiesLoose());
var import_objectSpread212 = __toESM(require_objectSpread2());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/View/index.js
var import_objectWithoutPropertiesLoose4 = __toESM(require_objectWithoutPropertiesLoose());
import * as React40 from "react";

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/forwardedProps/index.js
var defaultProps = {
  children: true,
  dataSet: true,
  dir: true,
  id: true,
  ref: true,
  suppressHydrationWarning: true,
  tabIndex: true,
  testID: true,
  // @deprecated
  focusable: true,
  nativeID: true
};
var accessibilityProps = {
  "aria-activedescendant": true,
  "aria-atomic": true,
  "aria-autocomplete": true,
  "aria-busy": true,
  "aria-checked": true,
  "aria-colcount": true,
  "aria-colindex": true,
  "aria-colspan": true,
  "aria-controls": true,
  "aria-current": true,
  "aria-describedby": true,
  "aria-details": true,
  "aria-disabled": true,
  "aria-errormessage": true,
  "aria-expanded": true,
  "aria-flowto": true,
  "aria-haspopup": true,
  "aria-hidden": true,
  "aria-invalid": true,
  "aria-keyshortcuts": true,
  "aria-label": true,
  "aria-labelledby": true,
  "aria-level": true,
  "aria-live": true,
  "aria-modal": true,
  "aria-multiline": true,
  "aria-multiselectable": true,
  "aria-orientation": true,
  "aria-owns": true,
  "aria-placeholder": true,
  "aria-posinset": true,
  "aria-pressed": true,
  "aria-readonly": true,
  "aria-required": true,
  inert: true,
  role: true,
  "aria-roledescription": true,
  "aria-rowcount": true,
  "aria-rowindex": true,
  "aria-rowspan": true,
  "aria-selected": true,
  "aria-setsize": true,
  "aria-sort": true,
  "aria-valuemax": true,
  "aria-valuemin": true,
  "aria-valuenow": true,
  "aria-valuetext": true,
  // @deprecated
  accessibilityActiveDescendant: true,
  accessibilityAtomic: true,
  accessibilityAutoComplete: true,
  accessibilityBusy: true,
  accessibilityChecked: true,
  accessibilityColumnCount: true,
  accessibilityColumnIndex: true,
  accessibilityColumnSpan: true,
  accessibilityControls: true,
  accessibilityCurrent: true,
  accessibilityDescribedBy: true,
  accessibilityDetails: true,
  accessibilityDisabled: true,
  accessibilityErrorMessage: true,
  accessibilityExpanded: true,
  accessibilityFlowTo: true,
  accessibilityHasPopup: true,
  accessibilityHidden: true,
  accessibilityInvalid: true,
  accessibilityKeyShortcuts: true,
  accessibilityLabel: true,
  accessibilityLabelledBy: true,
  accessibilityLevel: true,
  accessibilityLiveRegion: true,
  accessibilityModal: true,
  accessibilityMultiline: true,
  accessibilityMultiSelectable: true,
  accessibilityOrientation: true,
  accessibilityOwns: true,
  accessibilityPlaceholder: true,
  accessibilityPosInSet: true,
  accessibilityPressed: true,
  accessibilityReadOnly: true,
  accessibilityRequired: true,
  accessibilityRole: true,
  accessibilityRoleDescription: true,
  accessibilityRowCount: true,
  accessibilityRowIndex: true,
  accessibilityRowSpan: true,
  accessibilitySelected: true,
  accessibilitySetSize: true,
  accessibilitySort: true,
  accessibilityValueMax: true,
  accessibilityValueMin: true,
  accessibilityValueNow: true,
  accessibilityValueText: true
};
var clickProps = {
  onClick: true,
  onAuxClick: true,
  onContextMenu: true,
  onGotPointerCapture: true,
  onLostPointerCapture: true,
  onPointerCancel: true,
  onPointerDown: true,
  onPointerEnter: true,
  onPointerMove: true,
  onPointerLeave: true,
  onPointerOut: true,
  onPointerOver: true,
  onPointerUp: true
};
var focusProps = {
  onBlur: true,
  onFocus: true
};
var keyboardProps = {
  onKeyDown: true,
  onKeyDownCapture: true,
  onKeyUp: true,
  onKeyUpCapture: true
};
var mouseProps = {
  onMouseDown: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseOver: true,
  onMouseOut: true,
  onMouseUp: true
};
var touchProps = {
  onTouchCancel: true,
  onTouchCancelCapture: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchMoveCapture: true,
  onTouchStart: true,
  onTouchStartCapture: true
};
var styleProps = {
  style: true
};

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/pick/index.js
function pick(obj, list) {
  var nextObj = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (list[key] === true) {
        nextObj[key] = obj[key];
      }
    }
  }
  return nextObj;
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/useLayoutEffect/index.js
import { useEffect as useEffect4, useLayoutEffect as useLayoutEffect2 } from "react";
var useLayoutEffectImpl = canUseDom_default ? useLayoutEffect2 : useEffect4;
var useLayoutEffect_default = useLayoutEffectImpl;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/useElementLayout/index.js
var DOM_LAYOUT_HANDLER_NAME = "__reactLayoutHandler";
var didWarn = !canUseDom_default;
var resizeObserver = null;
function getResizeObserver() {
  if (canUseDom_default && typeof window.ResizeObserver !== "undefined") {
    if (resizeObserver == null) {
      resizeObserver = new window.ResizeObserver(function(entries) {
        entries.forEach((entry) => {
          var node = entry.target;
          var onLayout = node[DOM_LAYOUT_HANDLER_NAME];
          if (typeof onLayout === "function") {
            UIManager_default.measure(node, (x, y, width, height, left2, top) => {
              var event3 = {
                // $FlowFixMe
                nativeEvent: {
                  layout: {
                    x,
                    y,
                    width,
                    height,
                    left: left2,
                    top
                  }
                },
                timeStamp: Date.now()
              };
              Object.defineProperty(event3.nativeEvent, "target", {
                enumerable: true,
                get: () => entry.target
              });
              onLayout(event3);
            });
          }
        });
      });
    }
  } else if (!didWarn) {
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test") {
      console.warn("onLayout relies on ResizeObserver which is not supported by your browser. Please include a polyfill, e.g., https://github.com/que-etc/resize-observer-polyfill.");
      didWarn = true;
    }
  }
  return resizeObserver;
}
function useElementLayout(ref, onLayout) {
  var observer = getResizeObserver();
  useLayoutEffect_default(() => {
    var node = ref.current;
    if (node != null) {
      node[DOM_LAYOUT_HANDLER_NAME] = onLayout;
    }
  }, [ref, onLayout]);
  useLayoutEffect_default(() => {
    var node = ref.current;
    if (node != null && observer != null) {
      if (typeof node[DOM_LAYOUT_HANDLER_NAME] === "function") {
        observer.observe(node);
      } else {
        observer.unobserve(node);
      }
    }
    return () => {
      if (node != null && observer != null) {
        observer.unobserve(node);
      }
    };
  }, [ref, observer]);
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/useMergeRefs/index.js
import * as React37 from "react";

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/mergeRefs/index.js
import * as React36 from "react";
function mergeRefs() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return function forwardRef10(node) {
    args.forEach((ref) => {
      if (ref == null) {
        return;
      }
      if (typeof ref === "function") {
        ref(node);
        return;
      }
      if (typeof ref === "object") {
        ref.current = node;
        return;
      }
      console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref " + String(ref));
    });
  };
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/useMergeRefs/index.js
function useMergeRefs() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return React37.useMemo(
    () => mergeRefs(...args),
    // eslint-disable-next-line
    [...args]
  );
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/useStable/index.js
import * as React38 from "react";
var UNINITIALIZED = typeof Symbol === "function" && typeof Symbol() === "symbol" ? Symbol() : Object.freeze({});
function useStable(getInitialValue) {
  var ref = React38.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = getInitialValue();
  }
  return ref.current;
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/usePlatformMethods/index.js
function usePlatformMethods(_ref) {
  var pointerEvents = _ref.pointerEvents, style = _ref.style;
  var ref = useStable(() => (hostNode) => {
    if (hostNode != null) {
      hostNode.measure = (callback) => UIManager_default.measure(hostNode, callback);
      hostNode.measureLayout = (relativeToNode, success, failure) => UIManager_default.measureLayout(hostNode, relativeToNode, failure, success);
      hostNode.measureInWindow = (callback) => UIManager_default.measureInWindow(hostNode, callback);
    }
  });
  return ref;
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/useResponderEvents/index.js
import * as React39 from "react";

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/useResponderEvents/createResponderEvent.js
var emptyFunction = () => {
};
var emptyObject6 = {};
var emptyArray = [];
function normalizeIdentifier(identifier) {
  return identifier > 20 ? identifier % 20 : identifier;
}
function createResponderEvent(domEvent, responderTouchHistoryStore2) {
  var rect;
  var propagationWasStopped = false;
  var changedTouches;
  var touches;
  var domEventChangedTouches = domEvent.changedTouches;
  var domEventType = domEvent.type;
  var metaKey = domEvent.metaKey === true;
  var shiftKey = domEvent.shiftKey === true;
  var force = domEventChangedTouches && domEventChangedTouches[0].force || 0;
  var identifier = normalizeIdentifier(domEventChangedTouches && domEventChangedTouches[0].identifier || 0);
  var clientX = domEventChangedTouches && domEventChangedTouches[0].clientX || domEvent.clientX;
  var clientY = domEventChangedTouches && domEventChangedTouches[0].clientY || domEvent.clientY;
  var pageX = domEventChangedTouches && domEventChangedTouches[0].pageX || domEvent.pageX;
  var pageY = domEventChangedTouches && domEventChangedTouches[0].pageY || domEvent.pageY;
  var preventDefault = typeof domEvent.preventDefault === "function" ? domEvent.preventDefault.bind(domEvent) : emptyFunction;
  var timestamp = domEvent.timeStamp;
  function normalizeTouches(touches2) {
    return Array.prototype.slice.call(touches2).map((touch) => {
      return {
        force: touch.force,
        identifier: normalizeIdentifier(touch.identifier),
        get locationX() {
          return locationX(touch.clientX);
        },
        get locationY() {
          return locationY(touch.clientY);
        },
        pageX: touch.pageX,
        pageY: touch.pageY,
        target: touch.target,
        timestamp
      };
    });
  }
  if (domEventChangedTouches != null) {
    changedTouches = normalizeTouches(domEventChangedTouches);
    touches = normalizeTouches(domEvent.touches);
  } else {
    var emulatedTouches = [{
      force,
      identifier,
      get locationX() {
        return locationX(clientX);
      },
      get locationY() {
        return locationY(clientY);
      },
      pageX,
      pageY,
      target: domEvent.target,
      timestamp
    }];
    changedTouches = emulatedTouches;
    touches = domEventType === "mouseup" || domEventType === "dragstart" ? emptyArray : emulatedTouches;
  }
  var responderEvent = {
    bubbles: true,
    cancelable: true,
    // `currentTarget` is set before dispatch
    currentTarget: null,
    defaultPrevented: domEvent.defaultPrevented,
    dispatchConfig: emptyObject6,
    eventPhase: domEvent.eventPhase,
    isDefaultPrevented() {
      return domEvent.defaultPrevented;
    },
    isPropagationStopped() {
      return propagationWasStopped;
    },
    isTrusted: domEvent.isTrusted,
    nativeEvent: {
      altKey: false,
      ctrlKey: false,
      metaKey,
      shiftKey,
      changedTouches,
      force,
      identifier,
      get locationX() {
        return locationX(clientX);
      },
      get locationY() {
        return locationY(clientY);
      },
      pageX,
      pageY,
      target: domEvent.target,
      timestamp,
      touches,
      type: domEventType
    },
    persist: emptyFunction,
    preventDefault,
    stopPropagation() {
      propagationWasStopped = true;
    },
    target: domEvent.target,
    timeStamp: timestamp,
    touchHistory: responderTouchHistoryStore2.touchHistory
  };
  function locationX(x) {
    rect = rect || getBoundingClientRect_default(responderEvent.currentTarget);
    if (rect) {
      return x - rect.left;
    }
  }
  function locationY(y) {
    rect = rect || getBoundingClientRect_default(responderEvent.currentTarget);
    if (rect) {
      return y - rect.top;
    }
  }
  return responderEvent;
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/useResponderEvents/ResponderEventTypes.js
var MOUSE_DOWN = "mousedown";
var MOUSE_MOVE = "mousemove";
var MOUSE_UP = "mouseup";
var MOUSE_CANCEL = "dragstart";
var TOUCH_START = "touchstart";
var TOUCH_MOVE = "touchmove";
var TOUCH_END = "touchend";
var TOUCH_CANCEL = "touchcancel";
var SCROLL = "scroll";
var SELECT = "select";
var SELECTION_CHANGE = "selectionchange";
function isStartish(eventType) {
  return eventType === TOUCH_START || eventType === MOUSE_DOWN;
}
function isMoveish(eventType) {
  return eventType === TOUCH_MOVE || eventType === MOUSE_MOVE;
}
function isEndish(eventType) {
  return eventType === TOUCH_END || eventType === MOUSE_UP || isCancelish(eventType);
}
function isCancelish(eventType) {
  return eventType === TOUCH_CANCEL || eventType === MOUSE_CANCEL;
}
function isScroll(eventType) {
  return eventType === SCROLL;
}
function isSelectionChange(eventType) {
  return eventType === SELECT || eventType === SELECTION_CHANGE;
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/isSelectionValid/index.js
function isSelectionValid() {
  var selection = window.getSelection();
  var string = selection.toString();
  var anchorNode = selection.anchorNode;
  var focusNode = selection.focusNode;
  var isTextNode = anchorNode && anchorNode.nodeType === window.Node.TEXT_NODE || focusNode && focusNode.nodeType === window.Node.TEXT_NODE;
  return string.length >= 1 && string !== "\n" && isTextNode;
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/useResponderEvents/utils.js
var keyName = "__reactResponderId";
function getEventPath(domEvent) {
  if (domEvent.type === "selectionchange") {
    var target = window.getSelection().anchorNode;
    return composedPathFallback(target);
  } else {
    var path = domEvent.composedPath != null ? domEvent.composedPath() : composedPathFallback(domEvent.target);
    return path;
  }
}
function composedPathFallback(target) {
  var path = [];
  while (target != null && target !== document.body) {
    path.push(target);
    target = target.parentNode;
  }
  return path;
}
function getResponderId(node) {
  if (node != null) {
    return node[keyName];
  }
  return null;
}
function setResponderId(node, id2) {
  if (node != null) {
    node[keyName] = id2;
  }
}
function getResponderPaths(domEvent) {
  var idPath = [];
  var nodePath = [];
  var eventPath = getEventPath(domEvent);
  for (var i = 0; i < eventPath.length; i++) {
    var node = eventPath[i];
    var id2 = getResponderId(node);
    if (id2 != null) {
      idPath.push(id2);
      nodePath.push(node);
    }
  }
  return {
    idPath,
    nodePath
  };
}
function getLowestCommonAncestor(pathA, pathB) {
  var pathALength = pathA.length;
  var pathBLength = pathB.length;
  if (
    // If either path is empty
    pathALength === 0 || pathBLength === 0 || // If the last elements aren't the same there can't be a common ancestor
    // that is connected to the responder system
    pathA[pathALength - 1] !== pathB[pathBLength - 1]
  ) {
    return null;
  }
  var itemA = pathA[0];
  var indexA = 0;
  var itemB = pathB[0];
  var indexB = 0;
  if (pathALength - pathBLength > 0) {
    indexA = pathALength - pathBLength;
    itemA = pathA[indexA];
    pathALength = pathBLength;
  }
  if (pathBLength - pathALength > 0) {
    indexB = pathBLength - pathALength;
    itemB = pathB[indexB];
    pathBLength = pathALength;
  }
  var depth = pathALength;
  while (depth--) {
    if (itemA === itemB) {
      return itemA;
    }
    itemA = pathA[indexA++];
    itemB = pathB[indexB++];
  }
  return null;
}
function hasTargetTouches(target, touches) {
  if (!touches || touches.length === 0) {
    return false;
  }
  for (var i = 0; i < touches.length; i++) {
    var node = touches[i].target;
    if (node != null) {
      if (target.contains(node)) {
        return true;
      }
    }
  }
  return false;
}
function hasValidSelection(domEvent) {
  if (domEvent.type === "selectionchange") {
    return isSelectionValid();
  }
  return domEvent.type === "select";
}
function isPrimaryPointerDown(domEvent) {
  var altKey = domEvent.altKey, button = domEvent.button, buttons = domEvent.buttons, ctrlKey = domEvent.ctrlKey, type = domEvent.type;
  var isTouch = type === "touchstart" || type === "touchmove";
  var isPrimaryMouseDown = type === "mousedown" && (button === 0 || buttons === 1);
  var isPrimaryMouseMove = type === "mousemove" && buttons === 1;
  var noModifiers = altKey === false && ctrlKey === false;
  if (isTouch || isPrimaryMouseDown && noModifiers || isPrimaryMouseMove && noModifiers) {
    return true;
  }
  return false;
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/useResponderEvents/ResponderTouchHistoryStore.js
var __DEV__ = process.env.NODE_ENV !== "production";
var MAX_TOUCH_BANK = 20;
function timestampForTouch(touch) {
  return touch.timeStamp || touch.timestamp;
}
function createTouchRecord(touch) {
  return {
    touchActive: true,
    startPageX: touch.pageX,
    startPageY: touch.pageY,
    startTimeStamp: timestampForTouch(touch),
    currentPageX: touch.pageX,
    currentPageY: touch.pageY,
    currentTimeStamp: timestampForTouch(touch),
    previousPageX: touch.pageX,
    previousPageY: touch.pageY,
    previousTimeStamp: timestampForTouch(touch)
  };
}
function resetTouchRecord(touchRecord, touch) {
  touchRecord.touchActive = true;
  touchRecord.startPageX = touch.pageX;
  touchRecord.startPageY = touch.pageY;
  touchRecord.startTimeStamp = timestampForTouch(touch);
  touchRecord.currentPageX = touch.pageX;
  touchRecord.currentPageY = touch.pageY;
  touchRecord.currentTimeStamp = timestampForTouch(touch);
  touchRecord.previousPageX = touch.pageX;
  touchRecord.previousPageY = touch.pageY;
  touchRecord.previousTimeStamp = timestampForTouch(touch);
}
function getTouchIdentifier(_ref) {
  var identifier = _ref.identifier;
  if (identifier == null) {
    console.error("Touch object is missing identifier.");
  }
  if (__DEV__) {
    if (identifier > MAX_TOUCH_BANK) {
      console.error("Touch identifier %s is greater than maximum supported %s which causes performance issues backfilling array locations for all of the indices.", identifier, MAX_TOUCH_BANK);
    }
  }
  return identifier;
}
function recordTouchStart(touch, touchHistory) {
  var identifier = getTouchIdentifier(touch);
  var touchRecord = touchHistory.touchBank[identifier];
  if (touchRecord) {
    resetTouchRecord(touchRecord, touch);
  } else {
    touchHistory.touchBank[identifier] = createTouchRecord(touch);
  }
  touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
}
function recordTouchMove(touch, touchHistory) {
  var touchRecord = touchHistory.touchBank[getTouchIdentifier(touch)];
  if (touchRecord) {
    touchRecord.touchActive = true;
    touchRecord.previousPageX = touchRecord.currentPageX;
    touchRecord.previousPageY = touchRecord.currentPageY;
    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  } else {
    console.warn("Cannot record touch move without a touch start.\n", "Touch Move: " + printTouch(touch) + "\n", "Touch Bank: " + printTouchBank(touchHistory));
  }
}
function recordTouchEnd(touch, touchHistory) {
  var touchRecord = touchHistory.touchBank[getTouchIdentifier(touch)];
  if (touchRecord) {
    touchRecord.touchActive = false;
    touchRecord.previousPageX = touchRecord.currentPageX;
    touchRecord.previousPageY = touchRecord.currentPageY;
    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  } else {
    console.warn("Cannot record touch end without a touch start.\n", "Touch End: " + printTouch(touch) + "\n", "Touch Bank: " + printTouchBank(touchHistory));
  }
}
function printTouch(touch) {
  return JSON.stringify({
    identifier: touch.identifier,
    pageX: touch.pageX,
    pageY: touch.pageY,
    timestamp: timestampForTouch(touch)
  });
}
function printTouchBank(touchHistory) {
  var touchBank = touchHistory.touchBank;
  var printed = JSON.stringify(touchBank.slice(0, MAX_TOUCH_BANK));
  if (touchBank.length > MAX_TOUCH_BANK) {
    printed += " (original size: " + touchBank.length + ")";
  }
  return printed;
}
var ResponderTouchHistoryStore = class {
  constructor() {
    this._touchHistory = {
      touchBank: [],
      //Array<TouchRecord>
      numberActiveTouches: 0,
      // If there is only one active touch, we remember its location. This prevents
      // us having to loop through all of the touches all the time in the most
      // common case.
      indexOfSingleActiveTouch: -1,
      mostRecentTimeStamp: 0
    };
  }
  recordTouchTrack(topLevelType, nativeEvent) {
    var touchHistory = this._touchHistory;
    if (isMoveish(topLevelType)) {
      nativeEvent.changedTouches.forEach((touch) => recordTouchMove(touch, touchHistory));
    } else if (isStartish(topLevelType)) {
      nativeEvent.changedTouches.forEach((touch) => recordTouchStart(touch, touchHistory));
      touchHistory.numberActiveTouches = nativeEvent.touches.length;
      if (touchHistory.numberActiveTouches === 1) {
        touchHistory.indexOfSingleActiveTouch = nativeEvent.touches[0].identifier;
      }
    } else if (isEndish(topLevelType)) {
      nativeEvent.changedTouches.forEach((touch) => recordTouchEnd(touch, touchHistory));
      touchHistory.numberActiveTouches = nativeEvent.touches.length;
      if (touchHistory.numberActiveTouches === 1) {
        var touchBank = touchHistory.touchBank;
        for (var i = 0; i < touchBank.length; i++) {
          var touchTrackToCheck = touchBank[i];
          if (touchTrackToCheck != null && touchTrackToCheck.touchActive) {
            touchHistory.indexOfSingleActiveTouch = i;
            break;
          }
        }
        if (__DEV__) {
          var activeRecord = touchBank[touchHistory.indexOfSingleActiveTouch];
          if (!(activeRecord != null && activeRecord.touchActive)) {
            console.error("Cannot find single active touch.");
          }
        }
      }
    }
  }
  get touchHistory() {
    return this._touchHistory;
  }
};

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/useResponderEvents/ResponderSystem.js
var emptyObject7 = {};
var startRegistration = ["onStartShouldSetResponderCapture", "onStartShouldSetResponder", {
  bubbles: true
}];
var moveRegistration = ["onMoveShouldSetResponderCapture", "onMoveShouldSetResponder", {
  bubbles: true
}];
var scrollRegistration = ["onScrollShouldSetResponderCapture", "onScrollShouldSetResponder", {
  bubbles: false
}];
var shouldSetResponderEvents = {
  touchstart: startRegistration,
  mousedown: startRegistration,
  touchmove: moveRegistration,
  mousemove: moveRegistration,
  scroll: scrollRegistration
};
var emptyResponder = {
  id: null,
  idPath: null,
  node: null
};
var responderListenersMap = /* @__PURE__ */ new Map();
var isEmulatingMouseEvents = false;
var trackedTouchCount = 0;
var currentResponder = {
  id: null,
  node: null,
  idPath: null
};
var responderTouchHistoryStore = new ResponderTouchHistoryStore();
function changeCurrentResponder(responder) {
  currentResponder = responder;
}
function getResponderConfig(id2) {
  var config2 = responderListenersMap.get(id2);
  return config2 != null ? config2 : emptyObject7;
}
function eventListener(domEvent) {
  var eventType = domEvent.type;
  var eventTarget = domEvent.target;
  if (eventType === "touchstart") {
    isEmulatingMouseEvents = true;
  }
  if (eventType === "touchmove" || trackedTouchCount > 1) {
    isEmulatingMouseEvents = false;
  }
  if (
    // Ignore browser emulated mouse events
    eventType === "mousedown" && isEmulatingMouseEvents || eventType === "mousemove" && isEmulatingMouseEvents || // Ignore mousemove if a mousedown didn't occur first
    eventType === "mousemove" && trackedTouchCount < 1
  ) {
    return;
  }
  if (isEmulatingMouseEvents && eventType === "mouseup") {
    if (trackedTouchCount === 0) {
      isEmulatingMouseEvents = false;
    }
    return;
  }
  var isStartEvent = isStartish(eventType) && isPrimaryPointerDown(domEvent);
  var isMoveEvent = isMoveish(eventType);
  var isEndEvent = isEndish(eventType);
  var isScrollEvent = isScroll(eventType);
  var isSelectionChangeEvent = isSelectionChange(eventType);
  var responderEvent = createResponderEvent(domEvent, responderTouchHistoryStore);
  if (isStartEvent || isMoveEvent || isEndEvent) {
    if (domEvent.touches) {
      trackedTouchCount = domEvent.touches.length;
    } else {
      if (isStartEvent) {
        trackedTouchCount = 1;
      } else if (isEndEvent) {
        trackedTouchCount = 0;
      }
    }
    responderTouchHistoryStore.recordTouchTrack(eventType, responderEvent.nativeEvent);
  }
  var eventPaths = getResponderPaths(domEvent);
  var wasNegotiated = false;
  var wantsResponder;
  if (isStartEvent || isMoveEvent || isScrollEvent && trackedTouchCount > 0) {
    var currentResponderIdPath = currentResponder.idPath;
    var eventIdPath = eventPaths.idPath;
    if (currentResponderIdPath != null && eventIdPath != null) {
      var lowestCommonAncestor = getLowestCommonAncestor(currentResponderIdPath, eventIdPath);
      if (lowestCommonAncestor != null) {
        var indexOfLowestCommonAncestor = eventIdPath.indexOf(lowestCommonAncestor);
        var index = indexOfLowestCommonAncestor + (lowestCommonAncestor === currentResponder.id ? 1 : 0);
        eventPaths = {
          idPath: eventIdPath.slice(index),
          nodePath: eventPaths.nodePath.slice(index)
        };
      } else {
        eventPaths = null;
      }
    }
    if (eventPaths != null) {
      wantsResponder = findWantsResponder(eventPaths, domEvent, responderEvent);
      if (wantsResponder != null) {
        attemptTransfer(responderEvent, wantsResponder);
        wasNegotiated = true;
      }
    }
  }
  if (currentResponder.id != null && currentResponder.node != null) {
    var _currentResponder = currentResponder, id2 = _currentResponder.id, node = _currentResponder.node;
    var _getResponderConfig = getResponderConfig(id2), onResponderStart = _getResponderConfig.onResponderStart, onResponderMove = _getResponderConfig.onResponderMove, onResponderEnd = _getResponderConfig.onResponderEnd, onResponderRelease = _getResponderConfig.onResponderRelease, onResponderTerminate = _getResponderConfig.onResponderTerminate, onResponderTerminationRequest = _getResponderConfig.onResponderTerminationRequest;
    responderEvent.bubbles = false;
    responderEvent.cancelable = false;
    responderEvent.currentTarget = node;
    if (isStartEvent) {
      if (onResponderStart != null) {
        responderEvent.dispatchConfig.registrationName = "onResponderStart";
        onResponderStart(responderEvent);
      }
    } else if (isMoveEvent) {
      if (onResponderMove != null) {
        responderEvent.dispatchConfig.registrationName = "onResponderMove";
        onResponderMove(responderEvent);
      }
    } else {
      var isTerminateEvent = isCancelish(eventType) || // native context menu
      eventType === "contextmenu" || // window blur
      eventType === "blur" && eventTarget === window || // responder (or ancestors) blur
      eventType === "blur" && eventTarget.contains(node) && domEvent.relatedTarget !== node || // native scroll without using a pointer
      isScrollEvent && trackedTouchCount === 0 || // native scroll on node that is parent of the responder (allow siblings to scroll)
      isScrollEvent && eventTarget.contains(node) && eventTarget !== node || // native select/selectionchange on node
      isSelectionChangeEvent && hasValidSelection(domEvent);
      var isReleaseEvent = isEndEvent && !isTerminateEvent && !hasTargetTouches(node, domEvent.touches);
      if (isEndEvent) {
        if (onResponderEnd != null) {
          responderEvent.dispatchConfig.registrationName = "onResponderEnd";
          onResponderEnd(responderEvent);
        }
      }
      if (isReleaseEvent) {
        if (onResponderRelease != null) {
          responderEvent.dispatchConfig.registrationName = "onResponderRelease";
          onResponderRelease(responderEvent);
        }
        changeCurrentResponder(emptyResponder);
      }
      if (isTerminateEvent) {
        var shouldTerminate = true;
        if (eventType === "contextmenu" || eventType === "scroll" || eventType === "selectionchange") {
          if (wasNegotiated) {
            shouldTerminate = false;
          } else if (onResponderTerminationRequest != null) {
            responderEvent.dispatchConfig.registrationName = "onResponderTerminationRequest";
            if (onResponderTerminationRequest(responderEvent) === false) {
              shouldTerminate = false;
            }
          }
        }
        if (shouldTerminate) {
          if (onResponderTerminate != null) {
            responderEvent.dispatchConfig.registrationName = "onResponderTerminate";
            onResponderTerminate(responderEvent);
          }
          changeCurrentResponder(emptyResponder);
          isEmulatingMouseEvents = false;
          trackedTouchCount = 0;
        }
      }
    }
  }
}
function findWantsResponder(eventPaths, domEvent, responderEvent) {
  var shouldSetCallbacks = shouldSetResponderEvents[domEvent.type];
  if (shouldSetCallbacks != null) {
    var idPath = eventPaths.idPath, nodePath = eventPaths.nodePath;
    var shouldSetCallbackCaptureName = shouldSetCallbacks[0];
    var shouldSetCallbackBubbleName = shouldSetCallbacks[1];
    var bubbles = shouldSetCallbacks[2].bubbles;
    var check = function check2(id3, node2, callbackName) {
      var config2 = getResponderConfig(id3);
      var shouldSetCallback = config2[callbackName];
      if (shouldSetCallback != null) {
        responderEvent.currentTarget = node2;
        if (shouldSetCallback(responderEvent) === true) {
          var prunedIdPath = idPath.slice(idPath.indexOf(id3));
          return {
            id: id3,
            node: node2,
            idPath: prunedIdPath
          };
        }
      }
    };
    for (var i = idPath.length - 1; i >= 0; i--) {
      var id2 = idPath[i];
      var node = nodePath[i];
      var result = check(id2, node, shouldSetCallbackCaptureName);
      if (result != null) {
        return result;
      }
      if (responderEvent.isPropagationStopped() === true) {
        return;
      }
    }
    if (bubbles) {
      for (var _i = 0; _i < idPath.length; _i++) {
        var _id = idPath[_i];
        var _node = nodePath[_i];
        var _result = check(_id, _node, shouldSetCallbackBubbleName);
        if (_result != null) {
          return _result;
        }
        if (responderEvent.isPropagationStopped() === true) {
          return;
        }
      }
    } else {
      var _id2 = idPath[0];
      var _node2 = nodePath[0];
      var target = domEvent.target;
      if (target === _node2) {
        return check(_id2, _node2, shouldSetCallbackBubbleName);
      }
    }
  }
}
function attemptTransfer(responderEvent, wantsResponder) {
  var _currentResponder2 = currentResponder, currentId = _currentResponder2.id, currentNode = _currentResponder2.node;
  var id2 = wantsResponder.id, node = wantsResponder.node;
  var _getResponderConfig2 = getResponderConfig(id2), onResponderGrant = _getResponderConfig2.onResponderGrant, onResponderReject = _getResponderConfig2.onResponderReject;
  responderEvent.bubbles = false;
  responderEvent.cancelable = false;
  responderEvent.currentTarget = node;
  if (currentId == null) {
    if (onResponderGrant != null) {
      responderEvent.currentTarget = node;
      responderEvent.dispatchConfig.registrationName = "onResponderGrant";
      onResponderGrant(responderEvent);
    }
    changeCurrentResponder(wantsResponder);
  } else {
    var _getResponderConfig3 = getResponderConfig(currentId), onResponderTerminate = _getResponderConfig3.onResponderTerminate, onResponderTerminationRequest = _getResponderConfig3.onResponderTerminationRequest;
    var allowTransfer = true;
    if (onResponderTerminationRequest != null) {
      responderEvent.currentTarget = currentNode;
      responderEvent.dispatchConfig.registrationName = "onResponderTerminationRequest";
      if (onResponderTerminationRequest(responderEvent) === false) {
        allowTransfer = false;
      }
    }
    if (allowTransfer) {
      if (onResponderTerminate != null) {
        responderEvent.currentTarget = currentNode;
        responderEvent.dispatchConfig.registrationName = "onResponderTerminate";
        onResponderTerminate(responderEvent);
      }
      if (onResponderGrant != null) {
        responderEvent.currentTarget = node;
        responderEvent.dispatchConfig.registrationName = "onResponderGrant";
        onResponderGrant(responderEvent);
      }
      changeCurrentResponder(wantsResponder);
    } else {
      if (onResponderReject != null) {
        responderEvent.currentTarget = node;
        responderEvent.dispatchConfig.registrationName = "onResponderReject";
        onResponderReject(responderEvent);
      }
    }
  }
}
var documentEventsCapturePhase = ["blur", "scroll"];
var documentEventsBubblePhase = [
  // mouse
  "mousedown",
  "mousemove",
  "mouseup",
  "dragstart",
  // touch
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  // other
  "contextmenu",
  "select",
  "selectionchange"
];
function attachListeners() {
  if (canUseDom_default && window.__reactResponderSystemActive == null) {
    window.addEventListener("blur", eventListener);
    documentEventsBubblePhase.forEach((eventType) => {
      document.addEventListener(eventType, eventListener);
    });
    documentEventsCapturePhase.forEach((eventType) => {
      document.addEventListener(eventType, eventListener, true);
    });
    window.__reactResponderSystemActive = true;
  }
}
function addNode(id2, node, config2) {
  setResponderId(node, id2);
  responderListenersMap.set(id2, config2);
}
function removeNode(id2) {
  if (currentResponder.id === id2) {
    terminateResponder();
  }
  if (responderListenersMap.has(id2)) {
    responderListenersMap.delete(id2);
  }
}
function terminateResponder() {
  var _currentResponder3 = currentResponder, id2 = _currentResponder3.id, node = _currentResponder3.node;
  if (id2 != null && node != null) {
    var _getResponderConfig4 = getResponderConfig(id2), onResponderTerminate = _getResponderConfig4.onResponderTerminate;
    if (onResponderTerminate != null) {
      var event3 = createResponderEvent({}, responderTouchHistoryStore);
      event3.currentTarget = node;
      onResponderTerminate(event3);
    }
    changeCurrentResponder(emptyResponder);
  }
  isEmulatingMouseEvents = false;
  trackedTouchCount = 0;
}
function getResponderNode() {
  return currentResponder.node;
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/useResponderEvents/index.js
var emptyObject8 = {};
var idCounter = 0;
function useStable2(getInitialValue) {
  var ref = React39.useRef(null);
  if (ref.current == null) {
    ref.current = getInitialValue();
  }
  return ref.current;
}
function useResponderEvents(hostRef, config2) {
  if (config2 === void 0) {
    config2 = emptyObject8;
  }
  var id2 = useStable2(() => idCounter++);
  var isAttachedRef = React39.useRef(false);
  React39.useEffect(() => {
    attachListeners();
    return () => {
      removeNode(id2);
    };
  }, [id2]);
  React39.useEffect(() => {
    var _config = config2, onMoveShouldSetResponder = _config.onMoveShouldSetResponder, onMoveShouldSetResponderCapture = _config.onMoveShouldSetResponderCapture, onScrollShouldSetResponder = _config.onScrollShouldSetResponder, onScrollShouldSetResponderCapture = _config.onScrollShouldSetResponderCapture, onSelectionChangeShouldSetResponder = _config.onSelectionChangeShouldSetResponder, onSelectionChangeShouldSetResponderCapture = _config.onSelectionChangeShouldSetResponderCapture, onStartShouldSetResponder = _config.onStartShouldSetResponder, onStartShouldSetResponderCapture = _config.onStartShouldSetResponderCapture;
    var requiresResponderSystem = onMoveShouldSetResponder != null || onMoveShouldSetResponderCapture != null || onScrollShouldSetResponder != null || onScrollShouldSetResponderCapture != null || onSelectionChangeShouldSetResponder != null || onSelectionChangeShouldSetResponderCapture != null || onStartShouldSetResponder != null || onStartShouldSetResponderCapture != null;
    var node = hostRef.current;
    if (requiresResponderSystem) {
      addNode(id2, node, config2);
      isAttachedRef.current = true;
    } else if (isAttachedRef.current) {
      removeNode(id2);
      isAttachedRef.current = false;
    }
  }, [config2, hostRef, id2]);
  React39.useDebugValue({
    isResponder: hostRef.current === getResponderNode()
  });
  React39.useDebugValue(config2);
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/Text/TextAncestorContext.js
import { createContext as createContext5 } from "react";
var TextAncestorContext = /* @__PURE__ */ createContext5(false);
var TextAncestorContext_default = TextAncestorContext;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/View/index.js
var _excluded4 = ["hrefAttrs", "onLayout", "onMoveShouldSetResponder", "onMoveShouldSetResponderCapture", "onResponderEnd", "onResponderGrant", "onResponderMove", "onResponderReject", "onResponderRelease", "onResponderStart", "onResponderTerminate", "onResponderTerminationRequest", "onScrollShouldSetResponder", "onScrollShouldSetResponderCapture", "onSelectionChangeShouldSetResponder", "onSelectionChangeShouldSetResponderCapture", "onStartShouldSetResponder", "onStartShouldSetResponderCapture"];
var forwardPropsList = Object.assign({}, defaultProps, accessibilityProps, clickProps, focusProps, keyboardProps, mouseProps, touchProps, styleProps, {
  href: true,
  lang: true,
  onScroll: true,
  onWheel: true,
  pointerEvents: true
});
var pickProps = (props) => pick(props, forwardPropsList);
var View9 = /* @__PURE__ */ React40.forwardRef((props, forwardedRef) => {
  var hrefAttrs = props.hrefAttrs, onLayout = props.onLayout, onMoveShouldSetResponder = props.onMoveShouldSetResponder, onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture, onResponderEnd = props.onResponderEnd, onResponderGrant = props.onResponderGrant, onResponderMove = props.onResponderMove, onResponderReject = props.onResponderReject, onResponderRelease = props.onResponderRelease, onResponderStart = props.onResponderStart, onResponderTerminate = props.onResponderTerminate, onResponderTerminationRequest = props.onResponderTerminationRequest, onScrollShouldSetResponder = props.onScrollShouldSetResponder, onScrollShouldSetResponderCapture = props.onScrollShouldSetResponderCapture, onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder, onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture, onStartShouldSetResponder = props.onStartShouldSetResponder, onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture, rest = (0, import_objectWithoutPropertiesLoose4.default)(props, _excluded4);
  if (process.env.NODE_ENV !== "production") {
    React40.Children.toArray(props.children).forEach((item) => {
      if (typeof item === "string") {
        console.error("Unexpected text node: " + item + ". A text node cannot be a child of a <View>.");
      }
    });
  }
  var hasTextAncestor = React40.useContext(TextAncestorContext_default);
  var hostRef = React40.useRef(null);
  var _useLocaleContext = useLocaleContext(), contextDirection = _useLocaleContext.direction;
  useElementLayout(hostRef, onLayout);
  useResponderEvents(hostRef, {
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture
  });
  var component = "div";
  var langDirection = props.lang != null ? getLocaleDirection(props.lang) : null;
  var componentDirection = props.dir || langDirection;
  var writingDirection = componentDirection || contextDirection;
  var supportedProps = pickProps(rest);
  supportedProps.dir = componentDirection;
  supportedProps.style = [styles.view$raw, hasTextAncestor && styles.inline, props.style];
  if (props.href != null) {
    component = "a";
    if (hrefAttrs != null) {
      var download = hrefAttrs.download, rel = hrefAttrs.rel, target = hrefAttrs.target;
      if (download != null) {
        supportedProps.download = download;
      }
      if (rel != null) {
        supportedProps.rel = rel;
      }
      if (typeof target === "string") {
        supportedProps.target = target.charAt(0) !== "_" ? "_" + target : target;
      }
    }
  }
  var platformMethodsRef = usePlatformMethods(supportedProps);
  var setRef = useMergeRefs(hostRef, platformMethodsRef, forwardedRef);
  supportedProps.ref = setRef;
  return createElement_default(component, supportedProps, {
    writingDirection
  });
});
View9.displayName = "View";
var styles = StyleSheet_default.create({
  view$raw: {
    alignContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "transparent",
    border: "0 solid black",
    boxSizing: "border-box",
    display: "flex",
    flexBasis: "auto",
    flexDirection: "column",
    flexShrink: 0,
    listStyle: "none",
    margin: 0,
    minHeight: 0,
    minWidth: 0,
    padding: 0,
    position: "relative",
    textDecoration: "none",
    zIndex: 0
  },
  inline: {
    display: "inline-flex"
  }
});
var View_default = View9;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/deepDiffer/index.js
var deepDiffer = function deepDiffer2(one, two, maxDepth) {
  if (maxDepth === void 0) {
    maxDepth = -1;
  }
  if (maxDepth === 0) {
    return true;
  }
  if (one === two) {
    return false;
  }
  if (typeof one === "function" && typeof two === "function") {
    return false;
  }
  if (typeof one !== "object" || one === null) {
    return one !== two;
  }
  if (typeof two !== "object" || two === null) {
    return true;
  }
  if (one.constructor !== two.constructor) {
    return true;
  }
  if (Array.isArray(one)) {
    var len = one.length;
    if (two.length !== len) {
      return true;
    }
    for (var ii = 0; ii < len; ii++) {
      if (deepDiffer2(one[ii], two[ii], maxDepth - 1)) {
        return true;
      }
    }
  } else {
    for (var key in one) {
      if (deepDiffer2(one[key], two[key], maxDepth - 1)) {
        return true;
      }
    }
    for (var twoKey in two) {
      if (one[twoKey] === void 0 && two[twoKey] !== void 0) {
        return true;
      }
    }
  }
  return false;
};
var deepDiffer_default = deepDiffer;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/FlatList/index.js
var import_invariant11 = __toESM(require_invariant());
import * as React48 from "react";

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/index.js
var import_createForOfIteratorHelperLoose3 = __toESM(require_createForOfIteratorHelperLoose());
var import_extends4 = __toESM(require_extends());
var import_objectSpread211 = __toESM(require_objectSpread2());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/RefreshControl/index.js
var import_objectWithoutPropertiesLoose5 = __toESM(require_objectWithoutPropertiesLoose());
import React41 from "react";
var _excluded5 = ["colors", "enabled", "onRefresh", "progressBackgroundColor", "progressViewOffset", "refreshing", "size", "tintColor", "title", "titleColor"];
function RefreshControl(props) {
  var colors = props.colors, enabled = props.enabled, onRefresh = props.onRefresh, progressBackgroundColor = props.progressBackgroundColor, progressViewOffset = props.progressViewOffset, refreshing = props.refreshing, size = props.size, tintColor = props.tintColor, title = props.title, titleColor = props.titleColor, rest = (0, import_objectWithoutPropertiesLoose5.default)(props, _excluded5);
  return /* @__PURE__ */ React41.createElement(View_default, rest);
}
var RefreshControl_default = RefreshControl;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/ScrollView/index.js
var import_objectSpread24 = __toESM(require_objectSpread2());
var import_extends2 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose7 = __toESM(require_objectWithoutPropertiesLoose());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/Dimensions/index.js
var import_invariant = __toESM(require_invariant());
var dimensions = {
  window: {
    fontScale: 1,
    height: 0,
    scale: 1,
    width: 0
  },
  screen: {
    fontScale: 1,
    height: 0,
    scale: 1,
    width: 0
  }
};
var listeners = {};
var shouldInit = canUseDom_default;
function update() {
  if (!canUseDom_default) {
    return;
  }
  var win = window;
  var height;
  var width;
  if (win.visualViewport) {
    var visualViewport = win.visualViewport;
    height = Math.round(visualViewport.height * visualViewport.scale);
    width = Math.round(visualViewport.width * visualViewport.scale);
  } else {
    var docEl = win.document.documentElement;
    height = docEl.clientHeight;
    width = docEl.clientWidth;
  }
  dimensions.window = {
    fontScale: 1,
    height,
    scale: win.devicePixelRatio || 1,
    width
  };
  dimensions.screen = {
    fontScale: 1,
    height: win.screen.height,
    scale: win.devicePixelRatio || 1,
    width: win.screen.width
  };
}
function handleResize() {
  update();
  if (Array.isArray(listeners["change"])) {
    listeners["change"].forEach((handler) => handler(dimensions));
  }
}
var Dimensions = class {
  static get(dimension) {
    if (shouldInit) {
      shouldInit = false;
      update();
    }
    (0, import_invariant.default)(dimensions[dimension], "No dimension set for key " + dimension);
    return dimensions[dimension];
  }
  static set(initialDimensions) {
    if (initialDimensions) {
      if (canUseDom_default) {
        (0, import_invariant.default)(false, "Dimensions cannot be set in the browser");
      } else {
        if (initialDimensions.screen != null) {
          dimensions.screen = initialDimensions.screen;
        }
        if (initialDimensions.window != null) {
          dimensions.window = initialDimensions.window;
        }
      }
    }
  }
  static addEventListener(type, handler) {
    listeners[type] = listeners[type] || [];
    listeners[type].push(handler);
    return {
      remove: () => {
        this.removeEventListener(type, handler);
      }
    };
  }
  static removeEventListener(type, handler) {
    if (Array.isArray(listeners[type])) {
      listeners[type] = listeners[type].filter((_handler) => _handler !== handler);
    }
  }
};
if (canUseDom_default) {
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", handleResize, false);
  } else {
    window.addEventListener("resize", handleResize, false);
  }
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/TextInputState/index.js
var TextInputState = {
  /**
   * Internal state
   */
  _currentlyFocusedNode: null,
  /**
   * Returns the ID of the currently focused text field, if one exists
   * If no text field is focused it returns null
   */
  currentlyFocusedField() {
    if (document.activeElement !== this._currentlyFocusedNode) {
      this._currentlyFocusedNode = null;
    }
    return this._currentlyFocusedNode;
  },
  /**
   * @param {Object} TextInputID id of the text field to focus
   * Focuses the specified text field
   * noop if the text field was already focused
   */
  focusTextInput(textFieldNode) {
    if (textFieldNode !== null) {
      this._currentlyFocusedNode = textFieldNode;
      if (document.activeElement !== textFieldNode) {
        UIManager_default.focus(textFieldNode);
      }
    }
  },
  /**
   * @param {Object} textFieldNode id of the text field to focus
   * Unfocuses the specified text field
   * noop if it wasn't focused
   */
  blurTextInput(textFieldNode) {
    if (textFieldNode !== null) {
      this._currentlyFocusedNode = null;
      if (document.activeElement === textFieldNode) {
        UIManager_default.blur(textFieldNode);
      }
    }
  }
};
var TextInputState_default = TextInputState;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/dismissKeyboard/index.js
var dismissKeyboard = () => {
  TextInputState_default.blurTextInput(TextInputState_default.currentlyFocusedField());
};
var dismissKeyboard_default = dismissKeyboard;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/ScrollView/index.js
var import_invariant2 = __toESM(require_invariant());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/ScrollView/ScrollViewBase.js
var import_extends = __toESM(require_extends());
var import_objectWithoutPropertiesLoose6 = __toESM(require_objectWithoutPropertiesLoose());
import * as React42 from "react";
var _excluded6 = ["onScroll", "onTouchMove", "onWheel", "scrollEnabled", "scrollEventThrottle", "showsHorizontalScrollIndicator", "showsVerticalScrollIndicator", "style"];
function normalizeScrollEvent(e) {
  return {
    nativeEvent: {
      contentOffset: {
        get x() {
          return e.target.scrollLeft;
        },
        get y() {
          return e.target.scrollTop;
        }
      },
      contentSize: {
        get height() {
          return e.target.scrollHeight;
        },
        get width() {
          return e.target.scrollWidth;
        }
      },
      layoutMeasurement: {
        get height() {
          return e.target.offsetHeight;
        },
        get width() {
          return e.target.offsetWidth;
        }
      }
    },
    timeStamp: Date.now()
  };
}
function shouldEmitScrollEvent(lastTick, eventThrottle) {
  var timeSinceLastTick = Date.now() - lastTick;
  return eventThrottle > 0 && timeSinceLastTick >= eventThrottle;
}
var ScrollViewBase = /* @__PURE__ */ React42.forwardRef((props, forwardedRef) => {
  var onScroll = props.onScroll, onTouchMove = props.onTouchMove, onWheel = props.onWheel, _props$scrollEnabled = props.scrollEnabled, scrollEnabled = _props$scrollEnabled === void 0 ? true : _props$scrollEnabled, _props$scrollEventThr = props.scrollEventThrottle, scrollEventThrottle = _props$scrollEventThr === void 0 ? 0 : _props$scrollEventThr, showsHorizontalScrollIndicator = props.showsHorizontalScrollIndicator, showsVerticalScrollIndicator = props.showsVerticalScrollIndicator, style = props.style, rest = (0, import_objectWithoutPropertiesLoose6.default)(props, _excluded6);
  var scrollState = React42.useRef({
    isScrolling: false,
    scrollLastTick: 0
  });
  var scrollTimeout = React42.useRef(null);
  var scrollRef = React42.useRef(null);
  function createPreventableScrollHandler(handler) {
    return (e) => {
      if (scrollEnabled) {
        if (handler) {
          handler(e);
        }
      }
    };
  }
  function handleScroll(e) {
    e.stopPropagation();
    if (e.target === scrollRef.current) {
      e.persist();
      if (scrollTimeout.current != null) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        handleScrollEnd(e);
      }, 100);
      if (scrollState.current.isScrolling) {
        if (shouldEmitScrollEvent(scrollState.current.scrollLastTick, scrollEventThrottle)) {
          handleScrollTick(e);
        }
      } else {
        handleScrollStart(e);
      }
    }
  }
  function handleScrollStart(e) {
    scrollState.current.isScrolling = true;
    handleScrollTick(e);
  }
  function handleScrollTick(e) {
    scrollState.current.scrollLastTick = Date.now();
    if (onScroll) {
      onScroll(normalizeScrollEvent(e));
    }
  }
  function handleScrollEnd(e) {
    scrollState.current.isScrolling = false;
    if (onScroll) {
      onScroll(normalizeScrollEvent(e));
    }
  }
  var hideScrollbar = showsHorizontalScrollIndicator === false || showsVerticalScrollIndicator === false;
  return /* @__PURE__ */ React42.createElement(View_default, (0, import_extends.default)({}, rest, {
    onScroll: handleScroll,
    onTouchMove: createPreventableScrollHandler(onTouchMove),
    onWheel: createPreventableScrollHandler(onWheel),
    ref: useMergeRefs(scrollRef, forwardedRef),
    style: [style, !scrollEnabled && styles2.scrollDisabled, hideScrollbar && styles2.hideScrollbar]
  }));
});
var styles2 = StyleSheet_default.create({
  scrollDisabled: {
    overflowX: "hidden",
    overflowY: "hidden",
    touchAction: "none"
  },
  hideScrollbar: {
    scrollbarWidth: "none"
  }
});
var ScrollViewBase_default = ScrollViewBase;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/ScrollView/index.js
var import_warning = __toESM(require_warning());
import React43 from "react";
var _excluded7 = ["contentContainerStyle", "horizontal", "onContentSizeChange", "refreshControl", "stickyHeaderIndices", "pagingEnabled", "forwardedRef", "keyboardDismissMode", "onScroll", "centerContent"];
var emptyObject9 = {};
var IS_ANIMATING_TOUCH_START_THRESHOLD_MS = 16;
var ScrollView2 = class extends React43.Component {
  constructor() {
    super(...arguments);
    this._scrollNodeRef = null;
    this._innerViewRef = null;
    this.isTouching = false;
    this.lastMomentumScrollBeginTime = 0;
    this.lastMomentumScrollEndTime = 0;
    this.observedScrollSinceBecomingResponder = false;
    this.becameResponderWhileAnimating = false;
    this.scrollResponderHandleScrollShouldSetResponder = () => {
      return this.isTouching;
    };
    this.scrollResponderHandleStartShouldSetResponderCapture = (e) => {
      return this.scrollResponderIsAnimating();
    };
    this.scrollResponderHandleTerminationRequest = () => {
      return !this.observedScrollSinceBecomingResponder;
    };
    this.scrollResponderHandleTouchEnd = (e) => {
      var nativeEvent = e.nativeEvent;
      this.isTouching = nativeEvent.touches.length !== 0;
      this.props.onTouchEnd && this.props.onTouchEnd(e);
    };
    this.scrollResponderHandleResponderRelease = (e) => {
      this.props.onResponderRelease && this.props.onResponderRelease(e);
      var currentlyFocusedTextInput = TextInputState_default.currentlyFocusedField();
      if (!this.props.keyboardShouldPersistTaps && currentlyFocusedTextInput != null && e.target !== currentlyFocusedTextInput && !this.observedScrollSinceBecomingResponder && !this.becameResponderWhileAnimating) {
        this.props.onScrollResponderKeyboardDismissed && this.props.onScrollResponderKeyboardDismissed(e);
        TextInputState_default.blurTextInput(currentlyFocusedTextInput);
      }
    };
    this.scrollResponderHandleScroll = (e) => {
      this.observedScrollSinceBecomingResponder = true;
      this.props.onScroll && this.props.onScroll(e);
    };
    this.scrollResponderHandleResponderGrant = (e) => {
      this.observedScrollSinceBecomingResponder = false;
      this.props.onResponderGrant && this.props.onResponderGrant(e);
      this.becameResponderWhileAnimating = this.scrollResponderIsAnimating();
    };
    this.scrollResponderHandleScrollBeginDrag = (e) => {
      this.props.onScrollBeginDrag && this.props.onScrollBeginDrag(e);
    };
    this.scrollResponderHandleScrollEndDrag = (e) => {
      this.props.onScrollEndDrag && this.props.onScrollEndDrag(e);
    };
    this.scrollResponderHandleMomentumScrollBegin = (e) => {
      this.lastMomentumScrollBeginTime = Date.now();
      this.props.onMomentumScrollBegin && this.props.onMomentumScrollBegin(e);
    };
    this.scrollResponderHandleMomentumScrollEnd = (e) => {
      this.lastMomentumScrollEndTime = Date.now();
      this.props.onMomentumScrollEnd && this.props.onMomentumScrollEnd(e);
    };
    this.scrollResponderHandleTouchStart = (e) => {
      this.isTouching = true;
      this.props.onTouchStart && this.props.onTouchStart(e);
    };
    this.scrollResponderHandleTouchMove = (e) => {
      this.props.onTouchMove && this.props.onTouchMove(e);
    };
    this.scrollResponderIsAnimating = () => {
      var now = Date.now();
      var timeSinceLastMomentumScrollEnd = now - this.lastMomentumScrollEndTime;
      var isAnimating = timeSinceLastMomentumScrollEnd < IS_ANIMATING_TOUCH_START_THRESHOLD_MS || this.lastMomentumScrollEndTime < this.lastMomentumScrollBeginTime;
      return isAnimating;
    };
    this.scrollResponderScrollTo = (x, y, animated) => {
      if (typeof x === "number") {
        console.warn("`scrollResponderScrollTo(x, y, animated)` is deprecated. Use `scrollResponderScrollTo({x: 5, y: 5, animated: true})` instead.");
      } else {
        var _ref = x || emptyObject9;
        x = _ref.x;
        y = _ref.y;
        animated = _ref.animated;
      }
      var node = this.getScrollableNode();
      var left2 = x || 0;
      var top = y || 0;
      if (node != null) {
        if (typeof node.scroll === "function") {
          node.scroll({
            top,
            left: left2,
            behavior: !animated ? "auto" : "smooth"
          });
        } else {
          node.scrollLeft = left2;
          node.scrollTop = top;
        }
      }
    };
    this.scrollResponderZoomTo = (rect, animated) => {
      if (Platform_default.OS !== "ios") {
        (0, import_invariant2.default)("zoomToRect is not implemented");
      }
    };
    this.scrollResponderScrollNativeHandleToKeyboard = (nodeHandle, additionalOffset, preventNegativeScrollOffset) => {
      this.additionalScrollOffset = additionalOffset || 0;
      this.preventNegativeScrollOffset = !!preventNegativeScrollOffset;
      UIManager_default.measureLayout(nodeHandle, this.getInnerViewNode(), this.scrollResponderTextInputFocusError, this.scrollResponderInputMeasureAndScrollToKeyboard);
    };
    this.scrollResponderInputMeasureAndScrollToKeyboard = (left2, top, width, height) => {
      var keyboardScreenY = Dimensions.get("window").height;
      if (this.keyboardWillOpenTo) {
        keyboardScreenY = this.keyboardWillOpenTo.endCoordinates.screenY;
      }
      var scrollOffsetY = top - keyboardScreenY + height + this.additionalScrollOffset;
      if (this.preventNegativeScrollOffset) {
        scrollOffsetY = Math.max(0, scrollOffsetY);
      }
      this.scrollResponderScrollTo({
        x: 0,
        y: scrollOffsetY,
        animated: true
      });
      this.additionalOffset = 0;
      this.preventNegativeScrollOffset = false;
    };
    this.scrollResponderKeyboardWillShow = (e) => {
      this.keyboardWillOpenTo = e;
      this.props.onKeyboardWillShow && this.props.onKeyboardWillShow(e);
    };
    this.scrollResponderKeyboardWillHide = (e) => {
      this.keyboardWillOpenTo = null;
      this.props.onKeyboardWillHide && this.props.onKeyboardWillHide(e);
    };
    this.scrollResponderKeyboardDidShow = (e) => {
      if (e) {
        this.keyboardWillOpenTo = e;
      }
      this.props.onKeyboardDidShow && this.props.onKeyboardDidShow(e);
    };
    this.scrollResponderKeyboardDidHide = (e) => {
      this.keyboardWillOpenTo = null;
      this.props.onKeyboardDidHide && this.props.onKeyboardDidHide(e);
    };
    this.flashScrollIndicators = () => {
      this.scrollResponderFlashScrollIndicators();
    };
    this.getScrollResponder = () => {
      return this;
    };
    this.getScrollableNode = () => {
      return this._scrollNodeRef;
    };
    this.getInnerViewRef = () => {
      return this._innerViewRef;
    };
    this.getInnerViewNode = () => {
      return this._innerViewRef;
    };
    this.getNativeScrollRef = () => {
      return this._scrollNodeRef;
    };
    this.scrollTo = (y, x, animated) => {
      if (typeof y === "number") {
        console.warn("`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.");
      } else {
        var _ref2 = y || emptyObject9;
        x = _ref2.x;
        y = _ref2.y;
        animated = _ref2.animated;
      }
      this.scrollResponderScrollTo({
        x: x || 0,
        y: y || 0,
        animated: animated !== false
      });
    };
    this.scrollToEnd = (options) => {
      var animated = (options && options.animated) !== false;
      var horizontal = this.props.horizontal;
      var scrollResponderNode = this.getScrollableNode();
      var x = horizontal ? scrollResponderNode.scrollWidth : 0;
      var y = horizontal ? 0 : scrollResponderNode.scrollHeight;
      this.scrollResponderScrollTo({
        x,
        y,
        animated
      });
    };
    this._handleContentOnLayout = (e) => {
      var _e$nativeEvent$layout = e.nativeEvent.layout, width = _e$nativeEvent$layout.width, height = _e$nativeEvent$layout.height;
      this.props.onContentSizeChange(width, height);
    };
    this._handleScroll = (e) => {
      if (process.env.NODE_ENV !== "production") {
        if (this.props.onScroll && this.props.scrollEventThrottle == null) {
          console.log("You specified `onScroll` on a <ScrollView> but not `scrollEventThrottle`. You will only receive one event. Using `16` you get all the events but be aware that it may cause frame drops, use a bigger number if you don't need as much precision.");
        }
      }
      if (this.props.keyboardDismissMode === "on-drag") {
        dismissKeyboard_default();
      }
      this.scrollResponderHandleScroll(e);
    };
    this._setInnerViewRef = (node) => {
      this._innerViewRef = node;
    };
    this._setScrollNodeRef = (node) => {
      this._scrollNodeRef = node;
      if (node != null) {
        node.getScrollResponder = this.getScrollResponder;
        node.getInnerViewNode = this.getInnerViewNode;
        node.getInnerViewRef = this.getInnerViewRef;
        node.getNativeScrollRef = this.getNativeScrollRef;
        node.getScrollableNode = this.getScrollableNode;
        node.scrollTo = this.scrollTo;
        node.scrollToEnd = this.scrollToEnd;
        node.flashScrollIndicators = this.flashScrollIndicators;
        node.scrollResponderZoomTo = this.scrollResponderZoomTo;
        node.scrollResponderScrollNativeHandleToKeyboard = this.scrollResponderScrollNativeHandleToKeyboard;
      }
      var ref = mergeRefs(this.props.forwardedRef);
      ref(node);
    };
  }
  /**
   * ------------------------------------------------------
   * START SCROLLRESPONDER
   * ------------------------------------------------------
   */
  // Reset to false every time becomes responder. This is used to:
  // - Determine if the scroll view has been scrolled and therefore should
  // refuse to give up its responder lock.
  // - Determine if releasing should dismiss the keyboard when we are in
  // tap-to-dismiss mode (!this.props.keyboardShouldPersistTaps).
  /**
   * Invoke this from an `onScroll` event.
   */
  /**
   * Merely touch starting is not sufficient for a scroll view to become the
   * responder. Being the "responder" means that the very next touch move/end
   * event will result in an action/movement.
   *
   * Invoke this from an `onStartShouldSetResponder` event.
   *
   * `onStartShouldSetResponder` is used when the next move/end will trigger
   * some UI movement/action, but when you want to yield priority to views
   * nested inside of the view.
   *
   * There may be some cases where scroll views actually should return `true`
   * from `onStartShouldSetResponder`: Any time we are detecting a standard tap
   * that gives priority to nested views.
   *
   * - If a single tap on the scroll view triggers an action such as
   *   recentering a map style view yet wants to give priority to interaction
   *   views inside (such as dropped pins or labels), then we would return true
   *   from this method when there is a single touch.
   *
   * - Similar to the previous case, if a two finger "tap" should trigger a
   *   zoom, we would check the `touches` count, and if `>= 2`, we would return
   *   true.
   *
   */
  scrollResponderHandleStartShouldSetResponder() {
    return false;
  }
  /**
   * There are times when the scroll view wants to become the responder
   * (meaning respond to the next immediate `touchStart/touchEnd`), in a way
   * that *doesn't* give priority to nested views (hence the capture phase):
   *
   * - Currently animating.
   * - Tapping anywhere that is not the focused input, while the keyboard is
   *   up (which should dismiss the keyboard).
   *
   * Invoke this from an `onStartShouldSetResponderCapture` event.
   */
  /**
   * Invoke this from an `onResponderReject` event.
   *
   * Some other element is not yielding its role as responder. Normally, we'd
   * just disable the `UIScrollView`, but a touch has already began on it, the
   * `UIScrollView` will not accept being disabled after that. The easiest
   * solution for now is to accept the limitation of disallowing this
   * altogether. To improve this, find a way to disable the `UIScrollView` after
   * a touch has already started.
   */
  scrollResponderHandleResponderReject() {
    (0, import_warning.default)(false, "ScrollView doesn't take rejection well - scrolls anyway");
  }
  /**
   * We will allow the scroll view to give up its lock iff it acquired the lock
   * during an animation. This is a very useful default that happens to satisfy
   * many common user experiences.
   *
   * - Stop a scroll on the left edge, then turn that into an outer view's
   *   backswipe.
   * - Stop a scroll mid-bounce at the top, continue pulling to have the outer
   *   view dismiss.
   * - However, without catching the scroll view mid-bounce (while it is
   *   motionless), if you drag far enough for the scroll view to become
   *   responder (and therefore drag the scroll view a bit), any backswipe
   *   navigation of a swipe gesture higher in the view hierarchy, should be
   *   rejected.
   */
  /**
   * Invoke this from an `onTouchEnd` event.
   *
   * @param {SyntheticEvent} e Event.
   */
  /**
   * Invoke this from an `onResponderRelease` event.
   */
  /**
   * Invoke this from an `onResponderGrant` event.
   */
  /**
   * Unfortunately, `onScrollBeginDrag` also fires when *stopping* the scroll
   * animation, and there's not an easy way to distinguish a drag vs. stopping
   * momentum.
   *
   * Invoke this from an `onScrollBeginDrag` event.
   */
  /**
   * Invoke this from an `onScrollEndDrag` event.
   */
  /**
   * Invoke this from an `onMomentumScrollBegin` event.
   */
  /**
   * Invoke this from an `onMomentumScrollEnd` event.
   */
  /**
   * Invoke this from an `onTouchStart` event.
   *
   * Since we know that the `SimpleEventPlugin` occurs later in the plugin
   * order, after `ResponderEventPlugin`, we can detect that we were *not*
   * permitted to be the responder (presumably because a contained view became
   * responder). The `onResponderReject` won't fire in that case - it only
   * fires when a *current* responder rejects our request.
   *
   * @param {SyntheticEvent} e Touch Start event.
   */
  /**
   * Invoke this from an `onTouchMove` event.
   *
   * Since we know that the `SimpleEventPlugin` occurs later in the plugin
   * order, after `ResponderEventPlugin`, we can detect that we were *not*
   * permitted to be the responder (presumably because a contained view became
   * responder). The `onResponderReject` won't fire in that case - it only
   * fires when a *current* responder rejects our request.
   *
   * @param {SyntheticEvent} e Touch Start event.
   */
  /**
   * A helper function for this class that lets us quickly determine if the
   * view is currently animating. This is particularly useful to know when
   * a touch has just started or ended.
   */
  /**
   * A helper function to scroll to a specific point in the scrollview.
   * This is currently used to help focus on child textviews, but can also
   * be used to quickly scroll to any element we want to focus. Syntax:
   *
   * scrollResponderScrollTo(options: {x: number = 0; y: number = 0; animated: boolean = true})
   *
   * Note: The weird argument signature is due to the fact that, for historical reasons,
   * the function also accepts separate arguments as as alternative to the options object.
   * This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
   */
  /**
   * A helper function to zoom to a specific rect in the scrollview. The argument has the shape
   * {x: number; y: number; width: number; height: number; animated: boolean = true}
   *
   * @platform ios
   */
  /**
   * Displays the scroll indicators momentarily.
   */
  scrollResponderFlashScrollIndicators() {
  }
  /**
   * This method should be used as the callback to onFocus in a TextInputs'
   * parent view. Note that any module using this mixin needs to return
   * the parent view's ref in getScrollViewRef() in order to use this method.
   * @param {any} nodeHandle The TextInput node handle
   * @param {number} additionalOffset The scroll view's top "contentInset".
   *        Default is 0.
   * @param {bool} preventNegativeScrolling Whether to allow pulling the content
   *        down to make it meet the keyboard's top. Default is false.
   */
  /**
   * The calculations performed here assume the scroll view takes up the entire
   * screen - even if has some content inset. We then measure the offsets of the
   * keyboard, and compensate both for the scroll view's "contentInset".
   *
   * @param {number} left Position of input w.r.t. table view.
   * @param {number} top Position of input w.r.t. table view.
   * @param {number} width Width of the text input.
   * @param {number} height Height of the text input.
   */
  scrollResponderTextInputFocusError(e) {
    console.error("Error measuring text field: ", e);
  }
  /**
   * Warning, this may be called several times for a single keyboard opening.
   * It's best to store the information in this method and then take any action
   * at a later point (either in `keyboardDidShow` or other).
   *
   * Here's the order that events occur in:
   * - focus
   * - willShow {startCoordinates, endCoordinates} several times
   * - didShow several times
   * - blur
   * - willHide {startCoordinates, endCoordinates} several times
   * - didHide several times
   *
   * The `ScrollResponder` providesModule callbacks for each of these events.
   * Even though any user could have easily listened to keyboard events
   * themselves, using these `props` callbacks ensures that ordering of events
   * is consistent - and not dependent on the order that the keyboard events are
   * subscribed to. This matters when telling the scroll view to scroll to where
   * the keyboard is headed - the scroll responder better have been notified of
   * the keyboard destination before being instructed to scroll to where the
   * keyboard will be. Stick to the `ScrollResponder` callbacks, and everything
   * will work.
   *
   * WARNING: These callbacks will fire even if a keyboard is displayed in a
   * different navigation pane. Filter out the events to determine if they are
   * relevant to you. (For example, only if you receive these callbacks after
   * you had explicitly focused a node etc).
   */
  /**
   * ------------------------------------------------------
   * END SCROLLRESPONDER
   * ------------------------------------------------------
   */
  /**
   * Returns a reference to the underlying scroll responder, which supports
   * operations like `scrollTo`. All ScrollView-like components should
   * implement this method so that they can be composed while providing access
   * to the underlying scroll responder's methods.
   */
  /**
   * Scrolls to a given x, y offset, either immediately or with a smooth animation.
   * Syntax:
   *
   * scrollTo(options: {x: number = 0; y: number = 0; animated: boolean = true})
   *
   * Note: The weird argument signature is due to the fact that, for historical reasons,
   * the function also accepts separate arguments as as alternative to the options object.
   * This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
   */
  /**
   * If this is a vertical ScrollView scrolls to the bottom.
   * If this is a horizontal ScrollView scrolls to the right.
   *
   * Use `scrollToEnd({ animated: true })` for smooth animated scrolling,
   * `scrollToEnd({ animated: false })` for immediate scrolling.
   * If no options are passed, `animated` defaults to true.
   */
  render() {
    var _this$props = this.props, contentContainerStyle = _this$props.contentContainerStyle, horizontal = _this$props.horizontal, onContentSizeChange = _this$props.onContentSizeChange, refreshControl = _this$props.refreshControl, stickyHeaderIndices = _this$props.stickyHeaderIndices, pagingEnabled = _this$props.pagingEnabled, forwardedRef = _this$props.forwardedRef, keyboardDismissMode = _this$props.keyboardDismissMode, onScroll = _this$props.onScroll, centerContent = _this$props.centerContent, other = (0, import_objectWithoutPropertiesLoose7.default)(_this$props, _excluded7);
    if (process.env.NODE_ENV !== "production" && this.props.style) {
      var style = StyleSheet_default.flatten(this.props.style);
      var childLayoutProps = ["alignItems", "justifyContent"].filter((prop) => style && style[prop] !== void 0);
      (0, import_invariant2.default)(childLayoutProps.length === 0, "ScrollView child layout (" + JSON.stringify(childLayoutProps) + ") must be applied through the contentContainerStyle prop.");
    }
    var contentSizeChangeProps = {};
    if (onContentSizeChange) {
      contentSizeChangeProps = {
        onLayout: this._handleContentOnLayout
      };
    }
    var hasStickyHeaderIndices = !horizontal && Array.isArray(stickyHeaderIndices);
    var children = hasStickyHeaderIndices || pagingEnabled ? React43.Children.map(this.props.children, (child, i) => {
      var isSticky = hasStickyHeaderIndices && stickyHeaderIndices.indexOf(i) > -1;
      if (child != null && (isSticky || pagingEnabled)) {
        return /* @__PURE__ */ React43.createElement(View_default, {
          style: [isSticky && styles3.stickyHeader, pagingEnabled && styles3.pagingEnabledChild]
        }, child);
      } else {
        return child;
      }
    }) : this.props.children;
    var contentContainer = /* @__PURE__ */ React43.createElement(View_default, (0, import_extends2.default)({}, contentSizeChangeProps, {
      children,
      collapsable: false,
      ref: this._setInnerViewRef,
      style: [horizontal && styles3.contentContainerHorizontal, centerContent && styles3.contentContainerCenterContent, contentContainerStyle]
    }));
    var baseStyle = horizontal ? styles3.baseHorizontal : styles3.baseVertical;
    var pagingEnabledStyle = horizontal ? styles3.pagingEnabledHorizontal : styles3.pagingEnabledVertical;
    var props = (0, import_objectSpread24.default)((0, import_objectSpread24.default)({}, other), {}, {
      style: [baseStyle, pagingEnabled && pagingEnabledStyle, this.props.style],
      onTouchStart: this.scrollResponderHandleTouchStart,
      onTouchMove: this.scrollResponderHandleTouchMove,
      onTouchEnd: this.scrollResponderHandleTouchEnd,
      onScrollBeginDrag: this.scrollResponderHandleScrollBeginDrag,
      onScrollEndDrag: this.scrollResponderHandleScrollEndDrag,
      onMomentumScrollBegin: this.scrollResponderHandleMomentumScrollBegin,
      onMomentumScrollEnd: this.scrollResponderHandleMomentumScrollEnd,
      onStartShouldSetResponder: this.scrollResponderHandleStartShouldSetResponder,
      onStartShouldSetResponderCapture: this.scrollResponderHandleStartShouldSetResponderCapture,
      onScrollShouldSetResponder: this.scrollResponderHandleScrollShouldSetResponder,
      onScroll: this._handleScroll,
      onResponderGrant: this.scrollResponderHandleResponderGrant,
      onResponderTerminationRequest: this.scrollResponderHandleTerminationRequest,
      onResponderTerminate: this.scrollResponderHandleTerminate,
      onResponderRelease: this.scrollResponderHandleResponderRelease,
      onResponderReject: this.scrollResponderHandleResponderReject
    });
    var ScrollViewClass = ScrollViewBase_default;
    (0, import_invariant2.default)(ScrollViewClass !== void 0, "ScrollViewClass must not be undefined");
    var scrollView = /* @__PURE__ */ React43.createElement(ScrollViewClass, (0, import_extends2.default)({}, props, {
      ref: this._setScrollNodeRef
    }), contentContainer);
    if (refreshControl) {
      return /* @__PURE__ */ React43.cloneElement(refreshControl, {
        style: props.style
      }, scrollView);
    }
    return scrollView;
  }
};
var commonStyle = {
  flexGrow: 1,
  flexShrink: 1,
  // Enable hardware compositing in modern browsers.
  // Creates a new layer with its own backing surface that can significantly
  // improve scroll performance.
  transform: "translateZ(0)",
  // iOS native scrolling
  WebkitOverflowScrolling: "touch"
};
var styles3 = StyleSheet_default.create({
  baseVertical: (0, import_objectSpread24.default)((0, import_objectSpread24.default)({}, commonStyle), {}, {
    flexDirection: "column",
    overflowX: "hidden",
    overflowY: "auto"
  }),
  baseHorizontal: (0, import_objectSpread24.default)((0, import_objectSpread24.default)({}, commonStyle), {}, {
    flexDirection: "row",
    overflowX: "auto",
    overflowY: "hidden"
  }),
  contentContainerHorizontal: {
    flexDirection: "row"
  },
  contentContainerCenterContent: {
    justifyContent: "center",
    flexGrow: 1
  },
  stickyHeader: {
    position: "sticky",
    top: 0,
    zIndex: 10
  },
  pagingEnabledHorizontal: {
    scrollSnapType: "x mandatory"
  },
  pagingEnabledVertical: {
    scrollSnapType: "y mandatory"
  },
  pagingEnabledChild: {
    scrollSnapAlign: "start"
  }
});
var ForwardedScrollView = /* @__PURE__ */ React43.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ React43.createElement(ScrollView2, (0, import_extends2.default)({}, props, {
    forwardedRef
  }));
});
ForwardedScrollView.displayName = "ScrollView";
var ScrollView_default = ForwardedScrollView;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/InteractionManager/index.js
var import_invariant4 = __toESM(require_invariant());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/InteractionManager/TaskQueue.js
var import_objectSpread25 = __toESM(require_objectSpread2());
var import_invariant3 = __toESM(require_invariant());
var TaskQueue = class {
  constructor(_ref) {
    var onMoreTasks = _ref.onMoreTasks;
    this._onMoreTasks = onMoreTasks;
    this._queueStack = [{
      tasks: [],
      popable: true
    }];
  }
  enqueue(task) {
    this._getCurrentQueue().push(task);
  }
  enqueueTasks(tasks) {
    tasks.forEach((task) => this.enqueue(task));
  }
  cancelTasks(tasksToCancel) {
    this._queueStack = this._queueStack.map((queue2) => (0, import_objectSpread25.default)((0, import_objectSpread25.default)({}, queue2), {}, {
      tasks: queue2.tasks.filter((task) => tasksToCancel.indexOf(task) === -1)
    })).filter((queue2, idx) => queue2.tasks.length > 0 || idx === 0);
  }
  hasTasksToProcess() {
    return this._getCurrentQueue().length > 0;
  }
  /**
   * Executes the next task in the queue.
   */
  processNext() {
    var queue2 = this._getCurrentQueue();
    if (queue2.length) {
      var task = queue2.shift();
      try {
        if (typeof task === "object" && task.gen) {
          this._genPromise(task);
        } else if (typeof task === "object" && task.run) {
          task.run();
        } else {
          (0, import_invariant3.default)(typeof task === "function", "Expected Function, SimpleTask, or PromiseTask, but got:\n" + JSON.stringify(task, null, 2));
          task();
        }
      } catch (e) {
        e.message = "TaskQueue: Error with task " + (task.name || "") + ": " + e.message;
        throw e;
      }
    }
  }
  _getCurrentQueue() {
    var stackIdx = this._queueStack.length - 1;
    var queue2 = this._queueStack[stackIdx];
    if (queue2.popable && queue2.tasks.length === 0 && stackIdx > 0) {
      this._queueStack.pop();
      return this._getCurrentQueue();
    } else {
      return queue2.tasks;
    }
  }
  _genPromise(task) {
    var length = this._queueStack.push({
      tasks: [],
      popable: false
    });
    var stackIdx = length - 1;
    var stackItem = this._queueStack[stackIdx];
    task.gen().then(() => {
      stackItem.popable = true;
      this.hasTasksToProcess() && this._onMoreTasks();
    }).catch((ex) => {
      setTimeout(() => {
        ex.message = "TaskQueue: Error resolving Promise in task " + task.name + ": " + ex.message;
        throw ex;
      }, 0);
    });
  }
};
var TaskQueue_default = TaskQueue;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/vendor/emitter/EventEmitter.js
var EventEmitter = class {
  constructor() {
    this._registry = {};
  }
  /**
   * Registers a listener that is called when the supplied event is emitted.
   * Returns a subscription that has a `remove` method to undo registration.
   */
  addListener(eventType, listener, context) {
    var registrations = allocate(this._registry, eventType);
    var registration = {
      context,
      listener,
      remove() {
        registrations.delete(registration);
      }
    };
    registrations.add(registration);
    return registration;
  }
  /**
   * Emits the supplied event. Additional arguments supplied to `emit` will be
   * passed through to each of the registered listeners.
   *
   * If a listener modifies the listeners registered for the same event, those
   * changes will not be reflected in the current invocation of `emit`.
   */
  emit(eventType) {
    var registrations = this._registry[eventType];
    if (registrations != null) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      for (var _i = 0, _arr = [...registrations]; _i < _arr.length; _i++) {
        var registration = _arr[_i];
        registration.listener.apply(registration.context, args);
      }
    }
  }
  /**
   * Removes all registered listeners.
   */
  removeAllListeners(eventType) {
    if (eventType == null) {
      this._registry = {};
    } else {
      delete this._registry[eventType];
    }
  }
  /**
   * Returns the number of registered listeners for the supplied event.
   */
  listenerCount(eventType) {
    var registrations = this._registry[eventType];
    return registrations == null ? 0 : registrations.size;
  }
};
function allocate(registry, eventType) {
  var registrations = registry[eventType];
  if (registrations == null) {
    registrations = /* @__PURE__ */ new Set();
    registry[eventType] = registrations;
  }
  return registrations;
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/requestIdleCallback/index.js
var _requestIdleCallback = function _requestIdleCallback2(cb, options) {
  return setTimeout(() => {
    var start = Date.now();
    cb({
      didTimeout: false,
      timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};
var _cancelIdleCallback = function _cancelIdleCallback2(id2) {
  clearTimeout(id2);
};
var isSupported = canUseDom_default && typeof window.requestIdleCallback !== "undefined";
var requestIdleCallback = isSupported ? window.requestIdleCallback : _requestIdleCallback;
var cancelIdleCallback = isSupported ? window.cancelIdleCallback : _cancelIdleCallback;
var requestIdleCallback_default = requestIdleCallback;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/InteractionManager/index.js
var _emitter = new EventEmitter();
var InteractionManager = {
  Events: {
    interactionStart: "interactionStart",
    interactionComplete: "interactionComplete"
  },
  /**
   * Schedule a function to run after all interactions have completed.
   */
  runAfterInteractions(task) {
    var tasks = [];
    var promise = new Promise((resolve) => {
      _scheduleUpdate();
      if (task) {
        tasks.push(task);
      }
      tasks.push({
        run: resolve,
        name: "resolve " + (task && task.name || "?")
      });
      _taskQueue.enqueueTasks(tasks);
    });
    return {
      then: promise.then.bind(promise),
      done: promise.then.bind(promise),
      cancel: () => {
        _taskQueue.cancelTasks(tasks);
      }
    };
  },
  /**
   * Notify manager that an interaction has started.
   */
  createInteractionHandle() {
    _scheduleUpdate();
    var handle = ++_inc;
    _addInteractionSet.add(handle);
    return handle;
  },
  /**
   * Notify manager that an interaction has completed.
   */
  clearInteractionHandle(handle) {
    (0, import_invariant4.default)(!!handle, "Must provide a handle to clear.");
    _scheduleUpdate();
    _addInteractionSet.delete(handle);
    _deleteInteractionSet.add(handle);
  },
  addListener: _emitter.addListener.bind(_emitter),
  /**
   *
   * @param deadline
   */
  setDeadline(deadline) {
    _deadline = deadline;
  }
};
var _interactionSet = /* @__PURE__ */ new Set();
var _addInteractionSet = /* @__PURE__ */ new Set();
var _deleteInteractionSet = /* @__PURE__ */ new Set();
var _taskQueue = new TaskQueue_default({
  onMoreTasks: _scheduleUpdate
});
var _nextUpdateHandle = 0;
var _inc = 0;
var _deadline = -1;
function _scheduleUpdate() {
  if (!_nextUpdateHandle) {
    if (_deadline > 0) {
      _nextUpdateHandle = setTimeout(_processUpdate);
    } else {
      _nextUpdateHandle = requestIdleCallback_default(_processUpdate);
    }
  }
}
function _processUpdate() {
  _nextUpdateHandle = 0;
  var interactionCount = _interactionSet.size;
  _addInteractionSet.forEach((handle) => _interactionSet.add(handle));
  _deleteInteractionSet.forEach((handle) => _interactionSet.delete(handle));
  var nextInteractionCount = _interactionSet.size;
  if (interactionCount !== 0 && nextInteractionCount === 0) {
    _emitter.emit(InteractionManager.Events.interactionComplete);
  } else if (interactionCount === 0 && nextInteractionCount !== 0) {
    _emitter.emit(InteractionManager.Events.interactionStart);
  }
  if (nextInteractionCount === 0) {
    var begin = Date.now();
    while (_taskQueue.hasTasksToProcess()) {
      _taskQueue.processNext();
      if (_deadline > 0 && Date.now() - begin >= _deadline) {
        _scheduleUpdate();
        break;
      }
    }
  }
  _addInteractionSet.clear();
  _deleteInteractionSet.clear();
}
var InteractionManager_default = InteractionManager;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Batchinator/index.js
var Batchinator = class {
  constructor(callback, delayMS) {
    this._delay = delayMS;
    this._callback = callback;
  }
  /*
   * Cleanup any pending tasks.
   *
   * By default, if there is a pending task the callback is run immediately. Set the option abort to
   * true to not call the callback if it was pending.
   */
  dispose(options) {
    if (options === void 0) {
      options = {
        abort: false
      };
    }
    if (this._taskHandle) {
      this._taskHandle.cancel();
      if (!options.abort) {
        this._callback();
      }
      this._taskHandle = null;
    }
  }
  schedule() {
    if (this._taskHandle) {
      return;
    }
    var timeoutHandle = setTimeout(() => {
      this._taskHandle = InteractionManager_default.runAfterInteractions(() => {
        this._taskHandle = null;
        this._callback();
      });
    }, this._delay);
    this._taskHandle = {
      cancel: () => clearTimeout(timeoutHandle)
    };
  }
};
var Batchinator_default = Batchinator;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Utilities/clamp.js
function clamp(min, value, max) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}
var clamp_default = clamp;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/infoLog/index.js
function infoLog() {
  return console.log(...arguments);
}
var infoLog_default = infoLog;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/CellRenderMask.js
var import_objectSpread26 = __toESM(require_objectSpread2());
var import_invariant5 = __toESM(require_invariant());
var CellRenderMask = class {
  constructor(numCells) {
    (0, import_invariant5.default)(numCells >= 0, "CellRenderMask must contain a non-negative number os cells");
    this._numCells = numCells;
    if (numCells === 0) {
      this._regions = [];
    } else {
      this._regions = [{
        first: 0,
        last: numCells - 1,
        isSpacer: true
      }];
    }
  }
  enumerateRegions() {
    return this._regions;
  }
  addCells(cells) {
    (0, import_invariant5.default)(cells.first >= 0 && cells.first < this._numCells && cells.last >= -1 && cells.last < this._numCells && cells.last >= cells.first - 1, "CellRenderMask.addCells called with invalid cell range");
    if (cells.last < cells.first) {
      return;
    }
    var _this$_findRegion = this._findRegion(cells.first), firstIntersect = _this$_findRegion[0], firstIntersectIdx = _this$_findRegion[1];
    var _this$_findRegion2 = this._findRegion(cells.last), lastIntersect = _this$_findRegion2[0], lastIntersectIdx = _this$_findRegion2[1];
    if (firstIntersectIdx === lastIntersectIdx && !firstIntersect.isSpacer) {
      return;
    }
    var newLeadRegion = [];
    var newTailRegion = [];
    var newMainRegion = (0, import_objectSpread26.default)((0, import_objectSpread26.default)({}, cells), {}, {
      isSpacer: false
    });
    if (firstIntersect.first < newMainRegion.first) {
      if (firstIntersect.isSpacer) {
        newLeadRegion.push({
          first: firstIntersect.first,
          last: newMainRegion.first - 1,
          isSpacer: true
        });
      } else {
        newMainRegion.first = firstIntersect.first;
      }
    }
    if (lastIntersect.last > newMainRegion.last) {
      if (lastIntersect.isSpacer) {
        newTailRegion.push({
          first: newMainRegion.last + 1,
          last: lastIntersect.last,
          isSpacer: true
        });
      } else {
        newMainRegion.last = lastIntersect.last;
      }
    }
    var replacementRegions = [...newLeadRegion, newMainRegion, ...newTailRegion];
    var numRegionsToDelete = lastIntersectIdx - firstIntersectIdx + 1;
    this._regions.splice(firstIntersectIdx, numRegionsToDelete, ...replacementRegions);
  }
  numCells() {
    return this._numCells;
  }
  equals(other) {
    return this._numCells === other._numCells && this._regions.length === other._regions.length && this._regions.every((region, i) => region.first === other._regions[i].first && region.last === other._regions[i].last && region.isSpacer === other._regions[i].isSpacer);
  }
  _findRegion(cellIdx) {
    var firstIdx = 0;
    var lastIdx = this._regions.length - 1;
    while (firstIdx <= lastIdx) {
      var middleIdx = Math.floor((firstIdx + lastIdx) / 2);
      var middleRegion = this._regions[middleIdx];
      if (cellIdx >= middleRegion.first && cellIdx <= middleRegion.last) {
        return [middleRegion, middleIdx];
      } else if (cellIdx < middleRegion.first) {
        lastIdx = middleIdx - 1;
      } else if (cellIdx > middleRegion.last) {
        firstIdx = middleIdx + 1;
      }
    }
    (0, import_invariant5.default)(false, "A region was not found containing cellIdx " + cellIdx);
  }
};

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/ChildListCollection.js
var import_createForOfIteratorHelperLoose = __toESM(require_createForOfIteratorHelperLoose());
var import_invariant6 = __toESM(require_invariant());
var ChildListCollection = class {
  constructor() {
    this._cellKeyToChildren = /* @__PURE__ */ new Map();
    this._childrenToCellKey = /* @__PURE__ */ new Map();
  }
  add(list, cellKey) {
    var _this$_cellKeyToChild;
    (0, import_invariant6.default)(!this._childrenToCellKey.has(list), "Trying to add already present child list");
    var cellLists = (_this$_cellKeyToChild = this._cellKeyToChildren.get(cellKey)) !== null && _this$_cellKeyToChild !== void 0 ? _this$_cellKeyToChild : /* @__PURE__ */ new Set();
    cellLists.add(list);
    this._cellKeyToChildren.set(cellKey, cellLists);
    this._childrenToCellKey.set(list, cellKey);
  }
  remove(list) {
    var cellKey = this._childrenToCellKey.get(list);
    (0, import_invariant6.default)(cellKey != null, "Trying to remove non-present child list");
    this._childrenToCellKey.delete(list);
    var cellLists = this._cellKeyToChildren.get(cellKey);
    (0, import_invariant6.default)(cellLists, "_cellKeyToChildren should contain cellKey");
    cellLists.delete(list);
    if (cellLists.size === 0) {
      this._cellKeyToChildren.delete(cellKey);
    }
  }
  forEach(fn) {
    for (var _iterator = (0, import_createForOfIteratorHelperLoose.default)(this._cellKeyToChildren.values()), _step; !(_step = _iterator()).done; ) {
      var listSet = _step.value;
      for (var _iterator2 = (0, import_createForOfIteratorHelperLoose.default)(listSet), _step2; !(_step2 = _iterator2()).done; ) {
        var list = _step2.value;
        fn(list);
      }
    }
  }
  forEachInCell(cellKey, fn) {
    var _this$_cellKeyToChild2;
    var listSet = (_this$_cellKeyToChild2 = this._cellKeyToChildren.get(cellKey)) !== null && _this$_cellKeyToChild2 !== void 0 ? _this$_cellKeyToChild2 : [];
    for (var _iterator3 = (0, import_createForOfIteratorHelperLoose.default)(listSet), _step3; !(_step3 = _iterator3()).done; ) {
      var list = _step3.value;
      fn(list);
    }
  }
  anyInCell(cellKey, fn) {
    var _this$_cellKeyToChild3;
    var listSet = (_this$_cellKeyToChild3 = this._cellKeyToChildren.get(cellKey)) !== null && _this$_cellKeyToChild3 !== void 0 ? _this$_cellKeyToChild3 : [];
    for (var _iterator4 = (0, import_createForOfIteratorHelperLoose.default)(listSet), _step4; !(_step4 = _iterator4()).done; ) {
      var list = _step4.value;
      if (fn(list)) {
        return true;
      }
    }
    return false;
  }
  size() {
    return this._childrenToCellKey.size;
  }
};

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/FillRateHelper/index.js
var import_objectSpread27 = __toESM(require_objectSpread2());
var Info = class {
  constructor() {
    this.any_blank_count = 0;
    this.any_blank_ms = 0;
    this.any_blank_speed_sum = 0;
    this.mostly_blank_count = 0;
    this.mostly_blank_ms = 0;
    this.pixels_blank = 0;
    this.pixels_sampled = 0;
    this.pixels_scrolled = 0;
    this.total_time_spent = 0;
    this.sample_count = 0;
  }
};
var DEBUG = false;
var _listeners = [];
var _minSampleCount = 10;
var _sampleRate = DEBUG ? 1 : null;
var FillRateHelper = class {
  static addListener(callback) {
    if (_sampleRate === null) {
      console.warn("Call `FillRateHelper.setSampleRate` before `addListener`.");
    }
    _listeners.push(callback);
    return {
      remove: () => {
        _listeners = _listeners.filter((listener) => callback !== listener);
      }
    };
  }
  static setSampleRate(sampleRate) {
    _sampleRate = sampleRate;
  }
  static setMinSampleCount(minSampleCount) {
    _minSampleCount = minSampleCount;
  }
  constructor(getFrameMetrics) {
    this._anyBlankStartTime = null;
    this._enabled = false;
    this._info = new Info();
    this._mostlyBlankStartTime = null;
    this._samplesStartTime = null;
    this._getFrameMetrics = getFrameMetrics;
    this._enabled = (_sampleRate || 0) > Math.random();
    this._resetData();
  }
  activate() {
    if (this._enabled && this._samplesStartTime == null) {
      DEBUG && console.debug("FillRateHelper: activate");
      this._samplesStartTime = global.performance.now();
    }
  }
  deactivateAndFlush() {
    if (!this._enabled) {
      return;
    }
    var start = this._samplesStartTime;
    if (start == null) {
      DEBUG && console.debug("FillRateHelper: bail on deactivate with no start time");
      return;
    }
    if (this._info.sample_count < _minSampleCount) {
      this._resetData();
      return;
    }
    var total_time_spent = global.performance.now() - start;
    var info = (0, import_objectSpread27.default)((0, import_objectSpread27.default)({}, this._info), {}, {
      total_time_spent
    });
    if (DEBUG) {
      var derived = {
        avg_blankness: this._info.pixels_blank / this._info.pixels_sampled,
        avg_speed: this._info.pixels_scrolled / (total_time_spent / 1e3),
        avg_speed_when_any_blank: this._info.any_blank_speed_sum / this._info.any_blank_count,
        any_blank_per_min: this._info.any_blank_count / (total_time_spent / 1e3 / 60),
        any_blank_time_frac: this._info.any_blank_ms / total_time_spent,
        mostly_blank_per_min: this._info.mostly_blank_count / (total_time_spent / 1e3 / 60),
        mostly_blank_time_frac: this._info.mostly_blank_ms / total_time_spent
      };
      for (var key in derived) {
        derived[key] = Math.round(1e3 * derived[key]) / 1e3;
      }
      console.debug("FillRateHelper deactivateAndFlush: ", {
        derived,
        info
      });
    }
    _listeners.forEach((listener) => listener(info));
    this._resetData();
  }
  computeBlankness(props, cellsAroundViewport, scrollMetrics) {
    if (!this._enabled || props.getItemCount(props.data) === 0 || cellsAroundViewport.last < cellsAroundViewport.first || this._samplesStartTime == null) {
      return 0;
    }
    var dOffset = scrollMetrics.dOffset, offset = scrollMetrics.offset, velocity = scrollMetrics.velocity, visibleLength = scrollMetrics.visibleLength;
    this._info.sample_count++;
    this._info.pixels_sampled += Math.round(visibleLength);
    this._info.pixels_scrolled += Math.round(Math.abs(dOffset));
    var scrollSpeed = Math.round(Math.abs(velocity) * 1e3);
    var now = global.performance.now();
    if (this._anyBlankStartTime != null) {
      this._info.any_blank_ms += now - this._anyBlankStartTime;
    }
    this._anyBlankStartTime = null;
    if (this._mostlyBlankStartTime != null) {
      this._info.mostly_blank_ms += now - this._mostlyBlankStartTime;
    }
    this._mostlyBlankStartTime = null;
    var blankTop = 0;
    var first = cellsAroundViewport.first;
    var firstFrame = this._getFrameMetrics(first, props);
    while (first <= cellsAroundViewport.last && (!firstFrame || !firstFrame.inLayout)) {
      firstFrame = this._getFrameMetrics(first, props);
      first++;
    }
    if (firstFrame && first > 0) {
      blankTop = Math.min(visibleLength, Math.max(0, firstFrame.offset - offset));
    }
    var blankBottom = 0;
    var last = cellsAroundViewport.last;
    var lastFrame = this._getFrameMetrics(last, props);
    while (last >= cellsAroundViewport.first && (!lastFrame || !lastFrame.inLayout)) {
      lastFrame = this._getFrameMetrics(last, props);
      last--;
    }
    if (lastFrame && last < props.getItemCount(props.data) - 1) {
      var bottomEdge = lastFrame.offset + lastFrame.length;
      blankBottom = Math.min(visibleLength, Math.max(0, offset + visibleLength - bottomEdge));
    }
    var pixels_blank = Math.round(blankTop + blankBottom);
    var blankness = pixels_blank / visibleLength;
    if (blankness > 0) {
      this._anyBlankStartTime = now;
      this._info.any_blank_speed_sum += scrollSpeed;
      this._info.any_blank_count++;
      this._info.pixels_blank += pixels_blank;
      if (blankness > 0.5) {
        this._mostlyBlankStartTime = now;
        this._info.mostly_blank_count++;
      }
    } else if (scrollSpeed < 0.01 || Math.abs(dOffset) < 1) {
      this.deactivateAndFlush();
    }
    return blankness;
  }
  enabled() {
    return this._enabled;
  }
  _resetData() {
    this._anyBlankStartTime = null;
    this._info = new Info();
    this._mostlyBlankStartTime = null;
    this._samplesStartTime = null;
  }
};
var FillRateHelper_default = FillRateHelper;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/StateSafePureComponent.js
var import_invariant7 = __toESM(require_invariant());
import * as React44 from "react";
var StateSafePureComponent = class extends React44.PureComponent {
  constructor(props) {
    super(props);
    this._inAsyncStateUpdate = false;
    this._installSetStateHooks();
  }
  setState(partialState, callback) {
    if (typeof partialState === "function") {
      super.setState((state, props) => {
        this._inAsyncStateUpdate = true;
        var ret;
        try {
          ret = partialState(state, props);
        } catch (err) {
          throw err;
        } finally {
          this._inAsyncStateUpdate = false;
        }
        return ret;
      }, callback);
    } else {
      super.setState(partialState, callback);
    }
  }
  _installSetStateHooks() {
    var that = this;
    var props = this.props, state = this.state;
    Object.defineProperty(this, "props", {
      get() {
        (0, import_invariant7.default)(!that._inAsyncStateUpdate, '"this.props" should not be accessed during state updates');
        return props;
      },
      set(newProps) {
        props = newProps;
      }
    });
    Object.defineProperty(this, "state", {
      get() {
        (0, import_invariant7.default)(!that._inAsyncStateUpdate, '"this.state" should not be acceessed during state updates');
        return state;
      },
      set(newState) {
        state = newState;
      }
    });
  }
};

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/ViewabilityHelper/index.js
var import_objectSpread28 = __toESM(require_objectSpread2());
var import_createForOfIteratorHelperLoose2 = __toESM(require_createForOfIteratorHelperLoose());
var import_invariant8 = __toESM(require_invariant());
var ViewabilityHelper = class {
  constructor(config2) {
    if (config2 === void 0) {
      config2 = {
        viewAreaCoveragePercentThreshold: 0
      };
    }
    this._hasInteracted = false;
    this._timers = /* @__PURE__ */ new Set();
    this._viewableIndices = [];
    this._viewableItems = /* @__PURE__ */ new Map();
    this._config = config2;
  }
  /**
   * Cleanup, e.g. on unmount. Clears any pending timers.
   */
  dispose() {
    this._timers.forEach(clearTimeout);
  }
  /**
   * Determines which items are viewable based on the current metrics and config.
   */
  computeViewableItems(props, scrollOffset, viewportHeight, getFrameMetrics, renderRange) {
    var itemCount = props.getItemCount(props.data);
    var _this$_config = this._config, itemVisiblePercentThreshold = _this$_config.itemVisiblePercentThreshold, viewAreaCoveragePercentThreshold = _this$_config.viewAreaCoveragePercentThreshold;
    var viewAreaMode = viewAreaCoveragePercentThreshold != null;
    var viewablePercentThreshold = viewAreaMode ? viewAreaCoveragePercentThreshold : itemVisiblePercentThreshold;
    (0, import_invariant8.default)(viewablePercentThreshold != null && itemVisiblePercentThreshold != null !== (viewAreaCoveragePercentThreshold != null), "Must set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold");
    var viewableIndices = [];
    if (itemCount === 0) {
      return viewableIndices;
    }
    var firstVisible = -1;
    var _ref = renderRange || {
      first: 0,
      last: itemCount - 1
    }, first = _ref.first, last = _ref.last;
    if (last >= itemCount) {
      console.warn("Invalid render range computing viewability " + JSON.stringify({
        renderRange,
        itemCount
      }));
      return [];
    }
    for (var idx = first; idx <= last; idx++) {
      var metrics = getFrameMetrics(idx, props);
      if (!metrics) {
        continue;
      }
      var top = metrics.offset - scrollOffset;
      var bottom = top + metrics.length;
      if (top < viewportHeight && bottom > 0) {
        firstVisible = idx;
        if (_isViewable(viewAreaMode, viewablePercentThreshold, top, bottom, viewportHeight, metrics.length)) {
          viewableIndices.push(idx);
        }
      } else if (firstVisible >= 0) {
        break;
      }
    }
    return viewableIndices;
  }
  /**
   * Figures out which items are viewable and how that has changed from before and calls
   * `onViewableItemsChanged` as appropriate.
   */
  onUpdate(props, scrollOffset, viewportHeight, getFrameMetrics, createViewToken, onViewableItemsChanged, renderRange) {
    var itemCount = props.getItemCount(props.data);
    if (this._config.waitForInteraction && !this._hasInteracted || itemCount === 0 || !getFrameMetrics(0, props)) {
      return;
    }
    var viewableIndices = [];
    if (itemCount) {
      viewableIndices = this.computeViewableItems(props, scrollOffset, viewportHeight, getFrameMetrics, renderRange);
    }
    if (this._viewableIndices.length === viewableIndices.length && this._viewableIndices.every((v, ii) => v === viewableIndices[ii])) {
      return;
    }
    this._viewableIndices = viewableIndices;
    if (this._config.minimumViewTime) {
      var handle = setTimeout(() => {
        this._timers.delete(handle);
        this._onUpdateSync(props, viewableIndices, onViewableItemsChanged, createViewToken);
      }, this._config.minimumViewTime);
      this._timers.add(handle);
    } else {
      this._onUpdateSync(props, viewableIndices, onViewableItemsChanged, createViewToken);
    }
  }
  /**
   * clean-up cached _viewableIndices to evaluate changed items on next update
   */
  resetViewableIndices() {
    this._viewableIndices = [];
  }
  /**
   * Records that an interaction has happened even if there has been no scroll.
   */
  recordInteraction() {
    this._hasInteracted = true;
  }
  _onUpdateSync(props, viewableIndicesToCheck, onViewableItemsChanged, createViewToken) {
    viewableIndicesToCheck = viewableIndicesToCheck.filter((ii) => this._viewableIndices.includes(ii));
    var prevItems = this._viewableItems;
    var nextItems = new Map(viewableIndicesToCheck.map((ii) => {
      var viewable2 = createViewToken(ii, true, props);
      return [viewable2.key, viewable2];
    }));
    var changed = [];
    for (var _iterator = (0, import_createForOfIteratorHelperLoose2.default)(nextItems), _step; !(_step = _iterator()).done; ) {
      var _step$value = _step.value, key = _step$value[0], viewable = _step$value[1];
      if (!prevItems.has(key)) {
        changed.push(viewable);
      }
    }
    for (var _iterator2 = (0, import_createForOfIteratorHelperLoose2.default)(prevItems), _step2; !(_step2 = _iterator2()).done; ) {
      var _step2$value = _step2.value, _key = _step2$value[0], _viewable = _step2$value[1];
      if (!nextItems.has(_key)) {
        changed.push((0, import_objectSpread28.default)((0, import_objectSpread28.default)({}, _viewable), {}, {
          isViewable: false
        }));
      }
    }
    if (changed.length > 0) {
      this._viewableItems = nextItems;
      onViewableItemsChanged({
        viewableItems: Array.from(nextItems.values()),
        changed,
        viewabilityConfig: this._config
      });
    }
  }
};
function _isViewable(viewAreaMode, viewablePercentThreshold, top, bottom, viewportHeight, itemLength) {
  if (_isEntirelyVisible(top, bottom, viewportHeight)) {
    return true;
  } else {
    var pixels = _getPixelsVisible(top, bottom, viewportHeight);
    var percent = 100 * (viewAreaMode ? pixels / viewportHeight : pixels / itemLength);
    return percent >= viewablePercentThreshold;
  }
}
function _getPixelsVisible(top, bottom, viewportHeight) {
  var visibleHeight = Math.min(bottom, viewportHeight) - Math.max(top, 0);
  return Math.max(0, visibleHeight);
}
function _isEntirelyVisible(top, bottom, viewportHeight) {
  return top >= 0 && bottom <= viewportHeight && bottom > top;
}
var ViewabilityHelper_default = ViewabilityHelper;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/VirtualizedListCellRenderer.js
var import_extends3 = __toESM(require_extends());
var import_objectSpread210 = __toESM(require_objectSpread2());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/VirtualizedListContext.js
var import_objectSpread29 = __toESM(require_objectSpread2());
import * as React45 from "react";
import { useContext as useContext7, useMemo as useMemo5 } from "react";
var __DEV__2 = process.env.NODE_ENV !== "production";
var VirtualizedListContext = /* @__PURE__ */ React45.createContext(null);
if (__DEV__2) {
  VirtualizedListContext.displayName = "VirtualizedListContext";
}
function VirtualizedListContextProvider(_ref2) {
  var children = _ref2.children, value = _ref2.value;
  var context = useMemo5(() => ({
    cellKey: null,
    getScrollMetrics: value.getScrollMetrics,
    horizontal: value.horizontal,
    getOutermostParentListRef: value.getOutermostParentListRef,
    registerAsNestedChild: value.registerAsNestedChild,
    unregisterAsNestedChild: value.unregisterAsNestedChild
  }), [value.getScrollMetrics, value.horizontal, value.getOutermostParentListRef, value.registerAsNestedChild, value.unregisterAsNestedChild]);
  return /* @__PURE__ */ React45.createElement(VirtualizedListContext.Provider, {
    value: context
  }, children);
}
function VirtualizedListCellContextProvider(_ref3) {
  var cellKey = _ref3.cellKey, children = _ref3.children;
  var currContext = useContext7(VirtualizedListContext);
  var context = useMemo5(() => currContext == null ? null : (0, import_objectSpread29.default)((0, import_objectSpread29.default)({}, currContext), {}, {
    cellKey
  }), [currContext, cellKey]);
  return /* @__PURE__ */ React45.createElement(VirtualizedListContext.Provider, {
    value: context
  }, children);
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/VirtualizedListCellRenderer.js
var import_invariant9 = __toESM(require_invariant());
import * as React46 from "react";
var CellRenderer = class extends React46.Component {
  constructor() {
    super(...arguments);
    this.state = {
      separatorProps: {
        highlighted: false,
        leadingItem: this.props.item
      }
    };
    this._separators = {
      highlight: () => {
        var _this$props = this.props, cellKey = _this$props.cellKey, prevCellKey = _this$props.prevCellKey;
        this.props.onUpdateSeparators([cellKey, prevCellKey], {
          highlighted: true
        });
      },
      unhighlight: () => {
        var _this$props2 = this.props, cellKey = _this$props2.cellKey, prevCellKey = _this$props2.prevCellKey;
        this.props.onUpdateSeparators([cellKey, prevCellKey], {
          highlighted: false
        });
      },
      updateProps: (select, newProps) => {
        var _this$props3 = this.props, cellKey = _this$props3.cellKey, prevCellKey = _this$props3.prevCellKey;
        this.props.onUpdateSeparators([select === "leading" ? prevCellKey : cellKey], newProps);
      }
    };
    this._onLayout = (nativeEvent) => {
      this.props.onCellLayout && this.props.onCellLayout(nativeEvent, this.props.cellKey, this.props.index);
    };
  }
  static getDerivedStateFromProps(props, prevState) {
    return {
      separatorProps: (0, import_objectSpread210.default)((0, import_objectSpread210.default)({}, prevState.separatorProps), {}, {
        leadingItem: props.item
      })
    };
  }
  // TODO: consider factoring separator stuff out of VirtualizedList into FlatList since it's not
  // reused by SectionList and we can keep VirtualizedList simpler.
  // $FlowFixMe[missing-local-annot]
  updateSeparatorProps(newProps) {
    this.setState((state) => ({
      separatorProps: (0, import_objectSpread210.default)((0, import_objectSpread210.default)({}, state.separatorProps), newProps)
    }));
  }
  componentWillUnmount() {
    this.props.onUnmount(this.props.cellKey);
  }
  _renderElement(renderItem, ListItemComponent, item, index) {
    if (renderItem && ListItemComponent) {
      console.warn("VirtualizedList: Both ListItemComponent and renderItem props are present. ListItemComponent will take precedence over renderItem.");
    }
    if (ListItemComponent) {
      return /* @__PURE__ */ React46.createElement(ListItemComponent, {
        item,
        index,
        separators: this._separators
      });
    }
    if (renderItem) {
      return renderItem({
        item,
        index,
        separators: this._separators
      });
    }
    (0, import_invariant9.default)(false, "VirtualizedList: Either ListItemComponent or renderItem props are required but none were found.");
  }
  render() {
    var _this$props4 = this.props, CellRendererComponent = _this$props4.CellRendererComponent, ItemSeparatorComponent = _this$props4.ItemSeparatorComponent, ListItemComponent = _this$props4.ListItemComponent, cellKey = _this$props4.cellKey, horizontal = _this$props4.horizontal, item = _this$props4.item, index = _this$props4.index, inversionStyle = _this$props4.inversionStyle, onCellFocusCapture = _this$props4.onCellFocusCapture, onCellLayout = _this$props4.onCellLayout, renderItem = _this$props4.renderItem;
    var element = this._renderElement(renderItem, ListItemComponent, item, index);
    var itemSeparator = /* @__PURE__ */ React46.isValidElement(ItemSeparatorComponent) ? (
      // $FlowFixMe[incompatible-type]
      ItemSeparatorComponent
    ) : (
      // $FlowFixMe[incompatible-type]
      ItemSeparatorComponent && /* @__PURE__ */ React46.createElement(ItemSeparatorComponent, this.state.separatorProps)
    );
    var cellStyle = inversionStyle ? horizontal ? [styles4.rowReverse, inversionStyle] : [styles4.columnReverse, inversionStyle] : horizontal ? [styles4.row, inversionStyle] : inversionStyle;
    var result = !CellRendererComponent ? /* @__PURE__ */ React46.createElement(View_default, (0, import_extends3.default)({
      style: cellStyle,
      onFocusCapture: onCellFocusCapture
    }, onCellLayout && {
      onLayout: this._onLayout
    }), element, itemSeparator) : /* @__PURE__ */ React46.createElement(CellRendererComponent, (0, import_extends3.default)({
      cellKey,
      index,
      item,
      style: cellStyle,
      onFocusCapture: onCellFocusCapture
    }, onCellLayout && {
      onLayout: this._onLayout
    }), element, itemSeparator);
    return /* @__PURE__ */ React46.createElement(VirtualizedListCellContextProvider, {
      cellKey: this.props.cellKey
    }, result);
  }
};
var styles4 = StyleSheet_default.create({
  row: {
    flexDirection: "row"
  },
  rowReverse: {
    flexDirection: "row-reverse"
  },
  columnReverse: {
    flexDirection: "column-reverse"
  }
});

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/VirtualizeUtils/index.js
function elementsThatOverlapOffsets(offsets, props, getFrameMetrics, zoomScale) {
  if (zoomScale === void 0) {
    zoomScale = 1;
  }
  var itemCount = props.getItemCount(props.data);
  var result = [];
  for (var offsetIndex = 0; offsetIndex < offsets.length; offsetIndex++) {
    var currentOffset = offsets[offsetIndex];
    var left2 = 0;
    var right2 = itemCount - 1;
    while (left2 <= right2) {
      var mid = left2 + (right2 - left2 >>> 1);
      var frame = getFrameMetrics(mid, props);
      var scaledOffsetStart = frame.offset * zoomScale;
      var scaledOffsetEnd = (frame.offset + frame.length) * zoomScale;
      if (mid === 0 && currentOffset < scaledOffsetStart || mid !== 0 && currentOffset <= scaledOffsetStart) {
        right2 = mid - 1;
      } else if (currentOffset > scaledOffsetEnd) {
        left2 = mid + 1;
      } else {
        result[offsetIndex] = mid;
        break;
      }
    }
  }
  return result;
}
function newRangeCount(prev, next) {
  return next.last - next.first + 1 - Math.max(0, 1 + Math.min(next.last, prev.last) - Math.max(next.first, prev.first));
}
function computeWindowedRenderLimits(props, maxToRenderPerBatch, windowSize, prev, getFrameMetricsApprox, scrollMetrics) {
  var itemCount = props.getItemCount(props.data);
  if (itemCount === 0) {
    return {
      first: 0,
      last: -1
    };
  }
  var offset = scrollMetrics.offset, velocity = scrollMetrics.velocity, visibleLength = scrollMetrics.visibleLength, _scrollMetrics$zoomSc = scrollMetrics.zoomScale, zoomScale = _scrollMetrics$zoomSc === void 0 ? 1 : _scrollMetrics$zoomSc;
  var visibleBegin = Math.max(0, offset);
  var visibleEnd = visibleBegin + visibleLength;
  var overscanLength = (windowSize - 1) * visibleLength;
  var leadFactor = 0.5;
  var fillPreference = velocity > 1 ? "after" : velocity < -1 ? "before" : "none";
  var overscanBegin = Math.max(0, visibleBegin - (1 - leadFactor) * overscanLength);
  var overscanEnd = Math.max(0, visibleEnd + leadFactor * overscanLength);
  var lastItemOffset = getFrameMetricsApprox(itemCount - 1, props).offset * zoomScale;
  if (lastItemOffset < overscanBegin) {
    return {
      first: Math.max(0, itemCount - 1 - maxToRenderPerBatch),
      last: itemCount - 1
    };
  }
  var _elementsThatOverlapO = elementsThatOverlapOffsets([overscanBegin, visibleBegin, visibleEnd, overscanEnd], props, getFrameMetricsApprox, zoomScale), overscanFirst = _elementsThatOverlapO[0], first = _elementsThatOverlapO[1], last = _elementsThatOverlapO[2], overscanLast = _elementsThatOverlapO[3];
  overscanFirst = overscanFirst == null ? 0 : overscanFirst;
  first = first == null ? Math.max(0, overscanFirst) : first;
  overscanLast = overscanLast == null ? itemCount - 1 : overscanLast;
  last = last == null ? Math.min(overscanLast, first + maxToRenderPerBatch - 1) : last;
  var visible = {
    first,
    last
  };
  var newCellCount = newRangeCount(prev, visible);
  while (true) {
    if (first <= overscanFirst && last >= overscanLast) {
      break;
    }
    var maxNewCells = newCellCount >= maxToRenderPerBatch;
    var firstWillAddMore = first <= prev.first || first > prev.last;
    var firstShouldIncrement = first > overscanFirst && (!maxNewCells || !firstWillAddMore);
    var lastWillAddMore = last >= prev.last || last < prev.first;
    var lastShouldIncrement = last < overscanLast && (!maxNewCells || !lastWillAddMore);
    if (maxNewCells && !firstShouldIncrement && !lastShouldIncrement) {
      break;
    }
    if (firstShouldIncrement && !(fillPreference === "after" && lastShouldIncrement && lastWillAddMore)) {
      if (firstWillAddMore) {
        newCellCount++;
      }
      first--;
    }
    if (lastShouldIncrement && !(fillPreference === "before" && firstShouldIncrement && firstWillAddMore)) {
      if (lastWillAddMore) {
        newCellCount++;
      }
      last++;
    }
  }
  if (!(last >= first && first >= 0 && last < itemCount && first >= overscanFirst && last <= overscanLast && first <= visible.first && last >= visible.last)) {
    throw new Error("Bad window calculation " + JSON.stringify({
      first,
      last,
      itemCount,
      overscanFirst,
      overscanLast,
      visible
    }));
  }
  return {
    first,
    last
  };
}
function keyExtractor(item, index) {
  if (typeof item === "object" && (item == null ? void 0 : item.key) != null) {
    return item.key;
  }
  if (typeof item === "object" && (item == null ? void 0 : item.id) != null) {
    return item.id;
  }
  return String(index);
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/index.js
var import_invariant10 = __toESM(require_invariant());
var import_nullthrows = __toESM(require_nullthrows());
import * as React47 from "react";
var __DEV__3 = process.env.NODE_ENV !== "production";
var ON_EDGE_REACHED_EPSILON = 1e-3;
var _usedIndexForKey = false;
var _keylessItemComponentName = "";
function horizontalOrDefault(horizontal) {
  return horizontal !== null && horizontal !== void 0 ? horizontal : false;
}
function initialNumToRenderOrDefault(initialNumToRender) {
  return initialNumToRender !== null && initialNumToRender !== void 0 ? initialNumToRender : 10;
}
function maxToRenderPerBatchOrDefault(maxToRenderPerBatch) {
  return maxToRenderPerBatch !== null && maxToRenderPerBatch !== void 0 ? maxToRenderPerBatch : 10;
}
function onStartReachedThresholdOrDefault(onStartReachedThreshold) {
  return onStartReachedThreshold !== null && onStartReachedThreshold !== void 0 ? onStartReachedThreshold : 2;
}
function onEndReachedThresholdOrDefault(onEndReachedThreshold) {
  return onEndReachedThreshold !== null && onEndReachedThreshold !== void 0 ? onEndReachedThreshold : 2;
}
function getScrollingThreshold(threshold, visibleLength) {
  return threshold * visibleLength / 2;
}
function scrollEventThrottleOrDefault(scrollEventThrottle) {
  return scrollEventThrottle !== null && scrollEventThrottle !== void 0 ? scrollEventThrottle : 50;
}
function windowSizeOrDefault(windowSize) {
  return windowSize !== null && windowSize !== void 0 ? windowSize : 21;
}
function findLastWhere(arr, predicate) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i])) {
      return arr[i];
    }
  }
  return null;
}
var VirtualizedList = class _VirtualizedList extends StateSafePureComponent {
  // scrollToEnd may be janky without getItemLayout prop
  scrollToEnd(params) {
    var animated = params ? params.animated : true;
    var veryLast = this.props.getItemCount(this.props.data) - 1;
    if (veryLast < 0) {
      return;
    }
    var frame = this.__getFrameMetricsApprox(veryLast, this.props);
    var offset = Math.max(0, frame.offset + frame.length + this._footerLength - this._scrollMetrics.visibleLength);
    if (this._scrollRef == null) {
      return;
    }
    if (this._scrollRef.scrollTo == null) {
      console.warn("No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.");
      return;
    }
    this._scrollRef.scrollTo(horizontalOrDefault(this.props.horizontal) ? {
      x: offset,
      animated
    } : {
      y: offset,
      animated
    });
  }
  // scrollToIndex may be janky without getItemLayout prop
  scrollToIndex(params) {
    var _this$props = this.props, data = _this$props.data, horizontal = _this$props.horizontal, getItemCount = _this$props.getItemCount, getItemLayout = _this$props.getItemLayout, onScrollToIndexFailed = _this$props.onScrollToIndexFailed;
    var animated = params.animated, index = params.index, viewOffset = params.viewOffset, viewPosition = params.viewPosition;
    (0, import_invariant10.default)(index >= 0, "scrollToIndex out of range: requested index " + index + " but minimum is 0");
    (0, import_invariant10.default)(getItemCount(data) >= 1, "scrollToIndex out of range: item length " + getItemCount(data) + " but minimum is 1");
    (0, import_invariant10.default)(index < getItemCount(data), "scrollToIndex out of range: requested index " + index + " is out of 0 to " + (getItemCount(data) - 1));
    if (!getItemLayout && index > this._highestMeasuredFrameIndex) {
      (0, import_invariant10.default)(!!onScrollToIndexFailed, "scrollToIndex should be used in conjunction with getItemLayout or onScrollToIndexFailed, otherwise there is no way to know the location of offscreen indices or handle failures.");
      onScrollToIndexFailed({
        averageItemLength: this._averageCellLength,
        highestMeasuredFrameIndex: this._highestMeasuredFrameIndex,
        index
      });
      return;
    }
    var frame = this.__getFrameMetricsApprox(Math.floor(index), this.props);
    var offset = Math.max(0, this._getOffsetApprox(index, this.props) - (viewPosition || 0) * (this._scrollMetrics.visibleLength - frame.length)) - (viewOffset || 0);
    if (this._scrollRef == null) {
      return;
    }
    if (this._scrollRef.scrollTo == null) {
      console.warn("No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.");
      return;
    }
    this._scrollRef.scrollTo(horizontal ? {
      x: offset,
      animated
    } : {
      y: offset,
      animated
    });
  }
  // scrollToItem may be janky without getItemLayout prop. Required linear scan through items -
  // use scrollToIndex instead if possible.
  scrollToItem(params) {
    var item = params.item;
    var _this$props2 = this.props, data = _this$props2.data, getItem = _this$props2.getItem, getItemCount = _this$props2.getItemCount;
    var itemCount = getItemCount(data);
    for (var _index = 0; _index < itemCount; _index++) {
      if (getItem(data, _index) === item) {
        this.scrollToIndex((0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, params), {}, {
          index: _index
        }));
        break;
      }
    }
  }
  /**
   * Scroll to a specific content pixel offset in the list.
   *
   * Param `offset` expects the offset to scroll to.
   * In case of `horizontal` is true, the offset is the x-value,
   * in any other case the offset is the y-value.
   *
   * Param `animated` (`true` by default) defines whether the list
   * should do an animation while scrolling.
   */
  scrollToOffset(params) {
    var animated = params.animated, offset = params.offset;
    if (this._scrollRef == null) {
      return;
    }
    if (this._scrollRef.scrollTo == null) {
      console.warn("No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.");
      return;
    }
    this._scrollRef.scrollTo(horizontalOrDefault(this.props.horizontal) ? {
      x: offset,
      animated
    } : {
      y: offset,
      animated
    });
  }
  recordInteraction() {
    this._nestedChildLists.forEach((childList) => {
      childList.recordInteraction();
    });
    this._viewabilityTuples.forEach((t) => {
      t.viewabilityHelper.recordInteraction();
    });
    this._updateViewableItems(this.props, this.state.cellsAroundViewport);
  }
  flashScrollIndicators() {
    if (this._scrollRef == null) {
      return;
    }
    this._scrollRef.flashScrollIndicators();
  }
  /**
   * Provides a handle to the underlying scroll responder.
   * Note that `this._scrollRef` might not be a `ScrollView`, so we
   * need to check that it responds to `getScrollResponder` before calling it.
   */
  getScrollResponder() {
    if (this._scrollRef && this._scrollRef.getScrollResponder) {
      return this._scrollRef.getScrollResponder();
    }
  }
  getScrollableNode() {
    if (this._scrollRef && this._scrollRef.getScrollableNode) {
      return this._scrollRef.getScrollableNode();
    } else {
      return this._scrollRef;
    }
  }
  getScrollRef() {
    if (this._scrollRef && this._scrollRef.getScrollRef) {
      return this._scrollRef.getScrollRef();
    } else {
      return this._scrollRef;
    }
  }
  _getCellKey() {
    var _this$context;
    return ((_this$context = this.context) == null ? void 0 : _this$context.cellKey) || "rootList";
  }
  // $FlowFixMe[missing-local-annot]
  hasMore() {
    return this._hasMore;
  }
  // $FlowFixMe[missing-local-annot]
  // REACT-NATIVE-WEB patch to preserve during future RN merges: Support inverted wheel scroller.
  constructor(_props) {
    var _this$props$updateCel;
    super(_props);
    this._getScrollMetrics = () => {
      return this._scrollMetrics;
    };
    this._getOutermostParentListRef = () => {
      if (this._isNestedWithSameOrientation()) {
        return this.context.getOutermostParentListRef();
      } else {
        return this;
      }
    };
    this._registerAsNestedChild = (childList) => {
      this._nestedChildLists.add(childList.ref, childList.cellKey);
      if (this._hasInteracted) {
        childList.ref.recordInteraction();
      }
    };
    this._unregisterAsNestedChild = (childList) => {
      this._nestedChildLists.remove(childList.ref);
    };
    this._onUpdateSeparators = (keys, newProps) => {
      keys.forEach((key) => {
        var ref = key != null && this._cellRefs[key];
        ref && ref.updateSeparatorProps(newProps);
      });
    };
    this._getSpacerKey = (isVertical) => isVertical ? "height" : "width";
    this._averageCellLength = 0;
    this._cellRefs = {};
    this._frames = {};
    this._footerLength = 0;
    this._hasTriggeredInitialScrollToIndex = false;
    this._hasInteracted = false;
    this._hasMore = false;
    this._hasWarned = {};
    this._headerLength = 0;
    this._hiPriInProgress = false;
    this._highestMeasuredFrameIndex = 0;
    this._indicesToKeys = /* @__PURE__ */ new Map();
    this._lastFocusedCellKey = null;
    this._nestedChildLists = new ChildListCollection();
    this._offsetFromParentVirtualizedList = 0;
    this._prevParentOffset = 0;
    this._scrollMetrics = {
      contentLength: 0,
      dOffset: 0,
      dt: 10,
      offset: 0,
      timestamp: 0,
      velocity: 0,
      visibleLength: 0,
      zoomScale: 1
    };
    this._scrollRef = null;
    this._sentStartForContentLength = 0;
    this._sentEndForContentLength = 0;
    this._totalCellLength = 0;
    this._totalCellsMeasured = 0;
    this._viewabilityTuples = [];
    this._captureScrollRef = (ref) => {
      this._scrollRef = ref;
    };
    this._defaultRenderScrollComponent = (props) => {
      var onRefresh = props.onRefresh;
      if (this._isNestedWithSameOrientation()) {
        return /* @__PURE__ */ React47.createElement(View_default, props);
      } else if (onRefresh) {
        var _props$refreshing;
        (0, import_invariant10.default)(typeof props.refreshing === "boolean", "`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `" + JSON.stringify((_props$refreshing = props.refreshing) !== null && _props$refreshing !== void 0 ? _props$refreshing : "undefined") + "`");
        return (
          // $FlowFixMe[prop-missing] Invalid prop usage
          // $FlowFixMe[incompatible-use]
          /* @__PURE__ */ React47.createElement(ScrollView_default, (0, import_extends4.default)({}, props, {
            refreshControl: props.refreshControl == null ? /* @__PURE__ */ React47.createElement(
              RefreshControl_default,
              {
                refreshing: props.refreshing,
                onRefresh,
                progressViewOffset: props.progressViewOffset
              }
            ) : props.refreshControl
          }))
        );
      } else {
        return /* @__PURE__ */ React47.createElement(ScrollView_default, props);
      }
    };
    this._onCellLayout = (e, cellKey, index) => {
      var layout = e.nativeEvent.layout;
      var next = {
        offset: this._selectOffset(layout),
        length: this._selectLength(layout),
        index,
        inLayout: true
      };
      var curr = this._frames[cellKey];
      if (!curr || next.offset !== curr.offset || next.length !== curr.length || index !== curr.index) {
        this._totalCellLength += next.length - (curr ? curr.length : 0);
        this._totalCellsMeasured += curr ? 0 : 1;
        this._averageCellLength = this._totalCellLength / this._totalCellsMeasured;
        this._frames[cellKey] = next;
        this._highestMeasuredFrameIndex = Math.max(this._highestMeasuredFrameIndex, index);
        this._scheduleCellsToRenderUpdate();
      } else {
        this._frames[cellKey].inLayout = true;
      }
      this._triggerRemeasureForChildListsInCell(cellKey);
      this._computeBlankness();
      this._updateViewableItems(this.props, this.state.cellsAroundViewport);
    };
    this._onCellUnmount = (cellKey) => {
      delete this._cellRefs[cellKey];
      var curr = this._frames[cellKey];
      if (curr) {
        this._frames[cellKey] = (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, curr), {}, {
          inLayout: false
        });
      }
    };
    this._onLayout = (e) => {
      if (this._isNestedWithSameOrientation()) {
        this.measureLayoutRelativeToContainingList();
      } else {
        this._scrollMetrics.visibleLength = this._selectLength(e.nativeEvent.layout);
      }
      this.props.onLayout && this.props.onLayout(e);
      this._scheduleCellsToRenderUpdate();
      this._maybeCallOnEdgeReached();
    };
    this._onLayoutEmpty = (e) => {
      this.props.onLayout && this.props.onLayout(e);
    };
    this._onLayoutFooter = (e) => {
      this._triggerRemeasureForChildListsInCell(this._getFooterCellKey());
      this._footerLength = this._selectLength(e.nativeEvent.layout);
    };
    this._onLayoutHeader = (e) => {
      this._headerLength = this._selectLength(e.nativeEvent.layout);
    };
    this._onContentSizeChange = (width, height) => {
      if (width > 0 && height > 0 && this.props.initialScrollIndex != null && this.props.initialScrollIndex > 0 && !this._hasTriggeredInitialScrollToIndex) {
        if (this.props.contentOffset == null) {
          if (this.props.initialScrollIndex < this.props.getItemCount(this.props.data)) {
            this.scrollToIndex({
              animated: false,
              index: (0, import_nullthrows.default)(this.props.initialScrollIndex)
            });
          } else {
            this.scrollToEnd({
              animated: false
            });
          }
        }
        this._hasTriggeredInitialScrollToIndex = true;
      }
      if (this.props.onContentSizeChange) {
        this.props.onContentSizeChange(width, height);
      }
      this._scrollMetrics.contentLength = this._selectLength({
        height,
        width
      });
      this._scheduleCellsToRenderUpdate();
      this._maybeCallOnEdgeReached();
    };
    this._convertParentScrollMetrics = (metrics) => {
      var offset = metrics.offset - this._offsetFromParentVirtualizedList;
      var visibleLength = metrics.visibleLength;
      var dOffset = offset - this._scrollMetrics.offset;
      var contentLength = this._scrollMetrics.contentLength;
      return {
        visibleLength,
        contentLength,
        offset,
        dOffset
      };
    };
    this._onScroll = (e) => {
      this._nestedChildLists.forEach((childList) => {
        childList._onScroll(e);
      });
      if (this.props.onScroll) {
        this.props.onScroll(e);
      }
      var timestamp = e.timeStamp;
      var visibleLength = this._selectLength(e.nativeEvent.layoutMeasurement);
      var contentLength = this._selectLength(e.nativeEvent.contentSize);
      var offset = this._selectOffset(e.nativeEvent.contentOffset);
      var dOffset = offset - this._scrollMetrics.offset;
      if (this._isNestedWithSameOrientation()) {
        if (this._scrollMetrics.contentLength === 0) {
          return;
        }
        var _this$_convertParentS = this._convertParentScrollMetrics({
          visibleLength,
          offset
        });
        visibleLength = _this$_convertParentS.visibleLength;
        contentLength = _this$_convertParentS.contentLength;
        offset = _this$_convertParentS.offset;
        dOffset = _this$_convertParentS.dOffset;
      }
      var dt = this._scrollMetrics.timestamp ? Math.max(1, timestamp - this._scrollMetrics.timestamp) : 1;
      var velocity = dOffset / dt;
      if (dt > 500 && this._scrollMetrics.dt > 500 && contentLength > 5 * visibleLength && !this._hasWarned.perf) {
        infoLog_default("VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc.", {
          dt,
          prevDt: this._scrollMetrics.dt,
          contentLength
        });
        this._hasWarned.perf = true;
      }
      var zoomScale = e.nativeEvent.zoomScale < 0 ? 1 : e.nativeEvent.zoomScale;
      this._scrollMetrics = {
        contentLength,
        dt,
        dOffset,
        offset,
        timestamp,
        velocity,
        visibleLength,
        zoomScale
      };
      this._updateViewableItems(this.props, this.state.cellsAroundViewport);
      if (!this.props) {
        return;
      }
      this._maybeCallOnEdgeReached();
      if (velocity !== 0) {
        this._fillRateHelper.activate();
      }
      this._computeBlankness();
      this._scheduleCellsToRenderUpdate();
    };
    this._onScrollBeginDrag = (e) => {
      this._nestedChildLists.forEach((childList) => {
        childList._onScrollBeginDrag(e);
      });
      this._viewabilityTuples.forEach((tuple) => {
        tuple.viewabilityHelper.recordInteraction();
      });
      this._hasInteracted = true;
      this.props.onScrollBeginDrag && this.props.onScrollBeginDrag(e);
    };
    this._onScrollEndDrag = (e) => {
      this._nestedChildLists.forEach((childList) => {
        childList._onScrollEndDrag(e);
      });
      var velocity = e.nativeEvent.velocity;
      if (velocity) {
        this._scrollMetrics.velocity = this._selectOffset(velocity);
      }
      this._computeBlankness();
      this.props.onScrollEndDrag && this.props.onScrollEndDrag(e);
    };
    this._onMomentumScrollBegin = (e) => {
      this._nestedChildLists.forEach((childList) => {
        childList._onMomentumScrollBegin(e);
      });
      this.props.onMomentumScrollBegin && this.props.onMomentumScrollBegin(e);
    };
    this._onMomentumScrollEnd = (e) => {
      this._nestedChildLists.forEach((childList) => {
        childList._onMomentumScrollEnd(e);
      });
      this._scrollMetrics.velocity = 0;
      this._computeBlankness();
      this.props.onMomentumScrollEnd && this.props.onMomentumScrollEnd(e);
    };
    this._updateCellsToRender = () => {
      this._updateViewableItems(this.props, this.state.cellsAroundViewport);
      this.setState((state, props) => {
        var cellsAroundViewport = this._adjustCellsAroundViewport(props, state.cellsAroundViewport);
        var renderMask = _VirtualizedList._createRenderMask(props, cellsAroundViewport, this._getNonViewportRenderRegions(props));
        if (cellsAroundViewport.first === state.cellsAroundViewport.first && cellsAroundViewport.last === state.cellsAroundViewport.last && renderMask.equals(state.renderMask)) {
          return null;
        }
        return {
          cellsAroundViewport,
          renderMask
        };
      });
    };
    this._createViewToken = (index, isViewable, props) => {
      var data = props.data, getItem = props.getItem;
      var item = getItem(data, index);
      return {
        index,
        item,
        key: this._keyExtractor(item, index, props),
        isViewable
      };
    };
    this._getOffsetApprox = (index, props) => {
      if (Number.isInteger(index)) {
        return this.__getFrameMetricsApprox(index, props).offset;
      } else {
        var frameMetrics = this.__getFrameMetricsApprox(Math.floor(index), props);
        var remainder = index - Math.floor(index);
        return frameMetrics.offset + remainder * frameMetrics.length;
      }
    };
    this.__getFrameMetricsApprox = (index, props) => {
      var frame = this._getFrameMetrics(index, props);
      if (frame && frame.index === index) {
        return frame;
      } else {
        var data = props.data, getItemCount = props.getItemCount, getItemLayout = props.getItemLayout;
        (0, import_invariant10.default)(index >= 0 && index < getItemCount(data), "Tried to get frame for out of range index " + index);
        (0, import_invariant10.default)(!getItemLayout, "Should not have to estimate frames when a measurement metrics function is provided");
        return {
          length: this._averageCellLength,
          offset: this._averageCellLength * index
        };
      }
    };
    this._getFrameMetrics = (index, props) => {
      var data = props.data, getItem = props.getItem, getItemCount = props.getItemCount, getItemLayout = props.getItemLayout;
      (0, import_invariant10.default)(index >= 0 && index < getItemCount(data), "Tried to get frame for out of range index " + index);
      var item = getItem(data, index);
      var frame = this._frames[this._keyExtractor(item, index, props)];
      if (!frame || frame.index !== index) {
        if (getItemLayout) {
          return getItemLayout(data, index);
        }
      }
      return frame;
    };
    this._getNonViewportRenderRegions = (props) => {
      if (!(this._lastFocusedCellKey && this._cellRefs[this._lastFocusedCellKey])) {
        return [];
      }
      var lastFocusedCellRenderer = this._cellRefs[this._lastFocusedCellKey];
      var focusedCellIndex = lastFocusedCellRenderer.props.index;
      var itemCount = props.getItemCount(props.data);
      if (focusedCellIndex >= itemCount || this._keyExtractor(props.getItem(props.data, focusedCellIndex), focusedCellIndex, props) !== this._lastFocusedCellKey) {
        return [];
      }
      var first = focusedCellIndex;
      var heightOfCellsBeforeFocused = 0;
      for (var i = first - 1; i >= 0 && heightOfCellsBeforeFocused < this._scrollMetrics.visibleLength; i--) {
        first--;
        heightOfCellsBeforeFocused += this.__getFrameMetricsApprox(i, props).length;
      }
      var last = focusedCellIndex;
      var heightOfCellsAfterFocused = 0;
      for (var _i = last + 1; _i < itemCount && heightOfCellsAfterFocused < this._scrollMetrics.visibleLength; _i++) {
        last++;
        heightOfCellsAfterFocused += this.__getFrameMetricsApprox(_i, props).length;
      }
      return [{
        first,
        last
      }];
    };
    this._checkProps(_props);
    this._fillRateHelper = new FillRateHelper_default(this._getFrameMetrics);
    this._updateCellsToRenderBatcher = new Batchinator_default(this._updateCellsToRender, (_this$props$updateCel = this.props.updateCellsBatchingPeriod) !== null && _this$props$updateCel !== void 0 ? _this$props$updateCel : 50);
    if (this.props.viewabilityConfigCallbackPairs) {
      this._viewabilityTuples = this.props.viewabilityConfigCallbackPairs.map((pair) => ({
        viewabilityHelper: new ViewabilityHelper_default(pair.viewabilityConfig),
        onViewableItemsChanged: pair.onViewableItemsChanged
      }));
    } else {
      var _this$props3 = this.props, onViewableItemsChanged = _this$props3.onViewableItemsChanged, viewabilityConfig = _this$props3.viewabilityConfig;
      if (onViewableItemsChanged) {
        this._viewabilityTuples.push({
          viewabilityHelper: new ViewabilityHelper_default(viewabilityConfig),
          onViewableItemsChanged
        });
      }
    }
    var initialRenderRegion = _VirtualizedList._initialRenderRegion(_props);
    this.state = {
      cellsAroundViewport: initialRenderRegion,
      renderMask: _VirtualizedList._createRenderMask(_props, initialRenderRegion)
    };
    this.invertedWheelEventHandler = (ev) => {
      var scrollOffset = this.props.horizontal ? ev.target.scrollLeft : ev.target.scrollTop;
      var scrollLength = this.props.horizontal ? ev.target.scrollWidth : ev.target.scrollHeight;
      var clientLength = this.props.horizontal ? ev.target.clientWidth : ev.target.clientHeight;
      var isEventTargetScrollable = scrollLength > clientLength;
      var delta = this.props.horizontal ? ev.deltaX || ev.wheelDeltaX : ev.deltaY || ev.wheelDeltaY;
      var leftoverDelta = delta;
      if (isEventTargetScrollable) {
        leftoverDelta = delta < 0 ? Math.min(delta + scrollOffset, 0) : Math.max(delta - (scrollLength - clientLength - scrollOffset), 0);
      }
      var targetDelta = delta - leftoverDelta;
      if (this.props.inverted && this._scrollRef && this._scrollRef.getScrollableNode) {
        var node = this._scrollRef.getScrollableNode();
        if (this.props.horizontal) {
          ev.target.scrollLeft += targetDelta;
          var nextScrollLeft = node.scrollLeft - leftoverDelta;
          node.scrollLeft = !this.props.getItemLayout ? Math.min(nextScrollLeft, this._totalCellLength) : nextScrollLeft;
        } else {
          ev.target.scrollTop += targetDelta;
          var nextScrollTop = node.scrollTop - leftoverDelta;
          node.scrollTop = !this.props.getItemLayout ? Math.min(nextScrollTop, this._totalCellLength) : nextScrollTop;
        }
        ev.preventDefault();
      }
    };
  }
  _checkProps(props) {
    var onScroll = props.onScroll, windowSize = props.windowSize, getItemCount = props.getItemCount, data = props.data, initialScrollIndex = props.initialScrollIndex;
    (0, import_invariant10.default)(
      // $FlowFixMe[prop-missing]
      !onScroll || !onScroll.__isNative,
      "Components based on VirtualizedList must be wrapped with Animated.createAnimatedComponent to support native onScroll events with useNativeDriver"
    );
    (0, import_invariant10.default)(windowSizeOrDefault(windowSize) > 0, "VirtualizedList: The windowSize prop must be present and set to a value greater than 0.");
    (0, import_invariant10.default)(getItemCount, 'VirtualizedList: The "getItemCount" prop must be provided');
    var itemCount = getItemCount(data);
    if (initialScrollIndex != null && !this._hasTriggeredInitialScrollToIndex && (initialScrollIndex < 0 || itemCount > 0 && initialScrollIndex >= itemCount) && !this._hasWarned.initialScrollIndex) {
      console.warn('initialScrollIndex "' + initialScrollIndex + '" is not valid (list has ' + itemCount + " items)");
      this._hasWarned.initialScrollIndex = true;
    }
    if (__DEV__3 && !this._hasWarned.flexWrap) {
      var flatStyles = StyleSheet_default.flatten(this.props.contentContainerStyle);
      if (flatStyles != null && flatStyles.flexWrap === "wrap") {
        console.warn("`flexWrap: `wrap`` is not supported with the `VirtualizedList` components.Consider using `numColumns` with `FlatList` instead.");
        this._hasWarned.flexWrap = true;
      }
    }
  }
  static _createRenderMask(props, cellsAroundViewport, additionalRegions) {
    var itemCount = props.getItemCount(props.data);
    (0, import_invariant10.default)(cellsAroundViewport.first >= 0 && cellsAroundViewport.last >= cellsAroundViewport.first - 1 && cellsAroundViewport.last < itemCount, 'Invalid cells around viewport "[' + cellsAroundViewport.first + ", " + cellsAroundViewport.last + ']" was passed to VirtualizedList._createRenderMask');
    var renderMask = new CellRenderMask(itemCount);
    if (itemCount > 0) {
      var allRegions = [cellsAroundViewport, ...additionalRegions !== null && additionalRegions !== void 0 ? additionalRegions : []];
      for (var _i2 = 0, _allRegions = allRegions; _i2 < _allRegions.length; _i2++) {
        var region = _allRegions[_i2];
        renderMask.addCells(region);
      }
      if (props.initialScrollIndex == null || props.initialScrollIndex <= 0) {
        var initialRegion = _VirtualizedList._initialRenderRegion(props);
        renderMask.addCells(initialRegion);
      }
      var stickyIndicesSet = new Set(props.stickyHeaderIndices);
      _VirtualizedList._ensureClosestStickyHeader(props, stickyIndicesSet, renderMask, cellsAroundViewport.first);
    }
    return renderMask;
  }
  static _initialRenderRegion(props) {
    var _props$initialScrollI;
    var itemCount = props.getItemCount(props.data);
    var firstCellIndex = Math.max(0, Math.min(itemCount - 1, Math.floor((_props$initialScrollI = props.initialScrollIndex) !== null && _props$initialScrollI !== void 0 ? _props$initialScrollI : 0)));
    var lastCellIndex = Math.min(itemCount, firstCellIndex + initialNumToRenderOrDefault(props.initialNumToRender)) - 1;
    return {
      first: firstCellIndex,
      last: lastCellIndex
    };
  }
  static _ensureClosestStickyHeader(props, stickyIndicesSet, renderMask, cellIdx) {
    var stickyOffset = props.ListHeaderComponent ? 1 : 0;
    for (var itemIdx = cellIdx - 1; itemIdx >= 0; itemIdx--) {
      if (stickyIndicesSet.has(itemIdx + stickyOffset)) {
        renderMask.addCells({
          first: itemIdx,
          last: itemIdx
        });
        break;
      }
    }
  }
  _adjustCellsAroundViewport(props, cellsAroundViewport) {
    var data = props.data, getItemCount = props.getItemCount;
    var onEndReachedThreshold = onEndReachedThresholdOrDefault(props.onEndReachedThreshold);
    var _this$_scrollMetrics = this._scrollMetrics, contentLength = _this$_scrollMetrics.contentLength, offset = _this$_scrollMetrics.offset, visibleLength = _this$_scrollMetrics.visibleLength;
    var distanceFromEnd = contentLength - visibleLength - offset;
    if (visibleLength <= 0 || contentLength <= 0) {
      return cellsAroundViewport.last >= getItemCount(data) ? _VirtualizedList._constrainToItemCount(cellsAroundViewport, props) : cellsAroundViewport;
    }
    var newCellsAroundViewport;
    if (props.disableVirtualization) {
      var renderAhead = distanceFromEnd < onEndReachedThreshold * visibleLength ? maxToRenderPerBatchOrDefault(props.maxToRenderPerBatch) : 0;
      newCellsAroundViewport = {
        first: 0,
        last: Math.min(cellsAroundViewport.last + renderAhead, getItemCount(data) - 1)
      };
    } else {
      if (props.initialScrollIndex && !this._scrollMetrics.offset && Math.abs(distanceFromEnd) >= Number.EPSILON) {
        return cellsAroundViewport.last >= getItemCount(data) ? _VirtualizedList._constrainToItemCount(cellsAroundViewport, props) : cellsAroundViewport;
      }
      newCellsAroundViewport = computeWindowedRenderLimits(props, maxToRenderPerBatchOrDefault(props.maxToRenderPerBatch), windowSizeOrDefault(props.windowSize), cellsAroundViewport, this.__getFrameMetricsApprox, this._scrollMetrics);
      (0, import_invariant10.default)(newCellsAroundViewport.last < getItemCount(data), "computeWindowedRenderLimits() should return range in-bounds");
    }
    if (this._nestedChildLists.size() > 0) {
      var childIdx = this._findFirstChildWithMore(newCellsAroundViewport.first, newCellsAroundViewport.last);
      newCellsAroundViewport.last = childIdx !== null && childIdx !== void 0 ? childIdx : newCellsAroundViewport.last;
    }
    return newCellsAroundViewport;
  }
  _findFirstChildWithMore(first, last) {
    for (var ii = first; ii <= last; ii++) {
      var cellKeyForIndex = this._indicesToKeys.get(ii);
      if (cellKeyForIndex != null && this._nestedChildLists.anyInCell(cellKeyForIndex, (childList) => childList.hasMore())) {
        return ii;
      }
    }
    return null;
  }
  componentDidMount() {
    if (this._isNestedWithSameOrientation()) {
      this.context.registerAsNestedChild({
        ref: this,
        cellKey: this.context.cellKey
      });
    }
    this.setupWebWheelHandler();
  }
  componentWillUnmount() {
    if (this._isNestedWithSameOrientation()) {
      this.context.unregisterAsNestedChild({
        ref: this
      });
    }
    this._updateCellsToRenderBatcher.dispose({
      abort: true
    });
    this._viewabilityTuples.forEach((tuple) => {
      tuple.viewabilityHelper.dispose();
    });
    this._fillRateHelper.deactivateAndFlush();
    this.teardownWebWheelHandler();
  }
  // REACT-NATIVE-WEB patch to preserve during future RN merges: Support inverted wheel scroller.
  setupWebWheelHandler() {
    if (this._scrollRef && this._scrollRef.getScrollableNode) {
      this._scrollRef.getScrollableNode().addEventListener("wheel", this.invertedWheelEventHandler);
    } else {
      setTimeout(() => this.setupWebWheelHandler(), 50);
      return;
    }
  }
  // REACT-NATIVE-WEB patch to preserve during future RN merges: Support inverted wheel scroller.
  teardownWebWheelHandler() {
    if (this._scrollRef && this._scrollRef.getScrollableNode) {
      this._scrollRef.getScrollableNode().removeEventListener("wheel", this.invertedWheelEventHandler);
    }
  }
  static getDerivedStateFromProps(newProps, prevState) {
    var itemCount = newProps.getItemCount(newProps.data);
    if (itemCount === prevState.renderMask.numCells()) {
      return prevState;
    }
    var constrainedCells = _VirtualizedList._constrainToItemCount(prevState.cellsAroundViewport, newProps);
    return {
      cellsAroundViewport: constrainedCells,
      renderMask: _VirtualizedList._createRenderMask(newProps, constrainedCells)
    };
  }
  _pushCells(cells, stickyHeaderIndices, stickyIndicesFromProps, first, last, inversionStyle) {
    var _this = this;
    var _this$props4 = this.props, CellRendererComponent = _this$props4.CellRendererComponent, ItemSeparatorComponent = _this$props4.ItemSeparatorComponent, ListHeaderComponent = _this$props4.ListHeaderComponent, ListItemComponent = _this$props4.ListItemComponent, data = _this$props4.data, debug = _this$props4.debug, getItem = _this$props4.getItem, getItemCount = _this$props4.getItemCount, getItemLayout = _this$props4.getItemLayout, horizontal = _this$props4.horizontal, renderItem = _this$props4.renderItem;
    var stickyOffset = ListHeaderComponent ? 1 : 0;
    var end = getItemCount(data) - 1;
    var prevCellKey;
    last = Math.min(end, last);
    var _loop = function _loop2() {
      var item = getItem(data, ii);
      var key = _this._keyExtractor(item, ii, _this.props);
      _this._indicesToKeys.set(ii, key);
      if (stickyIndicesFromProps.has(ii + stickyOffset)) {
        stickyHeaderIndices.push(cells.length);
      }
      var shouldListenForLayout = getItemLayout == null || debug || _this._fillRateHelper.enabled();
      cells.push(/* @__PURE__ */ React47.createElement(CellRenderer, (0, import_extends4.default)({
        CellRendererComponent,
        ItemSeparatorComponent: ii < end ? ItemSeparatorComponent : void 0,
        ListItemComponent,
        cellKey: key,
        horizontal,
        index: ii,
        inversionStyle,
        item,
        key,
        prevCellKey,
        onUpdateSeparators: _this._onUpdateSeparators,
        onCellFocusCapture: (e) => _this._onCellFocusCapture(key),
        onUnmount: _this._onCellUnmount,
        ref: (_ref) => {
          _this._cellRefs[key] = _ref;
        },
        renderItem
      }, shouldListenForLayout && {
        onCellLayout: _this._onCellLayout
      })));
      prevCellKey = key;
    };
    for (var ii = first; ii <= last; ii++) {
      _loop();
    }
  }
  static _constrainToItemCount(cells, props) {
    var itemCount = props.getItemCount(props.data);
    var last = Math.min(itemCount - 1, cells.last);
    var maxToRenderPerBatch = maxToRenderPerBatchOrDefault(props.maxToRenderPerBatch);
    return {
      first: clamp_default(0, itemCount - 1 - maxToRenderPerBatch, cells.first),
      last
    };
  }
  _isNestedWithSameOrientation() {
    var nestedContext = this.context;
    return !!(nestedContext && !!nestedContext.horizontal === horizontalOrDefault(this.props.horizontal));
  }
  _keyExtractor(item, index, props) {
    if (props.keyExtractor != null) {
      return props.keyExtractor(item, index);
    }
    var key = keyExtractor(item, index);
    if (key === String(index)) {
      _usedIndexForKey = true;
      if (item.type && item.type.displayName) {
        _keylessItemComponentName = item.type.displayName;
      }
    }
    return key;
  }
  render() {
    this._checkProps(this.props);
    var _this$props5 = this.props, ListEmptyComponent = _this$props5.ListEmptyComponent, ListFooterComponent = _this$props5.ListFooterComponent, ListHeaderComponent = _this$props5.ListHeaderComponent;
    var _this$props6 = this.props, data = _this$props6.data, horizontal = _this$props6.horizontal;
    var inversionStyle = this.props.inverted ? horizontalOrDefault(this.props.horizontal) ? styles5.horizontallyInverted : styles5.verticallyInverted : null;
    var cells = [];
    var stickyIndicesFromProps = new Set(this.props.stickyHeaderIndices);
    var stickyHeaderIndices = [];
    if (ListHeaderComponent) {
      if (stickyIndicesFromProps.has(0)) {
        stickyHeaderIndices.push(0);
      }
      var _element = /* @__PURE__ */ React47.isValidElement(ListHeaderComponent) ? ListHeaderComponent : (
        // $FlowFixMe[not-a-component]
        // $FlowFixMe[incompatible-type-arg]
        /* @__PURE__ */ React47.createElement(ListHeaderComponent, null)
      );
      cells.push(/* @__PURE__ */ React47.createElement(VirtualizedListCellContextProvider, {
        cellKey: this._getCellKey() + "-header",
        key: "$header"
      }, /* @__PURE__ */ React47.createElement(
        View_default,
        {
          onLayout: this._onLayoutHeader,
          style: [inversionStyle, this.props.ListHeaderComponentStyle]
        },
        // $FlowFixMe[incompatible-type] - Typing ReactNativeComponent revealed errors
        _element
      )));
    }
    var itemCount = this.props.getItemCount(data);
    if (itemCount === 0 && ListEmptyComponent) {
      var _element2 = /* @__PURE__ */ React47.isValidElement(ListEmptyComponent) ? ListEmptyComponent : (
        // $FlowFixMe[not-a-component]
        // $FlowFixMe[incompatible-type-arg]
        /* @__PURE__ */ React47.createElement(ListEmptyComponent, null)
      );
      cells.push(/* @__PURE__ */ React47.createElement(VirtualizedListCellContextProvider, {
        cellKey: this._getCellKey() + "-empty",
        key: "$empty"
      }, /* @__PURE__ */ React47.cloneElement(_element2, {
        onLayout: (event3) => {
          this._onLayoutEmpty(event3);
          if (_element2.props.onLayout) {
            _element2.props.onLayout(event3);
          }
        },
        style: [inversionStyle, _element2.props.style]
      })));
    }
    if (itemCount > 0) {
      _usedIndexForKey = false;
      _keylessItemComponentName = "";
      var spacerKey = this._getSpacerKey(!horizontal);
      var renderRegions = this.state.renderMask.enumerateRegions();
      var lastSpacer = findLastWhere(renderRegions, (r) => r.isSpacer);
      for (var _iterator = (0, import_createForOfIteratorHelperLoose3.default)(renderRegions), _step; !(_step = _iterator()).done; ) {
        var section = _step.value;
        if (section.isSpacer) {
          if (this.props.disableVirtualization) {
            continue;
          }
          var isLastSpacer = section === lastSpacer;
          var constrainToMeasured = isLastSpacer && !this.props.getItemLayout;
          var last = constrainToMeasured ? clamp_default(section.first - 1, section.last, this._highestMeasuredFrameIndex) : section.last;
          var firstMetrics = this.__getFrameMetricsApprox(section.first, this.props);
          var lastMetrics = this.__getFrameMetricsApprox(last, this.props);
          var spacerSize = lastMetrics.offset + lastMetrics.length - firstMetrics.offset;
          cells.push(/* @__PURE__ */ React47.createElement(View_default, {
            key: "$spacer-" + section.first,
            style: {
              [spacerKey]: spacerSize
            }
          }));
        } else {
          this._pushCells(cells, stickyHeaderIndices, stickyIndicesFromProps, section.first, section.last, inversionStyle);
        }
      }
      if (!this._hasWarned.keys && _usedIndexForKey) {
        console.warn("VirtualizedList: missing keys for items, make sure to specify a key or id property on each item or provide a custom keyExtractor.", _keylessItemComponentName);
        this._hasWarned.keys = true;
      }
    }
    if (ListFooterComponent) {
      var _element3 = /* @__PURE__ */ React47.isValidElement(ListFooterComponent) ? ListFooterComponent : (
        // $FlowFixMe[not-a-component]
        // $FlowFixMe[incompatible-type-arg]
        /* @__PURE__ */ React47.createElement(ListFooterComponent, null)
      );
      cells.push(/* @__PURE__ */ React47.createElement(VirtualizedListCellContextProvider, {
        cellKey: this._getFooterCellKey(),
        key: "$footer"
      }, /* @__PURE__ */ React47.createElement(
        View_default,
        {
          onLayout: this._onLayoutFooter,
          style: [inversionStyle, this.props.ListFooterComponentStyle]
        },
        // $FlowFixMe[incompatible-type] - Typing ReactNativeComponent revealed errors
        _element3
      )));
    }
    var scrollProps = (0, import_objectSpread211.default)((0, import_objectSpread211.default)({}, this.props), {}, {
      onContentSizeChange: this._onContentSizeChange,
      onLayout: this._onLayout,
      onScroll: this._onScroll,
      onScrollBeginDrag: this._onScrollBeginDrag,
      onScrollEndDrag: this._onScrollEndDrag,
      onMomentumScrollBegin: this._onMomentumScrollBegin,
      onMomentumScrollEnd: this._onMomentumScrollEnd,
      scrollEventThrottle: scrollEventThrottleOrDefault(this.props.scrollEventThrottle),
      // TODO: Android support
      invertStickyHeaders: this.props.invertStickyHeaders !== void 0 ? this.props.invertStickyHeaders : this.props.inverted,
      stickyHeaderIndices,
      style: inversionStyle ? [inversionStyle, this.props.style] : this.props.style
    });
    this._hasMore = this.state.cellsAroundViewport.last < itemCount - 1;
    var innerRet = /* @__PURE__ */ React47.createElement(VirtualizedListContextProvider, {
      value: {
        cellKey: null,
        getScrollMetrics: this._getScrollMetrics,
        horizontal: horizontalOrDefault(this.props.horizontal),
        getOutermostParentListRef: this._getOutermostParentListRef,
        registerAsNestedChild: this._registerAsNestedChild,
        unregisterAsNestedChild: this._unregisterAsNestedChild
      }
    }, /* @__PURE__ */ React47.cloneElement((this.props.renderScrollComponent || this._defaultRenderScrollComponent)(scrollProps), {
      ref: this._captureScrollRef
    }, cells));
    var ret = innerRet;
    if (this.props.debug) {
      return /* @__PURE__ */ React47.createElement(View_default, {
        style: styles5.debug
      }, ret, this._renderDebugOverlay());
    } else {
      return ret;
    }
  }
  componentDidUpdate(prevProps) {
    var _this$props7 = this.props, data = _this$props7.data, extraData = _this$props7.extraData;
    if (data !== prevProps.data || extraData !== prevProps.extraData) {
      this._viewabilityTuples.forEach((tuple) => {
        tuple.viewabilityHelper.resetViewableIndices();
      });
    }
    var hiPriInProgress = this._hiPriInProgress;
    this._scheduleCellsToRenderUpdate();
    if (hiPriInProgress) {
      this._hiPriInProgress = false;
    }
  }
  // Used for preventing scrollToIndex from being called multiple times for initialScrollIndex
  // flag to prevent infinite hiPri cell limit update
  // $FlowFixMe[missing-local-annot]
  /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
   * LTI update could not be added via codemod */
  _computeBlankness() {
    this._fillRateHelper.computeBlankness(this.props, this.state.cellsAroundViewport, this._scrollMetrics);
  }
  /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
   * LTI update could not be added via codemod */
  _onCellFocusCapture(cellKey) {
    this._lastFocusedCellKey = cellKey;
    this._updateCellsToRender();
  }
  _triggerRemeasureForChildListsInCell(cellKey) {
    this._nestedChildLists.forEachInCell(cellKey, (childList) => {
      childList.measureLayoutRelativeToContainingList();
    });
  }
  measureLayoutRelativeToContainingList() {
    try {
      if (!this._scrollRef) {
        return;
      }
      this._scrollRef.measureLayout(this.context.getOutermostParentListRef().getScrollRef(), (x, y, width, height) => {
        this._offsetFromParentVirtualizedList = this._selectOffset({
          x,
          y
        });
        this._scrollMetrics.contentLength = this._selectLength({
          width,
          height
        });
        var scrollMetrics = this._convertParentScrollMetrics(this.context.getScrollMetrics());
        var metricsChanged = this._scrollMetrics.visibleLength !== scrollMetrics.visibleLength || this._scrollMetrics.offset !== scrollMetrics.offset;
        if (metricsChanged) {
          this._scrollMetrics.visibleLength = scrollMetrics.visibleLength;
          this._scrollMetrics.offset = scrollMetrics.offset;
          this._nestedChildLists.forEach((childList) => {
            childList.measureLayoutRelativeToContainingList();
          });
        }
      }, (error2) => {
        console.warn("VirtualizedList: Encountered an error while measuring a list's offset from its containing VirtualizedList.");
      });
    } catch (error2) {
      console.warn("measureLayoutRelativeToContainingList threw an error", error2.stack);
    }
  }
  _getFooterCellKey() {
    return this._getCellKey() + "-footer";
  }
  // $FlowFixMe[missing-local-annot]
  _renderDebugOverlay() {
    var normalize = this._scrollMetrics.visibleLength / (this._scrollMetrics.contentLength || 1);
    var framesInLayout = [];
    var itemCount = this.props.getItemCount(this.props.data);
    for (var ii = 0; ii < itemCount; ii++) {
      var frame = this.__getFrameMetricsApprox(ii, this.props);
      if (frame.inLayout) {
        framesInLayout.push(frame);
      }
    }
    var windowTop = this.__getFrameMetricsApprox(this.state.cellsAroundViewport.first, this.props).offset;
    var frameLast = this.__getFrameMetricsApprox(this.state.cellsAroundViewport.last, this.props);
    var windowLen = frameLast.offset + frameLast.length - windowTop;
    var visTop = this._scrollMetrics.offset;
    var visLen = this._scrollMetrics.visibleLength;
    return /* @__PURE__ */ React47.createElement(View_default, {
      style: [styles5.debugOverlayBase, styles5.debugOverlay]
    }, framesInLayout.map((f, ii2) => /* @__PURE__ */ React47.createElement(View_default, {
      key: "f" + ii2,
      style: [styles5.debugOverlayBase, styles5.debugOverlayFrame, {
        top: f.offset * normalize,
        height: f.length * normalize
      }]
    })), /* @__PURE__ */ React47.createElement(View_default, {
      style: [styles5.debugOverlayBase, styles5.debugOverlayFrameLast, {
        top: windowTop * normalize,
        height: windowLen * normalize
      }]
    }), /* @__PURE__ */ React47.createElement(View_default, {
      style: [styles5.debugOverlayBase, styles5.debugOverlayFrameVis, {
        top: visTop * normalize,
        height: visLen * normalize
      }]
    }));
  }
  _selectLength(metrics) {
    return !horizontalOrDefault(this.props.horizontal) ? metrics.height : metrics.width;
  }
  _selectOffset(metrics) {
    return !horizontalOrDefault(this.props.horizontal) ? metrics.y : metrics.x;
  }
  _maybeCallOnEdgeReached() {
    var _this$props8 = this.props, data = _this$props8.data, getItemCount = _this$props8.getItemCount, onStartReached = _this$props8.onStartReached, onStartReachedThreshold = _this$props8.onStartReachedThreshold, onEndReached = _this$props8.onEndReached, onEndReachedThreshold = _this$props8.onEndReachedThreshold, initialScrollIndex = _this$props8.initialScrollIndex;
    var _this$_scrollMetrics2 = this._scrollMetrics, contentLength = _this$_scrollMetrics2.contentLength, visibleLength = _this$_scrollMetrics2.visibleLength, offset = _this$_scrollMetrics2.offset;
    var distanceFromStart = offset;
    var distanceFromEnd = contentLength - visibleLength - offset;
    if (distanceFromStart < ON_EDGE_REACHED_EPSILON) {
      distanceFromStart = 0;
    }
    if (distanceFromEnd < ON_EDGE_REACHED_EPSILON) {
      distanceFromEnd = 0;
    }
    var DEFAULT_THRESHOLD_PX = 2;
    var startThreshold = onStartReachedThreshold != null ? onStartReachedThreshold * visibleLength : DEFAULT_THRESHOLD_PX;
    var endThreshold = onEndReachedThreshold != null ? onEndReachedThreshold * visibleLength : DEFAULT_THRESHOLD_PX;
    var isWithinStartThreshold = distanceFromStart <= startThreshold;
    var isWithinEndThreshold = distanceFromEnd <= endThreshold;
    if (onEndReached && this.state.cellsAroundViewport.last === getItemCount(data) - 1 && isWithinEndThreshold && this._scrollMetrics.contentLength !== this._sentEndForContentLength) {
      this._sentEndForContentLength = this._scrollMetrics.contentLength;
      onEndReached({
        distanceFromEnd
      });
    } else if (onStartReached != null && this.state.cellsAroundViewport.first === 0 && isWithinStartThreshold && this._scrollMetrics.contentLength !== this._sentStartForContentLength) {
      if (!initialScrollIndex || this._scrollMetrics.timestamp !== 0) {
        this._sentStartForContentLength = this._scrollMetrics.contentLength;
        onStartReached({
          distanceFromStart
        });
      }
    } else {
      this._sentStartForContentLength = isWithinStartThreshold ? this._sentStartForContentLength : 0;
      this._sentEndForContentLength = isWithinEndThreshold ? this._sentEndForContentLength : 0;
    }
  }
  /* Translates metrics from a scroll event in a parent VirtualizedList into
   * coordinates relative to the child list.
   */
  _scheduleCellsToRenderUpdate() {
    var _this$state$cellsArou = this.state.cellsAroundViewport, first = _this$state$cellsArou.first, last = _this$state$cellsArou.last;
    var _this$_scrollMetrics3 = this._scrollMetrics, offset = _this$_scrollMetrics3.offset, visibleLength = _this$_scrollMetrics3.visibleLength, velocity = _this$_scrollMetrics3.velocity;
    var itemCount = this.props.getItemCount(this.props.data);
    var hiPri = false;
    var onStartReachedThreshold = onStartReachedThresholdOrDefault(this.props.onStartReachedThreshold);
    var onEndReachedThreshold = onEndReachedThresholdOrDefault(this.props.onEndReachedThreshold);
    if (first > 0) {
      var distTop = offset - this.__getFrameMetricsApprox(first, this.props).offset;
      hiPri = distTop < 0 || velocity < -2 && distTop < getScrollingThreshold(onStartReachedThreshold, visibleLength);
    }
    if (!hiPri && last >= 0 && last < itemCount - 1) {
      var distBottom = this.__getFrameMetricsApprox(last, this.props).offset - (offset + visibleLength);
      hiPri = distBottom < 0 || velocity > 2 && distBottom < getScrollingThreshold(onEndReachedThreshold, visibleLength);
    }
    if (hiPri && (this._averageCellLength || this.props.getItemLayout) && !this._hiPriInProgress) {
      this._hiPriInProgress = true;
      this._updateCellsToRenderBatcher.dispose({
        abort: true
      });
      this._updateCellsToRender();
      return;
    } else {
      this._updateCellsToRenderBatcher.schedule();
    }
  }
  /**
   * Gets an approximate offset to an item at a given index. Supports
   * fractional indices.
   */
  _updateViewableItems(props, cellsAroundViewport) {
    this._viewabilityTuples.forEach((tuple) => {
      tuple.viewabilityHelper.onUpdate(props, this._scrollMetrics.offset, this._scrollMetrics.visibleLength, this._getFrameMetrics, this._createViewToken, tuple.onViewableItemsChanged, cellsAroundViewport);
    });
  }
};
VirtualizedList.contextType = VirtualizedListContext;
var styles5 = StyleSheet_default.create({
  verticallyInverted: {
    transform: "scaleY(-1)"
  },
  horizontallyInverted: {
    transform: "scaleX(-1)"
  },
  debug: {
    flex: 1
  },
  debugOverlayBase: {
    position: "absolute",
    top: 0,
    right: 0
  },
  debugOverlay: {
    bottom: 0,
    width: 20,
    borderColor: "blue",
    borderWidth: 1
  },
  debugOverlayFrame: {
    left: 0,
    backgroundColor: "orange"
  },
  debugOverlayFrameLast: {
    left: 0,
    borderColor: "green",
    borderWidth: 2
  },
  debugOverlayFrameVis: {
    left: 0,
    borderColor: "red",
    borderWidth: 2
  }
});
var VirtualizedList_default = VirtualizedList;

// ../../node_modules/.pnpm/memoize-one@6.0.0/node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var cache6 = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache6 && cache6.lastThis === this && isEqual2(newArgs, cache6.lastArgs)) {
      return cache6.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache6 = {
      lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear() {
    cache6 = null;
  };
  return memoized;
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/FlatList/index.js
var _excluded8 = ["numColumns", "columnWrapperStyle", "removeClippedSubviews", "strictMode"];
function removeClippedSubviewsOrDefault(removeClippedSubviews) {
  return removeClippedSubviews !== null && removeClippedSubviews !== void 0 ? removeClippedSubviews : Platform_default.OS === "android";
}
function numColumnsOrDefault(numColumns) {
  return numColumns !== null && numColumns !== void 0 ? numColumns : 1;
}
function isArrayLike(data) {
  return typeof Object(data).length === "number";
}
var FlatList = class extends React48.PureComponent {
  /**
   * Scrolls to the end of the content. May be janky without `getItemLayout` prop.
   */
  scrollToEnd(params) {
    if (this._listRef) {
      this._listRef.scrollToEnd(params);
    }
  }
  /**
   * Scrolls to the item at the specified index such that it is positioned in the viewable area
   * such that `viewPosition` 0 places it at the top, 1 at the bottom, and 0.5 centered in the
   * middle. `viewOffset` is a fixed number of pixels to offset the final target position.
   *
   * Note: cannot scroll to locations outside the render window without specifying the
   * `getItemLayout` prop.
   */
  scrollToIndex(params) {
    if (this._listRef) {
      this._listRef.scrollToIndex(params);
    }
  }
  /**
   * Requires linear scan through data - use `scrollToIndex` instead if possible.
   *
   * Note: cannot scroll to locations outside the render window without specifying the
   * `getItemLayout` prop.
   */
  scrollToItem(params) {
    if (this._listRef) {
      this._listRef.scrollToItem(params);
    }
  }
  /**
   * Scroll to a specific content pixel offset in the list.
   *
   * Check out [scrollToOffset](docs/virtualizedlist.html#scrolltooffset) of VirtualizedList
   */
  scrollToOffset(params) {
    if (this._listRef) {
      this._listRef.scrollToOffset(params);
    }
  }
  /**
   * Tells the list an interaction has occurred, which should trigger viewability calculations, e.g.
   * if `waitForInteractions` is true and the user has not scrolled. This is typically called by
   * taps on items or by navigation actions.
   */
  recordInteraction() {
    if (this._listRef) {
      this._listRef.recordInteraction();
    }
  }
  /**
   * Displays the scroll indicators momentarily.
   *
   * @platform ios
   */
  flashScrollIndicators() {
    if (this._listRef) {
      this._listRef.flashScrollIndicators();
    }
  }
  /**
   * Provides a handle to the underlying scroll responder.
   */
  getScrollResponder() {
    if (this._listRef) {
      return this._listRef.getScrollResponder();
    }
  }
  /**
   * Provides a reference to the underlying host component
   */
  getNativeScrollRef() {
    if (this._listRef) {
      return this._listRef.getScrollRef();
    }
  }
  getScrollableNode() {
    if (this._listRef) {
      return this._listRef.getScrollableNode();
    }
  }
  constructor(_props) {
    super(_props);
    this._virtualizedListPairs = [];
    this._captureRef = (ref) => {
      this._listRef = ref;
    };
    this._getItem = (data, index) => {
      var numColumns = numColumnsOrDefault(this.props.numColumns);
      if (numColumns > 1) {
        var ret = [];
        for (var kk = 0; kk < numColumns; kk++) {
          var itemIndex = index * numColumns + kk;
          if (itemIndex < data.length) {
            var _item = data[itemIndex];
            ret.push(_item);
          }
        }
        return ret;
      } else {
        return data[index];
      }
    };
    this._getItemCount = (data) => {
      if (data != null && isArrayLike(data)) {
        var numColumns = numColumnsOrDefault(this.props.numColumns);
        return numColumns > 1 ? Math.ceil(data.length / numColumns) : data.length;
      } else {
        return 0;
      }
    };
    this._keyExtractor = (items, index) => {
      var _this$props$keyExtrac;
      var numColumns = numColumnsOrDefault(this.props.numColumns);
      var keyExtractor2 = (_this$props$keyExtrac = this.props.keyExtractor) !== null && _this$props$keyExtrac !== void 0 ? _this$props$keyExtrac : keyExtractor;
      if (numColumns > 1) {
        (0, import_invariant11.default)(Array.isArray(items), "FlatList: Encountered internal consistency error, expected each item to consist of an array with 1-%s columns; instead, received a single item.", numColumns);
        return items.map((item, kk) => keyExtractor2(item, index * numColumns + kk)).join(":");
      }
      return keyExtractor2(items, index);
    };
    this._renderer = (ListItemComponent, renderItem, columnWrapperStyle, numColumns, extraData) => {
      var cols = numColumnsOrDefault(numColumns);
      var render = (props) => {
        if (ListItemComponent) {
          return /* @__PURE__ */ React48.createElement(ListItemComponent, props);
        } else if (renderItem) {
          return renderItem(props);
        } else {
          return null;
        }
      };
      var renderProp = (info) => {
        if (cols > 1) {
          var _item2 = info.item, _index = info.index;
          (0, import_invariant11.default)(Array.isArray(_item2), "Expected array of items with numColumns > 1");
          return /* @__PURE__ */ React48.createElement(View_default, {
            style: [styles6.row, columnWrapperStyle]
          }, _item2.map((it, kk) => {
            var element = render({
              // $FlowFixMe[incompatible-call]
              item: it,
              index: _index * cols + kk,
              separators: info.separators
            });
            return element != null ? /* @__PURE__ */ React48.createElement(React48.Fragment, {
              key: kk
            }, element) : null;
          }));
        } else {
          return render(info);
        }
      };
      return ListItemComponent ? {
        ListItemComponent: renderProp
      } : {
        renderItem: renderProp
      };
    };
    this._memoizedRenderer = memoizeOne(this._renderer);
    this._checkProps(this.props);
    if (this.props.viewabilityConfigCallbackPairs) {
      this._virtualizedListPairs = this.props.viewabilityConfigCallbackPairs.map((pair) => ({
        viewabilityConfig: pair.viewabilityConfig,
        onViewableItemsChanged: this._createOnViewableItemsChanged(pair.onViewableItemsChanged)
      }));
    } else if (this.props.onViewableItemsChanged) {
      this._virtualizedListPairs.push({
        /* $FlowFixMe[incompatible-call] (>=0.63.0 site=react_native_fb) This
         * comment suppresses an error found when Flow v0.63 was deployed. To
         * see the error delete this comment and run Flow. */
        viewabilityConfig: this.props.viewabilityConfig,
        onViewableItemsChanged: this._createOnViewableItemsChanged(this.props.onViewableItemsChanged)
      });
    }
  }
  // $FlowFixMe[missing-local-annot]
  componentDidUpdate(prevProps) {
    (0, import_invariant11.default)(prevProps.numColumns === this.props.numColumns, "Changing numColumns on the fly is not supported. Change the key prop on FlatList when changing the number of columns to force a fresh render of the component.");
    (0, import_invariant11.default)(prevProps.onViewableItemsChanged === this.props.onViewableItemsChanged, "Changing onViewableItemsChanged on the fly is not supported");
    (0, import_invariant11.default)(!deepDiffer_default(prevProps.viewabilityConfig, this.props.viewabilityConfig), "Changing viewabilityConfig on the fly is not supported");
    (0, import_invariant11.default)(prevProps.viewabilityConfigCallbackPairs === this.props.viewabilityConfigCallbackPairs, "Changing viewabilityConfigCallbackPairs on the fly is not supported");
    this._checkProps(this.props);
  }
  // $FlowFixMe[missing-local-annot]
  _checkProps(props) {
    var getItem = props.getItem, getItemCount = props.getItemCount, horizontal = props.horizontal, columnWrapperStyle = props.columnWrapperStyle, onViewableItemsChanged = props.onViewableItemsChanged, viewabilityConfigCallbackPairs = props.viewabilityConfigCallbackPairs;
    var numColumns = numColumnsOrDefault(this.props.numColumns);
    (0, import_invariant11.default)(!getItem && !getItemCount, "FlatList does not support custom data formats.");
    if (numColumns > 1) {
      (0, import_invariant11.default)(!horizontal, "numColumns does not support horizontal.");
    } else {
      (0, import_invariant11.default)(!columnWrapperStyle, "columnWrapperStyle not supported for single column lists");
    }
    (0, import_invariant11.default)(!(onViewableItemsChanged && viewabilityConfigCallbackPairs), "FlatList does not support setting both onViewableItemsChanged and viewabilityConfigCallbackPairs.");
  }
  _pushMultiColumnViewable(arr, v) {
    var _this$props$keyExtrac2;
    var numColumns = numColumnsOrDefault(this.props.numColumns);
    var keyExtractor2 = (_this$props$keyExtrac2 = this.props.keyExtractor) !== null && _this$props$keyExtrac2 !== void 0 ? _this$props$keyExtrac2 : keyExtractor;
    v.item.forEach((item, ii) => {
      (0, import_invariant11.default)(v.index != null, "Missing index!");
      var index = v.index * numColumns + ii;
      arr.push((0, import_objectSpread212.default)((0, import_objectSpread212.default)({}, v), {}, {
        item,
        key: keyExtractor2(item, index),
        index
      }));
    });
  }
  _createOnViewableItemsChanged(onViewableItemsChanged) {
    return (info) => {
      var numColumns = numColumnsOrDefault(this.props.numColumns);
      if (onViewableItemsChanged) {
        if (numColumns > 1) {
          var changed = [];
          var viewableItems = [];
          info.viewableItems.forEach((v) => this._pushMultiColumnViewable(viewableItems, v));
          info.changed.forEach((v) => this._pushMultiColumnViewable(changed, v));
          onViewableItemsChanged({
            viewableItems,
            changed
          });
        } else {
          onViewableItemsChanged(info);
        }
      }
    };
  }
  // $FlowFixMe[missing-local-annot]
  render() {
    var _this$props = this.props, numColumns = _this$props.numColumns, columnWrapperStyle = _this$props.columnWrapperStyle, _removeClippedSubviews = _this$props.removeClippedSubviews, _this$props$strictMod = _this$props.strictMode, strictMode = _this$props$strictMod === void 0 ? false : _this$props$strictMod, restProps = (0, import_objectWithoutPropertiesLoose8.default)(_this$props, _excluded8);
    var renderer = strictMode ? this._memoizedRenderer : this._renderer;
    return (
      // $FlowFixMe[incompatible-exact] - `restProps` (`Props`) is inexact.
      /* @__PURE__ */ React48.createElement(VirtualizedList_default, (0, import_extends5.default)({}, restProps, {
        getItem: this._getItem,
        getItemCount: this._getItemCount,
        keyExtractor: this._keyExtractor,
        ref: this._captureRef,
        viewabilityConfigCallbackPairs: this._virtualizedListPairs,
        removeClippedSubviews: removeClippedSubviewsOrDefault(_removeClippedSubviews)
      }, renderer(this.props.ListItemComponent, this.props.renderItem, columnWrapperStyle, numColumns, this.props.extraData)))
    );
  }
};
var styles6 = StyleSheet_default.create({
  row: {
    flexDirection: "row"
  }
});
var FlatList_default = FlatList;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/FlatList/index.js
var FlatList_default2 = FlatList_default;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/createAnimatedComponent.js
var import_extends6 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose9 = __toESM(require_objectWithoutPropertiesLoose());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/useAnimatedProps.js
var import_objectSpread216 = __toESM(require_objectSpread2());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedProps.js
var import_objectSpread215 = __toESM(require_objectSpread2());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedInterpolation.js
var import_objectSpread214 = __toESM(require_objectSpread2());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedWithChildren.js
var import_createForOfIteratorHelperLoose4 = __toESM(require_createForOfIteratorHelperLoose());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/NativeAnimatedHelper.js
var import_objectSpread213 = __toESM(require_objectSpread2());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/TurboModule/TurboModuleRegistry.js
var import_invariant12 = __toESM(require_invariant());
function get(name) {
  return null;
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/NativeAnimatedModule.js
var NativeAnimatedModule_default = get("NativeAnimatedModule");

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/NativeAnimatedTurboModule.js
var NativeAnimatedTurboModule_default = get("NativeAnimatedTurboModule");

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/EventEmitter/RCTDeviceEventEmitter.js
var RCTDeviceEventEmitter_default = new EventEmitter();

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/EventEmitter/NativeEventEmitter.js
var import_invariant13 = __toESM(require_invariant());
var NativeEventEmitter = class {
  constructor(nativeModule) {
    if (Platform_default.OS === "ios") {
      (0, import_invariant13.default)(nativeModule != null, "`new NativeEventEmitter()` requires a non-null argument.");
      this._nativeModule = nativeModule;
    }
  }
  addListener(eventType, listener, context) {
    var _this$_nativeModule;
    (_this$_nativeModule = this._nativeModule) == null ? void 0 : _this$_nativeModule.addListener(eventType);
    var subscription = RCTDeviceEventEmitter_default.addListener(eventType, listener, context);
    return {
      remove: () => {
        if (subscription != null) {
          var _this$_nativeModule2;
          (_this$_nativeModule2 = this._nativeModule) == null ? void 0 : _this$_nativeModule2.removeListeners(1);
          subscription.remove();
          subscription = null;
        }
      }
    };
  }
  /**
   * @deprecated Use `remove` on the EventSubscription from `addListener`.
   */
  removeListener(eventType, listener) {
    var _this$_nativeModule3;
    (_this$_nativeModule3 = this._nativeModule) == null ? void 0 : _this$_nativeModule3.removeListeners(1);
    RCTDeviceEventEmitter_default.removeListener(eventType, listener);
  }
  emit(eventType) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    RCTDeviceEventEmitter_default.emit(eventType, ...args);
  }
  removeAllListeners(eventType) {
    var _this$_nativeModule4;
    (0, import_invariant13.default)(eventType != null, "`NativeEventEmitter.removeAllListener()` requires a non-null argument.");
    (_this$_nativeModule4 = this._nativeModule) == null ? void 0 : _this$_nativeModule4.removeListeners(this.listenerCount(eventType));
    RCTDeviceEventEmitter_default.removeAllListeners(eventType);
  }
  listenerCount(eventType) {
    return RCTDeviceEventEmitter_default.listenerCount(eventType);
  }
};

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Utilities/Platform.js
var Platform_default2 = Platform_default;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/ReactNative/ReactNativeFeatureFlags.js
var ReactNativeFeatureFlags = {
  isLayoutAnimationEnabled: () => true,
  shouldEmitW3CPointerEvents: () => false,
  shouldPressibilityUseW3CPointerEventsForHover: () => false,
  animatedShouldDebounceQueueFlush: () => false,
  animatedShouldUseSingleOp: () => false
};
var ReactNativeFeatureFlags_default = ReactNativeFeatureFlags;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/NativeAnimatedHelper.js
var import_invariant14 = __toESM(require_invariant());
var NativeAnimatedModule = Platform_default2.OS === "ios" && global.RN$Bridgeless === true ? NativeAnimatedTurboModule_default : NativeAnimatedModule_default;
var __nativeAnimatedNodeTagCount = 1;
var __nativeAnimationIdCount = 1;
var nativeEventEmitter;
var waitingForQueuedOperations = /* @__PURE__ */ new Set();
var queueOperations = false;
var queue = [];
var singleOpQueue = [];
var useSingleOpBatching = false;
Platform_default2.OS === "android" && !!(NativeAnimatedModule != null && NativeAnimatedModule.queueAndExecuteBatchedOperations) && ReactNativeFeatureFlags_default.animatedShouldUseSingleOp();
var flushQueueTimeout = null;
var eventListenerGetValueCallbacks = {};
var eventListenerAnimationFinishedCallbacks = {};
var nativeOps = useSingleOpBatching ? (function() {
  var apis = [
    "createAnimatedNode",
    // 1
    "updateAnimatedNodeConfig",
    // 2
    "getValue",
    // 3
    "startListeningToAnimatedNodeValue",
    // 4
    "stopListeningToAnimatedNodeValue",
    // 5
    "connectAnimatedNodes",
    // 6
    "disconnectAnimatedNodes",
    // 7
    "startAnimatingNode",
    // 8
    "stopAnimation",
    // 9
    "setAnimatedNodeValue",
    // 10
    "setAnimatedNodeOffset",
    // 11
    "flattenAnimatedNodeOffset",
    // 12
    "extractAnimatedNodeOffset",
    // 13
    "connectAnimatedNodeToView",
    // 14
    "disconnectAnimatedNodeFromView",
    // 15
    "restoreDefaultValues",
    // 16
    "dropAnimatedNode",
    // 17
    "addAnimatedEventToView",
    // 18
    "removeAnimatedEventFromView",
    // 19
    "addListener",
    // 20
    "removeListener"
    // 21
  ];
  return apis.reduce((acc, functionName, i) => {
    acc[functionName] = i + 1;
    return acc;
  }, {});
})() : NativeAnimatedModule;
var API = {
  getValue: function getValue(tag, saveValueCallback) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    if (useSingleOpBatching) {
      if (saveValueCallback) {
        eventListenerGetValueCallbacks[tag] = saveValueCallback;
      }
      API.queueOperation(nativeOps.getValue, tag);
    } else {
      API.queueOperation(nativeOps.getValue, tag, saveValueCallback);
    }
  },
  setWaitingForIdentifier: function setWaitingForIdentifier(id2) {
    waitingForQueuedOperations.add(id2);
    queueOperations = true;
    if (ReactNativeFeatureFlags_default.animatedShouldDebounceQueueFlush() && flushQueueTimeout) {
      clearTimeout(flushQueueTimeout);
    }
  },
  unsetWaitingForIdentifier: function unsetWaitingForIdentifier(id2) {
    waitingForQueuedOperations.delete(id2);
    if (waitingForQueuedOperations.size === 0) {
      queueOperations = false;
      API.disableQueue();
    }
  },
  disableQueue: function disableQueue() {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    if (ReactNativeFeatureFlags_default.animatedShouldDebounceQueueFlush()) {
      var prevTimeout = flushQueueTimeout;
      clearImmediate(prevTimeout);
      flushQueueTimeout = setImmediate(API.flushQueue);
    } else {
      API.flushQueue();
    }
  },
  flushQueue: function flushQueue() {
  },
  queueOperation: function queueOperation(fn) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (useSingleOpBatching) {
      singleOpQueue.push(fn, ...args);
      return;
    }
    if (queueOperations || queue.length !== 0) {
      queue.push(() => fn(...args));
    } else {
      fn(...args);
    }
  },
  createAnimatedNode: function createAnimatedNode(tag, config2) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.createAnimatedNode, tag, config2);
  },
  updateAnimatedNodeConfig: function updateAnimatedNodeConfig(tag, config2) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
  },
  startListeningToAnimatedNodeValue: function startListeningToAnimatedNodeValue(tag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.startListeningToAnimatedNodeValue, tag);
  },
  stopListeningToAnimatedNodeValue: function stopListeningToAnimatedNodeValue(tag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.stopListeningToAnimatedNodeValue, tag);
  },
  connectAnimatedNodes: function connectAnimatedNodes(parentTag, childTag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.connectAnimatedNodes, parentTag, childTag);
  },
  disconnectAnimatedNodes: function disconnectAnimatedNodes(parentTag, childTag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.disconnectAnimatedNodes, parentTag, childTag);
  },
  startAnimatingNode: function startAnimatingNode(animationId, nodeTag, config2, endCallback) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    if (useSingleOpBatching) {
      if (endCallback) {
        eventListenerAnimationFinishedCallbacks[animationId] = endCallback;
      }
      API.queueOperation(nativeOps.startAnimatingNode, animationId, nodeTag, config2);
    } else {
      API.queueOperation(nativeOps.startAnimatingNode, animationId, nodeTag, config2, endCallback);
    }
  },
  stopAnimation: function stopAnimation(animationId) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.stopAnimation, animationId);
  },
  setAnimatedNodeValue: function setAnimatedNodeValue(nodeTag, value) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.setAnimatedNodeValue, nodeTag, value);
  },
  setAnimatedNodeOffset: function setAnimatedNodeOffset(nodeTag, offset) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.setAnimatedNodeOffset, nodeTag, offset);
  },
  flattenAnimatedNodeOffset: function flattenAnimatedNodeOffset(nodeTag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.flattenAnimatedNodeOffset, nodeTag);
  },
  extractAnimatedNodeOffset: function extractAnimatedNodeOffset(nodeTag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.extractAnimatedNodeOffset, nodeTag);
  },
  connectAnimatedNodeToView: function connectAnimatedNodeToView(nodeTag, viewTag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.connectAnimatedNodeToView, nodeTag, viewTag);
  },
  disconnectAnimatedNodeFromView: function disconnectAnimatedNodeFromView(nodeTag, viewTag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.disconnectAnimatedNodeFromView, nodeTag, viewTag);
  },
  restoreDefaultValues: function restoreDefaultValues(nodeTag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    if (nativeOps.restoreDefaultValues != null) {
      API.queueOperation(nativeOps.restoreDefaultValues, nodeTag);
    }
  },
  dropAnimatedNode: function dropAnimatedNode(tag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.dropAnimatedNode, tag);
  },
  addAnimatedEventToView: function addAnimatedEventToView(viewTag, eventName, eventMapping) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.addAnimatedEventToView, viewTag, eventName, eventMapping);
  },
  removeAnimatedEventFromView(viewTag, eventName, animatedNodeTag) {
    (0, import_invariant14.default)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.removeAnimatedEventFromView, viewTag, eventName, animatedNodeTag);
  }
};
var SUPPORTED_COLOR_STYLES = {
  backgroundColor: true,
  borderBottomColor: true,
  borderColor: true,
  borderEndColor: true,
  borderLeftColor: true,
  borderRightColor: true,
  borderStartColor: true,
  borderTopColor: true,
  color: true,
  tintColor: true
};
var SUPPORTED_STYLES = (0, import_objectSpread213.default)((0, import_objectSpread213.default)({}, SUPPORTED_COLOR_STYLES), {}, {
  borderBottomEndRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderBottomStartRadius: true,
  borderRadius: true,
  borderTopEndRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderTopStartRadius: true,
  elevation: true,
  opacity: true,
  transform: true,
  zIndex: true,
  /* ios styles */
  shadowOpacity: true,
  shadowRadius: true,
  /* legacy android transform properties */
  scaleX: true,
  scaleY: true,
  translateX: true,
  translateY: true
});
var SUPPORTED_TRANSFORMS = {
  translateX: true,
  translateY: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  rotate: true,
  rotateX: true,
  rotateY: true,
  rotateZ: true,
  perspective: true
};
var SUPPORTED_INTERPOLATION_PARAMS = {
  inputRange: true,
  outputRange: true,
  extrapolate: true,
  extrapolateRight: true,
  extrapolateLeft: true
};
function addWhitelistedStyleProp(prop) {
  SUPPORTED_STYLES[prop] = true;
}
function addWhitelistedTransformProp(prop) {
  SUPPORTED_TRANSFORMS[prop] = true;
}
function addWhitelistedInterpolationParam(param) {
  SUPPORTED_INTERPOLATION_PARAMS[param] = true;
}
function isSupportedColorStyleProp(prop) {
  return SUPPORTED_COLOR_STYLES.hasOwnProperty(prop);
}
function isSupportedStyleProp(prop) {
  return SUPPORTED_STYLES.hasOwnProperty(prop);
}
function isSupportedTransformProp(prop) {
  return SUPPORTED_TRANSFORMS.hasOwnProperty(prop);
}
function isSupportedInterpolationParam(param) {
  return SUPPORTED_INTERPOLATION_PARAMS.hasOwnProperty(param);
}
function validateTransform(configs) {
  configs.forEach((config2) => {
    if (!isSupportedTransformProp(config2.property)) {
      throw new Error("Property '" + config2.property + "' is not supported by native animated module");
    }
  });
}
function validateStyles(styles9) {
  for (var _key2 in styles9) {
    if (!isSupportedStyleProp(_key2)) {
      throw new Error("Style property '" + _key2 + "' is not supported by native animated module");
    }
  }
}
function validateInterpolation(config2) {
  for (var _key3 in config2) {
    if (!isSupportedInterpolationParam(_key3)) {
      throw new Error("Interpolation property '" + _key3 + "' is not supported by native animated module");
    }
  }
}
function generateNewNodeTag() {
  return __nativeAnimatedNodeTagCount++;
}
function generateNewAnimationId() {
  return __nativeAnimationIdCount++;
}
function assertNativeAnimatedModule() {
  (0, import_invariant14.default)(NativeAnimatedModule, "Native animated module is not available");
}
var _warnedMissingNativeAnimated = false;
function shouldUseNativeDriver(config2) {
  if (config2.useNativeDriver == null) {
    console.warn("Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`");
  }
  if (config2.useNativeDriver === true && !NativeAnimatedModule) {
    if (!_warnedMissingNativeAnimated) {
      console.warn("Animated: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation. To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`. Make sure to run `bundle exec pod install` first. Read more about autolinking: https://github.com/react-native-community/cli/blob/master/docs/autolinking.md");
      _warnedMissingNativeAnimated = true;
    }
    return false;
  }
  return config2.useNativeDriver || false;
}
function transformDataType(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (/deg$/.test(value)) {
    var degrees = parseFloat(value) || 0;
    var radians = degrees * Math.PI / 180;
    return radians;
  } else {
    return value;
  }
}
var NativeAnimatedHelper_default = {
  API,
  isSupportedColorStyleProp,
  isSupportedStyleProp,
  isSupportedTransformProp,
  isSupportedInterpolationParam,
  addWhitelistedStyleProp,
  addWhitelistedTransformProp,
  addWhitelistedInterpolationParam,
  validateStyles,
  validateTransform,
  validateInterpolation,
  generateNewNodeTag,
  generateNewAnimationId,
  assertNativeAnimatedModule,
  shouldUseNativeDriver,
  transformDataType,
  // $FlowExpectedError[unsafe-getters-setters] - unsafe getter lint suppresion
  // $FlowExpectedError[missing-type-arg] - unsafe getter lint suppresion
  get nativeEventEmitter() {
    if (!nativeEventEmitter) {
      nativeEventEmitter = new NativeEventEmitter(
        // T88715063: NativeEventEmitter only used this parameter on iOS. Now it uses it on all platforms, so this code was modified automatically to preserve its behavior
        // If you want to use the native module on other platforms, please remove this condition and test its behavior
        Platform_default2.OS !== "ios" ? null : NativeAnimatedModule
      );
    }
    return nativeEventEmitter;
  }
};

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedNode.js
var import_invariant15 = __toESM(require_invariant());
var NativeAnimatedAPI = NativeAnimatedHelper_default.API;
var _uniqueId = 1;
var AnimatedNode = class {
  __attach() {
  }
  __detach() {
    if (this.__isNative && this.__nativeTag != null) {
      NativeAnimatedHelper_default.API.dropAnimatedNode(this.__nativeTag);
      this.__nativeTag = void 0;
    }
  }
  __getValue() {
  }
  __getAnimatedValue() {
    return this.__getValue();
  }
  __addChild(child) {
  }
  __removeChild(child) {
  }
  __getChildren() {
    return [];
  }
  /* Methods and props used by native Animated impl */
  constructor() {
    this._listeners = {};
  }
  __makeNative(platformConfig) {
    if (!this.__isNative) {
      throw new Error('This node cannot be made a "native" animated node');
    }
    this._platformConfig = platformConfig;
    if (this.hasListeners()) {
      this._startListeningToNativeValueUpdates();
    }
  }
  /**
   * Adds an asynchronous listener to the value so you can observe updates from
   * animations.  This is useful because there is no way to
   * synchronously read the value because it might be driven natively.
   *
   * See https://reactnative.dev/docs/animatedvalue#addlistener
   */
  addListener(callback) {
    var id2 = String(_uniqueId++);
    this._listeners[id2] = callback;
    if (this.__isNative) {
      this._startListeningToNativeValueUpdates();
    }
    return id2;
  }
  /**
   * Unregister a listener. The `id` param shall match the identifier
   * previously returned by `addListener()`.
   *
   * See https://reactnative.dev/docs/animatedvalue#removelistener
   */
  removeListener(id2) {
    delete this._listeners[id2];
    if (this.__isNative && !this.hasListeners()) {
      this._stopListeningForNativeValueUpdates();
    }
  }
  /**
   * Remove all registered listeners.
   *
   * See https://reactnative.dev/docs/animatedvalue#removealllisteners
   */
  removeAllListeners() {
    this._listeners = {};
    if (this.__isNative) {
      this._stopListeningForNativeValueUpdates();
    }
  }
  hasListeners() {
    return !!Object.keys(this._listeners).length;
  }
  _startListeningToNativeValueUpdates() {
    if (this.__nativeAnimatedValueListener && !this.__shouldUpdateListenersForNewNativeTag) {
      return;
    }
    if (this.__shouldUpdateListenersForNewNativeTag) {
      this.__shouldUpdateListenersForNewNativeTag = false;
      this._stopListeningForNativeValueUpdates();
    }
    NativeAnimatedAPI.startListeningToAnimatedNodeValue(this.__getNativeTag());
    this.__nativeAnimatedValueListener = NativeAnimatedHelper_default.nativeEventEmitter.addListener("onAnimatedValueUpdate", (data) => {
      if (data.tag !== this.__getNativeTag()) {
        return;
      }
      this.__onAnimatedValueUpdateReceived(data.value);
    });
  }
  __onAnimatedValueUpdateReceived(value) {
    this.__callListeners(value);
  }
  __callListeners(value) {
    for (var _key in this._listeners) {
      this._listeners[_key]({
        value
      });
    }
  }
  _stopListeningForNativeValueUpdates() {
    if (!this.__nativeAnimatedValueListener) {
      return;
    }
    this.__nativeAnimatedValueListener.remove();
    this.__nativeAnimatedValueListener = null;
    NativeAnimatedAPI.stopListeningToAnimatedNodeValue(this.__getNativeTag());
  }
  __getNativeTag() {
    var _this$__nativeTag;
    NativeAnimatedHelper_default.assertNativeAnimatedModule();
    (0, import_invariant15.default)(this.__isNative, 'Attempt to get native tag from node not marked as "native"');
    var nativeTag = (_this$__nativeTag = this.__nativeTag) !== null && _this$__nativeTag !== void 0 ? _this$__nativeTag : NativeAnimatedHelper_default.generateNewNodeTag();
    if (this.__nativeTag == null) {
      this.__nativeTag = nativeTag;
      var config2 = this.__getNativeConfig();
      if (this._platformConfig) {
        config2.platformConfig = this._platformConfig;
      }
      NativeAnimatedHelper_default.API.createAnimatedNode(nativeTag, config2);
      this.__shouldUpdateListenersForNewNativeTag = true;
    }
    return nativeTag;
  }
  __getNativeConfig() {
    throw new Error("This JS animated node type cannot be used as native animated node");
  }
  toJSON() {
    return this.__getValue();
  }
  __getPlatformConfig() {
    return this._platformConfig;
  }
  __setPlatformConfig(platformConfig) {
    this._platformConfig = platformConfig;
  }
};
var AnimatedNode_default = AnimatedNode;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedWithChildren.js
var AnimatedWithChildren = class extends AnimatedNode_default {
  constructor() {
    super();
    this._children = [];
  }
  __makeNative(platformConfig) {
    if (!this.__isNative) {
      this.__isNative = true;
      for (var _iterator = (0, import_createForOfIteratorHelperLoose4.default)(this._children), _step; !(_step = _iterator()).done; ) {
        var child = _step.value;
        child.__makeNative(platformConfig);
        NativeAnimatedHelper_default.API.connectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
      }
    }
    super.__makeNative(platformConfig);
  }
  __addChild(child) {
    if (this._children.length === 0) {
      this.__attach();
    }
    this._children.push(child);
    if (this.__isNative) {
      child.__makeNative(this.__getPlatformConfig());
      NativeAnimatedHelper_default.API.connectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
    }
  }
  __removeChild(child) {
    var index = this._children.indexOf(child);
    if (index === -1) {
      console.warn("Trying to remove a child that doesn't exist");
      return;
    }
    if (this.__isNative && child.__isNative) {
      NativeAnimatedHelper_default.API.disconnectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
    }
    this._children.splice(index, 1);
    if (this._children.length === 0) {
      this.__detach();
    }
  }
  __getChildren() {
    return this._children;
  }
  __callListeners(value) {
    super.__callListeners(value);
    if (!this.__isNative) {
      for (var _iterator2 = (0, import_createForOfIteratorHelperLoose4.default)(this._children), _step2; !(_step2 = _iterator2()).done; ) {
        var child = _step2.value;
        if (child.__getValue) {
          child.__callListeners(child.__getValue());
        }
      }
    }
  }
};
var AnimatedWithChildren_default = AnimatedWithChildren;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedInterpolation.js
var import_invariant16 = __toESM(require_invariant());
var import_normalize_colors2 = __toESM(require_normalize_colors());
var __DEV__4 = process.env.NODE_ENV !== "production";
var linear = (t) => t;
function createInterpolation(config2) {
  if (config2.outputRange && typeof config2.outputRange[0] === "string") {
    return createInterpolationFromStringOutputRange(config2);
  }
  var outputRange = config2.outputRange;
  var inputRange = config2.inputRange;
  if (__DEV__4) {
    checkInfiniteRange("outputRange", outputRange);
    checkInfiniteRange("inputRange", inputRange);
    checkValidInputRange(inputRange);
    (0, import_invariant16.default)(inputRange.length === outputRange.length, "inputRange (" + inputRange.length + ") and outputRange (" + outputRange.length + ") must have the same length");
  }
  var easing = config2.easing || linear;
  var extrapolateLeft = "extend";
  if (config2.extrapolateLeft !== void 0) {
    extrapolateLeft = config2.extrapolateLeft;
  } else if (config2.extrapolate !== void 0) {
    extrapolateLeft = config2.extrapolate;
  }
  var extrapolateRight = "extend";
  if (config2.extrapolateRight !== void 0) {
    extrapolateRight = config2.extrapolateRight;
  } else if (config2.extrapolate !== void 0) {
    extrapolateRight = config2.extrapolate;
  }
  return (input) => {
    (0, import_invariant16.default)(typeof input === "number", "Cannot interpolation an input which is not a number");
    var range2 = findRange(input, inputRange);
    return interpolate(input, inputRange[range2], inputRange[range2 + 1], outputRange[range2], outputRange[range2 + 1], easing, extrapolateLeft, extrapolateRight);
  };
}
function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight) {
  var result = input;
  if (result < inputMin) {
    if (extrapolateLeft === "identity") {
      return result;
    } else if (extrapolateLeft === "clamp") {
      result = inputMin;
    } else if (extrapolateLeft === "extend") {
    }
  }
  if (result > inputMax) {
    if (extrapolateRight === "identity") {
      return result;
    } else if (extrapolateRight === "clamp") {
      result = inputMax;
    } else if (extrapolateRight === "extend") {
    }
  }
  if (outputMin === outputMax) {
    return outputMin;
  }
  if (inputMin === inputMax) {
    if (input <= inputMin) {
      return outputMin;
    }
    return outputMax;
  }
  if (inputMin === -Infinity) {
    result = -result;
  } else if (inputMax === Infinity) {
    result = result - inputMin;
  } else {
    result = (result - inputMin) / (inputMax - inputMin);
  }
  result = easing(result);
  if (outputMin === -Infinity) {
    result = -result;
  } else if (outputMax === Infinity) {
    result = result + outputMin;
  } else {
    result = result * (outputMax - outputMin) + outputMin;
  }
  return result;
}
function colorToRgba(input) {
  var normalizedColor = (0, import_normalize_colors2.default)(input);
  if (normalizedColor === null || typeof normalizedColor !== "number") {
    return input;
  }
  normalizedColor = normalizedColor || 0;
  var r = (normalizedColor & 4278190080) >>> 24;
  var g = (normalizedColor & 16711680) >>> 16;
  var b = (normalizedColor & 65280) >>> 8;
  var a = (normalizedColor & 255) / 255;
  return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
}
var stringShapeRegex = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g;
function createInterpolationFromStringOutputRange(config2) {
  var outputRange = config2.outputRange;
  (0, import_invariant16.default)(outputRange.length >= 2, "Bad output range");
  outputRange = outputRange.map(colorToRgba);
  checkPattern(outputRange);
  var outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach((value) => {
    value.match(stringShapeRegex).forEach((number, i) => {
      outputRanges[i].push(+number);
    });
  });
  var interpolations = outputRange[0].match(stringShapeRegex).map((value, i) => {
    return createInterpolation((0, import_objectSpread214.default)((0, import_objectSpread214.default)({}, config2), {}, {
      outputRange: outputRanges[i]
    }));
  });
  var shouldRound = isRgbOrRgba(outputRange[0]);
  return (input) => {
    var i = 0;
    return outputRange[0].replace(stringShapeRegex, () => {
      var val = +interpolations[i++](input);
      if (shouldRound) {
        val = i < 4 ? Math.round(val) : Math.round(val * 1e3) / 1e3;
      }
      return String(val);
    });
  };
}
function isRgbOrRgba(range2) {
  return typeof range2 === "string" && range2.startsWith("rgb");
}
function checkPattern(arr) {
  var pattern = arr[0].replace(stringShapeRegex, "");
  for (var i = 1; i < arr.length; ++i) {
    (0, import_invariant16.default)(pattern === arr[i].replace(stringShapeRegex, ""), "invalid pattern " + arr[0] + " and " + arr[i]);
  }
}
function findRange(input, inputRange) {
  var i;
  for (i = 1; i < inputRange.length - 1; ++i) {
    if (inputRange[i] >= input) {
      break;
    }
  }
  return i - 1;
}
function checkValidInputRange(arr) {
  (0, import_invariant16.default)(arr.length >= 2, "inputRange must have at least 2 elements");
  var message = "inputRange must be monotonically non-decreasing " + String(arr);
  for (var i = 1; i < arr.length; ++i) {
    (0, import_invariant16.default)(arr[i] >= arr[i - 1], message);
  }
}
function checkInfiniteRange(name, arr) {
  (0, import_invariant16.default)(arr.length >= 2, name + " must have at least 2 elements");
  (0, import_invariant16.default)(
    arr.length !== 2 || arr[0] !== -Infinity || arr[1] !== Infinity,
    /* $FlowFixMe[incompatible-type] (>=0.13.0) - In the addition expression
     * below this comment, one or both of the operands may be something that
     * doesn't cleanly convert to a string, like undefined, null, and object,
     * etc. If you really mean this implicit string conversion, you can do
     * something like String(myThing) */
    name + "cannot be ]-infinity;+infinity[ " + arr
  );
}
var AnimatedInterpolation = class _AnimatedInterpolation extends AnimatedWithChildren_default {
  // Export for testing.
  constructor(parent, config2) {
    super();
    this._parent = parent;
    this._config = config2;
    this._interpolation = createInterpolation(config2);
  }
  __makeNative(platformConfig) {
    this._parent.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getValue() {
    var parentValue = this._parent.__getValue();
    (0, import_invariant16.default)(typeof parentValue === "number", "Cannot interpolate an input which is not a number.");
    return this._interpolation(parentValue);
  }
  interpolate(config2) {
    return new _AnimatedInterpolation(this, config2);
  }
  __attach() {
    this._parent.__addChild(this);
  }
  __detach() {
    this._parent.__removeChild(this);
    super.__detach();
  }
  __transformDataType(range2) {
    return range2.map(NativeAnimatedHelper_default.transformDataType);
  }
  __getNativeConfig() {
    if (__DEV__4) {
      NativeAnimatedHelper_default.validateInterpolation(this._config);
    }
    return {
      inputRange: this._config.inputRange,
      // Only the `outputRange` can contain strings so we don't need to transform `inputRange` here
      outputRange: this.__transformDataType(this._config.outputRange),
      extrapolateLeft: this._config.extrapolateLeft || this._config.extrapolate || "extend",
      extrapolateRight: this._config.extrapolateRight || this._config.extrapolate || "extend",
      type: "interpolation"
    };
  }
};
AnimatedInterpolation.__createInterpolation = createInterpolation;
var AnimatedInterpolation_default = AnimatedInterpolation;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedValue.js
var NativeAnimatedAPI2 = NativeAnimatedHelper_default.API;
function _flush(rootNode) {
  var animatedStyles = /* @__PURE__ */ new Set();
  function findAnimatedStyles(node) {
    if (typeof node.update === "function") {
      animatedStyles.add(node);
    } else {
      node.__getChildren().forEach(findAnimatedStyles);
    }
  }
  findAnimatedStyles(rootNode);
  animatedStyles.forEach((animatedStyle) => animatedStyle.update());
}
function _executeAsAnimatedBatch(id2, operation) {
  NativeAnimatedAPI2.setWaitingForIdentifier(id2);
  operation();
  NativeAnimatedAPI2.unsetWaitingForIdentifier(id2);
}
var AnimatedValue = class extends AnimatedWithChildren_default {
  constructor(value, config2) {
    super();
    if (typeof value !== "number") {
      throw new Error("AnimatedValue: Attempting to set value to undefined");
    }
    this._startingValue = this._value = value;
    this._offset = 0;
    this._animation = null;
    if (config2 && config2.useNativeDriver) {
      this.__makeNative();
    }
  }
  __detach() {
    if (this.__isNative) {
      NativeAnimatedAPI2.getValue(this.__getNativeTag(), (value) => {
        this._value = value - this._offset;
      });
    }
    this.stopAnimation();
    super.__detach();
  }
  __getValue() {
    return this._value + this._offset;
  }
  /**
   * Directly set the value.  This will stop any animations running on the value
   * and update all the bound properties.
   *
   * See https://reactnative.dev/docs/animatedvalue#setvalue
   */
  setValue(value) {
    if (this._animation) {
      this._animation.stop();
      this._animation = null;
    }
    this._updateValue(
      value,
      !this.__isNative
      /* don't perform a flush for natively driven values */
    );
    if (this.__isNative) {
      _executeAsAnimatedBatch(this.__getNativeTag().toString(), () => NativeAnimatedAPI2.setAnimatedNodeValue(this.__getNativeTag(), value));
    }
  }
  /**
   * Sets an offset that is applied on top of whatever value is set, whether via
   * `setValue`, an animation, or `Animated.event`.  Useful for compensating
   * things like the start of a pan gesture.
   *
   * See https://reactnative.dev/docs/animatedvalue#setoffset
   */
  setOffset(offset) {
    this._offset = offset;
    if (this.__isNative) {
      NativeAnimatedAPI2.setAnimatedNodeOffset(this.__getNativeTag(), offset);
    }
  }
  /**
   * Merges the offset value into the base value and resets the offset to zero.
   * The final output of the value is unchanged.
   *
   * See https://reactnative.dev/docs/animatedvalue#flattenoffset
   */
  flattenOffset() {
    this._value += this._offset;
    this._offset = 0;
    if (this.__isNative) {
      NativeAnimatedAPI2.flattenAnimatedNodeOffset(this.__getNativeTag());
    }
  }
  /**
   * Sets the offset value to the base value, and resets the base value to zero.
   * The final output of the value is unchanged.
   *
   * See https://reactnative.dev/docs/animatedvalue#extractoffset
   */
  extractOffset() {
    this._offset += this._value;
    this._value = 0;
    if (this.__isNative) {
      NativeAnimatedAPI2.extractAnimatedNodeOffset(this.__getNativeTag());
    }
  }
  /**
   * Stops any running animation or tracking. `callback` is invoked with the
   * final value after stopping the animation, which is useful for updating
   * state to match the animation position with layout.
   *
   * See https://reactnative.dev/docs/animatedvalue#stopanimation
   */
  stopAnimation(callback) {
    this.stopTracking();
    this._animation && this._animation.stop();
    this._animation = null;
    if (callback) {
      if (this.__isNative) {
        NativeAnimatedAPI2.getValue(this.__getNativeTag(), callback);
      } else {
        callback(this.__getValue());
      }
    }
  }
  /**
   * Stops any animation and resets the value to its original.
   *
   * See https://reactnative.dev/docs/animatedvalue#resetanimation
   */
  resetAnimation(callback) {
    this.stopAnimation(callback);
    this._value = this._startingValue;
    if (this.__isNative) {
      NativeAnimatedAPI2.setAnimatedNodeValue(this.__getNativeTag(), this._startingValue);
    }
  }
  __onAnimatedValueUpdateReceived(value) {
    this._updateValue(
      value,
      false
      /*flush*/
    );
  }
  /**
   * Interpolates the value before updating the property, e.g. mapping 0-1 to
   * 0-10.
   */
  interpolate(config2) {
    return new AnimatedInterpolation_default(this, config2);
  }
  /**
   * Typically only used internally, but could be used by a custom Animation
   * class.
   *
   * See https://reactnative.dev/docs/animatedvalue#animate
   */
  animate(animation, callback) {
    var handle = null;
    if (animation.__isInteraction) {
      handle = InteractionManager_default.createInteractionHandle();
    }
    var previousAnimation = this._animation;
    this._animation && this._animation.stop();
    this._animation = animation;
    animation.start(this._value, (value) => {
      this._updateValue(
        value,
        true
        /* flush */
      );
    }, (result) => {
      this._animation = null;
      if (handle !== null) {
        InteractionManager_default.clearInteractionHandle(handle);
      }
      callback && callback(result);
    }, previousAnimation, this);
  }
  /**
   * Typically only used internally.
   */
  stopTracking() {
    this._tracking && this._tracking.__detach();
    this._tracking = null;
  }
  /**
   * Typically only used internally.
   */
  track(tracking) {
    this.stopTracking();
    this._tracking = tracking;
    this._tracking && this._tracking.update();
  }
  _updateValue(value, flush) {
    if (value === void 0) {
      throw new Error("AnimatedValue: Attempting to set value to undefined");
    }
    this._value = value;
    if (flush) {
      _flush(this);
    }
    super.__callListeners(this.__getValue());
  }
  __getNativeConfig() {
    return {
      type: "value",
      value: this._value,
      offset: this._offset
    };
  }
};
var AnimatedValue_default = AnimatedValue;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/AnimatedEvent.js
var import_invariant17 = __toESM(require_invariant());
var __DEV__5 = process.env.NODE_ENV !== "production";
function attachNativeEvent(viewRef, eventName, argMapping) {
  var eventMappings = [];
  var traverse = (value, path) => {
    if (value instanceof AnimatedValue_default) {
      value.__makeNative();
      eventMappings.push({
        nativeEventPath: path,
        animatedValueTag: value.__getNativeTag()
      });
    } else if (typeof value === "object") {
      for (var _key in value) {
        traverse(value[_key], path.concat(_key));
      }
    }
  };
  (0, import_invariant17.default)(argMapping[0] && argMapping[0].nativeEvent, "Native driven events only support animated values contained inside `nativeEvent`.");
  traverse(argMapping[0].nativeEvent, []);
  if (viewRef != null) {
    eventMappings.forEach((mapping) => {
      NativeAnimatedHelper_default.API.addAnimatedEventToView(viewRef, eventName, mapping);
    });
  }
  return {
    detach() {
      if (viewRef != null) {
        eventMappings.forEach((mapping) => {
          NativeAnimatedHelper_default.API.removeAnimatedEventFromView(
            viewRef,
            eventName,
            // $FlowFixMe[incompatible-call]
            mapping.animatedValueTag
          );
        });
      }
    }
  };
}
function validateMapping(argMapping, args) {
  var validate2 = (recMapping, recEvt, key) => {
    if (recMapping instanceof AnimatedValue_default) {
      (0, import_invariant17.default)(typeof recEvt === "number", "Bad mapping of event key " + key + ", should be number but got " + typeof recEvt);
      return;
    }
    if (typeof recEvt === "number") {
      (0, import_invariant17.default)(recMapping instanceof AnimatedValue_default, "Bad mapping of type " + typeof recMapping + " for key " + key + ", event value must map to AnimatedValue");
      return;
    }
    (0, import_invariant17.default)(typeof recMapping === "object", "Bad mapping of type " + typeof recMapping + " for key " + key);
    (0, import_invariant17.default)(typeof recEvt === "object", "Bad event of type " + typeof recEvt + " for key " + key);
    for (var mappingKey in recMapping) {
      validate2(recMapping[mappingKey], recEvt[mappingKey], mappingKey);
    }
  };
  (0, import_invariant17.default)(args.length >= argMapping.length, "Event has less arguments than mapping");
  argMapping.forEach((mapping, idx) => {
    validate2(mapping, args[idx], "arg" + idx);
  });
}
var AnimatedEvent = class {
  constructor(argMapping, config2) {
    this._listeners = [];
    this._argMapping = argMapping;
    if (config2 == null) {
      console.warn("Animated.event now requires a second argument for options");
      config2 = {
        useNativeDriver: false
      };
    }
    if (config2.listener) {
      this.__addListener(config2.listener);
    }
    this._callListeners = this._callListeners.bind(this);
    this._attachedEvent = null;
    this.__isNative = shouldUseNativeDriver(config2);
  }
  __addListener(callback) {
    this._listeners.push(callback);
  }
  __removeListener(callback) {
    this._listeners = this._listeners.filter((listener) => listener !== callback);
  }
  __attach(viewRef, eventName) {
    (0, import_invariant17.default)(this.__isNative, "Only native driven events need to be attached.");
    this._attachedEvent = attachNativeEvent(viewRef, eventName, this._argMapping);
  }
  __detach(viewTag, eventName) {
    (0, import_invariant17.default)(this.__isNative, "Only native driven events need to be detached.");
    this._attachedEvent && this._attachedEvent.detach();
  }
  __getHandler() {
    var _this = this;
    if (this.__isNative) {
      if (__DEV__5) {
        var _validatedMapping = false;
        return function() {
          for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
            args[_key2] = arguments[_key2];
          }
          if (!_validatedMapping) {
            validateMapping(_this._argMapping, args);
            _validatedMapping = true;
          }
          _this._callListeners(...args);
        };
      } else {
        return this._callListeners;
      }
    }
    var validatedMapping = false;
    return function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        args[_key3] = arguments[_key3];
      }
      if (__DEV__5 && !validatedMapping) {
        validateMapping(_this._argMapping, args);
        validatedMapping = true;
      }
      var traverse = (recMapping, recEvt, key) => {
        if (recMapping instanceof AnimatedValue_default) {
          if (typeof recEvt === "number") {
            recMapping.setValue(recEvt);
          }
        } else if (typeof recMapping === "object") {
          for (var mappingKey in recMapping) {
            traverse(recMapping[mappingKey], recEvt[mappingKey], mappingKey);
          }
        }
      };
      _this._argMapping.forEach((mapping, idx) => {
        traverse(mapping, args[idx], "arg" + idx);
      });
      _this._callListeners(...args);
    };
  }
  _callListeners() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
      args[_key4] = arguments[_key4];
    }
    this._listeners.forEach((listener) => listener(...args));
  }
};

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedTransform.js
var AnimatedTransform = class extends AnimatedWithChildren_default {
  constructor(transforms) {
    super();
    this._transforms = transforms;
  }
  __makeNative() {
    this._transforms.forEach((transform) => {
      for (var key in transform) {
        var value = transform[key];
        if (value instanceof AnimatedNode_default) {
          value.__makeNative();
        }
      }
    });
    super.__makeNative();
  }
  __getValue() {
    return this._transforms.map((transform) => {
      var result = {};
      for (var key in transform) {
        var value = transform[key];
        if (value instanceof AnimatedNode_default) {
          result[key] = value.__getValue();
        } else {
          result[key] = value;
        }
      }
      return result;
    });
  }
  __getAnimatedValue() {
    return this._transforms.map((transform) => {
      var result = {};
      for (var key in transform) {
        var value = transform[key];
        if (value instanceof AnimatedNode_default) {
          result[key] = value.__getAnimatedValue();
        } else {
          result[key] = value;
        }
      }
      return result;
    });
  }
  __attach() {
    this._transforms.forEach((transform) => {
      for (var key in transform) {
        var value = transform[key];
        if (value instanceof AnimatedNode_default) {
          value.__addChild(this);
        }
      }
    });
  }
  __detach() {
    this._transforms.forEach((transform) => {
      for (var key in transform) {
        var value = transform[key];
        if (value instanceof AnimatedNode_default) {
          value.__removeChild(this);
        }
      }
    });
    super.__detach();
  }
  __getNativeConfig() {
    var transConfigs = [];
    this._transforms.forEach((transform) => {
      for (var key in transform) {
        var value = transform[key];
        if (value instanceof AnimatedNode_default) {
          transConfigs.push({
            type: "animated",
            property: key,
            nodeTag: value.__getNativeTag()
          });
        } else {
          transConfigs.push({
            type: "static",
            property: key,
            value: NativeAnimatedHelper_default.transformDataType(value)
          });
        }
      }
    });
    NativeAnimatedHelper_default.validateTransform(transConfigs);
    return {
      type: "transform",
      transforms: transConfigs
    };
  }
};
var AnimatedTransform_default = AnimatedTransform;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedStyle.js
var flattenStyle = StyleSheet_default.flatten;
function createAnimatedStyle(inputStyle) {
  var style = flattenStyle(inputStyle);
  var animatedStyles = {};
  for (var key in style) {
    var value = style[key];
    if (key === "transform" && Array.isArray(value)) {
      animatedStyles[key] = new AnimatedTransform_default(value);
    } else if (value instanceof AnimatedNode_default) {
      animatedStyles[key] = value;
    } else if (value && !Array.isArray(value) && typeof value === "object") {
      animatedStyles[key] = createAnimatedStyle(value);
    }
  }
  return animatedStyles;
}
var AnimatedStyle = class extends AnimatedWithChildren_default {
  constructor(style) {
    super();
    this._inputStyle = style;
    this._style = createAnimatedStyle(style);
  }
  // Recursively get values for nested styles (like iOS's shadowOffset)
  _walkStyleAndGetValues(style) {
    var updatedStyle = {};
    for (var key in style) {
      var value = style[key];
      if (value instanceof AnimatedNode_default) {
        if (!value.__isNative) {
          updatedStyle[key] = value.__getValue();
        }
      } else if (value && !Array.isArray(value) && typeof value === "object") {
        updatedStyle[key] = this._walkStyleAndGetValues(value);
      } else {
        updatedStyle[key] = value;
      }
    }
    return updatedStyle;
  }
  __getValue() {
    return [this._inputStyle, this._walkStyleAndGetValues(this._style)];
  }
  // Recursively get animated values for nested styles (like iOS's shadowOffset)
  _walkStyleAndGetAnimatedValues(style) {
    var updatedStyle = {};
    for (var key in style) {
      var value = style[key];
      if (value instanceof AnimatedNode_default) {
        updatedStyle[key] = value.__getAnimatedValue();
      } else if (value && !Array.isArray(value) && typeof value === "object") {
        updatedStyle[key] = this._walkStyleAndGetAnimatedValues(value);
      }
    }
    return updatedStyle;
  }
  __getAnimatedValue() {
    return this._walkStyleAndGetAnimatedValues(this._style);
  }
  __attach() {
    for (var key in this._style) {
      var value = this._style[key];
      if (value instanceof AnimatedNode_default) {
        value.__addChild(this);
      }
    }
  }
  __detach() {
    for (var key in this._style) {
      var value = this._style[key];
      if (value instanceof AnimatedNode_default) {
        value.__removeChild(this);
      }
    }
    super.__detach();
  }
  __makeNative() {
    for (var key in this._style) {
      var value = this._style[key];
      if (value instanceof AnimatedNode_default) {
        value.__makeNative();
      }
    }
    super.__makeNative();
  }
  __getNativeConfig() {
    var styleConfig = {};
    for (var styleKey in this._style) {
      if (this._style[styleKey] instanceof AnimatedNode_default) {
        var style = this._style[styleKey];
        style.__makeNative();
        styleConfig[styleKey] = style.__getNativeTag();
      }
    }
    NativeAnimatedHelper_default.validateStyles(styleConfig);
    return {
      type: "style",
      style: styleConfig
    };
  }
};
var AnimatedStyle_default = AnimatedStyle;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedProps.js
var import_invariant18 = __toESM(require_invariant());
var AnimatedProps = class extends AnimatedNode_default {
  constructor(props, callback) {
    super();
    if (props.style) {
      props = (0, import_objectSpread215.default)((0, import_objectSpread215.default)({}, props), {}, {
        style: new AnimatedStyle_default(props.style)
      });
    }
    this._props = props;
    this._callback = callback;
  }
  __getValue() {
    var props = {};
    for (var key in this._props) {
      var value = this._props[key];
      if (value instanceof AnimatedNode_default) {
        if (!value.__isNative || value instanceof AnimatedStyle_default) {
          props[key] = value.__getValue();
        }
      } else if (value instanceof AnimatedEvent) {
        props[key] = value.__getHandler();
      } else {
        props[key] = value;
      }
    }
    return props;
  }
  __getAnimatedValue() {
    var props = {};
    for (var key in this._props) {
      var value = this._props[key];
      if (value instanceof AnimatedNode_default) {
        props[key] = value.__getAnimatedValue();
      }
    }
    return props;
  }
  __attach() {
    for (var key in this._props) {
      var value = this._props[key];
      if (value instanceof AnimatedNode_default) {
        value.__addChild(this);
      }
    }
  }
  __detach() {
    if (this.__isNative && this._animatedView) {
      this.__disconnectAnimatedView();
    }
    this._animatedView = null;
    for (var key in this._props) {
      var value = this._props[key];
      if (value instanceof AnimatedNode_default) {
        value.__removeChild(this);
      }
    }
    super.__detach();
  }
  update() {
    this._callback();
  }
  __makeNative() {
    if (!this.__isNative) {
      this.__isNative = true;
      for (var key in this._props) {
        var value = this._props[key];
        if (value instanceof AnimatedNode_default) {
          value.__makeNative();
        }
      }
      if (this._animatedView) {
        this.__connectAnimatedView();
      }
    }
  }
  setNativeView(animatedView) {
    if (this._animatedView === animatedView) {
      return;
    }
    this._animatedView = animatedView;
    if (this.__isNative) {
      this.__connectAnimatedView();
    }
  }
  __connectAnimatedView() {
    (0, import_invariant18.default)(this.__isNative, 'Expected node to be marked as "native"');
    var nativeViewTag = this._animatedView;
    (0, import_invariant18.default)(nativeViewTag != null, "Unable to locate attached view in the native tree");
    NativeAnimatedHelper_default.API.connectAnimatedNodeToView(this.__getNativeTag(), nativeViewTag);
  }
  __disconnectAnimatedView() {
    (0, import_invariant18.default)(this.__isNative, 'Expected node to be marked as "native"');
    var nativeViewTag = this._animatedView;
    (0, import_invariant18.default)(nativeViewTag != null, "Unable to locate attached view in the native tree");
    NativeAnimatedHelper_default.API.disconnectAnimatedNodeFromView(this.__getNativeTag(), nativeViewTag);
  }
  __restoreDefaultValues() {
    if (this.__isNative) {
      NativeAnimatedHelper_default.API.restoreDefaultValues(this.__getNativeTag());
    }
  }
  __getNativeConfig() {
    var propsConfig = {};
    for (var propKey in this._props) {
      var value = this._props[propKey];
      if (value instanceof AnimatedNode_default) {
        value.__makeNative();
        propsConfig[propKey] = value.__getNativeTag();
      }
    }
    return {
      type: "props",
      props: propsConfig
    };
  }
};
var AnimatedProps_default = AnimatedProps;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Utilities/useRefEffect.js
import { useCallback as useCallback4, useRef as useRef6 } from "react";
function useRefEffect(effect) {
  var cleanupRef = useRef6(void 0);
  return useCallback4((instance) => {
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = void 0;
    }
    if (instance != null) {
      cleanupRef.current = effect(instance);
    }
  }, [effect]);
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/useAnimatedProps.js
import { useCallback as useCallback5, useEffect as useEffect6, useMemo as useMemo6, useReducer, useRef as useRef7 } from "react";
function useAnimatedProps(props) {
  var _useReducer = useReducer((count) => count + 1, 0), scheduleUpdate = _useReducer[1];
  var onUpdateRef = useRef7(null);
  var node = useMemo6(() => new AnimatedProps_default(props, () => onUpdateRef.current == null ? void 0 : onUpdateRef.current()), [props]);
  useAnimatedPropsLifecycle(node);
  var refEffect = useCallback5((instance) => {
    node.setNativeView(instance);
    onUpdateRef.current = () => {
      scheduleUpdate();
    };
    var target = getEventTarget(instance);
    var events = [];
    for (var propName in props) {
      var propValue = props[propName];
      if (propValue instanceof AnimatedEvent && propValue.__isNative) {
        propValue.__attach(target, propName);
        events.push([propName, propValue]);
      }
    }
    return () => {
      onUpdateRef.current = null;
      for (var _i = 0, _events = events; _i < _events.length; _i++) {
        var _events$_i = _events[_i], _propName = _events$_i[0], _propValue = _events$_i[1];
        _propValue.__detach(target, _propName);
      }
    };
  }, [props, node]);
  var callbackRef = useRefEffect(refEffect);
  return [reduceAnimatedProps(node), callbackRef];
}
function reduceAnimatedProps(node) {
  return (0, import_objectSpread216.default)((0, import_objectSpread216.default)({}, node.__getValue()), {}, {
    collapsable: false
  });
}
function useAnimatedPropsLifecycle(node) {
  var prevNodeRef = useRef7(null);
  var isUnmountingRef = useRef7(false);
  useEffect6(() => {
    NativeAnimatedHelper_default.API.flushQueue();
  });
  useLayoutEffect_default(() => {
    isUnmountingRef.current = false;
    return () => {
      isUnmountingRef.current = true;
    };
  }, []);
  useLayoutEffect_default(() => {
    node.__attach();
    if (prevNodeRef.current != null) {
      var prevNode = prevNodeRef.current;
      prevNode.__restoreDefaultValues();
      prevNode.__detach();
      prevNodeRef.current = null;
    }
    return () => {
      if (isUnmountingRef.current) {
        node.__detach();
      } else {
        prevNodeRef.current = node;
      }
    };
  }, [node]);
}
function getEventTarget(instance) {
  return typeof instance === "object" && typeof (instance == null ? void 0 : instance.getScrollableNode) === "function" ? (
    // $FlowFixMe[incompatible-use] - Legacy instance assumptions.
    instance.getScrollableNode()
  ) : instance;
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Utilities/useMergeRefs.js
import { useCallback as useCallback6 } from "react";
function useMergeRefs2() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  return useCallback6(
    (current) => {
      for (var _i = 0, _refs = refs; _i < _refs.length; _i++) {
        var ref = _refs[_i];
        if (ref != null) {
          if (typeof ref === "function") {
            ref(current);
          } else {
            ref.current = current;
          }
        }
      }
    },
    [...refs]
    // eslint-disable-line react-hooks/exhaustive-deps
  );
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/createAnimatedComponent.js
import * as React49 from "react";
var _excluded9 = ["style"];
function createAnimatedComponent(Component2) {
  return /* @__PURE__ */ React49.forwardRef((props, forwardedRef) => {
    var _useAnimatedProps = useAnimatedProps(props), reducedProps = _useAnimatedProps[0], callbackRef = _useAnimatedProps[1];
    var ref = useMergeRefs2(callbackRef, forwardedRef);
    var passthroughAnimatedPropExplicitValues = reducedProps.passthroughAnimatedPropExplicitValues, style = reducedProps.style;
    var _ref = passthroughAnimatedPropExplicitValues !== null && passthroughAnimatedPropExplicitValues !== void 0 ? passthroughAnimatedPropExplicitValues : {}, passthroughStyle = _ref.style, passthroughProps = (0, import_objectWithoutPropertiesLoose9.default)(_ref, _excluded9);
    var mergedStyle = [style, passthroughStyle];
    return /* @__PURE__ */ React49.createElement(Component2, (0, import_extends6.default)({}, reducedProps, passthroughProps, {
      style: mergedStyle,
      ref
    }));
  });
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/components/AnimatedFlatList.js
var FlatListWithEventThrottle = /* @__PURE__ */ React50.forwardRef((props, ref) => /* @__PURE__ */ React50.createElement(FlatList_default2, (0, import_extends7.default)({
  scrollEventThrottle: 1e-4
}, props, {
  ref
})));
var AnimatedFlatList_default = createAnimatedComponent(FlatListWithEventThrottle);

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/components/AnimatedImage.js
import * as React52 from "react";

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/Image/index.js
var import_objectSpread217 = __toESM(require_objectSpread2());
var import_extends8 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose10 = __toESM(require_objectWithoutPropertiesLoose());
import * as React51 from "react";

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/AssetRegistry/index.js
var assets = [];
function getAssetByID(assetId) {
  return assets[assetId - 1];
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/modules/ImageLoader/index.js
var dataUriPattern = /^data:/;
var ImageUriCache = class _ImageUriCache {
  static has(uri) {
    var entries = _ImageUriCache._entries;
    var isDataUri = dataUriPattern.test(uri);
    return isDataUri || Boolean(entries[uri]);
  }
  static add(uri) {
    var entries = _ImageUriCache._entries;
    var lastUsedTimestamp = Date.now();
    if (entries[uri]) {
      entries[uri].lastUsedTimestamp = lastUsedTimestamp;
      entries[uri].refCount += 1;
    } else {
      entries[uri] = {
        lastUsedTimestamp,
        refCount: 1
      };
    }
  }
  static remove(uri) {
    var entries = _ImageUriCache._entries;
    if (entries[uri]) {
      entries[uri].refCount -= 1;
    }
    _ImageUriCache._cleanUpIfNeeded();
  }
  static _cleanUpIfNeeded() {
    var entries = _ImageUriCache._entries;
    var imageUris = Object.keys(entries);
    if (imageUris.length + 1 > _ImageUriCache._maximumEntries) {
      var leastRecentlyUsedKey;
      var leastRecentlyUsedEntry;
      imageUris.forEach((uri) => {
        var entry = entries[uri];
        if ((!leastRecentlyUsedEntry || entry.lastUsedTimestamp < leastRecentlyUsedEntry.lastUsedTimestamp) && entry.refCount === 0) {
          leastRecentlyUsedKey = uri;
          leastRecentlyUsedEntry = entry;
        }
      });
      if (leastRecentlyUsedKey) {
        delete entries[leastRecentlyUsedKey];
      }
    }
  }
};
ImageUriCache._maximumEntries = 256;
ImageUriCache._entries = {};
var id = 0;
var requests = {};
var ImageLoader = {
  abort(requestId) {
    var image = requests["" + requestId];
    if (image) {
      image.onerror = null;
      image.onload = null;
      image = null;
      delete requests["" + requestId];
    }
  },
  getSize(uri, success, failure) {
    var complete = false;
    var interval = setInterval(callback, 16);
    var requestId = ImageLoader.load(uri, callback, errorCallback);
    function callback() {
      var image = requests["" + requestId];
      if (image) {
        var naturalHeight = image.naturalHeight, naturalWidth = image.naturalWidth;
        if (naturalHeight && naturalWidth) {
          success(naturalWidth, naturalHeight);
          complete = true;
        }
      }
      if (complete) {
        ImageLoader.abort(requestId);
        clearInterval(interval);
      }
    }
    function errorCallback() {
      if (typeof failure === "function") {
        failure();
      }
      ImageLoader.abort(requestId);
      clearInterval(interval);
    }
  },
  has(uri) {
    return ImageUriCache.has(uri);
  },
  load(uri, onLoad, onError) {
    id += 1;
    var image = new window.Image();
    image.onerror = onError;
    image.onload = (e) => {
      var onDecode = () => onLoad({
        nativeEvent: e
      });
      if (typeof image.decode === "function") {
        image.decode().then(onDecode, onDecode);
      } else {
        setTimeout(onDecode, 0);
      }
    };
    image.src = uri;
    requests["" + id] = image;
    return id;
  },
  prefetch(uri) {
    return new Promise((resolve, reject) => {
      ImageLoader.load(uri, () => {
        ImageUriCache.add(uri);
        ImageUriCache.remove(uri);
        resolve();
      }, reject);
    });
  },
  queryCache(uris) {
    var result = {};
    uris.forEach((u) => {
      if (ImageUriCache.has(u)) {
        result[u] = "disk/memory";
      }
    });
    return Promise.resolve(result);
  }
};
var ImageLoader_default = ImageLoader;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/PixelRatio/index.js
var PixelRatio = class _PixelRatio {
  /**
   * Returns the device pixel density.
   */
  static get() {
    return Dimensions.get("window").scale;
  }
  /**
   * No equivalent for Web
   */
  static getFontScale() {
    return Dimensions.get("window").fontScale || _PixelRatio.get();
  }
  /**
   * Converts a layout size (dp) to pixel size (px).
   * Guaranteed to return an integer number.
   */
  static getPixelSizeForLayoutSize(layoutSize) {
    return Math.round(layoutSize * _PixelRatio.get());
  }
  /**
   * Rounds a layout size (dp) to the nearest layout size that corresponds to
   * an integer number of pixels. For example, on a device with a PixelRatio
   * of 3, `PixelRatio.roundToNearestPixel(8.4) = 8.33`, which corresponds to
   * exactly (8.33 * 3) = 25 pixels.
   */
  static roundToNearestPixel(layoutSize) {
    var ratio = _PixelRatio.get();
    return Math.round(layoutSize * ratio) / ratio;
  }
};

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/Image/index.js
var _excluded10 = ["aria-label", "accessibilityLabel", "blurRadius", "defaultSource", "draggable", "onError", "onLayout", "onLoad", "onLoadEnd", "onLoadStart", "pointerEvents", "source", "style"];
var ERRORED = "ERRORED";
var LOADED = "LOADED";
var LOADING = "LOADING";
var IDLE = "IDLE";
var _filterId = 0;
var svgDataUriPattern = /^(data:image\/svg\+xml;utf8,)(.*)/;
function createTintColorSVG(tintColor, id2) {
  return tintColor && id2 != null ? /* @__PURE__ */ React51.createElement("svg", {
    style: {
      position: "absolute",
      height: 0,
      visibility: "hidden",
      width: 0
    }
  }, /* @__PURE__ */ React51.createElement("defs", null, /* @__PURE__ */ React51.createElement("filter", {
    id: "tint-" + id2,
    suppressHydrationWarning: true
  }, /* @__PURE__ */ React51.createElement("feFlood", {
    floodColor: "" + tintColor,
    key: tintColor
  }), /* @__PURE__ */ React51.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in"
  })))) : null;
}
function extractNonStandardStyleProps(style, blurRadius, filterId, tintColorProp) {
  var flatStyle = StyleSheet_default.flatten(style);
  var filter = flatStyle.filter, resizeMode = flatStyle.resizeMode, shadowOffset = flatStyle.shadowOffset, tintColor = flatStyle.tintColor;
  if (flatStyle.resizeMode) {
    warnOnce("Image.style.resizeMode", "Image: style.resizeMode is deprecated. Please use props.resizeMode.");
  }
  if (flatStyle.tintColor) {
    warnOnce("Image.style.tintColor", "Image: style.tintColor is deprecated. Please use props.tintColor.");
  }
  var filters = [];
  var _filter = null;
  if (filter) {
    filters.push(filter);
  }
  if (blurRadius) {
    filters.push("blur(" + blurRadius + "px)");
  }
  if (shadowOffset) {
    var shadowString = createBoxShadowValue(flatStyle);
    if (shadowString) {
      filters.push("drop-shadow(" + shadowString + ")");
    }
  }
  if ((tintColorProp || tintColor) && filterId != null) {
    filters.push("url(#tint-" + filterId + ")");
  }
  if (filters.length > 0) {
    _filter = filters.join(" ");
  }
  return [resizeMode, _filter, tintColor];
}
function resolveAssetDimensions(source) {
  if (typeof source === "number") {
    var _getAssetByID = getAssetByID(source), _height = _getAssetByID.height, _width = _getAssetByID.width;
    return {
      height: _height,
      width: _width
    };
  } else if (source != null && !Array.isArray(source) && typeof source === "object") {
    var _height2 = source.height, _width2 = source.width;
    return {
      height: _height2,
      width: _width2
    };
  }
}
function resolveAssetUri(source) {
  var uri = null;
  if (typeof source === "number") {
    var asset = getAssetByID(source);
    if (asset == null) {
      throw new Error('Image: asset with ID "' + source + '" could not be found. Please check the image source or packager.');
    }
    var scale = asset.scales[0];
    if (asset.scales.length > 1) {
      var preferredScale = PixelRatio.get();
      scale = asset.scales.reduce((prev, curr) => Math.abs(curr - preferredScale) < Math.abs(prev - preferredScale) ? curr : prev);
    }
    var scaleSuffix = scale !== 1 ? "@" + scale + "x" : "";
    uri = asset ? asset.httpServerLocation + "/" + asset.name + scaleSuffix + "." + asset.type : "";
  } else if (typeof source === "string") {
    uri = source;
  } else if (source && typeof source.uri === "string") {
    uri = source.uri;
  }
  if (uri) {
    var match = uri.match(svgDataUriPattern);
    if (match) {
      var prefix = match[1], svg = match[2];
      var encodedSvg = encodeURIComponent(svg);
      return "" + prefix + encodedSvg;
    }
  }
  return uri;
}
var Image = /* @__PURE__ */ React51.forwardRef((props, ref) => {
  var _ariaLabel = props["aria-label"], accessibilityLabel = props.accessibilityLabel, blurRadius = props.blurRadius, defaultSource = props.defaultSource, draggable = props.draggable, onError = props.onError, onLayout = props.onLayout, onLoad = props.onLoad, onLoadEnd = props.onLoadEnd, onLoadStart = props.onLoadStart, pointerEvents = props.pointerEvents, source = props.source, style = props.style, rest = (0, import_objectWithoutPropertiesLoose10.default)(props, _excluded10);
  var ariaLabel = _ariaLabel || accessibilityLabel;
  if (process.env.NODE_ENV !== "production") {
    if (props.children) {
      throw new Error("The <Image> component cannot contain children. If you want to render content on top of the image, consider using the <ImageBackground> component or absolute positioning.");
    }
  }
  var _React$useState = React51.useState(() => {
    var uri2 = resolveAssetUri(source);
    if (uri2 != null) {
      var isLoaded = ImageLoader_default.has(uri2);
      if (isLoaded) {
        return LOADED;
      }
    }
    return IDLE;
  }), state = _React$useState[0], updateState = _React$useState[1];
  var _React$useState2 = React51.useState({}), layout = _React$useState2[0], updateLayout = _React$useState2[1];
  var hasTextAncestor = React51.useContext(TextAncestorContext_default);
  var hiddenImageRef = React51.useRef(null);
  var filterRef = React51.useRef(_filterId++);
  var requestRef = React51.useRef(null);
  var shouldDisplaySource = state === LOADED || state === LOADING && defaultSource == null;
  var _extractNonStandardSt = extractNonStandardStyleProps(style, blurRadius, filterRef.current, props.tintColor), _resizeMode = _extractNonStandardSt[0], filter = _extractNonStandardSt[1], _tintColor = _extractNonStandardSt[2];
  var resizeMode = props.resizeMode || _resizeMode || "cover";
  var tintColor = props.tintColor || _tintColor;
  var selectedSource = shouldDisplaySource ? source : defaultSource;
  var displayImageUri = resolveAssetUri(selectedSource);
  var imageSizeStyle = resolveAssetDimensions(selectedSource);
  var backgroundImage = displayImageUri ? 'url("' + displayImageUri + '")' : null;
  var backgroundSize = getBackgroundSize();
  var hiddenImage = displayImageUri ? createElement_default("img", {
    alt: ariaLabel || "",
    style: styles7.accessibilityImage$raw,
    draggable: draggable || false,
    ref: hiddenImageRef,
    src: displayImageUri
  }) : null;
  function getBackgroundSize() {
    if (hiddenImageRef.current != null && (resizeMode === "center" || resizeMode === "repeat")) {
      var _hiddenImageRef$curre = hiddenImageRef.current, naturalHeight = _hiddenImageRef$curre.naturalHeight, naturalWidth = _hiddenImageRef$curre.naturalWidth;
      var _height3 = layout.height, _width3 = layout.width;
      if (naturalHeight && naturalWidth && _height3 && _width3) {
        var scaleFactor = Math.min(1, _width3 / naturalWidth, _height3 / naturalHeight);
        var x = Math.ceil(scaleFactor * naturalWidth);
        var y = Math.ceil(scaleFactor * naturalHeight);
        return x + "px " + y + "px";
      }
    }
  }
  function handleLayout(e) {
    if (resizeMode === "center" || resizeMode === "repeat" || onLayout) {
      var _layout = e.nativeEvent.layout;
      onLayout && onLayout(e);
      updateLayout(_layout);
    }
  }
  var uri = resolveAssetUri(source);
  React51.useEffect(() => {
    abortPendingRequest();
    if (uri != null) {
      updateState(LOADING);
      if (onLoadStart) {
        onLoadStart();
      }
      requestRef.current = ImageLoader_default.load(uri, function load(e) {
        updateState(LOADED);
        if (onLoad) {
          onLoad(e);
        }
        if (onLoadEnd) {
          onLoadEnd();
        }
      }, function error2() {
        updateState(ERRORED);
        if (onError) {
          onError({
            nativeEvent: {
              error: "Failed to load resource " + uri
            }
          });
        }
        if (onLoadEnd) {
          onLoadEnd();
        }
      });
    }
    function abortPendingRequest() {
      if (requestRef.current != null) {
        ImageLoader_default.abort(requestRef.current);
        requestRef.current = null;
      }
    }
    return abortPendingRequest;
  }, [uri, requestRef, updateState, onError, onLoad, onLoadEnd, onLoadStart]);
  return /* @__PURE__ */ React51.createElement(View_default, (0, import_extends8.default)({}, rest, {
    "aria-label": ariaLabel,
    onLayout: handleLayout,
    pointerEvents,
    ref,
    style: [
      styles7.root,
      hasTextAncestor && styles7.inline,
      imageSizeStyle,
      style,
      styles7.undo,
      // TEMP: avoid deprecated shadow props regression
      // until Image refactored to use createElement.
      {
        boxShadow: null
      }
    ]
  }), /* @__PURE__ */ React51.createElement(View_default, {
    style: [styles7.image, resizeModeStyles[resizeMode], {
      backgroundImage,
      filter
    }, backgroundSize != null && {
      backgroundSize
    }],
    suppressHydrationWarning: true
  }), hiddenImage, createTintColorSVG(tintColor, filterRef.current));
});
Image.displayName = "Image";
var ImageWithStatics = Image;
ImageWithStatics.getSize = function(uri, success, failure) {
  ImageLoader_default.getSize(uri, success, failure);
};
ImageWithStatics.prefetch = function(uri) {
  return ImageLoader_default.prefetch(uri);
};
ImageWithStatics.queryCache = function(uris) {
  return ImageLoader_default.queryCache(uris);
};
var styles7 = StyleSheet_default.create({
  root: {
    flexBasis: "auto",
    overflow: "hidden",
    zIndex: 0
  },
  inline: {
    display: "inline-flex"
  },
  undo: {
    // These styles are converted to CSS filters applied to the
    // element displaying the background image.
    blurRadius: null,
    shadowColor: null,
    shadowOpacity: null,
    shadowOffset: null,
    shadowRadius: null,
    tintColor: null,
    // These styles are not supported
    overlayColor: null,
    resizeMode: null
  },
  image: (0, import_objectSpread217.default)((0, import_objectSpread217.default)({}, StyleSheet_default.absoluteFillObject), {}, {
    backgroundColor: "transparent",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    zIndex: -1
  }),
  accessibilityImage$raw: (0, import_objectSpread217.default)((0, import_objectSpread217.default)({}, StyleSheet_default.absoluteFillObject), {}, {
    height: "100%",
    opacity: 0,
    width: "100%",
    zIndex: -1
  })
});
var resizeModeStyles = StyleSheet_default.create({
  center: {
    backgroundSize: "auto"
  },
  contain: {
    backgroundSize: "contain"
  },
  cover: {
    backgroundSize: "cover"
  },
  none: {
    backgroundPosition: "0",
    backgroundSize: "auto"
  },
  repeat: {
    backgroundPosition: "0",
    backgroundRepeat: "repeat",
    backgroundSize: "auto"
  },
  stretch: {
    backgroundSize: "100% 100%"
  }
});
var Image_default = ImageWithStatics;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/components/AnimatedImage.js
var AnimatedImage_default = createAnimatedComponent(Image_default);

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/components/AnimatedScrollView.js
var import_extends9 = __toESM(require_extends());
import * as React53 from "react";
var ScrollViewWithEventThrottle = /* @__PURE__ */ React53.forwardRef((props, ref) => /* @__PURE__ */ React53.createElement(ScrollView_default, (0, import_extends9.default)({
  scrollEventThrottle: 1e-4
}, props, {
  ref
})));
var AnimatedScrollView_default = createAnimatedComponent(ScrollViewWithEventThrottle);

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/components/AnimatedSectionList.js
var import_extends12 = __toESM(require_extends());
import * as React56 from "react";

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/SectionList/index.js
var import_extends11 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose12 = __toESM(require_objectWithoutPropertiesLoose());
import * as React55 from "react";

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/VirtualizedSectionList/index.js
var import_extends10 = __toESM(require_extends());
var import_createForOfIteratorHelperLoose5 = __toESM(require_createForOfIteratorHelperLoose());
var import_objectWithoutPropertiesLoose11 = __toESM(require_objectWithoutPropertiesLoose());
var import_objectSpread218 = __toESM(require_objectSpread2());
var import_invariant19 = __toESM(require_invariant());
import * as React54 from "react";
var _excluded11 = ["ItemSeparatorComponent", "SectionSeparatorComponent", "renderItem", "renderSectionFooter", "renderSectionHeader", "sections", "stickySectionHeadersEnabled"];
var VirtualizedSectionList = class extends React54.PureComponent {
  constructor() {
    super(...arguments);
    this._keyExtractor = (item, index) => {
      var info = this._subExtractor(index);
      return info && info.key || String(index);
    };
    this._convertViewable = (viewable) => {
      var _info$index;
      (0, import_invariant19.default)(viewable.index != null, "Received a broken ViewToken");
      var info = this._subExtractor(viewable.index);
      if (!info) {
        return null;
      }
      var keyExtractorWithNullableIndex = info.section.keyExtractor;
      var keyExtractorWithNonNullableIndex = this.props.keyExtractor || keyExtractor;
      var key = keyExtractorWithNullableIndex != null ? keyExtractorWithNullableIndex(viewable.item, info.index) : keyExtractorWithNonNullableIndex(viewable.item, (_info$index = info.index) !== null && _info$index !== void 0 ? _info$index : 0);
      return (0, import_objectSpread218.default)((0, import_objectSpread218.default)({}, viewable), {}, {
        index: info.index,
        key,
        section: info.section
      });
    };
    this._onViewableItemsChanged = (_ref) => {
      var viewableItems = _ref.viewableItems, changed = _ref.changed;
      var onViewableItemsChanged = this.props.onViewableItemsChanged;
      if (onViewableItemsChanged != null) {
        onViewableItemsChanged({
          viewableItems: viewableItems.map(this._convertViewable, this).filter(Boolean),
          changed: changed.map(this._convertViewable, this).filter(Boolean)
        });
      }
    };
    this._renderItem = (listItemCount) => (
      // eslint-disable-next-line react/no-unstable-nested-components
      (_ref2) => {
        var item = _ref2.item, index = _ref2.index;
        var info = this._subExtractor(index);
        if (!info) {
          return null;
        }
        var infoIndex = info.index;
        if (infoIndex == null) {
          var section = info.section;
          if (info.header === true) {
            var renderSectionHeader = this.props.renderSectionHeader;
            return renderSectionHeader ? renderSectionHeader({
              section
            }) : null;
          } else {
            var renderSectionFooter = this.props.renderSectionFooter;
            return renderSectionFooter ? renderSectionFooter({
              section
            }) : null;
          }
        } else {
          var renderItem = info.section.renderItem || this.props.renderItem;
          var SeparatorComponent = this._getSeparatorComponent(index, info, listItemCount);
          (0, import_invariant19.default)(renderItem, "no renderItem!");
          return /* @__PURE__ */ React54.createElement(ItemWithSeparator, {
            SeparatorComponent,
            LeadingSeparatorComponent: infoIndex === 0 ? this.props.SectionSeparatorComponent : void 0,
            cellKey: info.key,
            index: infoIndex,
            item,
            leadingItem: info.leadingItem,
            leadingSection: info.leadingSection,
            prevCellKey: (this._subExtractor(index - 1) || {}).key,
            setSelfHighlightCallback: this._setUpdateHighlightFor,
            setSelfUpdatePropsCallback: this._setUpdatePropsFor,
            updateHighlightFor: this._updateHighlightFor,
            updatePropsFor: this._updatePropsFor,
            renderItem,
            section: info.section,
            trailingItem: info.trailingItem,
            trailingSection: info.trailingSection,
            inverted: !!this.props.inverted
          });
        }
      }
    );
    this._updatePropsFor = (cellKey, value) => {
      var updateProps = this._updatePropsMap[cellKey];
      if (updateProps != null) {
        updateProps(value);
      }
    };
    this._updateHighlightFor = (cellKey, value) => {
      var updateHighlight = this._updateHighlightMap[cellKey];
      if (updateHighlight != null) {
        updateHighlight(value);
      }
    };
    this._setUpdateHighlightFor = (cellKey, updateHighlightFn) => {
      if (updateHighlightFn != null) {
        this._updateHighlightMap[cellKey] = updateHighlightFn;
      } else {
        delete this._updateHighlightFor[cellKey];
      }
    };
    this._setUpdatePropsFor = (cellKey, updatePropsFn) => {
      if (updatePropsFn != null) {
        this._updatePropsMap[cellKey] = updatePropsFn;
      } else {
        delete this._updatePropsMap[cellKey];
      }
    };
    this._updateHighlightMap = {};
    this._updatePropsMap = {};
    this._captureRef = (ref) => {
      this._listRef = ref;
    };
  }
  scrollToLocation(params) {
    var index = params.itemIndex;
    for (var i = 0; i < params.sectionIndex; i++) {
      index += this.props.getItemCount(this.props.sections[i].data) + 2;
    }
    var viewOffset = params.viewOffset || 0;
    if (this._listRef == null) {
      return;
    }
    if (params.itemIndex > 0 && this.props.stickySectionHeadersEnabled) {
      var frame = this._listRef.__getFrameMetricsApprox(index - params.itemIndex, this._listRef.props);
      viewOffset += frame.length;
    }
    var toIndexParams = (0, import_objectSpread218.default)((0, import_objectSpread218.default)({}, params), {}, {
      viewOffset,
      index
    });
    this._listRef.scrollToIndex(toIndexParams);
  }
  getListRef() {
    return this._listRef;
  }
  render() {
    var _this$props = this.props, ItemSeparatorComponent = _this$props.ItemSeparatorComponent, SectionSeparatorComponent = _this$props.SectionSeparatorComponent, _renderItem = _this$props.renderItem, renderSectionFooter = _this$props.renderSectionFooter, renderSectionHeader = _this$props.renderSectionHeader, _sections = _this$props.sections, stickySectionHeadersEnabled = _this$props.stickySectionHeadersEnabled, passThroughProps = (0, import_objectWithoutPropertiesLoose11.default)(_this$props, _excluded11);
    var listHeaderOffset = this.props.ListHeaderComponent ? 1 : 0;
    var stickyHeaderIndices = this.props.stickySectionHeadersEnabled ? [] : void 0;
    var itemCount = 0;
    for (var _iterator = (0, import_createForOfIteratorHelperLoose5.default)(this.props.sections), _step; !(_step = _iterator()).done; ) {
      var section = _step.value;
      if (stickyHeaderIndices != null) {
        stickyHeaderIndices.push(itemCount + listHeaderOffset);
      }
      itemCount += 2;
      itemCount += this.props.getItemCount(section.data);
    }
    var renderItem = this._renderItem(itemCount);
    return /* @__PURE__ */ React54.createElement(VirtualizedList_default, (0, import_extends10.default)({}, passThroughProps, {
      keyExtractor: this._keyExtractor,
      stickyHeaderIndices,
      renderItem,
      data: this.props.sections,
      getItem: (sections, index) => this._getItem(this.props, sections, index),
      getItemCount: () => itemCount,
      onViewableItemsChanged: this.props.onViewableItemsChanged ? this._onViewableItemsChanged : void 0,
      ref: this._captureRef
    }));
  }
  _getItem(props, sections, index) {
    if (!sections) {
      return null;
    }
    var itemIdx = index - 1;
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var sectionData = section.data;
      var itemCount = props.getItemCount(sectionData);
      if (itemIdx === -1 || itemIdx === itemCount) {
        return section;
      } else if (itemIdx < itemCount) {
        return props.getItem(sectionData, itemIdx);
      } else {
        itemIdx -= itemCount + 2;
      }
    }
    return null;
  }
  // $FlowFixMe[missing-local-annot]
  _subExtractor(index) {
    var itemIndex = index;
    var _this$props2 = this.props, getItem = _this$props2.getItem, getItemCount = _this$props2.getItemCount, keyExtractor2 = _this$props2.keyExtractor, sections = _this$props2.sections;
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var sectionData = section.data;
      var key = section.key || String(i);
      itemIndex -= 1;
      if (itemIndex >= getItemCount(sectionData) + 1) {
        itemIndex -= getItemCount(sectionData) + 1;
      } else if (itemIndex === -1) {
        return {
          section,
          key: key + ":header",
          index: null,
          header: true,
          trailingSection: sections[i + 1]
        };
      } else if (itemIndex === getItemCount(sectionData)) {
        return {
          section,
          key: key + ":footer",
          index: null,
          header: false,
          trailingSection: sections[i + 1]
        };
      } else {
        var extractor = section.keyExtractor || keyExtractor2 || keyExtractor;
        return {
          section,
          key: key + ":" + extractor(getItem(sectionData, itemIndex), itemIndex),
          index: itemIndex,
          leadingItem: getItem(sectionData, itemIndex - 1),
          leadingSection: sections[i - 1],
          trailingItem: getItem(sectionData, itemIndex + 1),
          trailingSection: sections[i + 1]
        };
      }
    }
  }
  _getSeparatorComponent(index, info, listItemCount) {
    info = info || this._subExtractor(index);
    if (!info) {
      return null;
    }
    var ItemSeparatorComponent = info.section.ItemSeparatorComponent || this.props.ItemSeparatorComponent;
    var SectionSeparatorComponent = this.props.SectionSeparatorComponent;
    var isLastItemInList = index === listItemCount - 1;
    var isLastItemInSection = info.index === this.props.getItemCount(info.section.data) - 1;
    if (SectionSeparatorComponent && isLastItemInSection) {
      return SectionSeparatorComponent;
    }
    if (ItemSeparatorComponent && !isLastItemInSection && !isLastItemInList) {
      return ItemSeparatorComponent;
    }
    return null;
  }
};
function ItemWithSeparator(props) {
  var LeadingSeparatorComponent = props.LeadingSeparatorComponent, SeparatorComponent = props.SeparatorComponent, cellKey = props.cellKey, prevCellKey = props.prevCellKey, setSelfHighlightCallback = props.setSelfHighlightCallback, updateHighlightFor = props.updateHighlightFor, setSelfUpdatePropsCallback = props.setSelfUpdatePropsCallback, updatePropsFor = props.updatePropsFor, item = props.item, index = props.index, section = props.section, inverted = props.inverted;
  var _React$useState = React54.useState(false), leadingSeparatorHiglighted = _React$useState[0], setLeadingSeparatorHighlighted = _React$useState[1];
  var _React$useState2 = React54.useState(false), separatorHighlighted = _React$useState2[0], setSeparatorHighlighted = _React$useState2[1];
  var _React$useState3 = React54.useState({
    leadingItem: props.leadingItem,
    leadingSection: props.leadingSection,
    section: props.section,
    trailingItem: props.item,
    trailingSection: props.trailingSection
  }), leadingSeparatorProps = _React$useState3[0], setLeadingSeparatorProps = _React$useState3[1];
  var _React$useState4 = React54.useState({
    leadingItem: props.item,
    leadingSection: props.leadingSection,
    section: props.section,
    trailingItem: props.trailingItem,
    trailingSection: props.trailingSection
  }), separatorProps = _React$useState4[0], setSeparatorProps = _React$useState4[1];
  React54.useEffect(() => {
    setSelfHighlightCallback(cellKey, setSeparatorHighlighted);
    setSelfUpdatePropsCallback(cellKey, setSeparatorProps);
    return () => {
      setSelfUpdatePropsCallback(cellKey, null);
      setSelfHighlightCallback(cellKey, null);
    };
  }, [cellKey, setSelfHighlightCallback, setSeparatorProps, setSelfUpdatePropsCallback]);
  var separators = {
    highlight: () => {
      setLeadingSeparatorHighlighted(true);
      setSeparatorHighlighted(true);
      if (prevCellKey != null) {
        updateHighlightFor(prevCellKey, true);
      }
    },
    unhighlight: () => {
      setLeadingSeparatorHighlighted(false);
      setSeparatorHighlighted(false);
      if (prevCellKey != null) {
        updateHighlightFor(prevCellKey, false);
      }
    },
    updateProps: (select, newProps) => {
      if (select === "leading") {
        if (LeadingSeparatorComponent != null) {
          setLeadingSeparatorProps((0, import_objectSpread218.default)((0, import_objectSpread218.default)({}, leadingSeparatorProps), newProps));
        } else if (prevCellKey != null) {
          updatePropsFor(prevCellKey, (0, import_objectSpread218.default)((0, import_objectSpread218.default)({}, leadingSeparatorProps), newProps));
        }
      } else if (select === "trailing" && SeparatorComponent != null) {
        setSeparatorProps((0, import_objectSpread218.default)((0, import_objectSpread218.default)({}, separatorProps), newProps));
      }
    }
  };
  var element = props.renderItem({
    item,
    index,
    section,
    separators
  });
  var leadingSeparator = LeadingSeparatorComponent != null && /* @__PURE__ */ React54.createElement(LeadingSeparatorComponent, (0, import_extends10.default)({
    highlighted: leadingSeparatorHiglighted
  }, leadingSeparatorProps));
  var separator = SeparatorComponent != null && /* @__PURE__ */ React54.createElement(SeparatorComponent, (0, import_extends10.default)({
    highlighted: separatorHighlighted
  }, separatorProps));
  return leadingSeparator || separator ? /* @__PURE__ */ React54.createElement(View_default, null, inverted === false ? leadingSeparator : separator, element, inverted === false ? separator : leadingSeparator) : element;
}
var VirtualizedSectionList_default = VirtualizedSectionList;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/SectionList/index.js
var _excluded12 = ["stickySectionHeadersEnabled"];
var SectionList = class extends React55.PureComponent {
  constructor() {
    super(...arguments);
    this._captureRef = (ref) => {
      this._wrapperListRef = ref;
    };
  }
  /**
   * Scrolls to the item at the specified `sectionIndex` and `itemIndex` (within the section)
   * positioned in the viewable area such that `viewPosition` 0 places it at the top (and may be
   * covered by a sticky header), 1 at the bottom, and 0.5 centered in the middle. `viewOffset` is a
   * fixed number of pixels to offset the final target position, e.g. to compensate for sticky
   * headers.
   *
   * Note: cannot scroll to locations outside the render window without specifying the
   * `getItemLayout` prop.
   */
  scrollToLocation(params) {
    if (this._wrapperListRef != null) {
      this._wrapperListRef.scrollToLocation(params);
    }
  }
  /**
   * Tells the list an interaction has occurred, which should trigger viewability calculations, e.g.
   * if `waitForInteractions` is true and the user has not scrolled. This is typically called by
   * taps on items or by navigation actions.
   */
  recordInteraction() {
    var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
    listRef && listRef.recordInteraction();
  }
  /**
   * Displays the scroll indicators momentarily.
   *
   * @platform ios
   */
  flashScrollIndicators() {
    var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
    listRef && listRef.flashScrollIndicators();
  }
  /**
   * Provides a handle to the underlying scroll responder.
   */
  getScrollResponder() {
    var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
    if (listRef) {
      return listRef.getScrollResponder();
    }
  }
  getScrollableNode() {
    var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
    if (listRef) {
      return listRef.getScrollableNode();
    }
  }
  render() {
    var _this$props = this.props, _stickySectionHeadersEnabled = _this$props.stickySectionHeadersEnabled, restProps = (0, import_objectWithoutPropertiesLoose12.default)(_this$props, _excluded12);
    var stickySectionHeadersEnabled = _stickySectionHeadersEnabled !== null && _stickySectionHeadersEnabled !== void 0 ? _stickySectionHeadersEnabled : Platform_default.OS === "ios";
    return /* @__PURE__ */ React55.createElement(VirtualizedSectionList_default, (0, import_extends11.default)({}, restProps, {
      stickySectionHeadersEnabled,
      ref: this._captureRef,
      getItemCount: (items) => items.length,
      getItem: (items, index) => items[index]
    }));
  }
};

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/SectionList/index.js
var SectionList_default = SectionList;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/components/AnimatedSectionList.js
var SectionListWithEventThrottle = /* @__PURE__ */ React56.forwardRef((props, ref) => /* @__PURE__ */ React56.createElement(SectionList_default, (0, import_extends12.default)({
  scrollEventThrottle: 1e-4
}, props, {
  ref
})));
var AnimatedSectionList_default = createAnimatedComponent(SectionListWithEventThrottle);

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/components/AnimatedText.js
import * as React58 from "react";

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/Text/index.js
var import_objectSpread219 = __toESM(require_objectSpread2());
var import_objectWithoutPropertiesLoose13 = __toESM(require_objectWithoutPropertiesLoose());
import * as React57 from "react";
var _excluded13 = ["hrefAttrs", "numberOfLines", "onClick", "onLayout", "onPress", "onMoveShouldSetResponder", "onMoveShouldSetResponderCapture", "onResponderEnd", "onResponderGrant", "onResponderMove", "onResponderReject", "onResponderRelease", "onResponderStart", "onResponderTerminate", "onResponderTerminationRequest", "onScrollShouldSetResponder", "onScrollShouldSetResponderCapture", "onSelectionChangeShouldSetResponder", "onSelectionChangeShouldSetResponderCapture", "onStartShouldSetResponder", "onStartShouldSetResponderCapture", "selectable"];
var forwardPropsList2 = Object.assign({}, defaultProps, accessibilityProps, clickProps, focusProps, keyboardProps, mouseProps, touchProps, styleProps, {
  href: true,
  lang: true,
  pointerEvents: true
});
var pickProps2 = (props) => pick(props, forwardPropsList2);
var Text16 = /* @__PURE__ */ React57.forwardRef((props, forwardedRef) => {
  var hrefAttrs = props.hrefAttrs, numberOfLines = props.numberOfLines, onClick = props.onClick, onLayout = props.onLayout, onPress = props.onPress, onMoveShouldSetResponder = props.onMoveShouldSetResponder, onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture, onResponderEnd = props.onResponderEnd, onResponderGrant = props.onResponderGrant, onResponderMove = props.onResponderMove, onResponderReject = props.onResponderReject, onResponderRelease = props.onResponderRelease, onResponderStart = props.onResponderStart, onResponderTerminate = props.onResponderTerminate, onResponderTerminationRequest = props.onResponderTerminationRequest, onScrollShouldSetResponder = props.onScrollShouldSetResponder, onScrollShouldSetResponderCapture = props.onScrollShouldSetResponderCapture, onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder, onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture, onStartShouldSetResponder = props.onStartShouldSetResponder, onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture, selectable = props.selectable, rest = (0, import_objectWithoutPropertiesLoose13.default)(props, _excluded13);
  var hasTextAncestor = React57.useContext(TextAncestorContext_default);
  var hostRef = React57.useRef(null);
  var _useLocaleContext = useLocaleContext(), contextDirection = _useLocaleContext.direction;
  useElementLayout(hostRef, onLayout);
  useResponderEvents(hostRef, {
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture
  });
  var handleClick = React57.useCallback((e) => {
    if (onClick != null) {
      onClick(e);
    } else if (onPress != null) {
      e.stopPropagation();
      onPress(e);
    }
  }, [onClick, onPress]);
  var component = hasTextAncestor ? "span" : "div";
  var langDirection = props.lang != null ? getLocaleDirection(props.lang) : null;
  var componentDirection = props.dir || langDirection;
  var writingDirection = componentDirection || contextDirection;
  var supportedProps = pickProps2(rest);
  supportedProps.dir = componentDirection;
  if (!hasTextAncestor) {
    supportedProps.dir = componentDirection != null ? componentDirection : "auto";
  }
  if (onClick || onPress) {
    supportedProps.onClick = handleClick;
  }
  supportedProps.style = [numberOfLines != null && numberOfLines > 1 && {
    WebkitLineClamp: numberOfLines
  }, hasTextAncestor === true ? styles8.textHasAncestor$raw : styles8.text$raw, numberOfLines === 1 && styles8.textOneLine, numberOfLines != null && numberOfLines > 1 && styles8.textMultiLine, props.style, selectable === true && styles8.selectable, selectable === false && styles8.notSelectable, onPress && styles8.pressable];
  if (props.href != null) {
    component = "a";
    if (hrefAttrs != null) {
      var download = hrefAttrs.download, rel = hrefAttrs.rel, target = hrefAttrs.target;
      if (download != null) {
        supportedProps.download = download;
      }
      if (rel != null) {
        supportedProps.rel = rel;
      }
      if (typeof target === "string") {
        supportedProps.target = target.charAt(0) !== "_" ? "_" + target : target;
      }
    }
  }
  var platformMethodsRef = usePlatformMethods(supportedProps);
  var setRef = useMergeRefs(hostRef, platformMethodsRef, forwardedRef);
  supportedProps.ref = setRef;
  var element = createElement_default(component, supportedProps, {
    writingDirection
  });
  return hasTextAncestor ? element : /* @__PURE__ */ React57.createElement(TextAncestorContext_default.Provider, {
    value: true
  }, element);
});
Text16.displayName = "Text";
var textStyle = {
  backgroundColor: "transparent",
  border: "0 solid black",
  boxSizing: "border-box",
  color: "black",
  display: "inline",
  font: "14px System",
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  textAlign: "start",
  textDecoration: "none",
  whiteSpace: "pre-wrap",
  wordWrap: "break-word"
};
var styles8 = StyleSheet_default.create({
  text$raw: textStyle,
  textHasAncestor$raw: (0, import_objectSpread219.default)((0, import_objectSpread219.default)({}, textStyle), {}, {
    color: "inherit",
    font: "inherit",
    textAlign: "inherit",
    whiteSpace: "inherit"
  }),
  textOneLine: {
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  },
  // See #13
  textMultiLine: {
    display: "-webkit-box",
    maxWidth: "100%",
    overflow: "clip",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical"
  },
  notSelectable: {
    userSelect: "none"
  },
  selectable: {
    userSelect: "text"
  },
  pressable: {
    cursor: "pointer"
  }
});
var Text_default = Text16;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/components/AnimatedText.js
var AnimatedText_default = createAnimatedComponent(Text_default);

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/components/AnimatedView.js
import * as React59 from "react";
var AnimatedView_default = createAnimatedComponent(View_default);

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/AnimatedMock.js
var import_objectSpread222 = __toESM(require_objectSpread2());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/AnimatedImplementation.js
var import_objectSpread221 = __toESM(require_objectSpread2());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedAddition.js
var AnimatedAddition = class extends AnimatedWithChildren_default {
  constructor(a, b) {
    super();
    this._a = typeof a === "number" ? new AnimatedValue_default(a) : a;
    this._b = typeof b === "number" ? new AnimatedValue_default(b) : b;
  }
  __makeNative(platformConfig) {
    this._a.__makeNative(platformConfig);
    this._b.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getValue() {
    return this._a.__getValue() + this._b.__getValue();
  }
  interpolate(config2) {
    return new AnimatedInterpolation_default(this, config2);
  }
  __attach() {
    this._a.__addChild(this);
    this._b.__addChild(this);
  }
  __detach() {
    this._a.__removeChild(this);
    this._b.__removeChild(this);
    super.__detach();
  }
  __getNativeConfig() {
    return {
      type: "addition",
      input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
    };
  }
};
var AnimatedAddition_default = AnimatedAddition;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedDiffClamp.js
var AnimatedDiffClamp = class extends AnimatedWithChildren_default {
  constructor(a, min, max) {
    super();
    this._a = a;
    this._min = min;
    this._max = max;
    this._value = this._lastValue = this._a.__getValue();
  }
  __makeNative(platformConfig) {
    this._a.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  interpolate(config2) {
    return new AnimatedInterpolation_default(this, config2);
  }
  __getValue() {
    var value = this._a.__getValue();
    var diff = value - this._lastValue;
    this._lastValue = value;
    this._value = Math.min(Math.max(this._value + diff, this._min), this._max);
    return this._value;
  }
  __attach() {
    this._a.__addChild(this);
  }
  __detach() {
    this._a.__removeChild(this);
    super.__detach();
  }
  __getNativeConfig() {
    return {
      type: "diffclamp",
      input: this._a.__getNativeTag(),
      min: this._min,
      max: this._max
    };
  }
};
var AnimatedDiffClamp_default = AnimatedDiffClamp;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedDivision.js
var AnimatedDivision = class extends AnimatedWithChildren_default {
  constructor(a, b) {
    super();
    this._warnedAboutDivideByZero = false;
    if (b === 0 || b instanceof AnimatedNode_default && b.__getValue() === 0) {
      console.error("Detected potential division by zero in AnimatedDivision");
    }
    this._a = typeof a === "number" ? new AnimatedValue_default(a) : a;
    this._b = typeof b === "number" ? new AnimatedValue_default(b) : b;
  }
  __makeNative(platformConfig) {
    this._a.__makeNative(platformConfig);
    this._b.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getValue() {
    var a = this._a.__getValue();
    var b = this._b.__getValue();
    if (b === 0) {
      if (!this._warnedAboutDivideByZero) {
        console.error("Detected division by zero in AnimatedDivision");
        this._warnedAboutDivideByZero = true;
      }
      return 0;
    }
    this._warnedAboutDivideByZero = false;
    return a / b;
  }
  interpolate(config2) {
    return new AnimatedInterpolation_default(this, config2);
  }
  __attach() {
    this._a.__addChild(this);
    this._b.__addChild(this);
  }
  __detach() {
    this._a.__removeChild(this);
    this._b.__removeChild(this);
    super.__detach();
  }
  __getNativeConfig() {
    return {
      type: "division",
      input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
    };
  }
};
var AnimatedDivision_default = AnimatedDivision;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedModulo.js
var AnimatedModulo = class extends AnimatedWithChildren_default {
  constructor(a, modulus) {
    super();
    this._a = a;
    this._modulus = modulus;
  }
  __makeNative(platformConfig) {
    this._a.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getValue() {
    return (this._a.__getValue() % this._modulus + this._modulus) % this._modulus;
  }
  interpolate(config2) {
    return new AnimatedInterpolation_default(this, config2);
  }
  __attach() {
    this._a.__addChild(this);
  }
  __detach() {
    this._a.__removeChild(this);
    super.__detach();
  }
  __getNativeConfig() {
    return {
      type: "modulus",
      input: this._a.__getNativeTag(),
      modulus: this._modulus
    };
  }
};
var AnimatedModulo_default = AnimatedModulo;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedMultiplication.js
var AnimatedMultiplication = class extends AnimatedWithChildren_default {
  constructor(a, b) {
    super();
    this._a = typeof a === "number" ? new AnimatedValue_default(a) : a;
    this._b = typeof b === "number" ? new AnimatedValue_default(b) : b;
  }
  __makeNative(platformConfig) {
    this._a.__makeNative(platformConfig);
    this._b.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getValue() {
    return this._a.__getValue() * this._b.__getValue();
  }
  interpolate(config2) {
    return new AnimatedInterpolation_default(this, config2);
  }
  __attach() {
    this._a.__addChild(this);
    this._b.__addChild(this);
  }
  __detach() {
    this._a.__removeChild(this);
    this._b.__removeChild(this);
    super.__detach();
  }
  __getNativeConfig() {
    return {
      type: "multiplication",
      input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
    };
  }
};
var AnimatedMultiplication_default = AnimatedMultiplication;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedSubtraction.js
var AnimatedSubtraction = class extends AnimatedWithChildren_default {
  constructor(a, b) {
    super();
    this._a = typeof a === "number" ? new AnimatedValue_default(a) : a;
    this._b = typeof b === "number" ? new AnimatedValue_default(b) : b;
  }
  __makeNative(platformConfig) {
    this._a.__makeNative(platformConfig);
    this._b.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getValue() {
    return this._a.__getValue() - this._b.__getValue();
  }
  interpolate(config2) {
    return new AnimatedInterpolation_default(this, config2);
  }
  __attach() {
    this._a.__addChild(this);
    this._b.__addChild(this);
  }
  __detach() {
    this._a.__removeChild(this);
    this._b.__removeChild(this);
    super.__detach();
  }
  __getNativeConfig() {
    return {
      type: "subtraction",
      input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
    };
  }
};
var AnimatedSubtraction_default = AnimatedSubtraction;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedTracking.js
var import_objectSpread220 = __toESM(require_objectSpread2());
var AnimatedTracking = class extends AnimatedNode_default {
  constructor(value, parent, animationClass, animationConfig, callback) {
    super();
    this._value = value;
    this._parent = parent;
    this._animationClass = animationClass;
    this._animationConfig = animationConfig;
    this._useNativeDriver = shouldUseNativeDriver(animationConfig);
    this._callback = callback;
    this.__attach();
  }
  __makeNative() {
    this.__isNative = true;
    this._parent.__makeNative();
    super.__makeNative();
    this._value.__makeNative();
  }
  __getValue() {
    return this._parent.__getValue();
  }
  __attach() {
    this._parent.__addChild(this);
    if (this._useNativeDriver) {
      this.__makeNative();
    }
  }
  __detach() {
    this._parent.__removeChild(this);
    super.__detach();
  }
  update() {
    this._value.animate(new this._animationClass((0, import_objectSpread220.default)((0, import_objectSpread220.default)({}, this._animationConfig), {}, {
      toValue: this._animationConfig.toValue.__getValue()
    })), this._callback);
  }
  __getNativeConfig() {
    var animation = new this._animationClass((0, import_objectSpread220.default)((0, import_objectSpread220.default)({}, this._animationConfig), {}, {
      // remove toValue from the config as it's a ref to Animated.Value
      toValue: void 0
    }));
    var animationConfig = animation.__getNativeAnimationConfig();
    return {
      type: "tracking",
      animationId: generateNewAnimationId(),
      animationConfig,
      toValue: this._parent.__getNativeTag(),
      value: this._value.__getNativeTag()
    };
  }
};
var AnimatedTracking_default = AnimatedTracking;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedValueXY.js
var import_invariant20 = __toESM(require_invariant());
var _uniqueId2 = 1;
var AnimatedValueXY = class extends AnimatedWithChildren_default {
  constructor(valueIn) {
    super();
    var value = valueIn || {
      x: 0,
      y: 0
    };
    if (typeof value.x === "number" && typeof value.y === "number") {
      this.x = new AnimatedValue_default(value.x);
      this.y = new AnimatedValue_default(value.y);
    } else {
      (0, import_invariant20.default)(value.x instanceof AnimatedValue_default && value.y instanceof AnimatedValue_default, "AnimatedValueXY must be initialized with an object of numbers or AnimatedValues.");
      this.x = value.x;
      this.y = value.y;
    }
    this._listeners = {};
  }
  /**
   * Directly set the value. This will stop any animations running on the value
   * and update all the bound properties.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#setvalue
   */
  setValue(value) {
    this.x.setValue(value.x);
    this.y.setValue(value.y);
  }
  /**
   * Sets an offset that is applied on top of whatever value is set, whether
   * via `setValue`, an animation, or `Animated.event`. Useful for compensating
   * things like the start of a pan gesture.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#setoffset
   */
  setOffset(offset) {
    this.x.setOffset(offset.x);
    this.y.setOffset(offset.y);
  }
  /**
   * Merges the offset value into the base value and resets the offset to zero.
   * The final output of the value is unchanged.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#flattenoffset
   */
  flattenOffset() {
    this.x.flattenOffset();
    this.y.flattenOffset();
  }
  /**
   * Sets the offset value to the base value, and resets the base value to
   * zero. The final output of the value is unchanged.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#extractoffset
   */
  extractOffset() {
    this.x.extractOffset();
    this.y.extractOffset();
  }
  __getValue() {
    return {
      x: this.x.__getValue(),
      y: this.y.__getValue()
    };
  }
  /**
   * Stops any animation and resets the value to its original.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#resetanimation
   */
  resetAnimation(callback) {
    this.x.resetAnimation();
    this.y.resetAnimation();
    callback && callback(this.__getValue());
  }
  /**
   * Stops any running animation or tracking. `callback` is invoked with the
   * final value after stopping the animation, which is useful for updating
   * state to match the animation position with layout.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#stopanimation
   */
  stopAnimation(callback) {
    this.x.stopAnimation();
    this.y.stopAnimation();
    callback && callback(this.__getValue());
  }
  /**
   * Adds an asynchronous listener to the value so you can observe updates from
   * animations.  This is useful because there is no way to synchronously read
   * the value because it might be driven natively.
   *
   * Returns a string that serves as an identifier for the listener.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#addlistener
   */
  addListener(callback) {
    var id2 = String(_uniqueId2++);
    var jointCallback = (_ref) => {
      var number = _ref.value;
      callback(this.__getValue());
    };
    this._listeners[id2] = {
      x: this.x.addListener(jointCallback),
      y: this.y.addListener(jointCallback)
    };
    return id2;
  }
  /**
   * Unregister a listener. The `id` param shall match the identifier
   * previously returned by `addListener()`.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#removelistener
   */
  removeListener(id2) {
    this.x.removeListener(this._listeners[id2].x);
    this.y.removeListener(this._listeners[id2].y);
    delete this._listeners[id2];
  }
  /**
   * Remove all registered listeners.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#removealllisteners
   */
  removeAllListeners() {
    this.x.removeAllListeners();
    this.y.removeAllListeners();
    this._listeners = {};
  }
  /**
   * Converts `{x, y}` into `{left, top}` for use in style.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#getlayout
   */
  getLayout() {
    return {
      left: this.x,
      top: this.y
    };
  }
  /**
   * Converts `{x, y}` into a useable translation transform.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#gettranslatetransform
   */
  getTranslateTransform() {
    return [{
      translateX: this.x
    }, {
      translateY: this.y
    }];
  }
};
var AnimatedValueXY_default = AnimatedValueXY;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/animations/Animation.js
var startNativeAnimationNextId = 1;
var Animation = class {
  start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
  }
  stop() {
    if (this.__nativeId) {
      NativeAnimatedHelper_default.API.stopAnimation(this.__nativeId);
    }
  }
  __getNativeAnimationConfig() {
    throw new Error("This animation type cannot be offloaded to native");
  }
  // Helper function for subclasses to make sure onEnd is only called once.
  __debouncedOnEnd(result) {
    var onEnd = this.__onEnd;
    this.__onEnd = null;
    onEnd && onEnd(result);
  }
  __startNativeAnimation(animatedValue) {
    var startNativeAnimationWaitId = startNativeAnimationNextId + ":startAnimation";
    startNativeAnimationNextId += 1;
    NativeAnimatedHelper_default.API.setWaitingForIdentifier(startNativeAnimationWaitId);
    try {
      var config2 = this.__getNativeAnimationConfig();
      animatedValue.__makeNative(config2.platformConfig);
      this.__nativeId = NativeAnimatedHelper_default.generateNewAnimationId();
      NativeAnimatedHelper_default.API.startAnimatingNode(
        this.__nativeId,
        animatedValue.__getNativeTag(),
        config2,
        // $FlowFixMe[method-unbinding] added when improving typing for this parameters
        this.__debouncedOnEnd.bind(this)
      );
    } catch (e) {
      throw e;
    } finally {
      NativeAnimatedHelper_default.API.unsetWaitingForIdentifier(startNativeAnimationWaitId);
    }
  }
};
var Animation_default = Animation;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/animations/DecayAnimation.js
var DecayAnimation = class extends Animation_default {
  constructor(config2) {
    var _config$deceleration, _config$isInteraction, _config$iterations;
    super();
    this._deceleration = (_config$deceleration = config2.deceleration) !== null && _config$deceleration !== void 0 ? _config$deceleration : 0.998;
    this._velocity = config2.velocity;
    this._useNativeDriver = shouldUseNativeDriver(config2);
    this.__isInteraction = (_config$isInteraction = config2.isInteraction) !== null && _config$isInteraction !== void 0 ? _config$isInteraction : !this._useNativeDriver;
    this.__iterations = (_config$iterations = config2.iterations) !== null && _config$iterations !== void 0 ? _config$iterations : 1;
  }
  __getNativeAnimationConfig() {
    return {
      type: "decay",
      deceleration: this._deceleration,
      velocity: this._velocity,
      iterations: this.__iterations
    };
  }
  start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
    this.__active = true;
    this._lastValue = fromValue;
    this._fromValue = fromValue;
    this._onUpdate = onUpdate;
    this.__onEnd = onEnd;
    this._startTime = Date.now();
    if (this._useNativeDriver) {
      this.__startNativeAnimation(animatedValue);
    } else {
      this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
    }
  }
  onUpdate() {
    var now = Date.now();
    var value = this._fromValue + this._velocity / (1 - this._deceleration) * (1 - Math.exp(-(1 - this._deceleration) * (now - this._startTime)));
    this._onUpdate(value);
    if (Math.abs(this._lastValue - value) < 0.1) {
      this.__debouncedOnEnd({
        finished: true
      });
      return;
    }
    this._lastValue = value;
    if (this.__active) {
      this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
    }
  }
  stop() {
    super.stop();
    this.__active = false;
    global.cancelAnimationFrame(this._animationFrame);
    this.__debouncedOnEnd({
      finished: false
    });
  }
};
var DecayAnimation_default = DecayAnimation;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/SpringConfig.js
function stiffnessFromOrigamiValue(oValue) {
  return (oValue - 30) * 3.62 + 194;
}
function dampingFromOrigamiValue(oValue) {
  return (oValue - 8) * 3 + 25;
}
function fromOrigamiTensionAndFriction(tension, friction) {
  return {
    stiffness: stiffnessFromOrigamiValue(tension),
    damping: dampingFromOrigamiValue(friction)
  };
}
function fromBouncinessAndSpeed(bounciness, speed) {
  function normalize(value, startValue, endValue) {
    return (value - startValue) / (endValue - startValue);
  }
  function projectNormal(n, start, end) {
    return start + n * (end - start);
  }
  function linearInterpolation(t, start, end) {
    return t * end + (1 - t) * start;
  }
  function quadraticOutInterpolation(t, start, end) {
    return linearInterpolation(2 * t - t * t, start, end);
  }
  function b3Friction1(x) {
    return 7e-4 * Math.pow(x, 3) - 0.031 * Math.pow(x, 2) + 0.64 * x + 1.28;
  }
  function b3Friction2(x) {
    return 44e-6 * Math.pow(x, 3) - 6e-3 * Math.pow(x, 2) + 0.36 * x + 2;
  }
  function b3Friction3(x) {
    return 45e-8 * Math.pow(x, 3) - 332e-6 * Math.pow(x, 2) + 0.1078 * x + 5.84;
  }
  function b3Nobounce(tension) {
    if (tension <= 18) {
      return b3Friction1(tension);
    } else if (tension > 18 && tension <= 44) {
      return b3Friction2(tension);
    } else {
      return b3Friction3(tension);
    }
  }
  var b = normalize(bounciness / 1.7, 0, 20);
  b = projectNormal(b, 0, 0.8);
  var s = normalize(speed / 1.7, 0, 20);
  var bouncyTension = projectNormal(s, 0.5, 200);
  var bouncyFriction = quadraticOutInterpolation(b, b3Nobounce(bouncyTension), 0.01);
  return {
    stiffness: stiffnessFromOrigamiValue(bouncyTension),
    damping: dampingFromOrigamiValue(bouncyFriction)
  };
}
var SpringConfig_default = {
  fromOrigamiTensionAndFriction,
  fromBouncinessAndSpeed
};

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/animations/SpringAnimation.js
var import_invariant21 = __toESM(require_invariant());

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedColor.js
var import_normalize_colors3 = __toESM(require_normalize_colors());
var NativeAnimatedAPI3 = NativeAnimatedHelper_default.API;
var defaultColor = {
  r: 0,
  g: 0,
  b: 0,
  a: 1
};
var _uniqueId3 = 1;
var processColorObject = (color) => {
  return color;
};
function processColor2(color) {
  if (color === void 0 || color === null) {
    return null;
  }
  if (isRgbaValue(color)) {
    return color;
  }
  var normalizedColor = (0, import_normalize_colors3.default)(
    // $FlowIgnore[incompatible-cast] - Type is verified above
    color
  );
  if (normalizedColor === void 0 || normalizedColor === null) {
    return null;
  }
  if (typeof normalizedColor === "object") {
    var processedColorObj = processColorObject(normalizedColor);
    if (processedColorObj != null) {
      return processedColorObj;
    }
  } else if (typeof normalizedColor === "number") {
    var r = (normalizedColor & 4278190080) >>> 24;
    var g = (normalizedColor & 16711680) >>> 16;
    var b = (normalizedColor & 65280) >>> 8;
    var a = (normalizedColor & 255) / 255;
    return {
      r,
      g,
      b,
      a
    };
  }
  return null;
}
function isRgbaValue(value) {
  return value && typeof value.r === "number" && typeof value.g === "number" && typeof value.b === "number" && typeof value.a === "number";
}
function isRgbaAnimatedValue(value) {
  return value && value.r instanceof AnimatedValue_default && value.g instanceof AnimatedValue_default && value.b instanceof AnimatedValue_default && value.a instanceof AnimatedValue_default;
}
var AnimatedColor = class extends AnimatedWithChildren_default {
  constructor(valueIn, config2) {
    super();
    this._listeners = {};
    var value = valueIn !== null && valueIn !== void 0 ? valueIn : defaultColor;
    if (isRgbaAnimatedValue(value)) {
      var rgbaAnimatedValue = value;
      this.r = rgbaAnimatedValue.r;
      this.g = rgbaAnimatedValue.g;
      this.b = rgbaAnimatedValue.b;
      this.a = rgbaAnimatedValue.a;
    } else {
      var _processColor;
      var processedColor = (
        // $FlowIgnore[incompatible-cast] - Type is verified above
        (_processColor = processColor2(value)) !== null && _processColor !== void 0 ? _processColor : defaultColor
      );
      var initColor = defaultColor;
      if (isRgbaValue(processedColor)) {
        initColor = processedColor;
      } else {
        this.nativeColor = processedColor;
      }
      this.r = new AnimatedValue_default(initColor.r);
      this.g = new AnimatedValue_default(initColor.g);
      this.b = new AnimatedValue_default(initColor.b);
      this.a = new AnimatedValue_default(initColor.a);
    }
    if (this.nativeColor || config2 && config2.useNativeDriver) {
      this.__makeNative();
    }
  }
  /**
   * Directly set the value. This will stop any animations running on the value
   * and update all the bound properties.
   */
  setValue(value) {
    var _processColor2;
    var shouldUpdateNodeConfig = false;
    if (this.__isNative) {
      var nativeTag = this.__getNativeTag();
      NativeAnimatedAPI3.setWaitingForIdentifier(nativeTag.toString());
    }
    var processedColor = (_processColor2 = processColor2(value)) !== null && _processColor2 !== void 0 ? _processColor2 : defaultColor;
    if (isRgbaValue(processedColor)) {
      var rgbaValue = processedColor;
      this.r.setValue(rgbaValue.r);
      this.g.setValue(rgbaValue.g);
      this.b.setValue(rgbaValue.b);
      this.a.setValue(rgbaValue.a);
      if (this.nativeColor != null) {
        this.nativeColor = null;
        shouldUpdateNodeConfig = true;
      }
    } else {
      var nativeColor = processedColor;
      if (this.nativeColor !== nativeColor) {
        this.nativeColor = nativeColor;
        shouldUpdateNodeConfig = true;
      }
    }
    if (this.__isNative) {
      var _nativeTag = this.__getNativeTag();
      if (shouldUpdateNodeConfig) {
        NativeAnimatedAPI3.updateAnimatedNodeConfig(_nativeTag, this.__getNativeConfig());
      }
      NativeAnimatedAPI3.unsetWaitingForIdentifier(_nativeTag.toString());
    }
  }
  /**
   * Sets an offset that is applied on top of whatever value is set, whether
   * via `setValue`, an animation, or `Animated.event`. Useful for compensating
   * things like the start of a pan gesture.
   */
  setOffset(offset) {
    this.r.setOffset(offset.r);
    this.g.setOffset(offset.g);
    this.b.setOffset(offset.b);
    this.a.setOffset(offset.a);
  }
  /**
   * Merges the offset value into the base value and resets the offset to zero.
   * The final output of the value is unchanged.
   */
  flattenOffset() {
    this.r.flattenOffset();
    this.g.flattenOffset();
    this.b.flattenOffset();
    this.a.flattenOffset();
  }
  /**
   * Sets the offset value to the base value, and resets the base value to
   * zero. The final output of the value is unchanged.
   */
  extractOffset() {
    this.r.extractOffset();
    this.g.extractOffset();
    this.b.extractOffset();
    this.a.extractOffset();
  }
  /**
   * Adds an asynchronous listener to the value so you can observe updates from
   * animations.  This is useful because there is no way to synchronously read
   * the value because it might be driven natively.
   *
   * Returns a string that serves as an identifier for the listener.
   */
  addListener(callback) {
    var id2 = String(_uniqueId3++);
    var jointCallback = (_ref) => {
      var number = _ref.value;
      callback(this.__getValue());
    };
    this._listeners[id2] = {
      r: this.r.addListener(jointCallback),
      g: this.g.addListener(jointCallback),
      b: this.b.addListener(jointCallback),
      a: this.a.addListener(jointCallback)
    };
    return id2;
  }
  /**
   * Unregister a listener. The `id` param shall match the identifier
   * previously returned by `addListener()`.
   */
  removeListener(id2) {
    this.r.removeListener(this._listeners[id2].r);
    this.g.removeListener(this._listeners[id2].g);
    this.b.removeListener(this._listeners[id2].b);
    this.a.removeListener(this._listeners[id2].a);
    delete this._listeners[id2];
  }
  /**
   * Remove all registered listeners.
   */
  removeAllListeners() {
    this.r.removeAllListeners();
    this.g.removeAllListeners();
    this.b.removeAllListeners();
    this.a.removeAllListeners();
    this._listeners = {};
  }
  /**
   * Stops any running animation or tracking. `callback` is invoked with the
   * final value after stopping the animation, which is useful for updating
   * state to match the animation position with layout.
   */
  stopAnimation(callback) {
    this.r.stopAnimation();
    this.g.stopAnimation();
    this.b.stopAnimation();
    this.a.stopAnimation();
    callback && callback(this.__getValue());
  }
  /**
   * Stops any animation and resets the value to its original.
   */
  resetAnimation(callback) {
    this.r.resetAnimation();
    this.g.resetAnimation();
    this.b.resetAnimation();
    this.a.resetAnimation();
    callback && callback(this.__getValue());
  }
  __getValue() {
    if (this.nativeColor != null) {
      return this.nativeColor;
    } else {
      return "rgba(" + this.r.__getValue() + ", " + this.g.__getValue() + ", " + this.b.__getValue() + ", " + this.a.__getValue() + ")";
    }
  }
  __attach() {
    this.r.__addChild(this);
    this.g.__addChild(this);
    this.b.__addChild(this);
    this.a.__addChild(this);
    super.__attach();
  }
  __detach() {
    this.r.__removeChild(this);
    this.g.__removeChild(this);
    this.b.__removeChild(this);
    this.a.__removeChild(this);
    super.__detach();
  }
  __makeNative(platformConfig) {
    this.r.__makeNative(platformConfig);
    this.g.__makeNative(platformConfig);
    this.b.__makeNative(platformConfig);
    this.a.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getNativeConfig() {
    return {
      type: "color",
      r: this.r.__getNativeTag(),
      g: this.g.__getNativeTag(),
      b: this.b.__getNativeTag(),
      a: this.a.__getNativeTag(),
      nativeColor: this.nativeColor
    };
  }
};

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/animations/SpringAnimation.js
var SpringAnimation = class _SpringAnimation extends Animation_default {
  constructor(config2) {
    var _config$overshootClam, _config$restDisplacem, _config$restSpeedThre, _config$velocity, _config$velocity2, _config$delay, _config$isInteraction, _config$iterations;
    super();
    this._overshootClamping = (_config$overshootClam = config2.overshootClamping) !== null && _config$overshootClam !== void 0 ? _config$overshootClam : false;
    this._restDisplacementThreshold = (_config$restDisplacem = config2.restDisplacementThreshold) !== null && _config$restDisplacem !== void 0 ? _config$restDisplacem : 1e-3;
    this._restSpeedThreshold = (_config$restSpeedThre = config2.restSpeedThreshold) !== null && _config$restSpeedThre !== void 0 ? _config$restSpeedThre : 1e-3;
    this._initialVelocity = (_config$velocity = config2.velocity) !== null && _config$velocity !== void 0 ? _config$velocity : 0;
    this._lastVelocity = (_config$velocity2 = config2.velocity) !== null && _config$velocity2 !== void 0 ? _config$velocity2 : 0;
    this._toValue = config2.toValue;
    this._delay = (_config$delay = config2.delay) !== null && _config$delay !== void 0 ? _config$delay : 0;
    this._useNativeDriver = shouldUseNativeDriver(config2);
    this._platformConfig = config2.platformConfig;
    this.__isInteraction = (_config$isInteraction = config2.isInteraction) !== null && _config$isInteraction !== void 0 ? _config$isInteraction : !this._useNativeDriver;
    this.__iterations = (_config$iterations = config2.iterations) !== null && _config$iterations !== void 0 ? _config$iterations : 1;
    if (config2.stiffness !== void 0 || config2.damping !== void 0 || config2.mass !== void 0) {
      var _config$stiffness, _config$damping, _config$mass;
      (0, import_invariant21.default)(config2.bounciness === void 0 && config2.speed === void 0 && config2.tension === void 0 && config2.friction === void 0, "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one");
      this._stiffness = (_config$stiffness = config2.stiffness) !== null && _config$stiffness !== void 0 ? _config$stiffness : 100;
      this._damping = (_config$damping = config2.damping) !== null && _config$damping !== void 0 ? _config$damping : 10;
      this._mass = (_config$mass = config2.mass) !== null && _config$mass !== void 0 ? _config$mass : 1;
    } else if (config2.bounciness !== void 0 || config2.speed !== void 0) {
      var _config$bounciness, _config$speed;
      (0, import_invariant21.default)(config2.tension === void 0 && config2.friction === void 0 && config2.stiffness === void 0 && config2.damping === void 0 && config2.mass === void 0, "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one");
      var springConfig = SpringConfig_default.fromBouncinessAndSpeed((_config$bounciness = config2.bounciness) !== null && _config$bounciness !== void 0 ? _config$bounciness : 8, (_config$speed = config2.speed) !== null && _config$speed !== void 0 ? _config$speed : 12);
      this._stiffness = springConfig.stiffness;
      this._damping = springConfig.damping;
      this._mass = 1;
    } else {
      var _config$tension, _config$friction;
      var _springConfig = SpringConfig_default.fromOrigamiTensionAndFriction((_config$tension = config2.tension) !== null && _config$tension !== void 0 ? _config$tension : 40, (_config$friction = config2.friction) !== null && _config$friction !== void 0 ? _config$friction : 7);
      this._stiffness = _springConfig.stiffness;
      this._damping = _springConfig.damping;
      this._mass = 1;
    }
    (0, import_invariant21.default)(this._stiffness > 0, "Stiffness value must be greater than 0");
    (0, import_invariant21.default)(this._damping > 0, "Damping value must be greater than 0");
    (0, import_invariant21.default)(this._mass > 0, "Mass value must be greater than 0");
  }
  __getNativeAnimationConfig() {
    var _this$_initialVelocit;
    return {
      type: "spring",
      overshootClamping: this._overshootClamping,
      restDisplacementThreshold: this._restDisplacementThreshold,
      restSpeedThreshold: this._restSpeedThreshold,
      stiffness: this._stiffness,
      damping: this._damping,
      mass: this._mass,
      initialVelocity: (_this$_initialVelocit = this._initialVelocity) !== null && _this$_initialVelocit !== void 0 ? _this$_initialVelocit : this._lastVelocity,
      toValue: this._toValue,
      iterations: this.__iterations,
      platformConfig: this._platformConfig
    };
  }
  start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
    this.__active = true;
    this._startPosition = fromValue;
    this._lastPosition = this._startPosition;
    this._onUpdate = onUpdate;
    this.__onEnd = onEnd;
    this._lastTime = Date.now();
    this._frameTime = 0;
    if (previousAnimation instanceof _SpringAnimation) {
      var internalState = previousAnimation.getInternalState();
      this._lastPosition = internalState.lastPosition;
      this._lastVelocity = internalState.lastVelocity;
      this._initialVelocity = this._lastVelocity;
      this._lastTime = internalState.lastTime;
    }
    var start = () => {
      if (this._useNativeDriver) {
        this.__startNativeAnimation(animatedValue);
      } else {
        this.onUpdate();
      }
    };
    if (this._delay) {
      this._timeout = setTimeout(start, this._delay);
    } else {
      start();
    }
  }
  getInternalState() {
    return {
      lastPosition: this._lastPosition,
      lastVelocity: this._lastVelocity,
      lastTime: this._lastTime
    };
  }
  /**
   * This spring model is based off of a damped harmonic oscillator
   * (https://en.wikipedia.org/wiki/Harmonic_oscillator#Damped_harmonic_oscillator).
   *
   * We use the closed form of the second order differential equation:
   *
   * x'' + (2ζ⍵_0)x' + ⍵^2x = 0
   *
   * where
   *    ⍵_0 = √(k / m) (undamped angular frequency of the oscillator),
   *    ζ = c / 2√mk (damping ratio),
   *    c = damping constant
   *    k = stiffness
   *    m = mass
   *
   * The derivation of the closed form is described in detail here:
   * http://planetmath.org/sites/default/files/texpdf/39745.pdf
   *
   * This algorithm happens to match the algorithm used by CASpringAnimation,
   * a QuartzCore (iOS) API that creates spring animations.
   */
  onUpdate() {
    var MAX_STEPS = 64;
    var now = Date.now();
    if (now > this._lastTime + MAX_STEPS) {
      now = this._lastTime + MAX_STEPS;
    }
    var deltaTime = (now - this._lastTime) / 1e3;
    this._frameTime += deltaTime;
    var c = this._damping;
    var m2 = this._mass;
    var k = this._stiffness;
    var v0 = -this._initialVelocity;
    var zeta = c / (2 * Math.sqrt(k * m2));
    var omega0 = Math.sqrt(k / m2);
    var omega1 = omega0 * Math.sqrt(1 - zeta * zeta);
    var x0 = this._toValue - this._startPosition;
    var position2 = 0;
    var velocity = 0;
    var t = this._frameTime;
    if (zeta < 1) {
      var envelope = Math.exp(-zeta * omega0 * t);
      position2 = this._toValue - envelope * ((v0 + zeta * omega0 * x0) / omega1 * Math.sin(omega1 * t) + x0 * Math.cos(omega1 * t));
      velocity = zeta * omega0 * envelope * (Math.sin(omega1 * t) * (v0 + zeta * omega0 * x0) / omega1 + x0 * Math.cos(omega1 * t)) - envelope * (Math.cos(omega1 * t) * (v0 + zeta * omega0 * x0) - omega1 * x0 * Math.sin(omega1 * t));
    } else {
      var _envelope = Math.exp(-omega0 * t);
      position2 = this._toValue - _envelope * (x0 + (v0 + omega0 * x0) * t);
      velocity = _envelope * (v0 * (t * omega0 - 1) + t * x0 * (omega0 * omega0));
    }
    this._lastTime = now;
    this._lastPosition = position2;
    this._lastVelocity = velocity;
    this._onUpdate(position2);
    if (!this.__active) {
      return;
    }
    var isOvershooting = false;
    if (this._overshootClamping && this._stiffness !== 0) {
      if (this._startPosition < this._toValue) {
        isOvershooting = position2 > this._toValue;
      } else {
        isOvershooting = position2 < this._toValue;
      }
    }
    var isVelocity = Math.abs(velocity) <= this._restSpeedThreshold;
    var isDisplacement = true;
    if (this._stiffness !== 0) {
      isDisplacement = Math.abs(this._toValue - position2) <= this._restDisplacementThreshold;
    }
    if (isOvershooting || isVelocity && isDisplacement) {
      if (this._stiffness !== 0) {
        this._lastPosition = this._toValue;
        this._lastVelocity = 0;
        this._onUpdate(this._toValue);
      }
      this.__debouncedOnEnd({
        finished: true
      });
      return;
    }
    this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
  }
  stop() {
    super.stop();
    this.__active = false;
    clearTimeout(this._timeout);
    global.cancelAnimationFrame(this._animationFrame);
    this.__debouncedOnEnd({
      finished: false
    });
  }
};
var SpringAnimation_default = SpringAnimation;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/bezier.js
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 1e-3;
var SUBDIVISION_PRECISION = 1e-7;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var float32ArraySupported = typeof Float32Array === "function";
function A(aA1, aA2) {
  return 1 - 3 * aA2 + 3 * aA1;
}
function B(aA1, aA2) {
  return 3 * aA2 - 6 * aA1;
}
function C(aA1) {
  return 3 * aA1;
}
function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
function getSlope(aT, aA1, aA2) {
  return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, _aA, _aB, mX1, mX2) {
  var currentX, currentT, i = 0, aA = _aA, aB = _aB;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}
function newtonRaphsonIterate(aX, _aGuessT, mX1, mX2) {
  var aGuessT = _aGuessT;
  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
function bezier(mX1, mY1, mX2, mY2) {
  if (!(mX1 >= 0 && mX1 <= 1 && mX2 >= 0 && mX2 <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  if (mX1 !== mY1 || mX2 !== mY2) {
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
  }
  function getTForX(aX) {
    var intervalStart = 0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;
    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return function BezierEasing(x) {
    if (mX1 === mY1 && mX2 === mY2) {
      return x;
    }
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
}

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/Easing.js
var ease;
var Easing = class _Easing {
  /**
   * A stepping function, returns 1 for any positive value of `n`.
   */
  static step0(n) {
    return n > 0 ? 1 : 0;
  }
  /**
   * A stepping function, returns 1 if `n` is greater than or equal to 1.
   */
  static step1(n) {
    return n >= 1 ? 1 : 0;
  }
  /**
   * A linear function, `f(t) = t`. Position correlates to elapsed time one to
   * one.
   *
   * http://cubic-bezier.com/#0,0,1,1
   */
  static linear(t) {
    return t;
  }
  /**
   * A simple inertial interaction, similar to an object slowly accelerating to
   * speed.
   *
   * http://cubic-bezier.com/#.42,0,1,1
   */
  static ease(t) {
    if (!ease) {
      ease = _Easing.bezier(0.42, 0, 1, 1);
    }
    return ease(t);
  }
  /**
   * A quadratic function, `f(t) = t * t`. Position equals the square of elapsed
   * time.
   *
   * http://easings.net/#easeInQuad
   */
  static quad(t) {
    return t * t;
  }
  /**
   * A cubic function, `f(t) = t * t * t`. Position equals the cube of elapsed
   * time.
   *
   * http://easings.net/#easeInCubic
   */
  static cubic(t) {
    return t * t * t;
  }
  /**
   * A power function. Position is equal to the Nth power of elapsed time.
   *
   * n = 4: http://easings.net/#easeInQuart
   * n = 5: http://easings.net/#easeInQuint
   */
  static poly(n) {
    return (t) => Math.pow(t, n);
  }
  /**
   * A sinusoidal function.
   *
   * http://easings.net/#easeInSine
   */
  static sin(t) {
    return 1 - Math.cos(t * Math.PI / 2);
  }
  /**
   * A circular function.
   *
   * http://easings.net/#easeInCirc
   */
  static circle(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  /**
   * An exponential function.
   *
   * http://easings.net/#easeInExpo
   */
  static exp(t) {
    return Math.pow(2, 10 * (t - 1));
  }
  /**
   * A simple elastic interaction, similar to a spring oscillating back and
   * forth.
   *
   * Default bounciness is 1, which overshoots a little bit once. 0 bounciness
   * doesn't overshoot at all, and bounciness of N > 1 will overshoot about N
   * times.
   *
   * http://easings.net/#easeInElastic
   */
  static elastic(bounciness) {
    if (bounciness === void 0) {
      bounciness = 1;
    }
    var p = bounciness * Math.PI;
    return (t) => 1 - Math.pow(Math.cos(t * Math.PI / 2), 3) * Math.cos(t * p);
  }
  /**
   * Use with `Animated.parallel()` to create a simple effect where the object
   * animates back slightly as the animation starts.
   *
   * Wolfram Plot:
   *
   * - http://tiny.cc/back_default (s = 1.70158, default)
   */
  static back(s) {
    if (s === void 0) {
      s = 1.70158;
    }
    return (t) => t * t * ((s + 1) * t - s);
  }
  /**
   * Provides a simple bouncing effect.
   *
   * http://easings.net/#easeInBounce
   */
  static bounce(t) {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    }
    if (t < 2 / 2.75) {
      var _t = t - 1.5 / 2.75;
      return 7.5625 * _t * _t + 0.75;
    }
    if (t < 2.5 / 2.75) {
      var _t2 = t - 2.25 / 2.75;
      return 7.5625 * _t2 * _t2 + 0.9375;
    }
    var t2 = t - 2.625 / 2.75;
    return 7.5625 * t2 * t2 + 0.984375;
  }
  /**
   * Provides a cubic bezier curve, equivalent to CSS Transitions'
   * `transition-timing-function`.
   *
   * A useful tool to visualize cubic bezier curves can be found at
   * http://cubic-bezier.com/
   */
  static bezier(x1, y1, x2, y2) {
    return bezier(x1, y1, x2, y2);
  }
  /**
   * Runs an easing function forwards.
   */
  static in(easing) {
    return easing;
  }
  /**
   * Runs an easing function backwards.
   */
  static out(easing) {
    return (t) => 1 - easing(1 - t);
  }
  /**
   * Makes any easing function symmetrical. The easing function will run
   * forwards for half of the duration, then backwards for the rest of the
   * duration.
   */
  static inOut(easing) {
    return (t) => {
      if (t < 0.5) {
        return easing(t * 2) / 2;
      }
      return 1 - easing((1 - t) * 2) / 2;
    };
  }
};
var Easing_default = Easing;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/Easing/index.js
var Easing_default2 = Easing_default;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/animations/TimingAnimation.js
var _easeInOut;
function easeInOut() {
  if (!_easeInOut) {
    _easeInOut = Easing_default2.inOut(Easing_default2.ease);
  }
  return _easeInOut;
}
var TimingAnimation = class extends Animation_default {
  constructor(config2) {
    var _config$easing, _config$duration, _config$delay, _config$iterations, _config$isInteraction;
    super();
    this._toValue = config2.toValue;
    this._easing = (_config$easing = config2.easing) !== null && _config$easing !== void 0 ? _config$easing : easeInOut();
    this._duration = (_config$duration = config2.duration) !== null && _config$duration !== void 0 ? _config$duration : 500;
    this._delay = (_config$delay = config2.delay) !== null && _config$delay !== void 0 ? _config$delay : 0;
    this.__iterations = (_config$iterations = config2.iterations) !== null && _config$iterations !== void 0 ? _config$iterations : 1;
    this._useNativeDriver = shouldUseNativeDriver(config2);
    this._platformConfig = config2.platformConfig;
    this.__isInteraction = (_config$isInteraction = config2.isInteraction) !== null && _config$isInteraction !== void 0 ? _config$isInteraction : !this._useNativeDriver;
  }
  __getNativeAnimationConfig() {
    var frameDuration = 1e3 / 60;
    var frames = [];
    var numFrames = Math.round(this._duration / frameDuration);
    for (var frame = 0; frame < numFrames; frame++) {
      frames.push(this._easing(frame / numFrames));
    }
    frames.push(this._easing(1));
    return {
      type: "frames",
      frames,
      toValue: this._toValue,
      iterations: this.__iterations,
      platformConfig: this._platformConfig
    };
  }
  start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
    this.__active = true;
    this._fromValue = fromValue;
    this._onUpdate = onUpdate;
    this.__onEnd = onEnd;
    var start = () => {
      if (this._duration === 0 && !this._useNativeDriver) {
        this._onUpdate(this._toValue);
        this.__debouncedOnEnd({
          finished: true
        });
      } else {
        this._startTime = Date.now();
        if (this._useNativeDriver) {
          this.__startNativeAnimation(animatedValue);
        } else {
          this._animationFrame = requestAnimationFrame(
            // $FlowFixMe[method-unbinding] added when improving typing for this parameters
            this.onUpdate.bind(this)
          );
        }
      }
    };
    if (this._delay) {
      this._timeout = setTimeout(start, this._delay);
    } else {
      start();
    }
  }
  onUpdate() {
    var now = Date.now();
    if (now >= this._startTime + this._duration) {
      if (this._duration === 0) {
        this._onUpdate(this._toValue);
      } else {
        this._onUpdate(this._fromValue + this._easing(1) * (this._toValue - this._fromValue));
      }
      this.__debouncedOnEnd({
        finished: true
      });
      return;
    }
    this._onUpdate(this._fromValue + this._easing((now - this._startTime) / this._duration) * (this._toValue - this._fromValue));
    if (this.__active) {
      this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
    }
  }
  stop() {
    super.stop();
    this.__active = false;
    clearTimeout(this._timeout);
    global.cancelAnimationFrame(this._animationFrame);
    this.__debouncedOnEnd({
      finished: false
    });
  }
};
var TimingAnimation_default = TimingAnimation;

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/AnimatedImplementation.js
var add = function add2(a, b) {
  return new AnimatedAddition_default(a, b);
};
var subtract = function subtract2(a, b) {
  return new AnimatedSubtraction_default(a, b);
};
var divide = function divide2(a, b) {
  return new AnimatedDivision_default(a, b);
};
var multiply = function multiply2(a, b) {
  return new AnimatedMultiplication_default(a, b);
};
var modulo = function modulo2(a, modulus) {
  return new AnimatedModulo_default(a, modulus);
};
var diffClamp = function diffClamp2(a, min, max) {
  return new AnimatedDiffClamp_default(a, min, max);
};
var _combineCallbacks = function _combineCallbacks2(callback, config2) {
  if (callback && config2.onComplete) {
    return function() {
      config2.onComplete && config2.onComplete(...arguments);
      callback && callback(...arguments);
    };
  } else {
    return callback || config2.onComplete;
  }
};
var maybeVectorAnim = function maybeVectorAnim2(value, config2, anim) {
  if (value instanceof AnimatedValueXY_default) {
    var configX = (0, import_objectSpread221.default)({}, config2);
    var configY = (0, import_objectSpread221.default)({}, config2);
    for (var key in config2) {
      var _config$key = config2[key], x = _config$key.x, y = _config$key.y;
      if (x !== void 0 && y !== void 0) {
        configX[key] = x;
        configY[key] = y;
      }
    }
    var aX = anim(value.x, configX);
    var aY = anim(value.y, configY);
    return parallel([aX, aY], {
      stopTogether: false
    });
  } else if (value instanceof AnimatedColor) {
    var configR = (0, import_objectSpread221.default)({}, config2);
    var configG = (0, import_objectSpread221.default)({}, config2);
    var configB = (0, import_objectSpread221.default)({}, config2);
    var configA = (0, import_objectSpread221.default)({}, config2);
    for (var _key in config2) {
      var _config$_key = config2[_key], r = _config$_key.r, g = _config$_key.g, b = _config$_key.b, a = _config$_key.a;
      if (r !== void 0 && g !== void 0 && b !== void 0 && a !== void 0) {
        configR[_key] = r;
        configG[_key] = g;
        configB[_key] = b;
        configA[_key] = a;
      }
    }
    var aR = anim(value.r, configR);
    var aG = anim(value.g, configG);
    var aB = anim(value.b, configB);
    var aA = anim(value.a, configA);
    return parallel([aR, aG, aB, aA], {
      stopTogether: false
    });
  }
  return null;
};
var spring = function spring2(value, config2) {
  var _start = function start(animatedValue, configuration, callback) {
    callback = _combineCallbacks(callback, configuration);
    var singleValue = animatedValue;
    var singleConfig = configuration;
    singleValue.stopTracking();
    if (configuration.toValue instanceof AnimatedNode_default) {
      singleValue.track(new AnimatedTracking_default(singleValue, configuration.toValue, SpringAnimation_default, singleConfig, callback));
    } else {
      singleValue.animate(new SpringAnimation_default(singleConfig), callback);
    }
  };
  return maybeVectorAnim(value, config2, spring2) || {
    start: function start(callback) {
      _start(value, config2, callback);
    },
    stop: function stop() {
      value.stopAnimation();
    },
    reset: function reset() {
      value.resetAnimation();
    },
    _startNativeLoop: function _startNativeLoop(iterations) {
      var singleConfig = (0, import_objectSpread221.default)((0, import_objectSpread221.default)({}, config2), {}, {
        iterations
      });
      _start(value, singleConfig);
    },
    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return config2.useNativeDriver || false;
    }
  };
};
var timing = function timing2(value, config2) {
  var _start2 = function start(animatedValue, configuration, callback) {
    callback = _combineCallbacks(callback, configuration);
    var singleValue = animatedValue;
    var singleConfig = configuration;
    singleValue.stopTracking();
    if (configuration.toValue instanceof AnimatedNode_default) {
      singleValue.track(new AnimatedTracking_default(singleValue, configuration.toValue, TimingAnimation_default, singleConfig, callback));
    } else {
      singleValue.animate(new TimingAnimation_default(singleConfig), callback);
    }
  };
  return maybeVectorAnim(value, config2, timing2) || {
    start: function start(callback) {
      _start2(value, config2, callback);
    },
    stop: function stop() {
      value.stopAnimation();
    },
    reset: function reset() {
      value.resetAnimation();
    },
    _startNativeLoop: function _startNativeLoop(iterations) {
      var singleConfig = (0, import_objectSpread221.default)((0, import_objectSpread221.default)({}, config2), {}, {
        iterations
      });
      _start2(value, singleConfig);
    },
    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return config2.useNativeDriver || false;
    }
  };
};
var decay = function decay2(value, config2) {
  var _start3 = function start(animatedValue, configuration, callback) {
    callback = _combineCallbacks(callback, configuration);
    var singleValue = animatedValue;
    var singleConfig = configuration;
    singleValue.stopTracking();
    singleValue.animate(new DecayAnimation_default(singleConfig), callback);
  };
  return maybeVectorAnim(value, config2, decay2) || {
    start: function start(callback) {
      _start3(value, config2, callback);
    },
    stop: function stop() {
      value.stopAnimation();
    },
    reset: function reset() {
      value.resetAnimation();
    },
    _startNativeLoop: function _startNativeLoop(iterations) {
      var singleConfig = (0, import_objectSpread221.default)((0, import_objectSpread221.default)({}, config2), {}, {
        iterations
      });
      _start3(value, singleConfig);
    },
    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return config2.useNativeDriver || false;
    }
  };
};
var sequence = function sequence2(animations2) {
  var current = 0;
  return {
    start: function start(callback) {
      var onComplete = function onComplete2(result) {
        if (!result.finished) {
          callback && callback(result);
          return;
        }
        current++;
        if (current === animations2.length) {
          current = 0;
          callback && callback(result);
          return;
        }
        animations2[current].start(onComplete2);
      };
      if (animations2.length === 0) {
        callback && callback({
          finished: true
        });
      } else {
        animations2[current].start(onComplete);
      }
    },
    stop: function stop() {
      if (current < animations2.length) {
        animations2[current].stop();
      }
    },
    reset: function reset() {
      animations2.forEach((animation, idx) => {
        if (idx <= current) {
          animation.reset();
        }
      });
      current = 0;
    },
    _startNativeLoop: function _startNativeLoop() {
      throw new Error("Loops run using the native driver cannot contain Animated.sequence animations");
    },
    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return false;
    }
  };
};
var parallel = function parallel2(animations2, config2) {
  var doneCount = 0;
  var hasEnded = {};
  var stopTogether = !(config2 && config2.stopTogether === false);
  var result = {
    start: function start(callback) {
      if (doneCount === animations2.length) {
        callback && callback({
          finished: true
        });
        return;
      }
      animations2.forEach((animation, idx) => {
        var cb = function cb2(endResult) {
          hasEnded[idx] = true;
          doneCount++;
          if (doneCount === animations2.length) {
            doneCount = 0;
            callback && callback(endResult);
            return;
          }
          if (!endResult.finished && stopTogether) {
            result.stop();
          }
        };
        if (!animation) {
          cb({
            finished: true
          });
        } else {
          animation.start(cb);
        }
      });
    },
    stop: function stop() {
      animations2.forEach((animation, idx) => {
        !hasEnded[idx] && animation.stop();
        hasEnded[idx] = true;
      });
    },
    reset: function reset() {
      animations2.forEach((animation, idx) => {
        animation.reset();
        hasEnded[idx] = false;
        doneCount = 0;
      });
    },
    _startNativeLoop: function _startNativeLoop() {
      throw new Error("Loops run using the native driver cannot contain Animated.parallel animations");
    },
    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return false;
    }
  };
  return result;
};
var delay = function delay2(time) {
  return timing(new AnimatedValue_default(0), {
    toValue: 0,
    delay: time,
    duration: 0,
    useNativeDriver: false
  });
};
var stagger = function stagger2(time, animations2) {
  return parallel(animations2.map((animation, i) => {
    return sequence([delay(time * i), animation]);
  }));
};
var loop = function loop2(animation, _temp) {
  var _ref = _temp === void 0 ? {} : _temp, _ref$iterations = _ref.iterations, iterations = _ref$iterations === void 0 ? -1 : _ref$iterations, _ref$resetBeforeItera = _ref.resetBeforeIteration, resetBeforeIteration = _ref$resetBeforeItera === void 0 ? true : _ref$resetBeforeItera;
  var isFinished = false;
  var iterationsSoFar = 0;
  return {
    start: function start(callback) {
      var restart = function restart2(result) {
        if (result === void 0) {
          result = {
            finished: true
          };
        }
        if (isFinished || iterationsSoFar === iterations || result.finished === false) {
          callback && callback(result);
        } else {
          iterationsSoFar++;
          resetBeforeIteration && animation.reset();
          animation.start(restart2);
        }
      };
      if (!animation || iterations === 0) {
        callback && callback({
          finished: true
        });
      } else {
        if (animation._isUsingNativeDriver()) {
          animation._startNativeLoop(iterations);
        } else {
          restart();
        }
      }
    },
    stop: function stop() {
      isFinished = true;
      animation.stop();
    },
    reset: function reset() {
      iterationsSoFar = 0;
      isFinished = false;
      animation.reset();
    },
    _startNativeLoop: function _startNativeLoop() {
      throw new Error("Loops run using the native driver cannot contain Animated.loop animations");
    },
    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return animation._isUsingNativeDriver();
    }
  };
};
function forkEvent(event3, listener) {
  if (!event3) {
    return listener;
  } else if (event3 instanceof AnimatedEvent) {
    event3.__addListener(listener);
    return event3;
  } else {
    return function() {
      typeof event3 === "function" && event3(...arguments);
      listener(...arguments);
    };
  }
}
function unforkEvent(event3, listener) {
  if (event3 && event3 instanceof AnimatedEvent) {
    event3.__removeListener(listener);
  }
}
var event = function event2(argMapping, config2) {
  var animatedEvent = new AnimatedEvent(argMapping, config2);
  if (animatedEvent.__isNative) {
    return animatedEvent;
  } else {
    return animatedEvent.__getHandler();
  }
};
var AnimatedImplementation_default = {
  /**
   * Standard value class for driving animations.  Typically initialized with
   * `new Animated.Value(0);`
   *
   * See https://reactnative.dev/docs/animated#value
   */
  Value: AnimatedValue_default,
  /**
   * 2D value class for driving 2D animations, such as pan gestures.
   *
   * See https://reactnative.dev/docs/animatedvaluexy
   */
  ValueXY: AnimatedValueXY_default,
  /**
   * Value class for driving color animations.
   */
  Color: AnimatedColor,
  /**
   * Exported to use the Interpolation type in flow.
   *
   * See https://reactnative.dev/docs/animated#interpolation
   */
  Interpolation: AnimatedInterpolation_default,
  /**
   * Exported for ease of type checking. All animated values derive from this
   * class.
   *
   * See https://reactnative.dev/docs/animated#node
   */
  Node: AnimatedNode_default,
  /**
   * Animates a value from an initial velocity to zero based on a decay
   * coefficient.
   *
   * See https://reactnative.dev/docs/animated#decay
   */
  decay,
  /**
   * Animates a value along a timed easing curve. The Easing module has tons of
   * predefined curves, or you can use your own function.
   *
   * See https://reactnative.dev/docs/animated#timing
   */
  timing,
  /**
   * Animates a value according to an analytical spring model based on
   * damped harmonic oscillation.
   *
   * See https://reactnative.dev/docs/animated#spring
   */
  spring,
  /**
   * Creates a new Animated value composed from two Animated values added
   * together.
   *
   * See https://reactnative.dev/docs/animated#add
   */
  add,
  /**
   * Creates a new Animated value composed by subtracting the second Animated
   * value from the first Animated value.
   *
   * See https://reactnative.dev/docs/animated#subtract
   */
  subtract,
  /**
   * Creates a new Animated value composed by dividing the first Animated value
   * by the second Animated value.
   *
   * See https://reactnative.dev/docs/animated#divide
   */
  divide,
  /**
   * Creates a new Animated value composed from two Animated values multiplied
   * together.
   *
   * See https://reactnative.dev/docs/animated#multiply
   */
  multiply,
  /**
   * Creates a new Animated value that is the (non-negative) modulo of the
   * provided Animated value.
   *
   * See https://reactnative.dev/docs/animated#modulo
   */
  modulo,
  /**
   * Create a new Animated value that is limited between 2 values. It uses the
   * difference between the last value so even if the value is far from the
   * bounds it will start changing when the value starts getting closer again.
   *
   * See https://reactnative.dev/docs/animated#diffclamp
   */
  diffClamp,
  /**
   * Starts an animation after the given delay.
   *
   * See https://reactnative.dev/docs/animated#delay
   */
  delay,
  /**
   * Starts an array of animations in order, waiting for each to complete
   * before starting the next. If the current running animation is stopped, no
   * following animations will be started.
   *
   * See https://reactnative.dev/docs/animated#sequence
   */
  sequence,
  /**
   * Starts an array of animations all at the same time. By default, if one
   * of the animations is stopped, they will all be stopped. You can override
   * this with the `stopTogether` flag.
   *
   * See https://reactnative.dev/docs/animated#parallel
   */
  parallel,
  /**
   * Array of animations may run in parallel (overlap), but are started in
   * sequence with successive delays.  Nice for doing trailing effects.
   *
   * See https://reactnative.dev/docs/animated#stagger
   */
  stagger,
  /**
   * Loops a given animation continuously, so that each time it reaches the
   * end, it resets and begins again from the start.
   *
   * See https://reactnative.dev/docs/animated#loop
   */
  loop,
  /**
   * Takes an array of mappings and extracts values from each arg accordingly,
   * then calls `setValue` on the mapped outputs.
   *
   * See https://reactnative.dev/docs/animated#event
   */
  event,
  /**
   * Make any React component Animatable.  Used to create `Animated.View`, etc.
   *
   * See https://reactnative.dev/docs/animated#createanimatedcomponent
   */
  createAnimatedComponent,
  /**
   * Imperative API to attach an animated value to an event on a view. Prefer
   * using `Animated.event` with `useNativeDrive: true` if possible.
   *
   * See https://reactnative.dev/docs/animated#attachnativeevent
   */
  attachNativeEvent,
  /**
   * Advanced imperative API for snooping on animated events that are passed in
   * through props. Use values directly where possible.
   *
   * See https://reactnative.dev/docs/animated#forkevent
   */
  forkEvent,
  unforkEvent,
  /**
   * Expose Event class, so it can be used as a type for type checkers.
   */
  Event: AnimatedEvent
};

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/AnimatedMock.js
var inAnimationCallback = false;
function mockAnimationStart(start) {
  return (callback) => {
    var guardedCallback = callback == null ? callback : function() {
      if (inAnimationCallback) {
        console.warn("Ignoring recursive animation callback when running mock animations");
        return;
      }
      inAnimationCallback = true;
      try {
        callback(...arguments);
      } finally {
        inAnimationCallback = false;
      }
    };
    start(guardedCallback);
  };
}
var emptyAnimation = {
  start: () => {
  },
  stop: () => {
  },
  reset: () => {
  },
  _startNativeLoop: () => {
  },
  _isUsingNativeDriver: () => {
    return false;
  }
};
var mockCompositeAnimation = (animations2) => (0, import_objectSpread222.default)((0, import_objectSpread222.default)({}, emptyAnimation), {}, {
  start: mockAnimationStart((callback) => {
    animations2.forEach((animation) => animation.start());
    callback == null ? void 0 : callback({
      finished: true
    });
  })
});
var spring3 = function spring4(value, config2) {
  var anyValue = value;
  return (0, import_objectSpread222.default)((0, import_objectSpread222.default)({}, emptyAnimation), {}, {
    start: mockAnimationStart((callback) => {
      anyValue.setValue(config2.toValue);
      callback == null ? void 0 : callback({
        finished: true
      });
    })
  });
};
var timing3 = function timing4(value, config2) {
  var anyValue = value;
  return (0, import_objectSpread222.default)((0, import_objectSpread222.default)({}, emptyAnimation), {}, {
    start: mockAnimationStart((callback) => {
      anyValue.setValue(config2.toValue);
      callback == null ? void 0 : callback({
        finished: true
      });
    })
  });
};
var decay3 = function decay4(value, config2) {
  return emptyAnimation;
};
var sequence3 = function sequence4(animations2) {
  return mockCompositeAnimation(animations2);
};
var parallel3 = function parallel4(animations2, config2) {
  return mockCompositeAnimation(animations2);
};
var delay3 = function delay4(time) {
  return emptyAnimation;
};
var stagger3 = function stagger4(time, animations2) {
  return mockCompositeAnimation(animations2);
};
var loop3 = function loop4(animation, _temp) {
  var _ref = _temp === void 0 ? {} : _temp, _ref$iterations = _ref.iterations, iterations = _ref$iterations === void 0 ? -1 : _ref$iterations;
  return emptyAnimation;
};
var AnimatedMock_default = {
  Value: AnimatedValue_default,
  ValueXY: AnimatedValueXY_default,
  Color: AnimatedColor,
  Interpolation: AnimatedInterpolation_default,
  Node: AnimatedNode_default,
  decay: decay3,
  timing: timing3,
  spring: spring3,
  add: AnimatedImplementation_default.add,
  subtract: AnimatedImplementation_default.subtract,
  divide: AnimatedImplementation_default.divide,
  multiply: AnimatedImplementation_default.multiply,
  modulo: AnimatedImplementation_default.modulo,
  diffClamp: AnimatedImplementation_default.diffClamp,
  delay: delay3,
  sequence: sequence3,
  parallel: parallel3,
  stagger: stagger3,
  loop: loop3,
  event: AnimatedImplementation_default.event,
  createAnimatedComponent,
  attachNativeEvent,
  forkEvent: AnimatedImplementation_default.forkEvent,
  unforkEvent: AnimatedImplementation_default.unforkEvent,
  Event: AnimatedEvent
};

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/vendor/react-native/Animated/Animated.js
var Animated = Platform_default.isTesting ? AnimatedMock_default : AnimatedImplementation_default;
var Animated_default = (0, import_objectSpread223.default)({
  FlatList: AnimatedFlatList_default,
  Image: AnimatedImage_default,
  ScrollView: AnimatedScrollView_default,
  SectionList: AnimatedSectionList_default,
  Text: AnimatedText_default,
  View: AnimatedView_default
}, Animated);

// ../../node_modules/.pnpm/react-native-web@0.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-native-web/dist/exports/Animated/index.js
var Animated_default2 = Animated_default;

// ../../node_modules/.pnpm/@tamagui+animations-react-native@1.138.0_react-dom@18.3.1_react@18.3.1__react-native@0.82.1_@_z4rnrn5nrvapgyf2h4auel4kim/node_modules/@tamagui/animations-react-native/dist/esm/createAnimations.mjs
var animatedStyleKey = {
  transform: true,
  opacity: true
};
var colorStyleKey = {
  backgroundColor: true,
  color: true,
  borderColor: true,
  borderLeftColor: true,
  borderRightColor: true,
  borderTopColor: true,
  borderBottomColor: true
};
var costlyToAnimateStyleKey = {
  borderRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderWidth: true,
  borderLeftWidth: true,
  borderRightWidth: true,
  borderTopWidth: true,
  borderBottomWidth: true,
  ...colorStyleKey
  // TODO for other keys like height or width, it's better to not add them here till layout animations are ready
};
var AnimatedView = Animated_default2.View;
var AnimatedText = Animated_default2.Text;
function useAnimatedNumber(initial) {
  const state = React60.useRef(null);
  return state.current || (state.current = {
    composite: null,
    val: new Animated_default2.Value(initial),
    strategy: {
      type: "spring"
    }
  }), {
    getInstance() {
      return state.current.val;
    },
    getValue() {
      return state.current.val._value;
    },
    stop() {
      state.current.composite?.stop(), state.current.composite = null;
    },
    setValue(next, {
      type,
      ...config2
    } = {
      type: "spring"
    }, onFinish) {
      const val = state.current.val, handleFinish = onFinish ? ({
        finished
      }) => finished ? onFinish() : null : void 0;
      if (type === "direct") val.setValue(next);
      else if (type === "spring") {
        state.current.composite?.stop();
        const composite = Animated_default2.spring(val, {
          ...config2,
          toValue: next,
          useNativeDriver: !isWeb3
        });
        composite.start(handleFinish), state.current.composite = composite;
      } else {
        state.current.composite?.stop();
        const composite = Animated_default2.timing(val, {
          ...config2,
          toValue: next,
          useNativeDriver: !isWeb3
        });
        composite.start(handleFinish), state.current.composite = composite;
      }
    }
  };
}
var useAnimatedNumberReaction = ({
  value
}, onValue) => {
  const onChange = useEvent((current) => {
    onValue(current.value);
  });
  React60.useEffect(() => {
    const id2 = value.getInstance().addListener(onChange);
    return () => {
      value.getInstance().removeListener(id2);
    };
  }, [value, onChange]);
};
var useAnimatedNumberStyle = (value, getStyle) => getStyle(value.getInstance());
function createAnimations(animations2) {
  return {
    isReactNative: true,
    animations: animations2,
    View: AnimatedView,
    Text: AnimatedText,
    useAnimatedNumber,
    useAnimatedNumberReaction,
    useAnimatedNumberStyle,
    usePresence,
    ResetPresence,
    useAnimations: ({
      props,
      onDidAnimate,
      style,
      componentState,
      presence
    }) => {
      const isDisabled2 = isWeb3 && componentState.unmounted === true, isExiting = presence?.[0] === false, sendExitComplete = presence?.[1], animateStyles = React60.useRef({}), animatedTranforms = React60.useRef([]), animationsState = React60.useRef(/* @__PURE__ */ new WeakMap()), animateOnly = props.animateOnly || [], hasAnimateOnly = !!props.animateOnly, args = [JSON.stringify(style), componentState, isExiting, !!onDidAnimate], isThereNoNativeStyleKeys = React60.useMemo(() => isWeb3 ? true : Object.keys(style).some((key) => animateOnly ? !animatedStyleKey[key] && animateOnly.indexOf(key) === -1 : !animatedStyleKey[key]), args), res = React60.useMemo(() => {
        const runners = [], completions = [], nonAnimatedStyle = {};
        for (const key in style) {
          const val = style[key];
          if (!isDisabled2) {
            if (animatedStyleKey[key] == null && !costlyToAnimateStyleKey[key]) {
              nonAnimatedStyle[key] = val;
              continue;
            }
            if (hasAnimateOnly && !animateOnly.includes(key)) {
              nonAnimatedStyle[key] = val;
              continue;
            }
            if (key !== "transform") {
              animateStyles.current[key] = update2(key, animateStyles.current[key], val);
              continue;
            }
            if (val) {
              if (typeof val == "string") {
                console.warn("Warning: Tamagui can't animate string transforms yet!");
                continue;
              }
              for (const [index, transform] of val.entries()) {
                if (!transform) continue;
                const tkey = Object.keys(transform)[0], currentTransform = animatedTranforms.current[index]?.[tkey];
                animatedTranforms.current[index] = {
                  [tkey]: update2(tkey, currentTransform, transform[tkey])
                }, animatedTranforms.current = [...animatedTranforms.current];
              }
            }
          }
        }
        const animatedStyle = {
          ...Object.fromEntries(Object.entries(animateStyles.current).map(([k, v]) => [k, animationsState.current.get(v)?.interpolation || v])),
          transform: animatedTranforms.current.map((r) => {
            const key = Object.keys(r)[0], val = animationsState.current.get(r[key])?.interpolation || r[key];
            return {
              [key]: val
            };
          })
        };
        return {
          runners,
          completions,
          style: [nonAnimatedStyle, animatedStyle]
        };
        function update2(key, animated, valIn) {
          const isColorStyleKey = colorStyleKey[key], [val, type] = isColorStyleKey ? [0, void 0] : getValue2(valIn);
          let animateToValue = val;
          const value = animated || new Animated_default2.Value(val), curInterpolation = animationsState.current.get(value);
          let interpolateArgs;
          if (type && (interpolateArgs = getInterpolated(curInterpolation?.current ?? value._value, val, type), animationsState.current.set(value, {
            interpolation: value.interpolate(interpolateArgs),
            current: val
          })), isColorStyleKey && (animateToValue = curInterpolation?.animateToValue ? 0 : 1, interpolateArgs = getColorInterpolated(
            curInterpolation?.current,
            // valIn is the next color
            valIn,
            animateToValue
          ), animationsState.current.set(value, {
            current: valIn,
            interpolation: value.interpolate(interpolateArgs),
            animateToValue: curInterpolation?.animateToValue ? 0 : 1
          })), value) {
            const animationConfig = getAnimationConfig(key, animations2, props.animation);
            let resolve;
            const promise = new Promise((res2) => {
              resolve = res2;
            });
            completions.push(promise), runners.push(() => {
              value.stopAnimation();
              function getAnimation() {
                return Animated_default2[animationConfig.type || "spring"](value, {
                  toValue: animateToValue,
                  useNativeDriver: !isWeb3 && !isThereNoNativeStyleKeys,
                  ...animationConfig
                });
              }
              (animationConfig.delay ? Animated_default2.sequence([Animated_default2.delay(animationConfig.delay), getAnimation()]) : getAnimation()).start(({
                finished
              }) => {
                finished && resolve();
              });
            });
          }
          return process.env.NODE_ENV === "development" && props.debug === "verbose" && console.info(" \u{1F4A0} animate", key, `from (${value._value}) to`, valIn, `(${val})`, "type", type, "interpolate", interpolateArgs), value;
        }
      }, args);
      return useIsomorphicLayoutEffect(() => {
        res.runners.forEach((r) => r());
        let cancel = false;
        return Promise.all(res.completions).then(() => {
          cancel || (onDidAnimate?.(), isExiting && sendExitComplete?.());
        }), () => {
          cancel = true;
        };
      }, args), process.env.NODE_ENV === "development" && props.debug === "verbose" && console.info("Animated", {
        response: res,
        inputStyle: style,
        isExiting
      }), res;
    }
  };
}
function getColorInterpolated(currentColor, nextColor, animateToValue) {
  const inputRange = [0, 1], outputRange = [currentColor || nextColor, nextColor];
  return animateToValue === 0 && outputRange.reverse(), {
    inputRange,
    outputRange
  };
}
function getInterpolated(current, next, postfix = "deg") {
  next === current && (current = next - 1e-9);
  const inputRange = [current, next], outputRange = [`${current}${postfix}`, `${next}${postfix}`];
  return next < current && (inputRange.reverse(), outputRange.reverse()), {
    inputRange,
    outputRange
  };
}
function getAnimationConfig(key, animations2, animation) {
  if (typeof animation == "string") return animations2[animation];
  let type = "", extraConf;
  const shortKey = transformShorthands[key];
  if (Array.isArray(animation)) {
    type = animation[0];
    const conf = animation[1]?.[key] ?? animation[1]?.[shortKey];
    conf && (typeof conf == "string" ? type = conf : (type = conf.type || type, extraConf = conf));
  } else {
    const val = animation?.[key] ?? animation?.[shortKey];
    type = val?.type, extraConf = val;
  }
  return {
    ...animations2[type],
    ...extraConf
  };
}
var transformShorthands = {
  x: "translateX",
  y: "translateY",
  translateX: "x",
  translateY: "y"
};
function getValue2(input, isColor = false) {
  if (typeof input != "string") return [input];
  const [_, number, after] = input.match(/([-0-9]+)(deg|%|px)/) ?? [];
  return [+number, after];
}

// src/theme/tokens.ts
import { createTokens } from "tamagui";
var palette = {
  transparent: "transparent",
  white: "#FFFFFF",
  black: "#000000",
  slate50: "#F8FAFC",
  slate100: "#F1F5F9",
  slate200: "#E2E8F0",
  slate300: "#CBD5F5",
  slate400: "#94A3B8",
  slate500: "#64748B",
  slate600: "#475569",
  slate700: "#334155",
  slate800: "#1E293B",
  slate900: "#0F172A",
  violet400: "#A78BFA",
  violet500: "#8B5CF6",
  violet600: "#7C3AED",
  violet700: "#6D28D9",
  green500: "#22C55E",
  green600: "#16A34A",
  green700: "#15803D",
  amber500: "#F59E0B",
  amber600: "#D97706",
  amber700: "#B45309",
  red500: "#EF4444",
  red600: "#DC2626",
  red700: "#B91C1C",
  sky500: "#0EA5E9",
  sky600: "#0284C7",
  sky700: "#0369A1",
  // IVISA Brand Palette
  // Primary (Azul Prefeitura)
  ivisaPrimary50: "#EEF8FF",
  ivisaPrimary100: "#DCF1FF",
  ivisaPrimary200: "#B2E5FF",
  ivisaPrimary300: "#6DD1FF",
  ivisaPrimary400: "#20BAFF",
  ivisaPrimary500: "#00A1FF",
  ivisaPrimary600: "#0080DF",
  // Main Logo Color
  ivisaPrimary700: "#0065B4",
  ivisaPrimary800: "#005694",
  ivisaPrimary900: "#004A80",
  // Dark Logo Color
  ivisaPrimary950: "#002D51",
  // Secondary (Ciano/Teal - Apoio IVISA)
  ivisaSecondary50: "#F1F8FA",
  ivisaSecondary100: "#C5FFF9",
  ivisaSecondary200: "#8BFFF5",
  ivisaSecondary300: "#49FFEF",
  ivisaSecondary400: "#14EDE1",
  ivisaSecondary500: "#00D1C8",
  ivisaSecondary600: "#00A9A4",
  ivisaSecondary700: "#056A6A",
  ivisaSecondary800: "#0A5757",
  ivisaSecondary900: "#003436",
  // Semantic: Success (Green)
  ivisaSuccess50: "#E9FFE6",
  ivisaSuccess100: "#CCFFC8",
  ivisaSuccess200: "#9DFF97",
  ivisaSuccess300: "#60FB5B",
  ivisaSuccess400: "#2FF12A",
  ivisaSuccess500: "#0CDC0B",
  ivisaSuccess600: "#04AC06",
  ivisaSuccess700: "#08830C",
  ivisaSuccess800: "#105715",
  ivisaSuccess900: "#023106",
  // Semantic: Error (Red)
  ivisaError50: "#FFF0F0",
  ivisaError100: "#FFDDDD",
  ivisaError200: "#FFC0C0",
  ivisaError300: "#FF9494",
  ivisaError400: "#FF5757",
  ivisaError500: "#FF2323",
  ivisaError600: "#FF0000",
  ivisaError700: "#D70000",
  ivisaError800: "#B10303",
  ivisaError900: "#920A0A",
  ivisaError950: "#500000",
  // Semantic: Warning (Yellow/Gold)
  ivisaWarning50: "#FAFEE8",
  ivisaWarning100: "#F4FFC2",
  ivisaWarning200: "#EDFF87",
  ivisaWarning300: "#EBFF43",
  ivisaWarning400: "#F2FF0E",
  ivisaWarning500: "#ECEF03",
  ivisaWarning600: "#CEC000",
  ivisaWarning700: "#A48C04",
  ivisaWarning800: "#886D0B",
  ivisaWarning900: "#735810",
  ivisaWarning950: "#433005",
  // Gray (Alternative)
  ivisaGray50: "#F6F6F6",
  ivisaGray100: "#E7E7E7",
  ivisaGray200: "#D1D1D1",
  ivisaGray300: "#B0B0B0",
  ivisaGray400: "#888888",
  ivisaGray500: "#6D6D6D",
  ivisaGray600: "#5D5D5D",
  ivisaGray700: "#4F4F4F",
  ivisaGray800: "#454545",
  ivisaGray900: "#3D3D3D",
  ivisaGray950: "#262626",
  // Dark Blue Gray (Dark)
  ivisaDarkBlueGray100: "#DDEDF0",
  ivisaDarkBlueGray300: "#91C1CF",
  ivisaDarkBlueGray500: "#418199",
  ivisaDarkBlueGray700: "#314B59",
  ivisaDarkBlueGray900: "#263742",
  ivisaDarkBlueGray950: "#192833"
};
var spaceScale = {
  0: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  "2xl": 32,
  "3xl": 40,
  "4xl": 48,
  true: 12
  // default (md)
};
var sizeScale = {
  0: 0,
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56,
  "2xl": 64,
  "3xl": 80,
  true: 40
  // default (md)
};
var radiusScale = {
  none: 0,
  xs: 4,
  sm: 6,
  md: 10,
  lg: 14,
  xl: 20,
  full: 999
};
var zIndexScale = {
  base: 0,
  dropdown: 1e3,
  sticky: 1020,
  modal: 1100,
  popover: 1200,
  toast: 1300,
  true: 0
  // default (base)
};
var tokens = createTokens({
  color: {
    ...palette
  },
  space: spaceScale,
  size: sizeScale,
  radius: radiusScale,
  zIndex: zIndexScale
});
var lightColors = {
  background: palette.white,
  backgroundHover: palette.slate50,
  backgroundPress: palette.slate100,
  backgroundFocus: palette.slate100,
  backgroundStrong: palette.slate200,
  backgroundTransparent: palette.transparent,
  borderColor: palette.slate200,
  borderColorHover: palette.slate300,
  borderColorPress: palette.slate300,
  borderColorFocus: palette.violet500,
  color: palette.slate900,
  colorHover: palette.slate900,
  colorPress: palette.slate900,
  colorFocus: palette.slate900,
  colorTransparent: palette.transparent,
  placeholderColor: palette.slate500,
  shadowColor: "rgba(15,23,42,0.08)",
  shadowColorHover: "rgba(15,23,42,0.12)",
  primary: palette.violet500,
  primaryHover: palette.violet600,
  primaryPress: palette.violet700,
  primaryFocus: palette.violet700,
  primaryForeground: palette.white,
  secondary: palette.slate100,
  secondaryHover: palette.slate200,
  secondaryPress: palette.slate200,
  secondaryFocus: palette.slate300,
  secondaryForeground: palette.slate900,
  accent: "#EEF2FF",
  accentHover: "#E0E7FF",
  accentPress: "#C7D2FE",
  accentFocus: "#C7D2FE",
  accentForeground: "#312E81",
  destructive: palette.red500,
  destructiveHover: palette.red600,
  destructivePress: palette.red600,
  destructiveFocus: palette.red700,
  destructiveForeground: palette.white,
  success: palette.green500,
  successHover: palette.green600,
  successPress: palette.green600,
  successFocus: palette.green700,
  successForeground: palette.white,
  warning: palette.amber500,
  warningHover: palette.amber600,
  warningPress: palette.amber600,
  warningFocus: palette.amber700,
  warningForeground: palette.slate900,
  info: palette.sky500,
  infoHover: palette.sky600,
  infoPress: palette.sky600,
  infoFocus: palette.sky700,
  infoForeground: palette.white,
  muted: palette.slate100,
  mutedForeground: palette.slate500,
  ring: palette.violet500
};
var darkColors = {
  background: palette.slate900,
  backgroundHover: palette.slate800,
  backgroundPress: palette.slate800,
  backgroundFocus: palette.slate700,
  backgroundStrong: palette.slate800,
  backgroundTransparent: palette.transparent,
  borderColor: palette.slate700,
  borderColorHover: palette.slate600,
  borderColorPress: palette.slate600,
  borderColorFocus: palette.violet500,
  color: palette.slate100,
  colorHover: palette.white,
  colorPress: palette.white,
  colorFocus: palette.white,
  colorTransparent: palette.transparent,
  placeholderColor: palette.slate400,
  shadowColor: "rgba(15,23,42,0.45)",
  shadowColorHover: "rgba(15,23,42,0.55)",
  primary: palette.violet500,
  primaryHover: palette.violet600,
  primaryPress: palette.violet700,
  primaryFocus: palette.violet600,
  primaryForeground: palette.white,
  secondary: palette.slate800,
  secondaryHover: palette.slate700,
  secondaryPress: palette.slate700,
  secondaryFocus: palette.slate600,
  secondaryForeground: palette.slate100,
  accent: "#1E1B4B",
  accentHover: "#312E81",
  accentPress: "#3730A3",
  accentFocus: "#4338CA",
  accentForeground: palette.white,
  destructive: palette.red600,
  destructiveHover: palette.red500,
  destructivePress: palette.red500,
  destructiveFocus: palette.red700,
  destructiveForeground: palette.white,
  success: palette.green500,
  successHover: palette.green600,
  successPress: palette.green600,
  successFocus: palette.green700,
  successForeground: palette.white,
  warning: palette.amber500,
  warningHover: palette.amber600,
  warningPress: palette.amber600,
  warningFocus: palette.amber700,
  warningForeground: palette.slate900,
  info: palette.sky500,
  infoHover: palette.sky600,
  infoPress: palette.sky600,
  infoFocus: palette.sky700,
  infoForeground: palette.white,
  muted: palette.slate800,
  mutedForeground: palette.slate400,
  ring: palette.violet500
};

// src/theme/index.ts
import { createTheme } from "tamagui";
var lightTheme = createTheme({
  ...lightColors
});
var darkTheme = createTheme({
  ...darkColors
});
var themes = {
  light: lightTheme,
  dark: darkTheme
};

// ../../node_modules/.pnpm/@tamagui+font-inter@1.138.5_react-dom@18.3.1_react@18.3.1__react-native@0.82.1_@babel+core@7._nsst3cxjda36qtfqcm6ejzmj4a/node_modules/@tamagui/font-inter/dist/esm/index.mjs
import { createFont, getVariableValue, isWeb as isWeb4 } from "@tamagui/core";
var createInterFont = (font = {}, {
  sizeLineHeight = (size) => size + 10,
  sizeSize = (size) => size * 1
} = {}) => {
  const size = Object.fromEntries(Object.entries({
    ...defaultSizes,
    ...font.size
  }).map(([k, v]) => [k, sizeSize(+v)]));
  return createFont({
    family: isWeb4 ? 'Inter, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' : "Inter",
    lineHeight: Object.fromEntries(Object.entries(size).map(([k, v]) => [k, sizeLineHeight(getVariableValue(v))])),
    weight: {
      4: "300"
    },
    letterSpacing: {
      4: 0
    },
    ...font,
    size
  });
};
var defaultSizes = {
  1: 11,
  2: 12,
  3: 13,
  4: 14,
  true: 14,
  5: 16,
  6: 18,
  7: 20,
  8: 23,
  9: 30,
  10: 46,
  11: 55,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 134
};

// src/tamagui.config.ts
var headingFont = createInterFont();
var bodyFont = createInterFont();
var ceraProFont = createFont2({
  family: "Cera Pro",
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 32,
    8: 48,
    9: 64
  },
  lineHeight: {
    1: 16,
    2: 20,
    3: 24,
    4: 28,
    5: 32,
    6: 40,
    7: 48,
    8: 64,
    9: 80
  },
  weight: {
    4: "400",
    // Regular
    5: "500",
    // Medium
    9: "900"
    // Black
  },
  letterSpacing: {
    4: 0,
    7: -0.5,
    // Tighter for large titles
    9: -1
  },
  face: {
    400: { normal: "CeraPro-Regular" },
    500: { normal: "CeraPro-Medium" },
    900: { normal: "CeraPro-Black" }
  }
});
var animations = createAnimations({
  bouncy: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100
  },
  lazy: {
    type: "spring",
    damping: 20,
    stiffness: 60
  },
  quick: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250
  }
});
var config = createTamagui({
  // Animations
  animations,
  // Fonts
  fonts: {
    heading: headingFont,
    body: bodyFont,
    brandHeading: ceraProFont,
    brandBody: ceraProFont
  },
  // Tokens
  tokens,
  // Themes
  themes,
  // Media queries
  // These are the default media queries, useful for responsive design
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 661 },
    gtSm: { minWidth: 801 },
    gtMd: { minWidth: 1021 },
    gtLg: { minWidth: 1281 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" }
  },
  // Shorthands
  // These are CSS-like shorthands for common style properties
  shorthands: {
    ac: "alignContent",
    ai: "alignItems",
    als: "alignSelf",
    f: "flex",
    fb: "flexBasis",
    fd: "flexDirection",
    fg: "flexGrow",
    fs: "flexShrink",
    fw: "flexWrap",
    jc: "justifyContent",
    h: "height",
    m: "margin",
    mb: "marginBottom",
    ml: "marginLeft",
    mr: "marginRight",
    mt: "marginTop",
    mx: "marginHorizontal",
    my: "marginVertical",
    p: "padding",
    pb: "paddingBottom",
    pl: "paddingLeft",
    pr: "paddingRight",
    pt: "paddingTop",
    px: "paddingHorizontal",
    py: "paddingVertical",
    w: "width"
  }
});
var tamagui_config_default = config;

// src/providers/AppProviders.tsx
import { jsx as jsx32 } from "react/jsx-runtime";
var AppProviders = ({ theme = "light", children }) => /* @__PURE__ */ jsx32(TamaguiProvider, { config: tamagui_config_default, defaultTheme: theme, children: /* @__PURE__ */ jsx32(PortalProvider2, { shouldAddRootHost: true, children: /* @__PURE__ */ jsx32(ComponentErrorBoundary, { componentName: "AppProviders", children }) }) });
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  AppProviders,
  Avatar,
  AvatarFallback,
  AvatarFallbackComponent,
  AvatarImage,
  AvatarImageComponent,
  Badge,
  BadgeText,
  BarChart,
  Breadcrumb,
  Button,
  Calendar,
  CardFrame as Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Checkbox,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ComponentErrorBoundary,
  DataTable,
  DatePicker,
  Dialog,
  DialogClose,
  DialogContentComposite as DialogContent,
  DialogContentComposite,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  IndicatorArrow,
  Input,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  OTPInput,
  Pagination,
  Popover,
  PopoverAnchor,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  Progress,
  ProgressFrame,
  ProgressIndicator,
  RadioGroup,
  RadioGroupItem,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ScrollArea,
  Select,
  Separator,
  Sheet2 as Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHandle,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
  Sidebar,
  Skeleton,
  Slider,
  SliderFrame,
  SliderRange,
  SliderThumb,
  SliderTrack,
  Switch,
  SwitchComponent,
  SwitchFrameExport,
  SwitchThumbComponent,
  SwitchComponent as SwitchWithThumb,
  Table,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  ToastFrame as Toast,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewportFrame as ToastViewport,
  Toggle,
  ToggleGroupFrame as ToggleGroup,
  ToggleGroupItemFrame as ToggleGroupItem,
  Tooltip,
  tamagui_config_default as config,
  useFormField,
  useToast
};
