import{r as p,o as d,c as _,a as r,t as i,p as f,b as m,d as a,e as h,f as v}from"./vendor.a1fd43a2.js";const g=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};g();var y=(o,n)=>{const l=o.__vccOpts||o;for(const[s,e]of n)l[s]=e;return l};const u=o=>(f("data-v-0692e008"),o=o(),m(),o),b=u(()=>r("p",null,[a(" Recommended IDE setup:1 "),r("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),a(" + "),r("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),k=u(()=>r("p",null,[r("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Documentation "),a(" | "),r("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Documentation")],-1)),V=u(()=>r("p",null,[a(" Edit "),r("code",null,"components/HelloWorld.vue"),a(" to test hot module replacement. ")],-1)),S={props:{msg:String},setup(o){const n=p(0);return(l,s)=>(d(),_("div",null,[r("h1",null,i(o.msg),1),b,k,r("button",{type:"button",onClick:s[0]||(s[0]=e=>n.value++)},"count is: "+i(n.value),1),V]))}};var x=y(S,[["__scopeId","data-v-0692e008"]]);const I={setup(o){return(n,l)=>(d(),h(x,{msg:"Hello Vue 3 + Vite"}))}};v(I).mount("#app");
