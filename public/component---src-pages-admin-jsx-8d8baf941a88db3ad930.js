webpackJsonp([4662148981223],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/Volumes/CodeDrive/htdocs/website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Volumes/CodeDrive/htdocs/website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Volumes/CodeDrive/htdocs/website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Volumes/CodeDrive/htdocs/website/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Volumes/CodeDrive/htdocs/website/node_modules/babel-preset-stage-0/lib/index.js","/Volumes/CodeDrive/htdocs/website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/admin.jsx':function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=o("./node_modules/react/react.js"),d=n(l),a=function(e){function t(o){s(this,t);var n=r(this,e.call(this,o));return n.removeHead=n.removeHead.bind(n),n}return i(t,e),t.prototype.loadFile=function(e,t){var o="https://unpkg.com/netlify-cms@~0.4/dist/"+t;if("css"===e){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.href=o;var s=document.getElementsByTagName("head")[0];s.appendChild(n)}else{var r=document.createElement("script");r.setAttribute("src",o),document.body.appendChild(r)}},t.prototype.loadCMS=function(){this.loadFile("css","cms.css"),this.loadFile("script","cms.js")},t.prototype.removeHead=function(){this.removeItem("material-icons",!1),this.removeItem("material-styles",!1)},t.prototype.removeItem=function(e,t){var o=document.getElementById(e);return t?o.parentNode.removeChild(o):o.disabled=!0},t.prototype.componentDidMount=function(){this.loadCMS(),this.removeItem("___gatsby",!0),window.addEventListener("load",this.removeHead)},t.prototype.componentWillUnmount=function(){window.removeEventListener("load",this.removeHead)},t.prototype.render=function(){return d.default.createElement("div",null)},t}(d.default.Component);t.default=a,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-admin-jsx-8d8baf941a88db3ad930.js.map