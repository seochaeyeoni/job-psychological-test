(this["webpackJsonppsychological-test"]=this["webpackJsonppsychological-test"]||[]).push([[0],{114:function(e,t,n){},116:function(e,t,n){},244:function(e,t,n){"use strict";n.r(t);var c,r,a,s,i,o=n(0),l=n.n(o),u=n(50),j=n.n(u),b=(n(114),n(28)),d=n(11),h=n(9),p=(n(116),n(29)),O=n(30),f=n.p+"static/media/NanumGothic.f727c12e.woff",x=Object(O.a)(c||(c=Object(p.a)(['\n    @font-face {\n        font-family: "NanumGothic";\n        src: local("NanumGothic"),\n        url(',") format('woff');\n        font-weight: 300;\n        font-style: normal;\n    }\n"])),f),g=Object(O.a)(r||(r=Object(p.a)(["\n\n  h1 {\n    font-family: 'NanumGothic';\n    font-weight: bold;\n    padding: 12px;\n  }\n  h2, h3, h4 {\n    font-family: 'NanumGothic';\n    font-weight: bold;\n    padding: 10px;\n  }\n\n  h5, p, th, td {\n    font-family: 'NanumGothic';\n    padding-top: 20px;\n    padding-bottom: 3px;\n  }\n\n  a {\n    font-family: 'NanumGothic';\n    margin-top: 20px;\n    margin-right: 5px;\n    margin-bottom: 5px;\n  }\n"]))),v=O.b.div(a||(a=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 800px;\n  background-color: aliceblue;\n"]))),m=O.b.div(s||(s=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  background-color: aliceblue;\n"]))),w=O.b.div(i||(i=Object(p.a)(["\n  text-align: center;\n  width: 80%;\n  height: 70%;\n  padding-top: 5%;\n  padding-left: 10%;\n  padding-right: 10%;\n  background-color: white;\n  padding-bottom: 5%;\n  border-radius: 15px;\n"]))),y=g,k=n(6),S=n(4),C=n(1),E=function(e){var t=e.name,n=e.disabled,c=e.onClick;return Object(C.jsx)("button",{style:{minWidth:"150px",textAlign:"center",display:"inline-block",margin:"20px",marginTop:"50px",fontFamily:"NanumGothic"},type:"button",class:"btn btn-lg btn-primary",disabled:n,onClick:c,children:t})},N=function(e){var t=e.onChange;return Object(C.jsxs)("div",{children:[Object(C.jsx)("input",{style:{maxWidth:"350px",textAlign:"center",display:"inline-block",margin:"5px",fontFamily:"NanumGothic"},class:"form-control",type:"text",placeholder:"\uc774\ub984","aria-label":"default input example",onChange:function(e){t(e.target.value)}}),Object(C.jsx)("p",{style:{width:"100%",textAlign:"center",padding:"0px",fontSize:"10pt"},children:"\ud83d\udc49\uc774\ub984\uc740 \ud55c\uae00 2~4\uc790 \uc774\ub0b4\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694\ud83d\udc48"})]})},R=function(e){var t=e.value,n=e.hiddenValue,c=e.group,r=e.answer,a=e.onChange;return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"form-check",style:{maxWidth:"150px",textAlign:"center",display:"inline-block",margin:"15px",fontFamily:"NanumGothic"},children:[Object(C.jsx)("input",{checked:r,value:n,class:"form-check-input",type:"radio",name:c,id:"flexRadioDefault1",onChange:function(e){a(c,e.target.value)}}),Object(C.jsx)("label",{class:"form-check-label",for:"flexRadioDefault1",children:t})]})})},A=Object(h.b)({key:"userState",default:{name:"",gender:"",createdAt:""}}),V=Object(h.b)({key:"questionState",default:[{question:"",answer01:"",answer02:"",answerScore01:"",answerScore02:""}]}),F=Object(h.b)({key:"wonScoreState",default:{}}),G=Object(h.b)({key:"jobState",default:[]}),T=Object(h.b)({key:"majorState",default:[]}),q=function(){var e=Object(d.e)(),t=Object(o.useState)(!0),n=Object(S.a)(t,2),c=n[0],r=n[1],a=Object(h.c)(A),s=Object(S.a)(a,2),i=s[0],l=s[1];Object(o.useEffect)((function(){r(!i.gender||!i.name)}),[i.gender,i.name]);var u=function(e,t){var n=Object(k.a)({},i);console.log(t),n.gender=t,l(n)};return Object(C.jsx)(v,{children:Object(C.jsxs)(w,{children:[Object(C.jsx)("h1",{children:"\ud83d\udcca\uc9c1\uc5c5\uac00\uce58\uad00\uac80\uc0ac\u2705"}),Object(C.jsx)("h5",{children:"\uc774\ub984"}),Object(C.jsx)(N,{onChange:function(e){var t=Object(k.a)({},i);t.name=e,l(t)}}),Object(C.jsx)("h5",{children:"\uc131\ubcc4"}),Object(C.jsx)(R,{value:"\ud83d\ude46\u200d\u2642\ufe0f\ub0a8\uc790",group:"gender",hiddenValue:"\ub0a8\uc790",onChange:u}),Object(C.jsx)(R,{value:"\ud83d\ude46\u200d\u2640\ufe0f\uc5ec\uc790",group:"gender",hiddenValue:"\uc5ec\uc790",onChange:u}),Object(C.jsx)("div",{}),Object(C.jsx)(E,{name:"\uac80\uc0ac\uc2dc\uc791",disabled:c,onClick:function(){var t=new Date;console.log("checkUser");var n;if(n=i.name,/^[\uac00-\ud7a3]{2,4}$/.test(n)){var c=Object(k.a)({},i);c.createdAt=t.toLocaleString(),l(c),e.push("/example")}else alert("\ud55c\uae00 \uc774\ub984 2~4\uc790 \uc774\ub0b4\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694")}})]})})},L=function(e){var t=e.percent;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h2",{style:{display:"inline",float:"left"},children:"\uac80\uc0ac\uc608\uc2dc"}),Object(C.jsxs)("h2",{style:{display:"inline",float:"right"},children:[t,"%"]}),Object(C.jsx)("div",{style:{display:"inline-block",width:"100%"}}),Object(C.jsx)("div",{class:"progress",children:Object(C.jsx)("div",{class:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:{width:t+"%"}})})]})},Q=function(e){var t=e.Question,n=e.value1,c=e.value2,r=e.group,a=e.onClick;return Object(C.jsxs)("div",{children:[Object(C.jsx)("h4",{children:t}),Object(C.jsx)(R,{value:n,group:r,onChange:a}),Object(C.jsx)(R,{value:c,group:r,onChange:a})]})},D=n(10),W=n.n(D),U=n(24),B=n(40),I=n.n(B),J="1a73b7811fcb787af6e72020f85b4c4a",P=I.a.create({baseURL:"https://www.career.go.kr/inspct/openapi/test",headers:{"Content-Type":"application/json"}}),_=function(){var e=Object(U.a)(W.a.mark((function e(){var t;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("/questions",{params:{apikey:J,q:6}});case 2:return t=e.sent,e.prev=3,e.abrupt("return",z(t.data.RESULT));case 7:e.prev=7,e.t0=e.catch(3),alert(Error(t.ERROR_REASON));case 10:case"end":return e.stop()}}),e,null,[[3,7]])})));return function(){return e.apply(this,arguments)}}(),z=function(e){return e.map((function(e){return{question:e.question,answer01:e.answer01,answer02:e.answer02,answerScore01:e.answerScore01,answerScore02:e.answerScore02}}))},M=function(){var e=Object(U.a)(W.a.mark((function e(t,n,c,r,a){var s,i,o,l,u,j;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$(t);case 2:return s=e.sent,e.next=5,H(s);case 5:return i=e.sent,n(i[0]),e.next=9,Promise.all([X(i[1],i[2]),Y(i[1],i[2])]);case 9:o=e.sent,l=Object(S.a)(o,2),u=l[0],j=l[1],c(u),r(j),a();case 16:case"end":return e.stop()}}),e)})));return function(t,n,c,r,a){return e.apply(this,arguments)}}(),$=function(){var e=Object(U.a)(W.a.mark((function e(t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.post("/report",JSON.stringify(Object(k.a)({apikey:J},t)));case 2:return n=e.sent,e.prev=3,e.abrupt("return",n.data.RESULT.url);case 7:e.prev=7,e.t0=e.catch(3),alert(Error(n.ERROR_REASON));case 10:case"end":return e.stop()}}),e,null,[[3,7]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(U.a)(W.a.mark((function e(t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.create({headers:{"Content-Type":"application/json"}}).get(t.replace("web","api").replace("/value",""));case 3:return n=e.sent,e.abrupt("return",K(n.data.result.wonScore));case 7:e.prev=7,e.t0=e.catch(0),alert(Error(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),K=function(e){var t={};e.split(" ").forEach((function(e,n){t[n+1]=e.split("=").slice(-1)[0]}));var n=Object.keys(t).map((function(e){return[e,t[e]]}));return n.sort((function(e,t){return t[1]-e[1]})),[t,n[0][0],n[1][0]]},X=function(){var e=Object(U.a)(W.a.mark((function e(t,n){var c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.create({headers:{"Content-Type":"application/json"}}).get("https://www.career.go.kr/inspct/api/psycho/value/jobs",{params:{no1:t,no2:n}});case 3:return c=e.sent,e.abrupt("return",c.data);case 7:e.prev=7,e.t0=e.catch(0),alert(Error(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(U.a)(W.a.mark((function e(t,n){var c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.create({headers:{"Content-Type":"application/json"}}).get("https://www.career.go.kr/inspct/api/psycho/value/majors",{params:{no1:t,no2:n}});case 3:return c=e.sent,e.abrupt("return",c.data);case 7:e.prev=7,e.t0=e.catch(0),alert(Error(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),Z=function(){var e=Object(d.e)(),t=Object(o.useState)(!0),n=Object(S.a)(t,2),c=n[0],r=n[1],a=Object(h.c)(V),s=Object(S.a)(a,2),i=(s[0],s[1]);return Object(C.jsx)(v,{children:Object(C.jsxs)(w,{children:[Object(C.jsx)(L,{percent:0}),Object(C.jsx)("h5",{children:"\uc9c1\uc5c5\uacfc \uad00\ub828\ub41c \ub450\uac1c\uc758 \uac00\uce58 \uc911\uc5d0\uc11c \uc790\uae30\uc5d0\uac8c \ub354 \uc911\uc694\ud55c \uac00\uce58\uc5d0 \ud45c\uc2dc\ud558\uc138\uc694."}),Object(C.jsx)(Q,{Question:"\ub450\uac1c \uac00\uce58 \uc911\uc5d0 \uc790\uc2e0\uc5d0\uac8c \ub354 \uc911\uc694\ud55c \uac00\uce58\ub97c \uc120\ud0dd\ud558\uc138\uc694.",value1:"\ub2a5\ub825\ubc1c\ud718",value2:"\uc790\uc728\uc131",group:0,onClick:function(){r(!1)}}),Object(C.jsx)(E,{name:"\uac80\uc0ac\uc2dc\uc791",disabled:c,onClick:function(){_().then((function(e){return i(e)})),e.push("/test")}})]})})},ee=n(12),te=function(e){var t=e.Question,n=e.value1,c=e.value2,r=e.hiddenValue1,a=e.hiddenValue2,s=e.checked,i=e.group,o=e.onClick;return Object(C.jsxs)("div",{children:[Object(C.jsx)("h5",{style:{fontWeight:"bold"},children:"Q"+(i+1)+". "+t}),Object(C.jsx)(R,{value:n,group:i,hiddenValue:r,answer:s===r,onChange:o}),Object(C.jsx)(R,{value:c,group:i,hiddenValue:a,answer:s===a,onChange:o})]})},ne=function(){var e=Object(d.e)(),t=Object(h.d)(V),n=Object(h.c)(F),c=Object(S.a)(n,2)[1],r=Object(h.c)(G),a=Object(S.a)(r,2)[1],s=Object(h.c)(T),i=Object(S.a)(s,2)[1],l=Object(o.useState)(new Array(28).fill(0)),u=Object(S.a)(l,2),j=u[0],b=u[1],p=Object(o.useState)(1),O=Object(S.a)(p,2),f=O[0],x=O[1],g=Object(o.useState)(!0),v=Object(S.a)(g,2),y=v[0],k=v[1],N=Object(o.useState)(0),R=Object(S.a)(N,2),A=R[0],q=R[1];Object(o.useEffect)((function(){k(j.slice(5*(f-1),5*f).includes(0))}),[j,f]);var Q=function(e,t){var n=Object(ee.a)(j);n=n.map((function(n,c){return n=c===e?t:n})),b(n),q(parseInt(100*n.filter((function(e){return 0!==e})).length/28))},D=function(){var e=j.map((function(e,t){return"B".concat(t+1,"=").concat(e)})).join(" ");M({qestrnSeq:"6",trgetSe:"1002008",name:"",gender:"",startDtm:0,answers:e},U,B,I,W)},W=function(){e.push("/finish")},U=function(e){c(e)},B=function(e){a(e)},I=function(e){i(e)};return Object(C.jsx)(m,{children:Object(C.jsxs)(w,{children:[Object(C.jsx)(L,{percent:A}),Object(C.jsx)(C.Fragment,{children:t.slice(5*(f-1),5*f).map((function(e,t){return Object(C.jsx)(te,{Question:e.question,value1:e.answer01,value2:e.answer02,hiddenValue1:e.answerScore01,hiddenValue2:e.answerScore02,group:t+5*(f-1),checked:j[t+5*(f-1)],onClick:Q},t+5*(f-1))}))}),Object(C.jsx)(E,{name:"\uc774\uc804",disabled:!1,onClick:function(){f>1?x(f-1):e.push("/example")}}),Object(C.jsx)(E,{name:"\ub2e4\uc74c",disabled:y,onClick:function(){f<6?x(f+1):D()}})]})})},ce=["\ub2a5\ub825\ubc1c\ud718","\uc790\uc728\uc131","\ubcf4\uc218","\uc548\uc815\uc131","\uc0ac\ud68c\uc801 \uc778\uc815","\uc0ac\ud68c\ubd09\uc0ac","\uc790\uae30\uacc4\ubc1c","\ucc3d\uc758\uc131"],re=["","\uc911\uc878\uc774\ud558","\uace0\uc878","\uc804\ubb38\ub300\uc878","\ub300\uc878","\ub300\ud559\uc6d0\uc878"],ae=["\uacc4\uc5f4\ubb34\uad00","\uc778\ubb38","\uc0ac\ud68c","\uad50\uc721","\uacf5\ud559","\uc790\uc5f0","\uc758\ud559","\uc608\uccb4\ub2a5"],se=function(){var e=Object(h.d)(F),t=Object(d.e)();return Object(C.jsx)(v,{children:Object(C.jsxs)(w,{children:[Object(C.jsx)("h1",{children:"\ud83c\udf89\uac80\uc0ac\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4!"}),Object(C.jsx)("h5",{children:"\uac80\uc0ac\uacb0\uacfc\ub294 \uc5ec\ub7ec\ubd84\uc774 \uc9c1\uc5c5\uc744 \uc120\ud0dd\ud560 \ub54c \uc0c1\ub300\uc801\uc73c\ub85c \uc5b4\ub5a0\ud55c \uac00\uce58\ub97c \uc911\uc694\ud558\uac8c \uc0dd\uac01\ud558\ub294\uc9c0\ub97c \uc54c\ub824\uc8fc\uace0,"}),Object(C.jsx)("h5",{children:"\uc911\uc694 \uac00\uce58\ub97c \ucda9\uc871\uc2dc\ucf1c\uc904 \uc218 \uc788\ub294 \uc9c1\uc5c5\uc5d0 \ub300\ud574 \uc0dd\uac01\ud574 \ubcfc \uae30\ud68c\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."}),function(){var t=function(){var t=e;console.log(t);var n=Object.keys(t).map((function(e){return[e,t[e]]}));return n.sort((function(e,t){return t[1]-e[1]})),console.log(n),[ce[n[0][0]-1],ce[n[1][0]-1]]}(),n=Object(S.a)(t,2),c=n[0],r=n[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("h4",{children:[c,"\uc640 ",r,"\ub97c \uc911\uc694 \uac00\uce58\ub85c \uc0dd\uac01\ud558\uc2dc\ub294\uad70\uc694!"]}),Object(C.jsx)("h4",{children:"\uacb0\uacfc\ubcf4\uae30 \ubc84\ud2bc\uc73c\ub85c, \uac00\uce58\uad00\uacfc \uad00\ub828\uc774 \ub192\uc740 \uc9c1\uc5c5\ub4e4\uc744 \ud0d0\uc0c9\ud558\uc138\uc694!"})]})}(),Object(C.jsx)(E,{name:"\uacb0\uacfc\ubcf4\uae30",disabled:!1,onClick:function(){t.push("/result")}})]})})},ie=n(109),oe=function(e){var t={labels:e.labels,datasets:[{borderWidth:1,data:e.datas,backgroundColor:"rgba(54, 162, 235, 0.2)"}]};return Object(C.jsx)(ie.a,{data:t,options:{legend:{display:!0},scales:{yAxes:[{ticks:{min:0,stepSize:1}}]},maintainAspectRatio:!0},width:100,height:50})},le=function(e){var t=e.userValue;return Object(C.jsxs)("table",{class:"table table-bordered",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{scope:"col",children:"\uc774\ub984"}),Object(C.jsx)("th",{scope:"col",children:"\uc131\ubcc4"}),Object(C.jsx)("th",{scope:"col",children:"\uac80\uc0ac\uc77c"})]})}),Object(C.jsx)("tbody",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:t.name}),Object(C.jsx)("td",{children:t.gender}),Object(C.jsx)("td",{children:t.createdAt})]})})]})},ue=function(e){var t=e.col,n=e.values,c=n[0],r=n[1];return Object(C.jsxs)("table",{class:"table table-bordered",children:[Object(C.jsx)("thead",{children:Object(C.jsx)("tr",{children:t.map((function(e){return Object(C.jsx)("td",{children:e})}))})}),Object(C.jsx)("tbody",{children:c.map((function(e,t){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{scope:"row",children:e}),Object(C.jsx)("td",{children:r[t].map((function(e){return Object(C.jsx)("a",{href:"https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ="+e[0],target:"_blank",children:e[1]})}))})]})}))})]})},je=function(){var e=Object(h.d)(A),t=Object(h.d)(F),n=Object(h.d)(G),c=Object(h.d)(T),r=Object(h.e)(A),a=Object(h.e)(A),s=Object(h.e)(A),i=Object(h.e)(A),o=Object(d.e)(),l=["\ubd84\uc57c","\uc9c1\uc5c5"],u=function(e,t){var n={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[]},c=[],r=[];e.forEach((function(e){var t=n[e[2]];t.push(e.slice(0,2)),n[e[2]]=t}));for(var a=0,s=Object.entries(n);a<s.length;a++){var i=Object(S.a)(s[a],2),o=i[0],l=i[1];console.log(o,l),0!==l.length&&(c.push(t[o]),r.push(l))}return console.log(c),console.log(r),[c,r]};return Object(C.jsx)(m,{children:Object(C.jsxs)(w,{children:[Object(C.jsx)("h1",{children:"\ud83d\udc4d\uc9c1\uc5c5\uac00\uce58\uad00\uac80\uc0ac \uacb0\uacfc\ud45c\ud83d\udcdd"}),Object(C.jsx)(le,{userValue:e}),Object(C.jsx)("p",{children:"\uc9c1\uc5c5\uac00\uce58\uad00\uc774\ub780 \uc9c1\uc5c5\uc744 \uc120\ud0dd\ud560 \ub54c \uc601\ud5a5\uc744 \ub07c\uce58\ub294 \uc790\uc2e0\ub9cc\uc758 \ubbff\uc74c\uacfc \uc2e0\ub150\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc5ec\ub7ec\ubd84\uc758 \uc9c1\uc5c5\uc0dd\ud65c\uacfc \uad00\ub828\ud558\uc5ec \ud3ec\uae30\ud558\uc9c0 \uc54a\ub294 \ubb34\uac8c\uc911\uc2ec\uc758 \uc5ed\ud560\uc744 \ud55c\ub2e4\uace0 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9c1\uc5c5\uac00\uce58\uad00\uac80\uc0ac\ub294 \uc5ec\ub7ec\ubd84\uc774 \uc9c1\uc5c5\uc744 \uc120\ud0dd\ud560 \ub54c \uc0c1\ub300\uc801\uc73c\ub85c \uc5b4\ub5a0\ud55c \uac00\uce58\ub97c \uc911\uc694\ud558\uac8c \uc0dd\uac01\ud558\ub294\uc9c0\ub97c \uc54c\ub824\uc90d\ub2c8\ub2e4. \ub610\ud55c \ubcf8\uc778\uc774 \uac00\uc7a5 \uc911\uc694\ud558\uac8c \uc0dd\uac01\ud558\ub294 \uac00\uce58\ub97c \ucda9\uc871\uc2dc\ucf1c\uc904 \uc218 \uc788\ub294 \uc9c1\uc5c5\uc5d0 \ub300\ud574 \uc0dd\uac01\ud574 \ubcfc \uae30\ud68c\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."}),Object(C.jsx)("h3",{children:"\uc9c1\uc5c5\uac00\uce58\uad00 \uacb0\uacfc"}),Object(C.jsx)(oe,{labels:ce,datas:Object.values(t).map(Number)}),Object(C.jsx)("h3",{style:{marginTop:"20px"},children:"\uac00\uce58\uad00\uacfc \uad00\ub828\uc774 \ub192\uc740 \uc9c1\uc5c5"}),Object(C.jsx)("h4",{style:{backgroundColor:"ivory"},children:"\uc885\uc0ac\uc790 \ud3c9\uade0 \ud559\ub825\ubcc4"}),Object(C.jsx)(ue,{col:l,values:u(n,re)}),Object(C.jsx)("h4",{style:{backgroundColor:"ivory"},children:"\uc885\uc0ac\uc790 \ud3c9\uade0 \uc804\uacf5\ubcc4"}),Object(C.jsx)(ue,{col:l,values:u(c,ae)}),Object(C.jsx)(E,{name:"\ub2e4\uc2dc \uac80\uc0ac\ud558\uae30",disabled:!1,onClick:function(){r(),a(),s(),i(),console.log(e,t,n,c),o.push("/")}})]})})};var be=function(){return Object(C.jsxs)(b.a,{children:[Object(C.jsx)(y,{}),Object(C.jsx)(x,{}),Object(C.jsxs)(h.a,{children:[Object(C.jsx)(d.a,{exact:!0,path:"/",component:q}),Object(C.jsx)(d.a,{exact:!0,path:"/example",component:Z}),Object(C.jsx)(d.a,{exact:!0,path:"/test",component:ne}),Object(C.jsx)(d.a,{exact:!0,path:"/finish",component:se}),Object(C.jsx)(d.a,{exact:!0,path:"/result",component:je})]})]})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,245)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};j.a.render(Object(C.jsx)(l.a.StrictMode,{children:Object(C.jsx)(be,{})}),document.getElementById("root")),de()}},[[244,1,2]]]);
//# sourceMappingURL=main.c4368ebe.chunk.js.map