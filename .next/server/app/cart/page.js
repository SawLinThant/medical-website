(()=>{var e={};e.id=5,e.ids=[5],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},33873:e=>{"use strict";e.exports=require("path")},11997:e=>{"use strict";e.exports=require("punycode")},27910:e=>{"use strict";e.exports=require("stream")},79551:e=>{"use strict";e.exports=require("url")},74075:e=>{"use strict";e.exports=require("zlib")},79326:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var s=r(70260),a=r(28203),i=r(25155),n=r.n(i),l=r(67292),o={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let c=["",{children:["cart",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,84302)),"D:\\NextJS\\medical website\\medical-clinic\\src\\app\\cart\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,96217)),"D:\\NextJS\\medical website\\medical-clinic\\src\\app\\cart\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,71354)),"D:\\NextJS\\medical website\\medical-clinic\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\NextJS\\medical website\\medical-clinic\\src\\app\\cart\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/cart/page",pathname:"/cart",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},40874:(e,t,r)=>{Promise.resolve().then(r.bind(r,17875))},3922:(e,t,r)=>{Promise.resolve().then(r.bind(r,68317))},57848:(e,t,r)=>{"use strict";r.d(t,{S:()=>S});var s=r(45512),a=r(58009),i=r(29952),n=r(6004),l=r(31412),o=r(13024),c=r(66582),d=r(38762),u=r(98060),m=r(30830),p="Checkbox",[h,f]=(0,n.A)(p),[x,g]=h(p),v=a.forwardRef((e,t)=>{let{__scopeCheckbox:r,name:n,checked:c,defaultChecked:d,required:u,disabled:p,value:h="on",onCheckedChange:f,form:g,...v}=e,[b,y]=a.useState(null),N=(0,i.s)(t,e=>y(e)),_=a.useRef(!1),S=!b||g||!!b.closest("form"),[C=!1,P]=(0,o.i)({prop:c,defaultProp:d,onChange:f}),q=a.useRef(C);return a.useEffect(()=>{let e=b?.form;if(e){let t=()=>P(q.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[b,P]),(0,s.jsxs)(x,{scope:r,state:C,disabled:p,children:[(0,s.jsx)(m.sG.button,{type:"button",role:"checkbox","aria-checked":j(C)?"mixed":C,"aria-required":u,"data-state":k(C),"data-disabled":p?"":void 0,disabled:p,value:h,...v,ref:N,onKeyDown:(0,l.m)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,l.m)(e.onClick,e=>{P(e=>!!j(e)||!e),S&&(_.current=e.isPropagationStopped(),_.current||e.stopPropagation())})}),S&&(0,s.jsx)(w,{control:b,bubbles:!_.current,name:n,value:h,checked:C,required:u,disabled:p,form:g,style:{transform:"translateX(-100%)"},defaultChecked:!j(d)&&d})]})});v.displayName=p;var b="CheckboxIndicator",y=a.forwardRef((e,t)=>{let{__scopeCheckbox:r,forceMount:a,...i}=e,n=g(b,r);return(0,s.jsx)(u.C,{present:a||j(n.state)||!0===n.state,children:(0,s.jsx)(m.sG.span,{"data-state":k(n.state),"data-disabled":n.disabled?"":void 0,...i,ref:t,style:{pointerEvents:"none",...e.style}})})});y.displayName=b;var w=e=>{let{control:t,checked:r,bubbles:i=!0,defaultChecked:n,...l}=e,o=a.useRef(null),u=(0,c.Z)(r),m=(0,d.X)(t);a.useEffect(()=>{let e=o.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(u!==r&&t){let s=new Event("click",{bubbles:i});e.indeterminate=j(r),t.call(e,!j(r)&&r),e.dispatchEvent(s)}},[u,r,i]);let p=a.useRef(!j(r)&&r);return(0,s.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:n??p.current,...l,tabIndex:-1,ref:o,style:{...e.style,...m,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function j(e){return"indeterminate"===e}function k(e){return j(e)?"indeterminate":e?"checked":"unchecked"}var N=r(24849),_=r(44195);let S=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(v,{ref:r,className:(0,_.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...t,children:(0,s.jsx)(y,{className:(0,_.cn)("flex items-center justify-center text-current"),children:(0,s.jsx)(N.A,{className:"h-4 w-4"})})}));S.displayName=v.displayName},46411:(e,t,r)=>{"use strict";r.d(t,{w:()=>d});var s=r(45512),a=r(58009),i=r(30830),n="horizontal",l=["horizontal","vertical"],o=a.forwardRef((e,t)=>{let{decorative:r,orientation:a=n,...o}=e,c=l.includes(a)?a:n;return(0,s.jsx)(i.sG.div,{"data-orientation":c,...r?{role:"none"}:{"aria-orientation":"vertical"===c?c:void 0,role:"separator"},...o,ref:t})});o.displayName="Separator";var c=r(44195);let d=a.forwardRef(({className:e,orientation:t="horizontal",decorative:r=!0,...a},i)=>(0,s.jsx)(o,{ref:i,decorative:r,orientation:t,className:(0,c.cn)("shrink-0 bg-border","horizontal"===t?"h-[1px] w-full":"h-full w-[1px]",e),...a}));d.displayName=o.displayName},99931:(e,t,r)=>{"use strict";r.d(t,{Z5:()=>a,d_:()=>n,kb:()=>i});var s=r(37713);(0,s.J1)`
  query getProducts {
    products(order_by: { created_at: desc }) {
      id
      name
      price
      bulk_price
      quantity
      description
      dosage
      usage
      storage
      shop {
        id
        name
        logo
        description
        address
        phone
        remark
        shop_admin_name
      }
      category {
        id
        name
      }
      images {
        id
        image_url
      }
    }
  }
`,(0,s.J1)`
  query getProducts {
    products(order_by: { price: asc }, limit: 5) {
      id
      name
      price
      bulk_price
      quantity
      description
      dosage
      usage
      storage
      shop {
        id
        name
        logo
        description
        address
        phone
        remark
        shop_admin_name
      }
      category {
        id
        name
      }
      images {
        id
        image_url
      }
    }
  }
`;let a=(0,s.J1)`
  query getProducts($id: uuid!) {
    products(where: { id: { _eq: $id } }) {
      id
      name
      price
      bulk_price
      quantity
      description
      dosage
      usage
      storage
      shop {
        id
        name
        logo
        description
        address
        phone
        remark
        shop_admin_name
      }
      category {
        id
        name
      }
      images {
        id
        image_url
      }
    }
  }
`;(0,s.J1)`
  query getProducts($category_id: uuid!) {
    products(where: { category_id: { _eq: $category_id } }) {
      id
      name
      price
      bulk_price
      quantity
      description
      dosage
      usage
      storage
      shop {
        id
        name
        logo
        description
        address
        phone
        remark
        shop_admin_name
      }
      category {
        id
        name
      }
      images {
        id
        image_url
      }
    }
  }
`;let i=(0,s.J1)`
  query getFilteredProducts(
    $where: products_bool_exp
    $offset: Int
    $limit: Int
  ) {
    products(
      where: $where
      order_by: { created_at: desc }
      offset: $offset
      limit: $limit
    ) {
      id
      name
      price
      bulk_price
      quantity
      description
      dosage
      usage
      storage
      shop {
        id
        name
        logo
        description
        address
        phone
        remark
        shop_admin_name
      }
      category {
        id
        name
      }
      images {
        id
        image_url
      }
    }
  }
`,n=(0,s.J1)`
  query getProductById($id: uuid!) {
    products_by_pk(id: $id) {
      id
      quantity
    }
  }
`},68317:(e,t,r)=>{"use strict";r.d(t,{default:()=>er});var s=r(45512),a=r(39400),i=r(77722),n=r(46411),l=r(90455),o=r(35668),c=r(44269);let d=(0,r(41680).A)("TicketPercent",[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"1l48ns"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);var u=r(58009),m=r(92273),p=r(57848),h=r(54716),f=r(99931),x=r(97412),g=r(20212),v=r(23331),b=r.t(v,2),y=r(10428),w=!1,j=b.useSyncExternalStore||function(e,t,r){var s=t();!1===globalThis.__DEV__||w||s===t()||(w=!0,!1!==globalThis.__DEV__&&g.V1.error(68));var a=v.useState({inst:{value:s,getSnapshot:t}}),i=a[0].inst,n=a[1];return y.JR?v.useLayoutEffect(function(){Object.assign(i,{value:s,getSnapshot:t}),k(i)&&n({inst:i})},[e,s,t]):Object.assign(i,{value:s,getSnapshot:t}),v.useEffect(function(){return k(i)&&n({inst:i}),e(function(){k(i)&&n({inst:i})})},[e]),s};function k(e){var t=e.value,r=e.getSnapshot;try{return t!==r()}catch(e){return!0}}var N=r(41948),_=r(55531),S=r(35542),C=r(36282),P=r(10742),q=r(44362),E=r(7752),M=r(63912),D=r(13687),R=r(53120),O=Symbol.for("apollo.hook.wrappers"),T=Object.prototype.hasOwnProperty;function $(){}var A=Symbol();function L(e,t){var r,s,a,i;return void 0===t&&(t=Object.create(null)),(r=Q,(i=(a=(s=(0,E.m)(t&&t.client).queryManager)&&s[O])&&a.useQuery)?i(r):r)(e,t)}function Q(e,t){var r,s,a,i,n,l,o,c,d,u,m,p,h,f,g,b,y,w,k,_,C,M,D,R,O=(n=(0,E.m)(t.client),o=!!(l=v.useContext((0,S.l)()).renderPromises),c=n.disableNetworkFetches,d=!1!==t.ssr&&!t.skip,u=t.partialRefetch,void 0===(r=t)&&(r={}),s=r.skip,r.ssr,r.onCompleted,r.onError,a=r.defaultOptions,i=(0,x.Tt)(r,["skip","ssr","onCompleted","onError","defaultOptions"]),m=function(t){var r=Object.assign(i,{query:e});return o&&("network-only"===r.fetchPolicy||"cache-and-network"===r.fetchPolicy)&&(r.fetchPolicy="cache-first"),r.variables||(r.variables={}),s?(r.initialFetchPolicy=r.initialFetchPolicy||r.fetchPolicy||V(a,n.defaultOptions),r.fetchPolicy="standby"):r.fetchPolicy||(r.fetchPolicy=(null==t?void 0:t.options.initialFetchPolicy)||V(a,n.defaultOptions)),r},f=(h=(p=function(e,t,r,s,a){function i(i){var n;return(0,q.D$)(t,q.KG.Query),{client:e,query:t,observable:s&&s.getSSRObservable(a())||e.watchQuery(J(void 0,e,r,a())),resultData:{previousData:null===(n=null==i?void 0:i.resultData.current)||void 0===n?void 0:n.data}}}var n=v.useState(i),l=n[0],o=n[1];function c(e){Object.assign(l.observable,((t={})[A]=e,t));var t,r,s=l.resultData;o((0,x.Cl)((0,x.Cl)({},l),{query:e.query,resultData:Object.assign(s,{previousData:(null===(r=s.current)||void 0===r?void 0:r.data)||s.previousData,current:void 0})}))}if(e!==l.client||t!==l.query){var d=i(l);return o(d),[d,c]}return[l,c]}(n,e,t,l,m))[0]).observable,g=h.resultData,b=p[1],y=m(f),f[A]&&!(0,N.L)(f[A],y)&&(f.reobserve(J(f,n,t,y)),g.previousData=(null===(w=g.current)||void 0===w?void 0:w.data)||g.previousData,g.current=void 0),f[A]=y,k=v.useMemo(function(){return{refetch:f.refetch.bind(f),reobserve:f.reobserve.bind(f),fetchMore:f.fetchMore.bind(f),updateQuery:f.updateQuery.bind(f),startPolling:f.startPolling.bind(f),stopPolling:f.stopPolling.bind(f),subscribeToMore:f.subscribeToMore.bind(f)}},[f]),l&&d&&(l.registerSSRObservable(f),f.getCurrentResult().loading&&l.addObservableQueryPromise(f)),{result:(_={onCompleted:t.onCompleted||$,onError:t.onError||$},C=v.useRef(_),v.useEffect(function(){C.current=_}),M=(o||c)&&!1===t.ssr&&!t.skip?F:t.skip||"standby"===y.fetchPolicy?z:void 0,D=g.previousData,R=v.useMemo(function(){return M&&I(M,D,f,n)},[n,f,M,D]),j(v.useCallback(function(e){if(o)return function(){};var t=function(){var t=g.current,r=f.getCurrentResult();t&&t.loading===r.loading&&t.networkStatus===r.networkStatus&&(0,N.L)(t.data,r.data)||G(r,g,f,n,u,e,C.current)},r=function(a){if(s.current.unsubscribe(),s.current=f.resubscribeAfterError(t,r),!T.call(a,"graphQLErrors"))throw a;var i=g.current;(!i||i&&i.loading||!(0,N.L)(a,i.error))&&G({data:i&&i.data,error:a,loading:!1,networkStatus:P.pT.error},g,f,n,u,e,C.current)},s={current:f.subscribe(t,r)};return function(){setTimeout(function(){return s.current.unsubscribe()})}},[c,o,f,g,u,n]),function(){return R||K(g,f,C.current,u,n)},function(){return R||K(g,f,C.current,u,n)})),obsQueryFields:k,observable:f,resultData:g,client:n,onQueryExecuted:b}),L=O.result,Q=O.obsQueryFields;return v.useMemo(function(){return(0,x.Cl)((0,x.Cl)({},L),Q)},[L,Q])}function J(e,t,r,s){var a=[],i=t.defaultOptions.watchQuery;return i&&a.push(i),r.defaultOptions&&a.push(r.defaultOptions),a.push((0,M.o)(e&&e.options,s)),a.reduce(_.l)}function G(e,t,r,s,a,i,n){var l=t.current;l&&l.data&&(t.previousData=l.data),!e.error&&(0,D.E)(e.errors)&&(e.error=new C.K4({graphQLErrors:e.errors})),t.current=I(e.partial&&a&&!e.loading&&(!e.data||0===Object.keys(e.data).length)&&"cache-only"!==r.options.fetchPolicy?(r.refetch(),(0,x.Cl)((0,x.Cl)({},e),{loading:!0,networkStatus:P.pT.refetch})):e,t.previousData,r,s),i(),function(e,t,r){if(!e.loading){var s=(0,D.E)(e.errors)?new C.K4({graphQLErrors:e.errors}):e.error;Promise.resolve().then(function(){s?r.onError(s):e.data&&t!==e.networkStatus&&e.networkStatus===P.pT.ready&&r.onCompleted(e.data)}).catch(function(e){!1!==globalThis.__DEV__&&g.V1.warn(e)})}}(e,null==l?void 0:l.networkStatus,n)}function K(e,t,r,s,a){return e.current||G(t.getCurrentResult(),e,t,a,s,function(){},r),e.current}function V(e,t){var r;return(null==e?void 0:e.fetchPolicy)||(null===(r=null==t?void 0:t.watchQuery)||void 0===r?void 0:r.fetchPolicy)||"cache-first"}function I(e,t,r,s){var a=e.data,i=(e.partial,(0,x.Tt)(e,["data","partial"]));return(0,x.Cl)((0,x.Cl)({data:a},i),{client:s,observable:r,variables:r.variables,called:e!==F&&e!==z,previousData:t})}var F=(0,R.G)({loading:!0,data:void 0,error:void 0,networkStatus:P.pT.loading}),z=(0,R.G)({loading:!1,data:void 0,error:void 0,networkStatus:P.pT.ready});let B=e=>{let{data:t,loading:r,error:s,refetch:a}=L(f.Z5,{variables:{id:e},skip:!e});return{product:t?.products?.[0]||null,loadingProduct:r,error:s,refetchProduct:a}},X=()=>{let[e,t]=(0,u.useState)({}),[r,s]=(0,u.useState)(1),[a,i]=(0,u.useState)(10),n=(0,u.useMemo)(()=>(r-1)*a,[r,a]),l=(0,u.useMemo)(()=>{let t={};return e.shop_id&&(t.shop_id={_eq:e.shop_id}),e.name&&(t.name={_ilike:`%${e.name}%`}),e.category&&(t.category={id:{_eq:e.category}}),e.priceRange&&(t.price={_gte:e.priceRange.start_price,_lte:e.priceRange.end_price}),Object.keys(t).length>0?t:void 0},[e]),{data:o,loading:c,error:d,refetch:m}=L(f.kb,{variables:{where:l,offset:n,limit:a},fetchPolicy:"network-only"});return{products:o?.products||[],loadingProducts:c,error:d,filters:e,setFilters:t,page:r,setPage:s,take:a,setTake:i,totalCount:o?.products_aggregate?.aggregate?.count||1,refetchProducts:m}};var Z=r(44195),H=r(45103);let U=({item:e,isSelected:t,onSelect:r})=>{let{product:i,loadingProduct:n}=B(e.id),o=(0,m.wA)(),c=()=>{if(n)return;let t=e.quantity;if(i&&t+1>i.quantity){(0,h.oR)({description:"Cannot add more items than available in stock."});return}o((0,l.bE)({...e,quantity:1}))};return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:(0,Z.cn)("w-full lg:flex md:flex hidden flex-row items-center justify-between px-2 py-6 hover:bg-slate-200",{"bg-slate-200":t}),children:[(0,s.jsx)("div",{className:"w-12 min-h-14 items-center justify-center lg:flex md:flex hidden",children:(0,s.jsx)(p.S,{checked:t,onCheckedChange:e=>r(e),id:e.id})}),(0,s.jsxs)("div",{className:"w-full flex lg:flex-row md:flex-row flex-col items-center justify-between",children:[(0,s.jsx)("div",{className:"text-muted-foreground text-lg",children:(0,s.jsx)("div",{className:"h-full w-full flex items-center justify-start",children:(0,s.jsx)("div",{className:"md:w-20 lg:w-20 w-[10rem] lg:h-14 md:h-14 h-20 relative",children:(0,s.jsx)(H.default,{layout:"fill",alt:"product",src:e?.images?.[0].image_url||"/images/image_placeholder.jpg",className:"object-cover"})})})}),(0,s.jsxs)("div",{className:"min-w-20 flex flex-col items-start justify-center gap-2",children:[(0,s.jsx)("span",{className:"font-semibold",children:"Product"}),(0,s.jsxs)("div",{className:"flex flex-row gap-2 items-center justify-start",children:[(0,s.jsx)("span",{className:"text-muted-foreground text-left text-sm",children:"Brand:"}),(0,s.jsx)("span",{className:"text-sm",children:"No Brand"})]})]}),(0,s.jsx)("span",{className:"w-28 max-w-28 text-muted-foreground text-lg",children:(0,s.jsxs)("div",{className:"w-full flex items-center justify-start gap-2 text-muted-foreground",children:[(0,s.jsxs)("span",{className:"text-sm",children:["MMK ",e.bulk_price?.toLocaleString()]}),(0,s.jsxs)("span",{className:"line-through  text-xs",children:["MMK ",e.price.toLocaleString()]})]})}),(0,s.jsx)("div",{className:"min-w-20 text-muted-foreground text-lg",children:(0,s.jsx)("div",{className:"flex flex-col gap-2",children:(0,s.jsxs)("div",{className:"flex flex-row flex-shrink-0 w-28 max-w-28 border items-center border-gray-400 rounded",children:[(0,s.jsx)(a.$,{onClick:()=>o((0,l.JA)(e.id)),className:"h-full w-1/3 rounded-r-none rounded-l bg-transparent border-r hover:bg-secondary_color hover:text-white text-black",children:"-"}),(0,s.jsx)("div",{className:"w-1/3 h-full text-center flex items-center justify-center",children:(0,s.jsx)("span",{className:"text-sm",children:e.quantity})}),(0,s.jsx)(a.$,{onClick:c,className:"h-full w-1/3 bg-transparent rounded-l-none border-l text-black hover:bg-secondary_color hover:text-white rounded-r",children:"+"})]})})}),(0,s.jsxs)("span",{className:"min-w-28 text-muted-foreground text-sm",children:["MMK"," ",((e.bulk_price&&e.bulk_price>0?e.bulk_price:e.price)*e.quantity).toLocaleString()]})]})]},e.id),(0,s.jsx)("div",{className:"w-full lg:hidden md:hidden flex flex-col min-h-28 p-3",children:(0,s.jsxs)("div",{className:"w-full h-full flex flex-row gap-4 py-3",children:[(0,s.jsxs)("div",{className:"flex flex-row items-start h-full",children:[(0,s.jsx)("div",{className:"w-12 min-h-14 items-center justify-center flex",children:(0,s.jsx)(p.S,{checked:t,onCheckedChange:e=>r(e),id:e.id})}),(0,s.jsx)("div",{className:"w-24 h-20 relative",children:(0,s.jsx)(H.default,{layout:"fill",alt:"product",src:e?.images?.[0].image_url||"/images/image_placeholder.jpg",className:"object-cotain bg-white"})})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-1 justify-start",children:[(0,s.jsx)("h2",{className:"font-semibold",children:e.name}),(0,s.jsxs)("span",{className:"text-muted-foreground text-xs",children:["Brand: ",(0,s.jsx)("span",{className:"text-secondary_color",children:"No brand"})]}),(0,s.jsxs)("div",{className:"w-full mt-2 flex items-center justify-start gap-2 text-muted-foreground",children:[(0,s.jsxs)("span",{className:"text-sm",children:["MMK ",e.bulk_price?.toLocaleString()]}),(0,s.jsxs)("span",{className:"line-through  text-xs",children:["MMK ",e.price.toLocaleString()]})]}),(0,s.jsxs)("span",{className:"text-sm",children:["Total MMK "," ",((e.bulk_price&&e.bulk_price>0?e.bulk_price:e.price)*e.quantity).toLocaleString()]}),(0,s.jsxs)("div",{className:"flex flex-row flex-shrink-0 w-28 max-w-28 border items-center border-gray-400 rounded mt-3",children:[(0,s.jsx)(a.$,{onClick:()=>o((0,l.JA)(e.id)),className:"h-full w-1/3 rounded-r-none rounded-l bg-transparent border-r hover:bg-secondary_color hover:text-white text-black",children:"-"}),(0,s.jsx)("div",{className:"w-1/3 h-full text-center flex items-center justify-center",children:(0,s.jsx)("span",{className:"text-sm",children:e.quantity})}),(0,s.jsx)(a.$,{onClick:c,className:"h-full w-1/3 bg-transparent rounded-l-none border-l text-black hover:bg-secondary_color hover:text-white rounded-r",children:"+"})]})]})]})})]})};var W=r(3069),Y=r(79334);let ee=()=>{let[e,t]=(0,u.useState)(null),[r,s]=(0,u.useState)(!0),[a,i]=(0,u.useState)(null);return(0,u.useEffect)(()=>{(async()=>{try{let e=await (0,Z.v)();t(e)}catch(e){i(e)}finally{s(!1)}})()},[]),{sessionData:e,loading:r,error:a}},et=e=>e.reduce((e,t)=>e+(t&&t.bulk_price&&t.bulk_price>0?t.bulk_price:t.price)*t.quantity,0),er=()=>{let[e,t]=(0,u.useState)(!1),r=(0,m.wA)(),f=(0,Y.useRouter)(),[x,g]=(0,u.useState)([]),v=(0,m.d4)(e=>e.cart.cartItems),{sessionData:b}=ee(),y=v.length>0&&x.length===v.length,w=e=>{e?g(v.map(e=>e.id)):g([])},j=(e,t)=>{t?g(t=>[...t,e]):g(t=>t.filter(t=>t!==e))},k=et(v),N=v&&v[0]?v[0].category?.id:null,{products:_,setTake:S,setFilters:C}=X(),P=_?.filter(e=>!v.find(t=>t.id===e.id));return(0,u.useEffect)(()=>{S(10),C({shop_id:"",name:"",category:N})},[C,S]),(0,u.useEffect)(()=>{t(!0),(0,Z.o)()},[v]),(0,s.jsxs)("section",{className:"w-full flex flex-col items-center",children:[(0,s.jsxs)("div",{className:"lg:w-4/5 md:w-full w-full flex flex-col",children:[(0,s.jsxs)("div",{className:"w-full lg:flex md:flex hidden flex-row items-center justify-between p-2",children:[(0,s.jsx)("div",{className:"w-12 min-h-14 flex items-center justify-center",children:(0,s.jsx)(p.S,{checked:y,onCheckedChange:e=>w(e),id:"select-all"})}),(0,s.jsxs)("div",{className:"w-full flex flex-row items-center justify-between",children:[(0,s.jsx)("span",{className:"min-w-20 text-muted-foreground",children:"Item"}),(0,s.jsx)("span",{className:"min-w-20 text-muted-foreground"}),(0,s.jsx)("div",{className:"min-w-28 text-muted-foreground",children:"Discount Price"}),(0,s.jsx)("span",{className:"min-w-20 text-muted-foreground",children:"Quantity"}),(0,s.jsx)("span",{className:"min-w-28 text-muted-foreground",children:"Total"})]})]}),(0,s.jsxs)("div",{className:"w-full flex lg:hidden md:hidden flex-row items-center justify-start px-3",children:[(0,s.jsx)("div",{className:"min-w-12 min-h-14 flex flex-row items-center justify-center",children:(0,s.jsx)(p.S,{checked:y,onCheckedChange:e=>w(e),id:"select-all"})}),(0,s.jsx)("span",{children:"All"})]}),(0,s.jsxs)("div",{className:"w-full mt-4 flex flex-col border shadow-lg rounded-md lg:h-[70vh] overflow-auto scrollbar-thin",children:[e&&v.length>0&&v.map(e=>(0,s.jsx)(U,{item:e,isSelected:x.includes(e.id),onSelect:t=>j(e.id,t)},e.id)),e&&v.length<1?(0,s.jsxs)("div",{className:"w-full lg:h-full md:h-full h-20 flex lg:flex-row md:flex-row flex-col items-center justify-center lg:gap-3 md:gap-3",children:[(0,s.jsx)("h2",{className:"text-secondary_color",children:"No item in the cart!"}),(0,s.jsx)("span",{onClick:()=>f.push("/home"),className:"underline text-blue-500 hover:cursor-pointer",children:"Shop Now"})]}):null]}),(0,s.jsx)("div",{className:"h-6"}),(0,s.jsx)(n.w,{className:"my-4 border-t border-gray-400"}),(0,s.jsxs)("div",{className:"min-h-16 flex lg:flex-row md:flex-row flex-col items-center justify-between lg:gap-0 md:gap-0 gap-6",children:[(0,s.jsxs)("div",{className:"flex lg:flex-row md:flex-row flex-col lg:gap-4 md:gap-4 gap-2",children:[(0,s.jsxs)(a.$,{onClick:()=>f.push("/home"),className:"flex flex-row h-8 gap-2 items-center bg-secondary_color text-white rounded-md",children:[(0,s.jsx)(o.A,{}),"continue shopping"]}),(0,s.jsxs)(a.$,{variant:"outline",onClick:()=>r((0,l.sX)()),className:"flex flex-row h-8 gap-2 items-center text-secondary_color rounded-md",children:[(0,s.jsx)(c.A,{}),"clear shopping cart"]})]}),(0,s.jsxs)("div",{className:"flex flex-row gap-4 items-center lg:mr-12",children:[(0,s.jsx)("span",{className:"text-secondary_color text-sm",children:"Subtotal:"}),e&&(0,s.jsxs)("span",{className:"font-semibold",children:["MMK"," ",k.toLocaleString()]})]})]}),(0,s.jsx)(n.w,{className:"my-4 border-t border-gray-400"}),(0,s.jsx)("div",{className:"w-full lg:py-12 md:py-10 flex items-center justify-center",children:(0,s.jsxs)("div",{className:"w-full max-w-[33rem] min-h-24 flex flex-col gap-4",children:[(0,s.jsxs)("p",{className:"text-center text-sm text-muted-foreground leading-6",children:["To enjoy exclusive savings on your purchase, please enter your discount coupon code if you have one available. Make sure to check for any expiration dates or specific terms associated with your coupon!"," "]}),(0,s.jsxs)("div",{className:"w-full relative lg:mt-8 md:mt-8 mt-4",children:[(0,s.jsx)(i.p,{className:"w-full h-10 rounded-md bg-secondary_color/20 pr-24 pl-4 focus-visible:ring-offset-0 focus-visible:ring-0",placeholder:"Enter cupon code"}),(0,s.jsxs)("div",{className:"absolute right-2.5 top-[0.5rem] flex flex-row items-center gap-4",children:[(0,s.jsx)("div",{children:(0,s.jsx)(d,{color:"black",strokeWidth:1.25})}),(0,s.jsx)(a.$,{className:"rounded-lg border-none h-6 text-sm text-secondary_color",variant:"outline",children:"Apply Cupon"})]})]})]})}),(0,s.jsx)(n.w,{className:"my-4 border-t border-gray-400"}),(0,s.jsx)("div",{className:"flex items-center justify-center mt-8",children:(0,s.jsxs)(a.$,{onClick:()=>{b?f.push("/checkout"):(0,h.oR)({description:"Please Login First"})},className:"rounded-md min-h-6 min-w-10 bg-secondary_color text-white",children:["Proceed to checkout (",e&&v.length>0?v.length:0,")"]})})]}),(0,s.jsx)("div",{className:"w-full min-h-32",children:(0,s.jsx)(W.ProductReel,{products:P||[]})})]})}},96217:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(62740),a=r(27837);function i({children:e}){return(0,s.jsx)(a.A,{children:e})}},84302:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,generateMetadata:()=>i});var s=r(62740),a=r(17875);async function i(){return{title:"Nat Say Myanmar - Cart",description:"Check",openGraph:{title:"Nat Say Myanmar - Products",description:"Check cart and prceed to checkout",url:`${process.env.NEXT_PUBLIC_BASE_URL||"http://localhost:3000"}/home`,images:"/images/logo.png"}}}let n=async()=>{try{return(0,s.jsx)("div",{className:"w-full flex flex-col items-center lg:min-h-72",children:(0,s.jsx)("div",{className:"w-full max-w-[1300px] lg:mt-16 md:mt-16 mt-4",children:(0,s.jsx)(a.default,{})})})}catch(e){return console.error("Error fetching data:",e),(0,s.jsx)("div",{children:"Error loading data"})}}},17875:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var s=r(46760);(0,s.registerClientReference)(function(){throw Error("Attempted to call calculateTotalPrice() from the server but calculateTotalPrice is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\medical website\\medical-clinic\\src\\modules\\cart\\cart-item-list\\index.tsx","calculateTotalPrice");let a=(0,s.registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\NextJS\\\\medical website\\\\medical-clinic\\\\src\\\\modules\\\\cart\\\\cart-item-list\\\\index.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\medical website\\medical-clinic\\src\\modules\\cart\\cart-item-list\\index.tsx","default")},7752:(e,t,r)=>{"use strict";r.d(t,{m:()=>n});var s=r(20212),a=r(23331),i=r(35542);function n(e){var t=a.useContext((0,i.l)()),r=e||t.client;return(0,s.V1)(!!r,58),r}},44362:(e,t,r)=>{"use strict";r.d(t,{D$:()=>u,KG:()=>s});var s,a,i=r(20212),n=r(18934),l=r(57107),o=r(80962);function c(e){var t;switch(e){case s.Query:t="Query";break;case s.Mutation:t="Mutation";break;case s.Subscription:t="Subscription"}return t}function d(e){a||(a=new n.A(l.v.parser||1e3));var t,r,o=a.get(e);if(o)return o;(0,i.V1)(!!e&&!!e.kind,70,e);for(var c=[],d=[],u=[],m=[],p=0,h=e.definitions;p<h.length;p++){var f=h[p];if("FragmentDefinition"===f.kind){c.push(f);continue}if("OperationDefinition"===f.kind)switch(f.operation){case"query":d.push(f);break;case"mutation":u.push(f);break;case"subscription":m.push(f)}}(0,i.V1)(!c.length||d.length||u.length||m.length,71),(0,i.V1)(d.length+u.length+m.length<=1,72,e,d.length,m.length,u.length),r=d.length?s.Query:s.Mutation,d.length||u.length||(r=s.Subscription);var x=d.length?d:u.length?u:m;(0,i.V1)(1===x.length,73,e,x.length);var g=x[0];t=g.variableDefinitions||[];var v={name:g.name&&"Name"===g.name.kind?g.name.value:"data",type:r,variables:t};return a.set(e,v),v}function u(e,t){var r=d(e),s=c(t),a=c(r.type);(0,i.V1)(r.type===t,74,s,s,a)}(function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"})(s||(s={})),d.resetCache=function(){a=void 0},!1!==globalThis.__DEV__&&(0,o.D_)("parser",function(){return a?a.size:0})}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[989,686,77,945,832,52,768,69],()=>r(79326));module.exports=s})();