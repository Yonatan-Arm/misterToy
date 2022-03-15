import{_ as y,r as d,o as p,c as m,a as s,b as c,w as _,d as l,F as k,C as S,e as w,P as L,f as $,g as E,t as f,h as I,i as b,j as C,v as F,k as N,l as D,m as V,n as A,p as O,q,s as M,u as P}from"./vendor.ba7598c2.js";const z=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};z();const G={name:"app-header"},R={class:"app-header"},U=s("div",{class:"logo"},"MisterToy",-1),J=l("Home"),H=l(" | "),W=l("Toy"),j=l(" | "),K=l("About");function Q(t,e,r,u,o,n){const i=d("router-link");return p(),m("header",R,[U,s("nav",null,[c(i,{to:"/"},{default:_(()=>[J]),_:1}),H,c(i,{to:"/toy"},{default:_(()=>[W]),_:1}),j,c(i,{to:"/about"},{default:_(()=>[K]),_:1})])])}var X=y(G,[["render",Q]]);const Z={name:"app",components:{appHeader:X},created(){this.$store.dispatch({type:"loadToys"})}};function Y(t,e,r,u,o,n){const i=d("app-header"),a=d("router-view");return p(),m(k,null,[c(i),c(a)],64)}var ee=y(Z,[["render",Y]]);S.register(...w);const te={props:["data"],components:{PieChart:L},data(){return{testData:{labels:["Paris","N\xEEmes","Toulon","Perpignan","Autre"],datasets:[{data:[30,40,60,70,5],backgroundColor:["#77CEFF","#0079AF","#123E6B","#97B0C4","#A5C8ED"]}]}}}};function oe(t,e,r,u,o,n){const i=d("PieChart");return p(),$(i,{chartData:o.testData},null,8,["chartData"])}var ne=y(te,[["render",oe]]);const se={data(){return{center:{lat:32,lng:34.75},markers:[{position:{lat:32,lng:34.75}}]}}};function re(t,e,r,u,o,n){const i=d("GMapMarker"),a=d("GMapCluster"),h=d("GMapMap");return p(),$(h,{center:o.center,zoom:10,"map-type-id":"terrain",style:{width:"500px",height:"300px"}},{default:_(()=>[c(a,null,{default:_(()=>[(p(!0),m(k,null,E(o.markers,(x,v)=>(p(),$(i,{key:v,position:x.position,clickable:!0,draggable:!0,onClick:ft=>o.center=x.position},null,8,["position","onClick"]))),128))]),_:1})]),_:1},8,["center"])}var ie=y(se,[["render",re]]);const ae={name:"home",components:{chart:ne,mapLocatin:ie}},le=s("h1",null,"Welcome To Mister Toy",-1);function ue(t,e,r,u,o,n){const i=d("chart"),a=d("map-locatin");return p(),m(k,null,[le,s("section",null,[c(i),c(a)])],64)}var ce=y(ae,[["render",ue]]);const de={name:"about"};function pe(t,e,r,u,o,n){return" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea consequuntur distinctio possimus vel recusandae, consequatur sint eaque. Recusandae eius fugiat nihil nisi molestias a enim, cumque quia, harum laboriosam fuga! Placeat omnis, odio, eius, reiciendis adipisci aut asperiores unde explicabo nam accusamus sit iusto cum repellat maxime iure tempora blanditiis dolor expedita? Earum modi distinctio illum ratione maiores odit laudantium. Nobis nam magnam incidunt adipisci mollitia quia praesentium quis cupiditate? Eos pariatur harum eligendi non numquam. Maxime consequatur doloribus, laboriosam dignissimos eius quasi modi sapiente iste quas perspiciatis accusamus! Quod. "}var _e=y(de,[["render",pe]]);const me={name:"toy-preview",props:{toy:{type:Object}},methods:{goToDetail(){this.$router.push(`/toy/${this.toy._id}`)},goToEdit(){this.$router.push(`/toy/edit/${this.toy._id}`)},removeToy(t){this.$emit("removeToy",t)}}},ye={class:"toy-preview"},he=s("span",{class:"fw-bold"},"name:",-1),fe=s("span",{class:"fw-bold"},"price:",-1),ve={class:"btn-group"};function ge(t,e,r,u,o,n){return p(),m("li",ye,[s("p",null,[he,l(" "+f(r.toy.name),1)]),s("p",null,[fe,l(" "+f(r.toy.price),1)]),s("div",ve,[s("button",{onClick:e[0]||(e[0]=(...i)=>n.goToEdit&&n.goToEdit(...i)),class:"btn btn-primary"},"edit"),s("button",{onClick:e[1]||(e[1]=(...i)=>n.goToDetail&&n.goToDetail(...i)),class:"btn btn-info"},"details"),s("button",{onClick:e[2]||(e[2]=i=>n.removeToy(r.toy._id)),class:"btn btn-danger"},"delete")])])}var $e=y(me,[["render",ge]]);const be={name:"toy-list",props:{toys:{type:Array}},components:{toyPreview:$e},methods:{removeToy(t){this.$emit("removeToy",t)}}};function Te(t,e,r,u,o,n){const i=d("toy-preview");return p(),m("ul",null,[(p(!0),m(k,null,E(r.toys,a=>(p(),$(i,{onRemoveToy:n.removeToy,toy:a,key:a._id},null,8,["onRemoveToy","toy"]))),128))])}var ke=y(be,[["render",Te]]);const Be={data(){return{value1:[],options:[{value:"On wheels",label:"On wheels"},{value:"Box game",label:"Box game"},{value:"Art",label:"Art"},{value:"Baby",label:"Baby"},{value:"Doll",label:"Doll"},{value:"Puzzle",label:"Puzzle"},{value:"Outdoor",label:"Outdoor"}]}},methods:{setFilter(){this.$emit("ChangeFilter",JSON.parse(JSON.stringify(this.value1)))}}},xe={style:{display:"inline-block","margin-left":"20px"}};function Ce(t,e,r,u,o,n){const i=d("el-option"),a=d("el-select");return p(),m("div",xe,[c(a,{onChange:n.setFilter,modelValue:o.value1,"onUpdate:modelValue":e[0]||(e[0]=h=>o.value1=h),multiple:"","collapse-tags":"",placeholder:"Select",style:{width:"240px"}},{default:_(()=>[(p(!0),m(k,null,E(o.options,h=>(p(),$(i,{key:h.value,label:h.label,value:h.value},null,8,["label","value"]))),128))]),_:1},8,["onChange","modelValue"])])}var Fe=y(Be,[["render",Ce]]);const Ee={name:"toy-filter",data(){return{filterBy:{name:"",inStock:"",labels:[],sortBy:""}}},methods:{setFilter(){this.$emit("filter",JSON.parse(JSON.stringify(this.filterBy)))},ChangeFilter(t){this.filterBy.labels=t,this.$emit("filter",JSON.parse(JSON.stringify(this.filterBy)))}},components:{selectFilter:Fe}},Ie={class:"toy-filter"},Se=l(" Search "),we=l(" Stock: "),Le=l("All"),Ne=l("In stock"),De=l("Not in stock"),Ve=l(" labels: "),Ae=l(" Sort By: "),Oe=l("Time"),qe=l("Name"),Me=l("Price");function Pe(t,e,r,u,o,n){const i=d("el-input"),a=d("el-option"),h=d("el-select"),x=d("select-filter");return p(),m("section",Ie,[s("label",null,[Se,c(i,{modelValue:o.filterBy.name,"onUpdate:modelValue":e[0]||(e[0]=v=>o.filterBy.name=v),onInput:n.setFilter,type:"text",placeholder:"Search toy.."},null,8,["modelValue","onInput"])]),s("label",null,[we,c(h,{onChange:n.setFilter,modelValue:o.filterBy.inStock,"onUpdate:modelValue":e[1]||(e[1]=v=>o.filterBy.inStock=v)},{default:_(()=>[c(a,{value:""},{default:_(()=>[Le]),_:1}),c(a,{value:"true"},{default:_(()=>[Ne]),_:1}),c(a,{value:"false"},{default:_(()=>[De]),_:1})]),_:1},8,["onChange","modelValue"])]),s("label",null,[Ve,c(x,{onChangeFilter:n.ChangeFilter},null,8,["onChangeFilter"])]),s("label",null,[Ae,c(h,{onChange:n.setFilter,modelValue:o.filterBy.sortBy,"onUpdate:modelValue":e[2]||(e[2]=v=>o.filterBy.sortBy=v),filterable:"",placeholder:"Select"},{default:_(()=>[c(a,{value:"time"},{default:_(()=>[Oe]),_:1}),c(a,{value:"name"},{default:_(()=>[qe]),_:1}),c(a,{value:"price"},{default:_(()=>[Me]),_:1})]),_:1},8,["onChange","modelValue"])])])}var ze=y(Ee,[["render",Pe]]);const Ge={name:"toy-app",data(){return{filterBy:null}},computed:{toys(){return this.$store.getters.getToys},isLoading(){return this.$store.getters.isLoading}},methods:{removeToy(t){this.$store.dispatch({type:"removeToy",toyId:t}).then(()=>{console.log("success")}).catch(()=>{console.log("Error")})},setFilter(t){this.$store.dispatch({type:"setFilter",filterBy:t}).then(()=>{console.log("success")}).catch(()=>{console.log("Error")})}},components:{toyList:ke,toyFilter:ze}},Re={key:0},Ue=l("Add New Toy");function Je(t,e,r,u,o,n){const i=d("toy-filter"),a=d("toy-list"),h=d("router-link");return p(),m("section",null,[c(i,{onFilter:n.setFilter},null,8,["onFilter"]),c(a,{toys:n.toys,onRemoveToy:n.removeToy},null,8,["toys","onRemoveToy"]),n.isLoading?(p(),m("p",Re,"Loading...")):I("",!0),c(h,{to:"/toy/edit/"},{default:_(()=>[Ue]),_:1})])}var He=y(Ge,[["render",Je]]);const T="//localhost:3030/api/toy/",g={query:We,getById:je,remove:Ke,save:Qe,getEmptyToy:Xe};function We(t){return b.get(T,{params:t}).then(e=>e.data)}function je(t){return b.get(T+t).then(e=>e.data)}function Ke(t){return b.delete(T+t)}function Qe(t){return t._id?b.put(T+t._id,t).then(e=>e.data):b.post(T,t).then(e=>e.data)}function Xe(){return{_id:"",name:"",price:0,labels:["Doll","Battery Powered","Baby"],createdAt:new Date,inStock:!0,reviews:["Good","Nice","Fun"]}}const Ze={data(){return{toyToEdit:{name:"",price:0,labels:""}}},computed:{toyId(){return this.$route.params.toyId},title(){return console.log(this.toyId),this.toyId?"Toy Edit":"Toy Add"}},methods:{save(){this.$store.dispatch({type:"saveToy",toy:this.toyToEdit}).then(t=>{}).catch(()=>{}),this.toyToEdit=g.getEmptyToy(),this.$router.push("/toy")}},created(){console.log("this.$route.params.toyId",this.$route.params.toyId),this.$route.params.toyId?g.getById(this.$route.params.toyId).then(t=>this.toyToEdit=t):this.toyToEdit=g.getEmptyToy()}},Ye={key:0,class:"toy-edit"},et=D('<datalist id="labels"><option value="On wheels"></option><option value="Box game"></option><option value="Art"></option><option value="Baby"></option><option value="Doll"></option><option value="Puzzle"></option><option value="Outdoor"></option></datalist><button>Save</button>',2),tt=l("Back");function ot(t,e,r,u,o,n){const i=d("router-link");return o.toyToEdit?(p(),m("section",Ye,[s("form",{onSubmit:e[4]||(e[4]=N((...a)=>n.save&&n.save(...a),["prevent"]))},[s("h2",null,f(n.title),1),C(s("input",{type:"text",placeholder:"name","onUpdate:modelValue":e[0]||(e[0]=a=>o.toyToEdit.name=a)},null,512),[[F,o.toyToEdit.name]]),C(s("input",{type:"number",placeholder:"price",min:"0","onUpdate:modelValue":e[1]||(e[1]=a=>o.toyToEdit.price=a)},null,512),[[F,o.toyToEdit.price]]),C(s("input",{list:"labels",onInput:e[2]||(e[2]=(...a)=>t.setFilter&&t.setFilter(...a)),"onUpdate:modelValue":e[3]||(e[3]=a=>o.toyToEdit.labels=a)},null,544),[[F,o.toyToEdit.labels]]),et],32),c(i,{to:"/toy/"},{default:_(()=>[tt]),_:1})])):I("",!0)}var nt=y(Ze,[["render",ot]]);const st={name:"toy-details",data(){return{toy:null}},created(){const t=this.$route.params.toyId;g.getById(t).then(e=>{this.toy=e})},methods:{goBack(){this.$router.push("/toy")}},computed:{formattedDate(){return new Date(this.toy.createdAt).toDateString()}}},rt={key:0},it=s("span",null,"Id:",-1),at=s("span",null,"Name:",-1),lt=s("span",null,"Price:",-1),ut=s("span",null,"Instock:",-1),ct=s("span",null,"Created:",-1),dt=s("span",null,"Type:",-1);function pt(t,e,r,u,o,n){return o.toy?(p(),m("section",rt,[s("article",null,[s("p",null,[it,l(" "+f(o.toy._id),1)]),s("p",null,[at,l(" "+f(o.toy.name),1)]),s("p",null,[lt,l(" "+f(o.toy.price),1)]),s("p",null,[ut,l(" "+f(o.toy.inStock),1)]),s("p",null,[ct,l(" "+f(n.formattedDate),1)]),s("p",null,[dt,l(" "+f(o.toy.labels),1)])]),s("button",{onClick:e[0]||(e[0]=(...i)=>n.goBack&&n.goBack(...i))},"go back")])):I("",!0)}var _t=y(st,[["render",pt]]);const mt=V({history:A(),linkActiveClass:"active",routes:[{path:"/",name:"home",component:ce},{path:"/about",name:"about",component:_e},{path:"/toy",name:"toy-app",component:He},{path:"/toy/edit/:toyId?",name:"toy-edit",component:nt},{path:"/toy/:toyId",name:"toy-details",component:_t}]});var yt={state:{toys:[],isLoading:!1,filterBy:null},getters:{isLoading(t){return t.isLoading},getToys(t){return t.toys}},mutations:{setToys(t,{toys:e}){t.toys=e},setIsLoading(t,{isLoading:e}){t.isLoading=e},removeToy(t,{toyId:e}){const r=t.toys.findIndex(u=>u._id===e);t.toys.splice(r,1)},saveToy(t,{toy:e}){const r=t.toys.findIndex(u=>u._id===e._id);r!==-1?t.toys.splice(r,1,e):t.toys.push(e)},setFilter(t,{filterBy:e}){t.filterBy=e}},actions:{loadToys({context:t,commit:e,state:r}){return e({type:"setIsLoading",isLoading:!0}),g.query(r.filterBy).then(u=>{e({type:"setToys",toys:u})}).catch(u=>{throw console.error("Cannot Load Toys",u),u}).finally(()=>{e({type:"setIsLoading",isLoading:!1})})},setFilter({commit:t,dispatch:e},{filterBy:r}){t({type:"setFilter",filterBy:r}),e({type:"loadToys"})},removeToy(t,e){return g.remove(e.toyId).then(()=>{t.commit(e)}).catch(r=>{throw console.error("Cannot remove toy",r),r})},saveToy({commit:t},{toy:e}){g.save(e).then(r=>{t({type:"saveToy",toy:r})})}}};const ht=O({strict:!0,state:{},getters:{},mutations:{},actions:{},modules:{toyStore:yt}});const B=q(ee);B.use(mt);B.use(ht);B.use(M,{load:{key:"AIzaSyDVaWRaXe4Fxq65Ws1-ZcA7fhz2ENG2L1g"}});B.use(P);B.mount("#app");
