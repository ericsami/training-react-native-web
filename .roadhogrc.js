
const path = require('path')

const svgSpriteDirs = [
  path.resolve(__dirname, 'src/svg/'),
  require.resolve('antd').replace(/index\.js$/, '')
]

export default {
  "entry": "src/index.js",
  /*"publicPath": "/public/trm/",*/
  svgSpriteLoaderDirs : svgSpriteDirs,
  theme : "./theme.config.js",
  "proxy": {
    "/leafletjs": {
      "target": "http://teamlab.sj/leafletjs/",
      "changeOrigin": true,
      "pathRewrite": { "^/leafletjs" : "" }
    },
    "/leafletjs2": {
      "target": "http://teamlab.sj/",
      "changeOrigin": true,
      "pathRewrite": { "^/leafletjs2" : "" }
    }
    ,
    "/es": {
      "target": "http://localhost:9200/",
      "changeOrigin": true,
      "pathRewrite": { "^/es" : "" }
    },
    "/apitax": {
      "target": "http://localhost:3003/",
      "changeOrigin": true,
      "pathRewrite": { "^/apitax" : "/apiv1" }
    }
    ,
    "/api/v1/ta-x": {
      "target": "http://localhost:3003/",
      "changeOrigin": true,
      "pathRewrite": { "^/api/v1/tax" : "/api" }
    }
    ,
    "/api/v1/olap": {
      "target": "http://localhost:3003/",
      "changeOrigin": true,
      "pathRewrite": { "^/api/v1/olap" : "/olap" }
    }
    ,
    "/chatsapi": {
      "target": "https://www.neegle.net",
      "changeOrigin": true,
      "pathRewrite": { "^/chatsapi" : "/kunlunWs" }
    }
    ,
    "/neegleFileServer":{
      "target": "https://www.neegle.net",
      "changeOrigin": true,
      "pathRewrite": { "^/neegleFileServer" : "" }
    }
  },
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        ["import", { "libraryName": "antd", "style": true }]
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime",
        ["import", { "libraryName": "antd", "style": "css" }]
      ]
    }
  }
}
