import path$3 from 'path';
import { config } from 'process';

const version = "1.0.12";
const author = "kux <kviewui@163.com>";
const repository = "https://gitcode.com/kviewui/kux-autocss";

const PACKAGE_VERSION = version;
const GIT_REPOSITORY_URL = repository ;
const AUTHOR = author ;
const NOW_DATE = formatDate(/* @__PURE__ */ new Date());
function formatDate(date2) {
  const year = date2.getFullYear();
  const month = (date2.getMonth() + 1).toString().padStart(2, "0");
  const day = date2.getDate().toString().padStart(2, "0");
  const hours = date2.getHours().toString().padStart(2, "0");
  const minutes = date2.getMinutes().toString().padStart(2, "0");
  const seconds = date2.getSeconds().toString().padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
const timestamp = Date.now();
const date = new Date(timestamp);
const CONFIG_CONTENT = (pluginOptions) => {
  let str = "";
  str += "/**\n";
  str += "* @description autocss config file\n";
  str += `* @version v${PACKAGE_VERSION}
`;
  str += `* @author ${AUTHOR}
`;
  str += `* @see ${GIT_REPOSITORY_URL}
`;
  str += `* @date ${formatDate(date)}
`;
  str += `* @copyright Copyright (c) ${date.getFullYear()} The Authors.
`;
  str += `* @license MIT License
`;
  str += `* Permission is hereby granted, free of charge, to any person obtaining a copy
`;
  str += `* of this software and associated documentation files (the "Software"), to deal
`;
  str += `* in the Software without restriction, including without limitation the rights
`;
  str += `* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
`;
  str += `* copies of the Software, and to permit persons to whom the Software is
`;
  str += `* furnished to do so, subject to the following conditions:
`;
  str += `* 
`;
  str += `* The above copyright notice and this permission notice shall be included in all
`;
  str += `* copies or substantial portions of the Software.
`;
  str += `* 
`;
  str += `* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
`;
  str += `* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
`;
  str += `* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
`;
  str += `* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
`;
  str += `* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
`;
  str += `* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
`;
  str += `* SOFTWARE.
`;
  str += `**/
`;
  str += `module.exports = {
`;
  str += `	beforeContent   : '${pluginOptions?.beforeContent ?? ""}', // css\u6587\u4EF6\u5934\u90E8\u6587\u672C
`;
  str += `	afterContent    : '${pluginOptions?.afterContent ?? ""}', // css\u6587\u4EF6\u7ED3\u675F\u7684\u6587\u672C
`;
  str += `	prefix          : '${pluginOptions?.prefix ?? ""}', // css\u524D\u7F00
`;
  str += `	prefixSeparator : '${pluginOptions?.prefixSeparator ?? ""}', // css\u524D\u7F00\u5206\u9694\u7B26\uFF0C\u6BD4\u5982css\u524D\u7F00\u4E3Akui\uFF0C\u5206\u9694\u7B26\u4E3A-\u7684\u8BDD\u5C06\u81EA\u52A8\u751F\u6210\u7C7B\u4F3Ckui-c-red\u683C\u5F0F\u7684\u4EE3\u7801
`;
  str += `	autoUseSnippets : ${pluginOptions?.autoUseSnippets || true}, // \u662F\u5426\u81EA\u52A8\u751F\u6210css\u4EE3\u7801\u63D0\u793A\u6587\u4EF6
`;
  str += `	cssSnippetsFile : '${pluginOptions?.cssSnippetsFile ?? "autocss.snippets.css"}', // CSS\u4EE3\u7801\u63D0\u793A\u6587\u4EF6\u4F4D\u7F6E
`;
  str += `	/**
`;
  str += `	 * \u989C\u8272\u914D\u7F6E \u9ED8\u8BA4\u5305\u542B\u5982\u4E0B\u503C
`;
  str += `	 * red          : '#F53F3F'
`;
  str += `	 * oranged      : '#F77234'
`;
  str += `	 * orange       : '#FF7D00'
`;
  str += `	 * gold         : '#F7BA1E'
`;
  str += `	 * yellow       : '#FADC19'
`;
  str += `	 * lime         : '#9FDB1D'
`;
  str += `	 * green        : '#00BC79'
`;
  str += `	 * cyan         : '#14C9C9'
`;
  str += `	 * blue         : '#3491FA'
`;
  str += `	 * deepblue     : '#165DFF'
`;
  str += `	 * purple       : '#722ED1'
`;
  str += `	 * pinkpurple   : '#D91AD9'
`;
  str += `	 * magenta      : '#F5319D'
`;
  str += `	 * grey         : '#86909C'
`;
  str += `	 * black        : '#000000'
`;
  str += `	 * white        : '#FFFFFF'
`;
  str += `	 * transparent  : 'transparent'
`;
  str += `	 * \u53EA\u9700\u8981\u914D\u7F6E\u989C\u8272\u7684\u53D8\u91CF\u503C\u5373\u53EF\uFF0C\u4F1A\u81EA\u52A8\u9002\u914D\u5230\u6240\u6709\u989C\u8272\u76F8\u5173\u5C5E\u6027\uFF0C\u5982 color-red bg-red bg-diy
`;
  str += `	 */
`;
  str += `	// colors       : {},
`;
  str += `	root            : '${pluginOptions?.root ?? "./"}', // \u5FC5\u586B\u9879\uFF0C\u6E90\u7801\u6839\u76EE\u5F55
`;
  str += `	cssFile          : '${pluginOptions?.cssFile ?? "style/auto.css"}', // \u5FC5\u586B\u9879\uFF0C\u81EA\u52A8\u751F\u6210\u7684css\u6587\u4EF6\u4F4D\u7F6E\uFF08\u4E0D\u5B58\u5728\u4F1A\u81EA\u52A8\u521B\u5EFA\u76EE\u5F55\u3010hbx \u53EF\u89C6\u5316\u521B\u5EFA\u7684\u9879\u76EE\u6682\u65F6\u4E0D\u4F1A\u81EA\u52A8\u521B\u5EFA\uFF0C\u9700\u8981\u624B\u52A8\u521B\u5EFA\u597D\u76EE\u5F55\u3011\uFF09
`;
  str += `	type            : 'uniapp', // \u5FC5\u586B\u9879\uFF0C\u9879\u76EE\u7C7B\u578B\uFF0C\u6682\u65F6\u56FA\u5B9A uniapp\u7C7B\u578B
`;
  str += `	extName         : ${pluginOptions?.extName ?? "['vue', 'nvue', 'uvue']"}, // \u53EF\u9009\u9879\uFF0C\u81EA\u52A8\u751F\u6210css\u65F6\u68C0\u7D22\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C\u53EF\u6839\u636E\u81EA\u5DF1\u7684\u9879\u76EE\u81EA\u7531\u8C03\u6574\uFF0C\u4E0D\u8FC7\u9700\u6CE8\u610F\u4E3A\u6570\u7EC4\u7C7B\u578B\u3002
`;
  str += `	unit            : '${pluginOptions?.unit ?? "px"}', // \u53EF\u9009\u9879\uFF0C\u9ED8\u8BA4\u5355\u4F4D px \u5982\u586B v \u5219\u5FC5\u987B\u914D\u5408 vToAny
`;
  str += `	
`;
  str += `	/**
`;
  str += `	 * \u81EA\u5B9A\u4E49\u89C4\u5219\uFF0C\u53EF\u590D\u5199\u9ED8\u8BA4\u89C4\u5219
`;
  str += `	 */
`;
  str += `	overrideRules   : ${pluginOptions?.overrideRules ?? "{}"},
`;
  str += `	
`;
  str += `	include         : ${pluginOptions?.include ? JSON.stringify(pluginOptions.include) : "[]"}, // \u53EF\u9009\u9879\uFF0C\u9700\u8981\u5904\u7406\u7684\u6587\u4EF6\u5217\u8868\uFF0C\u652F\u6301glob\u8BED\u6CD5\uFF0C\u5982 ['src/**/*.vue', '!src/components/ignore/**'], \u9ED8\u8BA4\u89C4\u5219\uFF1A['pages/**']
`;
  str += `	exclude         : ${pluginOptions?.exclude ? JSON.stringify(pluginOptions.exclude) : "[]"}, // \u53EF\u9009\u9879\uFF0C\u4E0D\u9700\u8981\u5904\u7406\u7684\u6587\u4EF6\u5217\u8868\uFF0C\u652F\u6301glob\u8BED\u6CD5\uFF0C\u5982 ['src/components/ignore/**'],

`;
  str += `	/**
`;
  str += `	 * \u81EA\u5B9A\u4E49\u5A92\u4F53\u67E5\u8BE2
`;
  str += `	 * \u53EF\u590D\u5199\u89C4\u5219\uFF0C\u4EE5\u4E0B\u4E3A\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5982 md@bg-red diy@bg-red
`;
  str += `	 * sm           : '(min-width: 640px)',
`;
  str += `	 * md           : '(min-width: 768px)',
`;
  str += `	 * lg           : '(min-width: 1024px)',
`;
  str += `	 * xl           : '(min-width: 1280px)'
`;
  str += `	 */
`;
  str += `	mediaQueries    : ${pluginOptions?.mediaQueries ?? "{}"},
`;
  str += `	/**
`;
  str += `	 * \u662F\u5426\u4E3A\u6240\u6709css \u6DFB\u52A0 important
`;
  str += `	 */
`;
  str += `	important       : ${pluginOptions?.important ?? false},

`;
  str += `	/**
`;
  str += `	 * \u53EF\u53D8\u5355\u4F4D v \u7684\u8F6C\u6362\u65B9\u5F0F
`;
  str += `	 * \u4F8B\u5982 w-10 => 10 / 16 => 0.625rem
`;
  str += `	 */
`;
  str += `	// vToAny          : {
`;
  str += `	//     unit: 'rem',
`;
  str += `	//     rootValue: 16, // \u8DDF\u5B57\u4F53\u5927\u5C0F\u6216\u57FA\u4E8E\u53C2\u6570\u8FD4\u56DE\u6839\u5143\u7D20\u5B57\u4F53\u5927\u5C0F 1px => 1/16rem
`;
  str += `	//     unitPrecision: 5, // \u5141\u8BB8\u5C0F\u6570\u5355\u4F4D\u7CBE\u5EA6
`;
  str += `	//     minPixelValue: 1 // \u4E0D\u4F1A\u88AB\u8F6C\u6362\u7684\u6700\u5C0F\u503C
`;
  str += `	// }
`;
  if (pluginOptions?.shortcuts) {
    str += `	/**
`;
    str += `	 * \u5FEB\u6377\u65B9\u5F0F
`;
    str += `	 */
`;
    str += `	shortcuts: ${JSON.stringify(pluginOptions.shortcuts)},
`;
  }
  str += `	/**
`;
  str += `	 * \u662F\u5426\u5F00\u542F\u8C03\u8BD5\u6A21\u5F0F\uFF0C\u5F00\u542F\u540E\u5C06\u8F93\u51FA\u8BE6\u7EC6\u7684\u65E5\u5FD7\u4FE1\u606F
`;
  str += `	 */
`;
  str += `	debug           : ${pluginOptions?.debug ?? true},
`;
  str += `	/**
`;
  str += `	 * \u662F\u5426\u751F\u6210\u5168\u5C40css\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u5F00\u542F
`;
  str += `	 */
`;
  str += `	generateGlobalCss : ${pluginOptions?.generateGlobalCss ?? true},
`;
  str += `}
`;
  return str;
};

const accDiv = (arg1, arg2) => {
  let t1 = 0;
  let t2 = 0;
  try {
    t1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    console.error(e);
  }
  try {
    t2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    console.error(e);
  }
  const r1 = Number(arg1.toString().replace(".", ""));
  const r2 = Number(arg2.toString().replace(".", ""));
  return r1 / r2 * Math.pow(10, t2 - t1);
};
const isFunction = (payload) => {
  return Object.prototype.toString.call(payload) === "[object Function]";
};
const isObject = (payload) => {
  return Object.prototype.toString.call(payload) === "[object Object]";
};
const isFraction = (num) => {
  const fractionRegex = /^-?\d+(\.\d+)?\/-?\d+(\.\d+)?$/;
  return fractionRegex.test(num);
};
function fractionToPercent(fractionStr) {
  const match = fractionStr.match(/^(-?\d+(?:\.\d+)?)(?:\/)(-?\d+(?:\.\d+)?)$/);
  if (!match) {
    throw new Error("Invalid fraction format");
  }
  const numerator = parseFloat(match[1]);
  const denominator = parseFloat(match[2]);
  if (denominator === 0) {
    throw new Error("Denominator cannot be zero");
  }
  const value = numerator / denominator;
  const percent = (value * 100).toFixed(10);
  return `${percent}`;
}
const groupBy = (array, name) => {
  const groups = {};
  array.forEach(function(o) {
    const group = JSON.stringify(o[name]);
    groups[group] = groups[group] || [];
    groups[group].push(o);
  });
  return Object.keys(groups).map(function(group) {
    return groups[group];
  });
};
const v2any = (num) => {
  num = Number(num);
  const { rootValue = 16, unitPrecision = 5, minPixelValue = 1 } = getConfig$1(V_TO_ANY);
  if (num < minPixelValue) {
    return num;
  }
  return Number(accDiv(num, rootValue).toFixed(unitPrecision));
};
const prefixStr = (isPrefix = getConfig$1(PREFIX)) => {
  return isPrefix ? `${getConfig$1(PREFIX)}${getConfig$1(PREFIX_SEPARATOR)}` : "";
};
const regex = /^\\!|!$/;
const toRegexImportant = (className) => regex.test(className);
const getExtName = (url) => {
  const path = require("path");
  const pathWithoutQuery = url.split("?")[0];
  const extension = path.extname(pathWithoutQuery).substring(1);
  return extension;
};
const getRoot = (config) => {
  return process.env.UNI_INPUT_DIR || config.root || process.cwd();
};

const fs$4 = require("fs");
const path$2 = require("path");
let programConfig = {
  [OVERRIDE_RULES]: {}
};
const runType = {
  uniapp: {
    [EXT_NAME]: ["vue"],
    reg: /(?:(?<=class=(["']))[\s\S]*?(?=\1))|((?<=class={)[\s\S]*?(?=}))/gi
  }
};
const getConfig$1 = (str, options) => {
  switch (str) {
    case EXT_NAME:
      return programConfig[EXT_NAME] || programConfig[programConfig.type] || runType[programConfig.type][EXT_NAME];
    case GLOB_REG:
      return runType[programConfig.type || "uniapp"].reg;
    case COLORS:
      return programConfig[COLORS] || {};
    case UNIT:
      return programConfig[UNIT] || "px";
    case MEDIA_QUERIES:
      return programConfig[MEDIA_QUERIES] || {};
    case IMPORTANT:
      return programConfig[IMPORTANT] === void 0 ? true : programConfig[IMPORTANT];
    case BEFORE_CONTENTS:
      return programConfig[BEFORE_CONTENTS] || "/* stylelint-disable */";
    case PREFIX:
      return programConfig[PREFIX] || "";
    case PREFIX_SEPARATOR:
      return programConfig[PREFIX] ? programConfig[PREFIX_SEPARATOR] || "-" : "";
    case AUTO_USE_SNIPPETS:
      return programConfig[AUTO_USE_SNIPPETS] || false;
    default:
      return programConfig[str];
  }
};
const setConfig = (config) => {
  programConfig = config;
  return programConfig;
};
const getUnit = (number, str) => {
  if (+number === 0) {
    return "";
  }
  if (str === "p") {
    return "%";
  }
  if (!str) {
    return programConfig[UNIT] || "px";
  }
  return str;
};
const getFilePath = (str, config, options) => {
  return path$2.resolve(getRoot(config), options?.root ?? "", str);
};
const readConfigFile = (config, pluginOptions2) => {
  let options = null;
  const configFile = pluginOptions2?.configFile ?? CONFIG_FILE_NAME;
  if (fs$4.existsSync(getFilePath(configFile, config, pluginOptions2))) {
    options = require(getFilePath(configFile, config, pluginOptions2));
    const cssFilePath = getFilePath(options.cssFile, config, pluginOptions2);
    if (!fs$4.existsSync(cssFilePath) && options["generateGlobalCss"]) {
      fs$4.writeFileSync(cssFilePath, "");
    }
  } else {
    throw new Error(`\u8BF7\u5148\u521B\u5EFAautocss\u914D\u7F6E\u6587\u4EF6\uFF1A${configFile}\u3002`);
  }
  return options;
};

const colorStore = () => ({
  red: "#F53F3F",
  orangered: "#F77234",
  orange: "#FF7D00",
  gold: "#F7BA1E",
  yellow: "#FADC19",
  lime: "#9FDB1D",
  green: "#00BC79",
  cyan: "#14C9C9",
  blue: "#3491FA",
  deepblue: "#165DFF",
  purple: "#722ED1",
  pinkpurple: "#D91AD9",
  magenta: "#F5319D",
  grey: "#86909c",
  black: "#000",
  white: "#FFF",
  transparent: "transparent",
  ...getConfig$1(COLORS)
});
const getColors = () => {
  return colorStore();
};
const getColorsKey = () => {
  return Object.keys(colorStore());
};
const radix16 = (value) => {
  return parseInt(value, 16);
};
const textToRgbText = (str, opacity = 1) => {
  const hex = /^#?([a-fA-F0-9]{8}|[a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(str) ? str.replace(/^#/, "") : colorStore()[str].replace(/^#/, "");
  if (hex === "transparent") {
    return "transparent";
  }
  if (hex.length === 6) {
    const reg = /[a-fA-F0-9]{2}/g;
    return "rgba(" + hex.match(reg).map(radix16).join(",") + `,${opacity})`;
  }
  if (hex.length === 3) {
    return "rgba(" + hex.split("").map((x) => radix16(x.repeat(2))).join(",") + `,${opacity})`;
  }
  if (hex.length === 8) {
    const reg = /[a-fA-F0-9]{2}/g;
    let [r, g, b, a] = hex.match(reg);
    a = Number(Number(Math.round(parseInt(a, 16)) / 255).toFixed(2));
    return "rgba(" + [r, g, b].map(radix16).join(",") + `,${a})`;
  }
  return "";
};
const getColorValue = (color, opacity = 100) => {
  const opacityValue = (opacity * 0.01).toFixed(2);
  return textToRgbText(color, Number(opacityValue));
};
const changeConsoleColor = (input, color_code = 92, bg_color_code = 105) => {
  const bg_color_code_str = bg_color_code > 0 ? `;${bg_color_code}` : "";
  const color_code_str = `${color_code}`;
  if (bg_color_code > 0) {
    return `\x1B[${color_code_str}${bg_color_code_str}m${input}\x1B[0m`;
  }
  return `\x1B[${color_code_str}m${input}\x1B[0m`;
};
function consolePrint(input, theme = "info") {
  switch (theme) {
    case "danger":
      console.info(changeConsoleColor(input, 31));
      break;
    case "success":
      console.info(changeConsoleColor(input, 32));
      break;
    case "warning":
      console.info(changeConsoleColor(input, 33));
      break;
    case "link":
      console.info(changeConsoleColor(input, 34));
      break;
    default:
      console.info(changeConsoleColor(input, 37));
  }
}

const toRegexStr = (_) => _.join("|");
const COLORS = "colors";
const ROOT = "root";
const UNIT = "unit";
const IMPORTANT = "important";
const GLOB_REG = "globReg";
const V_TO_ANY = "vToAny";
const BEFORE_CONTENTS = "beforeContent";
const AFTER_CONTENT = "afterContent";
const EXT_NAME = "extName";
const OVERRIDE_RULES = "overrideRules";
const MEDIA_QUERIES = "mediaQueries";
const CONFIG_FILE_NAME = "autocss.config.js";
const CSS_FILE_NAME = "style/auto.css";
const CSS_FILE = "cssFile";
const ROOT_DIR = "./";
const PREFIX = "prefix";
const PREFIX_SEPARATOR = "prefixSeparator";
const AUTO_USE_SNIPPETS = "autoUseSnippets";
const CSS_SNIPPETS_FILE = "cssSnippetsFile";
const COLORS_NAME_PRESET = getColorsKey();
const DISPLAY_ENUM = ["flex", "none", "hidden"];
const JUSTIFY_CONTENT_ENUM = ["center", "flex-start", "flex-end", "space-between", "space-around", "between", "start", "end", "around"];
const ALIGN_ITEMS_ENUM = ["center", "flex-start", "flex-end", "stretch", "baseline", "start", "end"];
const UNIT_ENUM = ["fr", "px", "rpx", "upx", "em", "rem", "cap", "ch", "cm", "cqb", "cqh", "cqi", "cqmax", "cqmin", "cqw", "dvb", "dvh", "dvi", "dvw", "ex", "ic", "in", "lh", "lvb", "lvh", "lvi", "lvw", "mm", "pc", "pt", "q", "rcap", "rch", "rex", "ric", "rlh", "svb", "svh", "svi", "svw", "vb", "vh", "vi", "vmax", "vmin", "vw", "p", "v"];
const CURSOR_ENUM = ["auto", "default", "none", "context-menu", "help", "pointer", "progress", "wait", "cell", "crossshair", "text", "vertical-text", "alias", "copy", "move", "no-drop", "not-allowed", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out"];
const GAP_ENUM = ["inherit", "initial", "revert", "revert-layer", "unset"];
const VERTICAL_ALIGN_ENUM = ["baseline", "sub", "super", "text-top", "text-bottom", "middle", "top", "bottom", "inherit", "initial", "unset"];
const PSEUDO_ENUM = ["active", "any-link", "blank", "checked", "current", "default", "defined", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "host", "hover", "indeterminate", "in-range", "invalid", "last-child", "last-of-type", "left", "link", "local-link", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited"];
const FLEX_DIRECTION_NAME_ENUM = ["flex-direction", "flex"];
const FLEX_DIRECTION_ENUM = ["row", "row-reverse", "column", "col", "column-reverse", "col-reverse"];
toRegexStr(FLEX_DIRECTION_NAME_ENUM);
toRegexStr(FLEX_DIRECTION_ENUM);
const TEXT_ALIGN_NAME_ENUM = ["text-align", "text"];
const TEXT_ALIGN_ENUM = ["left", "right", "center", "justify", "start", "end", "match-parent"];
const TEXT_ALIGN_NAME_STR = toRegexStr(TEXT_ALIGN_NAME_ENUM);
const TEXT_ALIGN_STR = toRegexStr(TEXT_ALIGN_ENUM);
const ALIGN_CONTENT_NAME_ENUM = ["align-content", "content"];
const ALIGN_CONTENT_ENUM = ["start", "end", "center", "between", "around", "stretch", "normal"];
const ALIGN_CONTENT_NAME_STR = toRegexStr(ALIGN_CONTENT_NAME_ENUM);
const ALIGN_CONTENT_STR = toRegexStr(ALIGN_CONTENT_ENUM);
const ALIGN_SELF_NAME_ENUM = ["align-self", "self"];
const ALIGN_SELF_ENUM = ["auto", "start", "end", "center", "baseline", "stretch"];
toRegexStr(ALIGN_SELF_NAME_ENUM);
toRegexStr(ALIGN_SELF_ENUM);
const BACKGROUND_CLIP_NAME_ENUM = ["bg-clip"];
const BACKGROUND_CLIP_ENUM = ["border", "padding", "content"];
const BACKGROUND_CLIP_NAME_STR = toRegexStr(BACKGROUND_CLIP_NAME_ENUM);
const BACKGROUND_CLIP_STR = toRegexStr(BACKGROUND_CLIP_ENUM);
const BOX_SHADOW_SIZE_ENUM = ["sm", "", "md", "lg", "xl", "2xl", "inner", "none"];
const BOX_SHADOW_SIZE_STR = toRegexStr(BOX_SHADOW_SIZE_ENUM);
const BOX_SHADOW_SIZE_MAP = /* @__PURE__ */ new Map();
BOX_SHADOW_SIZE_MAP.set("sm", "0 1px 2px 0 rgb(0 0 0 / 0.05)");
BOX_SHADOW_SIZE_MAP.set("", "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)");
BOX_SHADOW_SIZE_MAP.set("md", "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)");
BOX_SHADOW_SIZE_MAP.set("lg", "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)");
BOX_SHADOW_SIZE_MAP.set("xl", "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)");
BOX_SHADOW_SIZE_MAP.set("2xl", "0 25px 50px -12px rgb(0 0 0 / 0.25)");
BOX_SHADOW_SIZE_MAP.set("inner", "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)");
BOX_SHADOW_SIZE_MAP.set("none", "0 0 #0000");
const FLEX_FLOW_NAME_ENUM = ["flex-flow", "flow", "ff"];
const FLEX_FLOW_DIRECTION_ENUM = ["row", "row-reverse", "column", "col", "column-reverse", "col-reverse"];
const FLEX_FLOW_WRAP_ENUM = ["nowrap", "wrap", "wrap-reverse"];
const FLEX_FLOW_NAME_STR = toRegexStr(FLEX_FLOW_NAME_ENUM);
const FLEX_FLOW_DIRECTION_STR = toRegexStr(FLEX_FLOW_DIRECTION_ENUM);
const FLEX_FLOW_WRAP_STR = toRegexStr(FLEX_FLOW_WRAP_ENUM);
const TEXT_DECORATION_STYLE_VALUE_ENUM = ["solid", "double", "dotted", "dashed", "wavy"];
const TEXT_DECORATION_STYLE_VALUE_STR = toRegexStr(TEXT_DECORATION_STYLE_VALUE_ENUM);
const TRANSITION_PROPERTY_VALUE_ENUM = ["all", "none", "width", "height", "margin", "margin-top", "margin-bottom", "margin-left", "margin-right", "left", "right", "top", "bottom", "orientation", "padding", "padding-left", "padding-right", "padding-top", "padding-bottom", "opacity", "background-color", "border-color", "border-top-color", "border-bottom-color", "border-left-color", "border-right-color", "colors", "transform"];
const TRANSITION_PROPERTY_VALUE_STR = toRegexStr(TRANSITION_PROPERTY_VALUE_ENUM);
const TRANSITION_TIMING_FUNCTION_VALUE_ENUM = ["linear", "in", "out", "in-out"];
const TRANSITION_TIMING_FUNCTION_VALUE_STR = toRegexStr(TRANSITION_TIMING_FUNCTION_VALUE_ENUM);
const TEXT_OVERFLOW_VALUE_ENUM = ["clip", "ellipsis"];
const TEXT_OVERFLOW_VALUE_STR = toRegexStr(TEXT_OVERFLOW_VALUE_ENUM);
const WHITE_SPACE_VALUE_ENUM = ["normal", "nowrap", "pre", "pre-wrap", "pre-line", "break-spaces"];
const WHITE_SPACE_VALUE_STR = toRegexStr(WHITE_SPACE_VALUE_ENUM);
const DISPLAY_STR = toRegexStr(DISPLAY_ENUM);
const PSEUDO_STR = toRegexStr(PSEUDO_ENUM);
const JUSTIFY_CONTENT_STR = toRegexStr(JUSTIFY_CONTENT_ENUM);
const ALIGN_ITEMS_STR = toRegexStr(ALIGN_ITEMS_ENUM);
const CURSOR_STR = toRegexStr(CURSOR_ENUM);
const UNIT_STR = toRegexStr(UNIT_ENUM);
const VERTICAL_ALIGN_STR = toRegexStr(VERTICAL_ALIGN_ENUM);
const GAP_STR = toRegexStr(GAP_ENUM);
let CSS_ANNOTATION = "";
CSS_ANNOTATION += "/* \n";
CSS_ANNOTATION += `  @see ${GIT_REPOSITORY_URL}
`;
CSS_ANNOTATION += `  @version: v${version}
`;
CSS_ANNOTATION += `  @author ${AUTHOR}
`;
CSS_ANNOTATION += `  ${NOW_DATE}
`;
CSS_ANNOTATION += "  \u8BE5\u6587\u4EF6\u5C06\u4F1A\u81EA\u52A8\u521D\u59CB\u5316\u5E76\u66F4\u65B0\uFF0C\u5207\u52FF\u76F4\u63A5\u4FEE\u6539\uFF01\n";
CSS_ANNOTATION += "*/\n\n";
const BASE_MEDIA_QUERY = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)"
};
const BASE_MEDIA_QUERY_KEY = Object.keys(BASE_MEDIA_QUERY);
const NONNEGATIVE_NUMBER_REGEX_STR = "(0|([1-9]\\d*))(\\.\\d*[1-9])?(?:\\/([1-9]\\d*))?";
const DIRECTION_MAP = /* @__PURE__ */ new Map();
DIRECTION_MAP.set(void 0, [""]);
DIRECTION_MAP.set("x", ["left", "right"]);
DIRECTION_MAP.set("y", ["top", "bottom"]);
DIRECTION_MAP.set("t", ["top"]);
DIRECTION_MAP.set("b", ["bottom"]);
DIRECTION_MAP.set("l", ["left"]);
DIRECTION_MAP.set("r", ["right"]);
DIRECTION_MAP.set("top", ["top"]);
DIRECTION_MAP.set("bottom", ["bottom"]);
DIRECTION_MAP.set("left", ["left"]);
DIRECTION_MAP.set("right", ["right"]);
const RADIUS_DIRECTION_MAP = /* @__PURE__ */ new Map();
RADIUS_DIRECTION_MAP.set(void 0, [""]);
RADIUS_DIRECTION_MAP.set("t", ["top-left", "top-right"]);
RADIUS_DIRECTION_MAP.set("b", ["bottom-left", "bottom-right"]);
RADIUS_DIRECTION_MAP.set("l", ["top-left", "bottom-left"]);
RADIUS_DIRECTION_MAP.set("r", ["top-right", "bottom-right"]);
RADIUS_DIRECTION_MAP.set("tl", ["top-left"]);
RADIUS_DIRECTION_MAP.set("tr", ["top-right"]);
RADIUS_DIRECTION_MAP.set("bl", ["bottom-left"]);
RADIUS_DIRECTION_MAP.set("br", ["bottom-right"]);
RADIUS_DIRECTION_MAP.set("top", ["top-left", "top-right"]);
RADIUS_DIRECTION_MAP.set("bottom", ["bottom-left", "bottom-right"]);
RADIUS_DIRECTION_MAP.set("left", ["top-left", "bottom-left"]);
RADIUS_DIRECTION_MAP.set("right", ["top-right", "bottom-right"]);
const GRADIENT_DIRECTION_MAP = /* @__PURE__ */ new Map();
GRADIENT_DIRECTION_MAP.set("t", "top");
GRADIENT_DIRECTION_MAP.set("b", "bottom");
GRADIENT_DIRECTION_MAP.set("l", "left");
GRADIENT_DIRECTION_MAP.set("r", "right");
const SCALE_DIRECTION_MAP = /* @__PURE__ */ new Map();
SCALE_DIRECTION_MAP.set(void 0, "scale");
SCALE_DIRECTION_MAP.set("x", "scaleX");
SCALE_DIRECTION_MAP.set("y", "scaleY");
const ROTATE_DIRECTION_MAP = /* @__PURE__ */ new Map();
ROTATE_DIRECTION_MAP.set(void 0, "rotate");
ROTATE_DIRECTION_MAP.set("x", "rotateX");
ROTATE_DIRECTION_MAP.set("y", "rotateY");
ROTATE_DIRECTION_MAP.set("z", "rotateZ");
const TRANSLATE_DIRECTION_MAP = /* @__PURE__ */ new Map();
TRANSLATE_DIRECTION_MAP.set(void 0, "translate");
TRANSLATE_DIRECTION_MAP.set("x", "translateX");
TRANSLATE_DIRECTION_MAP.set("y", "translateY");
const TRANSFORM_ORIGIN_DIRECTION_MAP = /* @__PURE__ */ new Map();
TRANSFORM_ORIGIN_DIRECTION_MAP.set("b", "bottom");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("bottom", "bottom");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("l", "left");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("left", "left");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("r", "right");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("right", "right");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("t", "top");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("top", "top");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("c", "center");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("center", "center");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("bc", "bottom center");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("bottom-center", "bottom center");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("bl", "bottom left");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("bottom-left", "bottom left");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("br", "bottom right");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("bottom-right", "bottom right");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("cl", "center left");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("center-left", "center left");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("cr", "center right");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("center-right", "center right");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("cb", "center bottom");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("center-bottom", "center bottom");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("cc", "center center");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("center-center", "center center");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("ct", "center top");
TRANSFORM_ORIGIN_DIRECTION_MAP.set("center-top", "center top");

const fs$3 = require("fs");
const fsSync$1 = fs$3.promises;
const genInitConfig = async (config, options) => {
  const outputPath = getFilePath(options?.configFile ?? "./autocss.config.js", config, options);
  const dirPath = path$3.dirname(outputPath);
  if (!fs$3.existsSync(dirPath)) {
    fsSync$1.mkdir(dirPath);
  }
  if (!fs$3.existsSync(outputPath)) {
    try {
      await fsSync$1.writeFile(outputPath, CONFIG_CONTENT(options));
      if (options?.debug) {
        consolePrint("autocss config write complete", "success");
      }
    } catch (err) {
      if (err.code === "EACCES") {
        try {
          await fsSync$1.chmod(outputPath, 438);
          await fsSync$1.writeFile(outputPath, CONFIG_CONTENT(options));
          if (options?.debug) {
            consolePrint("autocss config write complete", "success");
          }
        } catch (chmodErr) {
          throw chmodErr;
        }
      } else {
        throw err;
      }
    }
  } else {
    if (options?.debug) {
      consolePrint("autocss config already exists, skipping write", "warning");
    }
  }
};
const initCssDir = async (config, options) => {
  const outputPath = getFilePath(options?.cssFile ?? CSS_FILE_NAME, config, options);
  const cssDirPath = path$3.dirname(outputPath);
  if (!fs$3.existsSync(cssDirPath) && options?.generateGlobalCss) {
    await fsSync$1.mkdir(cssDirPath, { recursive: true });
  }
};

let preArray = [];
const queryObj = {};
const pushPreObj = (obj) => {
  return preArray.push(obj);
};
const pushQuery = (key, obj) => {
  if (Object.prototype.hasOwnProperty.call(queryObj, key)) {
    queryObj[key].push(obj);
  } else {
    queryObj[key] = [obj];
  }
};
const isImportant = () => getConfig$1(IMPORTANT);
const getCssSingle = ({ classStr, isPrefixStr, css, pseudo }) => {
  classStr = classStr.replace(/([@:#.])/g, "\\$1");
  if (pseudo) {
    classStr = classStr + `:${pseudo}`;
  }
  let cssPrefix = prefixStr(isPrefixStr);
  let isImportantSingle = () => {
    if (!isImportant()) {
      return toRegexImportant(classStr);
    }
    return true;
  };
  return css.reduce((t, c) => t + (isImportantSingle() ? `${c} !important; ` : `${c}; `), `.${cssPrefix}${classStr}{ `) + "}";
};
const sortCss = (a, b) => {
  if (a !== void 0 && b !== void 0) {
    return Number(a.num) - Number(b.num);
  } else {
    return 0;
  }
};
const renderArray = (array) => {
  let cssStr = "";
  const cssObject = groupBy(array.sort((a, b) => a.order - b.order), "name");
  for (const key in cssObject) {
    if (Object.prototype.hasOwnProperty.call(cssObject, key)) {
      cssStr += `/* ${cssObject[key][0].name || "unknow name"} */
`;
      cssStr += cssObject[key].sort(sortCss).map(getCssSingle).join("\n");
      cssStr += "\n";
    }
  }
  return cssStr;
};
const renderCss = () => {
  let cssStr = "";
  cssStr += renderArray(preArray);
  const queryConfigObj = { ...BASE_MEDIA_QUERY, ...getConfig$1(MEDIA_QUERIES) };
  for (const key in queryObj) {
    if (Object.prototype.hasOwnProperty.call(queryObj, key)) {
      cssStr += `@media ${queryConfigObj[key]}{
`;
      cssStr += renderArray(queryObj[key]);
      cssStr += "}";
    }
  }
  return cssStr;
};

const alignItems = {
  regExp: new RegExp(`^(?<important1>!?)?(items|align-items)-(?<align>${ALIGN_ITEMS_STR})?(?<important2>!?)$`),
  render: function({ groups }) {
    let { align } = groups;
    if (["start", "flex-start"].includes(align)) {
      align = "flex-start";
    }
    if (["end", "flex-end"].includes(align)) {
      align = "flex-end";
    }
    return { name: "alignItems", css: [`align-items: ${align}`] };
  }
};

const getCss = (direction, num, unit) => {
  return DIRECTION_MAP.get(direction).reduce((t, c) => {
    if (c) {
      return [...t, `border-${c}-width: ${num}${unit}`];
    } else {
      return [...t, `border-width: ${num}${unit}`];
    }
  }, []);
};
const border = {
  regExp: new RegExp(`^(?<important1>!?)?(border|border-width|border-w)-((?<direction>[trblxy])-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?(?<important2>!?)?$`),
  render({ groups }) {
    const { direction, num, unit } = groups;
    return {
      name: direction ? `border-${direction}` : "border",
      num,
      css: getCss(direction, num, unit)
    };
  }
};

const borderRadius = {
  regExp: new RegExp(`^(?<important1>!?)?(border-radius|br|rounded)-((?<direction>[trbl]|tl|tr|bl|br)-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?(?<important2>!?)?$`),
  render: function({ groups }) {
    const { num, unit, direction } = groups;
    let css = [];
    if (direction) {
      css = RADIUS_DIRECTION_MAP.get(direction).reduce((t, c) => [...t, `border-${c}-radius: ${num}${unit}`], []);
    } else {
      css = [`border-radius: ${num}${unit}`];
    }
    return {
      name: "borderRadius",
      num,
      css
    };
  }
};

const borderStyle = {
  regExp: /^(?<important1>!?)?(border-style|border)-((?<direction>[trblxy])-)?(?<value>none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit)?(?<important2>!?)$/,
  render({ groups }) {
    const { value, direction } = groups;
    let css = [];
    if (direction) {
      css = DIRECTION_MAP.get(direction).reduce((t, c) => {
        return [...t, `border-${c}-style: ${value}`];
      }, []);
    } else {
      css = [`border-style: ${value}`];
    }
    return {
      name: "borderStyle",
      css
    };
  }
};

const boxSizing = {
  regExp: /^(?<important1>!?)?box-(?<value>content|border)?(?<important2>!?)$/,
  render: function({ groups }) {
    const { value } = groups;
    return {
      name: "boxSizing",
      css: [`box-sizing: ${value}-box`]
    };
  }
};

const circle = {
  regExp: /^circle$/,
  render: function() {
    return {
      name: "circle",
      css: ["border-radius: 50%"]
    };
  }
};

const colors = {
  regExp: () => new RegExp(
    `^(?<important1>!?)?(?<type>color|c|text|bg|background|border-color|border-c|border)-((?<direction>[trblxy])-)?(?<color>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${getColorsKey().join("|")})(-(?<opacity>1|([1-9]\\d?)))?(?<important2>!?)?$`
  ),
  render({ groups }) {
    let { type, color, themeColor, opacity, direction } = groups;
    color = getColorValue(color, opacity);
    let prefix = "";
    switch (type) {
      case "c":
      case "color":
      case "text":
        prefix = "color";
        break;
      case "bg":
      case "background":
        prefix = "background-color";
        break;
      case "border":
      case "border-c":
      case "border-color":
        prefix = "border-color";
        if (direction) {
          prefix = `border-${DIRECTION_MAP.get(direction)[0]}-color`;
        }
        break;
      default:
        prefix = type;
        break;
    }
    return {
      name: "colors",
      css: [`${prefix}: ${color}`]
    };
  }
};

const columnGap = {
  regExp: new RegExp(`^(?<important1>!?)?c(olumn|ol)?-gap-(((?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?)|(?<value>${GAP_STR}))?(?<important2>!?)$`),
  render: function({ groups }) {
    let { num = Infinity, unit, value } = groups;
    if (!value) {
      value = num + unit;
    }
    return {
      name: "column-gap",
      css: [`column-gap: ${value}`]
    };
  }
};

const cursor = {
  regExp: new RegExp(`^(?<important1>!?)?cursor-(?<value>${CURSOR_STR})?(?<important2>!?)$`),
  render({ groups }) {
    const { value } = groups;
    return {
      name: "cursor",
      css: [`cursor: ${value}`]
    };
  }
};

const display = {
  // regExp: new RegExp(`^((display|d)-(?<value>${DISPLAY_STR}))`),
  regExp: new RegExp(`^!?(?<displayType1>${DISPLAY_STR})(?![^!])|!?((display|d)-(?<displayType2>${DISPLAY_STR}))!?$`),
  render: function({ groups }) {
    let { displayType1, displayType2 } = groups;
    let value = displayType1 ?? displayType2;
    if (value == "hidden") {
      value = "none";
    }
    return {
      name: "display",
      css: [`display: ${value}`]
    };
  }
};

const flexBasis = {
  regExp: new RegExp(`^!?(flex-basis|basis)-(?<value>((?<num>${NONNEGATIVE_NUMBER_REGEX_STR}|full)(?<unit>${UNIT_STR})?)|initial|inherit|auto)!?$`),
  render: function({ groups }) {
    let { value, num, unit } = groups;
    if (num) {
      value = `${num}${unit}`;
      if (num === "full") {
        value = "100%";
      }
    }
    return {
      name: "flex-basis",
      css: [`flex-basis: ${value}`]
    };
  }
};

const flexDirection = {
  regExp: /^!?(flex-direction|flex)-(?<value>row|row-reverse|column|col|column-reverse|col-reverse)!?$/,
  // regExp: new RegExp(`^(${FLEX_DIRECTION_NAME_STR})-(?<value>${FLEX_DIRECTION_STR})`),
  render({ groups }) {
    let { value } = groups;
    value = value.replace("col", "column");
    return {
      name: "flex-direction",
      css: [`flex-direction: ${value}`]
    };
  }
};

const flexNum = {
  regExp: /^!?flex-(?<value>null|auto|none|(0|[1-9]\d*))!?$/,
  render({ groups }) {
    let { value, extName } = groups;
    if (value == 1) {
      if (["nvue", "uvue"].includes(extName)) {
        value = 1;
      } else {
        value = "1 1 0%";
      }
    }
    return {
      name: "flex",
      css: [`flex: ${value}`]
    };
  }
};

const flexShrinkAndGrow = {
  regExp: /^!?(flex-|)?(?<type>shrink|grow)-(?<value>(0|[1-9]\d*)|initial|inherit)!?$/,
  render: function({ groups }) {
    const { type, value } = groups;
    return {
      name: type === "shrink" ? "flexShrink" : "flexGrow",
      css: [`flex-${type}: ${value}`]
    };
  }
};

const flexWrap = {
  regExp: /^!?(flex-wrap|flex)-(?<value>inherit|initial|nowrap|wrap|wrap-reverse)!?$/,
  render: function({ groups }) {
    const { value } = groups;
    return {
      name: "flex-wrap",
      css: [`flex-wrap: ${value}`]
    };
  }
};

const fontSize = {
  regExp: new RegExp(`^(?<important1>!?)?(font-size|fs|text)-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?(?<important2>!?)$`),
  // regExp: /^(font-size|fs|text)-(?<num>\d+(\.\d+)?)(?<unit>[a-zA-Z%]*)?(?<important>!?)$/,
  render({ groups }) {
    const { num, unit } = groups;
    return {
      name: "font-size",
      css: [`font-size: ${num}${unit}`]
    };
  }
};

const fontWeight = {
  regExp: /^!?(font-weight|fw|font)-(?<value>[1-9]00|bold|bolder|inherit|initial|lighter|normal|unset)!?$/,
  render: function({ groups }) {
    const { value } = groups;
    return {
      name: "font-weight",
      css: [`font-weight: ${value}`]
    };
  }
};

const gap = {
  regExp: new RegExp(`^!?gap-(((?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?)!?|(?<value>${GAP_STR}))!?$`),
  render({ groups }) {
    let { num = Infinity, unit, value } = groups;
    if (!value) {
      value = num + unit;
    }
    return {
      name: "gap",
      css: [`column-gap: ${value}`, `row-gap: ${value}`]
    };
  }
};

const height = {
  regExp: new RegExp(`^!?(h|height)-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?!?$`),
  render: function({ groups }) {
    const { num = 0, unit } = groups;
    return {
      name: "height",
      css: [`height: ${num}${unit}`]
    };
  }
};

const justifyContent = {
  regExp: new RegExp(`^!?(justify|justify-content)-(?<justify>${JUSTIFY_CONTENT_STR})!?$`),
  render({ groups }) {
    let { justify } = groups;
    if (["between", "space-between"].includes(justify)) {
      justify = "space-between";
    }
    if (["start", "flex-start"].includes(justify)) {
      justify = "flex-start";
    }
    if (["end", "flex-end"].includes(justify)) {
      justify = "flex-end";
    }
    if (["around", "space-around"].includes(justify)) {
      justify = "space-around";
    }
    return {
      name: "justify-content",
      css: [`justify-content: ${justify}`]
    };
  }
};

const letterSpacing = {
  regExp: new RegExp(`^!?(letter-spacing|tracking)-(?<isMinus>(m-|-))?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?!?$`),
  render: function({ groups }) {
    let { isMinus, num, unit } = groups;
    if (isMinus) {
      num = 0 - num;
    }
    return {
      name: "letter-spacing",
      num,
      css: [`letter-spacing: ${num}${unit}`]
    };
  }
};

const lineHeight = {
  regExp: new RegExp(`^!?(lh|line-height|leading)-(?<value>((?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?)|normal|unset|inherit|initial)!?$`),
  render({ groups }) {
    const { value, num = Infinity, unit } = groups;
    const base = { name: "lineHeight" };
    if (num !== Infinity) {
      return { ...base, num, css: [`line-height: ${num}${unit}`] };
    }
    return { ...base, num, css: [`line-height: ${value}`] };
  }
};

const getConfig = (type, direction) => {
  let name = "";
  if (type === "m" || type === "margin") {
    name += "margin";
  }
  if (type === "p" || type === "padding") {
    name += "padding";
  }
  if (direction) {
    name += `-${direction}`;
  }
  return { name };
};
const marginAndPadding = {
  regExp: new RegExp(`^!?(?<type>m|margin|p|padding)(-|)((?<direction>[trblxy])-)?((?<auto>auto)|(?<isMinus>(m-|-))?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?)!?$`),
  render({ groups }) {
    let { type, direction, isMinus, num, unit, auto } = groups;
    if (auto) {
      unit = "";
      num = "auto";
    }
    if (isMinus) {
      num = 0 - num;
    }
    const baseConfig = getConfig(type, direction);
    if (type === "m") {
      type = "margin";
    }
    if (type === "p") {
      type = "padding";
    }
    return {
      ...baseConfig,
      num,
      css: DIRECTION_MAP.get(direction).reduce((t, c) => [...t, c ? `${type}-${c}: ${num}${unit}` : `${type}: ${num}${unit}`], [])
    };
  }
};

const maxHeight = {
  regExp: new RegExp(`!?^(max-h|max-height)-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?!?$`),
  render({ groups }) {
    const { num, unit } = groups;
    return { name: "max-height", num, css: [`max-height: ${num}${unit}`] };
  }
};

const maxWidth = {
  regExp: new RegExp(`^!?(max-w|max-width)-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?!?$`),
  render({ groups }) {
    const { num, unit } = groups;
    return { name: "max-width", num, css: [`max-width: ${num}${unit}`] };
  }
};

const minHeight = {
  regExp: new RegExp(`^!?(min-h|min-height)-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?!?$`),
  render({ groups }) {
    const { num, unit } = groups;
    return { name: "min-height", num, css: [`min-height: ${num}${unit}`] };
  }
};

const minWidth = {
  regExp: new RegExp(`^!?(min-w|min-width)-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?!?$`),
  render({ groups }) {
    const { num, unit } = groups;
    return { name: "min-width", num, css: [`min-width: ${num}${unit}`] };
  }
};

const objectFit = {
  regExp: /^!?(object-fit)-(?<value>fill|contain|cover|none|scale-down|inherit|initial|revert|unset)!?$/,
  render({ groups }) {
    const { value } = groups;
    return {
      name: "objectFit",
      order: Infinity,
      css: [`object-fit: ${value}`]
    };
  }
};

const opacity = {
  regExp: /^!?(opacity|op)-(?<value>([1-9]?\d|100))!?$/,
  render({ groups }) {
    const { value } = groups;
    return { name: "opacity", order: Infinity, num: value, css: [`opacity: ${Number((value / 100).toFixed(2))}`] };
  }
};

const orientation = {
  regExp: new RegExp(`^!?(inset-)?(?<direction>[trblxy]|top|right|bottom|left)-(?<isMinus>m-|-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR}|a)(?<unit>${UNIT_STR})?!?$`),
  render({ groups }) {
    let { direction, isMinus, num, unit } = groups;
    if (num === "a") {
      num = "auto";
      unit = "";
    }
    if (isMinus && num !== "a") {
      num = 0 - num;
    }
    let css = [];
    if (direction.length) {
      css = DIRECTION_MAP.get(direction).reduce((acc, cur) => [...acc, `${cur}: ${num}${unit}`], []);
    }
    return { name: "orientation", num, css };
  }
};

const overflow = {
  regExp: /^!?(overflow|of)(-(?<direction>[xy]))?-(?<value>hidden|auto|visible|scroll|inherit|clip)!?$/,
  render({ groups }) {
    const { direction, value } = groups;
    const base = { name: "overflow" };
    if (!direction) {
      return { ...base, css: [`overflow: ${value}`] };
    }
    if (direction === "x") {
      return { ...base, css: [`overflow-x: ${value}`] };
    }
    if (direction === "y") {
      return { ...base, css: [`overflow-y: ${value}`] };
    }
  }
};

const position = {
  regExp: /^!?(position-|)(?<value>static|relative|sticky|unset|absolute|fixed|inherit|initial)!?$/,
  render({ groups }) {
    const { value } = groups;
    return {
      name: "position",
      css: [`position: ${value}`]
    };
  }
};

const rowGap = {
  regExp: new RegExp(`^!?r(ow)?-gap-(((?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?)|(?<value>${GAP_STR}))!?$`),
  render({ groups }) {
    let { num = Infinity, unit, value } = groups;
    if (!value) {
      value = num + unit;
    }
    return { name: "row-gap", num, css: [`row-gap: ${value}`] };
  }
};

const square = {
  className: "square",
  regExp: new RegExp(`^!?square-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?!?$`),
  render({ groups }) {
    const { num, unit } = groups;
    return { name: "square", num, css: [`width: ${num}${unit}`, `height: ${num}${unit}`] };
  }
};

const textAlign = {
  // regExp: /^(text-align|text)-(?<value>start|end|left|right|center|justify|match-parent)$/,
  regExp: new RegExp(`^!?(${TEXT_ALIGN_NAME_STR})-(?<value>${TEXT_ALIGN_STR})!?$`),
  render({ groups }) {
    const { value } = groups;
    return {
      name: "textAlign",
      css: [`text-align: ${value}`]
    };
  }
};

const textAlignLast = {
  regExp: /^!?(text-align-last|text-last)-(?<value>auto|left|right|center|justify|start|end|initial|inherit)!?$/,
  render({ groups }) {
    const { value } = groups;
    return {
      name: "textAlignLast",
      css: [`text-align-last: ${value}`]
    };
  }
};

const textDecoration = {
  regExp: /^!?(text-decoration|text)-(?<value>none|underline|overline|line-through|blink|inherit)!?$/,
  render({ groups }) {
    const { value } = groups;
    return {
      name: "textDecoration",
      css: [`text-decoration-line: ${value}`]
    };
  }
};

const textEllipsis = {
  regExp: /^!?(text-ellipsis|ellipsis)-(?<value>[1-9]\d*)?!?$/,
  render({ groups }) {
    let { value, extName } = groups;
    const base = { name: "ellipsis" };
    if (["uvue", "nvue"].includes(extName)) {
      return {
        ...base,
        num: value,
        css: []
      };
    }
    if (Number(value) === 1) {
      value = void 0;
    }
    if (value === void 0) {
      return {
        ...base,
        num: 0,
        css: [
          "overflow: hidden",
          "text-overflow: ellipsis",
          "white-space: nowrap"
        ]
      };
    } else {
      return {
        ...base,
        num: value,
        css: [
          "overflow: hidden",
          "text-overflow: ellipsis",
          "display: -webkit-box",
          `-webkit-line-clamp: ${value}`,
          "-webkit-box-orient: vertical"
        ]
      };
    }
  }
};

const userSelect = {
  regExp: /^!?(user-)?select-(?<value>none|auto|text|all|contain|element)!?$/,
  render({ groups }) {
    const { value } = groups;
    return {
      name: "userSelect",
      css: [`user-select: ${value}`]
    };
  }
};

const verticalAlign = {
  regExp: new RegExp(`^!?vertical-align-(?<value>((?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?)|${VERTICAL_ALIGN_STR})!?$`),
  render({ groups }) {
    let { value, num, unit } = groups;
    if (num) {
      value = `${num}${unit}`;
    }
    return {
      name: "verticalAlign",
      css: [`vertical-align: ${value}`]
    };
  }
};

const width = {
  regExp: new RegExp(`^!?(w|width)-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})(?<unit>${UNIT_STR})?!?$`),
  render({ groups }) {
    const { num, unit } = groups;
    return { name: "width", num, css: [`width: ${num}${unit}`] };
  }
};

const wordBreak = {
  regExp: /^!?word-break-(?<value>normal|break-all|keep-all|break-word|inherit|initial|unset)!?$/,
  render({ groups }) {
    const { value } = groups;
    return {
      name: "wordBreak",
      css: [`word-break: ${value}`]
    };
  }
};

const zIndex = {
  regExp: /^!?(z-index|z)-(?<isMinus>(m-|-))?(?<value>0|[1-9]\d*)!?$/,
  render({ groups }) {
    let { isMinus, value } = groups;
    if (isMinus) {
      value = 0 - value;
    }
    return { name: "zIndex", num: value, css: [`z-index: ${value}`] };
  }
};

const list = ["visible", "collapse", "inherit", "initial", "revert", "unset"];
const visibility = {
  regExp: new RegExp(`^!?(visibility-|)(?<value>${toRegexStr(list)})!?$`),
  render({ groups }) {
    const { value } = groups;
    return { name: "visibility", css: [`visibility: ${value}`] };
  }
};

const fontFamily = {
  regExp: /^!?font-(?<value>sans|serif|mono|cursive|fantasy|monospace|sans-serif)!?$/,
  render({ groups }) {
    const { value = "sans", extName } = groups;
    let fontFamily = "";
    if (value === "mono") {
      fontFamily = `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
    } else if (value === "serif") {
      fontFamily = `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`;
      if (extName === "uvue") {
        fontFamily = value;
      }
    } else if (value === "sans") {
      fontFamily = `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;
    } else {
      fontFamily = value;
    }
    return {
      name: "fontFamily",
      css: [`font-family: ${fontFamily}`]
    };
  }
};

const alignContent = {
  regExp: new RegExp(`^(?<important1>!?)?(${ALIGN_CONTENT_NAME_STR})-(?<content>${ALIGN_CONTENT_STR})?(?<important2>!?)$`),
  render: function({ groups }) {
    const { content } = groups;
    let prefix = "";
    if (["start", "end"].includes(content)) {
      prefix = "flex-";
    }
    if (["between", "around"].includes(content)) {
      prefix = "space-";
    }
    return {
      name: "alignContent",
      css: [`align-content: ${prefix}${content}`]
    };
  }
};

const backgroundClip = {
  regExp: new RegExp(`^(?<important1>!?)?${BACKGROUND_CLIP_NAME_STR}-(?<value>${BACKGROUND_CLIP_STR})?(?<important2>!?)$`),
  render: function({ groups }) {
    const { value } = groups;
    return {
      name: "backgroundClip",
      css: [`background-clip: ${value}-box`]
    };
  }
};

const backgroundImage = {
  regExp: new RegExp(`^(?<important1>!?)?bg-(gradient|lg)-(?<direction>[trbl]{1,2})-(?<shape>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${getColorsKey().join("|")})(-(?<shapeOpacity>1|([1-9]\\d?)))?-(?<stops>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${getColorsKey().join("|")})(-(?<stopsOpacity>1|([1-9]\\d?)))?(?<important2>!?)?$`),
  render({ groups }) {
    const { direction = "r", shape = "white", shapeOpacity = 100, stops = "white", stopsOpacity = 100 } = groups;
    const directionArr = [...direction].reduce((ac, cu) => {
      return [...ac, GRADIENT_DIRECTION_MAP.get(cu)];
    }, []);
    return {
      name: "backgroundImage",
      css: [`background-image: linear-gradient(to ${directionArr.join(" ")}, ${getColorValue(shape, shapeOpacity)}, ${getColorValue(stops, stopsOpacity)})`]
    };
  }
};

const boxShadow = {
  regExp: new RegExp(`^(?<important1>!?)?(shadow-|shadow)(?<value>${BOX_SHADOW_SIZE_STR})?(?<important2>!?)$`),
  render({ groups }) {
    const { value = "" } = groups;
    return {
      name: "boxShadow",
      css: [`box-shadow: ${BOX_SHADOW_SIZE_MAP.get(value)}`]
    };
  }
};

const flexFlow = {
  regExp: new RegExp(`^!?${FLEX_FLOW_NAME_STR}-(?<direction>${FLEX_FLOW_DIRECTION_STR})-(?<wrap>${FLEX_FLOW_WRAP_STR})!?$`),
  render({ groups }) {
    let { direction, wrap } = groups;
    if (["col-reverse", "col"].includes(direction)) {
      direction = direction.replace("col", "column");
    }
    return {
      name: "flexFlow",
      css: [`flex-flow: ${direction} ${wrap}`]
    };
  }
};

const fontStyle = {
  regExp: new RegExp(`^!?(font-|)?(?<value>italic|not-italic)!?$`),
  render({ groups }) {
    let { value } = groups;
    if (value === "not-italic") {
      value = "normal";
    }
    return {
      name: "fontStyle",
      css: [`font-style: ${value}`]
    };
  }
};

const lines = {
  regExp: new RegExp(`^!?lines-(?<num>${NONNEGATIVE_NUMBER_REGEX_STR})!?$`),
  render({ groups }) {
    const { num } = groups;
    return {
      name: "lines",
      css: [`lines: ${num}`]
    };
  }
};

const pointerEvents = {
  regExp: new RegExp(`^!?(pointer-events|pe)-(?<value>auto|none)!?$`),
  render({ groups }) {
    const { value } = groups;
    return {
      name: "pointerEvents",
      css: [`pointer-events: ${value}`]
    };
  }
};

const textDecorationColor = {
  regExp: new RegExp(`^!?decoration-(?<color>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${getColorsKey().join("|")})(-(?<opacity>1|([1-9]\\d?)))?!?$`),
  render({ groups }) {
    const { color, opacity } = groups;
    const colorValue = getColorValue(color, opacity);
    return {
      name: "textDecorationColor",
      css: [`text-decoration-color: ${colorValue}`]
    };
  }
};

const textDecorationStyle = {
  regExp: new RegExp(`^!?decoration-(?<value>${TEXT_DECORATION_STYLE_VALUE_STR})!?$`),
  render({ groups }) {
    const { value } = groups;
    return {
      name: "textDecorationStyle",
      css: [`text-decoration-style: ${value}`]
    };
  }
};

const textDecorationThickness = {
  regExp: new RegExp(`^!?decoration-(?<num>(auto|from-font|${NONNEGATIVE_NUMBER_REGEX_STR}))(?<unit>${UNIT_STR})?!?$`),
  render({ groups }) {
    const { num = "auto", unit } = groups;
    return {
      name: "textDecorationThickness",
      css: [`text-decoration-thickness: ${num}${!["auto", "from-font"].includes(num) ? unit : ""}`]
    };
  }
};

const scale = {
  regExp: new RegExp(`^!?scale(-?(?<direction>[xy])?-)(?<angle>(\\d+))!?$`),
  render({ groups }) {
    const { direction, angle } = groups;
    return {
      name: "scale",
      css: [`transform: ${SCALE_DIRECTION_MAP.get(direction)}(${angle / 100})`]
    };
  }
};

const rotate = {
  regExp: new RegExp(`!?rotate(-?(?<direction>[xyz])?-)(?<isMinus>m-|-)?(?<deg>(\\d+))!?$`),
  render({ groups }) {
    let { direction, isMinus, deg } = groups;
    if (isMinus) {
      deg = -deg;
    }
    return {
      name: "rotate",
      css: [`transform: ${ROTATE_DIRECTION_MAP.get(direction)}(${deg}deg)`]
    };
  }
};

const translate = {
  regExp: new RegExp(`^!?translate(-?(?<direction>[xy])?-)(?<isMinus>m-|-)?(?<num>${NONNEGATIVE_NUMBER_REGEX_STR}|full)(?<unit>${UNIT_STR})?!?$`),
  render({ groups }) {
    let { direction, isMinus, num, unit } = groups;
    if (num === "full") {
      num = "100%";
      unit = "";
    }
    if (isFraction(num)) {
      unit = "";
    }
    if (isMinus && num !== "full") {
      num = 0 - num;
    }
    return {
      name: "translate",
      css: [`transform: ${TRANSLATE_DIRECTION_MAP.get(direction)}(${num}${unit})`]
    };
  }
};

const transformOrigin = {
  regExp: new RegExp(`^!?origin-(?<direction>(${Array.from(TRANSFORM_ORIGIN_DIRECTION_MAP.keys()).join("|")}))!?$`),
  render({ groups }) {
    const { direction } = groups;
    return {
      name: "transformOrigin",
      css: [`transform-origin: ${TRANSFORM_ORIGIN_DIRECTION_MAP.get(direction)}`]
    };
  }
};

const transitionProperty = {
  regExp: new RegExp(`^!?transition(-?(?<property>(${TRANSITION_PROPERTY_VALUE_STR})?))!?$`),
  render({ groups }) {
    const { property } = groups;
    let propertyValue = property;
    if (!property) {
      propertyValue = "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter";
    }
    if (property === "colors") {
      propertyValue = "color, background-color, border-color, text-decoration-color, border-top-color, border-bottom-color, border-left-color, border-right-color";
    }
    if (property === "orientation") {
      propertyValue = "top, bottom, left, right";
    }
    let css = [`transition-property: ${propertyValue}`, "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)", "transition-duration: 150ms"];
    if (property === "none") {
      css = [`transition-property: ${propertyValue}`];
    }
    return {
      name: "transitionProperty",
      css
    };
  }
};

const transitionDuration = {
  regExp: new RegExp(`^!?duration-(?<num>\\d+)!?$`),
  render({ groups }) {
    const { num } = groups;
    return {
      name: "transitionDuration",
      css: [`transition-duration: ${num}ms`]
    };
  }
};

const transitionTimingFunction = {
  regExp: new RegExp(`^!?(ease|transition-ease)(-?(?<value>${TRANSITION_TIMING_FUNCTION_VALUE_STR})?)!?$`),
  render({ groups }) {
    let { value } = groups;
    if (["in", "out", "in-out"].includes(value)) {
      value = `ease-${value}`;
    }
    if (!value) {
      value = "ease";
    }
    return {
      name: "transitionTimingFunction",
      css: [`transition-timing-function: ${value}`]
    };
  }
};

const transitionDelay = {
  regExp: new RegExp(`^!?(transition-delay|delay)-(?<num>\\d+)!?$`),
  render({ groups }) {
    const { num } = groups;
    return {
      name: "transitionDelay",
      css: [`transition-delay: ${num}ms`]
    };
  }
};

const whiteSpace = {
  regExp: new RegExp(`^!?(whitespace|ws)-(?<value>${WHITE_SPACE_VALUE_STR})!?$`),
  render({ groups }) {
    const { value } = groups;
    return {
      name: "whiteSpace",
      css: [`white-space: ${value}`]
    };
  }
};

const textOverflow = {
  regExp: new RegExp(`^!?(((text|to)-(?<value>${TEXT_OVERFLOW_VALUE_STR}))|(?<value2>truncate))!?$`),
  render({ groups }) {
    const { value, extName, value2 } = groups;
    let base = [];
    if (value2 === "truncate") {
      base.push(`overflow: hidden`, `text-overflow: ellipsis`);
      if (extName !== "nvue") {
        base.push(`white-space: nowrap`);
      }
    } else {
      base.push(`text-overflow: ${value}`);
    }
    return {
      name: "textOverflow",
      css: base
    };
  }
};

const rules = {
  __proto__: null,
  alignContent: alignContent,
  alignItems: alignItems,
  backgroundClip: backgroundClip,
  backgroundImage: backgroundImage,
  border: border,
  borderRadius: borderRadius,
  borderStyle: borderStyle,
  boxShadow: boxShadow,
  boxSizing: boxSizing,
  circle: circle,
  colors: colors,
  columnGap: columnGap,
  cursor: cursor,
  display: display,
  flexBasis: flexBasis,
  flexDirection: flexDirection,
  flexFlow: flexFlow,
  flexNum: flexNum,
  flexShrinkAndGrow: flexShrinkAndGrow,
  flexWrap: flexWrap,
  fontFamily: fontFamily,
  fontSize: fontSize,
  fontStyle: fontStyle,
  fontWeight: fontWeight,
  gap: gap,
  height: height,
  justifyContent: justifyContent,
  letterSpacing: letterSpacing,
  lineHeight: lineHeight,
  lines: lines,
  marginAndPadding: marginAndPadding,
  maxHeight: maxHeight,
  maxWidth: maxWidth,
  minHeight: minHeight,
  minWidth: minWidth,
  objectFit: objectFit,
  opacity: opacity,
  orientation: orientation,
  overflow: overflow,
  pointerEvents: pointerEvents,
  position: position,
  rotate: rotate,
  rowGap: rowGap,
  scale: scale,
  square: square,
  textAlign: textAlign,
  textAlignLast: textAlignLast,
  textDecoration: textDecoration,
  textDecorationColor: textDecorationColor,
  textDecorationStyle: textDecorationStyle,
  textDecorationThickness: textDecorationThickness,
  textEllipsis: textEllipsis,
  textOverflow: textOverflow,
  transformOrigin: transformOrigin,
  transitionDelay: transitionDelay,
  transitionDuration: transitionDuration,
  transitionProperty: transitionProperty,
  transitionTimingFunction: transitionTimingFunction,
  translate: translate,
  userSelect: userSelect,
  verticalAlign: verticalAlign,
  visibility: visibility,
  whiteSpace: whiteSpace,
  width: width,
  wordBreak: wordBreak,
  zIndex: zIndex
};

const modifyUtils = { textToRgbText, getColorsKey, getColors, UNIT_STR, NONNEGATIVE_NUMBER_REGEX_STR, DIRECTION_MAP };
const cssSet = /* @__PURE__ */ new Set();
const handleCssPipe = /* @__PURE__ */ new Set();
let currentExtName = "";
let shortCutObj = /* @__PURE__ */ new Map();
const hasShortcut = (shortcuts) => {
  if (!shortcuts)
    return false;
  if (isObject(shortcuts))
    return "object";
  if (Array.isArray(shortcuts))
    return "array";
  return false;
};
const filterShortCutObject = (shortcut, item) => {
  if (Object.keys(shortcut).includes(item)) {
    const classArr = shortcut[item].split(" ");
    shortCutObj.set(item, shortcut[item]);
    filterCustomClassByName(item, classArr);
  } else {
    filterClass(item);
  }
};
const filterClassNames = (str, extName = "uvue") => {
  currentExtName = extName;
  let classNameList = str.match(getConfig$1(GLOB_REG)) ?? [];
  const shortcuts = getConfig$1("shortcuts");
  if (classNameList) {
    classNameList.forEach((hasClassNameStr) => {
      const className = hasClassNameStr.replace(/[^a-zA-Z0-9-@:#./!]/g, " ");
      className.split(" ").forEach((item) => {
        if (hasShortcut(shortcuts) === "object") {
          filterShortCutObject(shortcuts, item);
        } else if (hasShortcut(shortcuts) === "array") {
          shortcuts.forEach((shortcut) => {
            if (isObject(shortcut)) {
              filterShortCutObject(shortcut, item);
            } else if (Array.isArray(shortcut)) {
              const [pattern, replacer] = shortcut;
              if (pattern.test(item)) {
                const generatedClassStr = item.replace(pattern, replacer);
                let dymamicShortcut = {};
                dymamicShortcut[item] = "";
                generatedClassStr.split(" ").forEach((classItem) => {
                  if (shortCutObj.get(classItem)) {
                    dymamicShortcut[item] += shortCutObj.get(classItem);
                  } else {
                    dymamicShortcut[item] += " " + classItem;
                  }
                });
                if (dymamicShortcut[item]) {
                  filterShortCutObject(dymamicShortcut, item);
                }
              }
            }
          });
        } else {
          filterClass(item);
        }
      });
    });
  }
  return "";
};
const filterCustomClassByName = (className, classArr) => {
  let isPrefixStr = false;
  let cssArr = [];
  let queryCssArr = [];
  classArr.forEach((classStr) => {
    let query;
    let pseudo;
    let source = classStr;
    const queryNames = [...BASE_MEDIA_QUERY_KEY, ...Object.keys(getConfig$1(MEDIA_QUERIES))];
    const v2anyConfig = getConfig$1(V_TO_ANY);
    const isV2any = isObject(v2anyConfig);
    if (/[@:]/.test(classStr)) {
      const queryAndPesudoRegex = new RegExp(`^(?:(?<query>${queryNames.join("|")})@)?(?:(?<pseudo>${PSEUDO_STR}):)?(?<source>[^:@]+)$`);
      const res = classStr.match(queryAndPesudoRegex);
      if (!res) {
        return null;
      }
      const { groups = null } = res;
      if (!groups) {
        return null;
      }
      ({ query, pseudo, source } = groups);
    }
    const ruleList = Object.values({ ...rules, ...getConfig$1(OVERRIDE_RULES) });
    for (let i = 0; i < ruleList.length; i++) {
      let rule = ruleList[i];
      rule = isFunction(rule) ? rule(modifyUtils) : rule;
      const reg = isFunction(rule.regExp) ? rule.regExp() : rule.regExp;
      const res = source.match(reg);
      if (res !== null) {
        let { unit, num } = res.groups || {};
        if (isFraction(num)) {
          unit = "p";
          num = fractionToPercent(num);
          if (res.groups && isObject(res.groups)) {
            res.groups.num = num;
          }
        }
        const unit1 = getUnit(num, unit);
        if (res.groups && isObject(res.groups)) {
          if (isV2any && unit1 === "v" && num) {
            Object.assign(res.groups, {
              num: v2any(parseInt(num)),
              unit: v2anyConfig.unit
            });
          } else {
            Object.assign(res.groups, { unit: unit1 });
          }
        }
        if (res.groups) {
          res.groups.extName = currentExtName;
        }
        let renderResult = rule.render(res);
        handleCssPipe.forEach((handle) => {
          renderResult = handle(renderResult);
        });
        if (query) {
          queryCssArr.push({
            query,
            css: [...renderResult.css]
          });
        } else {
          cssArr.push(...renderResult.css);
        }
      }
    }
  });
  let params = {
    classStr: className,
    isPrefixStr,
    name: "shortcuts",
    css: []
  };
  params.classStr = params.classStr.replace(/\//g, "\\/");
  params.classStr = params.classStr.replace(/\!/g, "\\!");
  if (classArr.length > 0) {
    params.css = [...cssArr];
  }
  pushPreObj(params);
};
const filterClass = (classStr) => {
  let newClassStr = classStr;
  let isPrefixStr = false;
  if (getConfig$1(PREFIX).length > 0) {
    let str = classStr.split(`${getConfig$1(PREFIX)}${getConfig$1(PREFIX_SEPARATOR)}`)[1];
    if (str) {
      isPrefixStr = true;
      newClassStr = str;
    }
  }
  if (cssSet.has(newClassStr)) {
    return null;
  }
  let query;
  let pseudo;
  let source = newClassStr;
  const queryNames = [...BASE_MEDIA_QUERY_KEY, ...Object.keys(getConfig$1(MEDIA_QUERIES))];
  const v2anyConfig = getConfig$1(V_TO_ANY);
  const isV2any = isObject(v2anyConfig);
  if (/[@:]/.test(newClassStr)) {
    const queryAndPesudoRegex = new RegExp(`^(?:(?<query>${queryNames.join("|")})@)?(?:(?<pseudo>${PSEUDO_STR}):)?(?<source>[^:@]+)$`);
    const res = newClassStr.match(queryAndPesudoRegex);
    if (!res) {
      return null;
    }
    const { groups = null } = res;
    if (!groups) {
      return null;
    }
    ({ query, pseudo, source } = groups);
  }
  cssSet.add(newClassStr);
  const ruleList = Object.values({ ...rules, ...getConfig$1(OVERRIDE_RULES) });
  for (let i = 0; i < ruleList.length; i++) {
    let rule = ruleList[i];
    rule = isFunction(rule) ? rule(modifyUtils) : rule;
    const reg = isFunction(rule.regExp) ? rule.regExp() : rule.regExp;
    const res = source.match(reg);
    if (res !== null) {
      let { unit, num } = res.groups || {};
      if (isFraction(num)) {
        unit = "p";
        num = fractionToPercent(num);
        res.groups.num = num;
      }
      const unit1 = getUnit(num, unit);
      if (isObject(res.groups)) {
        if (isV2any && unit1 === "v" && num) {
          Object.assign(res.groups, {
            num: v2any(num),
            unit: v2anyConfig.unit
          });
        } else {
          Object.assign(res.groups, { unit: unit1 });
        }
      }
      if (res.groups) {
        res.groups.extName = currentExtName;
      }
      let renderResult = rule.render(res);
      handleCssPipe.forEach((handle) => {
        renderResult = handle(renderResult);
      });
      const params = {
        classStr: newClassStr,
        isPrefixStr,
        ...renderResult,
        pseudo
      };
      params.classStr = params.classStr.replace(/\//g, "\\/");
      params.classStr = params.classStr.replace(/\!/g, "\\!");
      if (query) {
        pushQuery(query, params);
      } else {
        pushPreObj(params);
      }
      break;
    }
  }
};

const fs$2 = require("fs");
const fsSync = fs$2.promises;
const path$1 = require("path");
const NUM_ENUM = [1, 2];
const NUM_WIDTH_UNIT = [1, 2, "1p", "1rem", "1rpx", "1vh", "1px"];
const COLORS_OPACITY_ENUM = ["", "-65", "-85"];
const getRegList = () => {
  const cssPrefix = prefixStr(true);
  return [
    {
      className: "widthOrHeight",
      render() {
        let widthOrHeight = "";
        ["w", "h"].forEach((d) => {
          NUM_ENUM.forEach((n) => {
            UNIT_ENUM.forEach((u) => {
              widthOrHeight += `.${cssPrefix}${d}-${n}${u}{}`;
            });
          });
        });
        return widthOrHeight;
      }
    },
    {
      className: "square",
      render() {
        let square = "";
        NUM_ENUM.forEach((n) => {
          UNIT_ENUM.forEach((u) => {
            square += `.${cssPrefix}square-${n}${u}{}`;
          });
        });
        return square;
      }
    },
    {
      className: "minMaxWidthOrHeight",
      render() {
        let minMaxWidthOrHeight = "";
        ["min", "max"].forEach((mm) => {
          ["w", "h"].forEach((wh) => {
            NUM_ENUM.forEach((n) => {
              UNIT_ENUM.forEach((u) => {
                minMaxWidthOrHeight += `.${cssPrefix}${mm}-${wh}-${n}${u}{}`;
              });
            });
          });
        });
        return minMaxWidthOrHeight;
      }
    },
    {
      className: "objectFit",
      render() {
        let objectFit = "";
        ["fill", "contain", "cover", "none", "scale-down", "inherit", "initial", "revert", "unset"].forEach((val) => {
          objectFit += `.${cssPrefix}object-fit-${val}{}`;
        });
        return objectFit;
      }
    },
    {
      className: "marginOrPadding",
      render() {
        let marginOrPadding = "";
        ["m", "p"].forEach((mp) => {
          ["t-", "r-", "b-", "l-", "x-", "y-", ""].forEach((trblxy) => {
            ["m-", ""].forEach((m) => {
              NUM_ENUM.forEach((n) => {
                UNIT_ENUM.forEach((u) => {
                  marginOrPadding += `.${cssPrefix}${mp}-${trblxy}${m}${n}${u}{}`;
                });
              });
            });
          });
        });
        return marginOrPadding;
      }
    },
    {
      className: "marginOrPaddingUseAuto",
      render() {
        let marginOrPadding = "";
        ["m", "p"].forEach((mp) => {
          ["t-", "r-", "b-", "l-", "x-", "y-", ""].forEach((trblxy) => {
            marginOrPadding += `.${cssPrefix}${mp}-${trblxy}auto{}`;
          });
        });
        return marginOrPadding;
      }
    },
    {
      className: "zIndex",
      render() {
        let zIndex = "";
        ["m-", ""].forEach((m) => {
          NUM_ENUM.forEach((n) => {
            zIndex += `.${cssPrefix}z-index-${m}${n}{}`;
          });
        });
        return zIndex;
      }
    },
    {
      // flex-1 flex-9999
      className: "flexNum",
      render() {
        let flexNum = "";
        ["null", "auto", "none", "0", "1"].forEach((x) => {
          flexNum += `.${cssPrefix}flex-${x}{}`;
        });
        return flexNum;
      }
    },
    {
      className: "text-align",
      render() {
        let textAlign = "";
        TEXT_ALIGN_NAME_ENUM.forEach((t) => {
          TEXT_ALIGN_ENUM.forEach((v) => {
            textAlign += `.${cssPrefix}${t}-${v}{}`;
          });
        });
        return textAlign;
      }
    },
    {
      className: "line-height",
      render() {
        let str = "";
        ["lh", "line-height", "leading"].forEach((lh) => {
          [...NUM_WIDTH_UNIT, "normal", "unset", "inherit", "initial"].forEach((v) => {
            str += `.${cssPrefix}${lh}-${v}{}`;
          });
        });
        return str;
      }
    },
    {
      // flex-just-ali
      className: "flex",
      render() {
        let str = "";
        JUSTIFY_CONTENT_ENUM.forEach((jc) => {
          ALIGN_ITEMS_ENUM.forEach((ai) => {
            str += `.${cssPrefix}flex-${jc}-${ai}{}`;
          });
        });
        return str;
      }
    },
    {
      className: "justify-content",
      render() {
        let str = "";
        JUSTIFY_CONTENT_ENUM.forEach((jc) => {
          ["justify-content", "justify"].forEach((n) => {
            str += `.${cssPrefix}${n}-${jc}{}`;
          });
        });
        return str;
      }
    },
    {
      className: "align-items",
      render() {
        let str = "";
        ALIGN_ITEMS_ENUM.forEach((ai) => {
          str += `.${cssPrefix}justify-content-${ai}{}`;
        });
        return str;
      }
    },
    {
      className: "flex-direction",
      render() {
        let str = "";
        FLEX_DIRECTION_NAME_ENUM.forEach((t) => {
          FLEX_DIRECTION_ENUM.forEach((v) => {
            str += `.${cssPrefix}${t}-${v}{}`;
          });
        });
        return str;
      }
    },
    {
      className: "flex-wrap-value",
      render() {
        let str = "";
        ["inherit", "initial", "nowrap", "wrap", "wrap-reverse"].forEach((v) => {
          ["flex-wrap", "flex"].forEach((n) => {
            str += `.${cssPrefix}${n}-${v}{}`;
          });
        });
        return str;
      }
    },
    {
      // 定位方式枚举
      className: "position",
      render() {
        let str = "";
        ["static", "relative", "sticky", "unset", "absolute", "fixed", "inherit", "initial"].forEach((v) => {
          ["position", ""].forEach((n) => {
            str += `.${cssPrefix}${n ? n + "-" : ""}${v}{}`;
          });
        });
        return str;
      }
    },
    {
      // 透明度
      className: "opacity",
      render() {
        let str = "";
        [20, 80, 100].forEach((v) => {
          ["opacity", "op"].forEach((n) => {
            str += `.${cssPrefix}${n}-${v}{}`;
          });
        });
        return str;
      }
    },
    {
      // 绝对定位 方向 t-20vh top:20vh -m负数
      className: "orientation",
      render() {
        let str = "";
        Array.from(DIRECTION_MAP.keys()).forEach((trbl) => {
          ["m-", "-"].forEach((m) => {
            NUM_WIDTH_UNIT.forEach((v) => {
              str += `.${cssPrefix}${trbl}-${m}${v}{}`;
            });
          });
        });
        return str;
      }
    },
    {
      // 鼠标样式方式枚举
      className: "cursor",
      render() {
        let str = "";
        CURSOR_ENUM.forEach((v) => {
          str += `.${cssPrefix}cursor-${v}{}`;
        });
        return str;
      }
    },
    {
      // 文字折叠
      className: "word-break",
      render() {
        let str = "";
        ["normal", "break-all", "keep-all", "break-word", "inherit", "initial", "unset"].forEach((v) => {
          str += `.${cssPrefix}word-break-${v}{}`;
        });
        return str;
      }
    },
    {
      // 字体粗细
      className: "font-weight",
      render() {
        let str = "";
        ["font-weight", "fw", "font"].forEach((fw) => {
          [100, 200, 300, 400, 500, 600, 700, 800, 900, "normal", "bold", "bolder", "inherit", "initial", "lighter", "normal", "unset"].forEach((v) => {
            str += `.${cssPrefix}${fw}-${v}{}`;
          });
        });
        return str;
      }
    },
    {
      // 字体大小
      className: "font-size",
      render() {
        let str = "";
        ["font-size", "fs", "text"].forEach((fs2) => {
          NUM_ENUM.forEach((n) => {
            UNIT_ENUM.forEach((u) => {
              str += `.${cssPrefix}${fs2}-${n}${u}{}`;
            });
          });
        });
        return str;
      }
    },
    // display
    {
      className: "display",
      render() {
        let str = "";
        ["display", "d", ""].forEach((d) => {
          DISPLAY_ENUM.forEach((v) => {
            str += `.${cssPrefix}${d ? d + "-" : ""}${v}{}`;
          });
        });
        return str;
      }
    },
    // overflow
    {
      className: "overflow",
      render() {
        let str = "";
        ["x-", "y-", ""].forEach((xy) => {
          ["hidden", "auto", "visible", "scroll", "inherit", "clip"].forEach((v) => {
            ["overflow", "of"].forEach((n) => {
              str += `.${cssPrefix}${n ? n + "-" : ""}${xy}${v}{}`;
            });
          });
        });
        return str;
      }
    },
    {
      // letter-spacing
      className: "letter-spacing",
      render() {
        let str = "";
        ["m-", ""].forEach((m) => {
          NUM_WIDTH_UNIT.forEach((v) => {
            str += `.${cssPrefix}letter-spacing-${m}${v}{}`;
          });
        });
        return str;
      }
    },
    {
      // circle
      className: "circle",
      render() {
        return ".circle";
      }
    },
    {
      // flexShrinkAndGrow
      className: "flexShrinkAndGrow",
      render() {
        let str = "";
        ["shrink", "grow"].forEach((sg) => {
          [...NUM_ENUM, "initial", "inherit"].forEach((v) => {
            ["flex", ""].forEach((n) => {
              str += `.${cssPrefix}${n ? n + "-" : ""}${sg}-${v}{}`;
            });
          });
        });
        return str;
      }
    },
    {
      // flexBasis
      className: "flex-basis",
      render() {
        let str = "";
        const list = [...NUM_WIDTH_UNIT, "initial", "inherit", "auto"];
        list.forEach((v) => {
          ["flex-basis", "basis"].forEach((n) => {
            str += `.${cssPrefix}${n}-${v}{}`;
          });
        });
        return str;
      }
    },
    {
      className: "border",
      // 这个宽度没有百分比
      render() {
        let str = "";
        ["border", "border-width", "border-w"].forEach((bw) => {
          ["t-", "r-", "b-", "l-", "x-", "y-", ""].forEach((trblxy) => {
            NUM_WIDTH_UNIT.forEach((v) => {
              str += `.${cssPrefix}${bw}-${trblxy}${v}{}`;
            });
          });
        });
        return str;
      }
    },
    {
      className: "border-radius",
      render() {
        let str = "";
        ["border-radius", "br"].forEach((br) => {
          NUM_WIDTH_UNIT.forEach((v) => {
            str += `.${cssPrefix}${br}-${v}{}`;
          });
        });
        return str;
      }
    },
    {
      className: "border-style",
      render() {
        let str = "";
        ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "inherit"].forEach((v) => {
          str += `.${cssPrefix}border-style-${v}{}`;
        });
        return str;
      }
    },
    // {
    //     className: 'text-align-last',
    //     render() {
    //         let str = '';
    //         ['text-align-last', 'text-last'].forEach(tl => {
    //             ['auto', 'left', 'right', 'center', 'justify', 'start', 'end', 'initial', 'inherit'].forEach(v => {
    //                 str += `.${cssPrefix}${tl}-${v}{}`
    //             })
    //         })
    //         return str
    //     }
    // },
    {
      className: "text-decoration",
      render() {
        let str = "";
        ["text-decoration", "text"].forEach((text) => {
          ["none", "underline", "overline", "line-through", "blink", "inherit"].forEach((v) => {
            str += `.${cssPrefix}${text}-${v}{}`;
          });
        });
        return str;
      }
    },
    {
      className: "user-select",
      render() {
        let str = "";
        ["user-select", "select"].forEach((s) => {
          ["none", "auto", "text", "all", "contain", "element"].forEach((v) => {
            str += `.${cssPrefix}${s}-${v}{}`;
          });
        });
        return str;
      }
    },
    {
      className: "vertical-align",
      render() {
        let str = "";
        [...VERTICAL_ALIGN_ENUM, ...NUM_WIDTH_UNIT].forEach((s) => {
          str += `.${cssPrefix}vertical-align-${s}{}`;
        });
        return str;
      }
    },
    {
      className: "text-ellipsis-num",
      render() {
        let str = "";
        ["ellipsis", "text-ellipsis"].forEach((t) => {
          [...NUM_ENUM].forEach((n) => {
            str += `.${cssPrefix}${t}-${n}{}`;
          });
        });
        return str;
      }
    },
    {
      // 所有有关颜色的
      className: "color",
      render() {
        let str = "";
        ["color", "c", "text", "bg", "background", "border-color", "border-c"].forEach((t) => {
          COLORS_NAME_PRESET.forEach((c) => {
            COLORS_OPACITY_ENUM.forEach((o) => {
              str += `.${cssPrefix}${t}-${c}${o}{}`;
            });
          });
        });
        return str;
      }
    },
    {
      className: "gap",
      render() {
        let str = "";
        [...GAP_ENUM, ...NUM_WIDTH_UNIT].forEach((s) => {
          str += `.${cssPrefix}gap-${s}{}`;
        });
        return str;
      }
    },
    {
      className: "column-gap",
      render() {
        let str = "";
        ["c", "column", "r", "row", "col"].forEach((t) => {
          [...GAP_ENUM, ...NUM_WIDTH_UNIT].forEach((s) => {
            str += `.${cssPrefix}${t}-gap-${s}{}`;
          });
        });
        return str;
      }
    },
    {
      className: "visibility",
      render() {
        let str = "";
        ["visible", "hidden", "collapse", "inherit", "initial", "revert", "unset"].forEach((t) => {
          str += `.${cssPrefix}visibility-${t}{}`;
        });
        return str;
      }
    },
    {
      className: "fontFamily",
      render() {
        let str = "";
        ["sans", "serif", "mono"].forEach((t) => {
          str += `.${cssPrefix}font-${t}{}`;
        });
        return str;
      }
    },
    {
      // align-content
      className: "alignContent",
      render() {
        let str = "";
        ALIGN_CONTENT_ENUM.forEach((t) => {
          ALIGN_CONTENT_NAME_ENUM.forEach((n) => {
            str += `.${cssPrefix}${n}-${t}{}`;
          });
        });
        return str;
      }
    },
    {
      // align-self
      className: "alignSelf",
      render() {
        let str = "";
        ALIGN_SELF_ENUM.forEach((t) => {
          ALIGN_SELF_NAME_ENUM.forEach((n) => {
            str += `.${cssPrefix}${n}-${t}{}`;
          });
        });
        return str;
      }
    },
    {
      // background-clip
      className: "backgroundClip",
      render() {
        let str = "";
        BACKGROUND_CLIP_ENUM.forEach((t) => {
          BACKGROUND_CLIP_NAME_ENUM.forEach((n) => {
            str += `.${cssPrefix}${n}-${t}{}`;
          });
        });
        return str;
      }
    },
    {
      // background-image
      className: "backgroundImage",
      render() {
        let str = "";
        Array.from(GRADIENT_DIRECTION_MAP.keys()).forEach((d) => {
          COLORS_NAME_PRESET.forEach((c) => {
            str += `.${cssPrefix}bg-lg-${d}-${c}{}`;
          });
        });
        return str;
      }
    },
    {
      // box-shadow
      className: "boxShadow",
      render() {
        let str = "";
        BOX_SHADOW_SIZE_ENUM.forEach((v) => {
          str += `.${cssPrefix}shadow${v ? "-" : ""}${v}{}`;
        });
        return str;
      }
    },
    {
      // flex-flow
      className: "flexFlow",
      render() {
        let str = "";
        Array.from(FLEX_FLOW_NAME_ENUM.keys()).forEach((n) => {
          Array.from(FLEX_FLOW_DIRECTION_ENUM.keys()).forEach((d) => {
            Array.from(FLEX_FLOW_WRAP_ENUM.keys()).forEach((w) => {
              str += `.${cssPrefix}${n}-${d}-${w}{}`;
            });
          });
        });
        return str;
      }
    },
    {
      // font-style
      className: "fontStyle",
      render() {
        let str = "";
        ["italic", "not-italic"].forEach((t) => {
          ["font-", ""].forEach((n) => {
            str += `.${cssPrefix}${n}${t}{}`;
          });
        });
        return str;
      }
    },
    {
      // lines
      className: "lines",
      render() {
        let str = "";
        NUM_ENUM.forEach((t) => {
          str += `.${cssPrefix}lines-${t}{}`;
        });
        return str;
      }
    },
    {
      // poiner-events
      className: "pointerEvents",
      render() {
        let str = "";
        ["auto", "none"].forEach((t) => {
          ["pointer-events", "pe"].forEach((n) => {
            str += `.${cssPrefix}${n}-${t}{}`;
          });
        });
        return str;
      }
    },
    {
      // text-decoration-color
      className: "textDecorationColor",
      render() {
        let str = "";
        COLORS_NAME_PRESET.forEach((c) => {
          COLORS_OPACITY_ENUM.forEach((o) => {
            str += `.${cssPrefix}decoration-${c}${o}{}`;
          });
        });
        return str;
      }
    },
    {
      // text-decoration-style
      className: "textDecorationStyle",
      render() {
        let str = "";
        Array.from(TEXT_DECORATION_STYLE_VALUE_ENUM.keys()).forEach((t) => {
          str += `.${cssPrefix}decoration-${t}{}`;
        });
        return str;
      }
    },
    {
      // text-decoration-thickness
      className: "textDecorationThickness",
      render() {
        let str = "";
        ["auto", "from-font", ...NUM_ENUM].forEach((n) => {
          UNIT_ENUM.forEach((u) => {
            str += `.${cssPrefix}decoration-${n}${!["auto", "from-font"].includes(n + "") ? u : ""}{}`;
          });
        });
        return str;
      }
    },
    {
      // scale
      className: "scale",
      render() {
        let str = "";
        NUM_ENUM.forEach((t) => {
          ["x", "y", ""].forEach((d) => {
            str += `.${cssPrefix}scale${d ? "-" : ""}${t}{}`;
          });
        });
        return str;
      }
    },
    {
      // rotate
      className: "rotate",
      render() {
        let str = "";
        NUM_ENUM.forEach((t) => {
          ["x", "y", "z", ""].forEach((d) => {
            str += `.${cssPrefix}rotate${d ? "-" : ""}${t}{}`;
          });
        });
        return str;
      }
    },
    {
      // translate
      className: "translate",
      render() {
        let str = "";
        ["x", "y", "z", ""].forEach((d) => {
          NUM_ENUM.forEach((t) => {
            UNIT_ENUM.forEach((u) => {
              str += `.${cssPrefix}translate${d ? "-" : ""}${t}${u}{}`;
            });
          });
        });
        return str;
      }
    },
    {
      // transition-origin
      className: "transitionOrigin",
      render() {
        let str = "";
        Array.from(TRANSFORM_ORIGIN_DIRECTION_MAP.keys()).forEach((d) => {
          str += `.${cssPrefix}origin-${d}{}`;
        });
        return str;
      }
    },
    {
      // transition-property
      className: "transitionProperty",
      render() {
        let str = "";
        ["", ...TRANSITION_PROPERTY_VALUE_ENUM].forEach((t) => {
          str += `.${cssPrefix}transition${t ? "-" : ""}${t}{}`;
        });
        return str;
      }
    },
    {
      // transition-duration
      className: "transitionDuration",
      render() {
        let str = "";
        NUM_ENUM.forEach((t) => {
          str += `.${cssPrefix}duration-${t}{}`;
        });
        return str;
      }
    },
    {
      // transition-timing-function
      className: "transitionTimingFunction",
      render() {
        let str = "";
        ["", ...Array.from(TRANSITION_TIMING_FUNCTION_VALUE_ENUM.keys())].forEach((t) => {
          ["transition-ease", "ease"].forEach((n) => {
            str += `.${cssPrefix}${n}${t ? "-" : ""}${t}{}`;
          });
        });
        return str;
      }
    },
    {
      // transition-delay
      className: "transitionDelay",
      render() {
        let str = "";
        NUM_ENUM.forEach((t) => {
          ["transition-delay", "delay"].forEach((n) => {
            str += `.${cssPrefix}${n}-${t}{}`;
          });
        });
        return str;
      }
    },
    {
      // white-space
      className: "whiteSpace",
      render() {
        let str = "";
        WHITE_SPACE_VALUE_ENUM.forEach((t) => {
          ["whitespace", "ws"].forEach((n) => {
            str += `.${cssPrefix}${n}-${t}{}`;
          });
        });
        return str;
      }
    },
    {
      // text-overflow
      className: "textOverflow",
      render() {
        let str = "";
        TEXT_OVERFLOW_VALUE_ENUM.forEach((t) => {
          ["text", "to", "truncate"].forEach((n) => {
            if (n === "truncate") {
              str += `.${cssPrefix}${n}{}`;
            } else {
              str += `.${cssPrefix}${n}-${t}{}`;
            }
          });
        });
        return str;
      }
    }
  ];
};
const fwFile = (str, flag, options) => {
  const filePath = path$1.resolve(process.env.UNI_INPUT_DIR ?? process.cwd(), options?.root ?? "", `./${getConfig$1(CSS_SNIPPETS_FILE)}`);
  const dirPath = path$1.dirname(filePath);
  if (!fs$2.existsSync(dirPath)) {
    fsSync.mkdir(dirPath);
  }
  fs$2.writeFileSync(path$1.resolve(process.env.UNI_INPUT_DIR ?? process.cwd(), options?.root ?? "", `./${getConfig$1(CSS_SNIPPETS_FILE)}`), str, {
    flag
  });
};
const generator = (options) => {
  fwFile("", "w", options);
  const snippetStr = getRegList().reduce((t, c) => `${t}${c.render()}`, "");
  fwFile(snippetStr, "w", options);
  if (getConfig$1("debug")) {
    console.log(changeConsoleColor("autocss snippets created successfully by vite", 32));
  }
};

const fs$1 = require("fs");
const fs2 = fs$1.promises;
const path = require("path");
require("glob");
const { performance } = require("perf_hooks");
const writeToFile = async (options) => {
  const cssFilePath = path.resolve(process.env.UNI_INPUT_DIR || "", getConfig$1(ROOT) || ROOT_DIR, getConfig$1(CSS_FILE) || CSS_FILE_NAME);
  const cssStr = `${getConfig$1(BEFORE_CONTENTS) || ""}
${CSS_ANNOTATION}${renderCss()}${getConfig$1(AFTER_CONTENT) || ""}`;
  let existingContent;
  try {
    existingContent = await fs2.readFile(cssFilePath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      existingContent = null;
    } else {
      throw error;
    }
  }
  if (cssStr !== existingContent) {
    await fs2.writeFile(cssFilePath, cssStr);
  }
};
let startTime = 0;
let endTime = 0;
const setTimeStart = () => {
  startTime = performance.now();
};
const setTimeEnd = () => {
  endTime = performance.now();
};
const getUseTime = () => (endTime - startTime).toFixed(2);
const logUseTime = () => {
  console.log(`autocss \u751F\u6210\u5668${"\u521D\u59CB\u5316"}\u5B8C\u6210\uFF0C \u7528\u65F6 ${getUseTime()}ms`);
};
const hotReload = async (txt, extName = "uvue", options) => {
  setTimeStart();
  filterClassNames(txt, extName);
  const configContent = readConfigFile(config, options);
  if (configContent["generateGlobalCss"]) {
    writeToFile();
  }
  let scssVariables = "";
  const cssStr = `${getConfig$1(BEFORE_CONTENTS) || ""}
${CSS_ANNOTATION}
${scssVariables}
${renderCss()}${getConfig$1(AFTER_CONTENT) || ""}`;
  txt += `
<style>
${cssStr}
</style>`;
  if (getConfig$1(AUTO_USE_SNIPPETS) === true) {
    generator(options);
  }
  setTimeEnd();
  if (getConfig$1("debug")) {
    logUseTime();
  }
  return {
    css: cssStr,
    sourceCode: txt
  };
};

const fs = require("fs");
fs.promises;
const micromatch = require("micromatch");
async function genConfig(config, options) {
  let newConfig;
  await genInitConfig(config, options);
  await initCssDir(config, options);
  newConfig = Object.assign(config, setConfig(readConfigFile(config, options)));
  return newConfig;
}
function Autocss(options) {
  let globalConfig = null;
  return {
    name: "vite-plugin-autocss",
    enforce: "pre",
    async config(config) {
      globalConfig = await genConfig(config, options);
      return config;
    },
    async transform(code, id) {
      const matchLetter = code.match(/(?<=\.)([\w\d]+)$/);
      if (matchLetter && !getConfig$1(EXT_NAME).includes(matchLetter[0])) {
        console.log("not match");
        return void 0;
      }
      const path = require("path");
      const root = process.env.UNI_INPUT_DIR || process.env.UNI_CLI_CONTEXT;
      let includePaths = globalConfig?.include?.map((pattern) => path.posix.join(root, pattern)) || [`${root}/pages/**`];
      if (!includePaths.length) {
        includePaths = [`${root}/pages/**`];
      }
      const excludePaths = globalConfig?.exclude?.map((pattern) => path.posix.join(root, pattern));
      if (micromatch.isMatch(id, excludePaths)) {
        return null;
      }
      let newCode = code;
      if (micromatch.isMatch(id, includePaths)) {
        const extName = getExtName(id);
        if (globalConfig?.extName.includes(`${extName}`) && (id.indexOf("type=style") < 0 && id.indexOf("type=script") < 0)) {
          if (globalConfig?.debug) {
            console.log("\u76D1\u542C\u5230\u76EE\u6807\u6587\u4EF6\u4FEE\u6539\uFF1A", id);
          }
          const { sourceCode } = await hotReload(code, extName, options);
          newCode = sourceCode;
        }
      }
      return {
        code: newCode,
        map: null
      };
    }
  };
}

export { Autocss as default };
