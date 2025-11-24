var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/tamagui.config.ts
var tamagui_config_exports = {};
__export(tamagui_config_exports, {
  shadcnColorTokens: () => shadcnColorTokens,
  shadcnDarkTheme: () => shadcnDarkTheme,
  shadcnLightTheme: () => shadcnLightTheme,
  shadcnRadiusTokens: () => shadcnRadiusTokens,
  tamaguiConfig: () => tamaguiConfig
});
module.exports = __toCommonJS(tamagui_config_exports);

// node_modules/.pnpm/tamagui@1.137.0_react-dom@18.3.1_react@18.3.1__react-native@0.82.1_@babel+core@7.28.5_@_9f261ecde3e233534f42c70a79523a29/node_modules/tamagui/dist/esm/createTamagui.mjs
var import_core = require("@tamagui/core");
var createTamagui = process.env.NODE_ENV !== "development" ? import_core.createTamagui : (conf) => {
  const sizeTokenKeys = ["$true"], hasKeys = /* @__PURE__ */ __name((expectedKeys, obj) => expectedKeys.every((k) => typeof obj[k] < "u"), "hasKeys"), tamaguiConfig2 = (0, import_core.createTamagui)(conf);
  for (const name of ["size", "space"]) {
    const tokenSet = tamaguiConfig2.tokensParsed[name];
    if (!tokenSet) throw new Error(`Expected tokens for "${name}" in ${Object.keys(tamaguiConfig2.tokensParsed).join(", ")}`);
    if (!hasKeys(sizeTokenKeys, tokenSet)) throw new Error(`
createTamagui() missing expected tokens.${name}:

Received: ${Object.keys(tokenSet).join(", ")}

Expected: ${sizeTokenKeys.join(", ")}

Tamagui expects a "true" key that is the same value as your default size. This is so 
it can size things up or down from the defaults without assuming which keys you use.

Please define a "true" or "$true" key on your size and space tokens like so (example):

size: {
  sm: 2,
  md: 10,
  true: 10, // this means "md" is your default size
  lg: 20,
}

`);
  }
  const expected = Object.keys(tamaguiConfig2.tokensParsed.size);
  for (const name of ["radius", "zIndex"]) {
    const tokenSet = tamaguiConfig2.tokensParsed[name], received = Object.keys(tokenSet);
    if (!received.some((rk) => expected.includes(rk))) throw new Error(`
createTamagui() invalid tokens.${name}:

Received: ${received.join(", ")}

Expected a subset of: ${expected.join(", ")}

`);
  }
  return tamaguiConfig2;
};

