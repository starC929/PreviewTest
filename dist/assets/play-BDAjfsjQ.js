import{_ as fe,a as he,b as be,c as Ie,d as we,e as xe,f as ye,g as De,h as Se,i as ke,j as Te,k as Ve,l as Be,m as Ce,n as Ee,o as Me,p as Pe,q as ze,r as Le,s as Ne,t as $e,u as Ae,v as Re,w as Xe,x as Ye,y as Fe,z as Ue,A as We,B as Ze,C as qe,D as He,E as Je,F as je,G as Ge,H as Ke,I as Oe,J as Qe,K as et,L as tt}from"./缩小-KeAYSmN5.js";import{_ as at,V as st,r as a,z as ot,a8 as D,a9 as lt,X as nt,Y as S,d as ee,o as u,c as I,m as i,e as _,f as k,A as te,h as o,I as N,J as $,L as A,M as ae,a3 as se,l as T,n as V,F as R,s as it,t as _t}from"./index-BjGPYSck.js";import ct from"./playBar-DVjgME8t.js";import rt from"./gaodeMap-C9aVyIDF.js";import dt from"./echart-DBS-qq_K.js";import gt from"./label-Coz-lo74.js";import ut from"./viewSelectPanel-C4ZxGaHa.js";import pt from"./imgPlay-Bg_UAzhR.js";import{b as vt}from"./upload-Bs9C8lXp.js";import mt from"./playSet-C-xjgyD4.js";import{t as ft}from"./vue-draggable-plus-BQ_-Bfov.js";import ht from"./reverseRadar-C-SKvX2h.js";import bt from"./dataExport-Bv828Y1P.js";import It from"./StateMachine-wCaUvJOA.js";import"./index-DnlKIcX7.js";/* empty css                                              */import"./MyTag-B9LUvWb-.js";import"./UploadObjectMsg-BBSqZrwA.js";const wt=h=>(it("data-v-57b80da2"),h=h(),_t(),h),xt={class:"layout-row-header"},yt={class:"header-left"},Dt=["src"],St={class:"title"},kt={style:{"line-height":"20px","vertical-align":"middle"}},Tt={class:"layout-row"},Vt=["id"],Bt={style:{height:"20px",background:"#888888",display:"flex","justify-content":"space-between",padding:"0px 5px"}},Ct={style:{color:"white",height:"20px"}},Et=["onMousedown"],Mt={id:"tagTable",style:{"box-shadow":"0px 0px 5px rgba(0, 0, 0, 0.5)"}},Pt=wt(()=>i("div",{style:{background:"#eeeeee","margin-bottom":"10px"}},[i("span",{class:"title"},"标签列表")],-1)),zt={class:"float-right-bottom"},Lt={__name:"play",props:["files"],setup(h){const p=st("eventBus"),oe=a([]);a([]);const X=a([]),B=h,m=a(!0),Y=a(""),f=a(!0),C=a("DArrowRight"),E=a("DArrowLeft"),le=a(null),w=a(!1),x=a(!1),v=a([]),d=a([]),M=a([]),F=a(null),U=a(null);let c={width:300,height:255},W=a(0),Z=a(0),q=a(0);const ne=ot(()=>q.value-Z.value*Number(m.value)-W.value*Number(f.value));ge();const H=a([]),J=a([]),j=a([]),G=a({}),K=a({duration:0,startTime:0});D("wsData",H),D("stateMachineInfo",J),D("egoVehicleCanInfoMsg",j),D("playBarTime",K);let r=[];p.on("ws-message",e=>{if(e.msg==="DDS_Message"&&r.push(e.data),e.msg==="DDS_END"){let s=r.slice(0)[0].timestamp,l=r.slice(-1)[0].timestamp-s;K.value={duration:l,startTime:s},H.value=r,J.value=r.filter(n=>n.topicType=="StateMachineInfo"),j.value=r.filter(n=>n.topicType=="EgoVehicleCanInfoMsg");let g=r.filter(n=>n.topicType=="xxxxxxx"&&n.camId==0),t=r.filter(n=>n.topicType=="xxxxxxx"&&n.camId==0),b=r.filter(n=>n.topicType=="xxxxxxx"&&n.camId==0),y=r.filter(n=>n.topicType=="xxxxxxx"&&n.camId==0);G.value={left:g,back:t,right:b,front:y}}}),p.on("checkPanel",e=>{e.scale=1;let s=v.value.findIndex(l=>l.id==e.id);if(s==-1){e.show=!0,v.value.push(e);let l={id:v.value.length,nameIndex:e.id};d.value.push(l)}else v.value[s].show=!0}),p.on("unCheckPanel",e=>{let s=v.value.findIndex(l=>l.id==e.id);s!=-1&&(v.value[s].show=!1)}),p.on("ws-message",e=>{if(e.msg=="图片发送"){let l={img:"data:image/png;base64,"+e.data,timeStamp:e.timeStamp};oe.value.push(l)}}),p.on("playSetting",()=>{w.value=!0}),p.on("exportData",()=>{x.value=!0}),lt(()=>{if(d.value&&d.value.length!=0)for(let e=0;e<d.value.length;e++){const s=d.value[e],l=document.getElementById(s.nameIndex);M.value[e]&&M.value[e].appendChild(l)}}),nt(()=>{ie(),W.value=document.getElementById("tagTable").offsetWidth,Z.value=document.getElementById("treeNav").offsetWidth,q.value=document.querySelector(".layout-row").offsetWidth});function ie(){S().getPlaySet()&&(f.value=S().getPlaySet().showTable),S().getPlaySet()&&(m.value=S().getPlaySet().showTree)}function _e(){f.value=!f.value,f.value==!0?C.value="DArrowRight":C.value="DArrowLeft"}function ce(e){return new URL(Object.assign({"../../../assets/dataIcons/back.png":fe,"../../../assets/dataIcons/back_2.png":he,"../../../assets/dataIcons/bev.png":be,"../../../assets/dataIcons/boundary_bev.png":Ie,"../../../assets/dataIcons/car.png":we,"../../../assets/dataIcons/l1.png":xe,"../../../assets/dataIcons/l2.png":ye,"../../../assets/dataIcons/l3.png":De,"../../../assets/dataIcons/laser.png":Se,"../../../assets/dataIcons/play.png":ke,"../../../assets/dataIcons/setting.jpeg":Te,"../../../assets/dataIcons/sgmwlogo.png":Ve,"../../../assets/dataIcons/videoImg.png":Be,"../../../assets/dataIcons/videoImg1.png":Ce,"../../../assets/dataIcons/videoImg（复件）.png":Ee,"../../../assets/dataIcons/volume.png":Me,"../../../assets/dataIcons/volume2.png":Pe,"../../../assets/dataIcons/volumeCross.png":ze,"../../../assets/dataIcons/volumeDisable.png":Le,"../../../assets/dataIcons/压缩包.png":Ne,"../../../assets/dataIcons/右下角(1).png":$e,"../../../assets/dataIcons/右下角(2).png":Ae,"../../../assets/dataIcons/右下角.png":Re,"../../../assets/dataIcons/导出.png":Xe,"../../../assets/dataIcons/开始.png":Ye,"../../../assets/dataIcons/播放(1).png":Fe,"../../../assets/dataIcons/播放.png":Ue,"../../../assets/dataIcons/放大.png":We,"../../../assets/dataIcons/数据库(1).png":Ze,"../../../assets/dataIcons/数据库(2).png":qe,"../../../assets/dataIcons/数据库(3).png":He,"../../../assets/dataIcons/数据库.png":Je,"../../../assets/dataIcons/数据库_2.png":je,"../../../assets/dataIcons/文件.png":Ge,"../../../assets/dataIcons/文件_2.png":Ke,"../../../assets/dataIcons/文件夹.png":Oe,"../../../assets/dataIcons/暂停.png":Qe,"../../../assets/dataIcons/添加标签.png":et,"../../../assets/dataIcons/缩小.png":tt})[`../../../assets/dataIcons/${e}`],import.meta.url).href}function re(){p.emit("goBack")}function de(){m.value=!m.value,m.value==!0?E.value="DArrowLeft":E.value="DArrowRight"}function ge(){Y.value=B.files.folderName,vt(B.files.id).then(e=>{}).catch(e=>{alert("获取DDS数据失败，请联系管理员!"),console.log("There was an error in getDDSdata!",e)})}function ue(e){p.emit("closePanel",e)}let P=0,z=0,L=null;function pe(e,s){e.preventDefault(),L=s,P=e.clientX,z=e.clientY,document.addEventListener("mousemove",O),document.addEventListener("mouseup",Q)}function O(e){let s=document.getElementById(L.id);const l=e.clientX-P,g=e.clientY-z;let t=0;Math.abs(l)<Math.abs(g)?t=(s.offsetWidth+l)/c.width:t=(s.offsetHeight+g)/c.height,(l>0&&g>0&&t<2||l<0&&g<0&&t>.5)&&(L.scale=t,P=e.clientX,z=e.clientY)}function Q(e){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",Q)}function ve(){return F.value.getData()}function me(){return U.value.getData()}return(e,s)=>{const l=ee("el-button"),g=ee("el-dialog");return u(),I(A,null,[i("div",null,[i("div",xt,[i("div",yt,[_(l,{circle:"",class:"button",onClick:re},{default:k(()=>[i("img",{src:ce("back_2.png"),style:{width:"25px",height:"25px"}},null,8,Dt)]),_:1}),i("div",St,[i("span",kt,te(o(Y)),1)])]),_(ct,{style:{"flex-grow":"1"},"video-time":o(X),ref_key:"refPlayBar",ref:U},null,8,["video-time"])]),i("div",Tt,[N(_(ut,{id:"treeNav"},null,512),[[$,o(m)]]),(u(!0),I(A,null,ae(o(v),(t,b)=>N((u(),I("div",{key:b,style:se({width:`${o(c).width*t.scale}px`,height:`${o(c).height*t.scale}px`}),class:"zoomable-div",id:t.id},[i("div",Bt,[i("span",Ct,te(t.label),1),_(l,{onClick:y=>ue(t),circle:"",style:{width:"20px",height:"20px",color:"white",background:"fixed",border:"none","font-size":"18px"},icon:"CircleClose"},null,8,["onClick"])]),t.label.split("-")[0]=="camera"||t.label.split("-")[0]=="鸟瞰⻋位线检测"?(u(),T(pt,{key:0,"list-img":o(G)[t.label.split("-")[1]],"div-size":{width:o(c).width*t.scale,height:o(c).height*t.scale-20}},null,8,["list-img","div-size"])):V("",!0),t.label.split("-")[0]=="can"?(u(),T(dt,{key:1,"chart-id":t.label,"video-time":o(X),"frame-tag":ve(),"current-frame":me(),"div-size":{width:o(c).width*t.scale,height:o(c).height*t.scale-20}},null,8,["chart-id","video-time","frame-tag","current-frame","div-size"])):V("",!0),t.label.split("-")[0]=="map"?(u(),T(rt,{key:2,style:{width:"20vw",height:"12vw"}})):V("",!0),t.label.split("-")[0]=="超声波信息"?(u(),T(ht,{key:3,"div-size":{width:o(c).width*t.scale,height:o(c).height*t.scale-20}},null,8,["div-size"])):V("",!0),i("div",{class:"zoom-control-div",onMousedown:y=>pe(y,t)},null,40,Et)],12,Vt)),[[$,t.show]])),128)),_(o(ft),{modelValue:o(d),"onUpdate:modelValue":s[0]||(s[0]=t=>R(d)?d.value=t:null),group:"items",class:"layout-grid",style:se({width:ne.value+"px"}),ref_key:"centerView",ref:le},{default:k(()=>[(u(!0),I(A,null,ae(o(d),(t,b)=>(u(),I("div",{key:b,ref_for:!0,ref_key:"draggableDivs",ref:M}))),128))]),_:1},8,["modelValue","style"]),N(i("div",Mt,[Pt,_(gt,{ref_key:"refLabel",ref:F,"file-id":B.files.id},null,8,["file-id"])],512),[[$,o(f)]]),_(l,{icon:o(E),onClick:de,class:"treeShow"},null,8,["icon"]),_(l,{icon:o(C),onClick:_e,class:"tagShow"},null,8,["icon"]),i("div",zt,[_(It)])])]),_(g,{title:"播放设置",modelValue:o(w),"onUpdate:modelValue":s[1]||(s[1]=t=>R(w)?w.value=t:null),width:"800px","append-to-body":""},{default:k(()=>[_(mt)]),_:1},8,["modelValue"]),_(g,{title:"导出数据",modelValue:o(x),"onUpdate:modelValue":s[2]||(s[2]=t=>R(x)?x.value=t:null),width:"800px","append-to-body":""},{default:k(()=>[_(bt)]),_:1},8,["modelValue"])],64)}}},ea=at(Lt,[["__scopeId","data-v-57b80da2"]]);export{ea as default};
