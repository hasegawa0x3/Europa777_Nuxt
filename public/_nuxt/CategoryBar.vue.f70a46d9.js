import{r as $,a8 as _t,k as L,a9 as Te,A as Me,O as je,P as De,Z as U,W as N,a4 as Ee,a5 as $e,i as g,K as r,a3 as A,aa as yt,C as Ae,ab as ht,ac as Be,ad as wt,ae as Ct,a6 as qt,af as me,ag as Oe,ah as Pt,N as Ne,ai as kt,aj as be,ak as H,s as ee,al as xt,f as He,h as Rt,o as le,c as Se,b as pt,a as Tt,t as Bt,l as Fe,n as ze,G as Ot,F as Ft,x as Vt,m as Lt,y as Mt}from"./entry.f5acf7d2.js";import{u as jt,a as Dt,b as Et,c as Ue,_ as $t}from"./QSelect.a986b9b7.js";import{_ as At}from"./QLinearProgress.6a358f6e.js";import{_ as Nt}from"./QImg.248a6a92.js";import{t as Ht}from"./translation.70cd54bd.js";let z=0;const zt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ut=["update:fullscreen","fullscreen"];function Qt(){const e=U(),{props:l,emit:n,proxy:c}=e;let o,d,s;const u=$(!1);_t(e)===!0&&L(()=>c.$route.fullPath,()=>{l.noRouteFullscreenExit!==!0&&a()}),L(()=>l.fullscreen,m=>{u.value!==m&&v()}),L(u,m=>{n("update:fullscreen",m),n("fullscreen",m)});function v(){u.value===!0?a():S()}function S(){u.value!==!0&&(u.value=!0,s=c.$el.parentNode,s.replaceChild(d,c.$el),document.body.appendChild(c.$el),z++,z===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:a},Te.add(o))}function a(){u.value===!0&&(o!==void 0&&(Te.remove(o),o=void 0),s.replaceChild(c.$el,d),u.value=!1,z=Math.max(0,z-1),z===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),c.$el.scrollIntoView!==void 0&&setTimeout(()=>{c.$el.scrollIntoView()})))}return Me(()=>{d=document.createElement("span")}),je(()=>{l.fullscreen===!0&&S()}),De(a),Object.assign(c,{toggleFullscreen:v,setFullscreen:S,exitFullscreen:a}),{inFullscreen:u,toggleFullscreen:v}}const It=["horizontal","vertical","cell","none"],Wt=N({name:"QMarkupTable",props:{...Ee,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>It.includes(e)}},setup(e,{slots:l}){const n=U(),c=$e(e,n.proxy.$q),o=g(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(c.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>r("div",{class:o.value},[r("table",{class:"q-table"},A(l.default))])}}),Kt=N({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:n}){const c=U(),{proxy:{$q:o}}=c,d=s=>{n("click",s)};return()=>{if(e.props===void 0)return r("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:d},A(l.default));let s,u;const v=c.vnode.key;if(v){if(s=e.props.colsMap[v],s===void 0)return}else s=e.props.col;if(s.sortable===!0){const a=s.align==="right"?"unshift":"push";u=yt(l.default,[]),u[a](r(Ae,{class:s.__iconClass,name:o.iconSet.table.arrowUp}))}else u=A(l.default);const S={class:s.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:s.headerStyle,onClick:a=>{s.sortable===!0&&e.props.sort(s),d(a)}};return r("th",S,u)}}});function Qe(e,l){return r("div",e,[r("table",{class:"q-table"},l)])}const Gt={list:Et,table:Wt},Zt=["list","table","__qtable"],Jt=N({name:"QVirtualScroll",props:{...jt,type:{type:String,default:"list",validator:e=>Zt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:l,attrs:n}){let c;const o=$(null),d=g(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:s,localResetVirtualScroll:u,padVirtualScroll:v,onVirtualScrollEvt:S}=Dt({virtualScrollLength:d,getVirtualScrollTarget:k,getVirtualScrollEl:C}),a=g(()=>{if(d.value===0)return[];const B=(O,x)=>({index:s.value.from+x,item:O});return e.itemsFn===void 0?e.items.slice(s.value.from,s.value.to).map(B):e.itemsFn(s.value.from,s.value.to-s.value.from).map(B)}),m=g(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=g(()=>e.scrollTarget!==void 0?{}:{tabindex:0});L(d,()=>{u()}),L(()=>e.scrollTarget,()=>{y(),h()});function C(){return o.value.$el||o.value}function k(){return c}function h(){c=ht(C(),e.scrollTarget),c.addEventListener("scroll",S,Be.passive)}function y(){c!==void 0&&(c.removeEventListener("scroll",S,Be.passive),c=void 0)}function T(){let B=v(e.type==="list"?"div":"tbody",a.value.map(l.default));return l.before!==void 0&&(B=l.before().concat(B)),qt(l.after,B)}return Me(()=>{u()}),je(()=>{h()}),wt(()=>{h()}),Ct(()=>{y()}),De(()=>{y()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Qe({ref:o,class:"q-table__middle "+m.value},T()):r(Gt[e.type],{...n,ref:o,class:[n.class,m.value],...w.value},T)}}});function Xt(e,l){return new Date(e)-new Date(l)}const Yt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function el(e,l,n,c){const o=g(()=>{const{sortBy:u}=l.value;return u&&n.value.find(v=>v.name===u)||null}),d=g(()=>e.sortMethod!==void 0?e.sortMethod:(u,v,S)=>{const a=n.value.find(C=>C.name===v);if(a===void 0||a.field===void 0)return u;const m=S===!0?-1:1,w=typeof a.field=="function"?C=>a.field(C):C=>C[a.field];return u.sort((C,k)=>{let h=w(C),y=w(k);return h==null?-1*m:y==null?1*m:a.sort!==void 0?a.sort(h,y,C,k)*m:me(h)===!0&&me(y)===!0?(h-y)*m:Oe(h)===!0&&Oe(y)===!0?Xt(h,y)*m:typeof h=="boolean"&&typeof y=="boolean"?(h-y)*m:([h,y]=[h,y].map(T=>(T+"").toLocaleString().toLowerCase()),h<y?-1*m:h===y?0:m)})});function s(u){let v=e.columnSortOrder;if(Pt(u)===!0)u.sortOrder&&(v=u.sortOrder),u=u.name;else{const m=n.value.find(w=>w.name===u);m!==void 0&&m.sortOrder&&(v=m.sortOrder)}let{sortBy:S,descending:a}=l.value;S!==u?(S=u,a=v==="da"):e.binaryStateSort===!0?a=!a:a===!0?v==="ad"?S=null:a=!1:v==="ad"?a=!0:S=null,c({sortBy:S,descending:a,page:1})}return{columnToSort:o,computedSortMethod:d,sort:s}}const tl={filter:[String,Object],filterMethod:Function};function ll(e,l){const n=g(()=>e.filterMethod!==void 0?e.filterMethod:(c,o,d,s)=>{const u=o?o.toLowerCase():"";return c.filter(v=>d.some(S=>{const a=s(S,v)+"";return(a==="undefined"||a==="null"?"":a.toLowerCase()).indexOf(u)!==-1}))});return L(()=>e.filter,()=>{Ne(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:n}}function al(e,l){for(const n in l)if(l[n]!==e[n])return!1;return!0}function Ve(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const nl={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function ol(e,l){const{props:n,emit:c}=e,o=$(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:n.rowsPerPageOptions.length!==0?n.rowsPerPageOptions[0]:5},n.pagination)),d=g(()=>{const a=n["onUpdate:pagination"]!==void 0?{...o.value,...n.pagination}:o.value;return Ve(a)}),s=g(()=>d.value.rowsNumber!==void 0);function u(a){v({pagination:a,filter:n.filter})}function v(a={}){Ne(()=>{c("request",{pagination:a.pagination||d.value,filter:a.filter||n.filter,getCellValue:l})})}function S(a,m){const w=Ve({...d.value,...a});if(al(d.value,w)===!0){s.value===!0&&m===!0&&u(w);return}if(s.value===!0){u(w);return}n.pagination!==void 0&&n["onUpdate:pagination"]!==void 0?c("update:pagination",w):o.value=w}return{innerPagination:o,computedPagination:d,isServerSide:s,requestServerInteraction:v,setPagination:S}}function rl(e,l,n,c,o,d){const{props:s,emit:u,proxy:{$q:v}}=e,S=g(()=>c.value===!0?n.value.rowsNumber||0:d.value),a=g(()=>{const{page:x,rowsPerPage:R}=n.value;return(x-1)*R}),m=g(()=>{const{page:x,rowsPerPage:R}=n.value;return x*R}),w=g(()=>n.value.page===1),C=g(()=>n.value.rowsPerPage===0?1:Math.max(1,Math.ceil(S.value/n.value.rowsPerPage))),k=g(()=>m.value===0?!0:n.value.page>=C.value),h=g(()=>(s.rowsPerPageOptions.includes(l.value.rowsPerPage)?s.rowsPerPageOptions:[l.value.rowsPerPage].concat(s.rowsPerPageOptions)).map(R=>({label:R===0?v.lang.table.allRows:""+R,value:R})));L(C,(x,R)=>{if(x===R)return;const Q=n.value.page;x&&!Q?o({page:1}):x<Q&&o({page:x})});function y(){o({page:1})}function T(){const{page:x}=n.value;x>1&&o({page:x-1})}function B(){const{page:x,rowsPerPage:R}=n.value;m.value>0&&x*R<S.value&&o({page:x+1})}function O(){o({page:C.value})}return s["onUpdate:pagination"]!==void 0&&u("update:pagination",{...n.value}),{firstRowIndex:a,lastRowIndex:m,isFirstPage:w,isLastPage:k,pagesNumber:C,computedRowsPerPageOptions:h,computedRowsNumber:S,firstPage:y,prevPage:T,nextPage:B,lastPage:O}}const il={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},sl=["update:selected","selection"];function ul(e,l,n,c){const o=g(()=>{const k={};return e.selected.map(c.value).forEach(h=>{k[h]=!0}),k}),d=g(()=>e.selection!=="none"),s=g(()=>e.selection==="single"),u=g(()=>e.selection==="multiple"),v=g(()=>n.value.length!==0&&n.value.every(k=>o.value[c.value(k)]===!0)),S=g(()=>v.value!==!0&&n.value.some(k=>o.value[c.value(k)]===!0)),a=g(()=>e.selected.length);function m(k){return o.value[k]===!0}function w(){l("update:selected",[])}function C(k,h,y,T){l("selection",{rows:h,added:y,keys:k,evt:T});const B=s.value===!0?y===!0?h:[]:y===!0?e.selected.concat(h):e.selected.filter(O=>k.includes(c.value(O))===!1);l("update:selected",B)}return{hasSelectionMode:d,singleSelection:s,multipleSelection:u,allRowsSelected:v,someRowsSelected:S,rowsSelectedNumber:a,isRowSelected:m,clearSelection:w,updateSelection:C}}function Le(e){return Array.isArray(e)?e.slice():[]}const cl={expanded:Array},dl=["update:expanded"];function vl(e,l){const n=$(Le(e.expanded));L(()=>e.expanded,s=>{n.value=Le(s)});function c(s){return n.value.includes(s)}function o(s){e.expanded!==void 0?l("update:expanded",s):n.value=s}function d(s,u){const v=n.value.slice(),S=v.indexOf(s);u===!0?S===-1&&(v.push(s),o(v)):S!==-1&&(v.splice(S,1),o(v))}return{isRowExpanded:c,setExpanded:o,updateExpanded:d}}const fl={visibleColumns:Array};function gl(e,l,n){const c=g(()=>{if(e.columns!==void 0)return e.columns;const u=e.rows[0];return u!==void 0?Object.keys(u).map(v=>({name:v,label:v.toUpperCase(),field:v,align:me(u[v])?"right":"left",sortable:!0})):[]}),o=g(()=>{const{sortBy:u,descending:v}=l.value;return(e.visibleColumns!==void 0?c.value.filter(a=>a.required===!0||e.visibleColumns.includes(a.name)===!0):c.value).map(a=>{const m=a.align||"right",w=`text-${m}`;return{...a,align:m,__iconClass:`q-table__sort-icon q-table__sort-icon--${m}`,__thClass:w+(a.headerClasses!==void 0?" "+a.headerClasses:"")+(a.sortable===!0?" sortable":"")+(a.name===u?` sorted ${v===!0?"sort-desc":""}`:""),__tdStyle:a.style!==void 0?typeof a.style!="function"?()=>a.style:a.style:()=>null,__tdClass:a.classes!==void 0?typeof a.classes!="function"?()=>w+" "+a.classes:C=>w+" "+a.classes(C):()=>w}})}),d=g(()=>{const u={};return o.value.forEach(v=>{u[v.name]=v}),u}),s=g(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(n.value===!0?1:0));return{colList:c,computedCols:o,computedColsMap:d,computedColspan:s}}const te="q-table__bottom row items-center",Ie={};Ue.forEach(e=>{Ie[e]={}});const Cl=N({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Ie,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...Ee,...zt,...fl,...tl,...nl,...cl,...il,...Yt},emits:["request","virtualScroll",...Ut,...dl,...sl],setup(e,{slots:l,emit:n}){const c=U(),{proxy:{$q:o}}=c,d=$e(e,o),{inFullscreen:s,toggleFullscreen:u}=Qt(),v=g(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),S=$(null),a=$(null),m=g(()=>e.grid!==!0&&e.virtualScroll===!0),w=g(()=>" q-table__card"+(d.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),C=g(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(d.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(s.value===!0?" fullscreen scroll":"")),k=g(()=>C.value+(e.loading===!0?" q-table--loading":""));L(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+C.value,()=>{m.value===!0&&a.value!==null&&a.value.reset()});const{innerPagination:h,computedPagination:y,isServerSide:T,requestServerInteraction:B,setPagination:O}=ol(c,D),{computedFilterMethod:x}=ll(e,O),{isRowExpanded:R,setExpanded:Q,updateExpanded:We}=vl(e,n),ae=g(()=>{let t=e.rows;if(T.value===!0||t.length===0)return t;const{sortBy:i,descending:f}=y.value;return e.filter&&(t=x.value(t,e.filter,F.value,D)),Xe.value!==null&&(t=Ye.value(e.rows===t?t.slice():t,i,f)),t}),_e=g(()=>ae.value.length),M=g(()=>{let t=ae.value;if(T.value===!0)return t;const{rowsPerPage:i}=y.value;return i!==0&&(W.value===0&&e.rows!==t?t.length>K.value&&(t=t.slice(0,K.value)):t=t.slice(W.value,K.value)),t}),{hasSelectionMode:j,singleSelection:Ke,multipleSelection:ye,allRowsSelected:Ge,someRowsSelected:he,rowsSelectedNumber:ne,isRowSelected:oe,clearSelection:Ze,updateSelection:I}=ul(e,n,M,v),{colList:Je,computedCols:F,computedColsMap:we,computedColspan:Ce}=gl(e,y,j),{columnToSort:Xe,computedSortMethod:Ye,sort:re}=el(e,y,Je,O),{firstRowIndex:W,lastRowIndex:K,isFirstPage:ie,isLastPage:se,pagesNumber:G,computedRowsPerPageOptions:et,computedRowsNumber:Z,firstPage:ue,prevPage:ce,nextPage:de,lastPage:ve}=rl(c,h,y,T,O,_e),tt=g(()=>M.value.length===0),lt=g(()=>{const t={};return Ue.forEach(i=>{t[i]=e[i]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function at(){m.value===!0&&a.value.reset()}function nt(){if(e.grid===!0)return mt();const t=e.hideHeader!==!0?Re:null;if(m.value===!0){const f=l["top-row"],b=l["bottom-row"],_={default:P=>Pe(P.item,l.body,P.index)};if(f!==void 0){const P=r("tbody",f({cols:F.value}));_.before=t===null?()=>P:()=>[t()].concat(P)}else t!==null&&(_.before=t);return b!==void 0&&(_.after=()=>r("tbody",b({cols:F.value}))),r(Jt,{ref:a,class:e.tableClass,style:e.tableStyle,...lt.value,scrollTarget:e.virtualScrollTarget,items:M.value,type:"__qtable",tableColspan:Ce.value,onVirtualScroll:rt},_)}const i=[it()];return t!==null&&i.unshift(t()),Qe({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},i)}function ot(t,i){if(a.value!==null){a.value.scrollTo(t,i);return}t=parseInt(t,10);const f=S.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(f!==null){const b=S.value.querySelector(".q-table__middle.scroll"),_=f.offsetTop-e.virtualScrollStickySizeStart,P=_<b.scrollTop?"decrease":"increase";b.scrollTop=_,n("virtualScroll",{index:t,from:0,to:h.value.rowsPerPage-1,direction:P})}}function rt(t){n("virtualScroll",t)}function qe(){return[r(At,{class:"q-table__linear-progress",color:e.color,dark:d.value,indeterminate:!0,trackColor:"transparent"})]}function Pe(t,i,f){const b=v.value(t),_=oe(b);if(i!==void 0)return i(ke({key:b,row:t,pageIndex:f,__trClass:_?"selected":""}));const P=l["body-cell"],q=F.value.map(p=>{const X=l[`body-cell-${p.name}`],Y=X!==void 0?X:P;return Y!==void 0?Y(st({key:b,row:t,pageIndex:f,col:p})):r("td",{class:p.__tdClass(t),style:p.__tdStyle(t)},D(p,t))});if(j.value===!0){const p=l["body-selection"],X=p!==void 0?p(ut({key:b,row:t,pageIndex:f})):[r(be,{modelValue:_,color:e.color,dark:d.value,dense:e.dense,"onUpdate:modelValue":(Y,St)=>{I([b],[t],Y,St)}})];q.unshift(r("td",{class:"q-table--col-auto-width"},X))}const V={key:b,class:{selected:_}};return e.onRowClick!==void 0&&(V.class["cursor-pointer"]=!0,V.onClick=p=>{n("RowClick",p,t,f)}),e.onRowDblclick!==void 0&&(V.class["cursor-pointer"]=!0,V.onDblclick=p=>{n("RowDblclick",p,t,f)}),e.onRowContextmenu!==void 0&&(V.class["cursor-pointer"]=!0,V.onContextmenu=p=>{n("RowContextmenu",p,t,f)}),r("tr",V,q)}function it(){const t=l.body,i=l["top-row"],f=l["bottom-row"];let b=M.value.map((_,P)=>Pe(_,t,P));return i!==void 0&&(b=i({cols:F.value}).concat(b)),f!==void 0&&(b=b.concat(f({cols:F.value}))),r("tbody",b)}function ke(t){return fe(t),t.cols=t.cols.map(i=>H({...i},"value",()=>D(i,t.row))),t}function st(t){return fe(t),H(t,"value",()=>D(t.col,t.row)),t}function ut(t){return fe(t),t}function fe(t){Object.assign(t,{cols:F.value,colsMap:we.value,sort:re,rowIndex:W.value+t.pageIndex,color:e.color,dark:d.value,dense:e.dense}),j.value===!0&&H(t,"selected",()=>oe(t.key),(i,f)=>{I([t.key],[t.row],i,f)}),H(t,"expand",()=>R(t.key),i=>{We(t.key,i)})}function D(t,i){const f=typeof t.field=="function"?t.field(i):i[t.field];return t.format!==void 0?t.format(f,i):f}const E=g(()=>({pagination:y.value,pagesNumber:G.value,isFirstPage:ie.value,isLastPage:se.value,firstPage:ue,prevPage:ce,nextPage:de,lastPage:ve,inFullscreen:s.value,toggleFullscreen:u}));function ct(){const t=l.top,i=l["top-left"],f=l["top-right"],b=l["top-selection"],_=j.value===!0&&b!==void 0&&ne.value>0,P="q-table__top relative-position row items-center";if(t!==void 0)return r("div",{class:P},[t(E.value)]);let q;if(_===!0?q=b(E.value).slice():(q=[],i!==void 0?q.push(r("div",{class:"q-table__control"},[i(E.value)])):e.title&&q.push(r("div",{class:"q-table__control"},[r("div",{class:["q-table__title",e.titleClass]},e.title)]))),f!==void 0&&(q.push(r("div",{class:"q-table__separator col"})),q.push(r("div",{class:"q-table__control"},[f(E.value)]))),q.length!==0)return r("div",{class:P},q)}const xe=g(()=>he.value===!0?null:Ge.value);function Re(){const t=dt();return e.loading===!0&&l.loading===void 0&&t.push(r("tr",{class:"q-table__progress"},[r("th",{class:"relative-position",colspan:Ce.value},qe())])),r("thead",t)}function dt(){const t=l.header,i=l["header-cell"];if(t!==void 0)return t(ge({header:!0})).slice();const f=F.value.map(b=>{const _=l[`header-cell-${b.name}`],P=_!==void 0?_:i,q=ge({col:b});return P!==void 0?P(q):r(Kt,{key:b.name,props:q},()=>b.label)});if(Ke.value===!0&&e.grid!==!0)f.unshift(r("th",{class:"q-table--col-auto-width"}," "));else if(ye.value===!0){const b=l["header-selection"],_=b!==void 0?b(ge({})):[r(be,{color:e.color,modelValue:xe.value,dark:d.value,dense:e.dense,"onUpdate:modelValue":pe})];f.unshift(r("th",{class:"q-table--col-auto-width"},_))}return[r("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},f)]}function ge(t){return Object.assign(t,{cols:F.value,sort:re,colsMap:we.value,color:e.color,dark:d.value,dense:e.dense}),ye.value===!0&&H(t,"selected",()=>xe.value,pe),t}function pe(t){he.value===!0&&(t=!1),I(M.value.map(v.value),M.value,t)}const J=g(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function vt(){if(e.hideBottom===!0)return;if(tt.value===!0){if(e.hideNoData===!0)return;const f=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,b=l["no-data"],_=b!==void 0?[b({message:f,icon:o.iconSet.table.warning,filter:e.filter})]:[r(Ae,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),f];return r("div",{class:te+" q-table__bottom--nodata"},_)}const t=l.bottom;if(t!==void 0)return r("div",{class:te},[t(E.value)]);const i=e.hideSelectedBanner!==!0&&j.value===!0&&ne.value>0?[r("div",{class:"q-table__control"},[r("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(ne.value)])])]:[];if(e.hidePagination!==!0)return r("div",{class:te+" justify-end"},gt(i));if(i.length!==0)return r("div",{class:te},i)}function ft(t){O({page:1,rowsPerPage:t.value})}function gt(t){let i;const{rowsPerPage:f}=y.value,b=e.paginationLabel||o.lang.table.pagination,_=l.pagination,P=e.rowsPerPageOptions.length>1;if(t.push(r("div",{class:"q-table__separator col"})),P===!0&&t.push(r("div",{class:"q-table__control"},[r("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),r($t,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:f,options:et.value,displayValue:f===0?o.lang.table.allRows:f,dark:d.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ft})])),_!==void 0)i=_(E.value);else if(i=[r("span",f!==0?{class:"q-table__bottom-item"}:{},[f?b(W.value+1,Math.min(K.value,Z.value),Z.value):b(1,_e.value,Z.value)])],f!==0&&G.value>1){const q={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(q.size="sm"),G.value>2&&i.push(r(ee,{key:"pgFirst",...q,icon:J.value[0],disable:ie.value,onClick:ue})),i.push(r(ee,{key:"pgPrev",...q,icon:J.value[1],disable:ie.value,onClick:ce}),r(ee,{key:"pgNext",...q,icon:J.value[2],disable:se.value,onClick:de})),G.value>2&&i.push(r(ee,{key:"pgLast",...q,icon:J.value[3],disable:se.value,onClick:ve}))}return t.push(r("div",{class:"q-table__control"},i)),t}function bt(){const t=e.gridHeader===!0?[r("table",{class:"q-table"},[Re()])]:e.loading===!0&&l.loading===void 0?qe():void 0;return r("div",{class:"q-table__middle"},t)}function mt(){const t=l.item!==void 0?l.item:i=>{const f=i.cols.map(_=>r("div",{class:"q-table__grid-item-row"},[r("div",{class:"q-table__grid-item-title"},[_.label]),r("div",{class:"q-table__grid-item-value"},[_.value])]));if(j.value===!0){const _=l["body-selection"],P=_!==void 0?_(i):[r(be,{modelValue:i.selected,color:e.color,dark:d.value,dense:e.dense,"onUpdate:modelValue":(q,V)=>{I([i.key],[i.row],q,V)}})];f.unshift(r("div",{class:"q-table__grid-item-row"},P),r(xt,{dark:d.value}))}const b={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(b.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(b.onClick=_=>{n("RowClick",_,i.row,i.pageIndex)}),e.onRowDblclick!==void 0&&(b.onDblclick=_=>{n("RowDblclick",_,i.row,i.pageIndex)})),r("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(i.selected===!0?" q-table__grid-item--selected":"")},[r("div",b,f)])};return r("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},M.value.map((i,f)=>t(ke({key:v.value(i),row:i,pageIndex:f}))))}return Object.assign(c.proxy,{requestServerInteraction:B,setPagination:O,firstPage:ue,prevPage:ce,nextPage:de,lastPage:ve,isRowSelected:oe,clearSelection:Ze,isRowExpanded:R,setExpanded:Q,sort:re,resetVirtualScroll:at,scrollTo:ot,getCellValue:D}),kt(c.proxy,{filteredSortedRows:()=>ae.value,computedRows:()=>M.value,computedRowsNumber:()=>Z.value}),()=>{const t=[ct()],i={ref:S,class:k.value};return e.grid===!0?t.push(bt()):Object.assign(i,{class:[i.class,e.cardClass],style:e.cardStyle}),t.push(nt(),vt()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),r("div",i,t)}}}),ql=N({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:l}){const n=U(),c=g(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return r("td",{class:c.value},A(l.default));const o=n.vnode.key,d=(e.props.colsMap!==void 0?e.props.colsMap[o]:null)||e.props.col;if(d===void 0)return;const{row:s}=e.props;return r("td",{class:c.value+d.__tdClass(s),style:d.__tdStyle(s)},A(l.default))}}}),Pl=N({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:l}){const n=g(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>r("tr",{class:n.value},A(l.default))}}),bl={class:"pl-1 text-base font-medium"},ml=He({__name:"CategoryBarItem",props:{name:{type:String,required:!0},icon:{type:String},active:{type:Boolean,required:!0}},setup(e){const l=Rt();return(n,c)=>{const o=Nt;return le(),Se("div",{class:ze(["flex flex-nowrap items-center justify-center w-26 p-2 cursor-pointer rounded-sm",{"bg-slate-400":e.active}]),style:Ot({color:"white",backgroundColor:e.active?"#0072FF":""})},[pt(o,{class:"w-5 h-5 mr-1",src:`/imgs/${e.icon}.png`,alt:"icon"},null,8,["src"]),Tt("p",bl,Bt(Fe(Ht)(e.name,Fe(l).state.lang)),1)],6)}}}),kl=He({__name:"CategoryBar",props:{categories:{type:Array,required:!0},selectCategory:{type:Function,required:!0}},setup(e){const l=e;return(n,c)=>{var o;return le(),Se("div",{class:ze([`rounded-lg w-full sm:grid grid-cols-${(o=e.categories)==null?void 0:o.length} items-center justify-start`])},[(le(!0),Se(Ft,null,Vt(e.categories,d=>(le(),Lt(ml,Mt({key:d.icon},d,{onClick:()=>l.selectCategory(d==null?void 0:d.name)}),null,16,["onClick"]))),128))],2)}}});export{ql as _,Pl as a,Cl as b,kl as c};
