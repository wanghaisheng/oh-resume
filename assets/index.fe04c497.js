import{d as v,o as w,c as b,a as l,m as x,b as k,r as m,e as y,f as H,g as $,h as g,w as C,i as L,u as N,F as M,j as _,n as P,k as B}from"./vendor.e314e3d7.js";const E=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};E();const R={class:"border-b flex items-center justify-between pl-5 pr-1 header"},T=l("div",{class:"flex items-center space-x-6"},[l("h1",{class:"font-bold text-lg"},"Oh, Resume!")],-1),I=l("a",{class:"flex items-center space-x-2 border rounded-md px-3 h-10 text-white bg-gray-500",href:"http://github.com/Renovamen/oh-resume",target:"_blank",rel:"nofollow noopener"},[l("span",{class:"iconify text-lg","data-icon":"tabler:brand-github","data-inline":"false"}),l("span",{class:"text-sm"},"GitHub")],-1),D=l("span",{class:"iconify text-lg","data-icon":"mdi:progress-download","data-inline":"false"},null,-1),F=l("span",{class:"text-sm"},"PDF",-1),O=[D,F],S=v({setup(o){const r=()=>{window.print()};return(c,s)=>(w(),b("header",R,[T,l("div",{class:"space-x-3 flex items-center"},[I,l("button",{class:"flex items-center space-x-2 border rounded-md px-3 h-10 text-white bg-blue-500",onClick:r},O)])]))}}),j=o=>fetch(o).then(r=>{if(!r.ok)throw Error("Request error.");return r.text()}).catch(r=>Promise.reject(r)),q=o=>{const r=/<dl>([\s\S]*?)<\/dl>/g,c=o.match(r);if(c===null)return o;for(const s of c){const e=/<dt>([\s\S]*?)<\/dt>/g,t=s.match(e);if(!t||(t==null?void 0:t.length)===1)continue;const i=s.replace(/<\/dd>/g,`</dd>
</dl>
<dl>`);o=o.replace(s,i)}return o},V=(o,r)=>{let c="";if(r.name&&(c+=`<h1>${r.name}</h1>
`),r.header)for(let s=0;s<r.header.length;s++){const e=r.header[s];e.link?c+=`<a href="${e.link}" target="_blank" rel="noopener noreferrer">${s===0?"":"<span> | </span>"}<span>${e.text}</span></a>
`:c+=`<span>${s===0?"":"<span> | </span>"}<span>${e.text}</span></span>
`}return`<div class="preview-header">${c}</div>`+o},A=()=>{const o=document.querySelector(".preview"),r=60,c=1123,s=()=>{const n=document.createElement("div");return n.className="preview-page",n},e=()=>{const n=document.createElement("div");return n.className="preview-page-break",n};let t=s(),i=0;const d=document.createElement("div");d.className="preview";const a=[];if(o.children[0].className!=="preview-page")for(const n of o.children)a.push(n);else for(const n of o.children)for(const u of n.children)a.push(u);for(const n of a){const u=window.getComputedStyle(n,null),p=n.clientHeight+parseInt(u.marginTop)+parseInt(u.marginBottom);console.log(n,n.clientHeight,i),i+p>c-r&&(d.appendChild(t),d.appendChild(e()),t=s(),i=0),t.appendChild(n.cloneNode(!0)),i+=p}d.appendChild(t),o.innerHTML=d.innerHTML},G={class:"resume-main"},K={class:"editor"},U={class:"preview-container"},W=["innerHTML"],z=v({setup(o){const r=new x({html:!0}).use(k),c=r.renderer.rules.link_open||function(a,n,u,p,f){return f.renderToken(a,n,u)};r.renderer.rules.link_open=function(a,n,u,p,f){const h=a[n].attrIndex("target");return h<0?a[n].attrPush(["target","_blank"]):a[n].attrs[h][1]="_blank",c(a,n,u,p,f)};const s=m();let e;const t=m("");y(()=>{j("/example.md").then(a=>{t.value=a,e=H.create(s.value,{value:t.value,language:"markdown",wordWrap:"on"}),e.onDidChangeModelContent(()=>{t.value=e.getModel().getValue()})})}),$(()=>{e==null||e.dispose()});const i=g(()=>{const{attributes:a}=_(t.value);return a}),d=g(()=>{const{body:a,attributes:n}=_(t.value);return V(q(r.render(a)),n)});return C(()=>[d.value,i.value],()=>{P(()=>{A()})}),(a,n)=>(w(),b(M,null,[L(S),l("div",G,[l("div",K,[l("div",{ref_key:"editorRef",ref:s,class:"h-full"},null,512)]),l("div",U,[l("div",{class:"preview",innerHTML:N(d)},null,8,W)])])],64))}});const J=B(z);J.mount("#app");
