import"./upload-Bs9C8lXp.js";import{r as n,a9 as g,o as i,c as u,e as v,f as p,L as h,M as x,h as o,F as w,a3 as y}from"./index-BjGPYSck.js";import{t as _}from"./vue-draggable-plus-BQ_-Bfov.js";const V={__name:"gridLayout",props:["centerWidth","frameTag"],setup(d){const m=n([]);n([]),n([]);const f=n(null),s=n([]),a=n([]),r=n([]);return g(()=>{if(a.value&&a.value.length!=0)for(let e=0;e<a.length;e++){const l=a.value[e],t=document.getElementById(l.nameIndex);r.value[e]&&r.value[e].appendChild(t)}}),eventBus.on("checkPanel",e=>{e.scale=1;let l=s.value.findIndex(t=>t.id==e.id);if(l==-1){e.show=!0,s.value.push(e);let t={id:s.value.length,nameIndex:e.id};a.value.push(t)}else s.value[l].show=!0}),eventBus.on("unCheckPanel",e=>{let l=s.value.findIndex(t=>t.id==e.id);l!=-1&&(s.value[l].show=!1)}),eventBus.on("ws-message",e=>{if(e.msg=="图片发送"){let t={img:"data:image/png;base64,"+e.data,timeStamp:e.timeStamp};m.value.push(t)}}),(e,l)=>(i(),u("div",null,[v(o(_),{modelValue:o(a),"onUpdate:modelValue":l[0]||(l[0]=t=>w(a)?a.value=t:null),group:"items",class:"layout-grid",style:y({width:d.centerWidth+"px"}),ref_key:"centerView",ref:f},{default:p(()=>[(i(!0),u(h,null,x(o(a),(t,c)=>(i(),u("div",{key:c,ref_for:!0,ref_key:"draggableDivs",ref:r}))),128))]),_:1},8,["modelValue","style"])]))}};export{V as default};
