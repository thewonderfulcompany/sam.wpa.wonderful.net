(this["webpackJsonpsite-code"]=this["webpackJsonpsite-code"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(3),r=n.n(i),s=(n(12),n(4)),o=n(5),u=n(7),d=n(6),h=(n(13),n(0));function l(t){console.log(t.links);var e=t.links.map((function(t){return Object(h.jsx)("a",{href:"http://example.com",children:t.Label},t.id)}));return Object(h.jsx)("div",{className:"card",children:e})}var j=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).state={data:""},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("http://127.0.0.1:3001/getLinks").then((function(t){return t.json()})).then((function(e){return t.setState({data:e.hmm})}))}},{key:"render",value:function(){var t=this.state.data?Object(h.jsx)(l,{links:this.state.data}):Object(h.jsx)("p",{children:"loading..."});return Object(h.jsx)("div",{className:"App",children:t})}}]),n}(a.a.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(j,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.4f15b706.chunk.js.map