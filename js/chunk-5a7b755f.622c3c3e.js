(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5a7b755f"],{"11da":function(e,t,n){"use strict";n("a434");var i=n("a508"),o=n("ae69"),a=n("fbd9").default.sumUpProp,r={filters:{round:function(e){return e?Math.round(e):0}},props:{yuhunList:{type:Array,required:!0},heroInfo:{type:Object,required:!0}},data:function(){return{propSum:null}},computed:{yuhunAttack:function(){var e=this.calYuhunAttack();return e?"+".concat(Math.round(e)):null},yuhunLife:function(){var e=this.calYuhunLife();return e?"+".concat(Math.round(e)):null},yuhunDefense:function(){var e=this.calYuhunDefense();return e?"+".concat(Math.round(e)):null},yuhunSpeed:function(){if(!this.propSum)return null;var e=this.propSum["速度"];return e?"+".concat(Math.round(e)):null},yuhunBonusRate:function(){if(!this.propSum)return null;var e=this.propSum["暴击"];return e?"+".concat(Math.round(e),"%"):null},allBonusDamage:function(){if(!this.propSum)return null;var e=this.propSum["暴击伤害"]+this.heroInfo.bonusDamage;return"".concat(Math.round(e),"%")},allHitRate:function(){if(!this.propSum)return null;var e=this.propSum["效果命中"]+(this.heroInfo.hitRate||0);return"".concat(Math.round(e),"%")},allMissRate:function(){if(!this.propSum)return null;var e=this.propSum["效果抵抗"]+(this.heroInfo.missRate||0);return"".concat(Math.round(e),"%")}},watch:{yuhunList:function(){this.propSum=a(this.yuhunList)}},mounted:function(){this.propSum=a(this.yuhunList)},methods:{calYuhunAttack:function(){var e=this.heroInfo,t=this.propSum;return t?e.attack*(e.attackRate||0)/100+e.attack*t["攻击加成"]/100+t["攻击"]:null},calYuhunLife:function(){var e=this.heroInfo,t=this.propSum;return t?e.life*(e.lifeRate||0)/100+e.life*t["生命加成"]/100+t["生命"]:null},calYuhunDefense:function(){var e=this.heroInfo,t=this.propSum;return t?e.defense*t["防御加成"]/100+t["防御"]:null}}};n("ba49"),n("2490"),n=n("2877"),r=Object(n.a)(r,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("el-card",{staticClass:"yuhun-suit-preview",attrs:{"body-style":{padding:"0px"}}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("div",{staticStyle:{color:"rgb(198, 53, 69)","font-weight":"bold","background-color":"rgb(243, 238, 231)",padding:"5px"}},[t("i",{staticClass:"el-icon-view",staticStyle:{"margin-right":"4px"}}),t("span",{staticStyle:{"font-weight":"bold"}},[e._v("穿戴预览")])])]),t("div",[t("div",{staticClass:"prop deep-color"},[t("span",{staticClass:"prop-name"},[e._v("攻击")]),t("span",{staticClass:"prop-value"},[t("span",{staticClass:"prop-value-base"},[e._v(e._s(e._f("round")(e.heroInfo.attack)))]),t("span",{staticClass:"prop-value-plus"},[e._v(e._s(e.yuhunAttack))])])]),t("div",{staticClass:"prop light-color"},[t("span",{staticClass:"prop-name"},[e._v("生命")]),t("span",{staticClass:"prop-value"},[t("span",{staticClass:"prop-value-base"},[e._v(e._s(e._f("round")(e.heroInfo.life)))]),t("span",{staticClass:"prop-value-plus"},[e._v(e._s(e.yuhunLife))])])]),t("div",{staticClass:"prop deep-color"},[t("span",{staticClass:"prop-name"},[e._v("防御")]),t("span",{staticClass:"prop-value"},[t("span",{staticClass:"prop-value-base"},[e._v(e._s(e._f("round")(e.heroInfo.defense)))]),t("span",{staticClass:"prop-value-plus"},[e._v(e._s(e.yuhunDefense))])])]),t("div",{staticClass:"prop light-color"},[t("span",{staticClass:"prop-name"},[e._v("速度")]),t("span",{staticClass:"prop-value"},[t("span",{staticClass:"prop-value-base"},[e._v(e._s(e.heroInfo.speed))]),t("span",{staticClass:"prop-value-plus"},[e._v(e._s(e.yuhunSpeed))])])]),t("div",{staticClass:"prop deep-color"},[t("span",{staticClass:"prop-name"},[e._v("暴击")]),t("span",{staticClass:"prop-value"},[t("span",{staticClass:"prop-value-base"},[e._v(e._s(e.heroInfo.bonusRate)+"%")]),t("span",{staticClass:"prop-value-plus"},[e._v(e._s(e.yuhunBonusRate))])])]),t("div",{staticClass:"prop light-color"},[t("span",{staticClass:"prop-name"},[e._v("暴击伤害")]),t("span",{staticClass:"prop-value"},[t("span",{staticClass:"prop-value-base"}),t("span",{staticClass:"prop-value-plus"},[e._v(e._s(e.allBonusDamage))])])]),t("div",{staticClass:"prop deep-color"},[t("span",{staticClass:"prop-name"},[e._v("效果命中")]),t("span",{staticClass:"prop-value"},[t("span",{staticClass:"prop-value-base"}),t("span",{staticClass:"prop-value-plus"},[e._v(e._s(e.allHitRate))])])]),t("div",{staticClass:"prop light-color"},[t("span",{staticClass:"prop-name"},[e._v("效果抵抗")]),t("span",{staticClass:"prop-value"},[t("span",{staticClass:"prop-value-base"}),t("span",{staticClass:"prop-value-plus"},[e._v(e._s(e.allMissRate))])])])])])}),[],!1,null,"99e8fc76",null).exports,i={components:{YuhunCard:i.a,YuhunSuitPreview:r},mixins:[o.a],props:{combo:{type:Object},list:{type:Array},isShowPropScore:{type:Boolean},isShow2Precision:{type:Boolean},isMixHeroData:{type:Boolean},validProps:{type:Array},isShowCollectedInfo:{type:Boolean},heroInfo:{type:Object}},data:function(){return{collectedNames:null,yuhunList:[null,null,null,null,null,null,null]}},computed:{hasLoadedAllYuhun:function(){if(this.list)return!0;for(var e=1;e<=6;e++)if(!this.yuhunList[e])return!1;return!0}},watch:{collection:{handler:function(){this.checkIsCollected()},deep:!0},list:function(){this.list&&(this.yuhunList=this.list),this.checkIsCollected()}},mounted:function(){this.checkIsCollected(),this.list&&(this.yuhunList=this.list)},methods:{checkIsCollected:function(){if(this.isShowCollectedInfo){if(!(e=this.combo))for(var e={},t=0;t<6;t++){var n=this.list[t];n&&(e["y"+(t+1)]=n._id)}this.collectedNames=this.checkCollectedName(e)}},onLoadedYuhun:function(e){this.combo&&this.yuhunList.splice(e["位置"],1,e)}}},r=Object(n.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"flex","flex-direction":"column"}},[n("div",{staticClass:"flex-row flex-center",staticStyle:{overflow:"auto","padding-bottom":"10px"}},[e.heroInfo&&e.hasLoadedAllYuhun?n("yuhun-suit-preview",{attrs:{"yuhun-list":e.yuhunList,"hero-info":e.heroInfo}}):e._e(),e.combo?[e._l([1,2,3,4,5,6],(function(t){return[e.combo["y"+t]?n("YuhunCard",{key:"yuhun"+t,attrs:{id:e.combo["y"+t],"is-show-prop-score":e.isShowPropScore,"valid-props":e.validProps,"is-show2precision":e.isShow2Precision},on:{"on-loaded-yuhun":e.onLoadedYuhun}}):e._e()]}))]:[e._l(e.list,(function(t){return[t?n("YuhunCard",{key:"yuhun"+t._id,attrs:{data:t,"is-show-prop-score":e.isShowPropScore,"valid-props":e.validProps,"is-show2precision":e.isShow2Precision}}):e._e()]}))]],2),e._t("default"),e.isShowCollectedInfo&&e.collectedNames?n("div",{staticStyle:{"text-align":"center","font-size":"14px","margin-top":"5px"}},[e._m(0),e._l(e.collectedNames,(function(t){return n("div",{key:t},[n("span",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(t))])])}))],2):e._e()],2)}),[function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("div",[t("i",{staticClass:"el-icon-star-on"}),e._v("已收藏在：")])}],!1,null,null,null);t.a=r.exports},"1b10":function(e,t,n){},2490:function(e,t,n){"use strict";n("b627")},"2d09":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n("b0c0");var i=n("8c65");function o(e){for(var t=0;t<i.a.length;t++){var n=i.a[t];if(n.name===e)return n}}},"300f":function(e,t,n){},3186:function(e,t,n){"use strict";var i=n("2d09"),o=n("7797").default,a=o.calTotalAttack,r=o.calSimpleLife,s=o.calSimpleDefense;o={methods:{mixin_mixHeroData:function(e,t){t||e.setting&&(t=Object(i.a)(e.setting.hero),e.setting.heroInfo=t),t&&(e["攻击total"]=a(t,e),e["生命total"]=r(t,e),e["防御total"]=s(t,e),e["暴击伤害total"]=t.bonusDamage+(e["暴击伤害"]||0),e["暴击total"]=(t.bonusRate||0)+(e["暴击"]||0),e["速度total"]=t.speed+(e["速度"]||0),e["效果命中total"]=(t.hitRate||0)+(e["效果命中"]||0),e["效果抵抗total"]=(t.missRate||0)+(e["效果抵抗"]||0),this.$forceUpdate())}}},n=n("2877"),n=Object(n.a)(o,void 0,void 0,!1,null,null,null);t.a=n.exports},"3af5":function(e,t,n){"use strict";var i=n("b85c"),o=(n("a9e3"),n("b0c0"),n("4e82"),n("fb6a"),n("af21")),a=n("2ed2"),r=n("e1bd"),s=n("c69e"),l=n("c997"),c=n("3186"),u=n("11da"),p={props:{ykn:{type:Object}},data:function(){return{result:null,resultTypeMap:{Y:"success",K:"warning",N:"danger"}}},watch:{ykn:function(){this.result=this.check()}},mounted:function(){this.result=this.check()},methods:{check:function(){if(this.ykn)return this.ykn.remainHp<1?"Y":this.ykn.remainHp/this.ykn.totalHp<.1?"K":"N"}}};n=n("2877"),p=Object(n.a)(p,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return e.result?t("div",[t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Y"!==e.result?"最大剩余血量："+e.ykn.remainHp:"体质合格",placement:"top"}},[t("el-tag",{attrs:{size:"mini",type:e.resultTypeMap[e.result]}},[e._v(" "+e._s(e.result)+" ")])],1)],1):e._e()}),[],!1,null,"113b8fb7",null).exports,u={components:{YuhunCardList:u.a,PropValue:a.a,YKN:p},mixins:[c.a],props:{isShowUnimCols:{type:Boolean,default:!1},isShowCollectedInfo:{type:Boolean},setting:{type:Object},comboList:{type:Array},middleProp:{type:String},maxHeight:{type:Number,default:500},isShowPropScore:{type:Boolean,default:!1},isShow2Precision:{type:Boolean},isMixHeroData:{type:Boolean},validProps:{type:Array},isShowPage:{type:Boolean,default:!0}},data:function(){return{calTargetMap:o.a,displayCols:r.a,unimCols:s.a,mixHeroDataProps:l.a,pageSize:10,currentPage:1,total:0,sortProp:null,sortOrder:null,toggleRowExpansion:!1}},computed:{totalColumnLabel:function(){return this.setting?"langchuanguitun"===this.setting.calTarget&&"鬼王酒吞童子"===this.setting.heroInfo.name?"输出最低生命":this.calTargetMap[this.setting.calTarget]:"总面板"},isShowJinDzn:function(){return this.setting&&"langchuanguitun"===this.setting.calTarget&&"鬼王酒吞童子"===this.setting.heroInfo.name},list:function(){var e,t=this,n=this.comboList;if(this.total=n.length,this.isMixHeroData){var o,a=Object(i.a)(n);try{for(a.s();!(o=a.n()).done;){var r=o.value,s=r;this.middleProp&&(s=r[this.middleProp]),this.mixHeroData(s)}}catch(n){a.e(n)}finally{a.f()}}this.sortProp&&(e=this.sortProp,n.sort((function(n,i){return n=t.middleProp?(n[t.middleProp][e]||0)-(i[t.middleProp][e]||0):(n[e]||0)-(i[e]||0),"descending"===t.sortOrder?-n:n})));var l=(this.currentPage-1)*this.pageSize,c=l+this.pageSize;return n.slice(l,c)}},methods:{mixHeroData:function(e){var t=this.middleProp?e.setting&&e.setting.heroInfo:this.setting&&this.setting.heroInfo;t&&this.mixin_mixHeroData(e,t)},sortChange:function(e){var t=e.prop;e=e.order;this.sortProp=t,this.sortOrder=e}}},a=Object(n.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{ref:"table",staticStyle:{"margin-top":"5px"},attrs:{data:e.list,stripe:"",border:"","max-height":0===e.maxHeight?null:e.maxHeight,size:"mini","default-sort":{prop:"总面板",order:"descending"}},on:{"sort-change":e.sortChange,"expand-change":function(t){e.toggleRowExpansion=!0}}},[n("el-table-column",{attrs:{type:"expand",label:"展开"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.toggleRowExpansion?n("div",{staticStyle:{display:"flex",overflow:"auto"}},[n("yuhun-card-list",{attrs:{combo:e.middleProp?t.row[e.middleProp]:t.row,"is-show-prop-score":e.isShowPropScore,"is-show-collected-info":e.isShowCollectedInfo,"valid-props":e.validProps,"is-show2precision":e.isShow2Precision,"hero-info":e.setting&&e.setting.heroInfo}})],1):e._e()]}}])}),e.middleProp?n("el-table-column",{attrs:{label:"名称",width:"120","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.label)+" ")]}}],null,!1,3382659611)}):e._e(),n("el-table-column",{attrs:{sortable:"custom",property:"总面板",label:e.totalColumnLabel,width:"130","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("prop-value",{staticStyle:{"font-weight":"bold"},attrs:{value:(e.middleProp?t.row[e.middleProp]:t.row)["总面板"],"is-show2precision":e.isShow2Precision,"is-show-plus":!e.isMixHeroData}})]}}])}),e.isShowJinDzn?n("el-table-column",{attrs:{sortable:"custom",property:"hpJinMinDzn",label:"地震鲶最低",width:"100","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("prop-value",{staticStyle:{"font-weight":"bold"},attrs:{value:(e.middleProp?t.row[e.middleProp]:t.row).hpJinMinDzn,"is-show2precision":e.isShow2Precision,"is-show-plus":!e.isMixHeroData}})]}}],null,!1,434748013)}):e._e(),e.isMixHeroData?[e.setting&&-1<["damageWithTongnan","langchuanguitun"].indexOf(e.setting.calTarget)?[n("el-table-column",{attrs:{"min-with":"130",sortable:"custom",property:"输出面板",label:"输出面板"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("prop-value",{attrs:{prop:"输出面板",value:(e.middleProp?t.row[e.middleProp]:t.row)["输出面板"],"is-show2precision":e.isShow2Precision,"is-show-plus":!e.isMixHeroData}})]}}],null,!1,1900549964)})]:e._e(),e.setting&&"rilun"===e.setting.calTarget?[n("el-table-column",{attrs:{"min-with":"130",sortable:"custom",property:"输出面板",label:"输出面板"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("prop-value",{attrs:{prop:"输出面板",value:(e.middleProp?t.row[e.middleProp]:t.row)["输出面板"],"is-show2precision":e.isShow2Precision,"is-show-plus":!e.isMixHeroData}})]}}],null,!1,1900549964)}),n("el-table-column",{attrs:{"min-with":"110",sortable:"custom",property:"最低期望",label:"最低期望"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("prop-value",{attrs:{prop:"最低期望",value:(e.middleProp?t.row[e.middleProp]:t.row)["最低期望"],"is-show2precision":e.isShow2Precision,"is-show-plus":!e.isMixHeroData}})]}}],null,!1,4252784306)}),n("el-table-column",{attrs:{"min-with":"110",sortable:"custom",property:"最高期望",label:"最高期望"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("prop-value",{attrs:{prop:"最高期望",value:(e.middleProp?t.row[e.middleProp]:t.row)["最高期望"],"is-show2precision":e.isShow2Precision,"is-show-plus":!e.isMixHeroData}})]}}],null,!1,892214628)})]:e._e(),e.setting&&"yunwaijingDark"===e.setting.calTarget?[n("el-table-column",{attrs:{"min-with":"110",property:"YKN"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("y-k-n",{attrs:{ykn:(e.middleProp?t.row[e.middleProp]:t.row).YKN}})]}}],null,!1,1764675306)},[n("span",{attrs:{slot:"header"},slot:"header"},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"魂土献祭流体质评分指标，非魂土场景可忽略",placement:"top"}},[n("span",{staticStyle:{"font-weight":"bold"}},[e._v(" 体质评分 "),n("i",{staticClass:"el-icon-info"})])])],1)])]:e._e(),e._l(e.mixHeroDataProps,(function(t){return[e.isShowUnimCols||e.unimCols.indexOf(t)<0||"攻击"===t?n("el-table-column",{key:"col"+t,attrs:{"min-width":2===t.length?"80":"110",sortable:"custom",property:t+"total",label:t,"show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(i){return[n("prop-value",{attrs:{prop:t,value:(e.middleProp?i.row[e.middleProp]:i.row)[t+"total"],"is-show2precision":e.isShow2Precision,"is-show-plus":!e.isMixHeroData}})]}}],null,!0)}):e._e()]}))]:[e._l(e.displayCols,(function(t){return[e.isShowUnimCols||e.unimCols.indexOf(t)<0?n("el-table-column",{key:"col"+t,attrs:{"min-width":2===t.length?"80":"110",sortable:"custom",property:t,label:t,"show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(i){return[n("prop-value",{attrs:{prop:t,value:(e.middleProp?i.row[e.middleProp]:i.row)[t],"is-show2precision":e.isShow2Precision,"is-show-plus":!e.isMixHeroData}})]}}],null,!0)}):e._e()]}))],n("el-table-column",{attrs:{"min-with":"90",sortable:"custom",property:"score"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"font-weight":"bold"},domProps:{textContent:e._s((e.middleProp?t.row[e.middleProp]:t.row).score)}}),e._v(" / "),n("span",{staticStyle:{color:"#999999"},domProps:{textContent:e._s((e.middleProp?t.row[e.middleProp]:t.row).scoreTotal)}})]}}])},[n("el-tooltip",{attrs:{slot:"header",effect:"dark",content:"套装有效总分/套装理论满分，普通御魂满分为9分，首领御魂为12分（不考虑防御加成的16分特殊情况",placement:"top"},slot:"header"},[n("span",[e._v("总分")])])],1),n("el-table-column",{attrs:{width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._t("default",null,{combo:t.row})]}}],null,!0)})],2),e.isShowPage?n("div",{staticStyle:{"text-align":"center","margin-top":"5px"}},[n("el-pagination",{attrs:{background:"","page-size":e.pageSize,"current-page":e.currentPage,layout:"prev, pager, next",total:e.total},on:{"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1):e._e()],1)}),[],!1,null,"2d8a2358",null);t.a=a.exports},"58b3":function(e,t,n){"use strict";var i=n("1da1"),o=(n("96cf"),n("f279")),a=n("91a2");o={mixins:[o.a,a.a],methods:{saveCollection:function(e,t){var n=this;return Object(i.a)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return n.$store.commit("setCurrentCollections",t),i.next=3,n.$collection.update({setId:{$eq:e}},{list:t,updatedAt:new Date});case 3:if(n.$canSetSync(e))return i.next=7,n.checkAndSync();i.next=7;break;case 7:case"end":return i.stop()}}),i)})))()}}},a=n("2877"),n=Object(a.a)(o,void 0,void 0,!1,null,null,null);t.a=n.exports},"5e97":function(e,t,n){"use strict";var i=n("b85c"),o=n("a26d"),a=5519.7499009901;function r(e,t,n,i,o,r,s,l){return i=3<arguments.length&&void 0!==i?i:.21,o=4<arguments.length?o:void 0,r=5<arguments.length?r:void 0,s=6<arguments.length&&void 0!==s?s:8728.453,function(e,t){var n,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:.21,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0,a=4<arguments.length&&void 0!==arguments[4]&&arguments[4],r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:8728.453,s=6<arguments.length&&void 0!==arguments[6]?arguments[6]:.01;n=o?14015:14584;for(var l=(n+16500)/2,c=16500,p=n;;)if((a?function(e,t,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:.21,o=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,a=5<arguments.length&&void 0!==arguments[5]?arguments[5]:8728.453,r=!(6<arguments.length&&void 0!==arguments[6])||arguments[6],s=.1*e;t=e-(a/1.6+s-t);if(t<1)return!1;var l=1;return 0<o&&(l=2),o=Math.min(t+n,e),t=u(o/(e+1))*l+.54+i,n=a/(1+t),r||(n+=s),t=o-n,!(t<1)&&(r=u(t/(e+1))*l+.54+i,o=t-(a/(1+r)+s),!(o<1)&&(n=u(o/(e+1))*l+.54+i,o-(a/(1+n)+s)))}(l,e,t,i,o,r,!0):d(l,e,t,i,o,r))<1)l=((p=l)+c)/2;else{if(c-p<s)break;l=((c=l)+p)/2}return l}(e,function(e,t,n,i,o){return n=1.25*n*function(e,t,n){return e=n<e?t:t+e-n,1+u(e/(t+1))/2}(e,t,o),i&&(n*=.7),n}(e,t,n,o,7<arguments.length&&void 0!==l?l:a),i,o,r,s)}function s(e,t){var n,o=0,a=Object(i.a)(e);try{for(a.s();!(n=a.n()).done;){var r=n.value;if(r["御魂类型"]===t&&2===++o)return!0}}catch(e){a.e(e)}finally{a.f()}return!1}function l(e,t,n){return e-(2<arguments.length&&void 0!==n?n:8728.453)-.1*e+t}function c(e,t,n){var i;n=2<arguments.length&&void 0!==n?n:a,t=t<n?(i=t-n,e):(i=0,e+t-n),e=u(t/(e+1));return t+Math.min(-n/(1+e)+i,0)}function u(e){return.01*Math.floor(100-100*e)}function p(e,t,n,i){t=1<arguments.length&&void 0!==t?t:.21,n=2<arguments.length?n:void 0,i=3<arguments.length&&void 0!==i?i:a;var o=0,r=e-i/(1+t+(o=n?.54:o)),s=(r=r-i/(1+(t+u(r/(e+1))+o)),1+u(r/(e+1)));return n?(n=t+u(r/(e+1))+o,1+u((r-i/(1+n))/(e+1))):s}function d(e,t,n,i,o,a){i=3<arguments.length&&void 0!==i?i:.21,o=4<arguments.length&&void 0!==o?o:0,a=5<arguments.length&&void 0!==a?a:8728.453;var r=.1*e,s=(t=e-(a+r-t),1);return 0<o&&(s=2),o=t-(a/(1+u(t/(e+1))*s)+r),!(o<1)&&(t=Math.min(o+n,e),o=t-(a/(1+(u(t/(e+1))*s+i))+r),o-(a/(1+(u(o/(e+1))*s+i))+r))}t.a={preCalc:function(e){var t=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1231.9;return.1+Math.floor((e-.2*t)/300)/100}(e.hcAttack);return{minShield:(e=function(e){for(var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:8728.453,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:5519.74990099,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:.01,o=4350,a=2500,r=6200;;)if(l(e,o,t)<1)o=((a=o)+r)/2;else if(o=((r=o)+a)/2,r-a<i)break;for(var s=(o+6200)/2,u=o,p=6200;;)if(1<c(e,s,n))s=((p=s)+u)/2;else if(s=((u=s)+p)/2,p-u<i)break;return s}(e.hcLife)).minShield,maxShield:e.maxShield,ratioHc:t}},calc:function(e,t,n,i){var d,h,f,m,v,g,b,w=(S=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{}).minShield,y=S.maxShield,S=S.ratioHc;return"鬼王酒吞童子"===n.hero?(v=e,g=t,d=n,f=i,w=w,y=y,h=S,m=Object(o.c)(v,g),(b=m*Object(o.a)(v,g)*.1)<w||y<b||!function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:8728.453,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:a;if(!(1<c(e,t,i))&&!(l(e,t,n)<1))return 1}(d.hcLife,b)?0:(w=s(f,"地震鲶"),!(y=r(b,d.hcLife,d.hcDamage,h,.3,w))||m<y||!(f=r(b,d.hcLife,d.hcDamage,h,0,w))?0:(g["输出面板"]=Object(o.e)(v,g),w?(g.hpJinMinDzn=f,r(b,d.hcLife,d.hcDamage,h,0,!1)):f))):"吸血姬"===n.hero?(m=e,y=t,v=S,g=s(w=i,"地震鲶"),w=s(w,"荒骷髅"),b=Object(o.c)(m,y),m=Object(o.e)(m,y),b=function(e,t){var n=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:.21,o=4<arguments.length?arguments[4]:void 0,r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:a,s=0;o&&(s=.54);var l=e-r/(1+i+s),c=i+u(l/(e+1))+s;l-=r/(1+c);return o=o?(c=i+u(l/(e+1))+s,l-r/(1+c)):l,i=u(o/(e+1)),s=.99*t*.94*(i=(1+i)*(1+4*i))*300/935.008*1.5,n&&(s*=1.1),s}(b,m,w,v,g),y["输出面板"]=m,b):(d=e,h=t,f=S,n=s(n=i,"地震鲶"),w=Object(o.c)(d,h),d=Object(o.e)(d,h),w=p(w,f,n),f=d*w,h["输出面板"]=d,f)}}},"6b61":function(e,t,n){"use strict";var i=n("b85c"),o=n("1da1"),a=(n("96cf"),n("4de4"),n("d3b7"),n("c740"),n("a434"),n("159b"),n("99af"),n("b0c0"),n("d23a")),r={data:function(){return{settingService:Object(a.a)("setting",this),setting:null}},watch:{setting:{handler:function(){this.settingService.set(this.setting)},deep:!0}},mounted:function(){this.settingReload()},methods:{settingReload:function(){this.setting=this.settingService.get()||{"collection.isExpandAll":!0}}}},s=n("2877"),l=(r=Object(s.a)(r,void 0,void 0,!1,null,"122d8dfe",null).exports,n("c997")),c=n("e1bd"),u=n("3186"),p=(u={components:{ComboTable:n("3af5").a},mixins:[u.a],props:{suit:{type:Object,required:!0},isShowApplySettingBtn:{type:Boolean,default:!0},disabled:{type:Boolean}},data:function(){return{mixHeroDataProps:l.a,yuhunProps:c.a,isShow:!1}},methods:{onShow:function(){var e=this;this.isShow=!0,this.suit.data.hasMixed||this.mixin_mixHeroData(this.suit.data),this.$nextTick((function(){e.$refs.table&&e.$refs.table.$refs.table.toggleRowExpansion(e.suit.data)}))},changeSetting:function(){var e=this.suit.data.setting;this.$store.commit("changeSetting",e)}}},u=(n("c71c"),Object(s.a)(u,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("el-popover",{staticClass:"suit-tooltip-page",attrs:{trigger:"hover",disabled:e.disabled,"open-delay":1e3},on:{show:e.onShow}},[t("div",{attrs:{slot:"reference"},slot:"reference"},[e._t("default")],2),e.isShow?t("div",[t("div",{staticClass:"row"},[t("span",{staticClass:"text-bold"},[e._v(e._s(e.suit.name))]),t("q-space"),e.isShowApplySettingBtn?[t("el-button",{attrs:{type:"success",size:"mini",plain:""},on:{click:e.changeSetting}},[e._v(" 应用此计算条件 ")])]:e._e()],2),t("combo-table",{ref:"table",attrs:{"combo-list":[e.suit.data],"is-show-unim-cols":!0,"is-show-prop-score":!1,"is-show2precision":!0,"is-mix-hero-data":!0,"is-show-collected-info":!1,"is-show-page":!1,setting:e.suit.data.setting}})],1):e._e()])}),[],!1,null,"41589b16",null).exports),n("9d39")),d=n("b1a0"),h=n("58b3");u={components:{SuitTooltip:u},mixins:[r,p.a,d.a,h.a],props:{showCheckbox:{type:Boolean,default:!1},showOnlyFolder:{type:Boolean,default:!0},showEdit:{type:Boolean,default:!0},checkStrictly:{type:Boolean,default:!0},isShowTooltip:{type:Boolean,default:!0},isShowApplySettingBtn:{type:Boolean,default:!0},isSingleSelect:{type:Boolean,default:!0}},data:function(){return{newName:null,editName:null,isShowNewName:{},isShowEditName:{},isSelectOrUnselect:!1,ifTree:!0}},watch:{isSelectOrUnselect:function(){this.doCheck()}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:e.$refs.tree&&e.$refs.tree.filter();case 3:case"end":return t.stop()}}),t)})))()},methods:{filterNode:function(e,t){return!this.showOnlyFolder||"folder"===t.type},append:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i={id:(new Date).getTime(),label:t.newName,type:"folder",children:[]},(e?e.children:t.currentCollections).push(i),t.isShowNewName={},t.newName=null,n.next=6,t.saveCollection(t.currentSet._id,t.currentCollections);case 6:t.$refs.tree&&t.$refs.tree.filter();case 7:case"end":return n.stop()}}),n)})))()},edit:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.label=t.editName,t.isShowEditName={},t.editName=null,n.next=5,t.saveCollection(t.currentSet._id,t.currentCollections);case 5:t.$refs.tree&&t.$refs.tree.filter();case 6:case"end":return n.stop()}}),n)})))()},remove:function(e,t){var n=this,i="删除收藏夹",a="将顺带删除此收藏夹下所有套装方案，确定删除？";"combo"===t.type&&(i="删除套装",a="将删除此套装，确定删除？"),this.$confirm(a,i).then(Object(o.a)(regeneratorRuntime.mark((function i(){var o,a;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return o=e.parent,o=o.data.children||o.data,a=o.findIndex((function(e){return e.id===t.id})),o.splice(a,1),i.next=6,n.saveCollection(n.currentSet._id,n.currentCollections);case 6:n.$refs.tree&&n.$refs.tree.filter();case 7:case"end":return i.stop()}}),i)})))).catch((function(){}))},nodeClick:function(e){this.$emit("onClick",e)},check:function(e,t){var n=this;this.isSingleSelect&&this.$nextTick((function(){n.getTree().setCheckedKeys([e.id])})),this.$emit("check",e,t)},doCheck:function(){var e=this;this.currentCollections.forEach((function(t){e.getTree().setChecked(t.id,e.isSelectOrUnselect,!0)})),this.$emit("check",null,{checkedNodes:this.getTree().getCheckedNodes()})},getTree:function(){return this.$refs.tree},addDataToChecked:function(e,t,n){var i=this,a=this.$refs.tree.getCheckedKeys();this.iterateTreeNode(this.currentCollections,(function(i){var o;-1<a.indexOf(i.id)&&("folder"===i.type?Array.isArray(e)?i.children=i.children.concat(e):(o={id:(new Date).getTime(),label:n||t,type:"combo",name:t,data:e},i.children.push(o)):Array.isArray(e)||(i.data=e,i.name=t,i.label=n||i.label))})),this.$nextTick(Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.saveCollection(i.currentSet._id,i.currentCollections);case 2:i.$refs.tree&&i.$refs.tree.filter();case 3:case"end":return e.stop()}}),e)}))))},iterateTreeNode:function(e,t,n){if(e&&0<e.length){var o,a=Object(i.a)(e);try{for(a.s();!(o=a.n()).done;){var r=o.value;t(r,n),r.children&&0<r.children.length&&this.iterateTreeNode(r.children,t,r)}}catch(e){a.e(e)}finally{a.f()}}},allowDrop:function(e,t,n){return"folder"===t.data.type||"inner"!==n},allowDrag:function(){return!0},onNodeDrop:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.saveCollection(e.currentSet._id,e.currentCollections);case 2:e.$refs.tree&&e.$refs.tree.filter();case 3:case"end":return t.stop()}}),t)})))()},toggleExpand:function(){var e=this,t=(this.ifTree=!1,this.setting["collection.isExpandAll"]=!this.setting["collection.isExpandAll"],this.$refs.tree.getCheckedKeys());this.$nextTick((function(){e.ifTree=!0,e.$nextTick((function(){e.$refs.tree.filter(),e.$refs.tree.setCheckedKeys(t)}))}))}}},n("fbbc"),r=Object(s.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.currentSet?n("div",{staticStyle:{position:"relative","max-height":"400px",overflow:"auto"}},[n("div",{staticStyle:{position:"relative",display:"flex","align-items":"center"}},[e.showEdit?n("el-popover",{staticStyle:{"padding-left":"30px"},attrs:{placement:"top",width:"200"},model:{value:e.isShowNewName.root,callback:function(t){e.$set(e.isShowNewName,"root",t)},expression:"isShowNewName.root"}},[n("div",[e._v("新建根收藏夹")]),n("el-input",{staticStyle:{margin:"10px 0"},attrs:{size:"mini",autofocus:""},model:{value:e.newName,callback:function(t){e.newName=t},expression:"newName"}}),n("div",{staticStyle:{"text-align":"right",margin:"0"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){e.isShowNewName.root=!1}}},[e._v(" 取消 ")]),n("el-button",{attrs:{type:"primary",disabled:!e.newName,size:"mini"},on:{click:function(){return e.append()}}},[e._v(" 确定 ")])],1),n("el-button",{attrs:{slot:"reference",title:"新建根收藏夹",type:"text",icon:"el-icon-circle-plus",size:"mini"},slot:"reference"})],1):e._e(),e.showEdit?e._e():n("el-tooltip",{attrs:{content:"全选/全不选",placement:"top"}},[n("el-checkbox",{staticStyle:{"margin-left":"8px"},model:{value:e.isSelectOrUnselect,callback:function(t){e.isSelectOrUnselect=t},expression:"isSelectOrUnselect"}},[n("i",{staticClass:"el-icon-success",staticStyle:{"margin-left":"-7px"}})])],1),n("el-button",{staticClass:"tool-btn",staticStyle:{position:"absolute",left:"42px",top:"-5px"},attrs:{title:"展开/折叠",type:"text",icon:"el-icon-d-caret",size:"mini"},on:{click:e.toggleExpand}})],1),e.ifTree&&e.setting?n("el-tree",{ref:"tree",attrs:{"check-strictly":e.checkStrictly,data:e.currentCollections,"show-checkbox":e.showCheckbox,"check-on-click-node":e.showCheckbox,"filter-node-method":e.filterNode,"default-expand-all":e.setting["collection.isExpandAll"],"node-key":"id",draggable:"","allow-drop":e.allowDrop,"allow-drag":e.allowDrag,"expand-on-click-node":!1},on:{"node-click":e.nodeClick,check:e.check,"node-drop":e.onNodeDrop},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.node,o=t.data;return n("span",{staticClass:"custom-tree-node"},["folder"!==o.type?n("SuitTooltip",{attrs:{disabled:!e.isShowTooltip,suit:o,"is-show-apply-setting-btn":e.isShowApplySettingBtn}},[n("div",[n("i",{staticClass:"el-icon-user-solid",staticStyle:{"padding-left":"5px"}}),e._v(" "+e._s(i.label)+" ")])]):n("div",[n("div",[n("i",{staticClass:"el-icon-folder-opened",staticStyle:{"padding-left":"5px"}}),e._v(" "+e._s(i.label)+" ")])]),e.showEdit?n("span",[n("el-popover",{attrs:{placement:"top",width:"200"},model:{value:e.isShowEditName[i.id],callback:function(t){e.$set(e.isShowEditName,i.id,t)},expression:"isShowEditName[node.id]"}},[n("div",[e._v("修改"+e._s("folder"===o.type?"收藏夹":"套装")+"名称")]),n("el-input",{staticStyle:{margin:"10px 0"},attrs:{size:"mini",autofocus:""},model:{value:e.editName,callback:function(t){e.editName=t},expression:"editName"}}),n("div",{staticStyle:{"text-align":"right",margin:"0"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){e.isShowEditName[i.id]=!1}}},[e._v("取消")]),n("el-button",{attrs:{type:"primary",disabled:!e.editName,size:"mini"},on:{click:function(){return e.edit(o)}}},[e._v("确定")])],1),n("el-button",{attrs:{slot:"reference",title:"修改名称",type:"text",icon:"el-icon-edit",size:"mini"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.editName=i.label}},slot:"reference"})],1),"folder"===o.type?n("el-popover",{attrs:{placement:"top",width:"200"},model:{value:e.isShowNewName[i.id],callback:function(t){e.$set(e.isShowNewName,i.id,t)},expression:"isShowNewName[node.id]"}},[n("div",[e._v("新建子收藏夹")]),n("el-input",{staticStyle:{margin:"10px 0"},attrs:{size:"mini",autofocus:""},model:{value:e.newName,callback:function(t){e.newName=t},expression:"newName"}}),n("div",{staticStyle:{"text-align":"right",margin:"0"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){e.isShowNewName[i.id]=!1}}},[e._v("取消")]),n("el-button",{attrs:{type:"primary",disabled:!e.newName,size:"mini"},on:{click:function(){return e.append(o)}}},[e._v("确定")])],1),n("el-button",{attrs:{slot:"reference",title:"新建子收藏夹",type:"text",icon:"el-icon-circle-plus",size:"mini"},on:{click:function(e){e.stopPropagation(),e.preventDefault()}},slot:"reference"})],1):e._e(),n("el-button",{attrs:{type:"text",title:"删除",icon:"el-icon-remove",size:"mini"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),function(){return e.remove(i,o)}.apply(null,arguments)}}})],1):e._e()],1)}}],null,!1,4247939604)}):e._e()],1):e._e()}),[],!1,null,"266d745d",null);t.a=r.exports},"736e":function(e,t,n){},7797:function(e,t,n){"use strict";n.r(t),n("b0c0");var i=n("a26d"),o=n("5e97");function a(e,t){var n=(t["暴击"]+e.bonusRate)/100;return 1<n&&(n=1),Object(i.e)(e,t)*n+(1-n)*Object(i.d)(e,t)}function r(e,t){return a(e,t)*Object(i.a)(e,t)}function s(e,t,n){var o=Object(i.e)(e,t);n=.3*n*1.5*1.01/Object(i.c)(e,t);return 1<n&&(n=1),e=(1+.01*Math.floor(100-100*n))*o,t["输出面板"]=o,e}function l(e,t){return Object(i.c)(e,t)*Object(i.a)(e,t)}function c(e,t){var n=Object(i.e)(e,t),o=function(e,t,n,i){n=300/(300+n);var o=2431.463193*1.5*n,a=Math.floor(o/t*100)/100;"鬼王酒吞童子"===i&&(a*=2);a=6926.96784*n*(1-a);var r=Math.floor((o+a)/t*100)/100;"鬼王酒吞童子"===i&&(r*=2),r=5476.198386*n*(1-r),o+=a,"鬼王酒吞童子"!==i&&"铁鼠"!==i&&(o+=r);var s;a=6789.80016*n,r=Math.floor(o/t*100)/100,n=Math.floor(a/t*100)/100;return o="鬼王酒吞童子"===i?(s=(1+(r*=2))*e,(1+(n*=2))*e):"铁鼠"===i?(s=(1.15+r)*e,(1.15+n)*e):(s=(1.45+r)*e,(1.45+n)*e),{maxDamage:s,minDamage:o}}(n,Object(i.c)(e,t),Object(i.f)(e,t),e.name),a=o.maxDamage;o=o.minDamage;return t["输出面板"]=n,t["最低期望"]=o,t["最高期望"]=a,"鬼王酒吞童子"===e.name?a:o}t.default={calTotal:function(e,t,n,u,p){var d,h,f;switch(e.calTarget){case"damage":d=Object(i.e)(t,n);break;case"damageDouble":d=Object(i.b)(t,n);break;case"damageMean":d=a(t,n);break;case"damageSpiderMean":d=r(t,n);break;case"damageWithTongnan":d=s(t,n,e.tongnanLife);break;case"langchuanguitun":d=o.a.calc(t,n,e,u,p);break;case"rilun":d=c(t,n);break;case"yunwaijingDark":h=t,f=n,d=(Object(i.d)(h,f)+2*Object(i.f)(h,f))*Object(i.a)(h,f);break;case"life":d=l(t,n);break;case"simpleLife":d=Object(i.c)(t,n);break;case"attack":d=Object(i.d)(t,n);break;case"defense":d=Object(i.f)(t,n);break;case"equivalentLife":h=n,d="神堕八岐大蛇"===(f=t).name?3.8*Object(i.d)(f,h)*(300+Object(i.f)(f,h))/300:Object(i.c)(f,h)*(300+Object(i.f)(f,h))/300;break;case"doubleRate":d=n["效果命中"]+(t.hitRate||0)+n["效果抵抗"]+(t.missRate||0);break;case"hitRate":d=n["效果命中"]+(t.hitRate||0);break;case"missRate":d=n["效果抵抗"]+(t.missRate||0);break;case"speed":d=n["速度"];break;case"bonusRate":d=n["暴击"];break;case"bonusDamage":d=n["暴击伤害"]}return d},calTotalDefense:i.f,calSimpleDefense:function(e,t){return e.defense+e.defense*t["防御加成"]/100+t["防御"]},calSimpleLife:i.c,calBonusDamage:i.a,calTotalDamage:i.e,calTotalAttack:i.d,calDamageDouble:i.b,calDamageWithTongnan:s,calMeanDamage:a,calMeanSpiderDamage:r,calRilun:c,calTotalLife:l}},"804e":function(e,t,n){"use strict";t.a={"破势":"暴击","针女":"暴击","网切":"暴击","三味":"暴击","伤魂鸟":"暴击","镇墓兽":"暴击","青女房":"暴击","海月火玉":"暴击","应声虫":"暴击","心眼":"攻击加成","狰":"攻击加成","轮入道":"攻击加成","狂骨":"攻击加成","鸣屋":"攻击加成","蝠翼":"攻击加成","阴摩罗":"攻击加成","兵主部":"攻击加成","贝吹坊":"攻击加成","隐念":"攻击加成","火灵":"效果命中","蚌精":"效果命中","飞缘魔":"效果命中","遗念火":"效果命中","元兴寺":"效果命中","返魂香":"效果抵抗","魍魉之匣":"效果抵抗","幽谷响":"效果抵抗","骰子鬼":"效果抵抗","共潜":"效果抵抗","钓瓶火":"效果抵抗","地藏像":"生命加成","薙魂":"生命加成","钟灵":"生命加成","镜姬":"生命加成","树妖":"生命加成","被服":"生命加成","叠叩":"生命加成","涅槃之火":"生命加成","涂佛":"生命加成","恶楼":"生命加成","招财猫":"防御加成","木魅":"防御加成","珍珠":"防御加成","魅妖":"防御加成","雪幽魂":"防御加成","反枕":"防御加成","日女巳时":"防御加成","出世螺":"防御加成","火之车":"防御加成"}},a26d:function(e,t,n){"use strict";function i(e,t){return e.attack*(100+(e.attackRate||0))/100+e.attack*t["攻击加成"]/100+t["攻击"]}function o(e,t){return e.defense*(100+(e.defenseRate||0))/100+e.defense*t["防御加成"]/100+t["防御"]}function a(e,t){return e.life*(100+(e.lifeRate||0))/100+e.life*t["生命加成"]/100+t["生命"]}function r(e,t){return e.bonusDamage/100+t["暴击伤害"]/100}function s(e,t){return i(e,t)*r(e,t)}function l(e,t){return s(e,t)*r(e,t)}n.d(t,"d",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return l}))},af21:function(e,t,n){"use strict";t.a={damage:"伤害输出",damageDouble:"双重暴击",damageMean:"数学期望",damageSpiderMean:"土蜘蛛数学期望",damageWithTongnan:"童男增伤后面板",langchuanguitun:"浪川鬼吞增伤",rilun:"日轮鬼吞增伤",yunwaijingDark:"云外镜阴面伤害",life:"生命治疗",attack:"攻击",defense:"防御",simpleLife:"生命",doubleRate:"命抗双修",hitRate:"效果命中",missRate:"效果抵抗",speed:"速度",bonusRate:"暴击",bonusDamage:"暴击伤害",equivalentLife:"等效生命",custom:"自定义"}},b627:function(e,t,n){},ba49:function(e,t,n){"use strict";n("300f")},c69e:function(e,t,n){"use strict";t.a=["生命加成","防御加成","攻击","防御","生命"]},c71c:function(e,t,n){"use strict";n("1b10")},c740:function(e,t,n){"use strict";var i=n("23e7"),o=n("b727").findIndex,a=(n=n("44d2"),"findIndex"),r=!0;a in[]&&Array(1)[a]((function(){r=!1})),i({target:"Array",proto:!0,forced:r},{findIndex:function(e){return o(this,e,1<arguments.length?arguments[1]:void 0)}}),n(a)},c997:function(e,t,n){"use strict";t.a=["攻击","暴击伤害","暴击","速度","效果命中","效果抵抗","生命","防御"]},d23a:function(e,t,n){"use strict";var i=n("b85c");n("e9c4"),n("b0c0");var o=function(e,t,n){return{set:function(n,i){if(i=a(e,i),n){n=JSON.stringify(n);try{t.$ls.set(i,n)}catch(n){throw t.$message({showClose:!0,message:"浏览器存储空间不足，操作失败！请删除重复或多余的御魂集后重试！",duration:0,type:"error"}),n}}else t.$ls.remove()},get:function(t){return o(a(e,t))},clear:function(n){return n=a(e,n),console.log("$ls remove: "+n),t.$ls.remove(n)}};function o(e){return e=t.$ls.get(e),e&&JSON.parse(e)}function a(e,a){if(n)return e;var r=t.$store.state.currentSet.name,s=null;if(r=a||r){a=o("setList");var l,c=Object(i.a)(a);try{for(c.s();!(l=c.n()).done;){var u=l.value;u.name===r&&(s=u.code)}}catch(e){c.e(e)}finally{c.f()}}return s+":"+e}};t.a=function(e,t){return o(e,t,!0)}},e1bd:function(e,t,n){"use strict";t.a=["攻击加成","暴击伤害","暴击","速度","效果命中","效果抵抗","生命加成","防御加成","攻击","防御","生命"]},fbbc:function(e,t,n){"use strict";n("736e")},fbd9:function(e,t,n){"use strict";n.r(t);var i=n("804e");function o(e){for(var t={},n=[],o=0;o<e.length;o++){var a=e[o];a&&(t[a=a["御魂类型"]]||(t[a]=0,n.push(a)),t[a]+=1)}for(var r={},s=0,l=n;s<l.length;s++){var c,u,p=l[s];2<=t[p]&&t[p]<=6&&(c=i.a[p])&&(r[c]||(r[c]=0),u="防御加成"===c?.3:.15,6===t[p]&&(u*=2),r[c]+=u)}return r}t.default={sumUpProp:function(e,t){for(var n,i=(i=t)||o(e),a={"暴击":0,"速度":0,"效果命中":0,"效果抵抗":0,"暴击伤害":0,"攻击加成":0,"生命加成":0,"防御加成":0,"攻击":0,"防御":0,"生命":0},r=0;r<e.length;r++){var s=e[r];if(s)for(var l in a)s[l]&&(a[l]+=s[l])}for(n in a)i[n]&&(a[n]+=i[n]),["速度","攻击","防御","生命"].indexOf(n)<0&&(a[n]*=100);return a},getSuitSum:o}}}]);