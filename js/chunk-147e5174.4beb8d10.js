(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-147e5174"],{"168d":function(e,t,n){},"1a9a":function(e,t,n){"use strict";n.r(t);var s,i=n("1da1"),o=n("b85c"),a=(n("96cf"),n("b64b"),n("a434"),n("4e82"),n("313e"),n("9390"),n("15af"),n("1111"),n("804e")),l=n("b2fd"),r=n("eeef"),u=(n("b0c0"),n("11da")),c=(n("a9e3"),n("fbd9").default.sumUpProp),d={props:{prop:{type:String},suit:{type:Object},unit:{type:String},round:{type:Boolean,default:!0},highNum:{type:Number,default:50},hero:{type:Object}},data:function(){return{value:0,heroProps:[{name:"速度",code:"speed"},{name:"效果命中",code:"hitRate"},{name:"效果抵抗",code:"missRate"}]}},watch:{suit:function(){this.reload()},hero:function(){this.reload()},prop:function(){this.reload()}},mounted:function(){this.reload()},methods:{reload:function(){this.value=this.getPropValue(this.suit,this.prop)},getPropValue:function(e,t){e.sum||(e.sum=c(e.list));var n=e.sum[t]||0,s=e.hero||this.hero;if(s){var i,a=Object(o.a)(this.heroProps);try{for(a.s();!(i=a.n()).done;){var l,r=i.value;t!==r.name||(l=s[r.code])&&(n+=l)}}catch(e){a.e(e)}finally{a.f()}}return this.round?Math.round(n):n}}},p=n("2877"),h=(d=Object(p.a)(d,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return e.value?t("span",{class:{"main-color bold":e.value>=e.highNum}},[e._v(e._s(e._f("round")(e.value))+e._s(e.unit))]):e._e()}),[],!1,null,null,null).exports,n("65ca")),f=n("f381"),m=(u={components:{YuhunCardList:u.a,FirstSpeedTablePropValue:d,CollectButton:h.a,YuhunColorDot:f.a},props:{data:{type:Array,default:function(){return[]}},placeholder:{type:String},isShow2Precision:{type:Boolean},isEnabledHero:{type:Boolean},isEnabledHeroColumn:{type:Boolean},hero:{type:Object}},data:function(){return{page:{sortBy:"speed",descending:!0,rowsPerPage:100}}},computed:{columns:function(){var e=[];return e.push({name:"type",label:"套装",field:"type",align:"left"}),this.isEnabledHero&&(this.isEnabledHeroColumn&&e.push({name:"hero",label:"式神",field:"hero"}),e.push({name:"总速",label:"总速",field:"总速",sortable:!0})),e.push({name:"speed",label:"速度",field:"speed",sortable:!0}),e.push({name:"pos246",label:"主属性",field:"pos246"}),e.push({name:"效果命中",label:"命中",sortable:!0}),e.push({name:"效果抵抗",label:"抵抗",sortable:!0}),e}},methods:{getCollectName:function(e){var t=e.type,n=null;return e.hero&&this.isEnabledHeroColumn?n=e.hero:this.isEnabledHero&&!this.isEnabledHeroColumn&&(n=this.hero),n&&(t+=n.name),t+="|"+e.pos246,n&&(t+="|总速"+this.$round2(e.sum["速度"]+n.speed)),(t=(t+="|速度"+this.$round2(e.sum["速度"]))+"|命中"+this.$round2(e.sum["效果命中"]))+"|抵抗"+this.$round2(e.sum["效果抵抗"])},getCollectCombo:function(e){var t,n={},s=1,i=Object(o.a)(e.list);try{for(i.s();!(t=i.n()).done;){var a=t.value;a&&(n["y"+s]=a._id),s++}}catch(e){i.e(e)}finally{i.f()}return n},onSortChange:function(e,t,n){return this.page.sortBy=t,this.page.descending=n,t&&e.sort((function(e,s){var i=null,o=null;return"speed"===t?(i=e[t]||0,o=s[t]||0):"效果命中"===t||"效果抵抗"===t?(i=e.sum&&e.sum[t]||0,o=s.sum&&s.sum[t]||0):"总速"===t&&(i=e.speed||0,o=s.speed||0,e.hero&&(i+=e.hero.speed),s.hero&&(o+=s.hero.speed)),n?o-i:i-o})),e}}},d=(n("4399"),Object(p.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-table",{staticClass:"my-sticky-header-table h100",attrs:{flat:"",dense:"","binary-state-sort":"",separator:"vertical",data:e.data,columns:e.columns,pagination:e.page,"hide-pagination":!0,"sort-method":e.onSortChange,"row-key":"id"},on:{"update:pagination":function(t){e.page=t}},scopedSlots:e._u([{key:"top",fn:function(t){return[n("q-btn",{staticClass:"absolute-top-right q-ma-sm",attrs:{flat:"",round:"",dense:"",size:"sm",icon:t.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:t.toggleFullscreen}},[n("q-tooltip",[e._v("全屏")])],1),e._t("header")]}},{key:"header",fn:function(t){return[n("q-tr",{attrs:{props:t}},[n("q-th",{staticClass:"width40px pd0"},[e._t("header-first")],2),e._l(t.cols,(function(s){return n("q-th",{key:s.name,attrs:{props:t}},[e._v(" "+e._s(s.label)+" ")])}))],2)]}},{key:"body",fn:function(t){return[n("q-tr",{staticClass:"cursor-pointer",attrs:{props:t},on:{click:function(e){t.expand=!t.expand}}},[n("q-tooltip",[e._v("点击展开御魂详情")]),n("q-td",{staticClass:"width20px pd0"},[e._t("default",null,{scope:t})],2),n("q-td",{key:"type",attrs:{props:t,"auto-width":""}},[n("div",{staticClass:"flex-row flex-center flex-left"},[n("yuhun-color-dot",{attrs:{"yuhun-name":t.row.type}}),n("span",{staticClass:"bold ml"},[e._v(e._s(t.row.type))])],1)]),n("q-td",{key:"hero",attrs:{props:t}},[t.row.hero?n("span",{staticClass:"bold"},[e._v(e._s(t.row.hero.name))]):e._e()]),n("q-td",{key:"总速",attrs:{props:t}},[n("first-speed-table-prop-value",{attrs:{prop:"速度",round:!1,"high-num":270,suit:t.row,hero:e.isEnabledHero?e.hero:null}})],1),n("q-td",{key:"speed",attrs:{props:t}},[n("span",{staticClass:"bold"},[e._v("+"+e._s(e._f("round")(t.row.speed)))])]),n("q-td",{key:"pos246",attrs:{props:t}},[n("span",[e._v(e._s(t.row.pos246))])]),n("q-td",{key:"效果命中",attrs:{props:t}},[n("first-speed-table-prop-value",{attrs:{prop:"效果命中",unit:"%",suit:t.row}})],1),n("q-td",{key:"效果抵抗",attrs:{props:t}},[n("first-speed-table-prop-value",{attrs:{prop:"效果抵抗",unit:"%",suit:t.row}})],1)],1),t.expand?n("q-tr",{attrs:{props:t}},[n("q-td",{staticClass:"bg-grey-2",attrs:{colspan:"100%"}},[t.row.list?n("yuhun-card-list",{attrs:{list:t.row.list,"is-show-prop-score":!0,"valid-props":["速度"],"is-show-collected-info":!0,"is-mix-hero-data":e.isEnabledHero,"hero-info":e.isEnabledHero?(e.isEnabledHeroColumn?t.row:e).hero:null,"is-show2precision":e.isShow2Precision}},[n("div",{staticClass:"text-center"},[n("collect-button",{attrs:{name:function(){return e.getCollectName(t.row)},combo:e.getCollectCombo(t.row)}})],1)]):e._e()],1)],1):e._e()]}},{key:"bottom",fn:function(){return[e._t("bottom")]},proxy:!0},{key:"no-data",fn:function(){return[n("span",[e._v(e._s(e.placeholder))])]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports),n("8c65")),b=n("a5b5"),v=(h={props:{value:{type:Object},placeholder:{type:String,default:"请选择式神"}},data:function(){return{selected:null,keyword:null}},computed:{list:function(){var e=this.keyword,t=this.$heros;return e?Object(b.a)(t,e):t}},watch:{selected:function(){this.$emit("input",this.selected),this.selected=null}},methods:{filter:function(e){this.keyword=e}}},f={components:{SelectHero:Object(p.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",{attrs:{filterable:"",size:"mini","filter-method":e.filter,placeholder:e.placeholder},on:{clear:function(t){e.keyword=null}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.list,(function(e){return n("el-option",{key:e.name,attrs:{label:e.name,value:e}})})),1)}),[],!1,null,null,null).exports},props:{defaultHeroName:{type:String},value:{type:Object}},data:function(){return{otherSelected:null,selected:null,isShow:!1,candidates:["面灵气","阎魔","镰鼬","白藏主","八岐大蛇","鬼王酒吞童子","孟婆","云外镜","化鲸","妖琴师","山兔"]}},watch:{selected:function(){this.selected&&this.$emit("input",this.selected)},otherSelected:function(){this.otherSelected&&(this.selected=this.otherSelected,this.isShow=!1)}},mounted:function(){this.handleDefaultValue()},methods:{selectName:function(e){var t,n=Object(o.a)(m.a);try{for(n.s();!(t=n.n()).done;){var s=t.value;if(s.name===e)return this.selected=s,void(this.isShow=!1)}}catch(e){n.e(e)}finally{n.f()}},handleDefaultValue:function(){this.defaultHeroName&&this.selectName(this.defaultHeroName)}}},u=Object(p.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-popover",{attrs:{placement:"bottom",title:"选择式神",width:"300",trigger:"click"},model:{value:e.isShow,callback:function(t){e.isShow=t},expression:"isShow"}},[n("div",[e._l(e.candidates,(function(t,s){return[n("el-button",{key:t,staticClass:"mb",class:0===s?"ml":"",attrs:{size:"mini",type:"success",plain:""},on:{click:function(n){return e.selectName(t)}}},[e._v(" "+e._s(t)+" ")])]})),n("select-hero",{staticClass:"ml",attrs:{placeholder:"选择其他式神"},model:{value:e.otherSelected,callback:function(t){e.otherSelected=t},expression:"otherSelected"}})],2),n("span",{staticClass:"clickable",attrs:{slot:"reference"},slot:"reference"},[n("i",{staticClass:"el-icon-user-solid"}),e.selected?n("span",[e._v(e._s(e.selected.name))]):e._e()])])}),[],!1,null,null,null).exports,"vertical"),y=(h={name:"multipane",props:{layout:{type:String,default:v}},data:function(){return{isResizing:!1}},computed:{classnames:function(){return["multipane","layout-"+this.layout.slice(0,1),this.isResizing?"is-resizing":""]},cursor:function(){return this.isResizing?this.layout==v?"col-resize":"row-resize":""},userSelect:function(){return this.isResizing?"none":""}},methods:{onMouseDown:function(e){var t,n,s,i,o,a,l,r,u,c,d,p,h=e.target,f=e.pageX,m=e.pageY;h.className&&h.className.match("multipane-resizer")&&(n=(t=this).$el,s=t.layout,i=h.previousElementSibling,o=i.offsetWidth,a=i.offsetHeight,l=!!(i.style.width+"").match("%"),e=window.addEventListener,r=window.removeEventListener,u=function(e,t){var o,a;return void 0===t&&(t=0),s==v?(o=n.clientWidth,a=e+t,i.style.width=l?a/o*100+"%":a+"px"):"horizontal"==s?(o=n.clientHeight,a=e+t,i.style.height=l?a/o*100+"%":a+"px"):void 0},t.isResizing=!0,c=u(),t.$emit("paneResizeStart",i,h,c),p=function(){c=u(s==v?i.clientWidth:i.clientHeight),t.isResizing=!1,r("mousemove",d),r("mouseup",p),t.$emit("paneResizeStop",i,h,c)},e("mousemove",d=function(e){var n=e.pageX;e=e.pageY;c=s==v?u(o,n-f):u(a,e-m),t.$emit("paneResize",i,h,c)}),e("mouseup",p))}}},"undefined"!=typeof document&&(f=document.head||document.getElementsByTagName("head")[0],y=".multipane { display: flex; } .multipane.layout-h { flex-direction: column; } .multipane.layout-v { flex-direction: row; } .multipane > div { position: relative; z-index: 1; } .multipane-resizer { display: block; position: relative; z-index: 2; } .layout-h > .multipane-resizer { width: 100%; height: 10px; margin-top: -10px; top: 5px; cursor: row-resize; } .layout-v > .multipane-resizer { width: 10px; height: 100%; margin-left: -10px; left: 5px; cursor: col-resize; } ",(s=document.createElement("style")).type="text/css",s.styleSheet?s.styleSheet.cssText=y:s.appendChild(document.createTextNode(y)),f.appendChild(s)),Object.assign(h,{render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.classnames,style:{cursor:e.cursor,userSelect:e.userSelect},on:{mousedown:e.onMouseDown}},[e._t("default")],2)},staticRenderFns:[]}));y.prototype=h.prototype,"undefined"!=typeof document&&(f=document.head||document.getElementsByTagName("head")[0],(s=document.createElement("style")).type="text/css",s.styleSheet?s.styleSheet.cssText="":s.appendChild(document.createTextNode("")),f.appendChild(s)),h={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"multipane-resizer"},[this._t("default")],2)},staticRenderFns:[]};"undefined"!=typeof window&&window.Vue&&(window.Vue.component("multipane",y),window.Vue.component("multipane-resizer",h));f={components:{Multipane:y,MultipaneResizer:h}},n("50f7"),h=Object(p.a)(f,(function(){var e=this.$createElement;e=this._self._c||e;return e("multipane",{staticClass:"vertical-panes",attrs:{layout:"vertical"}},[e("div",{staticClass:"pane",style:{minWidth:"100px",width:"50%"}},[this._t("left")],2),e("multipane-resizer"),e("div",{staticClass:"pane",style:{minWidth:"100px",flexGrow:1}},[this._t("right")],2)],1)}),[],!1,null,null,null).exports,f={components:{SelectExcluded:n("7a4b").a},props:{value:{type:Object}},data:function(){return{isShow:!1,excluded:{combos:[],yuhuns:[]}}},watch:{excluded:{handler:function(){this.$emit("input",this.excluded)},deep:!0}},methods:{ok:function(){this.isShow=!1}}},f=Object(p.a)(f,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("div",[t("el-button",{attrs:{type:"text"},on:{click:function(t){e.isShow=!0}}},[0===e.excluded.combos.length&&0===e.excluded.yuhuns.length?t("span",[e._v("排除设置")]):t("span",[e._v(" 排除了若干御魂 ")])]),t("el-dialog",{attrs:{title:"排除设置","append-to-body":!0,visible:e.isShow,width:"800px"},on:{"update:visible":function(t){e.isShow=t}}},[t("select-excluded",{model:{value:e.excluded,callback:function(t){e.excluded=t},expression:"excluded"}}),t("span",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:e.ok}},[e._v("确定")])],1)],1)],1)}),[],!1,null,null,null).exports;var g,x=n("8050"),S=n("7ed4"),w=["散件"],_=["12","13","14","15","16","23","24","25","26","34","35","36","45","46","56"];for(g in a.a)w.push(g);a={components:{FirstSpeedTable:d,FirstSpeedSelectHero:u,MultiPane:h,SelectExcludedModal:f,WatchVideoBtn:S.a},data:function(){return{yuhunColorMap:r.a,isRendered:!1,minSuitSpeed:100,positionMapList:null,candidateSuits:[],selectedSuits:[],selectedHero:null,isShow2Precision:!0,isEnabledHero:!0,loading:!0,pos4:["攻","防","生","命","抗"],pos6:["攻","防","生","暴","爆"],excluded:{combos:[],yuhuns:[]}}},computed:{selectedPositionYuhunIds:function(){var e,t={1:[],2:[],3:[],4:[],5:[],6:[]},n=Object(o.a)(this.selectedSuits);try{for(n.s();!(e=n.n()).done;){var s,i=e.value,a=Object(o.a)(i.list);try{for(a.s();!(s=a.n()).done;){var l=s.value;t[l["位置"]].push(l["御魂ID"])}}catch(e){a.e(e)}finally{a.f()}}}catch(e){n.e(e)}finally{n.f()}return t},excludedYuhunIds:function(){var e={};if(this.excluded.combos.length){var t,n=Object(o.a)(this.excluded.combos);try{for(n.s();!(t=n.n()).done;){var s=t.value;if("combo"===s.type)for(var i=1;i<=6;i++){var a=s.data["y"+i];a&&(e[a]=!0)}}}catch(e){n.e(e)}finally{n.f()}}if(this.excluded.yuhuns.length){var l,r=Object(o.a)(this.excluded.yuhuns);try{for(r.s();!(l=r.n()).done;){var u=l.value;e[this.$store.state.currentSet._id+u]=!0}}catch(e){r.e(e)}finally{r.f()}}return Object.keys(e)}},watch:{minSuitSpeed:function(){this.reloadCandidates()},pos4:function(){this.reloadCandidates()},pos6:function(){this.reloadCandidates()},excluded:{handler:function(){this.prepareData(),this.reloadCandidates()},deep:!0}},mounted:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$yuhunList();case 2:e.yuhunList=t.sent,e.prepareData(),e.reload();case 5:case"end":return t.stop()}}),t)})))()},methods:{prepareData:function(){this.positionMapList=Object(x.a)(this.yuhunList,this.excludedYuhunIds)},selectSuit:function(e){this.isEnabledHero&&(e.hero=this.selectedHero),this.selectedSuits.push(e),this.sortSuits(this.selectedSuits),this.reloadCandidates()},removeSuit:function(e){e=this.selectedSuits.indexOf(e),this.selectedSuits.splice(e,1),this.reloadCandidates()},reload:function(){this.selectedSuits=[],this.reloadCandidates()},reloadCandidates:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var n,s,i,a,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$nextTick();case 3:e.candidateSuits=[],n=[],s=Object(o.a)(w);try{for(s.s();!(i=s.n()).done;)a=i.value,l=null,(l="散件"===a?e.calAnyTypeMaxSpeed(a):e.calYuhunTypeMaxSpeed(a))&&n.push(l)}catch(t){s.e(t)}finally{s.f()}e.sortSuits(n),e.candidateSuits=n,e.loading=!1;case 10:case"end":return t.stop()}}),t)})))()},sortSuits:function(e){e.sort((function(e,t){return t.speed-e.speed}))},calAnyTypeMaxSpeed:function(e){for(var t=[],n=0,s=1;s<=6;s++){var i,a=this.positionMapList[s],l=Object(o.a)(a);try{for(l.s();!(i=l.n()).done;){var r=i.value;if(!1!==this.checkPosMainProp(s,r)&&!1===this.hasYuhunSelected(r)){t.push(r),n+=r["速度"]||0;break}}}catch(e){l.e(e)}finally{l.f()}}return n>this.minSuitSpeed&&6===t.length?{id:e+n,speed:n,type:e,pos246:this.handlePos246(t),list:t}:null},calYuhunTypeMaxSpeed:function(e){for(var t=[],n=0,s=1;s<=6;s++){var i,a=this.positionMapList[s],l=null,r=Object(o.a)(a);try{for(r.s();!(i=r.n()).done;){var u=i.value;if(!1!==this.checkPosMainProp(s,u)&&e===u["御魂类型"]&&!1===this.hasYuhunSelected(u)){l=u;break}}}catch(e){r.e(e)}finally{r.f()}l&&(n+=l["速度"]||0),t.push(l)}var c,d=t,p=n,h=Object(o.a)(_);try{for(h.s();!(c=h.n()).done;){for(var f=c.value,m=[],b=0,v=1;v<=6;v++){var y=null;if(v===parseInt(f[0])||v===parseInt(f[1])){var g,x=this.positionMapList[v],S=Object(o.a)(x);try{for(S.s();!(g=S.n()).done;){var w=g.value;if(!1!==this.checkPosMainProp(v,w)&&e!==w["御魂类型"]&&!1===this.hasYuhunSelected(w)){y=w;break}}}catch(e){S.e(e)}finally{S.f()}}else y=t[v-1];y&&(b+=y["速度"]||0),m.push(y)}p<b&&(d=m,p=b)}}catch(e){h.e(e)}finally{h.f()}return p>this.minSuitSpeed&&6===d.length?{id:e+p,speed:p,type:e,pos246:this.handlePos246(d),list:d}:null},checkPosMainProp:function(e,t){var n=null;if(4===e)n=this.pos4;else{if(6!==e)return!0;n=this.pos6}return 0===n.length||-1<n.indexOf(l.a.shortLast[t.mainProp])},hasYuhunSelected:function(e){return-1<this.selectedPositionYuhunIds[e["位置"]].indexOf(e["御魂ID"])},handlePos246:function(e){return this.mainPropShort(e[1])+this.mainPropShort(e[3])+this.mainPropShort(e[5])},mainPropShort:function(e){return e?"".concat(l.a.shortLast[e.mainProp]||"*"):"*"}}},n("87ab"),d=Object(p.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h100 flex-column flex-grow",staticStyle:{"margin-top":"-20px"},attrs:{id:"first-speed-page"}},[n("multi-pane",{staticClass:"flex-grow"},[n("div",{staticClass:"flex-grow h100 flex-column",attrs:{slot:"left"},slot:"left"},[n("div",{staticClass:"flex-grow h100 auto-overflow"},[n("first-speed-table",{attrs:{data:e.selectedSuits,placeholder:"点击右侧的“+”按钮，任意组合你的一速队列吧！","is-enabled-hero":e.isEnabledHero,"is-enabled-hero-column":!0},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.scope;return[n("q-btn",{attrs:{circle:"",round:"",size:"xs",icon:"delete",color:"red"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.removeSuit(s.row)}}})]}}])},[n("template",{slot:"header"},[n("h6",{staticClass:"main-color text-center"},[n("i",{staticClass:"iconfont yuhunhub-ziyuan"}),e._v(" 一速队列 ")])]),n("template",{slot:"header-first"},[n("q-btn",{attrs:{circle:"",round:"",size:"xs",icon:"delete",color:"red"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.reload()}}})],1)],2)],1)]),n("div",{staticClass:"flex-grow h100 flex-column",attrs:{slot:"right"},slot:"right"},[n("div",{staticClass:"flex-grow flex-column auto-overflow"},[n("first-speed-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.candidateSuits,"is-enabled-hero":e.isEnabledHero,hero:e.selectedHero},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.scope;return[n("q-btn",{attrs:{circle:"",round:"",size:"xs",icon:"add",color:"green"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.selectSuit(s.row)}}})]}}])},[n("div",{staticClass:"w100",attrs:{slot:"header"},slot:"header"},[n("h6",{staticClass:"text-center flex-row flex-center"},[e.isEnabledHero?n("first-speed-select-hero",{attrs:{"default-hero-name":"面灵气"},model:{value:e.selectedHero,callback:function(t){e.selectedHero=t},expression:"selectedHero"}}):e._e(),e._v(" 候选队列 ")],1),n("div",{staticClass:"flex-row mt"},[n("el-checkbox",{attrs:{label:"启用式神预览",size:"mini",border:""},model:{value:e.isEnabledHero,callback:function(t){e.isEnabledHero=t},expression:"isEnabledHero"}}),n("span",{staticClass:"flex-row flex-center ml"},[n("span",{staticClass:"font-mini"},[e._v("四号位：")]),n("el-checkbox-group",{attrs:{size:"mini"},model:{value:e.pos4,callback:function(t){e.pos4=t},expression:"pos4"}},e._l(["攻","防","生","命","抗"],(function(t){return n("el-checkbox-button",{key:t+"4",attrs:{label:t}},[e._v(e._s(t))])})),1)],1),n("span",{staticClass:"flex-row flex-center ml"},[n("span",{staticClass:"font-mini"},[e._v("六号位：")]),n("el-checkbox-group",{attrs:{size:"mini"},model:{value:e.pos6,callback:function(t){e.pos6=t},expression:"pos6"}},e._l(["攻","防","生","暴","爆"],(function(t){return n("el-checkbox-button",{key:t+"6",attrs:{label:t}},[e._v(e._s(t))])})),1)],1)],1)]),n("template",{slot:"bottom"},[n("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入内容",size:"mini"},model:{value:e.minSuitSpeed,callback:function(t){e.minSuitSpeed=t},expression:"minSuitSpeed"}},[n("template",{slot:"prepend"},[e._v(" 速度小于 ")]),n("template",{slot:"append"},[e._v(" 的套装不予考虑 ")])],2),n("span",{staticClass:"flex-row flex-center ml"},[n("select-excluded-modal",{model:{value:e.excluded,callback:function(t){e.excluded=t},expression:"excluded"}})],1)],1)],2)],1)])]),n("watch-video-btn",{attrs:{url:"https://www.bilibili.com/video/BV1Yp4y1k7TJ/"}})],1)}),[],!1,null,null,null),t.default=d.exports},"1b62":function(e,t,n){},2003:function(e,t,n){"use strict";t.a=["攻击","攻击加成","防御","防御加成","生命","生命加成","速度","效果命中","效果抵抗","暴击","暴击伤害"]},4399:function(e,t,n){"use strict";n("c117")},"44be":function(e,t,n){"use strict";var s=n("1da1"),i=(n("96cf"),n("a9e3"),n("99af"),n("4de4"),n("d3b7"),n("4e82"),n("fb6a"),n("e9c4"),n("e1bd")),o=n("c69e"),a=n("804e"),l=n("2ed2"),r=n("517a"),u=n("9b10"),c=n("a35a"),d=n("14c3"),p=n("9d39"),h=n("f27d"),f=n("2003");l={name:"YuhunData",components:{PropValue:l.a},mixins:[p.a],props:{position:{type:Number},isShowAddCustom:{type:Boolean,default:!0}},data:function(){var e=["御魂类型"];return this.position||e.push("位置"),e=e.concat(i.a),{getYuhunTimestamp:h.a,mainProps:f.a,props:e,unimCols:o.a,formatNum:d.a,bossYuhunFixedValues:r.a,yuhunPositionFixedValues:u.a,getMainPropValue:c.a,yuhunSuit:a.a,setting:{suit:"all",position:this.position||"all",star:"all",level:"all",mainProp:"all"},isShowUnimCols:!1,isShowPropScore:!1,isShow2Precision:!1,isShowIdSearch:!1,searchId:null,currentPage:1,pageSize:10,sortProp:null,sortOrder:null,total:0,yuhunList:[],hasLoad:!1}},computed:{list:function(){var e=this,t=this.yuhunList,n=(this.isShowIdSearch&&this.searchId&&(t=t.filter((function(t){return t._id===e.searchId}))),"all"!==this.setting.suit&&(t=t.filter((function(t){return t["御魂类型"]===e.setting.suit}))),"all"!==this.setting.position&&(t=t.filter((function(t){return t["位置"]===e.setting.position}))),"all"!==this.setting.star&&(t=t.filter((function(t){return t["御魂星级"]===e.setting.star}))),"all"!==this.setting.mainProp&&(t=t.filter((function(t){return t.mainProp===e.setting.mainProp}))),"all"!==this.setting.level&&("string"==typeof this.setting.level?"not0"===this.setting.level&&(t=t.filter((function(e){return 0<e["御魂等级"]}))):t=t.filter((function(t){return t["御魂等级"]===e.setting.level}))),this.total=t.length,this.sortProp&&t.sort((function(t,n){t=t[e.sortProp]||0,n=n[e.sortProp]||0;var s=t-n;return"御魂ID"===e.sortProp&&(s=t.localeCompare(n)),"descending"===e.sortOrder?-s:s})),(this.currentPage-1)*this.pageSize),s=n+this.pageSize;return t.slice(n,s)}},watch:{position:function(){this.setting.position=this.position},currentSet:function(){this.loadYuhun()}},mounted:function(){this.loadYuhun()},methods:{loadYuhun:function(){var e=this;return Object(s.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.currentSet)return t.next=3,e.$yuhunFindAll();t.next=6;break;case 3:n=t.sent,e.yuhunList=n,e.hasLoad=!0;case 6:case"end":return t.stop()}}),t)})))()},sortChange:function(e){e.column;var t=e.prop;e=e.order;this.sortProp=t,this.sortOrder=e},onDbClick:function(e){console.log(JSON.stringify(e,2))}}},p=n("2877"),n=Object(p.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-form",{attrs:{inline:!0,model:e.setting,size:"mini"}},[n("el-row",[n("el-form-item",[e._t("toolbar"),e.isShowIdSearch?n("el-input",{attrs:{placeholder:"id"},model:{value:e.searchId,callback:function(t){e.searchId=t},expression:"searchId"}}):e._e()],2),n("el-form-item",{staticStyle:{"margin-bottom":"20px"}},[n("span",{attrs:{slot:"label"},on:{dblclick:function(t){e.isShowIdSearch=!e.isShowIdSearch}},slot:"label"},[e._v("御魂类型")]),n("el-select",{staticStyle:{width:"100px"},model:{value:e.setting.suit,callback:function(t){e.$set(e.setting,"suit",t)},expression:"setting.suit"}},[n("el-option",{attrs:{label:"全部",value:"all"}}),e._l(e.yuhunSuit,(function(e,t){return n("el-option",{key:t,attrs:{label:t,value:t}})})),e._l(["荒骷髅","蜃气楼","土蜘蛛","地震鲶","胧车","鬼灵歌伎"],(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})}))],2)],1),n("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"御魂星级"}},[n("el-select",{staticStyle:{width:"100px"},model:{value:e.setting.star,callback:function(t){e.$set(e.setting,"star",t)},expression:"setting.star"}},[n("el-option",{attrs:{label:"全部",value:"all"}}),n("el-option",{attrs:{label:"四星",value:4}}),n("el-option",{attrs:{label:"五星",value:5}}),n("el-option",{attrs:{label:"六星",value:6}})],1)],1),n("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"御魂等级"}},[n("el-select",{staticStyle:{width:"100px"},model:{value:e.setting.level,callback:function(t){e.$set(e.setting,"level",t)},expression:"setting.level"}},[n("el-option",{attrs:{label:"全部",value:"all"}}),n("el-option",{attrs:{label:"未强化",value:0}}),n("el-option",{attrs:{label:"已强化",value:"not0"}}),n("el-option",{attrs:{label:"满级",value:15}}),e._l(14,(function(e){return n("el-option",{key:e,attrs:{label:"+"+e+"级",value:e}})}))],2)],1),e.position?e._e():n("el-form-item",{attrs:{label:"位置"}},[n("el-select",{staticStyle:{width:"100px"},model:{value:e.setting.position,callback:function(t){e.$set(e.setting,"position",t)},expression:"setting.position"}},[n("el-option",{attrs:{label:"全部",value:"all"}}),e._l(6,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})}))],2)],1),n("el-form-item",{attrs:{label:"主属性"}},[n("el-select",{staticStyle:{width:"100px"},model:{value:e.setting.mainProp,callback:function(t){e.$set(e.setting,"mainProp",t)},expression:"setting.mainProp"}},[n("el-option",{attrs:{label:"全部",value:"all"}}),e._l(e.mainProps,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})}))],2)],1)],1),n("el-row",[n("el-form-item",[n("el-checkbox",{model:{value:e.isShow2Precision,callback:function(t){e.isShow2Precision=t},expression:"isShow2Precision"}},[e._v(" 显示小数点后2位 ")])],1),n("el-form-item",[n("el-checkbox",{model:{value:e.isShowUnimCols,callback:function(t){e.isShowUnimCols=t},expression:"isShowUnimCols"}},[e._v(" 显示不重要的列(生命/防御等) ")])],1),n("el-form-item",[n("el-checkbox",{model:{value:e.isShowPropScore,callback:function(t){e.isShowPropScore=t},expression:"isShowPropScore"}},[e._v(" 显示有效属性次数 ")])],1)],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:!e.hasLoad,expression:"!hasLoad"}],staticStyle:{width:"100%"},attrs:{stripe:"",border:"",sortable:"",data:e.list,size:"mini"},on:{"sort-change":e.sortChange}},[e._l(e.props,(function(t,s){return[e.isShowUnimCols||e.unimCols.indexOf(t)<0?n("el-table-column",{key:"yuhundata"+t,attrs:{sortable:0!==s,"min-width":"105",fixed:0===s,prop:t,label:t},scopedSlots:e._u([{key:"default",fn:function(s){return[["御魂类型","位置"].indexOf(t)<0&&s.row[t]?[s.row.mainProp===t?[n("prop-value",{staticStyle:{color:"crimson"},attrs:{prop:t,value:e.getMainPropValue(s.row),"is-show2precision":e.isShow2Precision}}),n("prop-value",{attrs:{prop:t,value:e.formatNum(s.row[t]-e.getMainPropValue(s.row)),"is-show2precision":e.isShow2Precision}})]:s.row.isBossYuhun&&s.row.bossFixedProp===t?[n("prop-value",{staticStyle:{color:"orange"},attrs:{prop:t,value:e.bossYuhunFixedValues[t],"is-show2precision":e.isShow2Precision}}),n("prop-value",{attrs:{prop:t,value:e.formatNum(s.row[t]-e.bossYuhunFixedValues[t]),"is-show2precision":e.isShow2Precision}})]:[n("prop-value",{attrs:{prop:t,value:s.row[t],"is-show2precision":e.isShow2Precision}})]]:"御魂类型"===t?[n("el-tooltip",{staticStyle:{"font-weight":"bold"},attrs:{effect:"dark",content:"ID:"+s.row["御魂ID"],placement:"top"}},[n("span",[e._v(e._s(s.row[t]))])])]:[e._v(" "+e._s(s.row[t])+" ")],"御魂类型"===t?[5===s.row["御魂星级"]?n("el-tag",{attrs:{size:"mini",type:"warning"}},[e._v(" 五星 ")]):4===s.row["御魂星级"]?n("el-tag",{attrs:{size:"mini",type:"danger"}},[e._v(" 四星 ")]):e._e()]:e._e(),e.isShowPropScore&&s.row[t+"score"]?n("el-badge",{attrs:{value:s.row[t+"score"],type:"primary"}}):e._e()]}}],null,!0)}):e._e()]})),n("el-table-column",{attrs:{width:"130",fixed:"",label:"主属性 | 固定属性"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{color:"crimson"}},[e._v(e._s(t.row.mainProp))]),t.row.isBossYuhun?n("span",{staticStyle:{color:"orange"}},[e._v(" | "+e._s(t.row.bossFixedProp||"未识别"))]):e._e()]}}])}),n("el-table-column",{attrs:{width:"80",fixed:"",sortable:"",label:"等级",prop:"御魂等级"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row["御魂等级"]))])]}}])}),n("el-table-column",{attrs:{width:"180",sortable:"",label:"入手时间",prop:"御魂ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{on:{dblclick:function(n){return e.onDbClick(t.row)}}},[e._v(e._s(e.$datetime(e.getYuhunTimestamp(t.row))))])]}}])}),n("el-table-column",{attrs:{width:"90",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._t("default",null,{data:t.row})]}}],null,!0)})],2),n("div",{staticStyle:{"text-align":"center","margin-top":"5px"}},[n("el-pagination",{attrs:{background:"","page-size":e.pageSize,"current-page":e.currentPage,layout:"prev, pager, next",total:e.total},on:{"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1)}),[],!1,null,"3bfe319f",null);t.a=n.exports},"50f7":function(e,t,n){"use strict";n("1b62")},"65ca":function(e,t,n){"use strict";n("b0c0");var s={mixins:[n("ae69").a],props:{combo:{type:[Object]},setting:{Object:Object},name:{type:[String,Function]}},methods:{saveCombo:function(){var e=this.combo,t=(this.setting&&(e.setting=this.$clone(this.setting)),null);this.name?"string"==typeof this.name?t=this.name:"function"==typeof this.name&&(t=this.name()):t=this.setting?e.setting.summary:"未命名",this.$store.commit("saveCombo",{combo:e,name:t})}}};n=n("2877"),n=Object(n.a)(s,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("div",[e.checkCollectedName(e.combo,!0)?[t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.saveCombo()}}},[e._v(" 已收藏 ")])]:[t("el-button",{staticStyle:{width:"68px"},attrs:{size:"mini",type:"success"},on:{click:function(t){return e.saveCombo()}}},[e._v(" 收藏 ")])]],2)}),[],!1,null,null,null);t.a=n.exports},"6af8":function(e,t,n){"use strict";var s=n("b85c");n("fb6a"),t.a=function(e,t){var n,i=Object(s.a)(t);try{for(i.s();!(n=i.n()).done;){var o=n.value,a=e.indexOf(o);if(!(-1<a))return!1;e=e.slice(a+1)}}catch(e){i.e(e)}finally{i.f()}return!0}},"7a4b":function(e,t,n){"use strict";n("d81d");var s=n("6b61"),i=n("cce9"),o=n("a508"),a=n("b1a0");s={components:{CollectionTree:s.a,SelectSingleYuhun:i.a,YuhunCard:o.a},mixins:[a.a],props:{value:{type:Object},isShowApplySettingBtn:{type:Boolean}},data:function(){return{excludeCombos:[],excludeYuhuns:[]}},watch:{excludeCombos:function(){this.emit()},excludeYuhuns:function(){this.emit()}},methods:{onChecked:function(e,t){t=t.checkedNodes,this.excludeCombos=t},emit:function(){this.$emit("input",{combos:this.excludeCombos,yuhuns:this.excludeYuhuns.map((function(e){return e.yuhun}))})}}},i=n("2877"),o=Object(i.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h100"},[n("el-card",{staticStyle:{"margin-top":"0px","margin-bottom":"10px"},attrs:{"body-style":{padding:"5px 5px 20px 0px"}}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",[e._v("排除套装")]),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{title:"刷新",type:"text",icon:"el-icon-refresh"},on:{click:e.loadCollection}})],1),n("collection-tree",{ref:"excludeTree",attrs:{"show-checkbox":"","show-edit":!1,"show-only-folder":!1,"check-strictly":!1,"is-single-select":!1,"is-show-apply-setting-btn":e.isShowApplySettingBtn},on:{check:e.onChecked}})],1),n("el-card",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{"body-style":{padding:"5px"}}},[n("div",{staticStyle:{display:"flex","align-items":"center"},attrs:{slot:"header"},slot:"header"},[n("span",[e._v("排除御魂")]),n("select-single-yuhun",{ref:"selectExcludeYuhun",staticStyle:{"margin-left":"10px"},attrs:{"select-mode":!0},on:{input:function(t){return t&&e.excludeYuhuns.push({yuhun:t})}}},[n("i",{staticClass:"el-icon-circle-plus",staticStyle:{cursor:"pointer"},attrs:{slot:"select"},on:{click:function(t){e.$refs.selectExcludeYuhun.isShowSelectTable=!0}},slot:"select"})])],1),n("div",[n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},e._l(e.excludeYuhuns,(function(t,s){return n("yuhun-card",{key:s+"selectYuhuns",attrs:{id:e.$store.state.currentSet._id+t.yuhun}},[n("el-button",{staticStyle:{padding:"0px"},attrs:{slot:"btn",icon:"el-icon-delete",type:"text",size:"mini"},on:{click:function(t){return e.excludeYuhuns.splice(s,1)}},slot:"btn"})],1)})),1),0===e.excludeYuhuns.length?n("span",{staticStyle:{"text-align":"center",color:"#999",display:"block",margin:"5px 0","font-size":"13px"}},[e._v("无")]):e._e()])])],1)}),[],!1,null,null,null);t.a=o.exports},"7ed4":function(e,t,n){"use strict";var s={props:{url:{type:String}},data:function(){return{isShow:!0}},methods:{onClick:function(){this.$open(this.url),this.isShow=!1}}};n=n("2877"),n=Object(n.a)(s,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return e.isShow?t("div",{staticStyle:{"z-index":"1000"}},[t("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[t("q-btn",{attrs:{color:"secondary"},on:{click:e.onClick}},[t("q-btn",{staticClass:"absolute-top-right",staticStyle:{"margin-top":"-5px","margin-right":"-5px"},attrs:{round:"",flat:"",size:"xs",color:"black"},on:{click:function(t){e.isShow=!1}}},[e._v(" x ")]),t("q-tooltip",[e._v(" 求支持！求三连！T_T ")]),t("i",{staticClass:"iconfont yuhunhub-bilibili q-mr-sm"}),e._v(" 观看本功能视频 ")],1)],1)],1):e._e()}),[],!1,null,null,null);t.a=n.exports},8050:function(e,t,n){"use strict";var s=n("b85c");n("4e82"),t.a=function(e,t){var n,i={1:[],2:[],3:[],4:[],5:[],6:[]},o=Object(s.a)(e);try{for(o.s();!(n=o.n()).done;){var a=n.value;t&&-1<t.indexOf(a._id)||i[a["位置"]].push(a)}}catch(e){o.e(e)}finally{o.f()}for(var l=1;l<=6;l++)i[l].sort((function(e,t){return e=e["速度"]||0,(t["速度"]||0)-e}));return i}},"87ab":function(e,t,n){"use strict";n("87d1")},"87d1":function(e,t,n){},a5b5:function(e,t,n){"use strict";var s=n("b85c"),i=(n("4de4"),n("d3b7"),n("b0c0"),n("6af8"));t.a=function(e,t){return e.filter((function(e){if(Object(i.a)(e.name,t))return!0;if(Object(i.a)(e.py,t))return!0;if(e.nameCandidates){var n,o=Object(s.a)(e.nameCandidates);try{for(o.s();!(n=o.n()).done;){var a=n.value;if(Object(i.a)(a,t))return!0}}catch(e){o.e(e)}finally{o.f()}}if(e.pyCandidates){var l,r=Object(s.a)(e.pyCandidates);try{for(r.s();!(l=r.n()).done;){var u=l.value;if(Object(i.a)(u,t))return!0}}catch(e){r.e(e)}finally{r.f()}}return!1}))}},b2fd:function(e,t,n){"use strict";t.a={shortFirst:{"攻":"攻击加成","暴":"暴击","命":"效果命中","抵":"效果抵抗","抗":"效果抵抗","生":"生命加成","防":"防御加成","首":"首领御魂"},shortLast:{"攻击加成":"攻","防御加成":"防","生命加成":"生","暴击":"暴","暴击伤害":"爆","效果命中":"命","效果抵抗":"抗","速度":"速"}}},c117:function(e,t,n){},cce9:function(e,t,n){"use strict";n("a9e3");var s=n("a508");s={components:{YuhunTable:n("44be").a,YuhunCard:s.a},props:{selectPosition:{type:Number},value:{type:String},selectMode:{type:Boolean}},data:function(){return{innerValue:null,isShowSelectTable:!1,numMap:[null,"一号位","二号位","三号位","四号位","五号位","六号位"]}},watch:{value:function(){this.innerValue=this.value},innerValue:function(){this.$emit("input",this.innerValue)}},mounted:function(){this.innerValue=this.value},methods:{chooseYuhun:function(e){e=e.data,this.isShowSelectTable=!1,this.innerValue=e["御魂ID"]},onLoadedYuhun:function(e){this.$emit("on-loaded-yuhun",e)}}},n=n("2877"),n=Object(n.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.innerValue&&!e.selectMode?[n("yuhun-card",{attrs:{id:e.$store.state.currentSet._id+e.innerValue},on:{"on-loaded-yuhun":e.onLoadedYuhun}},[n("el-button",{staticStyle:{padding:"0px"},attrs:{slot:"btn",icon:"el-icon-delete",type:"text",size:"mini"},on:{click:function(t){e.innerValue=null}},slot:"btn"})],1)]:[e._t("select",(function(){return[n("el-button",{staticStyle:{margin:"2px"},attrs:{type:"info",size:"mini"},on:{click:function(t){e.isShowSelectTable=!0}}},[e._v(" 选择"+e._s(e.selectPosition?e.numMap[e.selectPosition]:"御魂")+" ")])]}))],n("el-dialog",{staticStyle:{"text-align":"left"},attrs:{width:"900px","append-to-body":!0,title:"选择"+(e.selectPosition?e.numMap[e.selectPosition]:"")+"御魂",visible:e.isShowSelectTable,"close-on-click-modal":!1},on:{"update:visible":function(t){e.isShowSelectTable=t}}},[n("yuhun-table",{attrs:{"is-show-add-custom":!1,position:e.selectPosition},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(n){return e.chooseYuhun(t)}}},[e._v(" 选择 ")])]}}])})],1)],2)}),[],!1,null,"1059d8c9",null);t.a=n.exports},e854:function(e,t,n){"use strict";n("168d")},f381:function(e,t,n){"use strict";var s=n("eeef"),i={props:{yuhunName:{type:String}},computed:{backgroundColor:function(){var e=s.a[this.yuhunName];return e?e[1]:this.$mainColor},borderColor:function(){var e=s.a[this.yuhunName];return e?e[0]:"#f3eee7"}}};n("e854"),n=n("2877"),n=Object(n.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"type-name",style:{borderColor:this.borderColor,backgroundColor:this.backgroundColor}})}),[],!1,null,"5ec9aeb4",null);t.a=n.exports}}]);