(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["localisation-detail"],{"517c":function(t,a,i){"use strict";i.r(a);var o=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"ecart2"}},[i("b-containe",{attrs:{fluid:""}},[i("b-container",{attrs:{id:"ecart"}},[i("b-row",{staticClass:"font-weight-bold",attrs:{id:"ecart2","align-h":"center"}},[i("h5",[t._v("Détail localisation")])]),i("b-row",{staticClass:"font-weight-bold",attrs:{id:"ecart2","align-h":"center"}},[i("b-col",{attrs:{cols:"2"}},[i("b-button",{attrs:{variant:"outline-white",disabled:"",squared:""}},[i("b-icon",{attrs:{icon:"person-fill"}})],1)],1),i("b-col",{attrs:{cols:"10"}},[i("b-input",{attrs:{type:"text",placeholder:"Pays",disabled:""},model:{value:t.localisation.pays,callback:function(a){t.$set(t.localisation,"pays",a)},expression:"localisation.pays"}})],1)],1),i("b-row",{staticClass:"font-weight-bold",attrs:{id:"ecart2","align-h":"center"}},[i("b-col",{attrs:{cols:"2"}},[i("b-button",{attrs:{variant:"outline-white",disabled:"",squared:""}},[i("b-icon",{attrs:{icon:"person-fill"}})],1)],1),i("b-col",{attrs:{cols:"10"}},[i("b-input",{attrs:{type:"text",placeholder:"Région",disabled:""},model:{value:t.localisation.region,callback:function(a){t.$set(t.localisation,"region",a)},expression:"localisation.region"}})],1)],1),i("b-row",{staticClass:"font-weight-bold",attrs:{id:"ecart2","align-h":"center"}},[i("b-col",{attrs:{cols:"2"}},[i("b-button",{attrs:{variant:"outline-white",disabled:"",squared:""}},[i("b-icon",{attrs:{icon:"person-fill"}})],1)],1),i("b-col",{attrs:{cols:"10"}},[i("b-input",{attrs:{type:"text",placeholder:"Département",disabled:""},model:{value:t.localisation.departement,callback:function(a){t.$set(t.localisation,"departement",a)},expression:"localisation.departement"}})],1)],1),i("b-row",{staticClass:"font-weight-bold",attrs:{id:"ecart2","align-h":"center"}},[i("b-col",{attrs:{cols:"2"}},[i("b-button",{attrs:{variant:"outline-white",disabled:"",squared:""}},[i("b-icon",{attrs:{icon:"person-fill"}})],1)],1),i("b-col",{attrs:{cols:"10"}},[i("b-input",{attrs:{type:"text",placeholder:"Arrondissement",disabled:""},model:{value:t.localisation.arrondissement,callback:function(a){t.$set(t.localisation,"arrondissement",a)},expression:"localisation.arrondissement"}})],1)],1),i("b-row",{staticClass:"font-weight-bold",attrs:{id:"ecart2","align-h":"center"}},[i("b-col",[i("b-button",{attrs:{block:"",pill:"",variant:"primary"},on:{click:function(a){return t.localisationEdit(t.localisation)}}},[t._v("Editer")])],1),i("b-col",[i("b-button",{attrs:{block:"",pill:"",variant:"info"},on:{click:function(a){return t.cancelLocalisation()}}},[t._v("Annuler")])],1),i("b-col",[i("b-button",{attrs:{block:"",pill:"",variant:"danger"},on:{click:function(a){return t.localisationDelet(t.localisation)}}},[t._v("Supprimer")])],1)],1)],1)],1)],1)},l=[],e={name:"LocalisationDetail",data:function(){return{localisation:this.$store.getters.getDetailLocalisation}},methods:{back:function(){this.$store.commit("back")},localisationEdit:function(t){this.$store.commit("setDetailLocalisation",t),this.$store.commit("back")},localisationDelet:function(t){this.$store.commit("setDetailLocalisation",t),this.$store.commit("back")}}},n=e,s=(i("e92f"),i("2877")),c=Object(s["a"])(n,o,l,!1,null,"37be24fc",null);a["default"]=c.exports},"601c":function(t,a,i){},e92f:function(t,a,i){"use strict";var o=i("601c"),l=i.n(o);l.a}}]);
//# sourceMappingURL=localisation-detail.8c7351e4.js.map