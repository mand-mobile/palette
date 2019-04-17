webpackJsonp([2],{"88zO":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r("mvHQ"),n=r.n(i),s=r("Dd8w"),o=r.n(s),a=r("NYxO"),l=r("oqQY"),c=r.n(l),u=r("CESU"),h={name:"recorder",props:["theme"],data:function(){return{title:this.theme.title,editable:!1}},computed:{color:function(){return this.theme.data.basic.color}},methods:{dayjs:c.a,changeTitle:function(t){t?""!==this.title?this.editable=!1:this.$message.error("请输入主题标题"):(this.title=this.theme.title,this.editable=!1)},onClick:function(t){this.editable||this.$emit("select",t)}}},d={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"palette-recorder",on:{click:function(e){return t.onClick(t.theme.index)}}},[r("div",{staticClass:"palette-recorder-top"},[t.editable?r("div",[r("el-input",{attrs:{placeholder:t.$t("recorder.placeholder")},nativeOn:{click:function(t){t.stopPropagation()}},model:{value:t.title,callback:function(e){t.title="string"==typeof e?e.trim():e},expression:"title"}}),t._v(" "),r("el-button",{attrs:{size:"small"},nativeOn:{click:function(e){return e.stopPropagation(),t.changeTitle(!1)}}},[t._v(t._s(t.$t("recorder.cancel")))]),t._v(" "),r("el-button",{attrs:{type:"primary",size:"small"},nativeOn:{click:function(e){return e.stopPropagation(),t.changeTitle(!0)}}},[t._v(t._s(t.$t("recorder.confirm")))])],1):r("p",{staticClass:"title",domProps:{textContent:t._s(t.theme.title)}})]),t._v(" "),r("div",{staticClass:"palette-recorder-detail"},[r("ul",{staticClass:"color-list clearfix"},[r("li",{staticClass:"color-item",style:{background:t.color["color-primary"]}}),t._v(" "),r("li",{staticClass:"color-item",style:{background:t.color["color-primary-tap"]}}),t._v(" "),r("li",{staticClass:"color-item",style:{background:t.color["color-primary-background"]}})]),t._v(" "),r("p",{staticClass:"text"},[t._v(t._s(t.$t("recorder.modify")+" "+t.dayjs(t.theme.lastModify).format("YYYY/MM/DD HH:mm")))])]),t._v(" "),r("div",{staticClass:"palette-recorder-operate"},[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.$t("recorder.edit"),placement:"top"}},[r("i",{staticClass:"el-icon-edit",on:{click:function(e){return e.stopPropagation(),t.$emit("edit",t.theme.index)}}})]),t._v(" "),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.$t("recorder.download"),placement:"top"}},[r("i",{staticClass:"el-icon-download",on:{click:function(e){return e.stopPropagation(),t.$emit("download",t.theme.index)}}})]),t._v(" "),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.$t("recorder.delete"),placement:"top"}},[r("i",{staticClass:"el-icon-delete",on:{click:function(e){return e.stopPropagation(),t.$emit("delete",t.theme.index)}}})])],1)])},staticRenderFns:[]};var m=r("VU/8")(h,d,!1,function(t){r("jZ/n")},null,null).exports,f=r("olLJ"),p=r("0xDb"),$={components:{PaletteSearcher:u.a,PaletteRecorder:m,PaletteStatus:f.a},data:function(){return{searchThemes:[],themeFormVisible:!1,themeForm:{},importFormVisible:!1}},computed:o()({},Object(a.d)(["themes","mandMobileInfo"]),{themeList:function(){return this.searchThemes.length?this.searchThemes:this.themes}}),mounted:function(){var t=this;this.getMandMobileInfo().catch(function(e){e.message&&t.$message(e.message)})},methods:o()({},Object(a.c)(["update","createTheme","deleteTheme","updateThemeInfo"]),Object(a.b)({getMandMobileInfo:"GET_MAND_MOBILE_RELEASE",saveThemeStore:"SAVE_THEMES_STORE",getThemesStore:"GET_THEMES_STORE"}),{onDelete:function(t){var e=this;this.$confirm(this.$t("record.messageDescribe"),this.$t("record.messageTitle"),{confirmButtonText:this.$t("record.messageConfirm"),cancelButtonText:this.$t("record.messageCancel"),type:"warning"}).then(function(){e.deleteTheme(t),e.saveThemeStore()}).catch(function(){})},onSelect:function(t){this.$router.push({path:"/list",query:{themeIndex:t}})},onDownload:function(t){this.$router.push({path:"/generate",query:{themeIndex:t}})},onSearchTheme:function(t){this.searchThemes=t?this.themes.filter(function(e){return!!~e.title.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())}):this.themes},showThemeDialog:function(t){this.$refs.themeForm&&this.$refs.themeForm.resetFields();var e="";this.themes&&t>=0&&(e=this.themes[t]),this.themeForm=e?{title:e.title,version:e.version,themeIndex:t}:{title:"",version:this.mandMobileInfo,themeIndex:-1},this.themeFormVisible=!0},doCreateTheme:function(){this.themes&&this.themes.length>20?this.$message.error(this.$t("record.errorLimit")):this.showThemeDialog(-1)},doShareThemes:function(){this.getThemesStore().then(function(t){var e=n()(t);if(e){var r="palette-"+c()().format("YYYY-MM-DD")+".json";Object(p.a)(e,r)}})},doImportThemes:function(){this.importFormVisible=!0},doSaveTheme:function(){var t=this;this.$refs.themeForm.validate(function(e){e&&(t.themeFormVisible=!1,t.themeForm.themeIndex<0?t.createTheme(t.themeForm):t.updateThemeInfo(t.themeForm),t.saveThemeStore())})},importHandler:function(t){var e=this;this.importFormVisible=!1;var r=t.file;try{var i=new FileReader;i.onload=function(t){var r=t.target.result,i=JSON.parse(r);e.update({themes:i}),e.saveThemeStore()},FileReader.onabort=function(t){throw t},FileReader.onerror=function(t){throw t},i.readAsText(r)}catch(t){this.$message.error(this.$t("record.errorImport"))}}})},v={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"palette-record"},[r("div",{staticClass:"palette-record-top clearfix"},[r("palette-searcher",{attrs:{placeholder:t.$t("record.searchTip")},on:{search:t.onSearchTheme}}),t._v(" "),r("div",{staticClass:"palette-button-wrap"},[r("el-button",{attrs:{type:"primary",round:"",icon:"el-icon-circle-plus"},on:{click:t.doCreateTheme}},[t._v("\n        "+t._s(t.$t("record.createBtn"))+"\n      ")]),t._v(" "),r("el-button",{attrs:{type:"primary",icon:"el-icon-share",circle:""},on:{click:t.doShareThemes}}),t._v(" "),r("el-button",{attrs:{type:"danger",icon:"el-icon-upload",circle:""},on:{click:t.doImportThemes}})],1)],1),t._v(" "),r("div",{staticClass:"palette-record-list clearfix"},[t.themeList&&t.themeList.length?[r("transition-group",{attrs:{name:"list-complete",tag:"div"}},t._l(t.themeList,function(e,i){return r("palette-recorder",{key:"record-"+i,attrs:{theme:e},on:{delete:t.onDelete,select:t.onSelect,edit:t.showThemeDialog,download:t.onDownload}})}),1)]:[r("palette-status",{attrs:{imgUrl:"//manhattan.didistatic.com/static/manhattan/mfd/result-page/empty",describe:t.$t("record.errorTip")}})]],2),t._v(" "),r("el-dialog",{attrs:{width:"500px",title:"sdfsdf",visible:t.themeFormVisible},on:{"update:visible":function(e){t.themeFormVisible=e}}},[r("el-form",{ref:"themeForm",attrs:{model:t.themeForm,"label-width":"120px","label-position":"left"}},[r("el-form-item",{attrs:{prop:"title",label:t.$t("record.dialogThemeName"),rules:[{required:!0,message:t.$t("recorder.placeholder"),trigger:"blur"}]}},[r("el-input",{attrs:{placeholder:t.$t("recorder.placeholder"),"auto-complete":"off",maxlength:"20"},model:{value:t.themeForm.title,callback:function(e){t.$set(t.themeForm,"title",e)},expression:"themeForm.title"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"version",label:t.$t("record.dialogThemeVersion"),rules:[{required:!0,message:t.$t("record.dialogThemeVersionTip"),trigger:"blur"}]}},[r("el-select",{attrs:{disabled:""},model:{value:t.themeForm.version,callback:function(e){t.$set(t.themeForm,"version",e)},expression:"themeForm.version"}})],1)],1),t._v(" "),r("div",{staticClass:"dialog-header",attrs:{slot:"title"},slot:"title"},[r("p",{staticClass:"title"},[t._v(t._s(t.$t("record.dialogTitle")))]),t._v(" "),r("p",{staticClass:"describe"},[t._v(t._s(t.$t("record.dialogDescribe")))])]),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.themeFormVisible=!1}}},[t._v(t._s(t.$t("record.messageCancel")))]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:t.doSaveTheme}},[t._v(t._s(t.$t("record.messageConfirm")))])],1)],1),t._v(" "),r("el-dialog",{attrs:{width:"500px",title:t.$t("record.importDialogTitle"),visible:t.importFormVisible},on:{"update:visible":function(e){t.importFormVisible=e}}},[r("el-upload",{staticClass:"palette-importer",attrs:{drag:"",action:"''","show-file-list":!1,"http-request":t.importHandler}},[r("i",{staticClass:"el-icon-upload"}),t._v(" "),r("div",{staticClass:"el-upload__text"},[t._v(t._s(t.$t("record.importDialogText")[0])),r("em",[t._v(t._s(t.$t("record.importDialogText")[1]))])])])],1)],1)},staticRenderFns:[]};var g=r("VU/8")($,v,!1,function(t){r("a0PR")},null,null);e.default=g.exports},CESU:function(t,e,r){"use strict";var i={name:"palette-searcher",props:{placeholder:{type:String,default:""}},data:function(){return{value:""}},watch:{value:function(t){this.$emit("search",t)}}},n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"palette-searcher"},[r("i",{staticClass:"el-icon-search"}),t._v(" "),r("el-input",{staticClass:"palette-searcher-input",attrs:{placeholder:t.placeholder,"auto-complete":"off"},model:{value:t.value,callback:function(e){t.value="string"==typeof e?e.trim():e},expression:"value"}})],1)},staticRenderFns:[]};var s=r("VU/8")(i,n,!1,function(t){r("zn5i")},null,null);e.a=s.exports},a0PR:function(t,e){},"jZ/n":function(t,e){},oqQY:function(t,e,r){var i;i=function(){"use strict";var t="millisecond",e="second",r="minute",i="hour",n="day",s="week",o="month",a="quarter",l="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,u=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(t,e,r){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(r)+t},d={s:h,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),i=Math.floor(r/60),n=r%60;return(e<=0?"+":"-")+h(i,2,"0")+":"+h(n,2,"0")},m:function(t,e){var r=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(r,o),n=e-i<0,s=t.clone().add(r+(n?-1:1),o);return Number(-(r+(e-i)/(n?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:o,y:l,w:s,d:n,h:i,m:r,s:e,ms:t,Q:a}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f="en",p={};p[f]=m;var $=function(t){return t instanceof b},v=function(t,e,r){var i;if(!t)return null;if("string"==typeof t)p[t]&&(i=t),e&&(p[t]=e,i=t);else{var n=t.name;p[n]=t,i=n}return r||(f=i),i},g=function(t,e,r){if($(t))return t.clone();var i=e?"string"==typeof e?{format:e,pl:r}:e:{};return i.date=t,new b(i)},_=d;_.l=v,_.i=$,_.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u})};var b=function(){function h(t){this.$L=this.$L||v(t.locale,null,!0)||f,this.parse(t)}var d=h.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(_.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(c);if(i)return r?new Date(Date.UTC(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)):new Date(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)}return new Date(e)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return _},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var r=g(t);return this.startOf(e)<=r&&r<=this.endOf(e)},d.isAfter=function(t,e){return g(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<g(t)},d.$g=function(t,e,r){return _.u(t)?this[e]:this.set(r,t)},d.year=function(t){return this.$g(t,"$y",l)},d.month=function(t){return this.$g(t,"$M",o)},d.day=function(t){return this.$g(t,"$W",n)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",i)},d.minute=function(t){return this.$g(t,"$m",r)},d.second=function(t){return this.$g(t,"$s",e)},d.millisecond=function(e){return this.$g(e,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,a){var c=this,u=!!_.u(a)||a,h=_.p(t),d=function(t,e){var r=_.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return u?r:r.endOf(n)},m=function(t,e){return _.w(c.toDate()[t].apply(c.toDate(),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},f=this.$W,p=this.$M,$=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case l:return u?d(1,0):d(31,11);case o:return u?d(1,p):d(0,p+1);case s:var g=this.$locale().weekStart||0,b=(f<g?f+7:f)-g;return d(u?$-b:$+(6-b),p);case n:case"date":return m(v+"Hours",0);case i:return m(v+"Minutes",1);case r:return m(v+"Seconds",2);case e:return m(v+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,a){var c,u=_.p(s),h="set"+(this.$u?"UTC":""),d=(c={},c[n]=h+"Date",c.date=h+"Date",c[o]=h+"Month",c[l]=h+"FullYear",c[i]=h+"Hours",c[r]=h+"Minutes",c[e]=h+"Seconds",c[t]=h+"Milliseconds",c)[u],m=u===n?this.$D+(a-this.$W):a;if(u===o||u===l){var f=this.clone().set("date",1);f.$d[d](m),f.init(),this.$d=f.set("date",Math.min(this.$D,f.daysInMonth())).toDate()}else d&&this.$d[d](m);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[_.p(t)]()},d.add=function(t,a){var c,u=this;t=Number(t);var h=_.p(a),d=function(e){var r=new Date(u.$d);return r.setDate(r.getDate()+e*t),_.w(r,u)};if(h===o)return this.set(o,this.$M+t);if(h===l)return this.set(l,this.$y+t);if(h===n)return d(1);if(h===s)return d(7);var m=(c={},c[r]=6e4,c[i]=36e5,c[e]=1e3,c)[h]||1,f=this.valueOf()+t*m;return _.w(f,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),n=this.$locale(),s=n.weekdays,o=n.months,a=function(t,e,r,i){return t&&t[e]||r[e].substr(0,i)},l=function(t){return _.s(e.$H%12||12,t,"0")},c={YY:String(this.$y).slice(-2),YYYY:String(this.$y),M:String(this.$M+1),MM:_.s(this.$M+1,2,"0"),MMM:a(n.monthsShort,this.$M,o,3),MMMM:o[this.$M],D:String(this.$D),DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:a(n.weekdaysMin,this.$W,s,2),ddd:a(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(this.$H),HH:_.s(this.$H,2,"0"),h:l(1),hh:l(2),a:this.$H<12?"am":"pm",A:this.$H<12?"AM":"PM",m:String(this.$m),mm:_.s(this.$m,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return r.replace(u,function(t,e){return e||c[t]||i.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,c,u){var h,d=_.p(c),m=g(t),f=6e4*(m.utcOffset()-this.utcOffset()),p=this-m,$=_.m(this,m);return $=(h={},h[l]=$/12,h[o]=$,h[a]=$/3,h[s]=(p-f)/6048e5,h[n]=(p-f)/864e5,h[i]=p/36e5,h[r]=p/6e4,h[e]=p/1e3,h)[d]||p,u?$:_.a($)},d.daysInMonth=function(){return this.endOf(o).$D},d.$locale=function(){return p[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var r=this.clone();return r.$L=v(t,e,!0),r},d.clone=function(){return _.w(this.toDate(),this)},d.toDate=function(){return new Date(this.$d)},d.toJSON=function(){return this.toISOString()},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},h}();return g.prototype=b.prototype,g.extend=function(t,e){return t(e,b,g),g},g.locale=v,g.isDayjs=$,g.unix=function(t){return g(1e3*t)},g.en=p[f],g.Ls=p,g},t.exports=i()},zn5i:function(t,e){}});
//# sourceMappingURL=record.fb7690c74cdb2b5341f7.js.map