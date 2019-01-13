// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Users/pierofaieta/TessLanding/src/templates/blog-post.js"),
  "component---src-pages-generic-js": require("gatsby-module-loader?name=component---src-pages-generic-js!/Users/pierofaieta/TessLanding/src/pages/generic.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/pierofaieta/TessLanding/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/pierofaieta/TessLanding/.cache/json/layout-index.json"),
  "hi-folks.json": require("gatsby-module-loader?name=path---hi-folks!/Users/pierofaieta/TessLanding/.cache/json/hi-folks.json"),
  "my-second-post.json": require("gatsby-module-loader?name=path---my-second-post!/Users/pierofaieta/TessLanding/.cache/json/my-second-post.json"),
  "hello-world.json": require("gatsby-module-loader?name=path---hello-world!/Users/pierofaieta/TessLanding/.cache/json/hello-world.json"),
  "generic.json": require("gatsby-module-loader?name=path---generic!/Users/pierofaieta/TessLanding/.cache/json/generic.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/pierofaieta/TessLanding/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/pierofaieta/TessLanding/.cache/layouts/index.js")
}