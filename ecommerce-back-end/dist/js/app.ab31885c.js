(function(){"use strict";var t={7754:function(t,r,e){var o=e(9242),n=e(3396);const a={class:"page-wrap"};function s(t,r,e,o,s,i){const c=(0,n.up)("NavBar"),u=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(c,{user:s.user},null,8,["user"]),(0,n._)("div",a,[(0,n.Wm)(u,{user:s.user},null,8,["user"])])],64)}const i={class:"nav-bar"},c={class:"logo-wrap"},u=["src"],d={class:"nav-buttons-wrap"},p=(0,n._)("button",null,"Shopping Cart",-1);function l(t,r,e,o,a,s){const l=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(l,{to:"/products",class:"products-link"},{default:(0,n.w5)((()=>[(0,n._)("div",c,[(0,n._)("img",{src:a.logo,alt:"Logo"},null,8,u)])])),_:1}),(0,n._)("div",d,[e.user?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:r[0]||(r[0]=(...t)=>s.signOutNow&&s.signOutNow(...t))},"Log Out")):(0,n.kq)("",!0),(0,n.Wm)(l,{to:"/cart"},{default:(0,n.w5)((()=>[p])),_:1})])])}var m=e.p+"img/logo-hexagon.d2768201.svg",g=e(1450),h={name:"NavBar",data(){return{logo:m}},props:["user"],methods:{signOutNow(){const t=(0,g.v0)();(0,g.w7)(t)}}},f=e(89);const w=(0,f.Z)(h,[["render",l]]);var v=w,y={name:"App",components:{NavBar:v},data(){return{user:null}},created(){const t=(0,g.v0)();(0,g.Aj)(t,(t=>{this.user=t}))}};const I=(0,f.Z)(y,[["render",s]]);var b=I,k=e(2483);const _=(0,n._)("h1",null,"Your Shopping Cart",-1),C=(0,n._)("button",{class:"checkout-button"},"Check out",-1);function D(t,r,e,o,a,s){const i=(0,n.up)("ShoppingCartList");return(0,n.wg)(),(0,n.iD)(n.HY,null,[_,(0,n.Wm)(i,{cartList:a.cartItems,onRemoveFromCart:r[0]||(r[0]=t=>s.removeFromCart(t))},null,8,["cartList"]),C],64)}var S=e(1076),P=e(7139);const L={key:0},O=["src"],Z={class:"details-wrap"},$={class:"product-amount"},F=["onClick"],j={key:1},N=(0,n._)("h1",null," Your cart is empty now!",-1),Y=[N];function z(t,r,e,o,a,s){return(0,n.wg)(),(0,n.iD)(n.HY,null,[e.cartList.length>0?((0,n.wg)(),(0,n.iD)("div",L,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cartList,(r=>((0,n.wg)(),(0,n.iD)("div",{class:"product-container",key:r.id},[(0,n._)("img",{class:"product-image",src:r.imageUrl},null,8,O),(0,n._)("div",Z,[(0,n._)("h3",null,(0,P.zw)(r.name),1),(0,n._)("p",null,(0,P.zw)(r.price),1)]),(0,n._)("div",$,(0,P.zw)(this.map.get(r.id)),1),(0,n._)("button",{onClick:e=>t.$emit("remove-from-cart",r.id),class:"remove-button"},"Remove item from cart",8,F)])))),128))])):(0,n.kq)("",!0),0===e.cartList.length?((0,n.wg)(),(0,n.iD)("div",j,Y)):(0,n.kq)("",!0)],64)}var T={name:"ShoppingCartList",props:["cartList"],data(){return{map:new Map}},watch:{cartList:{handler:function(t){this.mapItem(t)},immediate:!0}},methods:{mapItem(t){this.map.clear();for(let r of t)if(this.map.has(r.id)){let t=this.map.get(r.id);t++,this.map.set(r.id,t)}else this.map.set(r.id,1)}},created(){this.mapItem(this.cartList)}};const W=(0,f.Z)(T,[["render",z]]);var H=W,q={name:"ShoppingCartPage",props:["user"],data(){return{cartItems:[]}},watch:{async user(t){if(t){const r=await S.Z.get(`/api/users/${t.uid}/cart`),e=r.data;this.cartItems=e}}},components:{ShoppingCartList:H},methods:{async removeFromCart(t){const r=await S.Z.delete(`/api/users/${this.user.uid}/cart/${t}`),e=r.data;this.cartItems=e}},async created(){if(this.user){const t=await S.Z.get(`/api/users/${this.user.uid}/cart`),r=t.data;this.cartItems=r}}};const x=(0,f.Z)(q,[["render",D]]);var A=x;const B=(0,n._)("h1",null,"Products",-1);function K(t,r,e,o,a,s){const i=(0,n.up)("ProductsList");return(0,n.wg)(),(0,n.iD)(n.HY,null,[B,(0,n.Wm)(i,{products:a.products},null,8,["products"])],64)}const M={class:"grid-wrap"},U=["src"],E={class:"product-name"},J={class:"product-price"},R=(0,n._)("button",null,"View Details",-1);function V(t,r,e,o,a,s){const i=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",M,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.products,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"product-item",key:t.id},[(0,n._)("img",{src:t.imageUrl},null,8,U),(0,n._)("h3",E,(0,P.zw)(t.name),1),(0,n._)("p",J,(0,P.zw)(t.price),1),(0,n.Wm)(i,{to:"/products/"+t.id},{default:(0,n.w5)((()=>[R])),_:2},1032,["to"])])))),128))])}var G={name:"ProductsList",props:["products"]};const Q=(0,f.Z)(G,[["render",V]]);var X=Q,tt={name:"ProductsPage",data(){return{products:[]}},components:{ProductsList:X},async created(){const t=await S.Z.get("/api/products"),r=t.data;this.products=r}};const rt=(0,f.Z)(tt,[["render",K]]);var et=rt;const ot={key:0},nt={class:"img-wrap"},at=["src"],st={class:"product-details"},it={class:"price"},ct={key:1,class:"grey-button"},ut={key:1};function dt(t,r,e,o,a,s){const i=(0,n.up)("NotFoundPage");return a.product?((0,n.wg)(),(0,n.iD)("div",ot,[(0,n._)("div",nt,[(0,n._)("img",{src:a.product.imageUrl},null,8,at)]),(0,n._)("div",st,[(0,n._)("h1",null,(0,P.zw)(a.product.name),1),(0,n._)("h3",it,(0,P.zw)(a.product.price),1),e.user&&!s.itemIsInCart?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:r[0]||(r[0]=(...t)=>s.addToCart&&s.addToCart(...t)),class:"add-to-cart"},"Add to cart")):(0,n.kq)("",!0),e.user&&s.itemIsInCart?((0,n.wg)(),(0,n.iD)("button",ct,"Item is already in cart")):(0,n.kq)("",!0),e.user?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("button",{key:2,class:"sign-in",onClick:r[1]||(r[1]=(...t)=>s.signIn&&s.signIn(...t))},"Sign in to add this item to cart"))])])):((0,n.wg)(),(0,n.iD)("div",ut,[(0,n.Wm)(i)]))}function pt(t,r,e,o,a,s){return(0,n.wg)(),(0,n.iD)("h1",null,"404: Page Not Found")}var lt={name:"NotFoundPage"};const mt=(0,f.Z)(lt,[["render",pt]]);var gt=mt,ht={name:"ProductDetailPage",data(){return{product:{},cartItems:[]}},props:["user"],computed:{itemIsInCart(){return this.cartItems.some((t=>t.id===this.$route.params.productId))}},watch:{async user(t){if(t){const r=await S.Z.get(`/api/users/${t.uid}/cart`),e=r.data;this.cartItems=e}}},methods:{async addToCart(){await S.Z.post(`/api/users/${this.user.uid}/cart`,{id:this.$route.params.productId}),alert("Successfully added item to Cart")},async signIn(){const t=prompt("Please enter your email to sign in: "),r=(0,g.v0)(),e={url:`https://two-tree-ecommerce-app.onrender.com/products/${this.$route.params.productId}`,handleCodeInApp:!0};await(0,g.oo)(r,t,e),alert("Please check email for login link"),window.localStorage.setItem("emailForSignIn",t)}},components:{NotFoundPage:gt},async created(){const t=(0,g.v0)();if((0,g.JB)(t,window.location.href)){const r=window.localStorage.getItem("emailForSignIn");await(0,g.P6)(t,r,window.location.href),alert("Successfully signed in"),window.localStorage.removeItem("emailForSignIn")}const r=await S.Z.get(`/api/products/${this.$route.params.productId}`),e=r.data;if(this.product=e,this.user){const t=await S.Z.get(`/api/users/${this.user.uid}/cart`),r=t.data;this.cartItems=r}}};const ft=(0,f.Z)(ht,[["render",dt]]);var wt=ft,vt=e(7795);const yt={apiKey:"AIzaSyCvK49HL1LK8TsocyrUU1jhucbZAkCLYJE",authDomain:"two-tree-ecommerce-app.firebaseapp.com",projectId:"two-tree-ecommerce-app",storageBucket:"two-tree-ecommerce-app.appspot.com",messagingSenderId:"114932978055",appId:"1:114932978055:web:1024f64d2b7b698ea64322"};(0,vt.ZF)(yt),(0,o.ri)(b).use(k.p7({history:k.PO("/"),routes:[{path:"/cart",component:A},{path:"/products",component:et},{path:"/products/:productId",component:wt},{path:"/",redirect:"/products"},{path:"/:pathMatch(.*)",component:gt}]})).mount("#app")}},r={};function e(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={exports:{}};return t[o].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(r,o,n,a){if(!o){var s=1/0;for(d=0;d<t.length;d++){o=t[d][0],n=t[d][1],a=t[d][2];for(var i=!0,c=0;c<o.length;c++)(!1&a||s>=a)&&Object.keys(e.O).every((function(t){return e.O[t](o[c])}))?o.splice(c--,1):(i=!1,a<s&&(s=a));if(i){t.splice(d--,1);var u=n();void 0!==u&&(r=u)}}return r}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[o,n,a]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(r){return 0===t[r]};var r=function(r,o){var n,a,s=o[0],i=o[1],c=o[2],u=0;if(s.some((function(r){return 0!==t[r]}))){for(n in i)e.o(i,n)&&(e.m[n]=i[n]);if(c)var d=c(e)}for(r&&r(o);u<s.length;u++)a=s[u],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(d)},o=self["webpackChunkecommerce_front_end"]=self["webpackChunkecommerce_front_end"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(7754)}));o=e.O(o)})();
//# sourceMappingURL=app.ab31885c.js.map