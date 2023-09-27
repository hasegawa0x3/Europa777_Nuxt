import{_ as P,a as S}from"./Activity.vue.2230a8a7.js";import{f as v,h as g,r as u,k as y,o as a,c as i,a as t,F as f,x as h,b as d,l as s,G as D,n as w,t as _,q as b,s as B,u as j,A as q,i as z,m as E,w as N}from"./entry.f5acf7d2.js";import{_ as O}from"./QImg.248a6a92.js";import{s as V}from"./string.b5df6010.js";import{t as m}from"./translation.70cd54bd.js";import{g as A}from"./others.e94753e7.js";import"./translation.1fefddbb.js";import"./Axios.7e581d43.js";const F={class:"inset-0 rounded-md w-full px-7 pt-6 pb-10 relative"},H=t("div",{style:{background:"#383d47"},class:"absolute w-full h-full opacity-50 top-0 left-0 rounded-md"},null,-1),L={class:"relative mt-10"},M={class:"grid md:grid-cols-2 gap-4"},R={class:"flex flex-col justify-between"},W={class:"flex items-center justify-between relative"},G=t("img",{src:"/imgs/bonus/1.png",alt:"title"},null,-1),T={class:"w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8 text-shadow-lg"},J={class:"flex flex-row pr-5"},K={key:0,class:"text-md md:text-lg text-bold pt-4 px-5"},Q={key:1,class:"text-lg text-bold px-5 pt-2 text-center",style:{color:"#e4bb17"}},U={class:"text-center pb-10 pt-5"},X=v({__name:"Promotions",setup(k){const o=g(),c=u(o.state.promotions);y(()=>o.state.promotions,()=>{c.value=o.state.promotions});const l=u([]),x=r=>{l.value.includes(r)?l.value.splice(l.value.indexOf(r)):l.value.push(r)};return(r,et)=>{const $=O,C=B;return a(),i("div",F,[H,t("div",L,[t("div",M,[(a(!0),i(f,null,h(s(c),(e,p)=>(a(),i("div",R,[t("div",W,[G,d($,{class:"w-1/2 absolute right-0 bottom-0",src:`/imgs/${e==null?void 0:e.image}.png`,"spinner-color":"primary",alt:"title"},null,8,["src"]),t("div",T,[t("p",J,[(a(!0),i(f,null,h(s(V)(e==null?void 0:e.title),n=>(a(),i("span",{style:D(n!=null&&n.string?{}:{color:"#ffd62f"}),class:w(n!=null&&n.string?["font-black text-sm sm:text-lg xl:text-2xl pr-2",s(o).state.isDrawer?"lg:text-md":"lg:text-xl"]:["font-black text-sm sm:text-xl xl:text-3xl pr-2",s(o).state.isDrawer?"lg:text-md":"lg:text-2xl"])},_(n==null?void 0:n.content),7))),256))])])]),s(l).includes(p)?(a(),i("p",K,_(e==null?void 0:e.description),1)):b("",!0),s(l).includes(p)?(a(),i("p",Q,"Promo_Code : "+_(e==null?void 0:e.promo_code),1)):b("",!0),t("div",U,[d(C,{onClick:n=>x(p),color:"primary",label:s(l).includes(p)?s(m)("SHOW LESS",s(o).state.lang):s(m)("READ MORE",s(o).state.lang)},null,8,["onClick","label"])])]))),256))])])])}}}),Y={style:{"max-width":"1450px"},class:"w-full px-0 md:px-6 lg:px-14 py-8 m-auto"},Z={class:"main h-full px-4"},I={class:"bonus_baner w-full h-40 font-bold text-xl flex justify-center flex-col text-right"},tt={style:{color:"rgb(255, 255, 3)"},class:"text-5xl lg:text-6xl"},st={class:"pt-8"},_t=v({__name:"promotions",setup(k){j({title:"Canada777",meta:[{hid:"Promotion",name:"Promotion",content:"Take advantage of our enticing promotions and boost your gaming experience. We offer a variety of bonuses, free spins, and special offers to enhance your chances of winning. Stay updated with our latest promotions and maximize your rewards as you enjoy your favorite games."}]});const o=g();q(()=>{A(o)});const c=z(()=>u(o.state.isDrawer));return(l,x)=>{const r=P;return a(),E(r,null,{default:N(()=>[t("div",Y,[t("section",Z,[t("div",I,[t("div",{class:w(["pr-12 md:pr-24 xl:pr-36",c.value.value?"lg:pr-6":"lg:pr-36"])},[t("p",null,[t("span",tt,_(s(m)("Promotions",s(o).state.lang)),1)])],2)]),d(X)]),t("section",st,[d(S)])])]),_:1})}}});export{_t as default};