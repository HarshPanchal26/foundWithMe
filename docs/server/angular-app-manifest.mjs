
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/how-do-we-help"
  },
  {
    "renderMode": 2,
    "route": "/why-agency"
  },
  {
    "renderMode": 2,
    "route": "/why-me"
  }
],
  assets: {
    'index.csr.html': {size: 2310, hash: '0a21e4c650fb580af59166e494d0db0db3dac75cee954d4af58d3d406c562fa8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1123, hash: '2347aa575d2aff7ee5320ebea51107970ee2c0a23c38c811110b9320e35433d1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 29681, hash: '6ccf205fb9d08b30946da4f7552001b0b6eabf364dff10d897740494f0dc18bb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'why-agency/index.html': {size: 16705, hash: 'f09405914e806fd9975c4d1d4e0a0b11196d4d4f9b59ccc6713676eec4f3d94a', text: () => import('./assets-chunks/why-agency_index_html.mjs').then(m => m.default)},
    'why-me/index.html': {size: 8544, hash: '30d59288b4501cfa19e391df6599e02e0063563f46d10e7820b3772bf76938a8', text: () => import('./assets-chunks/why-me_index_html.mjs').then(m => m.default)},
    'how-do-we-help/index.html': {size: 8466, hash: '55675bebfb05e169d24af83a2ca710adf474e88a33d43c5622a18a01d96d28ba', text: () => import('./assets-chunks/how-do-we-help_index_html.mjs').then(m => m.default)},
    'styles-RMSMZ44L.css': {size: 22250, hash: 'XHV5f5mkVx4', text: () => import('./assets-chunks/styles-RMSMZ44L_css.mjs').then(m => m.default)}
  },
};
