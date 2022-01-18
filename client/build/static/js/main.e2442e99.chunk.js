(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/A2L-Logo.edb7fc46.png"},111:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(18),r=n.n(s),i=(n(101),n(28)),l=n(89),o=n(147),j=n(149),b=n(146),d=n(88),h=n(13),u=n(11),m=n(16),x=n(78),O=n(42),g=n(69),p=new(function(){function e(){Object(x.a)(this,e)}return Object(O.a)(e,[{key:"getProfile",value:function(){return Object(g.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!(!e||this.isTokenExpired(e))}},{key:"isTokenExpired",value:function(e){return Object(g.a)(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.reload()}}]),e}()),f=n(3),v=function(){return Object(f.jsx)("div",{className:"page-header header-filter content-center brand",children:Object(f.jsx)(m.d,{children:Object(f.jsxs)("div",{className:"content-center brand",children:[Object(f.jsx)(m.b,{alt:"...",src:n(105).default}),Object(f.jsx)("h3",{className:"d-none d-sm-block ",children:"The nation's #1 educational video streaming platform for teachers."}),Object(f.jsx)(m.h,{children:Object(f.jsx)(m.c,{children:Object(f.jsx)("div",{children:p.loggedIn()?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(h.b,{className:"btn btn-lg btn-info m-2",to:"/me",children:[p.getProfile().data.username,"'s profile"]}),Object(f.jsx)("button",{className:"btn btn-lg btn-light m-2",onClick:function(e){e.preventDefault(),p.logout()},children:"Logout"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(h.b,{className:"btn btn-lg btn-info m-2",to:"/login-page",children:"Login"}),Object(f.jsx)(h.b,{className:"btn btn-lg btn-danger m-2",to:"/register-page",children:"Register"})]})})})})]})})})},N=n(39),w=n(20),y=n(34),k=n.n(y),S=n(138),T=n(141),C=n(150),L=n(83),_=n.n(L),F=n(84),I=n.n(F),$=n(82),D=n.n($),E=n(85),A=n.n(E),P=Object(S.a)({root:{width:600,position:"relative",bottom:0,backgroundColor:"#2d313a",zIndex:100}});function Y(){var e=P(),t=c.a.useState(0),n=Object(w.a)(t,2),a=n[0],s=n[1];return Object(f.jsxs)(T.a,{value:a,onChange:function(e,t){s(t)},showLabels:!0,className:e.root,children:[Object(f.jsx)(C.a,{style:{color:"white"},label:"Trending",icon:Object(f.jsx)(D.a,{})}),Object(f.jsx)(C.a,{style:{color:"white"},label:"Favorites",icon:Object(f.jsx)(_.a,{})}),Object(f.jsx)(C.a,{style:{color:"white"},label:"Movies",icon:Object(f.jsx)(I.a,{})}),Object(f.jsx)(C.a,{style:{color:"white"},label:"Series",icon:Object(f.jsx)(A.a,{})})]})}function B(){var e=Object(a.useState)(""),t=Object(w.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),r=Object(w.a)(s,2),i=r[0],l=r[1],o=function(){var e=Object(N.a)(k.a.mark((function e(t){var a,c,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("submitting"),a="https://api.themoviedb.org/3/search/movie?api_key=f5f10715db30f53f7bbddc767108dd7c&language=en-US&query=".concat(n,"&include_adult=false"),e.prev=3,e.next=6,fetch(a);case 6:return c=e.sent,e.next=9,c.json();case 9:s=e.sent,l(s.results),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(m.e,{className:"searchform",onSubmit:o,children:[Object(f.jsx)(m.g,{className:"searchlabel",htmlForm:"query",children:"Try a Video Name"}),Object(f.jsx)(m.f,{className:"searchinput",type:"text",name:"query",placeholder:"i.e Toy Story",value:n,onChange:function(e){return c(e.target.value)}}),Object(f.jsx)(m.a,{className:"btn-round",color:"primary",size:"lg",type:"submit",children:"Search"})]}),Object(f.jsx)("div",{className:"card-list",children:i.filter((function(e){return e.poster_path})).map((function(e){return Object(f.jsxs)("div",{className:"searchcard",children:[Object(f.jsx)("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(e.poster_path),alt:e.title+" poster"}),Object(f.jsxs)("div",{className:"card--content",children:[Object(f.jsx)("h3",{className:"card--title",children:e.title}),Object(f.jsx)("p",{children:Object(f.jsxs)("small",{children:["RELEASE DATE: ",e.release_date]})}),Object(f.jsx)("p",{children:Object(f.jsxs)("small",{children:["RATING: ",e.vote_average]})}),Object(f.jsx)("p",{className:"card--desc",children:e.overview})]})]},e.id)}))}),Object(f.jsx)(Y,{})]})}function R(){return c.a.useEffect((function(){return document.body.classList.toggle("landing-page"),function(){document.body.classList.toggle("landing-page")}}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"wrapper",children:Object(f.jsx)("div",{className:"page-header",children:Object(f.jsx)("div",{className:"content-center",children:Object(f.jsx)(m.h,{className:"row-grid justify-content-between align-items-center text-left",children:Object(f.jsxs)(m.c,{lg:"6",md:"6",children:[Object(f.jsxs)("h1",{className:"text-black",children:["Search for Quality ",Object(f.jsx)("br",{}),Object(f.jsx)("span",{className:"text-black",children:"Content"})]}),Object(f.jsx)("p",{className:"text-black mb-3",children:"With over 10,000 vetted educational videos, you can leverage the power of video and kinesthetics to engage today's learners."}),Object(f.jsx)("div",{className:"btn-wrapper mb-3",children:Object(f.jsx)("p",{className:"category text-success d-inline",children:"Search with a keyword or phrase"})}),Object(f.jsx)("div",{className:"btn-wrapper",children:Object(f.jsx)("div",{className:"button-container",children:Object(f.jsx)(B,{})})})]})})})})})})}var q,U,z=n(25),M=n(151),G=n(71),J=n(148),Q=Object(J.a)(q||(q=Object(G.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        name\n      }\n    }\n  }\n"]))),V=Object(J.a)(U||(U=Object(G.a)(["\n  mutation addUser($name: String!, $email: String!, $password: String!) {\n    addUser(name: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        name\n      }\n    }\n  }\n"]))),W=function(){var e=Object(a.useState)({name:"",email:"",password:""}),t=Object(w.a)(e,2),n=t[0],c=t[1],s=Object(M.a)(V),r=Object(w.a)(s,2),l=r[0],o=r[1],j=o.error,b=o.data,d=function(e){var t=e.target,a=t.name,s=t.value;c(Object(i.a)(Object(i.a)({},n),{},Object(z.a)({},a,s)))},u=function(){var e=Object(N.a)(k.a.mark((function e(t){var a,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(n),e.prev=2,e.next=5,l({variables:Object(i.a)({},n)});case 5:a=e.sent,c=a.data,p.login(c.addUser.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("main",{className:"flex-row justify-center mb-4",children:Object(f.jsx)("div",{className:"col-12 col-lg-10",children:Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("h4",{className:"card-header bg-dark text-light p-2",children:"Register"}),Object(f.jsxs)("div",{className:"card-body",children:[b?Object(f.jsxs)("p",{children:["Success! You may now head"," ",Object(f.jsx)(h.b,{to:"/",children:"back to the video page."})]}):Object(f.jsxs)("form",{onSubmit:u,children:[Object(f.jsx)("input",{className:"form-input",placeholder:"Your name",name:"name",type:"text",value:n.name,onChange:d}),Object(f.jsx)("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",value:n.email,onChange:d}),Object(f.jsx)("input",{className:"form-input",placeholder:"Password",name:"password",type:"password",value:n.password,onChange:d}),Object(f.jsx)("button",{className:"btn btn-block btn-primary",style:{cursor:"pointer"},type:"submit",children:"Submit"})]}),j&&Object(f.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:j.message})]})]})})})},H=function(e){var t=Object(a.useState)({email:"",password:""}),n=Object(w.a)(t,2),c=n[0],s=n[1],r=Object(M.a)(Q),l=Object(w.a)(r,2),o=l[0],j=l[1],b=j.error,d=j.data,u=function(e){var t=e.target,n=t.name,a=t.value;s(Object(i.a)(Object(i.a)({},c),{},Object(z.a)({},n,a)))},m=function(){var e=Object(N.a)(k.a.mark((function e(t){var n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(c),e.prev=2,e.next=5,o({variables:Object(i.a)({},c)});case 5:n=e.sent,a=n.data,p.login(a.login.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:s({email:"",password:""});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("main",{className:"flex-row justify-center mb-4",children:Object(f.jsx)("div",{className:"col-12 col-lg-10",children:Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("h4",{className:"card-header bg-dark text-light p-2",children:"Login"}),Object(f.jsxs)("div",{className:"card-body",children:[d?Object(f.jsxs)("p",{children:["Success! You may now head"," ",Object(f.jsx)(h.b,{to:"/",children:"back to the video page."})]}):Object(f.jsxs)("form",{onSubmit:m,children:[Object(f.jsx)("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",value:c.email,onChange:u}),Object(f.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",value:c.password,onChange:u}),Object(f.jsx)("button",{className:"btn btn-block btn-primary",style:{cursor:"pointer"},type:"submit",children:"Submit"})]}),b&&Object(f.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:b.message})]})]})})})},K=function(){return Object(f.jsx)("header",{className:"bg-primary text-light mb-4 py-3 flex-row align-center",children:Object(f.jsxs)("div",{className:"container flex-row justify-space-between-lg justify-center align-center",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)(h.b,{className:"text-light",to:"/",children:Object(f.jsx)("h1",{className:"m-0",children:"A2L"})}),Object(f.jsx)("p",{className:"m-0",children:"Adventure 2 Learning"})]}),Object(f.jsx)("div",{children:p.loggedIn()?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(h.b,{className:"btn btn-lg btn-info m-2",to:"/landing-page",children:[p.getProfile().data.username,"'s video dashboard"]}),Object(f.jsx)("button",{className:"btn btn-lg btn-light m-2",onClick:function(e){e.preventDefault(),p.logout()},children:"Logout"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(h.b,{className:"btn btn-lg btn-info m-2",to:"/login-page",children:"Login"}),Object(f.jsx)(h.b,{className:"btn btn-lg btn-light m-2",to:"/register-page",children:"Register"})]})})]})})},X=function(){var e=Object(u.g)(),t=Object(u.f)();return Object(f.jsx)("footer",{className:"w-100 mt-auto bg-secondary p-4",children:Object(f.jsxs)("div",{className:"container text-center mb-5",children:["/"!==e.pathname&&Object(f.jsx)("button",{className:"btn btn-dark mb-3",onClick:function(){return t.goBack()},children:"\u2190 Go Back"}),Object(f.jsx)("div",{className:"footer-copyright text-center py-3",children:Object(f.jsxs)("container",{fluid:!0,children:["\xa9 ",(new Date).getFullYear()," Copyright ",Object(f.jsx)("a",{href:"https://www.adventure2learning.com",children:" Adventure 2 Learning "})]})})]})})},Z=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"pageTitle",children:"Trending"})})},ee=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"pageTitle",children:"Movies"})})},te=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"pageTitle",children:"Favorites"})})},ne=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"pageTitle",children:"Series"})})},ae=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"pageTitle",children:"Search"})})},ce=Object(l.a)({uri:"/graphql"}),se=Object(d.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),re=new o.a({link:se.concat(ce),cache:new j.a});var ie=function(){return Object(f.jsx)(b.a,{client:re,children:Object(f.jsx)(h.a,{children:Object(f.jsxs)("div",{className:"flex-column justify-flex-start min-100-vh",children:[Object(f.jsx)(K,{}),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(u.a,{exact:!0,path:"/",children:Object(f.jsx)(v,{})}),Object(f.jsx)(u.a,{exact:!0,path:"/login-page",children:Object(f.jsx)(H,{})}),Object(f.jsx)(u.a,{exact:!0,path:"/register-page",children:Object(f.jsx)(W,{})}),Object(f.jsx)(u.a,{exact:!0,path:"/landing-page",children:Object(f.jsx)(R,{})}),Object(f.jsx)(m.d,{children:Object(f.jsxs)(u.c,{children:[Object(f.jsx)(u.a,{path:"/trending",component:Z}),Object(f.jsx)(u.a,{path:"/favorites",component:te}),Object(f.jsx)(u.a,{path:"/movies",component:ee}),Object(f.jsx)(u.a,{path:"/search",component:ae}),Object(f.jsx)(u.a,{path:"/series",component:ne})]})})]}),Object(f.jsx)(X,{})]})})})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(ie,{})}),document.getElementById("root")),le()}},[[111,1,2]]]);
//# sourceMappingURL=main.e2442e99.chunk.js.map