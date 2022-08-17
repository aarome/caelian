module.exports = {
  browserSync: {
    hostname: "https://academy-public.lndo.site/",
    port: 8080,
    openAutomatically: true,
    reloadDelay: 50,
    injectChanges: true,
    notify: true,
  },

  drush: {
    enabled: false,
    alias: {
      css_js: "drush @SITE-ALIAS cc css-js",
      cr: "drush @SITE-ALIAS cr",
    },
  },

  twig: {
    useCache: false,
  },
};
