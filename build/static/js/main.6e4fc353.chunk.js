(this["webpackJsonpscheduler-component"]=this["webpackJsonpscheduler-component"]||[]).push([[0],{106:function(e,t,a){},109:function(e,t,a){e.exports=a.p+"static/media/tagforce_logo_and_text_black.d5eefb90.jpg"},140:function(e,t,a){e.exports=a(161)},145:function(e,t,a){},149:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),o=(a(145),a(16)),i=a(118),s=a(18),u=a(10),m=a(31),d=a.n(m),f=a(62),E=a(51),p=a(197),h="tagluz.azurewebsites.net",g={data:[],setData:Object(u.b)((function(e,t){e.data=t})),fetchData:Object(u.d)(function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://".concat(h,"/days/getAll"));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t.setData(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),loggedUser:{},setLoggedUser:Object(u.b)((function(e,t){e.loggedUser=t})),fetchLoggedUser:Object(u.d)(function(){var e=Object(f.a)(d.a.mark((function e(t,a){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://".concat(h,"/users/getUser/").concat(a));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,t.setLoggedUser(r);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),currentMonth:new Date,selectedDate:new Date,onSelectDate:Object(u.b)((function(e,t){e.selectedDate=t})),nextMonth:Object(u.b)((function(e,t){e.currentMonth=E.a(t,1)})),prevMonth:Object(u.b)((function(e,t){e.currentMonth=p.a(t,1)})),addShift:Object(u.d)(function(){var e=Object(f.a)(d.a.mark((function e(t,a){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://".concat(h,"/days/addShift"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,t.setData(r);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),addMessage:Object(u.d)(function(){var e=Object(f.a)(d.a.mark((function e(t,a){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://".concat(h,"/days/addMessage"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,t.setData(r);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),delShift:Object(u.d)(function(){var e=Object(f.a)(d.a.mark((function e(t,a){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://".concat(h,"/days/deleteShift"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,t.setData(r);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())},v=Object(u.c)(g),y=a(218),b=a(204),O=a(52),j=a(198),S=a(73),k=a.n(S),w=a(109),C=a.n(w);a(149);var M=function(e){var t=r.a.useState(""),a=Object(o.a)(t,2),n=a[0],c=a[1],l=r.a.useState(""),i=Object(o.a)(l,2),s=i[0],u=i[1],m=e.setIsUserKnown;return r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"column"},r.a.createElement(j.a,{color:"inherit",className:"logos"},r.a.createElement("span",{className:"logo-first-item"},r.a.createElement("img",{src:C.a,alt:"Tagforce logo",height:"30em"})),r.a.createElement("span",{className:"logo-divider"},"|"),r.a.createElement(k.a,null),r.a.createElement(O.a,{variant:"overline",style:{margin:"0.8em 0em 0em 0.25em"}},"Tagluz")),r.a.createElement("div",{className:"row"},r.a.createElement(y.a,{label:"Username:",id:"username",type:"username",autoFocus:!1,fullWidth:!1,value:n,onChange:function(e){c(e.target.value)}})),r.a.createElement("div",{className:"row"},r.a.createElement(y.a,{label:"Password:",id:"password",type:"password",autoFocus:!1,fullWidth:!1,value:s,onChange:function(e){u(e.target.value)}})),r.a.createElement("div",{className:"row"},r.a.createElement(b.a,{onClick:function(){return function(e,t){fetch("https://".concat("tagluz.azurewebsites.net","/users/checkUser/").concat(n,"/").concat(t)).then((function(e){return e.json()})).then((function(e){e&&(localStorage.setItem("username",n),m(!0))}))}(0,s)},color:"primary",fullWidth:!0,variant:"outlined"},"Log In"))))},N=a(212),T=a(213),x=a(214),D=a(220),A=a(208),U=a(206),F=a(205),z=a(111),W=a.n(z),I=a(207),B=a(219),L=a(112),_=a.n(L),J=a(113),P=a.n(J),H=(a(106),function(e){var t=r.a.useState(!1),a=Object(o.a)(t,2),n=a[0],c=a[1],l=r.a.useState(""),i=Object(o.a)(l,2),s=i[0],u=i[1],m=r.a.useState(!1),d=Object(o.a)(m,2),f=d[0],E=d[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{style:{display:e.display,marginRight:"1rem"},onClick:function(){return c(!0)}},r.a.createElement(W.a,null)),r.a.createElement(D.a,{open:n,onClose:function(){return c(!1)},"aria-labelledby":"form-dialog-title",className:"add-user-modal"},r.a.createElement(F.a,{id:"form-dialog-title"},"Add a User"),r.a.createElement(U.a,null,r.a.createElement(y.a,{autoFocus:!0,label:"User Name:",id:"name",type:"name",fullWidth:!1,value:s,onChange:function(e){u(e.target.value)}}),r.a.createElement("div",null,r.a.createElement(I.a,{control:r.a.createElement(B.a,{icon:r.a.createElement(_.a,null),checkedIcon:r.a.createElement(P.a,null),name:"makeAdmin",color:"secondary",value:f,onChange:function(){return E(!f)}}),label:"Appoint user admin"}))),r.a.createElement(A.a,null,r.a.createElement(b.a,{onClick:function(){!function(){var e={name:s,isAdmin:f};fetch("https://".concat("tagluz.azurewebsites.net","/users/mkUser"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){console.log("posted new user!")}))}(),u("")},color:"primary",size:"small"},"Add"))))}),R=a(209);var G=function(e){return r.a.createElement(D.a,{open:e.isModalOpen,onClose:e.onModalClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(F.a,{id:"alert-dialog-title"},"About Tagluz"),r.a.createElement(U.a,null,r.a.createElement(R.a,{id:"alert-dialog-description"},r.a.createElement("div",null,"Tagluz 0.92"),r.a.createElement("div",null,"By Pitamer"),r.a.createElement("div",null,"With lots of help from Ariel"))),r.a.createElement(A.a,null,r.a.createElement(b.a,{onClick:e.onModalClose,color:"primary",autoFocus:!0},"Nice :)")))},K=a(6),X=a(122),q=a(222),Q=a(89),V=a.n(Q),Y=a(210),Z=a(211),$=a(114),ee=a.n($),te=Object(K.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return r.a.createElement(X.a,Object.assign({elevation:0,getContentAnchorEl:null},e))})),ae=Object(K.a)((function(e){return{root:{"&:focus":{backgroundColor:"var(--main-color)","& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(q.a);function ne(e){var t=r.a.useState(null),a=Object(o.a)(t,2),n=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{color:"inherit","aria-haspopup":"true","aria-controls":"user-menu",onClick:function(e){c(e.currentTarget)}},r.a.createElement(V.a,null)),r.a.createElement(te,{id:"customized-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){c(null)}},r.a.createElement(ae,null,r.a.createElement(Y.a,null,r.a.createElement(V.a,{fontSize:"small"})),r.a.createElement(Z.a,{primary:e.username})),r.a.createElement(ae,{onClick:function(){localStorage.clear(),document.location.href="/"}},r.a.createElement(Y.a,null,r.a.createElement(ee.a,{fontSize:"small"})),r.a.createElement(Z.a,{primary:"Logout"}))))}var re=Object(N.a)((function(e){return{root:{flexGrow:1,zIndex:2,position:"relative"},appBar:{background:"var(--main-color)"},title:{marginRight:e.spacing(2),flexGrow:1},titleText:{margin:"0em 0em 0em 0.5em"}}}));var ce=function(){var e=r.a.useState(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(u.f)((function(e){return e.loggedUser})),l=re(),i=c.isAdmin?"":"none";return r.a.createElement("div",{className:l.root},r.a.createElement(T.a,{position:"static"},r.a.createElement(x.a,{className:l.appBar},r.a.createElement(O.a,{variant:"h6",className:l.title,onClick:function(){return n(!0)}},r.a.createElement(j.a,{color:"inherit",className:l.title},r.a.createElement(k.a,null),r.a.createElement(O.a,{variant:"button",className:l.titleText},"Tagluz"))),r.a.createElement(G,{isModalOpen:a,onModalClose:function(){return n(!1)}}),r.a.createElement(H,{display:i}),r.a.createElement(ne,{username:c.name}))))},le=a(215),oe=a(121);a(154);var ie=function(){var e=Object(u.f)((function(e){return e.currentMonth})),t=Object(u.e)((function(e){return e.prevMonth})),a=Object(u.e)((function(e){return e.nextMonth})),n=Object(N.a)((function(e){return{root:{flexGrow:1,textAlign:"center"},item:{justifyContent:"center",display:"flex"}}}))();return r.a.createElement("div",{className:"header ".concat(n.root)},r.a.createElement(le.a,{container:!0,spacing:3},r.a.createElement(le.a,{item:!0,xs:!0},r.a.createElement("div",{className:"icon ".concat(n.item),onClick:function(){return t(e)}},"chevron_left")),r.a.createElement(le.a,{item:!0,xs:6},r.a.createElement("div",{className:"header-title"},r.a.createElement("span",null,oe.a(e,"MMMM yyyy")))),r.a.createElement(le.a,{item:!0,xs:!0},r.a.createElement("div",{className:"icon ".concat(n.item),onClick:function(){return a(e)}},"chevron_right"))))};a(155);var se=function(){for(var e=[],t=0,a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];t<a.length;t++){var n=a[t];e.push(r.a.createElement("div",{className:"col col-center",key:n},n))}return r.a.createElement("div",{className:"days row"},e)},ue=a(91),me=a(92),de=a(93),fe=a(94),Ee=a(116),pe=a(90),he=a(117),ge=a(216),ve=a(5),ye=a(221),be=Object(K.a)((function(e){return{tooltip:{}}}))(ye.a);var Oe=function(e){var t=e.items.map((function(t){return r.a.createElement(O.a,{key:e.items.indexOf(t)},t)}));return r.a.createElement(be,{arrow:!0,placement:"top",title:t},r.a.createElement("span",{className:"icon"},e.icon))},je=a(217),Se=a(21),ke=a(120),we=Object(K.a)({root:{width:"5.5rem",margin:"0.5rem"}})(je.a);var Ce=function(e){return r.a.createElement(Se.a,{utils:ke.a},r.a.createElement(we,{label:"Start",value:e.shiftStartTime,onChange:e.setShiftStartTime,minutesStep:5}),r.a.createElement(we,{label:"End",value:e.shiftEndTime,onChange:e.setShiftEndTime,minutesStep:5}))};var Me=function(e){var t=r.a.useState(!1),a=Object(o.a)(t,2),n=a[0],c=a[1];if(e.items.length<1)return r.a.createElement(b.a,{disabled:!0},r.a.createElement("span",{className:"icon notifier"},e.icon));var l=function(){c(!1)},i=e.items.map((function(t){return r.a.createElement(O.a,{key:e.items.indexOf(t)},t)}));return r.a.createElement(ye.a,{arrow:!0,placement:"top",title:i,onClose:l,open:n,disableTouchListener:!0},r.a.createElement(b.a,{onTouchEnd:function(){return c(!n)},onMouseOver:function(){c(!0)},onMouseLeave:l},r.a.createElement("span",{className:"icon notifier"},e.icon)))};var Ne=function(e){var t=Object(u.e)((function(e){return e.delShift})),a=e.workers,n=r.a.useState(null),c=Object(o.a)(n,2),l=c[0],i=c[1],s=function(){i(null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:e.display}},r.a.createElement(b.a,{onClick:function(e){i(e.currentTarget)},fullWidth:!0,size:"small",variant:"contained",disableElevation:!0,style:{borderRadius:"0px",backgroundColor:"#333",color:"#fff",marginTop:"-0.8em"}},r.a.createElement("span",{className:"icon"},"build"),"Manage Workers"),r.a.createElement(X.a,{id:"shift-manager-menu",anchorEl:l,keepMounted:!0,open:Boolean(l),onClose:s},a.map((function(n,c){return r.a.createElement(q.a,{key:a.indexOf(n),onClick:function(e){return null},style:{marginTop:"-0.5em",marginBottom:"-0.5em"}},r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{onClick:function(){return function(a){var n={day:e.dayForDB,user:a};t(n),e.workers.length>0&&s()}(n)},style:{color:"crimson"}},"X"),n))})))))};a(156);var Te=function(e){var t=oe.a(e.day,"EEEE, MMMM d"),a=void 0!==e.userShift;r.a.useEffect((function(){f(a?e.userShift.startTime:e.day.setHours(8)),g(a?e.userShift.endTime:e.day.setHours(16))}),[a]);var n=Object(u.f)((function(e){return e.loggedUser})),c=Object(u.e)((function(e){return e.addShift})),l=Object(u.e)((function(e){return e.delShift})),i=Object(u.e)((function(e){return e.addMessage})),s=r.a.useState(null),m=Object(o.a)(s,2),d=m[0],f=m[1],E=r.a.useState(null),p=Object(o.a)(E,2),h=p[0],g=p[1],v=r.a.useState(""),O=Object(o.a)(v,2),j=O[0],S=O[1],k=r.a.useState(""),w=Object(o.a)(k,2),C=w[0],M=w[1],N=n.isAdmin?"":"none",T=n.isAdmin&&e.dayWorkers.length>0?"":"none",x=a?"":"none",z=a?"none":"",W=!a||j.length>0||C.length>0?"":"none",I=e.day.setHours(8);return r.a.createElement(D.a,{open:e.isModalOpen,onClose:e.onModalClose,"aria-labelledby":"form-dialog-title",className:"day-modal"},r.a.createElement(F.a,{id:"form-dialog-title"},t),r.a.createElement(Ne,{display:T,workers:e.dayWorkers,dayForDB:I}),r.a.createElement(U.a,null,r.a.createElement(Me,{icon:"report",items:e.dayAlerts}),r.a.createElement(Me,{icon:"textsms",items:e.dayFormattedMessages}),r.a.createElement(Me,{icon:"people_alt",items:e.dayFormattedWorkers}),r.a.createElement("hr",null),r.a.createElement("div",{style:{display:z}},r.a.createElement(b.a,{onClick:function(){var t={day:I,newShift:{user:""===C?n.name:C,startTime:d,endTime:h,isAllDay:!0}};c(t),M(""),e.onModalClose()},fullWidth:!0,variant:"contained",disableElevation:!0,style:{background:"rgba(255, 255, 0, 0.2)",border:"1px lightgrey solid"}},r.a.createElement("span",{className:"icon"},"bookmark_border"),"Reserve all day")),r.a.createElement("div",{className:"time-range-picker ".concat(e.dayColor)},r.a.createElement(Ce,{day:e.day,shiftStartTime:d,setShiftStartTime:f,shiftEndTime:h,setShiftEndTime:g})),r.a.createElement("div",{style:{display:x}},r.a.createElement(b.a,{onClick:function(){var t={day:I,user:e.userShift.user};l(t),e.onModalClose()},fullWidth:!0,variant:"contained",disableElevation:!0},r.a.createElement("span",{className:"icon"},"delete"),"Delete shift")),r.a.createElement("div",{style:{display:N}},r.a.createElement(y.a,{id:"name",type:"name",label:"Add a Message",value:j,onChange:function(e){S(e.target.value)}}))),r.a.createElement(A.a,null,r.a.createElement("div",{style:{display:W}},r.a.createElement(y.a,{label:"As User...",type:"username",id:"username",size:"small",margin:"dense",color:"secondary",variant:"outlined",value:C,onChange:function(e){M(e.target.value)},style:{display:N,width:"8.5em",marginBottom:"0.5em"}}),r.a.createElement(b.a,{onClick:function(){if(j.length<1){var t={day:I,newShift:{user:""===C?n.name:C,startTime:d,endTime:h,isAllDay:!1}};c(t),M(""),e.onModalClose()}else{var a={day:I,newMessage:{user:n.name,content:j}};i(a),S("")}},color:"primary",variant:"contained",style:{margin:"0.65em 1em 0.65em 0.5em",background:"var(--main-color)"}},"save"))))};a(157);var xe=function(e){var t=Object(u.f)((function(e){return e.selectedDate})),a=Object(u.e)((function(e){return e.onSelectDate})),n=Object(u.f)((function(e){return e.loggedUser})),c=r.a.useState(!1),l=Object(o.a)(c,2),i=l[0],s=l[1],m=void 0===e.dayData?[]:e.dayData.shifts,d=void 0===e.dayData?[]:e.dayData.alerts,f=void 0===e.dayData?[]:e.dayData.messages,E=m.find((function(e){return e.user===n.name})),p=void 0===E?null:E.isAllDay?"yellow":"green",h=he.a(e.day,e.monthStart)?ge.a(e.day)?"closed":Ee.a(e.day,e.selectedDate)?"selected":null:"disabled";function g(e){return(e.getMinutes()<10?"0":"")+e.getMinutes()}function v(e){return(e.getHours()<10?"0":"")+e.getHours()}var y=m.map((function(e){return e.user})),b=m.map((function(e){return"".concat(e.user," | ")+(!0===e.isAllDay?"[\u05e9\u05e2\u05d5\u05ea \u05d2\u05de\u05d9\u05e9\u05d5\u05ea]":"".concat(v(new Date(e.startTime)),":").concat(g(new Date(e.startTime))," - ").concat(v(new Date(e.endTime)),":").concat(g(new Date(e.endTime))))})).sort((function(e){return e.includes("\u05e9\u05e2\u05d5\u05ea")})),O=f.map((function(e){return"".concat(e.user,": ").concat(e.content)})),j=f.length<1?null:r.a.createElement(Oe,{icon:"textsms",items:O,key:"m"}),S=d.length<1?null:r.a.createElement(Oe,{icon:"report",items:d,key:"a"}),k=void 0===e.dayData?null:[j,S];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col cell ".concat(h),onClick:function(){return n=ve.a(e.day),void(Ee.a(n,t)?s(!0):a(n));var n}},r.a.createElement("span",{className:"number ".concat(p)},e.formattedDate),r.a.createElement("span",{className:"bg"},e.formattedDate),r.a.createElement("div",{className:"notifiers-area"},k)),r.a.createElement(Te,{day:e.day,isModalOpen:i,onModalClose:function(){return s(!1)},dayFormattedMessages:O,dayWorkers:y,dayFormattedWorkers:b,dayAlerts:d,userShift:E,dayColor:p}))};a(158);var De=function(){for(var e=Object(u.f)((function(e){return e.currentMonth})),t=Object(u.f)((function(e){return e.selectedDate})),a=Object(u.f)((function(e){return e.data})),n=ue.a(e),c=me.a(n),l=de.a(n),o=fe.a(c),i=[],s=[],m=l;m<=o;){for(var d=0;d<7;d++){var f=oe.a(m,"d"),E=a.find((function(e){return Ee.a(new Date(e.date),m)}));s.push(r.a.createElement(xe,{key:m,day:m,dayData:E,monthStart:n,selectedDate:t,formattedDate:f})),m=pe.a(m,1)}i.push(r.a.createElement("div",{className:"row",key:m},s)),s=[]}return r.a.createElement("div",{className:"body"},i)};a(159);var Ae=function(){var e=Object(u.e)((function(e){return e.fetchData})),t=Object(u.e)((function(e){return e.fetchLoggedUser}));return Object(n.useEffect)((function(){var a=localStorage.getItem("username");a&&(e(),t(a))}),[]),r.a.createElement("div",{className:"calendar"},r.a.createElement(ie,null),r.a.createElement(se,null),r.a.createElement(De,null))};var Ue=function(){var e=r.a.useState(null!==localStorage.getItem("username")),t=Object(o.a)(e,2),a=t[0],c=t[1],l=r.a.useState(""),m=Object(o.a)(l,2),d=m[0],f=m[1];return Object(n.useEffect)((function(){f(a?"/calendar":"/login")}),[a]),r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{store:v},r.a.createElement(i.a,null,d?r.a.createElement(s.a,{to:d}):r.a.createElement(r.a.Fragment,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/login"},r.a.createElement(M,{isUserKnown:a,setIsUserKnown:c})),r.a.createElement(s.b,{path:"/calendar"},r.a.createElement(ce,null),r.a.createElement("main",null,r.a.createElement(Ae,null))),r.a.createElement(s.b,{path:"*"},r.a.createElement(s.a,{to:d}))))))};l.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(Ue,null)),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.6e4fc353.chunk.js.map