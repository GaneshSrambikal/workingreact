(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),r=n.n(c),i=(n(14),n(1)),s=n(2),u=n(4),l=n(3),m=n(5),f=n(8),h=n.n(f),p=(n(15),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={customers:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/customers").then((function(e){return e.json()})).then((function(t){return e.setState({customers:t},(function(){console.log("customers fetched",t)}))}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Customers"),o.a.createElement("ul",null,this.state.customers.map((function(e){return o.a.createElement("li",{key:e.id}," ",e.firstName)}))))}}]),t}(o.a.Component)),d=(n(16),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"})),o.a.createElement(p,null))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.8f9b6dad.chunk.js.map