// src/tamagui.config.ts
var headingFont = {
  family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  size: {
    "$1": 12,
    "$2": 14,
    "$3": 16,
    "$4": 18,
    "$5": 20,
    "$6": 24,
    "$7": 28,
    "$8": 32
  },
  lineHeight: {
    "$1": 16,
    "$2": 18,
    "$3": 20,
    "$4": 22,
    "$5": 24,
    "$6": 28,
    "$7": 32,
    "$8": 36
  },
  weight: {
    "$1": "400",
    "$2": "500",
    "$3": "600",
    "$4": "700"
  }
};
var bodyFont = {
  family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  size: {
    "$1": 12,
    "$2": 13,
    "$3": 14,
    "$4": 16,
    "$5": 18,
    "$6": 20
  },
  lineHeight: {
    "$1": 16,
    "$2": 18,
    "$3": 20,
    "$4": 24,
    "$5": 26,
    "$6": 28
  },
  weight: {
    "$1": "400",
    "$2": "500",
    "$3": "600"
  }
};
var shadcnColorTokens = {
  background: "0 0% 100%",
  foreground: "222.2 47.4% 11.2%",
  muted: "210 40% 96.1%",
  mutedForeground: "215.4 16.3% 46.9%",
  borderColor: "214.3 31.8% 91.4%",
  input: "214.3 31.8% 91.4%",
  ring: "215 20.2% 65.1%",
  primary: "222.2 47.4% 11.2%",
  primaryForeground: "210 40% 98%",
  secondary: "210 40% 96.1%",
  secondaryForeground: "222.2 47.4% 11.2%",
  destructive: "0 100% 50%",
  destructiveForeground: "210 40% 98%",
  accent: "210 40% 96.1%",
  success: "#16a34a",
  warning: "#d97706",
  info: "#0284c7",
  popover: "0 0% 100%",
  popoverForeground: "222.2 47.4% 11.2%",
  card: "0 0% 100%",
  cardForeground: "222.2 47.4% 11.2%"
};
var shadcnRadiusTokens = {
  "$0": 0,
  "$1": 2,
  "$2": 4,
  "$3": 6,
  "$4": 8,
  "$5": 12,
  "$6": 16,
  "$7": 20,
  "$8": 999
};
var sizeTokens = {
  "$1": 4,
  "$2": 8,
  "$3": 12,
  "$4": 16,
  "$5": 20,
  "$6": 24,
  "$7": 32,
  "$8": 40,
  "$9": 48,
  "$10": 56
};
var spaceTokens = {
  "$0": 0,
  "$1": 4,
  "$2": 8,
  "$3": 12,
  "$4": 16,
  "$5": 20,
  "$6": 24,
  "$7": 32,
  "$8": 40,
  "$9": 48,
  "$10": 56,
  "$11": 64
};
var media = {
  xs: { maxWidth: 480 },
  sm: { maxWidth: 640 },
  md: { maxWidth: 768 },
  lg: { maxWidth: 1024 },
  xl: { maxWidth: 1280 }
};
var shadcnLightTheme = {
  background: "0 0% 100%",
  foreground: "222.2 47.4% 11.2%",
  muted: "210 40% 96.1%",
  mutedForeground: "215.4 16.3% 46.9%",
  borderColor: "214.3 31.8% 91.4%",
  input: "214.3 31.8% 91.4%",
  ring: "215 20.2% 65.1%",
  primary: "222.2 47.4% 11.2%",
  primaryForeground: "210 40% 98%",
  secondary: "210 40% 96.1%",
  secondaryForeground: "222.2 47.4% 11.2%",
  destructive: "0 100% 50%",
  destructiveForeground: "210 40% 98%",
  accent: "210 40% 96.1%",
  success: "#16a34a",
  warning: "#d97706",
  info: "#0284c7",
  popover: "0 0% 100%",
  popoverForeground: "222.2 47.4% 11.2%",
  card: "0 0% 100%",
  cardForeground: "222.2 47.4% 11.2%"
};
var shadcnDarkTheme = {
  background: "224 71% 4%",
  foreground: "213 31% 91%",
  muted: "223 47% 11%",
  mutedForeground: "215.4 16.3% 56.9%",
  borderColor: "216 34% 17%",
  input: "216 34% 17%",
  ring: "216 34% 17%",
  primary: "210 40% 98%",
  primaryForeground: "222.2 47.4% 1.2%",
  secondary: "222.2 47.4% 11.2%",
  secondaryForeground: "210 40% 98%",
  destructive: "0 63% 31%",
  destructiveForeground: "210 40% 98%",
  accent: "216 34% 17%",
  success: "#22c55e",
  warning: "#d97706",
  info: "#0284c7",
  popover: "224 71% 4%",
  popoverForeground: "215 20.2% 65.1%",
  card: "224 71% 4%",
  cardForeground: "213 31% 91%"
};
var tamaguiConfig = createTamagui({
  fonts: {
    heading: headingFont,
    body: bodyFont
  },
  tokens: {
    color: shadcnColorTokens,
    radius: shadcnRadiusTokens,
    size: sizeTokens,
    space: spaceTokens
  },
  themes: {
    light: shadcnLightTheme,
    dark: shadcnDarkTheme
  },
  media
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  shadcnColorTokens,
  shadcnDarkTheme,
  shadcnLightTheme,
  shadcnRadiusTokens,
  tamaguiConfig
});
