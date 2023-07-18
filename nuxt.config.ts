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
            title: 'Masonsquared', // Todo: make a title that moves
            meta: [
                { name: 'description', content: 'Building Websites and designing Brands for your Business. Masonsquared is a partnership between two brothers to build websites and brands for companies and start-ups. ' }
            ],
            htmlAttrs: {
                lang: "en",
            },
            link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon/favicon.ico' }],
        }
    },
    colorMode: {
        classSuffix: ''
    },
    googleFonts: {
        preconnect: true,
        families: {
            Roboto: {
                wght: [300, 400, 500, 600],
            },
            'Roboto Condensed': {
                wght: [300, 400],
            },
            'Roboto Mono': {
                wght: [300, 400, 500, 600],
            },
        }
    },
})
