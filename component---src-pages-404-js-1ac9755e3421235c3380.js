(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(149),o=a(147);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"Unfortunately this page does not exist"))}},144:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Paul's Awesome Weather Page"}}}}},146:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(56),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},147:function(e,t,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(151),c=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,s=n.data.site,l=t||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=u},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Paul's Awesome Weather Page",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@PaulLeavitt"}}}}},149:function(e,t,a){"use strict";var n=a(145),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(33),c=a.n(l),u=(a(144),i.a.createContext({})),d=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};var p=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};p.propTypes={siteTitle:s.a.string},p.defaultProps={siteTitle:""};var m=p,g=(a(150),function(e){var t=e.children;return i.a.createElement(d,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built By Paul Leavitt")))},data:n})});g.propTypes={children:s.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-404-js-1ac9755e3421235c3380.js.map