import{_ as de,a as re,b as pe,c as ge,d as ue,e as me,f as ve,g as be,h as fe,i as he,j as ye,k as Ie,l as xe,m as we,n as Ce,o as ke,p as je,q as Ne,r as Se,s as Ue,t as Be,u as Fe,v as Ve,w as Me,x as De,y as Oe,z as Le,A as Te,B as ze,C as Pe,D as Re,E as $e,F as qe,G as Ae,H as Ee,I as He,J as Je,K as Ge,L as Ke}from"./缩小-KeAYSmN5.js";import{_ as Qe,V as $,r as _,X as We,d,H as q,o as y,c as A,m as i,e as t,f as o,p as j,I as N,l as O,h as r,F as L,L as Xe,M as Ye,A as T,J as E,q as H,C as Ze,s as et,t as tt,a5 as at,a6 as st,a7 as ot}from"./index-BjGPYSck.js";import{l as lt,d as nt}from"./UploadObjectMsg-BBSqZrwA.js";import it from"./upload-BZ61Scj1.js";import{s as _t}from"./upload-Bs9C8lXp.js";import ct from"./uploadProgress-DxSEQ6Mm.js";const J=I=>(et("data-v-d1cacecd"),I=I(),tt(),I),dt={class:"app-container"},rt={style:{height:"45px","margin-bottom":"20px","border-bottom":"1px solid #ccccdd","padding-bottom":"10px"}},pt=J(()=>i("span",null,"正在传输",-1)),gt=["onClick"],ut={style:{display:"flex","align-items":"center"}},mt=["src"],vt={style:{display:"flex","flex-direction":"row"}},bt=["src"],ft={class:"progress-position"},ht={class:"progress-title"},yt=J(()=>i("span",null,"上传进度",-1)),It=Ze({name:"UploadObjectMsg"}),xt=Object.assign(It,{setup(I){const S=$("eventBus");_(null);const m=_(!1),x=_([]),U=_(!1),G=_({pageNum:1,pageSize:1e6,dataName:"",createTime:"",tag:"",createBy:""}),v=_({}),b=_(["文件"]),c=_(""),u=_(0),f=_(!1),w=_(""),C=_(!0);S.on("uploadStart",e=>{m.value=!1,f.value=!0,u.value++}),S.on("uploadFinish",e=>{u.value>0&&u.value--,e.state=="完成"&&h()}),We(()=>{h()});let B=$("$modal");function h(e){U.value=!0,lt(G.value).then(a=>{U.value=!1,x.value=a.rows})}function K(e){if(e==0)c.value="",b.value=["文件"];else{c.value="";for(let a=1;a<e+1;a++)c.value=c.value+b.value[a]+"/";b.value=b.value.slice(0,e)}h()}function z(){x.value=[],h()}function Q(e){e.type=="folder"&&(c.value==""?c.value=e.objectName:c.value=c.value+e.objectName,console.log("query:",c.value),h())}function W(e){v.value=e,console.log("勾选：",v.value)}function X(e){return e.includes("dds")?F("数据库(2).png"):F("文件_2.png")}function F(e){return new URL(Object.assign({"../../../assets/dataIcons/back.png":de,"../../../assets/dataIcons/back_2.png":re,"../../../assets/dataIcons/bev.png":pe,"../../../assets/dataIcons/boundary_bev.png":ge,"../../../assets/dataIcons/car.png":ue,"../../../assets/dataIcons/l1.png":me,"../../../assets/dataIcons/l2.png":ve,"../../../assets/dataIcons/l3.png":be,"../../../assets/dataIcons/laser.png":fe,"../../../assets/dataIcons/play.png":he,"../../../assets/dataIcons/setting.jpeg":ye,"../../../assets/dataIcons/sgmwlogo.png":Ie,"../../../assets/dataIcons/videoImg.png":xe,"../../../assets/dataIcons/videoImg1.png":we,"../../../assets/dataIcons/videoImg（复件）.png":Ce,"../../../assets/dataIcons/volume.png":ke,"../../../assets/dataIcons/volume2.png":je,"../../../assets/dataIcons/volumeCross.png":Ne,"../../../assets/dataIcons/volumeDisable.png":Se,"../../../assets/dataIcons/压缩包.png":Ue,"../../../assets/dataIcons/右下角(1).png":Be,"../../../assets/dataIcons/右下角(2).png":Fe,"../../../assets/dataIcons/右下角.png":Ve,"../../../assets/dataIcons/导出.png":Me,"../../../assets/dataIcons/开始.png":De,"../../../assets/dataIcons/播放(1).png":Oe,"../../../assets/dataIcons/播放.png":Le,"../../../assets/dataIcons/放大.png":Te,"../../../assets/dataIcons/数据库(1).png":ze,"../../../assets/dataIcons/数据库(2).png":Pe,"../../../assets/dataIcons/数据库(3).png":Re,"../../../assets/dataIcons/数据库.png":$e,"../../../assets/dataIcons/数据库_2.png":qe,"../../../assets/dataIcons/文件.png":Ae,"../../../assets/dataIcons/文件_2.png":Ee,"../../../assets/dataIcons/文件夹.png":He,"../../../assets/dataIcons/暂停.png":Je,"../../../assets/dataIcons/添加标签.png":Ge,"../../../assets/dataIcons/缩小.png":Ke})[`../../../assets/dataIcons/${e}`],import.meta.url).href}async function Y(e){return at({url:e,method:"get",responseType:"blob",headers:{Authorization:"Bearer "+st()}}).then(a=>{const s=a.headers["content-disposition"];if(!a||!s){error(a.message||"下载失败！");return}if(a&&a.status===200&&a.data){const{data:l,headers:p}=a,V=new Blob([l],{type:p["content-type"]});let D=p["content-disposition"].split("filename=")[1];ot.saveAs(V,D)}}).catch(a=>{})}async function Z(){if(v.value.length==0)B.msgWarning("请选择下载的文件");else for(let e=0;e<v.value.length;e++){let a=v.value[e].objectName,s=c.value+a,l="";l="/prod-api/data/fileUpload/v1/downloadMultiFileToMinIO?folderName="+s,Y(l)}}function P(e){B.confirm('是否确认删除文件"'+e.dataName+'"?').then(function(){return nt(e.id)}).then(()=>{B.msgSuccess("删除成功"),z()}).catch(()=>{})}function R(){let e=c.value,a=w.value;_t(e,a).then(s=>{for(let l=0;l<s.data.length;l++){let p=s.data[l].objectName;p.slice(-1)=="/"&&(s.data[l].objectName=p.slice(0,p.length-1)),e!="/"&&(s.data[l].objectName=s.data[l].objectName.slice(e.length,s.data[l].objectName.length))}x.value=s.data})}async function ee(e){let s={type:"server",path:e.ddsFilePath.split("/").slice(0,-2).join("/")+"/",folderName:e.dataName,id:e.id};S.emit("files",s)}function te(){m.value=!0}function ae(){f.value=!f.value}function se(){f.value=!1}return(e,a)=>{const s=d("el-button"),l=d("el-col"),p=d("el-badge"),V=d("right-toolbar"),M=d("el-row"),D=d("el-breadcrumb-item"),oe=d("el-breadcrumb"),le=d("el-input"),g=d("el-table-column"),ne=d("el-table"),ie=d("el-dialog"),_e=q("hasPermi"),ce=q("loading");return y(),A("div",dt,[i("div",rt,[t(M,{span:1,type:"flex",justify:"space-between"},{default:o(()=>[t(l,{span:10},{default:o(()=>[t(s,{style:{"margin-right":"20px"},type:"primary",icon:"Upload",onClick:te},{default:o(()=>[j("上传")]),_:1}),t(s,{style:{"margin-right":"30px"},type:"primary",icon:"Download",onClick:Z},{default:o(()=>[j("下载")]),_:1})]),_:1}),t(l,{span:2,offset:10,style:{display:"flex","justify-content":"flex-end"}},{default:o(()=>[N((y(),O(s,{style:{"margin-right":"30px"},type:"danger",icon:"Delete",onClick:P},{default:o(()=>[j("删除")]),_:1})),[[_e,["data:UploadObjectMsg:remove"]]]),t(s,{style:{"margin-right":"30px"},type:"primary",disabled:r(u)==0,plain:"",icon:"Switch",onClick:ae},{default:o(()=>[pt,t(p,{style:{position:"relative",float:"right","margin-left":"5px"},value:r(u),hidden:r(u)==0,min:1,max:99},null,8,["value","hidden"])]),_:1},8,["disabled"])]),_:1}),t(l,{span:2,style:{display:"flex","justify-content":"flex-end"}},{default:o(()=>[t(V,{showSearch:r(C),"onUpdate:showSearch":a[0]||(a[0]=n=>L(C)?C.value=n:null),onQueryTable:z},null,8,["showSearch"])]),_:1})]),_:1})]),t(M,null,{default:o(()=>[t(l,{span:18},{default:o(()=>[t(oe,{separator:"〉",class:"breadcrumb_bg"},{default:o(()=>[(y(!0),A(Xe,null,Ye(r(b),(n,k)=>(y(),O(D,{key:k},{default:o(()=>[i("a",{style:{"font-weight":"bold"},onClick:wt=>K(k)},T(n),9,gt)]),_:2},1024))),128))]),_:1})]),_:1}),t(l,{span:6,style:{display:"flex","justify-content":"flex-end"}},{default:o(()=>[N(i("div",null,[t(le,{modelValue:r(w),"onUpdate:modelValue":a[1]||(a[1]=n=>L(w)?w.value=n:null),onBlur:R,style:{width:"200px",height:"25px"},placeholder:"请输入"},null,8,["modelValue"]),t(s,{type:"primary",onClick:R,style:{height:"25px"}},{default:o(()=>[j("搜索")]),_:1})],512),[[E,r(C)]])]),_:1})]),_:1}),N((y(),O(ne,{id:"table",data:r(x),"max-height":"600",onSelect:W,onRowClick:Q,style:{width:"100%"}},{default:o(()=>[t(g,{type:"selection",width:"55",align:"center"}),t(g,{label:"文件",prop:"dataName",width:"600px",sortable:""},{default:o(n=>[i("div",ut,[i("img",{src:X(n.row.dataName),style:{width:"20px",height:"20px","margin-right":"10px"}},null,8,mt),i("span",null,T(n.row.dataName),1)])]),_:1}),t(g,{label:"标签",align:"center",prop:"tag",sortable:""}),t(g,{label:"大小",align:"center",prop:"fileSize",sortable:""},{default:o(n=>[i("span",null,T(n.row.fileSizeStr),1)]),_:1}),t(g,{label:"时间",align:"center",prop:"createTime",sortable:""}),t(g,{label:"上传者",align:"center",prop:"createBy",sortable:""}),t(g,{prop:"time",label:"操作","class-name":"small-padding fixed-width"},{default:o(n=>[i("div",vt,[t(s,{onClick:H(k=>ee(n.row),["stop"]),style:{width:"25px",height:"25px",border:"none"}},{default:o(()=>[i("img",{src:F("播放(1).png"),style:{width:"15px",height:"15px"}},null,8,bt)]),_:2},1032,["onClick"]),t(s,{style:{width:"25px",height:"25px",border:"none",color:"#f56c6c","font-size":"18px"},icon:"Delete",onClick:H(k=>P(n.row),["stop"])},null,8,["onClick"])])]),_:1})]),_:1},8,["data"])),[[ce,r(U)]]),N(i("div",ft,[i("div",ht,[yt,t(s,{icon:"CircleClose",style:{border:"none","font-size":"20px",padding:"0px"},onClick:se})]),t(ct)],512),[[E,r(f)]]),t(ie,{title:"文件上传",modelValue:r(m),"onUpdate:modelValue":a[2]||(a[2]=n=>L(m)?m.value=n:null),width:"500px","append-to-body":""},{default:o(()=>[t(it)]),_:1},8,["modelValue"])])}}}),Bt=Qe(xt,[["__scopeId","data-v-d1cacecd"]]);export{Bt as default};
