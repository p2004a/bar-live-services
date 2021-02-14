import { NuxtConfig } from "@nuxt/types";

console.log("NODE_ENV", process.env.NODE_ENV);
console.log("BASE_URL", process.env.BASE_URL);

const isProd = process.env.NODE_ENV === "production";

const nuxtConfig: NuxtConfig = {
    env: {
        baseUrl: process.env.BASE_URL || "http://localhost:3000/api"
    },
    //watch: ["modules"],
    components: [
        "~/components",
        { path: "~/pages", pattern: "*/components/**" }
    ],
    //loading: '~/components/LoadingBar.vue',
    ignore: [
        "pages/*/components/*"
    ],
    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                path: "",
                redirect: "/replays"
            })
        }
    },
    head: {
        title: "BAR Live Services",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "Live data for the RTS game Beyond All Reason" }
        ],
        link: [
            { rel: "icon", type: "image/png", href: "/favicon.png" },
            { rel: "preconnect", href: "https://fonts.gstatic.com" },
            { rel: "preconnect", href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900", media: "all" },
        ]
    },
    css: [
        '~/assets/scss/main.scss'
    ],
    vuetify: {
        customVariables: ['~/assets/scss/variables.scss'],
        treeShake: true
    },
    transition: {
        name: "slide-transition",
        mode: "out-in"
    },
    buildModules: [
        "@nuxt/typescript-build",
        "@nuxt/image",
        "@nuxtjs/moment",
        "@nuxtjs/vuetify"
    ],
    modules: [
        "@nuxtjs/pwa",
        "@nuxt/http",
        "~/modules/api"
    ],
    http: {
        baseURL: process.env.BASE_URL || 'http://localhost:3000/api'
    }
}

export default nuxtConfig;
