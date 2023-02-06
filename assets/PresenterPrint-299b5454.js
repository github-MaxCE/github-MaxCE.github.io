import{f as _,h,j as d,ag as u,c as m,ah as p,l as n,ai as t,aj as o,y as s,F as g,ak as f,al as v,am as x,n as i,an as b,ao as y,m as k,ap as N,aq as w,_ as P}from"./nav-19d786eb.js";import{N as V}from"./NoteViewer-9481d853.js";import{u as j}from"./index-2507167a.js";const C={class:"m-4"},S={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},M={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},E={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},D=_({__name:"PresenterPrint",setup(F){h(d),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),j({title:`Notes - ${m.title}`});const l=p(()=>x.slice(0,-1).map(a=>{var r;return(r=a.meta)==null?void 0:r.slide}).filter(a=>a!==void 0&&a.notesHTML!==""));return(a,r)=>(i(),n("div",{id:"page-root",style:v(s(w))},[t("div",C,[t("div",S,[t("h1",L,o(s(m).title),1),t("div",M,o(new Date().toLocaleString()),1)]),(i(!0),n(g,null,f(s(l),(e,c)=>(i(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",E,o(e==null?void 0:e.no)+"/"+o(s(b)),1),y(" "+o(e==null?void 0:e.title)+" ",1),H])]),k(V,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(l).length-1?(i(),n("hr",z)):N("v-if",!0)]))),128))])],4))}}),W=P(D,[["__file","/home/runner/work/github-MaxCE.github.io/github-MaxCE.github.io/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{W as default};
