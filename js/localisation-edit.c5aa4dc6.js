(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["localisation-edit"],{"96a3":function(t,a,o){"use strict";o.r(a);var i=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{attrs:{id:"ecart2"}},[o("b-containe",{attrs:{fluid:""}},[o("b-container",{attrs:{id:"ecart"}},[o("b-row",{staticClass:"font-weight-bold",attrs:{id:"ecart2","align-h":"center"}},[o("h5",[t._v("Ajouter une localisation")])]),o("b-row",{staticClass:"font-weight-bold",attrs:{id:"ecart2","align-h":"center"}},[o("b-col",{attrs:{cols:"2"}},[o("b-button",{attrs:{variant:"outline-white",disabled:"",squared:""}},[o("b-icon",{attrs:{icon:"plus-circle"}})],1)],1),o("b-col",{attrs:{cols:"10"}},[o("b-input",{attrs:{type:"text",placeholder:"Numéro"},model:{value:t.localisation.numero,callback:function(a){t.$set(t.localisation,"numero",a)},expression:"localisation.numero"}})],1)],1),o("b-row",{staticClass:"font-weight-bold",attrs:{id:"ecart2","align-h":"center"}},[o("b-col",{attrs:{cols:"2"}},[o("b-button",{attrs:{variant:"outline-white",disabled:"",squared:""}},[o("b-icon",{attrs:{icon:"geo"}})],1)],1),o("b-col",{attrs:{cols:"10"}},[o("b-input",{attrs:{type:"text",placeholder:"Pays"},model:{value:t.localisation.pays,callback:function(a){t.$set(t.localisation,"pays",a)},expression:"localisation.pays"}})],1)],1),o("b-row",{staticClass:"font-weight-bold",attrs:{id:"ecart2","align-h":"center"}},[o("b-col",{attrs:{cols:"2"}},[o("b-button",{attrs:{variant:"outline-white",disabled:"",squared:""}},[o("b-icon",{attrs:{icon:"fullscreen-exit"}})],1)],1),o("b-col",{attrs:{cols:"10"}},[o("b-input",{attrs:{type:"text",placeholder:"Région"},model:{value:t.localisation.region,callback:function(a){t.$set(t.localisation,"region",a)},expression:"localisation.region"}})],1)],1),o("b-row",{staticClass:"font-weight-bold",attrs:{id:"ecart2","align-h":"center"}},[o("b-col",{attrs:{cols:"2"}},[o("b-button",{attrs:{variant:"outline-white",disabled:"",squared:""}},[o("b-icon",{attrs:{icon:"geo-alt"}})],1)],1),o("b-col",{attrs:{cols:"10"}},[o("b-input",{attrs:{type:"text",placeholder:"Département"},model:{value:t.localisation.departement,callback:function(a){t.$set(t.localisation,"departement",a)},expression:"localisation.departement"}})],1)],1),o("b-row",{staticClass:"font-weight-bold",attrs:{id:"ecart2","align-h":"center"}},[o("b-col",{attrs:{cols:"2"}},[o("b-button",{attrs:{variant:"outline-white",disabled:"",squared:""}},[o("b-icon",{attrs:{icon:"bullseye"}})],1)],1),o("b-col",{attrs:{cols:"10"}},[o("b-input",{attrs:{type:"text",placeholder:"Arrondissement"},model:{value:t.localisation.arrondissement,callback:function(a){t.$set(t.localisation,"arrondissement",a)},expression:"localisation.arrondissement"}})],1)],1),o("b-row",{staticClass:"font-weight-bold",attrs:{id:"ecart2","align-h":"center"}},[o("b-col",{attrs:{cols:"6"}},[o("b-button",{attrs:{block:"",pill:"",variant:"success"},on:{click:function(a){return t.addLocalisation(t.localisation)}}},[t._v("Enregistrer")])],1),o("b-col",{attrs:{cols:"6"}},[o("b-button",{attrs:{block:"",pill:"",variant:"info"},on:{click:function(a){return t.cancelLocalisation()}}},[t._v("Annuler")])],1)],1)],1)],1)],1)},e=[],l={name:"LocalisationEdit",data:function(){return{localisation:this.$store.getters.getDetailLocalisation}},methods:{addLocalisation:function(t){console.log(t),alert("Cette fonction est désactivée!!")},cancelLocalisation:function(){this.$store.commit("setDetailLocalisation","null"),this.$router.push("/localisation-list")}}},s=l,n=(o("d1cf"),o("2877")),c=Object(n["a"])(s,i,e,!1,null,"d1662412",null);a["default"]=c.exports},acd7:function(t,a,o){},d1cf:function(t,a,o){"use strict";var i=o("acd7"),e=o.n(i);e.a}}]);
//# sourceMappingURL=localisation-edit.c5aa4dc6.js.map