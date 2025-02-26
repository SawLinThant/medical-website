(()=>{var e={};e.id=5,e.ids=[5],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},33873:e=>{"use strict";e.exports=require("path")},11997:e=>{"use strict";e.exports=require("punycode")},27910:e=>{"use strict";e.exports=require("stream")},79551:e=>{"use strict";e.exports=require("url")},74075:e=>{"use strict";e.exports=require("zlib")},51149:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var s=r(70260),a=r(28203),l=r(25155),n=r.n(l),i=r(67292),o={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);r.d(t,o);let c=["",{children:["cart",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,84302)),"D:\\NextJS\\new medical web\\natsay_web_client\\src\\app\\cart\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,96217)),"D:\\NextJS\\new medical web\\natsay_web_client\\src\\app\\cart\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,71354)),"D:\\NextJS\\new medical web\\natsay_web_client\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"]}],d=["D:\\NextJS\\new medical web\\natsay_web_client\\src\\app\\cart\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/cart/page",pathname:"/cart",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},69245:(e,t,r)=>{Promise.resolve().then(r.bind(r,17875))},64509:(e,t,r)=>{Promise.resolve().then(r.bind(r,68317))},85314:(e,t,r)=>{"use strict";r.d(t,{Carousel:()=>m,CarouselContent:()=>h,CarouselItem:()=>f,CarouselNext:()=>x,CarouselPrevious:()=>p});var s=r(45512),a=r(58009),l=r(97203),n=r(35668),i=r(15907),o=r(44195),c=r(39400);let d=a.createContext(null);function u(){let e=a.useContext(d);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let m=a.forwardRef(({orientation:e="horizontal",opts:t,setApi:r,plugins:n,className:i,children:c,...u},m)=>{let[h,f]=(0,l.A)({...t,axis:"horizontal"===e?"x":"y"},n),[p,x]=a.useState(!1),[g,v]=a.useState(!1),b=a.useCallback(e=>{e&&(x(e.canScrollPrev()),v(e.canScrollNext()))},[]),y=a.useCallback(()=>{f?.scrollPrev()},[f]),w=a.useCallback(()=>{f?.scrollNext()},[f]),j=a.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),y()):"ArrowRight"===e.key&&(e.preventDefault(),w())},[y,w]);return a.useEffect(()=>{f&&r&&r(f)},[f,r]),a.useEffect(()=>{if(f)return b(f),f.on("reInit",b),f.on("select",b),()=>{f?.off("select",b)}},[f,b]),(0,s.jsx)(d.Provider,{value:{carouselRef:h,api:f,opts:t,orientation:e||(t?.axis==="y"?"vertical":"horizontal"),scrollPrev:y,scrollNext:w,canScrollPrev:p,canScrollNext:g},children:(0,s.jsx)("div",{ref:m,onKeyDownCapture:j,className:(0,o.cn)("relative",i),role:"region","aria-roledescription":"carousel",...u,children:c})})});m.displayName="Carousel";let h=a.forwardRef(({className:e,...t},r)=>{let{carouselRef:a,orientation:l}=u();return(0,s.jsx)("div",{ref:a,className:"overflow-hidden",children:(0,s.jsx)("div",{ref:r,className:(0,o.cn)("flex","horizontal"===l?"":"-mt-4 flex-col",e),...t})})});h.displayName="CarouselContent";let f=a.forwardRef(({className:e,...t},r)=>{let{orientation:a}=u();return(0,s.jsx)("div",{ref:r,role:"group","aria-roledescription":"slide",className:(0,o.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===a?"":"pt-4",e),...t})});f.displayName="CarouselItem";let p=a.forwardRef(({className:e,variant:t="outline",size:r="icon",...a},l)=>{let{orientation:i,scrollPrev:d,canScrollPrev:m}=u();return(0,s.jsxs)(c.$,{ref:l,variant:t,size:r,className:(0,o.cn)(" h-8 w-8 rounded-md","horizontal"===i?"":"-top-12 left-1/2 -translate-x-1/2 rotate-90",{"bg-secondary_color text-white":m,className:e}),disabled:!m,onClick:d,...a,children:[(0,s.jsx)(n.A,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});p.displayName="CarouselPrevious";let x=a.forwardRef(({className:e,variant:t="outline",size:r="icon",...a},l)=>{let{orientation:n,scrollNext:d,canScrollNext:m}=u();return(0,s.jsxs)(c.$,{ref:l,variant:t,size:r,className:(0,o.cn)("h-8 w-8 rounded-md","horizontal"===n?"":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",{"bg-secondary_color text-white":m,className:e}),disabled:!m,onClick:d,...a,children:[(0,s.jsx)(i.A,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Next slide"})]})});x.displayName="CarouselNext"},57848:(e,t,r)=>{"use strict";r.d(t,{S:()=>C});var s=r(45512),a=r(58009),l=r(29952),n=r(6004),i=r(31412),o=r(13024),c=r(66582),d=r(38762),u=r(98060),m=r(18055),h="Checkbox",[f,p]=(0,n.A)(h),[x,g]=f(h),v=a.forwardRef((e,t)=>{let{__scopeCheckbox:r,name:n,checked:c,defaultChecked:d,required:u,disabled:h,value:f="on",onCheckedChange:p,form:g,...v}=e,[b,y]=a.useState(null),_=(0,l.s)(t,e=>y(e)),k=a.useRef(!1),C=!b||g||!!b.closest("form"),[S=!1,P]=(0,o.i)({prop:c,defaultProp:d,onChange:p}),q=a.useRef(S);return a.useEffect(()=>{let e=b?.form;if(e){let t=()=>P(q.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[b,P]),(0,s.jsxs)(x,{scope:r,state:S,disabled:h,children:[(0,s.jsx)(m.sG.button,{type:"button",role:"checkbox","aria-checked":j(S)?"mixed":S,"aria-required":u,"data-state":N(S),"data-disabled":h?"":void 0,disabled:h,value:f,...v,ref:_,onKeyDown:(0,i.m)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,i.m)(e.onClick,e=>{P(e=>!!j(e)||!e),C&&(k.current=e.isPropagationStopped(),k.current||e.stopPropagation())})}),C&&(0,s.jsx)(w,{control:b,bubbles:!k.current,name:n,value:f,checked:S,required:u,disabled:h,form:g,style:{transform:"translateX(-100%)"},defaultChecked:!j(d)&&d})]})});v.displayName=h;var b="CheckboxIndicator",y=a.forwardRef((e,t)=>{let{__scopeCheckbox:r,forceMount:a,...l}=e,n=g(b,r);return(0,s.jsx)(u.C,{present:a||j(n.state)||!0===n.state,children:(0,s.jsx)(m.sG.span,{"data-state":N(n.state),"data-disabled":n.disabled?"":void 0,...l,ref:t,style:{pointerEvents:"none",...e.style}})})});y.displayName=b;var w=e=>{let{control:t,checked:r,bubbles:l=!0,defaultChecked:n,...i}=e,o=a.useRef(null),u=(0,c.Z)(r),m=(0,d.X)(t);a.useEffect(()=>{let e=o.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(u!==r&&t){let s=new Event("click",{bubbles:l});e.indeterminate=j(r),t.call(e,!j(r)&&r),e.dispatchEvent(s)}},[u,r,l]);let h=a.useRef(!j(r)&&r);return(0,s.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:n??h.current,...i,tabIndex:-1,ref:o,style:{...e.style,...m,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function j(e){return"indeterminate"===e}function N(e){return j(e)?"indeterminate":e?"checked":"unchecked"}var _=r(24849),k=r(44195);let C=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(v,{ref:r,className:(0,k.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...t,children:(0,s.jsx)(y,{className:(0,k.cn)("flex items-center justify-center text-current"),children:(0,s.jsx)(_.A,{className:"h-4 w-4"})})}));C.displayName=v.displayName},46411:(e,t,r)=>{"use strict";r.d(t,{w:()=>d});var s=r(45512),a=r(58009),l=r(18055),n="horizontal",i=["horizontal","vertical"],o=a.forwardRef((e,t)=>{let{decorative:r,orientation:a=n,...o}=e,c=i.includes(a)?a:n;return(0,s.jsx)(l.sG.div,{"data-orientation":c,...r?{role:"none"}:{"aria-orientation":"vertical"===c?c:void 0,role:"separator"},...o,ref:t})});o.displayName="Separator";var c=r(44195);let d=a.forwardRef(({className:e,orientation:t="horizontal",decorative:r=!0,...a},l)=>(0,s.jsx)(o,{ref:l,decorative:r,orientation:t,className:(0,c.cn)("shrink-0 bg-border","horizontal"===t?"h-[1px] w-full":"h-full w-[1px]",e),...a}));d.displayName=o.displayName},97093:(e,t,r)=>{"use strict";r.d(t,{E:()=>l});var s=r(45512),a=r(44195);function l({className:e,...t}){return(0,s.jsx)("div",{className:(0,a.cn)("animate-pulse rounded-md bg-muted",e),...t})}},99931:(e,t,r)=>{"use strict";r.d(t,{Z5:()=>a,d_:()=>n,kb:()=>l});var s=r(37713);(0,s.J1)`
  query getProducts($today: timestamptz!) {
    products(
      where: { created_at: { _lte: $today } }
      order_by: { created_at: desc }
    ) {
      id
      name
      price
      bulk_price
      quantity
      description
      discount_price
      dosage
      usage
      average_rating
      review_count
      created_at
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
  query getTopSaverProducts($today: timestamptz!) {
    products(
      where: { created_at: { _lte: $today } }
      order_by: { price: asc }
      limit: 5
    ) {
      id
      name
      price
      bulk_price
      discount_price
      quantity
      description
      dosage
      usage
      storage
      average_rating
      review_count
      category_id
      updated_at
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
      discount_price
      dosage
      average_rating
      review_count
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
      discount_price
      dosage
      usage
      average_rating
      review_count
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
`;let l=(0,s.J1)`
  query getFilteredProducts(
    $where: products_bool_exp!
    $offset: Int
    $today: timestamptz!
    $limit: Int
    $orderBy: [products_order_by!]
  ) {
    products(
      where: { _and: [{ created_at: { _lte: $today } }, $where] }
      order_by: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      name
      price
      bulk_price
      discount_price
      quantity
      description
      average_rating
      review_count
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
    products_aggregate(where: $where) {
      aggregate {
        count
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
`},68317:(e,t,r)=>{"use strict";r.d(t,{default:()=>es});var s=r(45512),a=r(39400),l=r(77722),n=r(46411),i=r(90455),o=r(35668),c=r(44269);let d=(0,r(41680).A)("TicketPercent",[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"1l48ns"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);var u=r(58009),m=r(92273),h=r(57848),f=r(54716),p=r(99931),x=r(97412),g=r(20212),v=r(23331),b=r.t(v,2),y=r(10428),w=!1,j=b.useSyncExternalStore||function(e,t,r){var s=t();!1===globalThis.__DEV__||w||s===t()||(w=!0,!1!==globalThis.__DEV__&&g.V1.error(68));var a=v.useState({inst:{value:s,getSnapshot:t}}),l=a[0].inst,n=a[1];return y.JR?v.useLayoutEffect(function(){Object.assign(l,{value:s,getSnapshot:t}),N(l)&&n({inst:l})},[e,s,t]):Object.assign(l,{value:s,getSnapshot:t}),v.useEffect(function(){return N(l)&&n({inst:l}),e(function(){N(l)&&n({inst:l})})},[e]),s};function N(e){var t=e.value,r=e.getSnapshot;try{return t!==r()}catch(e){return!0}}var _=r(41948),k=r(55531),C=r(35542),S=r(36282),P=r(10742),q=r(44362),E=r(7752),M=r(63912),D=r(13687),$=r(53120),R=Symbol.for("apollo.hook.wrappers"),A=Object.prototype.hasOwnProperty;function L(){}var O=Symbol();function T(e,t){var r,s,a,l;return void 0===t&&(t=Object.create(null)),(r=Q,(l=(a=(s=(0,E.m)(t&&t.client).queryManager)&&s[R])&&a.useQuery)?l(r):r)(e,t)}function Q(e,t){var r,s,a,l,n,i,o,c,d,u,m,h,f,p,g,b,y,w,N,k,S,M,D,$,R=(n=(0,E.m)(t.client),o=!!(i=v.useContext((0,C.l)()).renderPromises),c=n.disableNetworkFetches,d=!1!==t.ssr&&!t.skip,u=t.partialRefetch,void 0===(r=t)&&(r={}),s=r.skip,r.ssr,r.onCompleted,r.onError,a=r.defaultOptions,l=(0,x.Tt)(r,["skip","ssr","onCompleted","onError","defaultOptions"]),m=function(t){var r=Object.assign(l,{query:e});return o&&("network-only"===r.fetchPolicy||"cache-and-network"===r.fetchPolicy)&&(r.fetchPolicy="cache-first"),r.variables||(r.variables={}),s?(r.initialFetchPolicy=r.initialFetchPolicy||r.fetchPolicy||J(a,n.defaultOptions),r.fetchPolicy="standby"):r.fetchPolicy||(r.fetchPolicy=(null==t?void 0:t.options.initialFetchPolicy)||J(a,n.defaultOptions)),r},p=(f=(h=function(e,t,r,s,a){function l(l){var n;return(0,q.D$)(t,q.KG.Query),{client:e,query:t,observable:s&&s.getSSRObservable(a())||e.watchQuery(z(void 0,e,r,a())),resultData:{previousData:null===(n=null==l?void 0:l.resultData.current)||void 0===n?void 0:n.data}}}var n=v.useState(l),i=n[0],o=n[1];function c(e){Object.assign(i.observable,((t={})[O]=e,t));var t,r,s=i.resultData;o((0,x.Cl)((0,x.Cl)({},i),{query:e.query,resultData:Object.assign(s,{previousData:(null===(r=s.current)||void 0===r?void 0:r.data)||s.previousData,current:void 0})}))}if(e!==i.client||t!==i.query){var d=l(i);return o(d),[d,c]}return[i,c]}(n,e,t,i,m))[0]).observable,g=f.resultData,b=h[1],y=m(p),p[O]&&!(0,_.L)(p[O],y)&&(p.reobserve(z(p,n,t,y)),g.previousData=(null===(w=g.current)||void 0===w?void 0:w.data)||g.previousData,g.current=void 0),p[O]=y,N=v.useMemo(function(){return{refetch:p.refetch.bind(p),reobserve:p.reobserve.bind(p),fetchMore:p.fetchMore.bind(p),updateQuery:p.updateQuery.bind(p),startPolling:p.startPolling.bind(p),stopPolling:p.stopPolling.bind(p),subscribeToMore:p.subscribeToMore.bind(p)}},[p]),i&&d&&(i.registerSSRObservable(p),p.getCurrentResult().loading&&i.addObservableQueryPromise(p)),{result:(k={onCompleted:t.onCompleted||L,onError:t.onError||L},S=v.useRef(k),v.useEffect(function(){S.current=k}),M=(o||c)&&!1===t.ssr&&!t.skip?G:t.skip||"standby"===y.fetchPolicy?F:void 0,D=g.previousData,$=v.useMemo(function(){return M&&V(M,D,p,n)},[n,p,M,D]),j(v.useCallback(function(e){if(o)return function(){};var t=function(){var t=g.current,r=p.getCurrentResult();t&&t.loading===r.loading&&t.networkStatus===r.networkStatus&&(0,_.L)(t.data,r.data)||K(r,g,p,n,u,e,S.current)},r=function(a){if(s.current.unsubscribe(),s.current=p.resubscribeAfterError(t,r),!A.call(a,"graphQLErrors"))throw a;var l=g.current;(!l||l&&l.loading||!(0,_.L)(a,l.error))&&K({data:l&&l.data,error:a,loading:!1,networkStatus:P.pT.error},g,p,n,u,e,S.current)},s={current:p.subscribe(t,r)};return function(){setTimeout(function(){return s.current.unsubscribe()})}},[c,o,p,g,u,n]),function(){return $||I(g,p,S.current,u,n)},function(){return $||I(g,p,S.current,u,n)})),obsQueryFields:N,observable:p,resultData:g,client:n,onQueryExecuted:b}),T=R.result,Q=R.obsQueryFields;return v.useMemo(function(){return(0,x.Cl)((0,x.Cl)({},T),Q)},[T,Q])}function z(e,t,r,s){var a=[],l=t.defaultOptions.watchQuery;return l&&a.push(l),r.defaultOptions&&a.push(r.defaultOptions),a.push((0,M.o)(e&&e.options,s)),a.reduce(k.l)}function K(e,t,r,s,a,l,n){var i=t.current;i&&i.data&&(t.previousData=i.data),!e.error&&(0,D.E)(e.errors)&&(e.error=new S.K4({graphQLErrors:e.errors})),t.current=V(e.partial&&a&&!e.loading&&(!e.data||0===Object.keys(e.data).length)&&"cache-only"!==r.options.fetchPolicy?(r.refetch(),(0,x.Cl)((0,x.Cl)({},e),{loading:!0,networkStatus:P.pT.refetch})):e,t.previousData,r,s),l(),function(e,t,r){if(!e.loading){var s=(0,D.E)(e.errors)?new S.K4({graphQLErrors:e.errors}):e.error;Promise.resolve().then(function(){s?r.onError(s):e.data&&t!==e.networkStatus&&e.networkStatus===P.pT.ready&&r.onCompleted(e.data)}).catch(function(e){!1!==globalThis.__DEV__&&g.V1.warn(e)})}}(e,null==i?void 0:i.networkStatus,n)}function I(e,t,r,s,a){return e.current||K(t.getCurrentResult(),e,t,a,s,function(){},r),e.current}function J(e,t){var r;return(null==e?void 0:e.fetchPolicy)||(null===(r=null==t?void 0:t.watchQuery)||void 0===r?void 0:r.fetchPolicy)||"cache-first"}function V(e,t,r,s){var a=e.data,l=(e.partial,(0,x.Tt)(e,["data","partial"]));return(0,x.Cl)((0,x.Cl)({data:a},l),{client:s,observable:r,variables:r.variables,called:e!==G&&e!==F,previousData:t})}var G=(0,$.G)({loading:!0,data:void 0,error:void 0,networkStatus:P.pT.loading}),F=(0,$.G)({loading:!1,data:void 0,error:void 0,networkStatus:P.pT.ready});let B=e=>{let{data:t,loading:r,error:s,refetch:a}=T(p.Z5,{variables:{id:e},skip:!e});return{product:t?.products?.[0]||null,loadingProduct:r,error:s,refetchProduct:a}},Z=()=>{let[e,t]=(0,u.useState)({}),[r,s]=(0,u.useState)(1),[a,l]=(0,u.useState)(10),n=(0,u.useMemo)(()=>(r-1)*a,[r,a]),i=(0,u.useMemo)(()=>{let t={};return e.shop_id&&(t.shop_id={_eq:e.shop_id}),e.name&&(t.name={_ilike:`%${e.name}%`}),e.category&&(t.category={id:{_eq:e.category}}),e.priceRange&&(t.price={_gte:e.priceRange.start_price,_lte:e.priceRange.end_price}),Object.keys(t).length>0?t:void 0},[e]),{data:o,loading:c,error:d,refetch:m}=T(p.kb,{variables:{where:i,offset:n,limit:a},fetchPolicy:"network-only"});return{products:o?.products||[],loadingProducts:c,error:d,filters:e,setFilters:t,page:r,setPage:s,take:a,setTake:l,totalCount:o?.products_aggregate?.aggregate?.count||1,refetchProducts:m}};var X=r(44195),H=r(82281),W=r(45103);let U=({item:e,isSelected:t,onSelect:r})=>{let{product:l,loadingProduct:n}=B(e.id),o=(0,m.wA)(),c=()=>{if(n)return;let t=e.quantity;if(l&&t+1>l.quantity){(0,f.oR)({description:"Cannot add more items than available in stock."});return}o((0,i.bE)({...e,quantity:1}))};return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:(0,X.cn)("w-full lg:flex md:flex hidden flex-row items-center justify-between px-2 py-6 hover:bg-slate-200",{"bg-slate-200":t}),children:[(0,s.jsx)("div",{className:"w-12 min-h-14 items-center justify-center lg:flex md:flex hidden",children:(0,s.jsx)(h.S,{checked:t,onCheckedChange:e=>r(e),id:e.id})}),(0,s.jsxs)("div",{className:"w-full flex lg:flex-row md:flex-row flex-col items-center justify-between",children:[(0,s.jsx)("div",{className:"text-muted-foreground text-lg",children:(0,s.jsx)("div",{className:"h-full w-full flex items-center justify-start",children:(0,s.jsx)("div",{className:"md:w-20 lg:w-20 w-[10rem] lg:h-14 md:h-14 h-20 relative",children:(0,s.jsx)(W.default,{layout:"fill",alt:"product",src:e?.images?.[0].image_url||"/images/image_placeholder.jpg",className:"object-cover"})})})}),(0,s.jsxs)("div",{className:"min-w-20 flex flex-col items-start justify-center gap-2",children:[(0,s.jsx)("span",{className:"font-semibold",children:"Product"}),(0,s.jsxs)("div",{className:"flex flex-row gap-2 items-center justify-start",children:[(0,s.jsx)("span",{className:"text-muted-foreground text-left text-sm",children:"Brand:"}),(0,s.jsx)("span",{className:"text-sm",children:"No Brand"})]})]}),(0,s.jsx)("span",{className:"w-28 max-w-28 text-muted-foreground text-lg",children:(0,s.jsxs)("div",{className:"w-full flex items-center justify-start gap-2 text-muted-foreground",children:[e.discount_price>0&&(0,s.jsxs)("span",{className:"text-sm",children:["MMK ",e.discount_price?.toLocaleString()]}),(0,s.jsxs)("span",{className:(0,H.A)("text-xs",{"line-through":e.discount_price>0}),children:["MMK ",e.price.toLocaleString()]})]})}),(0,s.jsx)("div",{className:"min-w-20 text-muted-foreground text-lg",children:(0,s.jsx)("div",{className:"flex flex-col gap-2",children:(0,s.jsxs)("div",{className:"flex flex-row flex-shrink-0 w-28 max-w-28 border items-center border-gray-400 rounded",children:[(0,s.jsx)(a.$,{onClick:()=>o((0,i.JA)(e.id)),className:"h-full w-1/3 rounded-r-none rounded-l bg-transparent border-r hover:bg-secondary_color hover:text-white text-black",children:"-"}),(0,s.jsx)("div",{className:"w-1/3 h-full text-center flex items-center justify-center",children:(0,s.jsx)("span",{className:"text-sm",children:e.quantity})}),(0,s.jsx)(a.$,{onClick:c,className:"h-full w-1/3 bg-transparent rounded-l-none border-l text-black hover:bg-secondary_color hover:text-white rounded-r",children:"+"})]})})}),(0,s.jsxs)("span",{className:"min-w-28 text-muted-foreground text-sm",children:["MMK"," ",((e.discount_price&&e.discount_price>0?e.discount_price:e.price)*e.quantity).toLocaleString()]})]})]},e.id),(0,s.jsx)("div",{className:"w-full lg:hidden md:hidden flex flex-col min-h-28 p-3",children:(0,s.jsxs)("div",{className:"w-full h-full flex flex-row gap-4 py-3",children:[(0,s.jsxs)("div",{className:"flex flex-row items-start h-full",children:[(0,s.jsx)("div",{className:"w-12 min-h-14 items-center justify-center flex",children:(0,s.jsx)(h.S,{checked:t,onCheckedChange:e=>r(e),id:e.id})}),(0,s.jsx)("div",{className:"w-24 h-20 relative",children:(0,s.jsx)(W.default,{layout:"fill",alt:"product",src:e?.images?.[0].image_url||"/images/image_placeholder.jpg",className:"object-cotain bg-white"})})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-1 justify-start",children:[(0,s.jsx)("h2",{className:"font-semibold",children:e.name}),(0,s.jsxs)("span",{className:"text-muted-foreground text-xs",children:["Brand: ",(0,s.jsx)("span",{className:"text-secondary_color",children:"No brand"})]}),(0,s.jsxs)("div",{className:"w-full mt-2 flex items-center justify-start gap-2 text-muted-foreground",children:[(0,s.jsxs)("span",{className:"text-sm",children:["MMK ",e.bulk_price?.toLocaleString()]}),(0,s.jsxs)("span",{className:"line-through  text-xs",children:["MMK ",e.price.toLocaleString()]})]}),(0,s.jsxs)("span",{className:"text-sm",children:["Total MMK "," ",((e.discount_price&&e.discount_price>0?e.discount_price:e.price)*e.quantity).toLocaleString()]}),(0,s.jsxs)("div",{className:"flex flex-row flex-shrink-0 w-28 max-w-28 border items-center border-gray-400 rounded mt-3",children:[(0,s.jsx)(a.$,{onClick:()=>o((0,i.JA)(e.id)),className:"h-full w-1/3 rounded-r-none rounded-l bg-transparent border-r hover:bg-secondary_color hover:text-white text-black",children:"-"}),(0,s.jsx)("div",{className:"w-1/3 h-full text-center flex items-center justify-center",children:(0,s.jsx)("span",{className:"text-sm",children:e.quantity})}),(0,s.jsx)(a.$,{onClick:c,className:"h-full w-1/3 bg-transparent rounded-l-none border-l text-black hover:bg-secondary_color hover:text-white rounded-r",children:"+"})]})]})]})})]})};var Y=r(3069),ee=r(79334);let et=()=>{let[e,t]=(0,u.useState)(null),[r,s]=(0,u.useState)(!0),[a,l]=(0,u.useState)(null);return(0,u.useEffect)(()=>{(async()=>{try{let e=await (0,X.v)();t(e)}catch(e){l(e)}finally{s(!1)}})()},[]),{sessionData:e,loading:r,error:a}},er=e=>e.reduce((e,t)=>e+(t&&t.discount_price&&t.discount_price>0?t.discount_price:t.price)*t.quantity,0),es=()=>{let[e,t]=(0,u.useState)(!1),r=(0,m.wA)(),p=(0,ee.useRouter)(),[x,g]=(0,u.useState)([]),v=(0,m.d4)(e=>e.cart.cartItems),{sessionData:b}=et(),y=v.length>0&&x.length===v.length,w=e=>{e?g(v.map(e=>e.id)):g([])};console.log("cart session data",b);let j=(e,t)=>{t?g(t=>[...t,e]):g(t=>t.filter(t=>t!==e))},N=er(v),_=v&&v[0]?v[0].category?.id:null,{products:k,setTake:C,setFilters:S}=Z(),P=k?.filter(e=>!v.find(t=>t.id===e.id));return(0,u.useEffect)(()=>{C(10),S({shop_id:"",name:"",category:_})},[S,C]),(0,u.useEffect)(()=>{t(!0),(0,X.o)()},[v]),(0,s.jsxs)("section",{className:"w-full flex flex-col items-center",children:[(0,s.jsxs)("div",{className:"lg:w-4/5 md:w-full w-full flex flex-col",children:[(0,s.jsxs)("div",{className:"w-full lg:flex md:flex hidden flex-row items-center justify-between p-2",children:[(0,s.jsx)("div",{className:"w-12 min-h-14 flex items-center justify-center",children:(0,s.jsx)(h.S,{checked:y,onCheckedChange:e=>w(e),id:"select-all"})}),(0,s.jsxs)("div",{className:"w-full flex flex-row items-center justify-between",children:[(0,s.jsx)("span",{className:"min-w-20 text-muted-foreground",children:"Item"}),(0,s.jsx)("span",{className:"min-w-20 text-muted-foreground"}),(0,s.jsx)("div",{className:"min-w-28 text-muted-foreground",children:"Discount Price"}),(0,s.jsx)("span",{className:"min-w-20 text-muted-foreground",children:"Quantity"}),(0,s.jsx)("span",{className:"min-w-28 text-muted-foreground",children:"Total"})]})]}),(0,s.jsxs)("div",{className:"w-full flex lg:hidden md:hidden flex-row items-center justify-start px-3",children:[(0,s.jsx)("div",{className:"min-w-12 min-h-14 flex flex-row items-center justify-center",children:(0,s.jsx)(h.S,{checked:y,onCheckedChange:e=>w(e),id:"select-all"})}),(0,s.jsx)("span",{children:"All"})]}),(0,s.jsxs)("div",{className:"w-full mt-4 flex flex-col border shadow-lg rounded-md lg:h-[70vh] overflow-auto scrollbar-thin",children:[e&&v.length>0&&v.map(e=>(0,s.jsx)(U,{item:e,isSelected:x.includes(e.id),onSelect:t=>j(e.id,t)},e.id)),e&&v.length<1?(0,s.jsxs)("div",{className:"w-full lg:h-full md:h-full h-20 flex lg:flex-row md:flex-row flex-col items-center justify-center lg:gap-3 md:gap-3",children:[(0,s.jsx)("h2",{className:"text-secondary_color",children:"No item in the cart!"}),(0,s.jsx)("span",{onClick:()=>p.push("/home"),className:"underline text-blue-500 hover:cursor-pointer",children:"Shop Now"})]}):null]}),(0,s.jsx)("div",{className:"h-6"}),(0,s.jsx)(n.w,{className:"my-4 border-t border-gray-400"}),(0,s.jsxs)("div",{className:"min-h-16 flex lg:flex-row md:flex-row flex-col items-center justify-between lg:gap-0 md:gap-0 gap-6",children:[(0,s.jsxs)("div",{className:"flex lg:flex-row md:flex-row flex-col lg:gap-4 md:gap-4 gap-2",children:[(0,s.jsxs)(a.$,{onClick:()=>p.push("/home"),className:"flex flex-row h-8 gap-2 items-center bg-secondary_color text-white rounded-md",children:[(0,s.jsx)(o.A,{}),"continue shopping"]}),(0,s.jsxs)(a.$,{variant:"outline",onClick:()=>r((0,i.sX)()),className:"flex flex-row h-8 gap-2 items-center text-secondary_color rounded-md",children:[(0,s.jsx)(c.A,{}),"clear shopping cart"]})]}),(0,s.jsxs)("div",{className:"flex flex-row gap-4 items-center lg:mr-12",children:[(0,s.jsx)("span",{className:"text-secondary_color text-sm",children:"Subtotal:"}),e&&(0,s.jsxs)("span",{className:"font-semibold",children:["MMK"," ",N.toLocaleString()]})]})]}),(0,s.jsx)(n.w,{className:"my-4 border-t border-gray-400"}),(0,s.jsx)("div",{className:"w-full lg:py-12 md:py-10 flex items-center justify-center",children:(0,s.jsxs)("div",{className:"w-full max-w-[33rem] min-h-24 flex flex-col gap-4",children:[(0,s.jsxs)("p",{className:"text-center text-sm text-muted-foreground leading-6",children:["To enjoy exclusive savings on your purchase, please enter your discount coupon code if you have one available. Make sure to check for any expiration dates or specific terms associated with your coupon!"," "]}),(0,s.jsxs)("div",{className:"w-full relative lg:mt-8 md:mt-8 mt-4",children:[(0,s.jsx)(l.p,{className:"w-full h-10 rounded-md bg-secondary_color/20 pr-24 pl-4 focus-visible:ring-offset-0 focus-visible:ring-0",placeholder:"Enter cupon code"}),(0,s.jsxs)("div",{className:"absolute right-2.5 top-[0.5rem] flex flex-row items-center gap-4",children:[(0,s.jsx)("div",{children:(0,s.jsx)(d,{color:"black",strokeWidth:1.25})}),(0,s.jsx)(a.$,{className:"rounded-lg border-none h-6 text-sm text-secondary_color",variant:"outline",children:"Apply Cupon"})]})]})]})}),(0,s.jsx)(n.w,{className:"my-4 border-t border-gray-400"}),(0,s.jsx)("div",{className:"flex items-center justify-center mt-8",children:(0,s.jsxs)(a.$,{onClick:()=>{b?.token?p.push("/checkout"):(0,f.oR)({description:"Please Login First"})},className:"rounded-md min-h-6 min-w-10 bg-secondary_color text-white",children:["Proceed to checkout (",e&&v.length>0?v.length:0,")"]})})]}),(0,s.jsx)("div",{className:"w-full min-h-32",children:(0,s.jsx)(Y.ProductReel,{products:P||[]})})]})}},55407:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var s=r(45512);let a=({height:e,width:t,color:r})=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:e,viewBox:"0 0 24 24",fill:"none",children:(0,s.jsx)("path",{d:"M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z",fill:r})})},3069:(e,t,r)=>{"use strict";r.d(t,{ProductReel:()=>g});var s=r(45512),a=r(58009),l=r(85314),n=r(44195),i=r(97093),o=r(39400),c=r(45103),d=r(55407),u=r(92273),m=r(90455),h=r(54716),f=r(79334),p=r(82281);let x=e=>{let[t,r]=(0,a.useState)(null),[l,n]=(0,a.useState)(1),[i,x]=(0,a.useState)(e.product.price),g=(0,u.wA)(),v=(0,f.useRouter)();(0,a.useEffect)(()=>{e&&e.product.images&&r(e.product.images)},[r]),(0,a.useEffect)(()=>{},[n,x]);let b=Math.round(e.product.average_rating||0),y=Math.round(e.product.review_count||0);return(0,s.jsx)("div",{className:(0,p.A)("w-full p-4 border bg-white rounded-md group h-full lg:h-[21.5rem] scale-95 hover:h-full hover:shadow-lg transition-all overflow-hidden",{"brightness-90 hover:cursor-not-allowed":e.product.quantity<1}),children:(0,s.jsxs)("div",{className:"w-full h-full flex flex-col gap-3 group",children:[(0,s.jsx)("div",{onClick:()=>v.push(`/product/detail/${e.product.id}`),className:"relative w-full min-h-[10rem] hover:cursor-pointer",children:(0,s.jsx)(c.default,{layout:"fill",alt:"product.img",src:t?.[0].image_url||"/image_placeholder.jpg",className:"object-contain"})}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("h2",{className:"font-bold",children:e.product.name}),(0,s.jsxs)("div",{className:"flex lg:flex-row md:flex-row flex-col gap-3",children:[(0,s.jsx)("div",{className:"flex flex-row items-center gap-1 min-w-[7rem]",children:[,,,,,].fill(0).map((e,t)=>(0,s.jsx)(d.A,{height:"20",width:"20",color:t<b?"#cfda31":"gray"},t))}),(0,s.jsxs)("span",{className:"text-sm text-muted-foreground",children:[y," reviews"]})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,s.jsxs)("h1",{className:"text-secondary_color",children:["MMK ",e.product.price.toLocaleString()]}),(0,s.jsx)("div",{className:"w-full h-1 border border-gray-300",children:(0,s.jsx)("div",{className:"h-full w-2/3 bg-yellow-300"})}),(0,s.jsx)("span",{className:"text-sm text-muted-foreground",children:e.product.quantity<1?(0,s.jsx)("span",{className:"text-red-500 font-semibold",children:"Out of stock"}):`${e.product.quantity} left`})]}),(0,s.jsxs)("div",{className:"lg:flex lg:flex-row hidden h-5 gap-3 items-center mt-5",children:[(0,s.jsxs)("div",{className:"flex flex-row border items-center border-gray-400 rounded",children:[(0,s.jsx)(o.$,{onClick:()=>{n(l-1),x((l-1)*e.product.price)},disabled:1===l,className:"w-7 h-full rounded-none bg-transparent border-r hover:bg-secondary_color hover:text-white text-black",children:"-"}),(0,s.jsx)("div",{className:"min-w-9 h-full text-center flex items-center justify-center",children:(0,s.jsx)("span",{children:l})}),(0,s.jsx)(o.$,{onClick:()=>{n(l+1),x((l+1)*e.product.price)},disabled:l>=e.product.quantity,className:"w-7 h-full bg-transparent rounded-none border-l text-black hover:bg-secondary_color hover:text-white",children:"+"})]}),(0,s.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,s.jsx)("span",{className:"font-semibold text-gray-600 text-sm",children:"Total - "}),(0,s.jsxs)("span",{className:"text-sm text-secondary_color",children:[" ",i," MMK"]})]})]}),(0,s.jsx)(o.$,{disabled:e.product.quantity<1,onClick:()=>{g((0,m.bE)({...e.product,quantity:l})),(0,h.oR)({description:"Item added to the cart"})},className:(0,p.A)("w-full lg:block hidden transition-all min-h-8 rounded-md mt-4 bg-secondary_color text-white",{"hover:cursor-not-allowed":e.product.quantity<1}),children:"Add to cart"})]})})};function g({products:e}){let[t,r]=a.useState(null);return a.useEffect(()=>{e&&r(e)},[r,e]),console.log("related products:",t),(0,s.jsxs)(l.Carousel,{className:"w-full h-full flex flex-col gap-4",children:[(0,s.jsxs)("div",{className:"w-full min-h-16 flex flex-row items-center justify-between",children:[(0,s.jsx)("div",{className:"flex flex-row gap-4 items-center",children:(0,s.jsx)("h1",{className:"font-semibold text-xl",children:"Related products"})}),(0,s.jsxs)("div",{className:"flex flex-row gap-2 h-full items-center",children:[(0,s.jsx)("div",{className:"",children:(0,s.jsx)(l.CarouselPrevious,{className:"bg-gray-300 rounded-md hover:bg-gray-400 transition"})}),(0,s.jsx)("div",{className:"",children:(0,s.jsx)(l.CarouselNext,{className:(0,n.cn)(" bg-gray-300 rounded-md hover:bg-gray-400 transition",{})})})]})]}),t?(0,s.jsx)(l.CarouselContent,{className:"w-full h-full",children:t.map((e,t)=>(0,s.jsx)(l.CarouselItem,{className:"md:basis-1/3 lg:basis-[20%] basis-1/2",children:(0,s.jsx)("div",{className:"",children:(0,s.jsx)(x,{product:e})})},t))}):(0,s.jsx)(l.CarouselContent,{children:Array.from({length:5}).map((e,t)=>(0,s.jsx)(l.CarouselItem,{className:"md:basis-1/3 lg:basis-[20%]",children:(0,s.jsx)("div",{className:"p-2",children:(0,s.jsx)(i.E,{className:"bg-secondary_color/35 h-[21.8rem] w-full"})})},t))})]})}},96217:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(62740),a=r(27837);function l({children:e}){return(0,s.jsx)(a.A,{children:e})}},84302:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,generateMetadata:()=>l});var s=r(62740),a=r(17875);async function l(){return{title:"Nat Say Myanmar - Cart",description:"Check",openGraph:{title:"Nat Say Myanmar - Products",description:"Check cart and prceed to checkout",images:"/images/logo.png"}}}let n=async()=>{try{return(0,s.jsx)("div",{className:"w-full flex flex-col items-center lg:min-h-72",children:(0,s.jsx)("div",{className:"w-full max-w-[1300px] lg:mt-16 md:mt-16 mt-4",children:(0,s.jsx)(a.default,{})})})}catch(e){return console.error("Error fetching data:",e),(0,s.jsx)("div",{children:"Error loading data"})}}},17875:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var s=r(46760);(0,s.registerClientReference)(function(){throw Error("Attempted to call calculateTotalPrice() from the server but calculateTotalPrice is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\new medical web\\natsay_web_client\\src\\modules\\cart\\cart-item-list\\index.tsx","calculateTotalPrice");let a=(0,s.registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\NextJS\\\\new medical web\\\\natsay_web_client\\\\src\\\\modules\\\\cart\\\\cart-item-list\\\\index.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\new medical web\\natsay_web_client\\src\\modules\\cart\\cart-item-list\\index.tsx","default")},7752:(e,t,r)=>{"use strict";r.d(t,{m:()=>n});var s=r(20212),a=r(23331),l=r(35542);function n(e){var t=a.useContext((0,l.l)()),r=e||t.client;return(0,s.V1)(!!r,58),r}},44362:(e,t,r)=>{"use strict";r.d(t,{D$:()=>u,KG:()=>s});var s,a,l=r(20212),n=r(18934),i=r(57107),o=r(80962);function c(e){var t;switch(e){case s.Query:t="Query";break;case s.Mutation:t="Mutation";break;case s.Subscription:t="Subscription"}return t}function d(e){a||(a=new n.A(i.v.parser||1e3));var t,r,o=a.get(e);if(o)return o;(0,l.V1)(!!e&&!!e.kind,70,e);for(var c=[],d=[],u=[],m=[],h=0,f=e.definitions;h<f.length;h++){var p=f[h];if("FragmentDefinition"===p.kind){c.push(p);continue}if("OperationDefinition"===p.kind)switch(p.operation){case"query":d.push(p);break;case"mutation":u.push(p);break;case"subscription":m.push(p)}}(0,l.V1)(!c.length||d.length||u.length||m.length,71),(0,l.V1)(d.length+u.length+m.length<=1,72,e,d.length,m.length,u.length),r=d.length?s.Query:s.Mutation,d.length||u.length||(r=s.Subscription);var x=d.length?d:u.length?u:m;(0,l.V1)(1===x.length,73,e,x.length);var g=x[0];t=g.variableDefinitions||[];var v={name:g.name&&"Name"===g.name.kind?g.name.value:"data",type:r,variables:t};return a.set(e,v),v}function u(e,t){var r=d(e),s=c(t),a=c(r.type);(0,l.V1)(r.type===t,74,s,s,a)}(function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"})(s||(s={})),d.resetCache=function(){a=void 0},!1!==globalThis.__DEV__&&(0,o.D_)("parser",function(){return a?a.size:0})}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[681,692,543,832,138,341],()=>r(51149));module.exports=s})();