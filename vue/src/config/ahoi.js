export default {
  host: window.ahoi.host,
  lang: 'de',
  langdetect: false,
  locale: 'de-DE',
  addons: {
    meta: {
      separator: ' | ',
      brand: {
        default: 'Ahoi Starterkit',
        site: 'title'
      },
      title: {
        default: 'Startseite',
        page: 'title'
      },
      keywords: {
        site: 'meta.keywords',
        page: 'meta.keywords'
      },
      description: {
        site: 'meta.description',
        page: 'meta.description'
      },
      image: {
        site: 'pageimage',
        page: 'pageimage'
      },
    },
    tracker: {
      name: 'matomo',
      host: 'https://analytics.tritrics.dk',
      siteId: window.ahoi.siteId,
      disableCookies: true,
      enableHeartBeatTimer: true
    },
    router: {
      type: 'dynamic-load',
      history: 'web',
      scroll: true,
      blueprints: {
        default: {
          component:      () => import('/src/components/views/DefaultView.vue'),
          layout:         () => import('/src/components/layouts/DefaultLayout.vue'),
        },
        'error':          () => import('/src/components/views/ErrorView.vue'),
        'home':           () => import('/src/components/views/HomeView.vue'),
      }
    }
  }
}