(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d2165e6"],{c1bd:function(e,r,s){"use strict";s.r(r);var t=s("1da1"),o=(s("96cf"),s("b6f0")),a={data:function(){return{username:null,form:{password:null,passwordComfirm:null}}},mounted:function(){this.username=this.$route.query.username},methods:{confirm:function(){var e=this;return Object(t.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.form.password||e.form.password.length<6)return r.abrupt("return",e.$message.warning("请输入至少6位的密码"));r.next=2;break;case 2:if(e.form.password!==e.form.passwordComfirm)return r.abrupt("return",e.$message.warning("两次密码输入不一致"));r.next=4;break;case 4:return r.next=6,o.a.resetPassword({},{userId:e.$route.query.id,password:e.form.password});case 6:e.$message.success("重置成功"),e.$goto("home");case 8:case"end":return r.stop()}}),r)})))()}}};s=s("2877"),s=Object(s.a)(a,(function(){var e=this,r=e.$createElement;r=e._self._c||r;return r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{xs:24,sm:{span:22,offset:1},md:{span:14,offset:5},lg:{span:10,offset:7},xl:{span:10,offset:7}}},[r("div",[r("div",{staticStyle:{margin:"50px","text-align":"center"}},[r("h1",[e._v("重置密码")])]),r("el-form",{attrs:{"label-width":"80px",model:e.form}},[r("el-form-item",{attrs:{label:"用户昵称"}},[r("span",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(e.username))])]),r("el-form-item",{attrs:{label:"新的密码"}},[r("el-input",{attrs:{type:"password","show-password":!0,placeholder:"至少6位"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),r("el-form-item",{attrs:{label:"确认密码"}},[r("el-input",{attrs:{type:"password","show-password":!0,placeholder:"重复上面的密码"},model:{value:e.form.passwordComfirm,callback:function(r){e.$set(e.form,"passwordComfirm",r)},expression:"form.passwordComfirm"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"success"},on:{click:function(r){return e.confirm()}}},[e._v(" 确定 ")])],1)],1)],1)])],1)}),[],!1,null,"11869f27",null);r.default=s.exports}}]);