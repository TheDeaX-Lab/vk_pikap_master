(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"43d504b8"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var l=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(u);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}a[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vk_pikap_master/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-card",[r("v-app-bar",[r("v-toolbar-title",[e._v("Тест людей")])],1)],1),r("v-content",[r("v-container",[r("MainComponent")],1)],1),r("v-btn",{attrs:{fixed:"",right:"",fab:"",bottom:""},on:{click:function(t){return e.$vuetify.goTo(0)}}},[r("v-icon",[e._v("mdi-chevron-up")])],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[-1==e.current_id?r("div",[r("v-card",[r("v-card-title",[e._v("А банан не хочешь?")])],1)],1):r("div",[r("v-card",{staticClass:"my-2"},[r("v-col",{attrs:{cols:"12"}},[r("v-btn",{attrs:{block:"",dark:"",color:"blue lighten-1"},on:{click:function(t){e.opened=!e.opened}}},[r("v-icon",[e._v("mdi-settings")]),e._v("Настройка поиска")],1)],1),e.opened?r("center",[r("v-divider"),r("v-card-subtitle",[e._v("Возраст от и до лет")]),r("v-slider",{attrs:{label:"От "+e.from_year+" лет","thumb-label":"",min:0,max:e.to_year,type:"number"},model:{value:e.from_year,callback:function(t){e.from_year=t},expression:"from_year"}}),r("v-slider",{attrs:{label:"До "+e.to_year+" лет","thumb-label":"",max:100,min:e.from_year,type:"number"},model:{value:e.to_year,callback:function(t){e.to_year=t},expression:"to_year"}}),r("v-divider"),r("v-card-subtitle",[e._v("Выбор местоположения")]),r("v-select",{attrs:{items:e.countrys,"item-text":"title","item-value":"id",label:"Выберите страну"},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}}),e.country?r("v-select",{attrs:{items:e.cities,"item-text":"title","item-value":"id",label:"Выберите город"},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}}):e._e(),r("v-divider"),r("v-card-subtitle",[e._v("Выбор пола")]),r("v-radio-group",{model:{value:e.sex,callback:function(t){e.sex=t},expression:"sex"}},[r("v-radio",{attrs:{value:0,label:"Любой"}}),r("v-radio",{attrs:{value:2,label:"Мужской"}}),r("v-radio",{attrs:{value:1,label:"Женский"}})],1)],1):e._e(),r("v-divider"),r("v-card-actions",[r("v-col",{attrs:{cols:"6"}},[r("v-btn",{attrs:{block:"",color:"error",loading:e.is_loading},on:{click:function(t){e.arr=[]}}},[r("v-icon",[e._v("mdi-notification-clear-all")])],1)],1),r("v-col",{attrs:{cols:"6"}},[r("v-btn",{attrs:{block:"",color:"success",loading:e.is_loading},on:{click:e.refreshArr}},[r("v-icon",[e._v("mdi-magnify")])],1)],1)],1)],1),r("v-card",{staticClass:"my-2",attrs:{color:e.filteredUsers.length>0?"success":"error"}},[r("v-card-title",[r("v-icon",[e._v(e._s(e.filteredUsers.length>0?"mdi-check":"mdi-information"))]),e._v("Результаты поиска")],1),0==e.filteredUsers.length?r("v-card-subtitle",[e._v("Походу никого нет...")]):e._e(),e.filteredUsers.length>0?r("div",[r("v-pagination",{attrs:{length:Math.ceil(e.filteredUsers.length/20),circle:""},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}}),e._l(e.filteredUsers.slice(20*(e.page-1),20*e.page),(function(t){return r("v-card",{key:t.id,staticClass:"my-4"},[r("center",[r("a",{attrs:{href:"https://vk.com/id"+t.id}},[r("v-img",{attrs:{src:t.photo_200,"max-width":"200",position:"center center"}})],1),r("v-card-text",{staticClass:"title"},[e._v(e._s(t.first_name)+" "+e._s(t.last_name))]),r("v-card-text",{staticClass:"subtitle-1 font-weight-black"},[e._v("Основные характеристики:")]),r("v-card-text",[e._v("Возраст "+e._s(e._f("getYears")(t.bdate,t.from_to_year))+" лет"),r("br"),e._v(" Была онлайн "+e._s(Math.ceil((Date.now()/1e3-t.last_seen.time)/60))+" минут назад")]),r("v-card-text",{staticClass:"subtitle-1 font-weight-black"},[e._v("Побочные характеристики:")]),r("v-card-text",{staticClass:"subtitle-2"},[e._v("Тест на Олега: "+e._s(t.oleg)+"% "),r("br"),e._v(" Уровень IQ: "+e._s(t.iq>50?"Умпалумпа":t.iq)+" "),r("br"),e._v(" Тест на наркотики: "+e._s(t.drugs>50?"Я не торч, просто сладко дунул":"Я полноценный торч")+" "),r("br"),e._v(" Сохранена девственность: "+e._s(t.sex_saved>85?"Да":"Нет")),r("br"),e._v(" Половых отношений пройдено: "+e._s(t.sex_completed)+" "+e._s(1==t.sex?"Парней":t.sex?"Девушек":"Инопланетян")),r("br"),e._v(" "+e._s(1==t.sex?"Глубина":2==t.sex?"Размер":"Пустота")+" "+e._s([1,2].indexOf(t.sex)>-1?t.size/10:0)+" см"),r("br"),e._v(" Тест на кавказца: "+e._s(t.kavkaz>30?"Отвечаю Вася!":0)),r("br"),e._v(" Тест на анимешника: "+e._s(t.anime>50?"Omae Wa Mou Shindeiru":"Ну что пацаны? Аниме?"))])],1)],1)})),r("v-pagination",{attrs:{length:Math.ceil(e.filteredUsers.length/20),circle:""},on:{input:function(t){return e.$vuetify.goTo(0)}},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],2):e._e()],1)],1)])},s=[],c=(r("a4d3"),r("e01a"),r("d28b"),r("99af"),r("4de4"),r("4160"),r("d81d"),r("4e827"),r("0d03"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("6062"),r("3ca3"),r("1276"),r("159b"),r("ddb0"),r("2fa7")),l=r("284c"),u=r("c45e"),d=r.n(u);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(r,!0).forEach((function(t){Object(c["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Array.prototype.sample=function(){return this[Math.floor(Math.random()*this.length)]};var m=7167255,v="5.102",h={name:"app",data:function(){return{arr:[],token:"",session:"",from_year:14,to_year:18,sex:1,is_loading:!1,countrys:[],cities:[],regions:[],country:null,city:null,region:null,page:1,opened:!1,current_id:0}},watch:{country:function(e){var t=this;this.cities=[],this.regions=[],d.a.sendPromise("VKWebAppCallAPIMethod",{method:"database.getCities",params:{access_token:this.token,v:v,country_id:e,count:0}}).then((function(r){for(var n=0;n<r.response.count;n+=1e3)d.a.sendPromise("VKWebAppCallAPIMethod",{method:"database.getCities",params:{access_token:t.token,v:v,country_id:e,count:1e3,offset:n}}).then((function(e){var r;(r=t.cities).push.apply(r,Object(l["a"])(e.response.items)),t.cities=t.cities.sort(t.compareObj)}))})),d.a.sendPromise("VKWebAppCallAPIMethod",{method:"database.getRegions",params:{access_token:this.token,v:v,country_id:e,count:0}}).then((function(r){for(var n=0;n<r.response.count;n+=1e3)d.a.sendPromise("VKWebAppCallAPIMethod",{method:"database.getRegions",params:{access_token:t.token,v:v,country_id:e,count:1e3,offset:n}}).then((function(e){var r;(r=t.regions).push.apply(r,Object(l["a"])(e.response.items)),t.regions=t.regions.sort(t.compareObj)}))}))},region:function(e){var t=this;this.cities=[],d.a.sendPromise("VKWebAppCallAPIMethod",{method:"database.getCities",params:{access_token:this.token,v:v,country_id:this.country,region_id:e,count:0}}).then((function(r){for(var n=0;n<r.response.count;n+=1e3)d.a.sendPromise("VKWebAppCallAPIMethod",{method:"database.getCities",params:{access_token:t.token,v:v,country_id:t.country,region_id:e,count:1e3,offset:n}}).then((function(e){var r;(r=t.cities).push.apply(r,Object(l["a"])(e.response.items)),t.cities=t.cities.sort(t.compareObj)}))}))}},methods:{apiMethod:function(e,t){var r=this;return d.a.sendPromise("VKWebAppCallAPIMethod",{method:e,params:t}).catch((function(){return r.apiMethod(e,t)}))},addToBlack:function(e){d.a.sendPromise("VKWebAppCallAPIMethod",{method:"account.ban",params:{v:v,access_token:this.token,owner_id:e}}),this.arr=this.arr.filter((function(t){return t.id!=e}))},compareObj:function(e,t){return e.title>t.title?1:e.title<t.title?-1:0},addToFriends:function(e){d.a.sendPromise("VKWebAppCallAPIMethod",{method:"friends.add",params:{v:v,access_token:this.token,user_id:e,text:this.texts.sample()}}),this.arr=this.arr.filter((function(t){return t.id!=e}))},refreshArr:function(){var e=this;this.is_loading=!0,this.arr=[];for(var t={fields:"last_seen,can_write_private_message,can_send_friend_request,blacklisted_by_me,blacklisted,photo_200,bdate,sex",sex:this.sex,status:6,has_photo:1,country:this.country,city:this.city,count:1e3,v:v},r=[],n=function(n){r.push(e.apiMethod("users.search",f({},t,{access_token:e.token,age_from:n,age_to:n+1})).then((function(t){var r;return(r=e.arr).push.apply(r,Object(l["a"])(t.response.items.map((function(t){return t.from_to_year=[n,n+1],t.oleg=e.RandomFromTo(0,100),t.drugs=e.RandomFromTo(0,100),t.sex_completed=e.RandomFromTo(0,50),t.sex_saved=e.RandomFromTo(0,100),t.iq=e.RandomFromTo(0,100),t.size=e.RandomFromTo(0,500),t.kavkaz=e.RandomFromTo(0,50),t.anime=e.RandomFromTo(0,100),t}))))})))},a=this.from_year;a<this.to_year;a++)n(a);Promise.all(r).then((function(t){e.is_loading=!1}))},RandomFromTo:function(e,t){return Math.ceil(Math.random()*(t-e)+e)}},computed:{filteredUsers:function(){var e=[],t=new Set,r=!0,n=!1,a=void 0;try{for(var o,i=this.arr[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var s=o.value;t.has(s.id)||(t.add(s.id),e.push(f({},s)))}}catch(c){n=!0,a=c}finally{try{r||null==i.return||i.return()}finally{if(n)throw a}}return e.filter((function(e){try{return!e.blacklisted_by_me&&!e.blacklisted&&e.can_send_friend_request&&e.can_write_private_message&&Date.now()/1e3-e.last_seen.time<86400&&!e.is_closed}catch(t){return!1}}))}},filters:{getYears:function(e,t){if(e){var r=e.split(".");if(3==r.length){var n=Date.now()-new Date(r[2],r[1],r[0]).getTime(),a=new Date(n);return Math.abs(a.getUTCFullYear()-1970)}}return"приблизительно от ".concat(t[0]," до ").concat(t[1])}},components:{},mounted:function(){var e=this;this.$vuetify.theme.dark=!0,d.a.sendPromise("VKWebAppGetAuthToken",{app_id:m,scope:"friends"}).then((function(e){return e.access_token})).then((function(t){return e.token=t,d.a.sendPromise("VKWebAppGetUserInfo",{}).then((function(t){t.country&&(e.country=t.country.id),t.city&&(e.city=t.city.id),e.current_id=t.id})),d.a.sendPromise("VKWebAppCallAPIMethod",{method:"database.getCountries",params:{access_token:t,v:v,count:1e3}})})).then((function(t){return e.countrys=t.response.items}))}},b=h,_=r("2877"),y=r("6544"),g=r.n(y),k=r("8336"),x=r("b0af"),P=r("99d9"),C=r("62ad"),O=r("ce7e"),w=r("132d"),V=r("adda"),A=r("891e"),j=r("67b6"),M=r("43a6"),T=r("b974"),F=r("ba0d"),I=Object(_["a"])(b,i,s,!1,null,null,null),W=I.exports;g()(I,{VBtn:k["a"],VCard:x["a"],VCardActions:P["a"],VCardSubtitle:P["b"],VCardText:P["c"],VCardTitle:P["d"],VCol:C["a"],VDivider:O["a"],VIcon:w["a"],VImg:V["a"],VPagination:A["a"],VRadio:j["a"],VRadioGroup:M["a"],VSelect:T["a"],VSlider:F["a"]});var S={name:"App",components:{MainComponent:W},data:function(){return{}}},K=S,R=r("7496"),D=r("40dc"),U=r("a523"),E=r("a75b"),$=r("2a7f"),q=Object(_["a"])(K,a,o,!1,null,null,null),B=q.exports;g()(q,{VApp:R["a"],VAppBar:D["a"],VBtn:k["a"],VCard:x["a"],VContainer:U["a"],VContent:E["a"],VIcon:w["a"],VToolbarTitle:$["a"]});var z=r("8c4f"),Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},G=[],J={name:"home",components:{MainComponent:W}},L=J,H=Object(_["a"])(L,Y,G,!1,null,null,null),Q=H.exports;n["a"].use(z["a"]);var N=[{path:"/",name:"home",component:Q},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],X=new z["a"]({routes:N}),Z=X,ee=r("2f62");n["a"].use(ee["a"]);var te=new ee["a"].Store({state:{},mutations:{},actions:{},modules:{}}),re=r("f309"),ne=r("2992"),ae=r.n(ne);n["a"].use(re["a"]);var oe=new re["a"]({theme:{options:{},themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{ru:ae.a},current:"ru"},icons:{iconfont:"mdi"}});d.a.send("VKWebAppInit",{}),n["a"].config.productionTip=!1,new n["a"]({router:Z,store:te,vuetify:oe,render:function(e){return e(B)}}).$mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.e8f27152.js.map