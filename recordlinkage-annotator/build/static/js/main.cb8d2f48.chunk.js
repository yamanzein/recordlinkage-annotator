(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{180:function(e,t,a){},182:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),l=a.n(o),c=(a(180),a(17)),i=(a(38),a(181),a(182),function(e){for(var t=0,a=0,n=0,r=0;r<e.length;r++)e[r].label_str&&("Match"===e[r].label_str?a+=1:"Distinct"===e[r].label_str&&(n+=1),t+=1);return{labledItem:t,match:a,distinct:n}}),s=a(24),u=a.n(s),d=a(87),m=a(46),p=a(154),f={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},b={borderColor:"#2196f3"},g={borderColor:"#00e676"},E={borderColor:"#ff1744"};function h(){return(h=Object(m.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/server/saveFile",{method:"POST",headers:{"content-Type":"application/json"},body:JSON.stringify({user:t,fileName:a})});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){var t=Object(n.useCallback)((function(t){if(1===t.length){console.log(t[0].name);var a=new FileReader;a.onabort=function(){return console.log("file reading was aborted")},a.onerror=function(){return console.log("file reading has failed")},a.onload=function(){(function(e,t){return h.apply(this,arguments)})(JSON.parse(a.result),t[0].name).then((function(t){alert(t),e.getAllFiles()}))},a.readAsText(t[0])}else console.log("No valid files provided.")}),[e]),a=Object(p.a)({onDrop:t,accept:"application/json,.json",multiple:!1}),o=a.getRootProps,l=a.getInputProps,c=a.isDragActive,i=a.isDragAccept,s=a.isDragReject,u=Object(n.useMemo)((function(){return Object(d.a)(Object(d.a)(Object(d.a)(Object(d.a)({},f),c?b:{}),i?g:{}),s?E:{})}),[c,i,s]);return r.a.createElement("div",o({style:u}),r.a.createElement("input",l()),i&&!s&&r.a.createElement("p",null,"Drop the file here"),s&&r.a.createElement("p",null,"Reject - Please drop a .json file"),!c&&r.a.createElement("p",null,"Drag 'n' drop annotation file here, or click to select"))}var j=a(144),O=a(262),y=a(147),x=a.n(y),w=a(281),S=a(286),k=Object(j.a)((function(e){return{button:{margin:e.spacing(1)},center:{},buttonRight:{margin:e.spacing(1)}}}));function C(e){var t=k(),a=Object(n.useState)(),o=Object(c.a)(a,2),l=o[0],i=o[1],s=Object(n.useState)(),u=Object(c.a)(s,2),d=u[0],m=u[1];Object(n.useEffect)((function(){"Match"===e.recoredStatus?(i("green"),m("grey")):"Distinct"===e.recoredStatus?(i("grey"),m("red")):(i("grey"),m("grey")),e.textAreaValue?g(e.textAreaValue):g("")}),[e.recoredStatus,e.textAreaValue,e.index]);var p=r.a.useState(""),f=Object(c.a)(p,2),b=f[0],g=f[1];return r.a.createElement(n.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(w.a.Group,null,r.a.createElement(w.a,{color:l,active:"false"},"Match"),r.a.createElement(w.a.Or,null),r.a.createElement(w.a,{color:d,active:"false"},"No-Match"))),r.a.createElement(S.a,{id:"filled-full-width",label:"Give a comment",style:{margin:8},placeholder:"Placeholder",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",value:b,onChange:function(t){g(t.target.value),e.recordText(t.target.value)}})),r.a.createElement("div",{className:t.center},r.a.createElement(O.a,{variant:"contained",color:"primary",className:t.button,onClick:e.isMatch},"Match"),r.a.createElement(O.a,{variant:"contained",color:"secondary",className:t.button,onClick:e.isDistinct},"No-Match"),r.a.createElement(O.a,{variant:"contained",color:"secondary",className:t.button,onClick:e.save},"Save"),r.a.createElement(O.a,{variant:"outlined",color:"default",className:t.buttonRight,endIcon:r.a.createElement(x.a,null),onClick:e.onExportClick},"Export"),r.a.createElement(O.a,{variant:"outlined",disabled:!0},"Index : ",e.index)))}var D=a(88),N=a(211);function A(e){return r.a.createElement(N.a,{alignItems:"flex-start"},r.a.createElement(D.a,{style:{wordBreak:"break-word",display:"inline-block"},component:"p"},e.itemText))}var T=a(263),R=a(265),F=a(264),z=a(261),L=a(266),I=Object(j.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},title:{fontSize:8}}}));function P(e){var t=I();return r.a.createElement(T.a,{className:t.paper},r.a.createElement(F.a,{title:"undefined"!==typeof e.recordData.identifiers[e.recordSource].record?"Record "+e.recordData.identifiers[e.recordSource].record:"",subheader:e.recordData.identifiers[e.recordSource].dataset}),r.a.createElement(R.a,null,r.a.createElement(z.a,{className:t.root},e.recordData.fields.map((function(t,a){return r.a.createElement(r.a.Fragment,{key:a.toString()},r.a.createElement(A,{itemText:t[e.recordSource].name+" : "+t[e.recordSource].value,itemName:t[e.recordSource].name}),r.a.createElement(L.a,{component:"li"}))})))))}var _=a(268),M=a(277),B=a(148),J=a.n(B),V=a(149),G=a.n(V),W=a(269),U=a(285),H=a(267),Y=a(260),$=Object(j.a)((function(e){return{root:{flexGrow:1},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function q(){return(q=Object(m.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,a),e.next=3,fetch("/server/overRideFile",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({user:t,fileName:a})});case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e){var t=$(),a=r.a.useState(""),o=Object(c.a)(a,2),l=o[0],i=o[1],s=Object(n.useState)(0),u=Object(c.a)(s,2),d=u[0],m=u[1],p=Object(n.useState)(e.reviewData),f=Object(c.a)(p,2),b=f[0],g=f[1],E=function(e){var t={pairs:e.pairs.filter((function(e){return e.label_str}))},a={pairs:e.pairs.filter((function(e){return!e.label_str}))};y(t),k(a)};Object(n.useEffect)((function(){E(e.reviewData)}),[e.reviewData]);var h=function(){var e=0,t=0;for(var a in b.pairs)1===b.pairs[a].label&&(e+=1),0===b.pairs[a].label&&(t+=1);return{matchCount:e,distinctCount:t}},v=Object(n.useState)([]),j=Object(c.a)(v,2),O=j[0],y=j[1],x=Object(n.useState)([]),w=Object(c.a)(x,2),S=w[0],k=w[1],D=Object(n.useState)({}),N=Object(c.a)(D,2),A=N[0],T=N[1],R=function(){(function(e,t){return q.apply(this,arguments)})(A,e.fileName).then((function(e){console.log(e)}))},F=function(){!function(e,t){var a=[];e.pairs.forEach((function(e){a.push(e)})),t.pairs.forEach((function(e){a.push(e)})),E({pairs:a}),T({pairs:a})}(O,S),d<b.pairs.length-1?m(d+1):(console.log("Last record, we are done."),console.log(h()),e.reviewState("export"),R())},z=function(){d<b.pairs.length-1&&m(d+1)},L=function(){0!==d&&m(d-1)};return document.onkeydown=function(e){"37"==(e=e||window.event).keyCode?L():"39"==e.keyCode&&z()},r.a.createElement("div",{className:t.root},r.a.createElement(Y.a,{className:t.formControl},r.a.createElement(U.a,{id:"demo-simple-select-label"},"Choose Filter"),r.a.createElement(M.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:l,onChange:function(t){if(i(t.target.value),"Annotated"===t.target.value)g(O),e.stats(O);else if("To Annotate"===t.target.value)g(S),e.stats(S);else{var a=[];O.pairs.forEach((function(e){a.push(e)})),S.pairs.forEach((function(e){a.push(e)})),g({pairs:a}),e.stats({pairs:a})}}},r.a.createElement(H.a,{value:"Annotated"},"Annotated"),r.a.createElement(H.a,{value:"To Annotate"},"To Annotate"),r.a.createElement(H.a,{value:"All Data"},"All Data"))),r.a.createElement(_.a,{container:!0,spacing:1},r.a.createElement(_.a,{item:!0,xs:1,sm:1},r.a.createElement(W.a,{onClick:L},r.a.createElement(J.a,null))),r.a.createElement(_.a,{item:!0,xs:11,sm:5},r.a.createElement(P,{recordData:b.pairs[d],recordSource:"a",recoredStatus:b.pairs[d].label_str})),r.a.createElement(_.a,{item:!0,xs:11,sm:5},r.a.createElement(P,{recordData:b.pairs[d],recordSource:"b",recoredStatus:b.pairs[d].label_str})),r.a.createElement(_.a,{item:!0,xs:1,sm:1},r.a.createElement(W.a,{onClick:z},r.a.createElement(G.a,null))),r.a.createElement(_.a,{item:!0,xs:12,sm:12},r.a.createElement(C,{isMatch:function(){console.log("Records match"),b.pairs[d].label=1,b.pairs[d].label_str="Match",console.log(b.pairs[d]),e.stats(b),F()},isDistinct:function(){console.log("Records are distinct"),b.pairs[d].label=0,b.pairs[d].label_str="Distinct",e.stats(b),F()},onExportClick:function(){console.log(h()),e.reviewState("export")},save:R,index:d,recoredStatus:b.pairs[d].label_str,recordText:function(e){b.pairs[d].text_area=e},textAreaValue:b.pairs[d].text_area}))))}var Q=a(270),X=a(271),Z=a(104),ee=a.n(Z),te=Object(j.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},saveButton:{marginRight:e.spacing(2)}}}));function ae(e){var t=te();return r.a.createElement("div",{className:t.root},r.a.createElement(Q.a,{position:"static"},r.a.createElement(X.a,null,r.a.createElement(D.a,{variant:"h6",className:t.title},"RecordLinkage ANNOTATOR"),"never"===e.reviewState&&r.a.createElement(O.a,{color:"inherit"},r.a.createElement(ee.a,{className:t.extendedIcon}),"Export"))))}function ne(e){return r.a.createElement(O.a,{color:"secondary",href:function(){var t=JSON.stringify(e.reviewData,null,2),a=new Blob([t],{type:"application/json"});return window.URL.createObjectURL(a)}(),download:"result.json"},r.a.createElement(ee.a,null),"Export")}var re=a(274),oe=a(276),le=a(152),ce=a(273),ie=a(117),se=a.n(ie),ue=a(272),de=a(280);function me(e){return r.a.createElement("div",{style:{width:"95%",paddingLeft:"5%",paddingTop:"1%",paddingBottom:"2%"}},r.a.createElement(de.a,{value:e.labled,total:e.size,progress:"percent",label:"Has been annotated",active:!0,size:"big",color:"teal",indicating:!0,autoSuccess:!0,precision:0}))}var pe=a(105),fe=a.n(pe),be=a(282),ge=function(e){return r.a.createElement(be.a.Group,{widths:"5",size:"mini"},r.a.createElement(be.a,{color:"grey",size:"mini"},r.a.createElement(be.a.Value,null,e.size),r.a.createElement(be.a.Label,null,"Total Number of Records")),r.a.createElement(be.a,{color:"grey",size:"mini"},r.a.createElement(be.a.Value,null,e.annotated),r.a.createElement(be.a.Label,null,"Annotated")),r.a.createElement(be.a,{color:"grey",size:"mini"},r.a.createElement(be.a.Value,null,e.toAnnotate),r.a.createElement(be.a.Label,null,"To Annotate")),r.a.createElement(be.a,{color:"green",size:"mini"},r.a.createElement(be.a.Value,null,e.match),r.a.createElement(be.a.Label,null,"Match Pairs")),r.a.createElement(be.a,{color:"red",size:"mini"},r.a.createElement(be.a.Value,null,e.distinct),r.a.createElement(be.a.Label,null,"No-Match Pairs")))},Ee=a(278);function he(){return(he=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/server/deleteFile",{method:"DELETE",headers:{"content-Type":"application/json"},body:JSON.stringify({fileName:t})});case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ve(e){return je.apply(this,arguments)}function je(){return(je=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.a.get("/server/getFile/"+t);case 2:return a=e.sent,e.next=5,a;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oe(e){var t=function(t){console.log(t),function(e){he.apply(this,arguments)}(t),e.getAllFiles()},a=e.files.map((function(a){return r.a.createElement(Ee.a.Item,{key:a},r.a.createElement(Ee.a.Content,{floated:"right"},r.a.createElement(w.a,{size:"mini",color:"blue",onClick:function(){return function(t){console.log(t),ve(t).then((function(a){console.log(a.data),e.goToFile(a.data,t)}))}(a)}},"Choose"),r.a.createElement(w.a,{size:"mini",color:"orange",onClick:function(){return function(e){ve(e).then((function(t){console.log(t.data);var a=JSON.stringify(t.data,null,2),n=new Blob([a],{type:"application/json"}),r=window.URL.createObjectURL(n),o=document.createElement("a");o.href=r,o.download=e,o.click()}))}(a)}},"Export"),r.a.createElement(w.a,{size:"mini",color:"red",onClick:function(){return t(a)}},"Delete")),r.a.createElement(Ee.a.Content,{floated:"left"},a))}));return r.a.createElement(Ee.a,{as:"Segment",relaxed:!0,celled:!0,animated:!0,size:"medium",divided:!0,verticalAlign:"middle"},a)}var ye=a(283),xe=a(284),we=a(275),Se=a(150),ke=a.n(Se),Ce=Object(j.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),olor:e.palette.text.secondary},title:{fontSize:8}}}));function De(){var e=Object(n.useState)("upload"),t=Object(c.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(void 0),s=Object(c.a)(l,2),u=s[0],d=s[1],m=Object(n.useState)(),p=Object(c.a)(m,2),f=p[0],b=p[1],g=Object(n.useState)(),E=Object(c.a)(g,2),h=E[0],j=E[1],O=Object(n.useState)(),y=Object(c.a)(O,2),x=y[0],w=y[1],S=Object(n.useState)(),k=Object(c.a)(S,2),C=k[0],N=k[1],A=Object(n.useState)(),R=Object(c.a)(A,2),F=R[0],z=R[1],L=Object(n.useState)(),I=Object(c.a)(L,2),P=I[0],_=I[1],M=Object(n.useState)(!1),B=Object(c.a)(M,2),J=B[0],V=B[1],G=Ce();Object(n.useEffect)((function(){W()}),[]);var W=function(){fe.a.get("/server/getAllFiles").then((function(e){_(e.data)})).catch((function(e){return console.log(e)}))},U=function(e){j(i(e.pairs).labledItem),b(e.pairs.length),w(e.pairs.length-i(e.pairs).labledItem),N(i(e.pairs).match),z(i(e.pairs).distinct)},H=function(e){o(e)},Y=Object(ue.a)("(prefers-color-scheme: dark)"),$=Object(n.useState)({palette:{primary:se.a,type:Y?"light":"dark"}}),q=Object(c.a)($,2),Q=q[0],X=q[1],Z=Object(n.useState)(),ee=Object(c.a)(Z,2),te=ee[0],ie=ee[1],de=function(e,t){d(e),o("review"),U(e),ie(t)},pe=function(){V(!J)},be=Object(le.a)(Q);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce.a,{theme:be},r.a.createElement(ae,{reviewState:a,onToggleDark:function(){var e="light"===Q.palette.type?"dark":"light";X({palette:{primary:se.a,type:e}})}}),r.a.createElement(re.a,null),r.a.createElement("div",{style:{paddingTop:"5px"}},r.a.createElement(we.a,{color:"primary","aria-label":"add",variant:"extended",onClick:function(e,t){return pe()}},r.a.createElement(ke.a,{onClick:function(e,t){return pe()}}),"Show Files")),r.a.createElement(ye.a.Pushable,null,r.a.createElement(ye.a,{as:xe.a,animation:"scale down",icon:"labeled",onHide:function(){return V(!1)},vertical:!0,visible:J,width:"very wide"},P&&r.a.createElement(Oe,{files:P,getAllFiles:W,goToFile:de})),r.a.createElement(ye.a.Pusher,null,r.a.createElement("div",{style:{width:"80%",margin:"auto",padding:"10px"}},r.a.createElement(D.a,{component:"div",style:{paddingTop:"50px"}},"review"===a&&r.a.createElement(T.a,{id:"allStats",className:G.paper},r.a.createElement(me,{size:f,labled:h}),r.a.createElement(ge,{size:f,annotated:h,toAnnotate:x,match:C,distinct:F})),"upload"===a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{component:"h2",variant:"h3",align:"center",color:"textPrimary",gutterBottom:!0},"Record pair labeling for record linkage and data matching"),r.a.createElement(D.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Turn your record pairs into golden record pairs with this intuitive labeling tool. Labeled record pairs are important for training and validation record linkage and data matching processes."," ",r.a.createElement(oe.a,{href:"https://github.com/J535D165/recordlinkage-annotator#create-annotation-file",target:"_blank"},"Create an annotation file")," ","and start labeling your data!"),r.a.createElement(v,{reviewData:function(e){d(e),de()},reviewState:H,getAllFiles:W})),"review"===a&&r.a.createElement(K,{reviewState:H,reviewData:u,stats:U,fileName:te}),"export"===a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{component:"h2",variant:"h3",align:"center",color:"textPrimary",gutterBottom:!0},"Done!"),r.a.createElement(D.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"You finished the annotation. You can now export the data and save it for further analysis."),r.a.createElement(ne,{reviewData:u}))))))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(De,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[209,1,2]]]);
//# sourceMappingURL=main.cb8d2f48.chunk.js.map