/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/session/route";
exports.ids = ["app/api/auth/session/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsession%2Froute&page=%2Fapi%2Fauth%2Fsession%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsession%2Froute.ts&appDir=D%3A%5CNextJS%5Cmedical%20website%5Cmedical-clinic%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextJS%5Cmedical%20website%5Cmedical-clinic&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsession%2Froute&page=%2Fapi%2Fauth%2Fsession%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsession%2Froute.ts&appDir=D%3A%5CNextJS%5Cmedical%20website%5Cmedical-clinic%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextJS%5Cmedical%20website%5Cmedical-clinic&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_NextJS_medical_website_medical_clinic_src_app_api_auth_session_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/session/route.ts */ \"(rsc)/./src/app/api/auth/session/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/session/route\",\n        pathname: \"/api/auth/session\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/session/route\"\n    },\n    resolvedPagePath: \"D:\\\\NextJS\\\\medical website\\\\medical-clinic\\\\src\\\\app\\\\api\\\\auth\\\\session\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_NextJS_medical_website_medical_clinic_src_app_api_auth_session_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGc2Vzc2lvbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYXV0aCUyRnNlc3Npb24lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhdXRoJTJGc2Vzc2lvbiUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDTmV4dEpTJTVDbWVkaWNhbCUyMHdlYnNpdGUlNUNtZWRpY2FsLWNsaW5pYyU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q05leHRKUyU1Q21lZGljYWwlMjB3ZWJzaXRlJTVDbWVkaWNhbC1jbGluaWMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ21DO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxOZXh0SlNcXFxcbWVkaWNhbCB3ZWJzaXRlXFxcXG1lZGljYWwtY2xpbmljXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcc2Vzc2lvblxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9zZXNzaW9uL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9zZXNzaW9uXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL3Nlc3Npb24vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxOZXh0SlNcXFxcbWVkaWNhbCB3ZWJzaXRlXFxcXG1lZGljYWwtY2xpbmljXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcc2Vzc2lvblxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsession%2Froute&page=%2Fapi%2Fauth%2Fsession%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsession%2Froute.ts&appDir=D%3A%5CNextJS%5Cmedical%20website%5Cmedical-clinic%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextJS%5Cmedical%20website%5Cmedical-clinic&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/auth/session/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/auth/session/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/session */ \"(rsc)/./src/lib/session.ts\");\n/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! iron-session */ \"(rsc)/./node_modules/iron-session/dist/index.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\nasync function GET(req) {\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_3__.getIronSession)(await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)(), _lib_session__WEBPACK_IMPORTED_MODULE_0__.sessionOptions);\n    if (session.user) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            userId: session.user.userId,\n            role: session.user.role,\n            token: session.user.token,\n            isLoggedIn: session.user.isLoggedIn\n        });\n    } else {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"No session found\"\n        }, {\n            status: 401\n        });\n    }\n}\nasync function DELETE(req) {\n    const res = next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.next();\n    try {\n        const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_3__.getIronSession)(await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)(), _lib_session__WEBPACK_IMPORTED_MODULE_0__.sessionOptions);\n        session.destroy();\n        res.headers.set(\"Set-Cookie\", \"session=; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=Thu, 01 Jan 1970 00:00:00 GMT\");\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            success: true,\n            message: \"Logged out successfully\"\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error during logout:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            success: false,\n            message: \"Logout failed\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL3Nlc3Npb24vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ2dGO0FBQ2xDO0FBQ1A7QUFDaUI7QUFFakQsZUFBZUksSUFBSUMsR0FBZ0I7SUFDeEMsTUFBTUMsVUFBVSxNQUFNTCw0REFBY0EsQ0FBa0IsTUFBTUMscURBQU9BLElBQUlGLHdEQUFjQTtJQUNyRixJQUFJTSxRQUFRQyxJQUFJLEVBQUU7UUFDaEIsT0FBT0oscURBQVlBLENBQUNLLElBQUksQ0FBQztZQUFFQyxRQUFRSCxRQUFRQyxJQUFJLENBQUNFLE1BQU07WUFBRUMsTUFBTUosUUFBUUMsSUFBSSxDQUFDRyxJQUFJO1lBQUNDLE9BQU9MLFFBQVFDLElBQUksQ0FBQ0ksS0FBSztZQUFFQyxZQUFZTixRQUFRQyxJQUFJLENBQUNLLFVBQVU7UUFBQztJQUNqSixPQUFPO1FBQ0wsT0FBT1QscURBQVlBLENBQUNLLElBQUksQ0FBQztZQUFFSyxTQUFTO1FBQW1CLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzFFO0FBQ0Y7QUFFTyxlQUFlQyxPQUFPVixHQUFnQjtJQUMzQyxNQUFNVyxNQUFNYixxREFBWUEsQ0FBQ2MsSUFBSTtJQUU3QixJQUFJO1FBQ0YsTUFBTVgsVUFBVSxNQUFNTCw0REFBY0EsQ0FBa0IsTUFBTUMscURBQU9BLElBQUlGLHdEQUFjQTtRQUNyRk0sUUFBUVksT0FBTztRQUNmRixJQUFJRyxPQUFPLENBQUNDLEdBQUcsQ0FDYixjQUNBO1FBR0YsT0FBT2pCLHFEQUFZQSxDQUFDSyxJQUFJLENBQ3RCO1lBQUVhLFNBQVM7WUFBTVIsU0FBUztRQUEwQixHQUNwRDtZQUFFQyxRQUFRO1FBQUk7SUFFbEIsRUFBRSxPQUFPUSxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3RDLE9BQU9uQixxREFBWUEsQ0FBQ0ssSUFBSSxDQUN0QjtZQUFFYSxTQUFTO1lBQU9SLFNBQVM7UUFBZ0IsR0FDM0M7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIkQ6XFxOZXh0SlNcXG1lZGljYWwgd2Vic2l0ZVxcbWVkaWNhbC1jbGluaWNcXHNyY1xcYXBwXFxhcGlcXGF1dGhcXHNlc3Npb25cXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBkZWZhdWx0U2Vzc2lvbiwgSXJvblNlc3Npb25EYXRhLCBzZXNzaW9uT3B0aW9ucyB9IGZyb20gXCJAL2xpYi9zZXNzaW9uXCI7XHJcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSBcImlyb24tc2Vzc2lvblwiO1xyXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xyXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogTmV4dFJlcXVlc3QpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0SXJvblNlc3Npb248SXJvblNlc3Npb25EYXRhPihhd2FpdCBjb29raWVzKCksIHNlc3Npb25PcHRpb25zKTtcclxuICBpZiAoc2Vzc2lvbi51c2VyKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB1c2VySWQ6IHNlc3Npb24udXNlci51c2VySWQsIHJvbGU6IHNlc3Npb24udXNlci5yb2xlLHRva2VuOiBzZXNzaW9uLnVzZXIudG9rZW4sIGlzTG9nZ2VkSW46IHNlc3Npb24udXNlci5pc0xvZ2dlZEluIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIk5vIHNlc3Npb24gZm91bmRcIiB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXE6IE5leHRSZXF1ZXN0KSB7XHJcbiAgY29uc3QgcmVzID0gTmV4dFJlc3BvbnNlLm5leHQoKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRJcm9uU2Vzc2lvbjxJcm9uU2Vzc2lvbkRhdGE+KGF3YWl0IGNvb2tpZXMoKSwgc2Vzc2lvbk9wdGlvbnMpO1xyXG4gICAgc2Vzc2lvbi5kZXN0cm95KCk7XHJcbiAgICByZXMuaGVhZGVycy5zZXQoXHJcbiAgICAgIFwiU2V0LUNvb2tpZVwiLFxyXG4gICAgICBcInNlc3Npb249OyBQYXRoPS87IEh0dHBPbmx5OyBTZWN1cmU7IFNhbWVTaXRlPVN0cmljdDsgRXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVFwiXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIkxvZ2dlZCBvdXQgc3VjY2Vzc2Z1bGx5XCIgfSxcclxuICAgICAgeyBzdGF0dXM6IDIwMCB9XHJcbiAgICApO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZHVyaW5nIGxvZ291dDpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkxvZ291dCBmYWlsZWRcIiB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzZXNzaW9uT3B0aW9ucyIsImdldElyb25TZXNzaW9uIiwiY29va2llcyIsIk5leHRSZXNwb25zZSIsIkdFVCIsInJlcSIsInNlc3Npb24iLCJ1c2VyIiwianNvbiIsInVzZXJJZCIsInJvbGUiLCJ0b2tlbiIsImlzTG9nZ2VkSW4iLCJtZXNzYWdlIiwic3RhdHVzIiwiREVMRVRFIiwicmVzIiwibmV4dCIsImRlc3Ryb3kiLCJoZWFkZXJzIiwic2V0Iiwic3VjY2VzcyIsImVycm9yIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/session/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/session.ts":
/*!****************************!*\
  !*** ./src/lib/session.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultSession: () => (/* binding */ defaultSession),\n/* harmony export */   sessionOptions: () => (/* binding */ sessionOptions)\n/* harmony export */ });\nconst sessionOptions = {\n    password: process.env.IRON_SESSION_PASSWORD,\n    cookieName: \"myapp_session\",\n    cookieOptions: {\n        secure: \"development\" === \"production\",\n        httpOnly: true,\n        sameSite: \"lax\",\n        maxAge: 14 * 24 * 60 * 60\n    }\n};\nconst defaultSession = {\n    isLoggedIn: false\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3Nlc3Npb24udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFTyxNQUFNQSxpQkFBaUM7SUFDNUNDLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MscUJBQXFCO0lBQzNDQyxZQUFZO0lBQ1pDLGVBQWU7UUFDYkMsUUFBUUwsa0JBQXlCO1FBQ2pDTSxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsUUFBUSxLQUFLLEtBQUssS0FBSztJQUN6QjtBQUNGLEVBQUU7QUFXTyxNQUFNQyxpQkFBaUI7SUFDNUJDLFlBQVk7QUFDZCxFQUFFIiwic291cmNlcyI6WyJEOlxcTmV4dEpTXFxtZWRpY2FsIHdlYnNpdGVcXG1lZGljYWwtY2xpbmljXFxzcmNcXGxpYlxcc2Vzc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXNzaW9uT3B0aW9ucyB9IGZyb20gXCJpcm9uLXNlc3Npb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXNzaW9uT3B0aW9uczogU2Vzc2lvbk9wdGlvbnMgPSB7XHJcbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LklST05fU0VTU0lPTl9QQVNTV09SRCBhcyBzdHJpbmcsIFxyXG4gIGNvb2tpZU5hbWU6IFwibXlhcHBfc2Vzc2lvblwiLFxyXG4gIGNvb2tpZU9wdGlvbnM6IHtcclxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLCBcclxuICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsIFxyXG4gICAgbWF4QWdlOiAxNCAqIDI0ICogNjAgKiA2MCwgXHJcbiAgfSxcclxufTtcclxuXHJcbiBleHBvcnQgaW50ZXJmYWNlIElyb25TZXNzaW9uRGF0YSB7XHJcbiAgICB1c2VyPzoge1xyXG4gICAgICB0b2tlbjogc3RyaW5nO1xyXG4gICAgICB1c2VySWQ6IHN0cmluZztcclxuICAgICAgcm9sZTogc3RyaW5nO1xyXG4gICAgICBpc0xvZ2dlZEluOiBib29sZWFuXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGNvbnN0IGRlZmF1bHRTZXNzaW9uID0ge1xyXG4gICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiJdLCJuYW1lcyI6WyJzZXNzaW9uT3B0aW9ucyIsInBhc3N3b3JkIiwicHJvY2VzcyIsImVudiIsIklST05fU0VTU0lPTl9QQVNTV09SRCIsImNvb2tpZU5hbWUiLCJjb29raWVPcHRpb25zIiwic2VjdXJlIiwiaHR0cE9ubHkiLCJzYW1lU2l0ZSIsIm1heEFnZSIsImRlZmF1bHRTZXNzaW9uIiwiaXNMb2dnZWRJbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/session.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/iron-session","vendor-chunks/uncrypto","vendor-chunks/iron-webcrypto"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsession%2Froute&page=%2Fapi%2Fauth%2Fsession%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsession%2Froute.ts&appDir=D%3A%5CNextJS%5Cmedical%20website%5Cmedical-clinic%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextJS%5Cmedical%20website%5Cmedical-clinic&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();