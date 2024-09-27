// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // css:{' ~/assets/css/bootstrap.css','~/assets/css/font-awesome.min.css'},
  app: {
    head: {
      link: [{  },
        // { rel: 'stylesheet', href: '~/assets/css/font-awesome.min.css', type:"text/css" },
        // { rel: 'stylesheet', href: '~/assets/css/responsive.css', type:"text/css" },
        // { rel: 'stylesheet', href: '~/assets/css/style.css' , type:"text/css"},
        // { rel: 'stylesheet', href: '~/assets/css/style.css.css', type:"text/css" },

        
      ]
    }
  }
}

)
