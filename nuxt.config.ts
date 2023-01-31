// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss', 
        '@nuxt/image-edge',
        '@nuxtjs/google-fonts',
        '@nuxtjs/color-mode',
    ],
    app: {
        head: {
            htmlAttrs: {
                lang: "en",
            },
        }
    },
    colorMode: {
        classSuffix: ''
    },
    googleFonts: {
        preconnect: true,
        families: {
            'Titillium Web': {
                wght: [200, 300, 400, 600],
            },
            Lato: {
                wght: [400, 600],
            },
            Roboto: {
                wght: [300, 400, 500, 600],
            },
            'Roboto Mono': {
                wght: [300, 400, 500, 600],
            },
        }
    },
})
