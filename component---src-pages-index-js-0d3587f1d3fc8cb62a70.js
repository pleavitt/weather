(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t);a(160),a(34);var i=a(7),n=a.n(i),r=a(0),s=a.n(r),o=(a(145),a(151)),l=(a(161),a(162),a(149)),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={},a}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;fetch("http://api.openweathermap.org/data/2.5/weather?q=Brisbane,AU&units=metric&APPID=82f64da34251b0e58e057d344f3307a1").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState(Object.assign({},t))}).catch(function(e){return console.error(e)})},a.render=function(){return this.state.name?s.a.createElement(o.a,null,s.a.createElement(l.a,{title:"Home"}),s.a.createElement("h1",null,"The weather in ",this.state.name," is currently"),s.a.createElement("h3",null,"Today's outlook is ",this.state.weather[0].main),s.a.createElement("h3",null,"Today's low: ",Math.round(this.state.main.temp_min)),s.a.createElement("h3",null,"Today's high: ",this.state.main.temp_max),s.a.createElement("h3",null,"Humidity: ",this.state.main.humidity),s.a.createElement("h3",null,"Sunrise is at: ",new Date(this.state.sys.sunrise).toTimeString()),s.a.createElement("h3",null,"Sunset is at: ",new Date(this.state.sys.sunset).toTimeString())):s.a.createElement(o.a,null,s.a.createElement(l.a,{title:"Home"}),s.a.createElement("h1",null,"Loading..."))},t}(s.a.Component);t.default=d},145:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var i=a(0),n=a.n(i),r=a(4),s=a.n(r),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(146);var d=n.a.createContext({}),c=function(e){return n.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},146:function(e,t,a){var i;e.exports=(i=a(148))&&i.default||i},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Paul's Awesome Weather Page"}}}}},148:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),n=a.n(i),r=a(4),s=a.n(r),o=a(55),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},149:function(e,t,a){"use strict";var i=a(150),n=a(0),r=a.n(n),s=a(4),o=a.n(s),l=a(153),d=a.n(l);function c(e){var t=e.description,a=e.lang,n=e.meta,s=e.title,o=i.data.site,l=t||o.siteMetadata.description;return r.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(n)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=c},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Paul's Awesome Weather Page",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@PaulLeavitt"}}}}},151:function(e,t,a){"use strict";var i=a(147),n=a(0),r=a.n(n),s=a(4),o=a.n(s),l=a(145),d=function(e){var t=e.siteTitle;return r.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};var c=d,u=(a(152),function(e){var t=e.children;return r.a.createElement(l.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built By Paul Leavitt")))},data:i})});u.propTypes={children:o.a.node.isRequired};t.a=u},160:function(e,t,a){var i=a(25).f,n=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in n||a(18)&&i(n,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},161:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},162:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var n,r=i(a(7)),s=i(a(35)),o=i(a(75)),l=i(a(76)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=new WeakMap;var g=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+l+a+n+t+s+r+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,n=e.src,r=e.style,s=e.onLoad,c=e.onError,u=e.nativeLazyLoadSupported,f=e.loading,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","nativeLazyLoadSupported","loading"]),h={};return u&&(h.loading=f),d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:n},p,{onLoad:s,onError:c,ref:t},h,{style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,n=!1,r=t.fadeIn,o=!1,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!0),"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype&&(i=!0,o=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,n=!1);var c=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,IOSupported:n,fadeIn:r,hasNoScript:c,seenBefore:l,nativeLazyLoadSupported:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.nativeLazyLoadSupported||this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,v=e.durationFadeIn,S=e.Tag,w=e.itemProp,E=(e.critical,u(this.props).loading);var L=this.state.nativeLazyLoadSupported,z=this.state.imgLoaded||!1===this.state.fadeIn,R=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,l.default)({opacity:z?1:0,transition:R?"opacity "+v+"ms":"none"},o),T="boolean"==typeof y?"lightgray":y,A={transitionDelay:v+"ms"},O=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&A,o,f),q={title:t,alt:this.state.isVisible?"":a,style:O,className:p};if(h){var W=h;return d.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(S,{style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),T&&d.default.createElement(S,{title:t,style:(0,l.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&A)}),W.base64&&d.default.createElement(b,(0,l.default)({src:W.base64},q)),W.tracedSVG&&d.default.createElement(b,(0,l.default)({src:W.tracedSVG},q)),this.state.isVisible&&d.default.createElement("picture",null,W.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:W.srcSetWebp,sizes:W.sizes}),d.default.createElement(b,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,nativeLazyLoadSupported:L,loading:E})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,loading:E},W))}}))}if(g){var x=g,C=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},r);return"inherit"===r.display&&delete C.display,d.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},T&&d.default.createElement(S,{title:t,style:(0,l.default)({backgroundColor:T,width:x.width,opacity:this.state.imgLoaded?0:1,height:x.height},R&&A)}),x.base64&&d.default.createElement(b,(0,l.default)({src:x.base64},q)),x.tracedSVG&&d.default.createElement(b,(0,l.default)({src:x.tracedSVG},q)),this.state.isVisible&&d.default.createElement("picture",null,x.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),d.default.createElement(b,{alt:a,title:t,width:x.width,height:x.height,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,nativeLazyLoadSupported:L,loading:E})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,loading:E},x))}}))}return null},t}(d.default.Component);y.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var w=y;t.default=w}}]);
//# sourceMappingURL=component---src-pages-index-js-0d3587f1d3fc8cb62a70.js.map