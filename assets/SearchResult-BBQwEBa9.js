import{u as G,g as te,h as ae,i as _,j as le,P as se,t as ie,k as ne,l as C,m as f,n as re,w as z,p as a,q as oe,R as U,s as ue,v as ce,x as de,C as ge,y as pe,z as he,A as ve,B as me,D as ye,E as be,F as ke,G as F,H as $,I as we,J as S,K as He}from"./app-BXdoYIkT.js";const Re=["/","/en/","/guide/","/en/guide/","/guide/standard/1-golang.html","/en/guide/standard/1-golang.html","/guide/concepts/golang/1-keywords.html","/guide/concepts/golang/2-datatype.html","/guide/concepts/golang/3-operator.html","/guide/concepts/golang/4-errorhandling.html","/guide/concepts/golang/5-map.html","/guide/concepts/golang/6-slice.html","/guide/concepts/golang/7-channel.html","/guide/concepts/golang/8-context.html","/guide/concepts/network/1-network.html","/guide/concepts/network/2-ip.html","/guide/concepts/network/3-tcp-udp.html","/guide/concepts/network/4-dns.html","/guide/concepts/network/5-arp.html","/guide/concepts/network/6-nat.html","/guide/devtools/Docker/1-docker.html","/guide/devtools/Git/1-git.html","/guide/devtools/IDE/1-goland.html","/guide/devtools/IDE/2-vscode.html","/guide/library/HTTP/1-gin.html","/guide/library/Micro/1-go-zero.html","/guide/library/Micro/2-kratos.html","/guide/library/ORM/1-ent.html","/guide/library/ORM/2-gorm.html","/guide/library/Util/1-lancet.html","/en/guide/concepts/golang/1-keywords.html","/en/guide/concepts/golang/2-datatype.html","/en/guide/concepts/golang/3-operator.html","/en/guide/concepts/golang/4-errorhandling.html","/en/guide/concepts/golang/5-map.html","/en/guide/concepts/golang/6-slice.html","/en/guide/concepts/golang/7-channel.html","/en/guide/concepts/golang/8-context.html","/en/guide/concepts/network/1-network.html","/en/guide/concepts/network/2-ip.html","/en/guide/concepts/network/3-tcp-udp.html","/en/guide/concepts/network/4-dns.html","/en/guide/concepts/network/5-arp.html","/en/guide/concepts/network/6-nat.html","/en/guide/devtools/Docker/1-docker.html","/en/guide/devtools/Git/1-git.html","/en/guide/devtools/IDE/1-goland.html","/en/guide/devtools/IDE/2-vscode.html","/en/guide/library/HTTP/1-gin.html","/en/guide/library/Micro/1-go-zero.html","/en/guide/library/Micro/2-kratos.html","/en/guide/library/ORM/1-ent.html","/en/guide/library/ORM/2-gorm.html","/en/guide/library/Util/1-lancet.html","/guide/concepts/database/SQL/1-database-basic.html","/guide/concepts/database/SQL/2-database-query.html","/guide/concepts/database/SQL/3-database-index.html","/guide/concepts/database/SQL/4-database-transaction.html","/guide/interview/golang/basic/1-basic.html","/guide/interview/golang/basic/2-medium.html","/en/guide/concepts/database/SQL/1-database-basic.html","/en/guide/concepts/database/SQL/2-database-query.html","/en/guide/concepts/database/SQL/3-database-index.html","/en/guide/concepts/database/SQL/4-database-transaction.html","/en/guide/interview/golang/basic/1-basic.html","/en/guide/interview/golang/basic/2-medium.html","/404.html","/guide/standard/","/en/guide/standard/","/guide/concepts/golang/","/guide/concepts/","/guide/concepts/network/","/guide/devtools/Docker/","/guide/devtools/","/guide/devtools/Git/","/guide/devtools/IDE/","/guide/library/HTTP/","/guide/library/","/guide/library/Micro/","/guide/library/ORM/","/guide/library/Util/","/en/guide/concepts/golang/","/en/guide/concepts/","/en/guide/concepts/network/","/en/guide/devtools/Docker/","/en/guide/devtools/","/en/guide/devtools/Git/","/en/guide/devtools/IDE/","/en/guide/library/HTTP/","/en/guide/library/","/en/guide/library/Micro/","/en/guide/library/ORM/","/en/guide/library/Util/","/guide/concepts/database/SQL/","/guide/concepts/database/","/guide/interview/golang/basic/","/guide/interview/golang/","/guide/interview/","/en/guide/concepts/database/SQL/","/en/guide/concepts/database/","/en/guide/interview/golang/basic/","/en/guide/interview/golang/","/en/guide/interview/"],Qe="SEARCH_PRO_QUERY_HISTORY",y=G(Qe,[]),fe=()=>{const{queryHistoryCount:l}=S,s=l>0;return{enabled:s,queryHistory:y,addQueryHistory:i=>{s&&(y.value=Array.from(new Set([i,...y.value.slice(0,l-1)])))},removeQueryHistory:i=>{y.value=[...y.value.slice(0,i),...y.value.slice(i+1)]}}},O=l=>Re[l.id]+("anchor"in l?`#${l.anchor}`:""),Se="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:j}=S,b=G(Se,[]),De=()=>{const l=j>0;return{enabled:l,resultHistory:b,addResultHistory:s=>{if(l){const i={link:O(s),display:s.display};"header"in s&&(i.header=s.header),b.value=[i,...b.value.slice(0,j-1)]}},removeResultHistory:s=>{b.value=[...b.value.slice(0,s),...b.value.slice(s+1)]}}},Le=l=>{const s=ge(),i=_(),D=pe(),r=C(0),H=f(()=>r.value>0),h=he([]);return ve(()=>{const{search:v,terminate:L}=me(),k=we(c=>{const w=c.join(" "),{searchFilter:x=p=>p,splitWord:q,suggestionsFilter:I,...m}=s.value;w?(r.value+=1,v(c.join(" "),i.value,m).then(p=>x(p,w,i.value,D.value)).then(p=>{r.value-=1,h.value=p}).catch(p=>{console.warn(p),r.value-=1,r.value||(h.value=[])})):h.value=[]},S.searchDelay-S.suggestDelay);z([l,i],([c])=>k(c),{immediate:!0}),ye(()=>{L()})}),{isSearching:H,results:h}};var qe=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(l,{emit:s}){const i=ae(),D=_(),r=le(se),{enabled:H,addQueryHistory:h,queryHistory:v,removeQueryHistory:L}=fe(),{enabled:k,resultHistory:c,addResultHistory:w,removeResultHistory:x}=De(),q=H||k,I=ie(l,"queries"),{results:m,isSearching:p}=Le(I),n=ne({isQuery:!0,index:0}),d=C(0),g=C(0),P=f(()=>q&&(v.value.length>0||c.value.length>0)),E=f(()=>m.value.length>0),M=f(()=>m.value[d.value]||null),Y=()=>{const{isQuery:e,index:t}=n;t===0?(n.isQuery=!e,n.index=e?c.value.length-1:v.value.length-1):n.index=t-1},B=()=>{const{isQuery:e,index:t}=n;t===(e?v.value.length-1:c.value.length-1)?(n.isQuery=!e,n.index=0):n.index=t+1},J=()=>{d.value=d.value>0?d.value-1:m.value.length-1,g.value=M.value.contents.length-1},K=()=>{d.value=d.value<m.value.length-1?d.value+1:0,g.value=0},V=()=>{g.value<M.value.contents.length-1?g.value+=1:K()},N=()=>{g.value>0?g.value-=1:J()},T=e=>e.map(t=>He(t)?t:a(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=be[e.index]||"$content",[o,Q=""]=ke(t)?t[D.value].split("$content"):t.split("$content");return e.display.map(u=>a("div",T([o,...u,Q])))}return e.display.map(t=>a("div",T(t)))},R=()=>{d.value=0,g.value=0,s("updateQuery",""),s("close")},X=()=>H?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},r.value.queryHistory),v.value.map((e,t)=>a("div",{class:["search-pro-result-item",{active:n.isQuery&&n.index===t}],onClick:()=>{s("updateQuery",e)}},[a(F,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:o=>{o.preventDefault(),o.stopPropagation(),L(t)}})]))])):null,Z=()=>k?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},r.value.resultHistory),c.value.map((e,t)=>a(U,{to:e.link,class:["search-pro-result-item",{active:!n.isQuery&&n.index===t}],onClick:()=>{R()}},()=>[a(F,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(o=>T(o)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:o=>{o.preventDefault(),o.stopPropagation(),x(t)}})]))])):null;return re("keydown",e=>{if(l.isFocusing){if(E.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=M.value.contents[g.value];h(l.queries.join(" ")),w(t),i.push(O(t)),R()}}else if(k){if(e.key==="ArrowUp")Y();else if(e.key==="ArrowDown")B();else if(e.key==="Enter"){const{index:t}=n;n.isQuery?(s("updateQuery",v.value[t]),e.preventDefault()):(i.push(c.value[t].link),R())}}}}),z([d,g],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:l.queries.length?!E.value:!P.value}],id:"search-pro-results"},l.queries.length?p.value?a(oe,{hint:r.value.searching}):E.value?a("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:t},o)=>{const Q=d.value===o;return a("li",{class:["search-pro-result-list-item",{active:Q}]},[a("div",{class:"search-pro-result-title"},e||r.value.defaultTitle),t.map((u,ee)=>{const A=Q&&g.value===ee;return a(U,{to:O(u),class:["search-pro-result-item",{active:A,"aria-selected":A}],onClick:()=>{h(l.queries.join(" ")),w(u),R()}},()=>[u.type==="text"?null:a(u.type==="title"?ue:u.type==="heading"?ce:de,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[u.type==="text"&&u.header?a("div",{class:"content-header"},u.header):null,a("div",W(u))])])})])})):r.value.emptyResult:q?P.value?[X(),Z()]:r.value.emptyHistory:r.value.emptyResult)}});export{qe as default};