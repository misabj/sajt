module.exports = {

"[project]/app/kontakt/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Contact)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/index.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
function Contact() {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    function handleChange(e) {
        setFormData((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({
                type: 'error',
                message: 'Молимо попуните сва поља.'
            });
            return;
        }
        try {
            console.log('Slanje emaila...', formData);
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].send(("TURBOPACK compile-time value", "service_wd24alu"), ("TURBOPACK compile-time value", "template_pe9wer6"), formData, ("TURBOPACK compile-time value", "ljbmmJwIGrtTacagV"));
            console.log('EmailJS rezultat:', result);
            if (result.status === 200) {
                setStatus({
                    type: 'success',
                    message: 'Хвала вам што сте нас контактирали!'
                });
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                setStatus({
                    type: 'error',
                    message: 'Грешка при слању поруке.'
                });
            }
        } catch (error) {
            console.error('EmailJS greška:', error);
            setStatus({
                type: 'error',
                message: 'Грешка при слању поруке.'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md my-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-extrabold mb-6 text-center text-gray-900",
                children: "Контакт"
            }, void 0, false, {
                fileName: "[project]/app/kontakt/page.js",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-10 text-center text-gray-700 text-lg",
                children: "Имаш питање или желиш да нам се обратиш? Попуни форму испод и јави нам се!"
            }, void 0, false, {
                fileName: "[project]/app/kontakt/page.js",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "name",
                                className: "block mb-2 font-semibold text-gray-700",
                                children: "Име"
                            }, void 0, false, {
                                fileName: "[project]/app/kontakt/page.js",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "name",
                                name: "name",
                                type: "text",
                                value: formData.name,
                                onChange: handleChange,
                                placeholder: "Ваше име",
                                className: "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/app/kontakt/page.js",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/kontakt/page.js",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "email",
                                className: "block mb-2 font-semibold text-gray-700",
                                children: "Емаил"
                            }, void 0, false, {
                                fileName: "[project]/app/kontakt/page.js",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "email",
                                name: "email",
                                type: "email",
                                value: formData.email,
                                onChange: handleChange,
                                placeholder: "Ваш емаил",
                                className: "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/app/kontakt/page.js",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/kontakt/page.js",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "message",
                                className: "block mb-2 font-semibold text-gray-700",
                                children: "Порука"
                            }, void 0, false, {
                                fileName: "[project]/app/kontakt/page.js",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "message",
                                name: "message",
                                rows: "5",
                                value: formData.message,
                                onChange: handleChange,
                                placeholder: "Унесите вашу поруку овде...",
                                className: "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/app/kontakt/page.js",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/kontakt/page.js",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 rounded-md hover:brightness-110 transition",
                        children: "Пошаљи поруку"
                    }, void 0, false, {
                        fileName: "[project]/app/kontakt/page.js",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `mt-4 text-center font-semibold ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`,
                        children: status.message
                    }, void 0, false, {
                        fileName: "[project]/app/kontakt/page.js",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/kontakt/page.js",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/kontakt/page.js",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EmailJSResponseStatus": (()=>EmailJSResponseStatus)
});
class EmailJSResponseStatus {
    constructor(_status = 0, _text = 'Network Error'){
        this.status = _status;
        this.text = _text;
    }
}
}}),
"[project]/node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createWebStorage": (()=>createWebStorage)
});
const createWebStorage = ()=>{
    if (typeof localStorage === 'undefined') return;
    return {
        get: (key)=>Promise.resolve(localStorage.getItem(key)),
        set: (key, value)=>Promise.resolve(localStorage.setItem(key, value)),
        remove: (key)=>Promise.resolve(localStorage.removeItem(key))
    };
};
}}),
"[project]/node_modules/@emailjs/browser/es/store/store.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "store": (()=>store)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$createWebStorage$2f$createWebStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js [app-ssr] (ecmascript)");
;
const store = {
    origin: 'https://api.emailjs.com',
    blockHeadless: false,
    storageProvider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$createWebStorage$2f$createWebStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWebStorage"])()
};
}}),
"[project]/node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "buildOptions": (()=>buildOptions)
});
const buildOptions = (options)=>{
    if (!options) return {};
    // support compatibility with SDK v3
    if (typeof options === 'string') {
        return {
            publicKey: options
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (options.toString() === '[object Object]') {
        return options;
    }
    return {};
};
}}),
"[project]/node_modules/@emailjs/browser/es/methods/init/init.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "init": (()=>init)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/store/store.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$buildOptions$2f$buildOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js [app-ssr] (ecmascript)");
;
;
const init = (options, origin = 'https://api.emailjs.com')=>{
    if (!options) return;
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$buildOptions$2f$buildOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildOptions"])(options);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"].publicKey = opts.publicKey;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"].blockHeadless = opts.blockHeadless;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"].storageProvider = opts.storageProvider;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"].blockList = opts.blockList;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"].limitRate = opts.limitRate;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"].origin = opts.origin || origin;
};
}}),
"[project]/node_modules/@emailjs/browser/es/api/sendPost.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sendPost": (()=>sendPost)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/store/store.js [app-ssr] (ecmascript)");
;
;
const sendPost = async (url, data, headers = {})=>{
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"].origin + url, {
        method: 'POST',
        headers,
        body: data
    });
    const message = await response.text();
    const responseStatus = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"](response.status, message);
    if (response.ok) {
        return responseStatus;
    }
    throw responseStatus;
};
}}),
"[project]/node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "validateParams": (()=>validateParams)
});
const validateParams = (publicKey, serviceID, templateID)=>{
    if (!publicKey || typeof publicKey !== 'string') {
        throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
    }
    if (!serviceID || typeof serviceID !== 'string') {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID || typeof templateID !== 'string') {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
};
}}),
"[project]/node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "validateTemplateParams": (()=>validateTemplateParams)
});
const validateTemplateParams = (templateParams)=>{
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (templateParams && templateParams.toString() !== '[object Object]') {
        throw 'The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/';
    }
};
}}),
"[project]/node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isHeadless": (()=>isHeadless)
});
const isHeadless = (navigator)=>{
    return navigator.webdriver || !navigator.languages || navigator.languages.length === 0;
};
}}),
"[project]/node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "headlessError": (()=>headlessError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-ssr] (ecmascript)");
;
const headlessError = ()=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"](451, 'Unavailable For Headless Browser');
};
}}),
"[project]/node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "validateBlockListParams": (()=>validateBlockListParams)
});
const validateBlockListParams = (list, watchVariable)=>{
    if (!Array.isArray(list)) {
        throw 'The BlockList list has to be an array';
    }
    if (typeof watchVariable !== 'string') {
        throw 'The BlockList watchVariable has to be a string';
    }
};
}}),
"[project]/node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isBlockedValueInParams": (()=>isBlockedValueInParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateBlockListParams$2f$validateBlockListParams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js [app-ssr] (ecmascript)");
;
const isBlockListDisabled = (options)=>{
    return !options.list?.length || !options.watchVariable;
};
const getValue = (data, name)=>{
    return data instanceof FormData ? data.get(name) : data[name];
};
const isBlockedValueInParams = (options, params)=>{
    if (isBlockListDisabled(options)) return false;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateBlockListParams$2f$validateBlockListParams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateBlockListParams"])(options.list, options.watchVariable);
    const value = getValue(params, options.watchVariable);
    if (typeof value !== 'string') return false;
    return options.list.includes(value);
};
}}),
"[project]/node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "blockedEmailError": (()=>blockedEmailError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-ssr] (ecmascript)");
;
const blockedEmailError = ()=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"](403, 'Forbidden');
};
}}),
"[project]/node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "validateLimitRateParams": (()=>validateLimitRateParams)
});
const validateLimitRateParams = (throttle, id)=>{
    if (typeof throttle !== 'number' || throttle < 0) {
        throw 'The LimitRate throttle has to be a positive number';
    }
    if (id && typeof id !== 'string') {
        throw 'The LimitRate ID has to be a non-empty string';
    }
};
}}),
"[project]/node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isLimitRateHit": (()=>isLimitRateHit)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateLimitRateParams$2f$validateLimitRateParams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js [app-ssr] (ecmascript)");
;
const getLeftTime = async (id, throttle, storage)=>{
    const lastTime = Number(await storage.get(id) || 0);
    return throttle - Date.now() + lastTime;
};
const isLimitRateHit = async (defaultID, options, storage)=>{
    if (!options.throttle || !storage) {
        return false;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateLimitRateParams$2f$validateLimitRateParams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateLimitRateParams"])(options.throttle, options.id);
    const id = options.id || defaultID;
    const leftTime = await getLeftTime(id, options.throttle, storage);
    if (leftTime > 0) {
        return true;
    }
    await storage.set(id, Date.now().toString());
    return false;
};
}}),
"[project]/node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "limitRateError": (()=>limitRateError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-ssr] (ecmascript)");
;
const limitRateError = ()=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"](429, 'Too Many Requests');
};
}}),
"[project]/node_modules/@emailjs/browser/es/methods/send/send.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "send": (()=>send)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/store/store.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$api$2f$sendPost$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/api/sendPost.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$buildOptions$2f$buildOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateParams$2f$validateParams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateTemplateParams$2f$validateTemplateParams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isHeadless$2f$isHeadless$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$headlessError$2f$headlessError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isBlockedValueInParams$2f$isBlockedValueInParams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$blockedEmailError$2f$blockedEmailError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isLimitRateHit$2f$isLimitRateHit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$limitRateError$2f$limitRateError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const send = async (serviceID, templateID, templateParams, options)=>{
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$buildOptions$2f$buildOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildOptions"])(options);
    const publicKey = opts.publicKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"].publicKey;
    const blockHeadless = opts.blockHeadless || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"].blockHeadless;
    const storageProvider = opts.storageProvider || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"].storageProvider;
    const blockList = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"].blockList,
        ...opts.blockList
    };
    const limitRate = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"].limitRate,
        ...opts.limitRate
    };
    if (blockHeadless && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isHeadless$2f$isHeadless$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHeadless"])(navigator)) {
        return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$headlessError$2f$headlessError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["headlessError"])());
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateParams$2f$validateParams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateParams"])(publicKey, serviceID, templateID);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateTemplateParams$2f$validateTemplateParams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateTemplateParams"])(templateParams);
    if (templateParams && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isBlockedValueInParams$2f$isBlockedValueInParams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBlockedValueInParams"])(blockList, templateParams)) {
        return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$blockedEmailError$2f$blockedEmailError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockedEmailError"])());
    }
    if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isLimitRateHit$2f$isLimitRateHit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLimitRateHit"])(location.pathname, limitRate, storageProvider)) {
        return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$limitRateError$2f$limitRateError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["limitRateError"])());
    }
    const params = {
        lib_version: '4.4.1',
        user_id: publicKey,
        service_id: serviceID,
        template_id: templateID,
        template_params: templateParams
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$api$2f$sendPost$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendPost"])('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json'
    });
};
}}),
"[project]/node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "validateForm": (()=>validateForm)
});
const validateForm = (form)=>{
    if (!form || form.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of the form';
    }
};
}}),
"[project]/node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sendForm": (()=>sendForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/store/store.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$api$2f$sendPost$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/api/sendPost.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$buildOptions$2f$buildOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateForm$2f$validateForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateParams$2f$validateParams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isHeadless$2f$isHeadless$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$headlessError$2f$headlessError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isBlockedValueInParams$2f$isBlockedValueInParams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$blockedEmailError$2f$blockedEmailError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isLimitRateHit$2f$isLimitRateHit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$limitRateError$2f$limitRateError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const findHTMLForm = (form)=>{
    return typeof form === 'string' ? document.querySelector(form) : form;
};
const sendForm = async (serviceID, templateID, form, options)=>{
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$buildOptions$2f$buildOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildOptions"])(options);
    const publicKey = opts.publicKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"].publicKey;
    const blockHeadless = opts.blockHeadless || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"].blockHeadless;
    const storageProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"].storageProvider || opts.storageProvider;
    const blockList = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"].blockList,
        ...opts.blockList
    };
    const limitRate = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"].limitRate,
        ...opts.limitRate
    };
    if (blockHeadless && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isHeadless$2f$isHeadless$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHeadless"])(navigator)) {
        return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$headlessError$2f$headlessError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["headlessError"])());
    }
    const currentForm = findHTMLForm(form);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateParams$2f$validateParams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateParams"])(publicKey, serviceID, templateID);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateForm$2f$validateForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateForm"])(currentForm);
    const formData = new FormData(currentForm);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isBlockedValueInParams$2f$isBlockedValueInParams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBlockedValueInParams"])(blockList, formData)) {
        return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$blockedEmailError$2f$blockedEmailError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockedEmailError"])());
    }
    if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isLimitRateHit$2f$isLimitRateHit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isLimitRateHit"])(location.pathname, limitRate, storageProvider)) {
        return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$limitRateError$2f$limitRateError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["limitRateError"])());
    }
    formData.append('lib_version', '4.4.1');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', publicKey);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$api$2f$sendPost$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendPost"])('/api/v1.0/email/send-form', formData);
};
}}),
"[project]/node_modules/@emailjs/browser/es/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$init$2f$init$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/methods/init/init.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$send$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/methods/send/send.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$sendForm$2f$sendForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js [app-ssr] (ecmascript)");
;
;
;
;
;
const __TURBOPACK__default__export__ = {
    init: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$init$2f$init$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["init"],
    send: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$send$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["send"],
    sendForm: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$sendForm$2f$sendForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendForm"],
    EmailJSResponseStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"]
};
}}),
"[project]/node_modules/@emailjs/browser/es/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$init$2f$init$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/methods/init/init.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$send$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/methods/send/send.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$sendForm$2f$sendForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/index.js [app-ssr] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=_61996ae0._.js.map