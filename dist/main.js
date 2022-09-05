/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function generateRandomLetter() {\n  const alphabet = \"abcdefghijklmnopqrstuvwxyz\";\n\n  return alphabet[Math.floor(Math.random() * alphabet.length)];\n}\n\nfunction generateRandomNumber(){\n    return Math.floor(Math.random() * 10);\n}\n\nfunction generateLink(){\n    const char1 = generateRandomLetter();\n    const char2 = generateRandomLetter();\n    const num1 = generateRandomNumber();\n    const num2 = generateRandomNumber();\n    const num3 = generateRandomNumber();\n    const num4 = generateRandomNumber();\n\n    return `https://prnt.sc/${char1}${char2}${num1}${num2}${num3}${num4}`\n}\n\nconst frame = document.getElementById('prntscrnPage');\n\nprntscrnPage.href = generateLink();\n\nscrapePage(generateLink());\n\n//# sourceURL=webpack://webscraper/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;