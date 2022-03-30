import{m as R,a as I,b as P,d as _,r as m,o as f,c as h,e as r,n as y,w as z,f as w,g as F,F as M,h as H,i as N,j as S,k as B,l as k,u as T,p as g,q as b,s as v,t as C,v as E,_ as U,x as $,y as D}from"./vendor.a6522e55.js";const O=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}};O();const L=l=>fetch(l).then(o=>{if(!o.ok)throw Error("Request error.");return o.text()}).catch(o=>Promise.reject(o)),q=()=>{const l=new R({html:!0}).use(I),o=l.renderer.rules.link_open||function(e,t,n,s,i){return i.renderToken(e,t,n)};return l.renderer.rules.link_open=function(e,t,n,s,i){const c=e[t].attrIndex("target");return c<0?e[t].attrPush(["target","_blank"]):e[t].attrs[c][1]="_blank",o(e,t,n,s,i)},l},V=l=>{const o=/<dl>([\s\S]*?)<\/dl>/g,e=l.match(o);if(e===null)return l;for(const t of e){const n=/<dt>([\s\S]*?)<\/dt>/g,s=t.match(n);if(!s||(s==null?void 0:s.length)===1)continue;const i=t.replace(/<\/dd>/g,`</dd>
</dl>
<dl>`);l=l.replace(t,i)}return l},W=(l,o)=>{let e="";if(o.name&&(e+=`<h1>${o.name}</h1>
`),o.header)for(let t=0;t<o.header.length;t++){const n=o.header[t];n.link?e+=`<a href="${n.link}" target="_blank" rel="noopener noreferrer">${t===0?"":"<span> | </span>"}<span>${n.text}</span></a>
`:e+=`<span>${t===0?"":"<span> | </span>"}<span>${n.text}</span></span>
`}return`<div class="preview-header">${e}</div>`+l},j=()=>{const l=document.querySelector(".preview"),o=50,e=1120,t=()=>{const a=document.createElement("div");return a.className="preview-page",a},n=()=>{const a=document.createElement("div");return a.className="preview-page-break",a};let s=t(),i=0;const c=document.createElement("div");c.className="preview";const d=[];if(l.children[0].className!=="preview-page")for(const a of l.children)d.push(a);else for(const a of l.children)for(const u of a.children)d.push(u);for(const a of d){const u=window.getComputedStyle(a,null),p=a.clientHeight+parseInt(u.marginTop)+parseInt(u.marginBottom);i+p>e-o&&(c.appendChild(s),c.appendChild(n()),s=t(),i=0),s.appendChild(a.cloneNode(!0)),i+=p}c.appendChild(s),l.innerHTML=c.innerHTML},K=q(),A=l=>{const{body:o,attributes:e}=P(l);let t=K.render(o);return t=V(t),t=W(t,e),t},G={class:"z-10 h-40 w-full sm:w-96 m-auto fixed left-0 right-0 top-0 bottom-0 flex flex-col bg-white border border-gray-400 shadow"},J=r("span",{class:"iconify","data-icon":"ic:baseline-close"},null,-1),Q=[J],X=r("div",{class:"px-4 pt-3 pb-1 font-medium"},"Import a Markdown file",-1),Y={class:"pt-3 flex text-sm"},Z={class:"bg-gray-200 flex-1 flex items-center px-4"},ee={key:0,class:"flex w-full"},te=["value","onKeyup"],ne=r("span",{class:"iconify","data-icon":"line-md:confirm"},null,-1),se=[ne],oe=_({emits:["closeImport","updateMarkdownContent"],setup(l,{emit:o}){const e=m(0),t=m(""),n=m(null),s=()=>{t.value.trim()!==""&&L(t.value).then(d=>{o("updateMarkdownContent",d)})},i=d=>{d.stopPropagation();const a=d.target.files[0];n.value=new FileReader,n.value.onloadend=c,n.value.readAsText(a)},c=()=>{const d=n.value.result;o("updateMarkdownContent",d)};return(d,a)=>(f(),h("div",G,[r("div",null,[r("button",{class:"absolute right-3 top-3.5 cursor-pointer",onClick:a[0]||(a[0]=u=>d.$emit("closeImport"))},Q),X,r("div",Y,[r("button",{class:y(["px-2 py-0.5 border-l border-r border-t rounded-t-sm",[e.value===0&&"ml-4 bg-gray-200 border-gray-400",e.value!==0&&"ml-2 border-transparent"]]),onClick:a[1]||(a[1]=u=>e.value=0)}," Paste file URL ",2),r("button",{class:y(["px-2 py-0.5 border-l border-r border-t rounded-t-sm",[e.value===1&&"bg-gray-200 border-gray-400",e.value!==1&&"border-transparent"]]),onClick:a[2]||(a[2]=u=>e.value=1)}," Upload a file ",2)])]),r("div",Z,[e.value===0?(f(),h("div",ee,[r("input",{class:"flex-1 h-7 mr-1.5 px-1 text-sm rounded-sm outline-none",value:t.value,onChange:a[3]||(a[3]=u=>t.value=u.target.value),onKeyup:z(s,["enter"])},null,40,te),r("button",{class:"flex items-center justify-center w-8 h-7 bg-green-500 hover:bg-green-600 text-white rounded-sm",onClick:s},se)])):w("",!0),e.value===1?(f(),h("input",{key:1,class:"text-xs",accept:".md",type:"file",onChange:i},null,32)):w("",!0)])]))}}),ae={class:"header border-b flex justify-between pl-4 pr-1"},re=r("div",{class:"flex items-center"},[r("h1",{class:"font-bold text-md sm:text-lg"},"Oh, Resume!")],-1),le={class:"space-x-1 flex items-center"},ie=r("a",{class:"flex items-center space-x-0.5 sm:space-x-1.5 border rounded-md px-2 sm:px-3 h-9 sm:h-10 text-white bg-gray-500 hover:bg-gray-600",href:"http://github.com/Renovamen/oh-resume",target:"_blank",rel:"nofollow noopener"},[r("span",{class:"iconify text-sm sm:text-lg","data-icon":"tabler:brand-github"}),r("span",{class:"text-xs sm:text-sm"},"GitHub")],-1),de=r("span",{class:"iconify text-sm sm:text-lg","data-icon":"mdi:upload"},null,-1),ce=r("span",{class:"text-xs sm:text-sm"},"Import",-1),ue=[de,ce],pe=r("span",{class:"iconify text-sm sm:text-lg","data-icon":"mdi:progress-download"},null,-1),me=r("span",{class:"text-xs sm:text-sm"},"PDF",-1),fe=[pe,me],he=_({emits:["updateMarkdownContent"],setup(l){const o=()=>{window.print()},e=m(!1),t=n=>{e.value=typeof n=="boolean"?n:!e.value};return(n,s)=>(f(),h(M,null,[r("header",ae,[re,r("div",le,[ie,r("button",{class:"flex items-center space-x-0.5 sm:space-x-1.5 border rounded-md px-2 sm:px-3 h-9 sm:h-10 text-white bg-green-500 hover:bg-green-600",onClick:s[0]||(s[0]=i=>t(!0))},ue),r("button",{class:"flex items-center space-x-0.5 sm:space-x-1.5 border rounded-md px-2 sm:px-3 h-9 sm:h-10 text-white bg-blue-500 hover:bg-blue-600",onClick:o},fe)])]),e.value?(f(),F(oe,{key:0,onCloseImport:s[1]||(s[1]=i=>t(!1)),onUpdateMarkdownContent:s[2]||(s[2]=i=>{n.$emit("updateMarkdownContent",i),e.value=!1})})):w("",!0)],64))}}),ge=["innerHTML"],ve=_({setup(l){const o=m();let e;const t=m("");H(()=>{L("/example.md").then(p=>{t.value=p,e=N.create(o.value,{value:t.value,language:"markdown",wordWrap:"on",fontSize:13,automaticLayout:!0}),e.onDidChangeModelContent(()=>{t.value=e.getModel().getValue()})}),d(),u()}),S(()=>{e==null||e.dispose()});const n=p=>{e.getModel().setValue(p)},s=B(()=>A(t.value));k(()=>s.value,()=>{$(()=>{j()})});const{width:i}=T(),c=m(!1),d=()=>{i.value<=810?c.value=!0:c.value=!1};k(()=>i.value,()=>{d(),$(()=>{u()})});const a=m(1),u=()=>{const x=document.querySelector(".preview-pane").clientWidth;x>=804?a.value=1:a.value=(i.value<=810?i.value:x)/804};return(p,x)=>(f(),h(M,null,[g(he,{onUpdateMarkdownContent:n}),g(v(U),{class:"resume-main default-theme",horizontal:c.value,onResize:u},{default:b(()=>[g(v(C),{class:"editor"},{default:b(()=>[r("div",{ref_key:"editorRef",ref:o,class:"h-full"},null,512)]),_:1}),g(v(C),{class:"preview-pane","min-size":"30"},{default:b(()=>[r("div",{class:"preview-container",style:E({transform:`scale(${a.value})`})},[r("div",{class:"preview",innerHTML:v(s)},null,8,ge)],4)]),_:1})]),_:1},8,["horizontal"])],64))}});const xe=D(ve);xe.mount("#app");