(this["webpackJsonpscheduler-component"]=this["webpackJsonpscheduler-component"]||[]).push([[0],{107:function(e,t,a){},110:function(e,t,a){e.exports=a.p+"static/media/tagforce_logo_and_text_black.d5eefb90.jpg"},138:function(e,t,a){e.exports=a(159)},143:function(e,t,a){},147:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),o=(a(143),a(16)),i=a(119),s=a(18),u=a(10),m=a(31),d=a.n(m),f=a(62),E=a(51),p=a(197),h="tagluz.azurewebsites.net",v={data:[],setData:Object(u.b)((function(e,t){e.data=t})),fetchData:Object(u.d)(function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://".concat(h,"/days/getAll"));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t.setData(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),loggedUser:{},setLoggedUser:Object(u.b)((function(e,t){e.loggedUser=t})),fetchLoggedUser:Object(u.d)(function(){var e=Object(f.a)(d.a.mark((function e(t,a){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://".concat(h,"/users/getUser/").concat(a));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,t.setLoggedUser(r);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),currentMonth:new Date,selectedDate:new Date,onSelectDate:Object(u.b)((function(e,t){e.selectedDate=t})),nextMonth:Object(u.b)((function(e,t){e.currentMonth=E.a(t,1)})),prevMonth:Object(u.b)((function(e,t){e.currentMonth=p.a(t,1)})),addShift:Object(u.d)(function(){var e=Object(f.a)(d.a.mark((function e(t,a){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://".concat(h,"/days/addShift"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,t.setData(r);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),addMessage:Object(u.d)(function(){var e=Object(f.a)(d.a.mark((function e(t,a){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://".concat(h,"/days/addMessage"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,t.setData(r);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),delShift:Object(u.d)(function(){var e=Object(f.a)(d.a.mark((function e(t,a){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://".concat(h,"/days/deleteShift"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,t.setData(r);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())},g=Object(u.c)(v),y=a(218),b=a(204),O=a(52),j=a(198),S=a(73),w=a.n(S),k=a(110),C=a.n(k);a(147);var M=function(e){var t=r.a.useState(""),a=Object(o.a)(t,2),n=a[0],c=a[1],l=r.a.useState(""),i=Object(o.a)(l,2),s=i[0],u=i[1],m=e.setIsUserKnown;return r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"column"},r.a.createElement(j.a,{color:"inherit",className:"logos"},r.a.createElement("span",{className:"logo-first-item"},r.a.createElement("img",{src:C.a,alt:"Tagforce logo",height:"30em"})),r.a.createElement("span",{className:"logo-divider"},"|"),r.a.createElement(w.a,null),r.a.createElement(O.a,{variant:"overline",style:{margin:"0.8em 0em 0em 0.25em"}},"Tagluz")),r.a.createElement("div",{className:"row"},r.a.createElement(y.a,{label:"Username:",id:"username",type:"username",autoFocus:!1,fullWidth:!1,value:n,onChange:function(e){c(e.target.value)}})),r.a.createElement("div",{className:"row"},r.a.createElement(y.a,{label:"Password:",id:"password",type:"password",autoFocus:!1,fullWidth:!1,value:s,onChange:function(e){u(e.target.value)}})),r.a.createElement("div",{className:"row"},r.a.createElement(b.a,{onClick:function(){return function(e,t){fetch("https://".concat("tagluz.azurewebsites.net","/users/checkUser/").concat(n,"/").concat(t)).then((function(e){return e.json()})).then((function(e){e&&(localStorage.setItem("username",n),m(!0))}))}(0,s)},color:"primary",fullWidth:!0,variant:"outlined"},"Log In"))))},N=a(212),x=a(213),D=a(214),T=a(220),U=a(208),A=a(206),z=a(205),F=a(112),I=a.n(F),W=a(207),L=a(219),_=a(113),J=a.n(_),P=a(114),B=a.n(P),R=(a(107),function(e){var t=r.a.useState(!1),a=Object(o.a)(t,2),n=a[0],c=a[1],l=r.a.useState(""),i=Object(o.a)(l,2),s=i[0],u=i[1],m=r.a.useState(!1),d=Object(o.a)(m,2),f=d[0],E=d[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{style:{display:e.display,marginRight:"1rem"},onClick:function(){return c(!0)}},r.a.createElement(I.a,null)),r.a.createElement(T.a,{open:n,onClose:function(){return c(!1)},"aria-labelledby":"form-dialog-title",className:"add-user-modal"},r.a.createElement(z.a,{id:"form-dialog-title"},"Add a User"),r.a.createElement(A.a,null,r.a.createElement(y.a,{autoFocus:!0,label:"User Name:",id:"name",type:"name",fullWidth:!1,value:s,onChange:function(e){u(e.target.value)}}),r.a.createElement("div",null,r.a.createElement(W.a,{control:r.a.createElement(L.a,{icon:r.a.createElement(J.a,null),checkedIcon:r.a.createElement(B.a,null),name:"makeAdmin",color:"secondary",value:f,onChange:function(){return E(!f)}}),label:"Appoint user admin"}))),r.a.createElement(U.a,null,r.a.createElement(b.a,{onClick:function(){!function(){var e={name:s,isAdmin:f};fetch("https://".concat("tagluz.azurewebsites.net","/users/mkUser"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){console.log("posted new user!")}))}(),u("")},color:"primary",size:"small"},"Add"))))}),H=a(209);var K=function(e){return r.a.createElement(T.a,{open:e.isModalOpen,onClose:e.onModalClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(z.a,{id:"alert-dialog-title"},"About Tagluz"),r.a.createElement(A.a,null,r.a.createElement(H.a,{id:"alert-dialog-description"},r.a.createElement("div",null,"Tagluz 0.91"),r.a.createElement("div",null,"By Pitamer"),r.a.createElement("div",null,"With lots of help from Ariel"))),r.a.createElement(U.a,null,r.a.createElement(b.a,{onClick:e.onModalClose,color:"primary",autoFocus:!0},"Nice :)")))},G=a(6),q=a(123),Q=a(222),V=a(89),X=a.n(V),Y=a(210),Z=a(211),$=a(115),ee=a.n($),te=Object(G.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return r.a.createElement(q.a,Object.assign({elevation:0,getContentAnchorEl:null},e))})),ae=Object(G.a)((function(e){return{root:{"&:focus":{backgroundColor:"var(--main-color)","& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(Q.a);function ne(e){var t=r.a.useState(null),a=Object(o.a)(t,2),n=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{color:"inherit","aria-haspopup":"true","aria-controls":"user-menu",onClick:function(e){c(e.currentTarget)}},r.a.createElement(X.a,null)),r.a.createElement(te,{id:"customized-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){c(null)}},r.a.createElement(ae,null,r.a.createElement(Y.a,null,r.a.createElement(X.a,{fontSize:"small"})),r.a.createElement(Z.a,{primary:e.username})),r.a.createElement(ae,{onClick:function(){localStorage.clear(),document.location.href="/"}},r.a.createElement(Y.a,null,r.a.createElement(ee.a,{fontSize:"small"})),r.a.createElement(Z.a,{primary:"Logout"}))))}var re=Object(N.a)((function(e){return{root:{flexGrow:1,zIndex:2,position:"relative"},appBar:{background:"var(--main-color)"},title:{marginRight:e.spacing(2),flexGrow:1},titleText:{margin:"0em 0em 0em 0.5em"}}}));var ce=function(){var e=r.a.useState(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(u.f)((function(e){return e.loggedUser})),l=re(),i=c.isAdmin?"":"none";return r.a.createElement("div",{className:l.root},r.a.createElement(x.a,{position:"static"},r.a.createElement(D.a,{className:l.appBar},r.a.createElement(O.a,{variant:"h6",className:l.title,onClick:function(){return n(!0)}},r.a.createElement(j.a,{color:"inherit",className:l.title},r.a.createElement(w.a,null),r.a.createElement(O.a,{variant:"button",className:l.titleText},"Tagluz"))),r.a.createElement(K,{isModalOpen:a,onModalClose:function(){return n(!1)}}),r.a.createElement(R,{display:i}),r.a.createElement(ne,{username:c.name}))))},le=a(215),oe=a(122);var ie=function(e){return r.a.createElement("div",{className:"col col-center icon",onClick:e.action},"chevron_",e.direction)};a(152);var se=function(){var e=Object(u.f)((function(e){return e.currentMonth})),t=Object(u.e)((function(e){return e.prevMonth})),a=Object(u.e)((function(e){return e.nextMonth}));return r.a.createElement("div",{className:"header"},r.a.createElement(le.a,{container:!0,spacing:3.5},r.a.createElement(le.a,{item:!0,xs:!0},r.a.createElement(ie,{direction:"left",action:function(){return t(e)}})),r.a.createElement(le.a,{item:!0,xs:6},r.a.createElement("div",{className:"col-center header-title"},r.a.createElement("span",null,oe.a(e,"MMMM yyyy")))),r.a.createElement(le.a,{item:!0,xs:!0},r.a.createElement(ie,{direction:"right",action:function(){return a(e)}}))))};a(153);var ue=function(){for(var e=[],t=0,a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];t<a.length;t++){var n=a[t];e.push(r.a.createElement("div",{className:"col col-center",key:n},n))}return r.a.createElement("div",{className:"days row"},e)},me=a(91),de=a(92),fe=a(93),Ee=a(94),pe=a(117),he=a(90),ve=a(118),ge=a(216),ye=a(5),be=a(221),Oe=Object(G.a)((function(e){return{tooltip:{}}}))(be.a);var je=function(e){var t=e.items.map((function(t){return r.a.createElement(O.a,{key:e.items.indexOf(t)},t)}));return r.a.createElement(Oe,{arrow:!0,placement:"top",title:t},r.a.createElement("span",{className:"icon"},e.icon))},Se=a(217),we=a(21),ke=a(121),Ce=Object(G.a)({root:{width:"5.5rem",margin:"0.5rem"}})(Se.a);var Me=function(e){return r.a.createElement(we.a,{utils:ke.a},r.a.createElement(Ce,{label:"Start",value:e.shiftStartTime,onChange:e.setShiftStartTime,minutesStep:5}),r.a.createElement(Ce,{label:"End",value:e.shiftEndTime,onChange:e.setShiftEndTime,minutesStep:5}))};var Ne=function(e){var t=r.a.useState(!1),a=Object(o.a)(t,2),n=a[0],c=a[1];if(e.items.length<1)return r.a.createElement(b.a,{disabled:!0},r.a.createElement("span",{className:"icon notifier"},e.icon));var l=function(){c(!0)},i=e.items.map((function(t){return r.a.createElement(O.a,{key:e.items.indexOf(t)},t)}));return r.a.createElement(be.a,{arrow:!0,placement:"top",title:i,onClose:function(){return c(!1)},open:n},r.a.createElement(b.a,{onClick:l,onMouseOver:l},r.a.createElement("span",{className:"icon notifier"},e.icon)))};a(154);var xe=function(e){var t=oe.a(e.day,"EEEE, MMMM d"),a=void 0!==e.userShift;r.a.useEffect((function(){f(a?e.userShift.startTime:e.day.setHours(8)),v(a?e.userShift.endTime:e.day.setHours(16))}),[a]);var n=Object(u.f)((function(e){return e.loggedUser})),c=Object(u.e)((function(e){return e.addShift})),l=Object(u.e)((function(e){return e.delShift})),i=Object(u.e)((function(e){return e.addMessage})),s=r.a.useState(null),m=Object(o.a)(s,2),d=m[0],f=m[1],E=r.a.useState(null),p=Object(o.a)(E,2),h=p[0],v=p[1],g=r.a.useState(""),O=Object(o.a)(g,2),j=O[0],S=O[1],w=n.isAdmin?"":"none",k=a?"":"none",C=a?"none":"",M=!a||j.length>1?"":"none",N=e.day.setHours(8);return r.a.createElement(T.a,{open:e.isModalOpen,onClose:e.onModalClose,"aria-labelledby":"form-dialog-title",className:"day-modal"},r.a.createElement(z.a,{id:"form-dialog-title"},t),r.a.createElement(A.a,null,r.a.createElement(Ne,{icon:"report",items:e.dayAlerts}),r.a.createElement(Ne,{icon:"textsms",items:e.dayFormattedMessages}),r.a.createElement(Ne,{icon:"people_alt",items:e.dayWorkers}),r.a.createElement("hr",null),r.a.createElement("div",{style:{display:C}},r.a.createElement(be.a,{arrow:!0,placement:"top",title:"Reserve full day"},r.a.createElement(b.a,{onClick:function(){var t={day:N,newShift:{user:n.name,startTime:d,endTime:h,isAllDay:!0}};console.log(t),c(t),e.onModalClose()},fullWidth:!0,variant:"contained",disableElevation:!0,style:{background:"rgba(255, 255, 0, 0.2)",border:"1px lightgrey solid"}},r.a.createElement("span",{className:"icon"},"bookmark_border"),"Reserve all day"))),r.a.createElement("div",{className:"time-range-picker ".concat(e.dayColor)},r.a.createElement(Me,{day:e.day,shiftStartTime:d,setShiftStartTime:f,shiftEndTime:h,setShiftEndTime:v})),r.a.createElement("div",{style:{display:k}},r.a.createElement(be.a,{arrow:!0,placement:"top",title:"Delete shift"},r.a.createElement(b.a,{onClick:function(){var t={day:N,user:e.userShift.user};l(t),e.onModalClose()},fullWidth:!0,variant:"contained",disableElevation:!0},r.a.createElement("span",{className:"icon"},"delete"),"Delete shift"))),r.a.createElement("div",{style:{display:w}},r.a.createElement(y.a,{autoFocus:!1,id:"name",label:"Add a Message",type:"name",fullWidth:!0,value:j,onChange:function(e){S(e.target.value)}}))),r.a.createElement(U.a,null,r.a.createElement("div",{style:{display:M}},r.a.createElement(b.a,{onClick:function(){if(j.length<1){var t={day:N,newShift:{user:n.name,startTime:d,endTime:h,isAllDay:!1}};console.log(t),c(t),e.onModalClose()}else{var a={day:N,newMessage:{user:n.name,content:j}};i(a),S("")}},color:"primary",size:"small"},"save"))))};a(155);var De=function(e){var t=Object(u.f)((function(e){return e.selectedDate})),a=Object(u.e)((function(e){return e.onSelectDate})),n=Object(u.f)((function(e){return e.loggedUser})),c=r.a.useState(!1),l=Object(o.a)(c,2),i=l[0],s=l[1],m=void 0===e.dayData?[]:e.dayData.shifts,d=void 0===e.dayData?[]:e.dayData.alerts,f=void 0===e.dayData?[]:e.dayData.messages,E=m.find((function(e){return e.user===n.name})),p=void 0===E?null:E.isAllDay?"yellow":"green",h=ve.a(e.day,e.monthStart)?ge.a(e.day)?"closed":pe.a(e.day,e.selectedDate)?"selected":null:"disabled",v=m.map((function(e){return e.user})),g=f.map((function(e){return"".concat(e.user,": ").concat(e.content)})),y=f.length<1?null:r.a.createElement(je,{icon:"textsms",items:g,key:"m"}),b=d.length<1?null:r.a.createElement(je,{icon:"report",items:d,key:"a"}),O=void 0===e.dayData?null:[y,b];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col cell ".concat(h),onClick:function(){return n=ye.a(e.day),void(pe.a(n,t)?s(!0):a(n));var n}},r.a.createElement("span",{className:"number ".concat(p)},e.formattedDate),r.a.createElement("span",{className:"bg"},e.formattedDate),r.a.createElement("div",{className:"notifiers-area"},O)),r.a.createElement(xe,{day:e.day,isModalOpen:i,onModalClose:function(){return s(!1)},dayFormattedMessages:g,dayWorkers:v,dayAlerts:d,userShift:E,dayColor:p}))};a(156);var Te=function(){for(var e=Object(u.f)((function(e){return e.currentMonth})),t=Object(u.f)((function(e){return e.selectedDate})),a=Object(u.f)((function(e){return e.data})),n=me.a(e),c=de.a(n),l=fe.a(n),o=Ee.a(c),i=[],s=[],m=l;m<=o;){for(var d=0;d<7;d++){var f=oe.a(m,"d"),E=a.find((function(e){return pe.a(new Date(e.date),m)}));s.push(r.a.createElement(De,{key:m,day:m,dayData:E,monthStart:n,selectedDate:t,formattedDate:f})),m=he.a(m,1)}i.push(r.a.createElement("div",{className:"row",key:m},s)),s=[]}return r.a.createElement("div",{className:"body"},i)};a(157);var Ue=function(){var e=Object(u.e)((function(e){return e.fetchData})),t=Object(u.e)((function(e){return e.fetchLoggedUser}));return Object(n.useEffect)((function(){var a=localStorage.getItem("username");a&&(e(),t(a))}),[]),r.a.createElement("div",{className:"calendar"},r.a.createElement(se,null),r.a.createElement(ue,null),r.a.createElement(Te,null))};var Ae=function(){var e=r.a.useState(null!==localStorage.getItem("username")),t=Object(o.a)(e,2),a=t[0],c=t[1],l=r.a.useState(""),m=Object(o.a)(l,2),d=m[0],f=m[1];return Object(n.useEffect)((function(){f(a?"/calendar":"/login")}),[a]),r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{store:g},r.a.createElement(i.a,null,d?r.a.createElement(s.a,{to:d}):r.a.createElement(r.a.Fragment,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/login"},r.a.createElement(M,{isUserKnown:a,setIsUserKnown:c})),r.a.createElement(s.b,{path:"/calendar"},r.a.createElement(ce,null),r.a.createElement("main",null,r.a.createElement(Ue,null))),r.a.createElement(s.b,{path:"*"},r.a.createElement(s.a,{to:d}))))))};l.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae,null)),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.b0bff3c2.chunk.js.map