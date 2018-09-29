// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Users/TonyFaieta/TessLanding/src/templates/blog-post.js"),
  "component---src-pages-generic-js": require("gatsby-module-loader?name=component---src-pages-generic-js!/Users/TonyFaieta/TessLanding/src/pages/generic.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/TonyFaieta/TessLanding/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/TonyFaieta/TessLanding/.cache/json/layout-index.json"),
  "hello-world.json": require("gatsby-module-loader?name=path---hello-world!/Users/TonyFaieta/TessLanding/.cache/json/hello-world.json"),
  "my-second-post.json": require("gatsby-module-loader?name=path---my-second-post!/Users/TonyFaieta/TessLanding/.cache/json/my-second-post.json"),
  "hi-folks.json": require("gatsby-module-loader?name=path---hi-folks!/Users/TonyFaieta/TessLanding/.cache/json/hi-folks.json"),
  "generic.json": require("gatsby-module-loader?name=path---generic!/Users/TonyFaieta/TessLanding/.cache/json/generic.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/TonyFaieta/TessLanding/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/TonyFaieta/TessLanding/.cache/layouts/index.js")
}