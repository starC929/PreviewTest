import{Y as r,U as e}from"./index-BjGPYSck.js";r().getUid();function d(t){return e({url:"/data/fileUpload/v1/"+t,method:"get"})}function s(t){return e({url:"/data/fileUpload/v1",method:"post",data:t})}function l({identifier:t,partNumber:a}){return e({url:"/data/fileUpload/v1/"+t+"/"+a,method:"get"})}function n(t){return e({url:"/data/fileUpload/v1/merge/"+t,method:"post"})}function i(t){return e({url:"/data/fileUpload/v1/listObjectsDeepByPath?path="+t,method:"get"})}function u(t){return e({url:"/data/fileUpload/v1/listObjectsByPath?path="+t,method:"get"})}function c(t){return e({url:"/data/fileUpload/v1/getFileUrl?fileName="+t,method:"get"})}function f(t){return e({url:"/data/fileUpload/v1/removeObjects",method:"delete",data:t})}function p(t,a){return e({url:"/data/fileUpload/v1/searchObject?path="+t+"&key="+a,method:"get"})}function g(t){return e({url:"/data/dds/sendTotalDDSMessageByWebsocket/"+t,method:"get"})}function h(){return e({url:"/data/dds/topics",method:"get"})}function m(t){return e({url:"/data/dds/messages?toplics="+t,method:"get"})}export{i as a,g as b,m as c,h as d,c as g,s as i,u as l,n as m,l as p,f as r,p as s,d as t};
