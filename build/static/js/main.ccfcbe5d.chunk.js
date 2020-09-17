(this.webpackJsonptask=this.webpackJsonptask||[]).push([[0],{75:function(e,t,a){e.exports=a(90)},80:function(e,t,a){},81:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),c=(a(80),a(81),a(30)),s=a(14),u=a.n(s),i=a(4),d=a(130),m=a(128),b=a(129),p=a(131),f=a(125),E=a(132),O=a(133),y=a(134),j=a(135),k=a(124),h=a(63),v=a(26),g=a(46),w=a.n(g),S=a(56),Y=a(91),D=a(138),C=a(126),J=a(136),M=a(127),B=a(123),N=a(60),T=a.n(N),x=Object(i.a)((function(e){return{root:{margin:0,padding:e.spacing(5)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,a=e.classes,n=e.onClose;return r.a.createElement(B.a,{disableTypography:!0,className:a.root},r.a.createElement(Y.a,null,t),n?r.a.createElement(k.a,{"aria-label":"close",className:a.closeButton,onClick:n},r.a.createElement(T.a,null)):null)})),z=Object(v.b)(null,{setJobs:function(e){return function(){var t=Object(S.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"SET_JOBS",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.open,a=e.handleDialogClose,l=e.selectedJob,o=e.jobs,s=e.setJobs,i=Object(n.useState)(),d=Object(c.a)(i,2),m=d[0],b=d[1],p=Object(n.useState)(o),f=Object(c.a)(p,2),E=f[0],O=f[1];return r.a.createElement("div",null,r.a.createElement(D.a,{onClose:a,open:t},r.a.createElement(x,{id:"customized-dialog-title",onClose:a},"Postpone job scheduled for ",u()(l).format("dddd"),"  ",l,"  by :"),r.a.createElement(C.a,null,r.a.createElement("form",null,r.a.createElement(J.a,{type:"number",fullWidth:!0,placeholder:"days",value:m,onChange:function(e){e.target.value>0&&b(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(M.a,{onClick:function(e){e.preventDefault();var t=[u()().day("Saturday").weekday(),u()().day("Sunday").weekday()],n=["2020-09-08"];o.map((function(e,a){if(u()(e.startOn).isSameOrAfter(l)){var r=0,c=u()(new Date(e.startOn));if(!n.includes(c.format("YYYY-MM-DD"))&&!t.includes(c.weekday())){for(;r<m;)c=c.add(1,"days"),n.includes(c.format("YYYY-MM-DD"))||t.includes(c.weekday())||r++;var s=Object(h.a)(o);s[a].startOn=c.format("YYYY-MM-DD"),O(s)}}})),s(E),a()},variant:"contained",color:"primary"},"Postpone")))))})),A=a(61),F=a.n(A),P=Object(i.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(m.a),R=Object(i.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(b.a),_=Object(d.a)({table:{width:"fit-content",padding:100}}),G=function(e){var t=_(),a=e.jobs,l=Object(n.useState)(),o=Object(c.a)(l,2),s=o[0],i=o[1],d=[u()().day("Saturday").weekday(),u()().day("Sunday").weekday()],m=["2020-09-08"],h=Object(n.useState)(!1),v=Object(c.a)(h,2),g=v[0],w=v[1],S=function(){w(!1)};return r.a.createElement(p.a,{component:f.a},r.a.createElement(E.a,{className:t.table,"aria-label":"customized table"},r.a.createElement(O.a,null,r.a.createElement(b.a,null,r.a.createElement(P,null,"Actions"),r.a.createElement(P,null,"Start On"),r.a.createElement(P,null,"Tasks"))),r.a.createElement(y.a,null,a.map((function(e){return r.a.createElement(R,{key:e.startOn},r.a.createElement(P,null,r.a.createElement(k.a,{disabled:d.includes(u()(e.startOn).weekday())||m.includes(u()(e.startOn).format("YYYY-MM-DD")),onClick:function(){return function(e){i(e),w(!0)}(e.startOn)},color:"primary",label:"postpone"},r.a.createElement(F.a,null)),r.a.createElement(z,{jobs:a,selectedJob:s,open:g,handleDialogClose:S})),r.a.createElement(P,{component:"th",scope:"row"},u()(e.startOn).format("dddd")," ",e.startOn),r.a.createElement(P,null,e.tasks.map((function(e){return r.a.createElement("div",null,e,r.a.createElement(j.a,null))}))))})))))},I=Object(v.b)((function(e){return{jobs:e.jobs}}))((function(e){var t=e.jobs;return r.a.createElement("div",null,r.a.createElement(G,{jobs:t}))}));var L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null))},V=a(33),W=a(47),q={jobs:[{startOn:"2020-09-04",tasks:["Eat","Sleep","Code","Repeat"]},{startOn:"2020-09-05",tasks:["Eat","Dance"]},{startOn:"2020-09-06",tasks:["Do homework"]},{startOn:"2020-09-07",tasks:["Finish project work","Fix errors"]},{startOn:"2020-09-08",tasks:["Go to play","Learn React"]},{startOn:"2020-09-09",tasks:["Chill","Visit the doctor"]}]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_JOBS":return Object(W.a)(Object(W.a)({},e),{},{jobs:t.payload});default:return e}},K=a(62),Q=Object(V.c)(H,Object(V.a)(K.a));t.default=Q;o.a.render(r.a.createElement(v.a,{store:Q},r.a.createElement(L,null)),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.ccfcbe5d.chunk.js.map