(this.webpackJsonpgratitude=this.webpackJsonpgratitude||[]).push([[0],{106:function(e,t,s){},107:function(e,t,s){},113:function(e,t,s){},114:function(e,t,s){},116:function(e,t,s){},117:function(e,t,s){},136:function(e,t,s){},137:function(e,t,s){},138:function(e,t,s){},139:function(e,t,s){},140:function(e,t,s){},141:function(e,t,s){},142:function(e,t,s){},143:function(e,t,s){},242:function(e,t,s){},261:function(e,t,s){},262:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(93),n=s.n(c),r=(s(106),s(107),s(0)),i=function(){var e,t="clicked",s=document.body,a="light",c="dark";localStorage&&(e=localStorage.getItem("theme")),e===a||e===c?s.classList.add(e):s.classList.add(a);return Object(r.jsx)("button",{className:"dark"===e?t:"",id:"darkMode",onClick:function(n){return function(n){e===c?(s.classList.replace(c,a),n.target.classList.remove(t),localStorage.setItem("theme","light"),e=a):(s.classList.replace(a,c),n.target.classList.add(t),localStorage.setItem("theme","dark"),e=c)}(n)}})},o=s(9),l=s(2),u=s(57),j=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"UPDATE_START":return Object(u.a)(Object(u.a)({},e),{},{isFetching:!0});case"UPDATE_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"UPDATE_FAILURE":return{user:e.user,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return e}},d={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},b=Object(a.createContext)(d),h=function(e){var t=e.children,s=Object(a.useReducer)(j,d),c=Object(l.a)(s,2),n=c[0],i=c[1];return Object(a.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n.user))}),[n.user]),Object(r.jsx)(b.Provider,{value:{user:n.user,isFetching:n.isFetching,error:n.error,dispatch:i},children:t})},p=function(){var e=Object(a.useContext)(b),t=e.user,s=e.dispatch;console.log(t);return Object(r.jsxs)("div",{className:"nav",children:[Object(r.jsx)("div",{className:"topLeft",children:Object(r.jsx)("img",{src:"data:image/png;base64,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",alt:"gratitude-logo"})}),Object(r.jsx)("div",{className:"topCenter",children:Object(r.jsxs)("ul",{className:"topList",children:[Object(r.jsx)("li",{className:"topListItem",children:Object(r.jsx)(o.b,{to:"/",className:"link",children:"HOME"})}),Object(r.jsx)("li",{className:"topListItem",children:Object(r.jsx)(o.b,{to:"/info",className:"link",children:"INFO"})}),Object(r.jsx)("li",{className:"topListItem",children:Object(r.jsx)(o.b,{to:"/write",className:"link",children:"WRITE"})}),Object(r.jsx)("li",{className:"topListItem",onClick:function(){s({type:"LOGOUT"}),window.location.replace("/")},children:t&&"LOGOUT"})]})}),Object(r.jsxs)("div",{className:"topRight",children:[null!=t?Object(r.jsx)(o.b,{to:"/settings",children:t.others.profilePicture?Object(r.jsx)("img",{src:"https://omi-gratitude-journal.herokuapp.com/images/"+t.others.profilePicture,className:"topImg",alt:"user-image"}):Object(r.jsx)("i",{className:"far fa-user defaultImg"})}):Object(r.jsxs)("ul",{className:"topList",children:[Object(r.jsx)("li",{className:"topListItem",children:Object(r.jsx)(o.b,{className:"link",to:"/login",children:"LOGIN"})}),Object(r.jsx)("li",{className:"topListItem",children:Object(r.jsx)(o.b,{className:"link",to:"/register",children:"REGISTER"})})]}),Object(r.jsx)(i,{})]})]})},m=(s(113),s(114),s.p+"static/media/header-image.9149585d.jpg"),O=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsxs)("div",{className:"headerTitles",children:[Object(r.jsx)("span",{className:"headerTitleSmall",children:"My Gratitude"}),Object(r.jsx)("span",{className:"headerTitleLarge",children:"Journal"})]}),Object(r.jsx)("img",{className:"headerImg",src:m,alt:"header-image"})]})},x=s(3),g=s.n(x),f=s(7),v=(s(116),s(117),function(e){var t=e.post;return Object(r.jsx)(o.b,{to:"/post/".concat(t.id),className:"link",children:Object(r.jsxs)("div",{className:"post",children:[t.photo?Object(r.jsx)("img",{className:"postImg",src:"https://omi-gratitude-journal.herokuapp.com/images/"+t.photo,alt:""}):Object(r.jsx)("img",{className:"postImg",src:"https://source.unsplash.com/random?gratitude?inspiration?sig=".concat(Math.random()),alt:""}),Object(r.jsx)("div",{className:"postInfo",children:Object(r.jsx)("span",{className:"postDate",children:new Date(t.createdAt).toDateString()})}),Object(r.jsx)("p",{className:"postDesc",children:t.desc})]})})}),w=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"defaultPara",children:'"Please either register or login to begin writing your gratitude journal."'})})},N=s(8),I=s.n(N),y=s(95),Q=s.n(y),C=(s(67),function(){return Object(r.jsx)("div",{className:"loadingWrapper",children:Object(r.jsxs)("div",{className:"lds-ripple",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})})}),E=function(){var e=Object(a.useContext)(b).user,t=Object(a.useState)([]),s=Object(l.a)(t,2),c=s[0],n=s[1],i=Object(a.useState)(1),o=Object(l.a)(i,2),u=o[0],j=o[1],d=Object(a.useState)(0),h=Object(l.a)(d,2),p=h[0],m=h[1],O=Object(a.useState)(!1),x=Object(l.a)(O,2),N=x[0],y=x[1];Object(a.useEffect)((function(){(function(){var t=Object(f.a)(g.a.mark((function t(){var s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(!0),6,t.next=4,I.a.get("https://omi-gratitude-journal.herokuapp.com/api/posts/?user=".concat(e.others.username,"&page=").concat(u,"&size=").concat(6),{headers:{accessToken:e.accessToken}});case 4:s=t.sent,n(s.data.content),m(s.data.totalPages);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()(),y(!1)}),[e,u,p]);return N?Object(r.jsx)(C,{}):null!=e?c.length>0?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"posts",children:[c.map((function(e,t){return Object(r.jsx)(v,{post:e},t)})),Object(r.jsx)(Q.a,{previousLabel:"Previous",nextLabel:"Next",pageCount:p,onPageChange:function(e){var t=e.selected;console.log("click"),console.log(u),j(t+1)},breakLabel:"...",containerClassName:"paginationBtn",previousLinkClassName:"previousBtn",nextLinkClassName:"nextBtn",activeClassName:"paginationActive"})]}),Object(r.jsx)("div",{})]}):Object(r.jsx)("div",{className:"noPosts",children:Object(r.jsx)("p",{className:"noPostsPara",children:'"No Posts to display, please click on write tab to start writing your gratitude journal"'})}):Object(r.jsx)(w,{})},k=(s(136),function(){return Object(r.jsxs)("div",{className:"main-loader",children:[Object(r.jsx)("div",{className:"bar bar1"}),Object(r.jsx)("div",{className:"bar bar2"}),Object(r.jsx)("div",{className:"bar bar3"}),Object(r.jsx)("div",{className:"bar bar4"}),Object(r.jsx)("div",{className:"bar bar5"}),Object(r.jsx)("div",{className:"bar bar6"}),Object(r.jsx)("div",{className:"bar bar7"}),Object(r.jsx)("div",{className:"bar bar8"})]})}),P=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)([]),i=Object(l.a)(n,2),o=i[0],u=i[1],j=function(){var e=Object(f.a)(g.a.mark((function e(){var t,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,fetch("http://quotes.rest/qod.json?category=inspire");case 4:return t=e.sent,e.next=7,t.json();case 7:s=e.sent,c(!1),u(s.contents.quotes[0]),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),c(!1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){j()}),[]),s?Object(r.jsx)(k,{}):Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsxs)("div",{className:"sidebarItem",children:[Object(r.jsx)("span",{className:"sidebarTitle",children:"Quote of the Day"}),Object(r.jsx)("img",{className:"sidebarImg",src:o.background,alt:"quotebackground"}),Object(r.jsx)("q",{className:"quote",children:o.quote}),Object(r.jsxs)("figcaption",{className:"quoteAuthor",children:["\u2014 ",o.author,","," ",Object(r.jsx)("cite",{children:Object(r.jsx)("a",{href:"https://theysaidso.com",className:"quoteLink",children:"They Said So"})})]})]})})},B=function(){var e=Object(a.useContext)(b).user;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O,{}),Object(r.jsxs)("div",{className:"home",children:[null!=e&&Object(r.jsx)(E,{}),Object(r.jsx)(P,{})]})]})},A=(s(137),s(138),function(){var e=Object(a.useContext)(b),t=e.user,s=e.dispatch,c=Object(a.useState)(null),n=Object(l.a)(c,2),i=n[0],o=n[1],u=Object(a.useState)(""),j=Object(l.a)(u,2),d=j[0],h=j[1],p=Object(a.useState)(""),m=Object(l.a)(p,2),O=m[0],x=m[1],v=Object(a.useState)(!1),w=Object(l.a)(v,2),N=w[0],y=w[1],Q=Object(a.useState)(!1),C=Object(l.a)(Q,2),E=C[0],k=C[1];console.log(t.others.id);var B=function(){var e=Object(f.a)(g.a.mark((function e(){var s,a,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("https://omi-gratitude-journal.herokuapp.com/api/data/?user="+t.others.username);case 3:s=e.sent,a=window.URL.createObjectURL(new Blob([s.data])),(c=document.createElement("a")).href=a,c.setAttribute("download","gratitudejournal.csv"),document.body.appendChild(c),c.click(),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(f.a)(g.a.mark((function e(a){var c,n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),s({type:"UPDATE_START"}),c={id:t.others.id,email:d,password:O},!i){e.next=16;break}return n=new FormData,r=Date.now()+i.name,n.append("name",r),n.append("file",i),c.profilePicture=r,e.prev=9,e.next=12,I.a.post("https://omi-gratitude-journal.herokuapp.com/api/upload",n);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.prev=16,e.next=19,I.a.put("https://omi-gratitude-journal.herokuapp.com/api/users/"+t.others.id,c,{headers:{accessToken:t.accessToken}});case 19:e.sent,y(!0),setTimeout((function(){window.location.replace("/login")}),3e3),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(16),s({type:"UPDATE_FAILURE"});case 27:case"end":return e.stop()}}),e,null,[[9,14],[16,24]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert("Are you sure you want to delete your account?"),e.prev=1,e.next=4,I.a.delete("https://omi-gratitude-journal.herokuapp.com/api/users/"+t.others.id,{headers:{accessToken:t.accessToken},data:{id:t.others.id,username:t.others.username}});case 4:k(!0),setTimeout((function(){s({type:"LOGOUT"})}),2e3),setTimeout((function(){window.location.replace("/")}),2e3),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"settings",children:[Object(r.jsxs)("div",{className:"settingsWrapper",children:[Object(r.jsx)("div",{className:"settingsTitle",children:Object(r.jsx)("span",{className:"settingsUpdate",children:"Update Account"})}),Object(r.jsxs)("form",{className:"settingsForm",onSubmit:A,children:[Object(r.jsx)("label",{children:"Profile Picture"}),Object(r.jsxs)("div",{className:"settingsPicture",children:[Object(r.jsx)("img",{src:i?URL.createObjectURL(i):"https://omi-gratitude-journal.herokuapp.com/images/"+t.others.profilePicture,alt:""}),Object(r.jsx)("label",{htmlFor:"fileInput",children:Object(r.jsx)("i",{className:"far fa-user-circle settingsProfileIcon"})}),Object(r.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return o(e.target.files[0])}})]}),Object(r.jsx)("label",{children:"Email"}),Object(r.jsx)("input",{type:"email",placeholder:t.others.email,onChange:function(e){return h(e.target.value)},required:!0}),Object(r.jsx)("label",{children:"Password"}),Object(r.jsx)("input",{type:"password",onChange:function(e){return x(e.target.value)},required:!0}),Object(r.jsx)("button",{className:"settingsSubmit",type:"submit",children:"Update"}),N&&Object(r.jsx)("span",{style:{color:"green",textAlign:"center",marginTop:"20px"},children:"Profile has been updated..."})]}),Object(r.jsx)("button",{className:"dataButton",type:"submit",onClick:B,children:"Download Data (CSV format)"}),Object(r.jsx)("button",{className:"deleteButton",type:"submit",onClick:S,children:"Delete Account"}),E&&Object(r.jsx)("span",{style:{color:"green",textAlign:"center",marginTop:"20px",marginLeft:"15px"},children:"Your account has been deleted..."})]}),Object(r.jsx)(P,{})]})}),S=(s(139),s(4)),L=(s(140),function(){var e=Object(S.f)().pathname.split("/")[2],t=Object(a.useState)([]),s=Object(l.a)(t,2),c=s[0],n=s[1],i=Object(a.useContext)(b).user,o=Object(a.useState)(""),u=Object(l.a)(o,2),j=u[0],d=u[1],h=Object(a.useState)(!1),p=Object(l.a)(h,2),m=p[0],O=p[1];Object(a.useEffect)((function(){(function(){var t=Object(f.a)(g.a.mark((function t(){var s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.get("https://omi-gratitude-journal.herokuapp.com/api/posts/"+e);case 2:s=t.sent,n(s.data),d(s.data.desc);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var x=function(){var t=Object(f.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I.a.delete("https://omi-gratitude-journal.herokuapp.com/api/posts/"+e,{headers:{accessToken:i.accessToken},data:{username:i.others.username}});case 3:t.sent,window.location.replace("/"),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(f.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I.a.put("https://omi-gratitude-journal.herokuapp.com/api/posts/"+e,{username:i.others.username,desc:j});case 3:O(!1),console.log("handle update"),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"singlePost",children:Object(r.jsxs)("div",{className:"singlePostWrapper",children:[c.photo&&Object(r.jsx)("img",{src:"https://omi-gratitude-journal.herokuapp.com/images/"+c.photo,alt:"",className:"singlePostImg"}),Object(r.jsxs)("div",{className:"singlePostEdit",children:[Object(r.jsx)("i",{className:"far fa-edit singlePostIcon",onClick:function(){return O(!0)}}),Object(r.jsx)("i",{className:"far fa-trash-alt singlePostIcon",onClick:x})]}),Object(r.jsx)("div",{className:"singlePostInfo",children:Object(r.jsx)("span",{className:"singlePostDate",children:new Date(c.createdAt).toDateString()})}),m?Object(r.jsx)("textarea",{className:"singlePostDescInput",value:j,onChange:function(e){return d(e.target.value)}}):Object(r.jsx)("p",{className:"singlePostDesc",children:j}),m&&Object(r.jsx)("button",{className:"singlePostButton",onClick:v,children:"Update"})]})})}),T=function(){return Object(r.jsxs)("div",{className:"single",children:[Object(r.jsx)(L,{}),Object(r.jsx)(P,{})]})},G=(s(141),function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(null),i=Object(l.a)(n,2),o=i[0],u=i[1],j=Object(a.useState)(!1),d=Object(l.a)(j,2),h=d[0],p=d[1],m=Object(a.useContext)(b).user,O=function(){var e=Object(f.a)(g.a.mark((function e(t){var a,c,n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),p(!0),a={username:m.others.username,desc:s},!o){e.next=16;break}return c=new FormData,n=Date.now()+o.name,c.append("name",n),c.append("file",o),a.photo=n,e.prev=9,e.next=12,I.a.post("https://omi-gratitude-journal.herokuapp.com/api/upload",c);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.prev=16,e.next=19,I.a.post("https://omi-gratitude-journal.herokuapp.com/api/posts",a,{headers:{accessToken:m.accessToken}});case 19:r=e.sent,p(!1),window.location.replace("/post/"+r.data.id),e.next=26;break;case 24:e.prev=24,e.t1=e.catch(16);case 26:case"end":return e.stop()}}),e,null,[[9,14],[16,24]])})));return function(t){return e.apply(this,arguments)}}();return h?Object(r.jsx)(C,{}):Object(r.jsxs)("div",{className:"write",children:[o&&Object(r.jsx)("img",{src:URL.createObjectURL(o),alt:"",className:"writeImg"}),Object(r.jsxs)("form",{onSubmit:O,className:"writeForm",children:[Object(r.jsxs)("div",{className:"writeFormGroup",children:[Object(r.jsx)("label",{htmlFor:"fileInput",children:Object(r.jsx)("i",{className:"far fa-image writeIcon"})}),Object(r.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return u(e.target.files[0])}})]}),Object(r.jsxs)("div",{className:"writeFormGroup",children:[Object(r.jsx)("textarea",{placeholder:'I am grateful for "what" , because "why"..',type:"text",className:"writeInput writeText",style:{resize:"none"},onChange:function(e){return c(e.target.value)}}),Object(r.jsx)("button",{className:"writeSubmit",type:"submit",children:"Save"})]})]})]})}),z=(s(142),function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(!1),i=Object(l.a)(n,2),u=i[0],j=i[1],d=Object(a.useRef)(),h=Object(a.useRef)(),p=Object(a.useContext)(b),m=p.dispatch,O=p.isFetching,x=function(){var e=Object(f.a)(g.a.mark((function e(t){var s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),j(!0),m({type:"LOGIN_START"}),e.prev=3,e.next=6,I.a.post("https://omi-gratitude-journal.herokuapp.com/api/auth/login",{username:d.current.value,password:h.current.value});case 6:s=e.sent,m({type:"LOGIN_SUCCESS",payload:s.data}),j(!1),window.location.replace("/"),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(3),c(!0),j(!1),m({type:"LOGIN_FAILURE"});case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return u?Object(r.jsx)(C,{}):Object(r.jsxs)("div",{className:"login",children:[Object(r.jsx)("span",{className:"loginTitle",children:"Login"}),Object(r.jsxs)("form",{className:"loginForm",onSubmit:x,children:[Object(r.jsx)("label",{children:"Username"}),Object(r.jsx)("input",{type:"text",placeholder:"Enter your username",className:"loginInput",ref:d}),Object(r.jsx)("label",{children:"Password"}),Object(r.jsx)("input",{type:"password",placeholder:"Enter your password",className:"loginInput",ref:h}),Object(r.jsx)("button",{className:"logButton",type:"submit",disabled:O,children:Object(r.jsx)(o.b,{to:"/login",className:"link",children:"Login"})}),Object(r.jsx)("button",{className:"registerButton",children:Object(r.jsx)(o.b,{to:"/register",className:"link",children:"Register"})})]}),s&&Object(r.jsx)("span",{style:{color:"red",marginTop:"10px"},children:"Wrong Username or Email"})]})}),D=(s(143),s(33)),H=s(20),F=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(!1),i=Object(l.a)(n,2),u=i[0],j=i[1],d=D.a().shape({username:D.b().min(3).max(15).required("Username should be between 3 and 15 characters"),email:D.b().email().required("Valid email is required"),password:D.b().min(4).max(20).required("Password should be between 4 to 20 characters long")});if(u)return Object(r.jsx)(C,{});var b=function(){var e=Object(f.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,I.a.post("https://omi-gratitude-journal.herokuapp.com/api/auth/register",t);case 4:e.sent,j(!1),window.location.replace("/login"),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),c(!0),j(!1),window.location.replace("/register");case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"register",children:[Object(r.jsx)("span",{className:"registerTitle",children:"Register"}),Object(r.jsx)(H.d,{initialValues:{username:"",email:"",password:""}||"",onSubmit:b,validationSchema:d,children:Object(r.jsxs)(H.c,{className:"registerForm",children:[Object(r.jsx)("label",{children:"Username"}),Object(r.jsx)(H.a,{name:"username",component:"span",style:{color:"#1E1E01",paddingBottom:"10px"}}),Object(r.jsx)(H.b,{autoComplete:"off",className:"registerInput",name:"username",placeholder:"John123..."}),Object(r.jsx)("label",{children:"Email"}),Object(r.jsx)(H.a,{name:"email",component:"span",style:{color:"#1E1E01",paddingBottom:"10px"}}),Object(r.jsx)(H.b,{autoComplete:"off",className:"registerInput",name:"email",placeholder:"john@gmail.com..."}),Object(r.jsx)("label",{children:"Password"}),Object(r.jsx)(H.a,{name:"password",component:"span",style:{color:"#1E1E01",paddingBottom:"10px"}}),Object(r.jsx)(H.b,{autoComplete:"off",className:"registerInput",name:"password",placeholder:"Your password..."}),Object(r.jsx)("button",{className:"regButton",type:"submit",disabled:u,children:Object(r.jsx)(o.b,{className:"link",to:"/register",children:"Register"})})]})}),Object(r.jsx)("button",{className:"loginButton",children:Object(r.jsx)(o.b,{className:"link",to:"/login",children:"Login"})}),s&&Object(r.jsx)("span",{style:{color:"red",marginTop:"10px"},children:"Username or Email already exists"})]})},U=(s(242),s(101)),R=s.n(U),q=function(){return Object(r.jsxs)("div",{className:"info",children:[Object(r.jsxs)("h3",{className:"question1",children:["What is ",Object(r.jsx)("bold",{children:"Gratefulness"})," ?"]}),Object(r.jsx)("p",{className:"question1para",children:"Gratefulness is the key to a happy life that we hold in our hands, because if we are not grateful, then no matter how much we have we will not be happy \u2014 because we will always want to have something else or something more"}),Object(r.jsx)("cite",{className:"question1cite",children:" \u2014Br. David Steindl-Rast"}),Object(r.jsx)("h3",{className:"question2",children:"How Do We Practice Gratefulness?"}),Object(r.jsx)("p",{className:"question2para",children:"We cannot be grateful for all that a given moment brings us; yet, in any given moment, we can be grateful for something. The gift within the gift of any given moment is opportunity."}),Object(r.jsx)("cite",{className:"question1cite",children:" \u2014Br. David Steindl-Rast"}),Object(r.jsx)(R.a,{url:"https://www.youtube.com/watch?v=SsUklExYGhw&ab_channel=SoundsTrue"}),Object(r.jsx)("h3",{className:"question3",children:"Why should you write Gratitude Journal?"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{className:"listitem",children:"Increases Positivity"}),Object(r.jsx)("li",{className:"listitem",children:"Improves Self-Esteem"}),Object(r.jsx)("li",{className:"listitem",children:"Improves Sleep"}),Object(r.jsx)("li",{className:"listitem",children:"Makes you happier"}),Object(r.jsx)("li",{className:"listitem",children:"Reduces Stress"})]}),Object(r.jsx)("cite",{className:"question1cite",children:" \u2014Yoni Cohen (Happify.com)"})]})},V=(s(261),function(){return Object(r.jsx)("div",{className:"footer",children:"Made with \u2661 by Omisha Patel"})});var W=function(){var e=Object(a.useContext)(b).user;return Object(r.jsxs)(o.a,{children:[Object(r.jsx)(p,{}),Object(r.jsxs)(S.c,{children:[Object(r.jsx)(S.a,{exact:!0,path:"/",children:Object(r.jsx)(B,{})}),Object(r.jsx)(S.a,{path:"/register",children:e?Object(r.jsx)(B,{}):Object(r.jsx)(F,{})}),Object(r.jsx)(S.a,{path:"/login",children:Object(r.jsx)(z,{})}),Object(r.jsx)(S.a,{path:"/write",children:e?Object(r.jsx)(G,{}):Object(r.jsx)(z,{})}),Object(r.jsx)(S.a,{path:"/settings",children:e?Object(r.jsx)(A,{}):Object(r.jsx)(z,{})}),Object(r.jsx)(S.a,{path:"/info",children:Object(r.jsx)(q,{})}),Object(r.jsx)(S.a,{path:"/post/:postId",children:e?Object(r.jsx)(T,{}):Object(r.jsx)(z,{})})]}),Object(r.jsx)(V,{})]})};n.a.render(Object(r.jsx)(h,{children:Object(r.jsx)(W,{})}),document.getElementById("root"))},67:function(e,t,s){}},[[262,1,2]]]);
//# sourceMappingURL=main.6e43a488.chunk.js.map