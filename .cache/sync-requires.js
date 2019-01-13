// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/pierofaieta/TessLanding/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/pierofaieta/TessLanding/src/templates/blog-post.js")),
  "component---src-pages-generic-js": preferDefault(require("/Users/pierofaieta/TessLanding/src/pages/generic.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/pierofaieta/TessLanding/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/pierofaieta/TessLanding/.cache/json/layout-index.json"),
  "hi-folks.json": require("/Users/pierofaieta/TessLanding/.cache/json/hi-folks.json"),
  "my-second-post.json": require("/Users/pierofaieta/TessLanding/.cache/json/my-second-post.json"),
  "hello-world.json": require("/Users/pierofaieta/TessLanding/.cache/json/hello-world.json"),
  "generic.json": require("/Users/pierofaieta/TessLanding/.cache/json/generic.json"),
  "index.json": require("/Users/pierofaieta/TessLanding/.cache/json/index.json")
}