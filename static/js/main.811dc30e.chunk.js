(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{37:function(e,t,n){e.exports=n(97)},42:function(e,t,n){},43:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),c=(n(42),n(7)),l=n(8),s=n(10),u=n(9),d=n(11),m=(n(43),n(3)),h={width:"500px",maxWidth:"100%",margin:"0 auto",position:"fixed",left:"50%",top:"50%",transform:"translate(-50%,-50%)",zIndex:"999",backgroundColor:"#eee",padding:"10px 20px 40px",borderRadius:"8px",display:"flex",flexDirection:"column"},g={marginBottom:"15px",padding:"3px 8px",cursor:"pointer",borderRadius:"50%",border:"none",width:"30px",height:"30px",fontWeight:"bold",alignSelf:"flex-end"},p=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=r.a.createElement("div",{style:h},r.a.createElement("button",{style:g,onClick:this.props.onClose},"x"),r.a.createElement("div",null,this.props.children));return this.props.isOpen||(e=null),r.a.createElement("div",null,e)}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleToggle=function(){n.setState({active:!n.state.active})},n.actions=[{label:"Cancel",onClick:n.handleToggle},{label:"Save",onClick:n.handleToggle}],n.state={activeTab:0},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"toggleCategories",value:function(){var e=this;return 0===this.state.activeTab?r.a.createElement("div",{className:"projects-grid"},r.a.createElement(m.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},r.a.createElement(m.CardTitle,{style:{color:"#fff",height:"176px",background:"url(https://alinc.carrd.co/assets/images/image06.jpg?v01282118021651) center / cover"}},"Arquinatur"),r.a.createElement(m.CardText,null,"La sabidur\xeda de la naturaleza aplicada a la arquitectura."),r.a.createElement(m.CardActions,{border:!0},r.a.createElement("a",{style:{textDecoration:"none",color:"rgb(63,81,181)"},href:"https://www.arquinatur.com/",target:"_blank"},r.a.createElement(m.Button,{colored:!0},"WEB")),r.a.createElement("a",{style:{textDecoration:"none",color:"rgb(63,81,181)"},href:"https://twitter.com/Arquinatur",target:"_blank"},r.a.createElement(m.Button,{colored:!0},"Twitter")),r.a.createElement(m.Button,{style:{textDecoration:"none",color:"rgb(63,81,181)"},onClick:function(t){return e.setState({isOpen:!0})}},"Informaci\xf3n"),r.a.createElement(p,{isOpen:this.state.isOpen,onClose:function(t){return e.setState({isOpen:!1})}},r.a.createElement("h1",null,"Arquinatur"),r.a.createElement("hr",null),r.a.createElement("img",{src:"https://alinc.carrd.co/assets/images/image06.jpg?v01282118021651",width:"100%",height:"100%"}),r.a.createElement("br",null),r.a.createElement("br",null),"Este proyecto se bas\xf3 en la integraci\xf3n de un apartado est\xe1tico (desarrollado en html5) que sirve como carta de presentaci\xf3n e integrado en WordPress como un tema ahijado. La web fue desarrollada para 2 arquitectos de Zaragoza que utilizan materiales reciclados, ecol\xf3gicos, entre otros, para desarrollar su actividad.",r.a.createElement("hr",null))))):1===this.state.activeTab?r.a.createElement("div",null,r.a.createElement("h1",null,"This is React")):void 0}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(m.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},r.a.createElement(m.Tab,null,"Web"),r.a.createElement(m.Tab,null,"React")),r.a.createElement(m.Grid,null,r.a.createElement(m.Cell,{col:4},r.a.createElement("div",{className:"content"},this.toggleCategories()))))}}]),t}(a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"demo-big-content"},r.a.createElement(m.Layout,null,r.a.createElement(m.Content,null,r.a.createElement("div",{className:"page-content"}),r.a.createElement(f,null))))}}]),t}(a.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(93),n(94);var w=n(22);i.a.render(r.a.createElement(w.a,null,r.a.createElement(b,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/portfolio","/service-worker.js");v?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):E(e)}))}}()}},[[37,1,2]]]);
//# sourceMappingURL=main.811dc30e.chunk.js.map