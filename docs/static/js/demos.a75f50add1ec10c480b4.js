webpackJsonp([0],{"/+jI":function(t,e){},"/eoM":function(t,e){},"12wb":function(t,e){},"35b2":function(t,e){},"36mz":function(t,e){},"4vpY":function(t,e){},"7zTF":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"palette-demo palette-demo-action-bar cleafix"},[e("md-action-bar",{attrs:{actions:this.data}},[this._v("\n    ¥128.00\n  ")])],1)},staticRenderFns:[]};var l=a("VU/8")({data:function(){return{data:[{text:"Normal"},{text:"Disabled",disabled:!0},{text:"Highlight"}]}}},i,!1,function(t){a("12wb")},null,null).exports,n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"palette-demo palette-demo-action-sheet cleafix"},[a("md-button",{on:{click:function(e){t.value=!0}}},[t._v("Show ActionSheet")]),t._v(" "),a("md-action-sheet",{attrs:{title:t.title,"default-index":t.defaultIndex,"invalid-index":t.invalidIndex,"cancel-text":t.cancelText,options:t.options,"max-height":600},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},staticRenderFns:[]};var s=a("VU/8")({data:function(){return{value:!1,title:"ActionSheet Title",options:[{label:"Normal Item",value:0},{label:"HightLight Item",value:1},{label:"Disabled Item",value:2}],defaultIndex:1,invalidIndex:2,cancelText:"Cancel"}},mounted:function(){this.value=!0}},n,!1,function(t){a("ubMR")},null,null).exports,o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"palette-demo palette-demo-agree cleafix"},[a("div",{staticClass:"palette-demo-block"},[a("md-agree",{model:{value:t.checked0,callback:function(e){t.checked0=e},expression:"checked0"}},[t._v("\n      本人承诺投保人已充分了解本保险产品，并保证投保信息的真实性，理解并同意\n    ")])],1),t._v(" "),a("div",{staticClass:"palette-demo-block"},[a("md-agree",{attrs:{disabled:""},model:{value:t.checked1,callback:function(e){t.checked1=e},expression:"checked1"}},[t._v("\n      本人承诺投保人已充分了解本保险产品，并保证投保信息的真实性，理解并同意\n    ")])],1)])},staticRenderFns:[]};var c=a("VU/8")({data:function(){return{checked0:!0,checked1:!0}}},o,!1,function(t){a("4vpY")},null,null).exports,r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"palette-demo palette-demo-button cleafix"},[a("div",{staticClass:"palette-demo-block"},[a("md-button",[t._v("Primary")]),t._v(" "),a("md-button",{attrs:{disabled:""}},[t._v("Primary Disabled")])],1),t._v(" "),a("div",{staticClass:"palette-demo-block"},[a("md-button",{attrs:{type:"ghost"}},[t._v("Ghost")]),t._v(" "),a("md-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"ghost",disabled:""}},[t._v("Ghost")])],1),t._v(" "),a("div",{staticClass:"palette-demo-block"},[a("md-button",{attrs:{type:"ghost",size:"small"}},[t._v("Ghost-S")]),t._v(" "),a("md-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"ghost",size:"small",disabled:""}},[t._v("Ghost-S")])],1),t._v(" "),a("div",{staticClass:"palette-demo-block"},[a("md-button",{attrs:{type:"ghost-primary"}},[t._v("Ghost-P")]),t._v(" "),a("md-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"ghost-primary",disabled:""}},[t._v("Ghost-P")])],1),t._v(" "),a("div",{staticClass:"palette-demo-block"},[a("md-button",{attrs:{type:"ghost-primary",size:"small"}},[t._v("Ghost-P-S")]),t._v(" "),a("md-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"ghost-primary",size:"small",disabled:""}},[t._v("Ghost-P-S")])],1),t._v(" "),a("div",{staticClass:"palette-demo-block"},[a("md-button",{attrs:{type:"link"}},[t._v("Read More")]),t._v(" "),a("md-button",{attrs:{type:"link",icon:"hollow-plus"}},[t._v("Add to Favorites")]),t._v(" "),a("md-button",{attrs:{type:"link",disabled:""}},[t._v("Comment")])],1)])},staticRenderFns:[]};var d=a("VU/8")(null,r,!1,function(t){a("GV1n")},null,null).exports,u={data:function(){return{value:!1,container:document.querySelector(".palette-edit-preview-box")}},mounted:function(){this.value=!0,this.$refs.captcha.setError("Error Message")}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"palette-demo palette-demo-captcha cleafix"},[a("md-button",{on:{click:function(e){t.value=!0}}},[t._v("Show Captcha")]),t._v(" "),a("md-captcha",{ref:"captcha",attrs:{title:"Enter confirmation code",countNormalText:"send verification code",countActiveText:"Reissued after {$1} seconds",appendTo:t.container,mask:"",system:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[t._v("\n    verification code has been sent to 186****5407\n  ")])],1)},staticRenderFns:[]};var v=a("VU/8")(u,m,!1,function(t){a("k7RX")},null,null).exports,p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"palette-demo palette-demo-cashier cleafix"},[a("md-button",{on:{click:function(e){t.value=!0}}},[t._v("Show Cashier")]),t._v(" "),a("md-cashier",{ref:"cashier",attrs:{channels:t.cashierChannels,title:"Cashier","payment-title":"Payment Amount","payment-amount":"100.00","payment-describe":"Special explanation about payment amount","pay-button-text":"Confirm Payment","more-button-text":"more payment channels"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},staticRenderFns:[]};var f=a("VU/8")({data:function(){return{value:!1,cashierChannels:[{icon:"cashier-icon-1",text:"招商银行储蓄卡(0056)支付",value:"001"},{icon:"cashier-icon-2",text:"支付宝支付",value:"002"},{icon:"cashier-icon-3",text:"微信支付",value:"003"},{icon:"cashier-icon-4",text:"QQ钱包支付",value:"004"},{icon:"cashier-icon-5",text:"一网通支付",value:"005"}]}},mounted:function(){this.value=!0}},p,!1,function(t){a("H8RA")},null,null).exports,h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"palette-demo palette-demo-chart cleafix"},[e("div",{staticClass:"palette-demo-block cleafix"},[e("md-chart",{attrs:{size:["680px","380px"],max:60,min:0,step:10,lines:5,format:this.format,labels:["Mon","Tues","Wed","Tuer","Fri","Sat","Sun"],datasets:[{width:4,values:[8,15,20,23,20,30,32,38,36,40,50,55,52]},{color:"#048efa",width:4,values:[10,20,25,30,28,35,38,42,40,40,45,42,45]}]}})],1)])},staticRenderFns:[]};var _=a("VU/8")({data:function(){return{}},methods:{format:function(t){return t+"%"}}},h,!1,function(t){a("s9NJ")},null,null).exports,b=a("bOdI"),x=a.n(b),g=a("17/p"),k={components:x()({},g.a.name,g.a),data:function(){return{selected:[],options:[{value:"1",label:"自己"},{value:"2",label:"配偶"},{value:"3",label:"父母"},{value:"4",label:"子女",disabled:!0}]}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"palette-demo palette-demo-check-box cleafix"},[a("md-check-box",{attrs:{options:t.options,max:2,cols:4},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)},staticRenderFns:[]},y=a("VU/8")(k,C,!1,null,null,null).exports,w={name:"checkbox-demo",title:"复选框",components:x()({},g.b.name,g.b),data:function(){return{checked:"1",options:[{value:"1",label:"选项一",disabled:!1},{value:"2",label:"选项二",disabled:!1},{value:"3",label:"选项三",disabled:!1},{value:"4",label:"选项四",disabled:!0},{value:"5",label:"选项五",disabled:!1},{value:"6",label:"选项六",disabled:!1}]}}},E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"palette-demo palette-demo-check-list cleafix"},[a("md-check-list",{attrs:{options:t.options},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)},staticRenderFns:[]},F=a("VU/8")(w,E,!1,null,null,null).exports,V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"palette-demo palette-demo-codebox cleafix"},[e("div",{staticClass:"palette-demo-block cleafix"},[e("md-codebox",{attrs:{system:"",autofocus:""}})],1),this._v(" "),e("div",{staticClass:"palette-demo-block cleafix"},[e("md-codebox",{attrs:{system:"",mask:""}})],1),this._v(" "),e("div",{staticClass:"palette-demo-block cleafix"},[e("md-codebox",{attrs:{maxlength:-1,system:""}})],1)])},staticRenderFns:[]};var T=a("VU/8")({},V,!1,function(t){a("DZPl")},null,null).exports,R={data:function(){return{currentDate:new Date}}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"palette-demo palette-demo-date-picker cleafix"},[e("div",{staticClass:"palette-demo-block"},[e("md-date-picker",{attrs:{"today-text":"Today","default-date":this.currentDate,"unit-text":["","",""],"is-view":""}})],1),this._v(" "),e("div",{staticClass:"palette-demo-block"},[e("md-date-picker",{attrs:{type:"datetime","default-date":this.currentDate,"unit-text":["","","","H","M"],"half-day-text":["AM","PM"],"is-twelve-hours":"","is-view":""}})],1)])},staticRenderFns:[]};var z=a("VU/8")(R,U,!1,function(t){a("ylfU")},null,null).exports,S={data:function(){return{dialog0:!1,dialog1:!1,container:document.querySelector(".palette-edit-preview-box")}},mounted:function(){this.dialog1=!0}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"palette-demo palette-demo-dialog cleafix"},[a("div",{staticClass:"palette-demo-block"},[a("md-button",{on:{click:function(e){t.dialog0=!0}}},[t._v("Show Basic Dialog")]),t._v(" "),a("md-dialog",{attrs:{title:"Basic Dialog",closable:!0,appendTo:t.container,btns:[{text:"Cancel"},{text:"Confirm"}]},model:{value:t.dialog0,callback:function(e){t.dialog0=e},expression:"dialog0"}},[t._v("\n      The thorns of life are here, and those who are reluctant to go brisk are partial things that you don't care about.\n    ")])],1),t._v(" "),a("div",{staticClass:"palette-demo-block"},[a("md-button",{on:{click:function(e){t.dialog1=!0}}},[t._v("Show Dialog With Icon")]),t._v(" "),a("md-dialog",{attrs:{title:"Dialog With Icon",icon:"circle-right",closable:!0,appendTo:t.container,btns:[{text:"Cancel"},{text:"Confirm"}]},model:{value:t.dialog1,callback:function(e){t.dialog1=e},expression:"dialog1"}},[t._v("\n      People in the city want to escape. People outside the city want to rush in. This is true for marriage, career, and life.\n    ")])],1)])},staticRenderFns:[]};var I=a("VU/8")(S,$,!1,function(t){a("c8Iw")},null,null).exports,P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"palette-demo palette-demo-drop-menu cleafix"},[e("md-drop-menu",{attrs:{data:this.data,"default-value":["1.8L","自动挡"]}})],1)},staticRenderFns:[]};var D=a("VU/8")({data:function(){return{isContentShow:!1,data:[{text:"排量",options:[{text:"1.6L"},{text:"1.8L"},{text:"2.0L",disabled:!0},{text:"1.2T"},{text:"1.4T"},{text:"1.6T"}]},{text:"变速箱",disabled:!0}]}}},P,!1,function(t){a("/eoM")},null,null).exports,M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"palette-demo palette-demo-field cleafix"},[e("md-field",{attrs:{title:"Field Title"}},[e("md-field-item",{attrs:{name:"item0",title:"normal item",arrow:"arrow-right",value:"item content",align:"right",solid:""}}),this._v(" "),e("md-field-item",{attrs:{name:"item1",title:"disabled item",arrow:"arrow-right",value:"item content",align:"right",disabled:""}}),this._v(" "),e("md-field-item",{attrs:{name:"item2",title:"item with description",brief:"this is item description",arrow:"arrow-right"}})],1)],1)},staticRenderFns:[]};var A=a("VU/8")(null,M,!1,function(t){a("8gZk")},null,null).exports,G={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"palette-demo palette-demo-icon cleafix"},[a("div",{staticClass:"palette-demo-block"},[a("div",{staticClass:"icon-list"},[a("md-icon",{attrs:{name:"circle-right",size:"xs"}}),t._v(" "),a("md-icon",{attrs:{name:"circle-cross",size:"xs"}}),t._v(" "),a("md-icon",{attrs:{name:"circle-alert",size:"xs"}})],1),t._v(" "),a("p",[t._v("xs")])]),t._v(" "),a("div",{staticClass:"palette-demo-block"},[a("div",{staticClass:"icon-list"},[a("md-icon",{attrs:{name:"circle-right",size:"sm"}}),t._v(" "),a("md-icon",{attrs:{name:"circle-cross",size:"sm"}}),t._v(" "),a("md-icon",{attrs:{name:"circle-alert",size:"sm"}})],1),t._v(" "),a("p",[t._v("sm")])]),t._v(" "),a("div",{staticClass:"palette-demo-block"},[a("div",{staticClass:"icon-list"},[a("md-icon",{attrs:{name:"circle-right",size:"md"}}),t._v(" "),a("md-icon",{attrs:{name:"circle-cross",size:"md"}}),t._v(" "),a("md-icon",{attrs:{name:"circle-alert",size:"md"}})],1),t._v(" "),a("p",[t._v("md")])]),t._v(" "),a("div",{staticClass:"palette-demo-block"},[a("div",{staticClass:"icon-list"},[a("md-icon",{attrs:{name:"circle-right",size:"lg"}}),t._v(" "),a("md-icon",{attrs:{name:"circle-cross",size:"lg"}}),t._v(" "),a("md-icon",{attrs:{name:"circle-alert",size:"lg"}})],1),t._v(" "),a("p",[t._v("lg")])])])},staticRenderFns:[]};var O=a("VU/8")(null,G,!1,function(t){a("j9Vq")},null,null).exports,L={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"palette-demo palette-demo-image-viewer cleafix"},[a("ul",[t._l(t.imgs,function(e,i){return[a("li",{key:i,on:{click:function(e){return t.showViewer(i,e)}}},[a("div",{staticClass:"img",style:"background: url("+e+") center no-repeat;background-size:cover;"})])]})],2),t._v(" "),a("md-image-viewer",{attrs:{list:t.imgs,"has-dots":!0,"initial-index":t.viewerIndex},model:{value:t.isViewerShow,callback:function(e){t.isViewerShow=e},expression:"isViewerShow"}})],1)},staticRenderFns:[]};var N=a("VU/8")({data:function(){return{isViewerShow:!1,viewerIndex:0,imgs:["http://img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/27fb7f097ca218d743f816836bc7ea4a","http://manhattan.didistatic.com/static/manhattan/insurancePlatform_spu/uploads/c2912793a222eb24b606a582fd849ab7","http://img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/6ee5a0ba9340ca452cbc827902e76be0","http://img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/d751dd4487e265de3b8587f504eee2c3"]}},mounted:function(){this.showViewer(0)},methods:{showViewer:function(t){this.viewerIndex=t,this.isViewerShow=!0}}},L,!1,function(t){a("Fno5")},null,null).exports,H={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"palette-demo palette-demo-input-item cleafix"},[e("md-field",[e("md-input-item",{attrs:{title:"Normal",placeholder:"Normal Input",value:"Content",clearable:""}}),this._v(" "),e("md-input-item",{attrs:{title:"Disabled",value:"Disabled Input",disabled:""}}),this._v(" "),e("md-input-item",{attrs:{title:"Highlight",placeholder:"Highlight Input","is-highlight":""}}),this._v(" "),e("md-input-item",{attrs:{title:"Large",placeholder:"Large Input",size:"large"}}),this._v(" "),e("md-input-item",{attrs:{title:"Floating Title",placeholder:"Floating Title Input","is-title-latent":"",clearable:""}}),this._v(" "),e("md-input-item",{attrs:{title:"Error",placeholder:"Input With Error Message",error:"this is error message",value:"1234",clearable:""}})],1)],1)},staticRenderFns:[]};var J=a("VU/8")(null,H,!1,function(t){a("m+ro")},null,null).exports,W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"palette-demo palette-demo-notice-bar cleafix"},[e("md-notice-bar",[this._v("为了确保您的资金安全，请设置支付密码")])],1)},staticRenderFns:[]};var q=a("VU/8")({data:function(){return{value:!1}},mounted:function(){this.value=!0}},W,!1,function(t){a("MKTX")},null,null).exports,Z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"palette-demo palette-demo-number-keyboard cleafix"},[a("md-button",{on:{click:function(e){t.value=!0}}},[t._v("Show Keyboard")]),t._v(" "),a("md-button",{on:{click:function(e){t.type=t.inverseType}}},[t._v('Switch To "'+t._s(t.inverseType)+'" Type')]),t._v(" "),a("md-number-keyboard",{attrs:{type:t.type},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},staticRenderFns:[]};var j=a("VU/8")({data:function(){return{value:!1,type:"professional"}},computed:{inverseType:function(){return"professional"===this.type?"simple":"professional"}},mounted:function(){this.value=!0}},Z,!1,function(t){a("W8Z5")},null,null).exports,B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"palette-demo palette-demo-picker cleafix"},[e("div",{staticClass:"palette-demo-block"},[e("md-picker",{ref:"picker",attrs:{data:this.data,"invalid-index":[2],"is-view":""}})],1)])},staticRenderFns:[]};var X=a("VU/8")({data:function(){return{data:[[{text:"Item 1"},{text:"Item 2"},{text:"Item 3"},{text:"Item 4"}]]}}},B,!1,function(t){a("oiy3")},null,null).exports,Y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"palette-demo palette-demo-popup cleafix"},[a("md-button",{on:{click:function(e){t.value=!0}}},[t._v("Show Popup")]),t._v(" "),a("md-popup",{attrs:{position:"bottom"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("md-popup-title-bar",{attrs:{title:"Popup Title","ok-text":"Confirm","cancel-text":"Cancel"},on:{confirm:function(e){t.value=!1},cancel:function(e){t.value=!1}}}),t._v(" "),a("div",{staticClass:"popup-content"},[t._v("\n      Popup Content\n    ")])],1)],1)},staticRenderFns:[]};var K=a("VU/8")({data:function(){return{value:!1}},mounted:function(){this.value=!0}},Y,!1,function(t){a("/+jI")},null,null).exports,Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"palette-demo palette-demo-selector cleafix"},[e("md-radio",{ref:"radio",attrs:{options:this.data,"default-index":1}})],1)},staticRenderFns:[]};var tt=a("VU/8")({data:function(){return{value:!1,data:[{text:"Option 1",disabled:!0},{text:"Option 2"},{text:"Option 3"},{text:"Option 4"}]}},mounted:function(){this.value=!0}},Q,!1,function(t){a("NDaE")},null,null).exports,et={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"palette-demo palette-demo-selector cleafix"},[a("md-button",{on:{click:function(e){t.value=!0}}},[t._v("Show Selector")]),t._v(" "),a("md-selector",{attrs:{data:t.data,"invalid-index":2,title:"Title",okText:"Confirm",cancelText:"Cancel","is-check":""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},staticRenderFns:[]};var at=a("VU/8")({data:function(){return{value:!1,data:[{text:"Option 1"},{text:"Option 2"},{text:"Option 3"},{text:"Option 4"}]}},mounted:function(){this.value=!0}},et,!1,function(t){a("36mz")},null,null).exports,it={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"palette-demo palette-demo-stepper cleafix"},[e("div",{staticClass:"palette-demo-block"},[e("md-stepper")],1),this._v(" "),e("div",{staticClass:"palette-demo-block"},[e("md-stepper",{attrs:{disabled:""}})],1)])},staticRenderFns:[]};var lt=a("VU/8")(null,it,!1,function(t){a("fUYm")},null,null).exports,nt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"palette-demo palette-demo-steps cleafix"},[e("md-steps",{attrs:{steps:this.steps,current:1}})],1)},staticRenderFns:[]};var st=a("VU/8")({data:function(){return{steps:[{name:"开通理财账户"},{name:"验证手机号"},{name:"开通成功"}]}}},nt,!1,function(t){a("wIJo")},null,null).exports,ot={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"palette-demo palette-demo-switch cleafix"},[e("div",{staticClass:"palette-demo-block"},[e("md-switch",{attrs:{value:""}})],1),this._v(" "),e("div",{staticClass:"palette-demo-block"},[e("md-switch",{attrs:{value:!1}})],1),this._v(" "),e("div",{staticClass:"palette-demo-block"},[e("md-switch",{attrs:{value:!0,disabled:""}})],1)])},staticRenderFns:[]};var ct=a("VU/8")(null,ot,!1,function(t){a("c8m8")},null,null).exports,rt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"palette-demo palette-demo-tabs cleafix"},[a("md-tabs",{attrs:{titles:t.titles}},t._l(t.titles,function(e,i){return a("div",{key:i,staticClass:"tabs-content"},[t._v("\n      "+t._s(e)+"的内容\n    ")])}),0)],1)},staticRenderFns:[]};var dt=a("VU/8")({data:function(){return{titles:["第一","第二","第三","第四"]}}},rt,!1,function(t){a("uylJ")},null,null).exports,ut={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"palette-demo palette-demo-tag cleafix"},[a("div",{staticClass:"palette-demo-block"},[a("md-tag",{attrs:{size:"tiny",shape:"circle",type:"fill"}},[t._v("2")]),t._v(" "),a("md-tag",{attrs:{size:"small",shape:"circle",type:"fill"}},[t._v("特惠")]),t._v(" "),a("md-tag",{attrs:{size:"large",shape:"circle",type:"fill"}},[t._v("返5000")]),t._v(" "),a("md-tag",{attrs:{size:"small",shape:"circle",type:"ghost"}},[t._v("特惠")])],1),t._v(" "),a("div",{staticClass:"palette-demo-block"},[a("md-tag",{attrs:{size:"large",shape:"fillet",type:"fill","fill-color":"#FC9153","font-weight":"normal","font-color":"#fff"}},[t._v("字")]),t._v(" "),a("md-tag",{attrs:{size:"large",shape:"fillet",type:"fill","fill-color":"#50A050","font-weight":"bold","font-color":"#fff"}},[t._v("字")]),t._v(" "),a("md-tag",{attrs:{size:"large",shape:"fillet",type:"fill","fill-color":"#91C6EF","font-weight":"bolder","font-color":"#fff"}},[t._v("字")])],1),t._v(" "),a("div",{staticClass:"palette-demo-block"},[a("md-tag",{attrs:{size:"large",shape:"square","font-color":"#3CA0E6",type:"ghost"}},[t._v("运营车")]),t._v(" "),a("md-tag",{attrs:{size:"small",shape:"square","font-color":"#3CA0E6",type:"ghost"}},[t._v("运营车")])],1)])},staticRenderFns:[]};var mt=a("VU/8")(null,ut,!1,function(t){a("FxLv")},null,null).exports,vt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"palette-demo palette-demo-tip cleafix"},[e("div",{staticClass:"palette-demo-block"},[e("div",{staticClass:"md-tip"},[this._v("\n      Tip Text\n      "),e("md-icon",{attrs:{name:"cross",size:"md"}})],1)]),this._v(" "),e("div",{staticClass:"palette-demo-block"},[e("div",{staticClass:"md-tip is-left"},[this._v("\n      Tip Text\n      "),e("md-icon",{attrs:{name:"cross",size:"md"}})],1)]),this._v(" "),e("div",{staticClass:"palette-demo-block"},[e("div",{staticClass:"md-tip is-right"},[this._v("\n      Tip Text\n      "),e("md-icon",{attrs:{name:"cross",size:"md"}})],1)]),this._v(" "),e("div",{staticClass:"palette-demo-block"},[e("div",{staticClass:"md-tip is-bottom"},[this._v("\n      Tip Text\n      "),e("md-icon",{attrs:{name:"cross",size:"md"}})],1)])])},staticRenderFns:[]};var pt=a("VU/8")(null,vt,!1,function(t){a("wIMU")},null,null).exports,ft={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"palette-demo palette-demo-toast cleafix"},[this._m(0),this._v(" "),e("div",{staticClass:"palette-demo-block"},[e("div",{staticClass:"md-toast has-icon"},[e("div",{staticClass:"md-toast-content"},[e("md-icon",{attrs:{name:"circle-alert",size:"lg"}}),this._v(" "),e("span",[this._v("Toast With Icon")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"palette-demo-block"},[e("div",{staticClass:"md-toast"},[e("div",{staticClass:"md-toast-content"},[e("span",[this._v("Toast Text")])])])])}]};var ht=a("VU/8")(null,ft,!1,function(t){a("d/rU")},null,null).exports,_t={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"palette-demo palette-demo-all cleafix"},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("md-tab-bar",{attrs:{titles:t.titles}}),t._v(" "),a("md-field",{staticClass:"block",attrs:{title:"投保人"}},[a("md-input-item",{attrs:{title:"投保人姓名",placeholder:"请填写投保人姓名","is-highlight":""}}),t._v(" "),a("md-input-item",{attrs:{title:"身份证号",placeholder:"请填写投保人身份证号"}})],1),t._v(" "),a("md-field",{staticClass:"block",attrs:{title:"被保人"}},[a("md-input-item",{attrs:{title:"被保人姓名",placeholder:"请填写被保人姓名","is-highlight":""}}),t._v(" "),a("md-field-item",{attrs:{title:"与投保人关系",arrow:"arrow-right",value:t.relation,solid:""},on:{click:function(e){t.isPickerShow=!0}}}),t._v(" "),a("md-picker",{attrs:{data:t.pickerData,title:"选择与投保人关系"},model:{value:t.isPickerShow,callback:function(e){t.isPickerShow=e},expression:"isPickerShow"}}),t._v(" "),a("md-input-item",{attrs:{title:"身份证号",placeholder:"请填写被保人身份证号"}}),t._v(" "),a("md-input-item",{attrs:{title:"手机号",type:"phone",placeholder:"请填写被保人手机号"}})],1),t._v(" "),a("md-agree",{model:{value:t.isAgreeChecked,callback:function(e){t.isAgreeChecked=e},expression:"isAgreeChecked"}},[t._v("\n      本人承诺投保人已充分了解本保险产品，并保证投保信息的真实性，理解并同意\n    ")])],1),t._v(" "),a("md-action-bar",{attrs:{actions:t.actionBarData}},[t._v("\n    ¥128.00\n  ")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("img",{attrs:{src:"//img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/27fb7f097ca218d743f816836bc7ea4a",alt:""}})])}]};var bt=a("VU/8")({data:function(){return{relation:"本人",isAgreeChecked:!0,isPickerShow:!1,titles:["5万","10万","20万"],actionBarData:[{text:"我要投保"}],pickerData:[[{text:"本人"},{text:"父母"},{text:"配偶"},{text:"子女"}]]}}},_t,!1,function(t){a("35b2")},null,null).exports;e.default={"action-bar":l,"action-sheet":s,agree:c,button:d,captcha:v,cashier:f,chart:_,"check-box":y,"check-list":F,codebox:T,"date-picker":z,dialog:I,"drop-menu":D,field:A,icon:O,"image-viewer":N,"input-item":J,"notice-bar":q,"number-keyboard":j,picker:X,popup:K,radio:tt,selector:at,stepper:lt,steps:st,switch:ct,"tab-bar":dt,tag:mt,tip:pt,toast:ht,color:bt,font:bt,other:bt}},"8gZk":function(t,e){},DZPl:function(t,e){},Fno5:function(t,e){},FxLv:function(t,e){},GV1n:function(t,e){},H8RA:function(t,e){},MKTX:function(t,e){},NDaE:function(t,e){},W8Z5:function(t,e){},c8Iw:function(t,e){},c8m8:function(t,e){},"d/rU":function(t,e){},fUYm:function(t,e){},j9Vq:function(t,e){},k7RX:function(t,e){},"m+ro":function(t,e){},oiy3:function(t,e){},s9NJ:function(t,e){},ubMR:function(t,e){},uylJ:function(t,e){},wIJo:function(t,e){},wIMU:function(t,e){},ylfU:function(t,e){}});
//# sourceMappingURL=demos.a75f50add1ec10c480b4.js.map