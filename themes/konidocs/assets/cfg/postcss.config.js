const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [ './hugo_stats.json' ],
  whitelist: [
    'collapsing',
    'show',
    'fade',
    'collapse',
    'carousel-item-next',
    'carousel-item-prev',
    'carousel-item-left',
    'carousel-item-right',
    'active',
    'alert',
    'alert-success',
    'alert-warning',
    'alert-danger'
  ],
  whitelistPatterns: [/vjs/,/video-js/],
  defaultExtractor: (content) => {
      let els = JSON.parse(content).htmlElements;
      return els.tags.concat(els.classes, els.ids);
  }
});

const autoprefixer = require('autoprefixer')({
  cascade: false
});

module.exports = {
  plugins: [
      autoprefixer,
      process.env.HUGO_ENVIRONMENT === "production" ||
      process.env.HUGO_ENVIRONMENT === "devblog" ||
      process.env.HUGO_ENVIRONMENT === "local" ? 
      purgecss
      :false
  ]
};