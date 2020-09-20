(this.webpackJsonptask=this.webpackJsonptask||[]).push([[0],{44:function(e,t,a){},84:function(e,t,a){e.exports=a(99)},89:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),l=(a(89),a(44),a(25)),s=a(70),u=a(4),i=a(46),d=a.n(i),m=a(21),b=a(42),p=a.n(b),E=a(56),f=a(72),k=a(131),O=a(149),y=a(133),h=a(146),j=a(135),v=a(130),g=a(68),S=a.n(g),w=Object(u.a)((function(e){return{root:{margin:0,padding:e.spacing(5)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,a=e.classes,n=e.onClose;return r.a.createElement(v.a,{disableTypography:!0,className:a.root},r.a.createElement(f.a,null,t),n?r.a.createElement(k.a,{"aria-label":"close",className:a.closeButton,onClick:n},r.a.createElement(S.a,null)):null)})),C=Object(m.b)((function(e){return{jobs:e.jobs,weekends:e.weekends}}),{setJobs:function(e){return function(){var t=Object(E.a)(p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"SET_JOBS",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.open,a=e.handleDialogClose,c=e.jobs,o=e.weekends,u=e.setJobs,i=Object(n.useState)(),m=Object(l.a)(i,2),b=m[0],p=m[1],E=Object(n.useState)(c),f=Object(l.a)(E,2),k=f[0],v=f[1];return r.a.createElement("div",null,r.a.createElement(O.a,{onClose:a,open:t},r.a.createElement(w,{id:"customized-dialog-title",onClose:a},"Skip Each job by :"),r.a.createElement(y.a,null,r.a.createElement("form",null,r.a.createElement(h.a,{type:"number",fullWidth:!0,placeholder:"days",value:b,onChange:function(e){e.target.value>0&&p(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(j.a,{onClick:function(e){e.preventDefault();var t=["2020-09-08"];c.map((function(e,a){var n=0,r=d()(new Date(e.startOn));if(!t.includes(r.format("YYYY-MM-DD"))&&!o.includes(r.weekday())){for(;n<b;)r=r.add(1,"days"),t.includes(r.format("YYYY-MM-DD"))||o.includes(r.weekday())||n++;var c=Object(s.a)(k);c[a].startOn=r.format("YYYY-MM-DD"),v(c)}})),u(k),a()},variant:"contained",color:"secondary"},"Postpone")))))})),D=a(53),Y=a(27),N=a(150),T=a(134),J=a(136),M=a(137),W=a(148),x=Object(m.b)((function(e){return{weekends:e.weekends}}),{setWeekends:function(e){return function(){var t=Object(E.a)(p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"SET_WEEKENDS",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.setWeekends,a=Object(n.useState)({Saturday:!1,Sunday:!1}),c=Object(l.a)(a,2),o=c[0],s=c[1],u=function(e){s(Object(Y.a)(Object(Y.a)({},o),{},Object(D.a)({},e.target.name,e.target.checked)))},i=o.Saturday,d=o.Sunday;return r.a.createElement("div",{className:"Checkboxes"},r.a.createElement(N.a,{component:"fieldset"},r.a.createElement(T.a,{component:"legend"},"Customize working days and hit save"),r.a.createElement(J.a,null,["Monday","Tuesday","Wednesday","Thursday","Friday"].map((function(e){return r.a.createElement(M.a,{control:r.a.createElement(W.a,{checked:!0,name:e}),label:e})})),r.a.createElement(M.a,{control:r.a.createElement(W.a,{checked:i,onChange:u,name:"Saturday"}),label:"Saturday"}),r.a.createElement(M.a,{control:r.a.createElement(W.a,{checked:d,onChange:u,name:"Sunday"}),label:"Sunday"}),r.a.createElement(j.a,{onClick:function(e){e.preventDefault();var a=[];!1===o.Saturday?a.push(6):!1===o.Sunday&&a.push(0),t(a)},variant:"contained",color:"secondary",size:"small"}," Save "))))})),z=a(140),B=a(138),_=a(139),F=a(141),H=a(142),I=a(143),K=a(144),R=a(145),q=Object(u.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(B.a),A=Object(u.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(_.a),G=Object(z.a)({table:{padding:200,backgroundColor:"white"}}),L=Object(m.b)((function(e){return{jobs:e.jobs}}))((function(e){var t=G(),a=Object(n.useState)(e.jobs),c=Object(l.a)(a,2),o=c[0],s=(c[1],Object(n.useState)(!1)),u=Object(l.a)(s,2),i=u[0],m=u[1];return r.a.createElement("div",{className:"Table"},r.a.createElement("div",{className:"Settings"},r.a.createElement(j.a,{onClick:function(e){m(!0)},variant:"contained",color:"secondary"},"Skip each Job by n days"),r.a.createElement(C,{handleDialogClose:function(){m(!1)},open:i}," "),r.a.createElement(x,null)),r.a.createElement(F.a,null,r.a.createElement(H.a,{className:t.table,"aria-label":"customized table"},r.a.createElement(I.a,null,r.a.createElement(_.a,null,r.a.createElement(q,null,"Start On"),r.a.createElement(q,null,"Tasks"))),r.a.createElement(K.a,null,o.map((function(e){return r.a.createElement(A,{key:e.startOn},r.a.createElement(q,{component:"th",scope:"row"},d()(e.startOn).format("dddd")," ",e.startOn),r.a.createElement(q,null,e.tasks.map((function(e){return r.a.createElement("div",null,e,r.a.createElement(R.a,null))}))))}))))))})),P=function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(L,{className:"Table"}))};var U=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P,null))},V=a(38),Q={jobs:[{startOn:"2020-09-04",tasks:["Eat","Sleep","Code","Repeat"]},{startOn:"2020-09-05",tasks:["Eat","Dance"]},{startOn:"2020-09-06",tasks:["Do homework"]},{startOn:"2020-09-07",tasks:["Finish project work","Fix errors"]},{startOn:"2020-09-08",tasks:["Go to play","Learn React"]},{startOn:"2020-09-09",tasks:["Chill","Visit the doctor"]},{startOn:"2020-09-10",tasks:["Code review","Complete UI for project"]},{startOn:"2020-09-11",tasks:["Complete documentation","Commit requested changes"]},{startOn:"2020-09-12",tasks:["Take cat for a walk"]},{startOn:"2020-09-13",tasks:["Hang out with friends"]}],weekends:[6,0]},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_JOBS":return Object(Y.a)(Object(Y.a)({},e),{},{jobs:t.payload});case"SET_WEEKENDS":return Object(Y.a)(Object(Y.a)({},e),{},{weekends:t.payload});default:return e}},Z=a(69),$=Object(V.c)(X,Object(V.a)(Z.a));t.default=$;o.a.render(r.a.createElement(m.a,{store:$},r.a.createElement(U,null)),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.db1e0832.chunk.js.map