(()=>{var e={};e.id=279,e.ids=[279],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},33873:e=>{"use strict";e.exports=require("path")},11997:e=>{"use strict";e.exports=require("punycode")},27910:e=>{"use strict";e.exports=require("stream")},79551:e=>{"use strict";e.exports=require("url")},74075:e=>{"use strict";e.exports=require("zlib")},60537:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var a=r(70260),s=r(28203),l=r(25155),n=r.n(l),i=r(67292),o={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);r.d(t,o);let d=["",{children:["checkout",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,25940)),"D:\\NextJS\\new medical web\\natsay_web_client\\src\\app\\checkout\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,74156)),"D:\\NextJS\\new medical web\\natsay_web_client\\src\\app\\checkout\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,71354)),"D:\\NextJS\\new medical web\\natsay_web_client\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"]}],c=["D:\\NextJS\\new medical web\\natsay_web_client\\src\\app\\checkout\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/checkout/page",pathname:"/checkout",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},38726:(e,t,r)=>{Promise.resolve().then(r.bind(r,66423))},56878:(e,t,r)=>{Promise.resolve().then(r.bind(r,73995))},57848:(e,t,r)=>{"use strict";r.d(t,{S:()=>A});var a=r(45512),s=r(58009),l=r(29952),n=r(6004),i=r(31412),o=r(13024),d=r(66582),c=r(38762),u=r(98060),m=r(18055),p="Checkbox",[f,g]=(0,n.A)(p),[h,x]=f(p),y=s.forwardRef((e,t)=>{let{__scopeCheckbox:r,name:n,checked:d,defaultChecked:c,required:u,disabled:p,value:f="on",onCheckedChange:g,form:x,...y}=e,[v,b]=s.useState(null),N=(0,l.s)(t,e=>b(e)),k=s.useRef(!1),A=!v||x||!!v.closest("form"),[S=!1,E]=(0,o.i)({prop:d,defaultProp:c,onChange:g}),C=s.useRef(S);return s.useEffect(()=>{let e=v?.form;if(e){let t=()=>E(C.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[v,E]),(0,a.jsxs)(h,{scope:r,state:S,disabled:p,children:[(0,a.jsx)(m.sG.button,{type:"button",role:"checkbox","aria-checked":j(S)?"mixed":S,"aria-required":u,"data-state":_(S),"data-disabled":p?"":void 0,disabled:p,value:f,...y,ref:N,onKeyDown:(0,i.m)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,i.m)(e.onClick,e=>{E(e=>!!j(e)||!e),A&&(k.current=e.isPropagationStopped(),k.current||e.stopPropagation())})}),A&&(0,a.jsx)(w,{control:v,bubbles:!k.current,name:n,value:f,checked:S,required:u,disabled:p,form:x,style:{transform:"translateX(-100%)"},defaultChecked:!j(c)&&c})]})});y.displayName=p;var v="CheckboxIndicator",b=s.forwardRef((e,t)=>{let{__scopeCheckbox:r,forceMount:s,...l}=e,n=x(v,r);return(0,a.jsx)(u.C,{present:s||j(n.state)||!0===n.state,children:(0,a.jsx)(m.sG.span,{"data-state":_(n.state),"data-disabled":n.disabled?"":void 0,...l,ref:t,style:{pointerEvents:"none",...e.style}})})});b.displayName=v;var w=e=>{let{control:t,checked:r,bubbles:l=!0,defaultChecked:n,...i}=e,o=s.useRef(null),u=(0,d.Z)(r),m=(0,c.X)(t);s.useEffect(()=>{let e=o.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(u!==r&&t){let a=new Event("click",{bubbles:l});e.indeterminate=j(r),t.call(e,!j(r)&&r),e.dispatchEvent(a)}},[u,r,l]);let p=s.useRef(!j(r)&&r);return(0,a.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:n??p.current,...i,tabIndex:-1,ref:o,style:{...e.style,...m,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function j(e){return"indeterminate"===e}function _(e){return j(e)?"indeterminate":e?"checked":"unchecked"}var N=r(24849),k=r(44195);let A=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)(y,{ref:r,className:(0,k.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...t,children:(0,a.jsx)(b,{className:(0,k.cn)("flex items-center justify-center text-current"),children:(0,a.jsx)(N.A,{className:"h-4 w-4"})})}));A.displayName=y.displayName},17184:(e,t,r)=>{"use strict";r.d(t,{J:()=>c});var a=r(45512),s=r(58009),l=r(18055),n=s.forwardRef((e,t)=>(0,a.jsx)(l.sG.label,{...e,ref:t,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));n.displayName="Label";var i=r(21643),o=r(44195);let d=(0,i.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)(n,{ref:r,className:(0,o.cn)(d(),e),...t}));c.displayName=n.displayName},46411:(e,t,r)=>{"use strict";r.d(t,{w:()=>c});var a=r(45512),s=r(58009),l=r(18055),n="horizontal",i=["horizontal","vertical"],o=s.forwardRef((e,t)=>{let{decorative:r,orientation:s=n,...o}=e,d=i.includes(s)?s:n;return(0,a.jsx)(l.sG.div,{"data-orientation":d,...r?{role:"none"}:{"aria-orientation":"vertical"===d?d:void 0,role:"separator"},...o,ref:t})});o.displayName="Separator";var d=r(44195);let c=s.forwardRef(({className:e,orientation:t="horizontal",decorative:r=!0,...s},l)=>(0,a.jsx)(o,{ref:l,decorative:r,orientation:t,className:(0,d.cn)("shrink-0 bg-border","horizontal"===t?"h-[1px] w-full":"h-full w-[1px]",e),...s}));c.displayName=o.displayName},99931:(e,t,r)=>{"use strict";r.d(t,{Z5:()=>s,d_:()=>n,kb:()=>l});var a=r(37713);(0,a.J1)`
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
`,(0,a.J1)`
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
`;let s=(0,a.J1)`
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
`;(0,a.J1)`
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
`;let l=(0,a.J1)`
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
`,n=(0,a.J1)`
  query getProductById($id: uuid!) {
    products_by_pk(id: $id) {
      id
      quantity
    }
  }
`},61559:(e,t,r)=>{"use strict";r.d(t,{pp:()=>u,Wv:()=>c,bN:()=>g,UJ:()=>f,PD:()=>p,Yh:()=>m});var a=r(37713);let s=(0,a.J1)`
  query getDeliveryAddressById($user_id: uuid!) {
    delivery_addresses(where: { user_id: { _eq: $user_id } }) {
      id
      firstname
      lastname
      province
      zone
      address
      phone
      email
      user_id
      label
    }
  }
`,l=(0,a.J1)`
  query getDeliveryAddressById($user_id: uuid!) {
    billing_addresses(where: { user_id: { _eq: $user_id } }) {
      id
      firstname
      lastname
      province
      zone
      address
      phone
      email
    }
  }
`,n=(0,a.J1)`
  mutation updateDeliveryAddress(
    $user_id: uuid!
    $input: delivery_addresses_set_input!
  ) {
    update_delivery_addresses(
      where: { user_id: { _eq: $user_id } }
      _set: $input
    ) {
      returning {
        id
        firstname
        lastname
        province
        zone
        address
        phone
        email
        label
      }
    }
  }
`,i=(0,a.J1)`
  mutation insertDeliveryAddress($input: delivery_addresses_insert_input!) {
    insert_delivery_addresses_one(object: $input) {
      id
      firstname
      lastname
      province
      zone
      address
      phone
      email
    }
  }
`,o=(0,a.J1)`
  mutation updateBillingAddress(
    $user_id: uuid!
    $input: billing_addresses_set_input!
  ) {
    update_billing_addresses(
      where: { user_id: { _eq: $user_id } }
      _set: $input
    ) {
      returning {
        id
        user_id
        firstname
        lastname
        province
        zone
        address
        phone
        email
      }
    }
  }
`,d=(0,a.J1)`
  mutation insertBillingAddress($input: billing_addresses_insert_input!) {
    insert_billing_addresses_one(object: $input) {
      id
      firstname
      lastname
      province
      zone
      address
      phone
      email
    }
  }
`,c=async(e,t)=>{try{let{data:r}=await e.query({query:s,variables:{user_id:t.user_id},fetchPolicy:"network-only"});if(!r?.delivery_addresses||!Array.isArray(r.delivery_addresses))return console.warn("Unexpected data structure:",r),null;return r.delivery_addresses}catch(e){return console.log("Error finding delivery addresses:",e.message||e),e.networkError&&console.log("Network error:",e.networkError),e.graphQLErrors?.length&&e.graphQLErrors.forEach(e=>console.log("GraphQL error:",e.message,e.extensions)),null}},u=async(e,t)=>{try{let{data:r}=await e.query({query:l,variables:{user_id:t.user_id}});return r?.billing_addresses??null}catch(e){return console.log("Error finding delivery addresses:",e.message||e),null}},m=async(e,t)=>{try{let{data:r}=await e.mutate({mutation:n,variables:{user_id:t.user_id,input:t.input}});return r?.update_delivery_addresses.returning??null}catch(e){return console.log("Error updating delivery address:",e.message||e),null}},p=async(e,t)=>{try{let{data:r}=await e.mutate({mutation:o,variables:{user_id:t.user_id,input:t.input}});return r?.update_billing_addresses?.returning[0]??null}catch(e){return console.log("Error updating billing address:",e.message||e),null}},f=async(e,t)=>{try{let{data:r}=await e.mutate({mutation:i,variables:{input:t.input}});return r?.insert_delivery_addresses_one??null}catch(e){return console.log("Error inserting delivery address:",e.message||e),null}},g=async(e,t)=>{try{let{data:r}=await e.mutate({mutation:d,variables:{input:t.input}});return r?.insert_billing_addresses_one??null}catch(e){return console.log("Error inserting delivery address:",e.message||e),null}}},40977:(e,t,r)=>{"use strict";r.d(t,{n:()=>l});var a=r(37713);let s=(0,a.J1)`
  mutation InsertNotification($input: notifications_insert_input!) {
    insert_notifications_one(object: $input) {
      id
      shop_id
      order_id
      description
      type
      created_at
      is_read
    }
  }
`,l=async(e,t)=>{try{console.log("function parameter",t);let{data:r}=await e.mutate({mutation:s,variables:{input:t.input}});return r?.insert_notifications_one??null}catch(e){return console.log("Error inserting notificaitons:",e.message||e),null}}},56337:(e,t,r)=>{"use strict";r.d(t,{es:()=>i,$u:()=>o,WF:()=>d});var a=r(37713);let s=(0,a.J1)`
  mutation insertOrder($input: orders_insert_input!) {
    insert_orders_one(object: $input) {
      id
      user_id
      status
      total_price
      payment_id
      payment_proof
      shipping_address
    }
  }
`,l=(0,a.J1)`
  mutation insertOrder($input: order_items_insert_input!) {
    insert_order_items_one(object: $input) {
      id
      order_id
      product_id
      shop_id
      quantity
      price
      subtotal
    }
  }
`,n=(0,a.J1)`
  query GetOrders($where: orders_bool_exp, $offset: Int, $limit: Int) {
    orders(
      where: $where
      offset: $offset
      limit: $limit
      order_by: { created_date: desc }
    ) {
      id
      user_id
      status
      total_price
      shipping_address
      payment_id
      payment_proof
      created_date
      updated_date
      order_items {
        quantity
        subtotal
        price
        shop_id
        product {
          id
          name
          images {
            id
            image_url
          }
        }
      }
    }
    orders_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`,i=async(e,t)=>{try{let{data:r}=await e.mutate({mutation:s,variables:{input:t.input}});return r?.insert_orders_one??null}catch(e){return console.log("Error inserting orders:",e.message||e),null}},o=async(e,t)=>{try{let{data:r}=await e.mutate({mutation:l,variables:{input:t.input}});return r?.insert_order_items_one??null}catch(e){return console.log("Error inserting orders:",e.message||e),null}},d=async(e,t)=>{try{let{where:r,offset:a,limit:s}=t;if(!n)throw Error("GraphQL query GET_ORDERS is not defined.");let{data:l}=await e.query({query:n,fetchPolicy:"no-cache",variables:{where:r,offset:a,limit:s}});if(!l)throw Error("No data returned from GraphQL query.");return{orders:l.orders||[],count:l.orders_aggregate?.aggregate?.count||0}}catch(e){return console.error("Error fetching orders:",e.message||e),{orders:[],count:0}}}},6502:(e,t,r)=>{"use strict";r.d(t,{FQ:()=>i,YY:()=>n});var a=r(37713);let s=(0,a.J1)`
  mutation updateProduct($id: uuid!, $input: products_set_input!) {
    update_products_by_pk(pk_columns: { id: $id }, _set: $input) {
      id
      name
      category_id
      price
      bulk_price
      quantity
      description
      dosage
      usage
      storage
      updated_at
    }
  }
`;var l=r(99931);let n=async(e,t)=>{try{let{data:r}=await e.query({query:l.d_,variables:{id:t.id},fetchPolicy:"network-only"});if(!r?.products_by_pk)return console.error("Product not found"),null;let a=r.products_by_pk.quantity-t.quantity;if(a<0)return console.error("Insufficient stock"),null;let{data:n}=await e.mutate({mutation:s,variables:{id:t.id,input:{quantity:a}}});return n?.update_products_by_pk?.quantity??null}catch(e){return console.error("Error updating product quantity:",e.message||e),null}},i=async(e,t)=>{try{let{data:r}=await e.query({query:l.d_,variables:{id:t.id},fetchPolicy:"no-cache"});if(!r?.products_by_pk)return console.error(`Product with ID ${t.id} not found`),!1;let a=r.products_by_pk.quantity;if(a>=t.requestedQuantity)return!0;return console.warn(`Insufficient stock for product ID ${t.id}. Current: ${a}, Requested: ${t.requestedQuantity}`),!1}catch(e){return console.error("Error checking product availability:",e.message||e),!1}}},35721:(e,t,r)=>{"use strict";r.d(t,{F_:()=>l,nR:()=>i,rD:()=>s,w8:()=>n,z6:()=>a});let a=[{id:"1",name:"Yangon"},{id:"2",name:"Mandalay"}],s=[{id:"1",zone:"Yangon",province:[{id:"1",name:"North Dagon"},{id:"2",name:"South Dagon"},{id:"3",name:"Bahan"},{id:"4",name:"Hlaing"}]},{id:"2",zone:"Mandalay",province:[{id:"1",name:"Chan Aye Tharzan"},{id:"2",name:"29x24 Street"},{id:"3",name:"Kan Daw Mon"},{id:"4",name:"30th Street"}]}],l=[{id:"abfa998a-8e84-4ca0-887e-79f572127bdd",name:"Cash On Delivery",logo:"/images/payment/kpay.png"},{id:"5af460bc-bb4c-4183-b655-22d8dcc18d36",name:"KBZ Pay",logo:"/images/payment/kpay.png"},{id:"b6447a68-7a77-4365-a23f-6d9232a4ee27",name:"Wave Pay",logo:"/images/payment/wave.jpg"},{id:"d776755c-0120-4831-91fb-a8f8a7e5f233",name:"Aya Pay",logo:"/images/payment/aya.jpg"}],n=[{id:"1",name:"All",value:null},{id:"2",name:"Pending",value:"Pending"},{id:"3",name:"Delivering",value:"Delivering"},{id:"4",name:"Completed",value:"Completed"},{id:"5",name:"Cancelled",value:"Cancelled"}],i=[{id:"Highest to Lowest",name:"Highest to Lowest"},{id:"Lowest to Highest",name:"Lowest to Highest"}]},71903:(e,t,r)=>{"use strict";r.d(t,{w:()=>g});var a=r(97412),s=r(23331),l=r(55531),n=r(41948),i=r(44362),o=r(36282),d=r(7752),c=r(10428).Sw?s.useLayoutEffect:s.useEffect,u=r(58009),m=r.n(u),p=r(37713);let f=(0,p.J1)`
  mutation getFileUploadUrl($content_type: String!, $folder: String!) {
    getFileUploadUrl(content_type: $content_type, folder: $folder) {
      fileUploadUrl
      fileName
      content_type
    }
  }
`,g=()=>{let[e]=function(e,t){var r=(0,d.m)(void 0);(0,i.D$)(e,i.KG.Mutation);var u=s.useState({called:!1,loading:!1,client:r}),m=u[0],p=u[1],f=s.useRef({result:m,mutationId:0,isMounted:!0,client:r,mutation:e,options:void 0});c(function(){Object.assign(f.current,{client:r,options:void 0,mutation:e})});var g=s.useCallback(function(e){void 0===e&&(e={});var t=f.current,r=t.options,s=t.mutation,i=(0,a.Cl)((0,a.Cl)({},r),{mutation:s}),d=e.client||f.current.client;f.current.result.loading||i.ignoreResults||!f.current.isMounted||p(f.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:d});var c=++f.current.mutationId,u=(0,l.l)(i,e);return d.mutate(u).then(function(t){var r,a,s=t.data,l=t.errors,i=l&&l.length>0?new o.K4({graphQLErrors:l}):void 0,m=e.onError||(null===(r=f.current.options)||void 0===r?void 0:r.onError);if(i&&m&&m(i,u),c===f.current.mutationId&&!u.ignoreResults){var g={called:!0,loading:!1,data:s,error:i,client:d};f.current.isMounted&&!(0,n.L)(f.current.result,g)&&p(f.current.result=g)}var h=e.onCompleted||(null===(a=f.current.options)||void 0===a?void 0:a.onCompleted);return i||null==h||h(t.data,u),t}).catch(function(t){if(c===f.current.mutationId&&f.current.isMounted){var r,a={loading:!1,error:t,data:void 0,called:!0,client:d};(0,n.L)(f.current.result,a)||p(f.current.result=a)}var s=e.onError||(null===(r=f.current.options)||void 0===r?void 0:r.onError);if(s)return s(t,u),{data:void 0,errors:t};throw t})},[]),h=s.useCallback(function(){if(f.current.isMounted){var e={called:!1,loading:!1,client:f.current.client};Object.assign(f.current,{mutationId:0,result:e}),p(e)}},[]);return s.useEffect(function(){var e=f.current;return e.isMounted=!0,function(){e.isMounted=!1}},[]),[g,(0,a.Cl)({reset:h},m)]}(f),[t,r]=m().useState(!1),[u,p]=m().useState(void 0);return{uploadToS3:async t=>{if(!t){p(Error("Please select a file to upload"));return}r(!0),p(void 0);try{let r=t.type;if(r.startsWith("image"))r="image";else if(r.startsWith("application/pdf"))r="pdf";else if(r.startsWith("video"))r="video";else throw Error("Unsupported file type");let{data:a}=await e({variables:{content_type:r,folder:"products"}}),{fileUploadUrl:s}=a.getFileUploadUrl,l=await fetch(s,{method:"PUT",body:t,headers:{"Content-Type":t.type,"x-amz-acl":"public-read"}});if(!l.ok)throw Error(`Failed to upload file: ${l.statusText}`);return console.log("Image uploaded successfully"),s.split("?")[0]}catch(e){p(e)}finally{r(!1)}},loading:t,error:u}}},74380:(e,t,r)=>{"use strict";r.d(t,{A:()=>d});var a=r(45512),s=r(35721),l=r(62282),n=r(58009),i=r(39136),o=r(85210);let d=({address:e,setAddress:t})=>{let[r,d]=(0,n.useState)(""),[c,u]=(0,n.useState)([]),[m,p]=(0,n.useState)(""),[f,g]=(0,n.useState)({id:"",firstname:"",lastname:"",province:"",zone:"",address:"",phone:"",email:"",user_id:"",label:""});return(0,n.useEffect)(()=>{e&&g(e)},[e]),(0,a.jsxs)("div",{className:"w-full flex flex-col gap-4 items-start",children:[(0,a.jsx)("h2",{className:"font-semibold text-xl",children:"Billing Address"}),(0,a.jsxs)("div",{className:"w-full flex flex-col gap-6 mt-4",children:[(0,a.jsxs)("div",{className:"w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4",children:[(0,a.jsx)(o.A,{label:"First name *",value:f.firstname,name:"firstname",placeHolder:"Enter your first name",type:"text",onChange:r=>{g(e=>({...e,[r.target.name]:r.target.value})),t({...e,[r.target.name]:r.target.value})}}),(0,a.jsx)(o.A,{label:"Last name *",name:"lastname",value:f.lastname,placeHolder:"Enter your last name",type:"text",onChange:r=>{g(e=>({...e,[r.target.name]:r.target.value})),t({...e,[r.target.name]:r.target.value})}})]}),(0,a.jsxs)("div",{className:"w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4",children:[(0,a.jsxs)("div",{className:"w-full flex flex-col gap-1",children:[(0,a.jsx)("label",{htmlFor:"",className:"text-sm",children:"Select Province"}),(0,a.jsx)(l.A,{options:c,label:""===f.zone?"Select Province":f.province,setCategory:p})]}),(0,a.jsxs)("div",{className:"w-full flex flex-col gap-1",children:[(0,a.jsx)("label",{htmlFor:"",className:"text-sm",children:"Select Zone"}),(0,a.jsx)(l.A,{options:s.z6,label:""===f.zone?"Select Zone":f.zone,setCategory:d})]})]}),(0,a.jsx)(i.A,{value:f.address,label:"Address",name:"address",placeHolder:"Enter your address",onChange:r=>{g(e=>({...e,[r.target.name]:r.target.value})),t({...e,[r.target.name]:r.target.value})}}),(0,a.jsxs)("div",{className:"w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4",children:[(0,a.jsx)(o.A,{label:"Phone *",value:f.phone,name:"phone",placeHolder:"Enter your phone",type:"text",onChange:r=>{g(e=>({...e,[r.target.name]:r.target.value})),t({...e,[r.target.name]:r.target.value})}}),(0,a.jsx)(o.A,{label:"Email *",name:"email",value:f.email,placeHolder:"Enter your email",type:"email",onChange:r=>{g(e=>({...e,[r.target.name]:r.target.value})),t({...e,[r.target.name]:r.target.value})}})]})]})]})}},96393:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{A:()=>h});var s=r(45512),l=r(35721),n=r(62282),i=r(58009),o=r(39136),d=r(85210),c=r(57848),u=r(61559),m=r(23792),p=r(44195),f=r(47425),g=e([m,f]);[m,f]=g.then?(await g)():g;let h=({setSameAddress:e,setShippingAddress:t})=>{let[r,a]=(0,i.useState)(""),[g,h]=(0,i.useState)([]),[x,y]=(0,i.useState)(""),[v,b]=(0,i.useState)(!1),[w,j]=(0,i.useState)(null),[_,N]=(0,i.useState)({id:"",firstname:"",lastname:"",province:"",zone:"",address:"",phone:"",email:"",user_id:"",label:""});return(0,i.useEffect)(()=>{if(r){N(e=>({...e,zone:r}));let e=l.rD.find(e=>e.zone===r);console.log("selected zone:",e),e&&h(e.province)}else h([])},[r]),(0,i.useEffect)(()=>{x&&N(e=>({...e,province:x}))},[x]),(0,i.useEffect)(()=>{(async()=>{let e=await (0,p.v)();e&&j(e)})()},[]),(0,i.useEffect)(()=>{x&&N(e=>({...e,province:x}))},[x]),(0,i.useEffect)(()=>{w?.userId&&(N(e=>({...e,user_id:w?.userId})),(async()=>{try{let e=await (0,u.Wv)(m.A,{user_id:w?.userId||""});e&&e.length>0?(b(!0),N(e[0]),t(e[0].address),localStorage.setItem("DeliveryAddress",JSON.stringify(e[0]))):console.log("No delivery address found for this user.")}catch(e){console.error("Error fetching delivery address:",e)}})())},[w]),(0,s.jsxs)("div",{className:"w-full flex flex-col gap-4 items-start",children:[(0,s.jsx)("h2",{className:"font-semibold text-xl",children:"Delivery Address"}),(0,s.jsxs)("div",{className:"w-full flex flex-col gap-6 mt-4",children:[(0,s.jsxs)("div",{className:"w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4",children:[(0,s.jsx)(d.A,{label:"First name *",value:_.firstname,name:"firstname",placeHolder:"Enter your first name",type:"text",onChange:e=>N(t=>({...t,[e.target.name]:e.target.value}))}),(0,s.jsx)(d.A,{label:"Last name *",name:"lastname",value:_.lastname,placeHolder:"Enter your last name",type:"text",onChange:e=>N(t=>({...t,[e.target.name]:e.target.value}))})]}),(0,s.jsxs)("div",{className:"w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4",children:[(0,s.jsxs)("div",{className:"w-full flex flex-col gap-1",children:[(0,s.jsx)("label",{htmlFor:"",className:"text-sm",children:"Select Province"}),(0,s.jsx)(n.A,{options:g,label:""===_.zone?"Select Province":_.province,setCategory:y})]}),(0,s.jsxs)("div",{className:"w-full flex flex-col gap-1",children:[(0,s.jsx)("label",{htmlFor:"",className:"text-sm",children:"Select Zone"}),(0,s.jsx)(n.A,{options:l.z6,label:""===_.zone?"Select Zone":_.zone,setCategory:a})]})]}),(0,s.jsx)(o.A,{value:_.address,label:"Address",name:"address",placeHolder:"Enter your address",onChange:e=>{N(t=>({...t,[e.target.name]:e.target.value}))}}),(0,s.jsxs)("div",{className:"w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4",children:[(0,s.jsx)(d.A,{label:"Phone *",value:_.phone,name:"phone",placeHolder:"Enter your phone",type:"text",onChange:e=>N(t=>({...t,[e.target.name]:e.target.value}))}),(0,s.jsx)(d.A,{label:"Email *",name:"email",value:_.email,placeHolder:"Enter your email",type:"email",onChange:e=>N(t=>({...t,[e.target.name]:e.target.value}))})]}),(0,s.jsxs)("div",{className:"w-full flex flex-row items-center justify-between",children:[(0,s.jsxs)("div",{className:"min-w-12 min-h-14 flex flex-row items-center justify-center gap-2",children:[(0,s.jsx)(c.S,{onCheckedChange:()=>e(_),id:"same address"}),(0,s.jsx)("span",{className:"text-sm",children:"Bill to same address"})]}),(0,s.jsx)(f.A,{addressData:_,isAddressExist:v})]})]})]})};a()}catch(e){a(e)}})},47425:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{A:()=>y});var s=r(45512),l=r(39400),n=r(43264),i=r(23792),o=r(61559),d=r(35721),c=r(85837),u=r(62282),m=r(85210),p=r(44269),f=r(6766),g=r(45103),h=r(58009),x=e([i]);i=(x.then?(await x)():x)[0];let y=({addressData:e,isAddressExist:t})=>{let[r,a]=(0,h.useState)(),[x,y]=(0,h.useState)([]),[v,b]=(0,h.useState)(""),[w,j]=(0,h.useState)(""),[_,N]=(0,h.useState)(!1),[k,A]=(0,h.useState)(!1),[S,E]=(0,h.useState)("Home"),[C,P]=(0,h.useState)({id:"",firstname:"",lastname:"",province:"",zone:"",address:"",phone:"",email:"",user_id:"",label:""});(0,h.useEffect)(()=>{e&&P(e)},[e]),(0,h.useEffect)(()=>{P(e=>({...e,label:S}))},[e,S]),(0,h.useEffect)(()=>{if(r){P(e=>({...e,zone:r}));let e=d.rD.find(e=>e.zone===r);console.log("selected zone:",e),e&&y(e.province)}else y([])},[r]),(0,h.useEffect)(()=>{v&&P(e=>({...e,province:v}))},[v]);let $=async()=>{try{A(!0),await (0,o.UJ)(i.A,{input:{firstname:C.firstname,lastname:C.lastname,province:C.province,zone:C.zone,address:C.address,phone:C.phone,email:C.email,user_id:C.user_id,label:C.label}})&&(j("Address Success"),localStorage.setItem("DeliveryAddress",JSON.stringify(C)))}catch(e){A(!1),console.log("Error submitting address:",e)}finally{A(!1)}},q=async()=>{try{A(!0),await (0,o.Yh)(i.A,{user_id:C.user_id,input:{firstname:C.firstname,lastname:C.lastname,province:C.province,zone:C.zone,address:C.address,phone:C.phone,email:C.email,label:C.label}})&&j("Address Success")}catch(e){A(!1),console.log("Error submitting address:",e)}finally{A(!1)}};return(0,s.jsxs)(n.lG,{open:_,onOpenChange:e=>{e||j("")},children:[(0,s.jsx)(n.zM,{asChild:!0,children:(0,s.jsx)("div",{onClick:()=>N(!0),className:"border-none bg-transparent hover:cursor-pointer underline text-muted-foreground text-sm",children:"Save the address"})}),""===w&&(0,s.jsxs)(n.Cf,{className:"sm:max-w-[50vw] lg:min-h-[20rem] px-4 lg:py-12 md:py-12 py-10 flex flex-col",children:[(0,s.jsx)(n.L3,{}),(0,s.jsx)("div",{onClick:()=>{N(!1)},className:"absolute top-4 right-6 p-1 border hover:cursor-pointer hover:border-gray-600 border-gray-300 rounded-full",children:(0,s.jsx)(p.A,{size:20})}),(0,s.jsxs)("div",{className:" w-full h-full grid grid-cols-1 gap-y-5 ",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,s.jsx)("div",{className:"w-[150px] h-[60px] relative",children:(0,s.jsx)(g.default,{alt:"logo",src:"/images/logo.png",layout:"fill",objectFit:"contain"})}),(0,s.jsxs)("div",{className:"flex lg:flex-row items-center md:flex-row flex-col gap-2 mt-2",children:[(0,s.jsx)("span",{className:"font-semibold",children:"Welcome to"}),(0,s.jsx)("span",{className:"font-semibold text-secondary_color",children:"NatSay.com.mm"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-4 px-10 mt-6 ",children:[(0,s.jsx)("h2",{className:"font-semibold text-xl",children:"Add New Address"}),(0,s.jsxs)("div",{className:"w-full max-h-[35vh] flex flex-col gap-6 mt-4 overflow-y-auto scrollbar-thin",children:[(0,s.jsxs)("div",{className:"w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4",children:[(0,s.jsx)(m.A,{label:"First name *",value:C.firstname,name:"firstname",placeHolder:"Enter your first name",type:"text",onChange:e=>P(t=>({...t,[e.target.name]:e.target.value}))}),(0,s.jsx)(m.A,{label:"Last name *",name:"lastname",value:C.lastname,placeHolder:"Enter your last name",type:"text",onChange:e=>P(t=>({...t,[e.target.name]:e.target.value}))})]}),(0,s.jsxs)("div",{className:"w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4",children:[(0,s.jsxs)("div",{className:"w-full flex flex-col gap-1",children:[(0,s.jsx)("label",{htmlFor:"",className:"text-sm",children:"Select Province"}),(0,s.jsx)(u.A,{options:d.z6,label:e.province,setCategory:b})]}),(0,s.jsxs)("div",{className:"w-full flex flex-col gap-1",children:[(0,s.jsx)("label",{htmlFor:"",className:"text-sm",children:"Select Zone"}),(0,s.jsx)(u.A,{options:d.z6,label:e.zone,setCategory:a})]})]}),(0,s.jsxs)("div",{className:"w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4",children:[(0,s.jsx)(m.A,{label:"Phone *",value:C.phone,name:"phone",placeHolder:"Enter your phone",type:"text",onChange:e=>P(t=>({...t,[e.target.name]:e.target.value}))}),(0,s.jsx)(m.A,{label:"Email *",name:"email",value:C.email,placeHolder:"Enter your email",type:"email",onChange:e=>P(t=>({...t,[e.target.name]:e.target.value}))})]}),(0,s.jsx)(m.A,{value:C.address,label:"Address",type:"text",name:"address",placeHolder:"Enter your address",onChange:e=>P(t=>({...t,[e.target.name]:e.target.value}))})]}),(0,s.jsxs)("div",{className:"felx flex-col gap-2",children:[(0,s.jsx)("label",{htmlFor:"",className:"text-sm",children:"Label for delivery *"}),(0,s.jsxs)("div",{className:"flex flex-row items-center gap-4 mt-2",children:[(0,s.jsx)(l.$,{variant:"Home"===S?"default":"outline",onClick:()=>E("Home"),children:"Home"}),(0,s.jsx)(l.$,{variant:"Office"===S?"default":"outline",onClick:()=>E("Office"),children:"Office"})]})]}),(0,s.jsx)(l.$,{onClick:()=>{t?q():$()},className:"flex items-center justify-center",children:k?(0,s.jsx)(f.A,{className:"animate-spin"}):"Save new address"})]})]})]}),"Address Success"===w&&(0,s.jsxs)(n.Cf,{className:" px-4 lg:py-12 md:py-12 py-10",children:[(0,s.jsx)(n.L3,{}),(0,s.jsx)("div",{onClick:()=>{N(!1),j("")},className:"absolute top-4 right-6 p-1 border hover:cursor-pointer hover:border-gray-600 border-gray-300 rounded-full",children:(0,s.jsx)(p.A,{size:20})}),(0,s.jsx)(c.A,{label:"Address has been successfully saved"})]})]})};a()}catch(e){a(e)}})},73995:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{default:()=>_});var s=r(45512),l=r(46411),n=r(96393),i=r(74380),o=r(74539),d=r(66816),c=r(58009),u=r(61559),m=r(44195),p=r(23792),f=r(56337),g=r(92273),h=r(90455),x=r(71903),y=r(54716),v=r(79334),b=r(6502),w=r(40977),j=e([n,p]);[n,p]=j.then?(await j)():j;let _=()=>{let[e,t]=(0,c.useState)({id:"",firstname:"",lastname:"",province:"",zone:"",address:"",phone:"",email:"",user_id:"",label:""}),r=(0,g.wA)(),[a,j]=(0,c.useState)(),[_,N]=(0,c.useState)(),[k,A]=(0,c.useState)(!1),[S,E]=(0,c.useState)(!1),[C,P]=(0,c.useState)(null),[$,q]=(0,c.useState)(!1),{uploadToS3:R}=(0,x.w)(),D=(0,v.useRouter)(),[I,z]=(0,c.useState)("abfa998a-8e84-4ca0-887e-79f572127bdd"),[F,L]=(0,c.useState)("");(0,c.useEffect)(()=>{(async()=>{let e=await (0,m.v)();e&&P(e)})()},[]),(0,c.useEffect)(()=>{"abfa998a-8e84-4ca0-887e-79f572127bdd"!==I?A(!1):A(!0)}),(0,c.useEffect)(()=>{C?.userId&&(t(e=>({...e,user_id:C?.userId})),(async()=>{try{let e=await (0,u.pp)(p.A,{user_id:C?.userId||""});e&&e.length>0?q(!0):console.log("No delivery address found for this user.")}catch(e){console.error("Error fetching delivery address:",e)}})())},[C]);let M=(0,c.useCallback)(async()=>{try{await (0,u.bN)(p.A,{input:{firstname:e.firstname,lastname:e.lastname,province:e.province,zone:e.zone,address:e.address,phone:e.phone,email:e.email,user_id:e.user_id}})}catch(e){console.log("Error submitting address:",e)}finally{}},[e]),J=(0,g.d4)(e=>e.cart.cartItems),O=(0,c.useCallback)(async()=>{try{await (0,u.PD)(p.A,{user_id:e.user_id,input:{firstname:e.firstname,lastname:e.lastname,province:e.province,zone:e.zone,address:e.address,phone:e.phone,email:e.email}})}catch(e){console.log("Error submitting address:",e)}finally{}},[e]),B=(0,c.useCallback)(()=>$?O():M(),[$,M,O]),G=(0,c.useCallback)(async()=>{try{let t;if(E(!0),!(await Promise.all(J.map(e=>(0,b.FQ)(p.A,{id:e.id,requestedQuantity:e.quantity})))).every(e=>e)){(0,y.oR)({description:"Some items in your cart are out of stock. Please review your cart.",variant:"destructive"});return}if(await B(),!k){if(!a){(0,y.oR)({description:"Plese upload payment proof image"});return}if(a&&!(t=await R(a)))throw Error("Failed to upload payment image.")}let s=await (0,f.es)(p.A,{input:{user_id:C?.userId,status:"Pending",total_price:_,payment_id:I,payment_proof:k?"":t,shipping_address:F}});if(!s)throw Error("Failed to create order.");let l=s.id;await Promise.all(J.map(e=>(0,f.$u)(p.A,{input:{order_id:l,product_id:e.id,shop_id:e.shop?.id,quantity:e.quantity,price:e.discount_price&&e.discount_price>0?e.discount_price:e.price,subtotal:e.discount_price?e.discount_price*e.discount_price:0}}))),await Promise.all(J.map(e=>(0,b.YY)(p.A,{id:e.id,quantity:e.quantity})));let n=[...new Set(J.map(e=>e.shop?.id).filter(Boolean))];console.log("Unique Shops:",n),await Promise.all(n.map(e=>{if(!e)return;let t={shop_id:e,order_id:l,description:`New order received! Order ID: ${l}`,type:"ORDER"};return console.log("Notification Payload:",t),(0,w.n)(p.A,{input:t})})),localStorage.setItem("success","success-order"),localStorage.setItem("orderID",JSON.stringify(l)),localStorage.setItem("paymentID",JSON.stringify(I)),localStorage.setItem("paymentID",JSON.stringify(I)),localStorage.setItem("BillingAddress",JSON.stringify(e)),localStorage.setItem("ordered items",JSON.stringify(J)),r((0,h.sX)()),(0,y.oR)({description:"Order successfully placed"}),D.push("/order-success")}catch(e){console.log("Error creating order:",e),(0,y.oR)({description:"Failed to create order"})}finally{E(!1)}},[e,a,_,I,C,J,r,B,R]);return(0,s.jsxs)("div",{className:"w-full grid lg:grid-cols-5 md:grid-cols-5 grid-cols-1 gap-4",children:[(0,s.jsxs)("div",{className:"lg:col-span-3 md:col-span-3 col-span-1 min-h-32 border rounded-md py-4 px-8 flex flex-col gap-4 bg-white",children:[(0,s.jsx)("div",{className:"w-full min-h-52",children:(0,s.jsx)(n.A,{setShippingAddress:L,setSameAddress:t})}),(0,s.jsx)(l.w,{className:"my-4 border-t border-gray-300"}),(0,s.jsx)("div",{className:"w-full min-h-52",children:(0,s.jsx)(i.A,{setAddress:t,address:e})}),(0,s.jsx)(l.w,{className:"my-4 border-t border-gray-300"}),(0,s.jsx)("div",{className:"w-full min-h-36",children:(0,s.jsx)(o.A,{setPayment:z})})]}),(0,s.jsx)("div",{className:"lg:col-span-2 md:col-span-2 col-span-1",children:(0,s.jsx)(d.A,{isCOD:k,setImage:j,setTotalPrice:N,placeOrder:G,orderLoading:S})})]})};a()}catch(e){a(e)}})},66816:(e,t,r)=>{"use strict";r.d(t,{A:()=>g});var a=r(45512),s=r(39400),l=r(46411),n=r(41680);let i=(0,n.A)("FolderClosed",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]),o=(0,n.A)("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);var d=r(58009);let c=({onFileSelect:e,multiple:t=!1,accept:r,className:s})=>{let[l,n]=(0,d.useState)(!1),c=(0,d.useRef)(null),[u,m]=(0,d.useState)(null),p=e=>{e.preventDefault(),e.stopPropagation(),n("dragenter"===e.type||"dragover"===e.type)};return(0,a.jsxs)("div",{className:"h-full",children:[(0,a.jsxs)("div",{onDragEnter:p,onDragOver:p,onDragLeave:p,onDrop:a=>{a.preventDefault(),a.stopPropagation(),n(!1);let s=a.dataTransfer.files;if(!s)return;if(!t&&s.length>1){m("Only one file is allwed");return}let l=r?r.split(","):[];for(let e=0;e<s.length;e++){let t=s[e],a=l.some(e=>new RegExp(e.replace("*",".*")).test(t.type));if(r&&!a){m(`Invalid file type: ${t.name}`);return}}m(null),e(s)},className:`${s} border-2 border-dashed flex flex-col items-center justify-center gap-2 p-6 rounded-lg text-center cursor-pointer transition-colors h-full ${l?"border-primary":"border-gray-400 bg-gray-50"}`,onClick:()=>{c.current?.click()},children:[(0,a.jsx)("input",{ref:c,type:"file",className:"hidden",multiple:t,accept:r,onChange:t=>{t.target.files&&e(t.target.files)}}),(0,a.jsx)(i,{color:"#b09696",size:22}),(0,a.jsx)("div",{className:"text-muted-foreground text-sm",children:t?(0,a.jsxs)("div",{className:"flex flex-col gap-2 items-center justify-center",children:[(0,a.jsx)(o,{color:"black"}),(0,a.jsxs)("div",{className:"text-black",children:[(0,a.jsx)("span",{className:"text-inputlabel underline",children:"Click to upload"})," or drag and frop"]})]}):"Upload a screenshot here"})]}),u&&(0,a.jsx)("p",{className:"text-xs text-error mt-2",children:u})]})};var u=r(44269),m=r(6766),p=r(45103),f=r(92273);let g=({placeOrder:e,orderLoading:t,setTotalPrice:r,setImage:n,isCOD:i})=>{let[o,g]=(0,d.useState)(!1),[h,x]=(0,d.useState)([]);(0,f.wA)();let y=(0,f.d4)(e=>e.cart.cartItems),v=y.length,b=y.reduce((e,t)=>e+(t&&t.discount_price&&t.discount_price>0?t.discount_price:t.price)*t.quantity,0),w=parseInt((.03*b).toString()),j=b+w-0;(0,d.useEffect)(()=>{g(!0),r(j)},[y]);let _=e=>{x(t=>t.filter((t,r)=>r!==e))};return(0,d.useEffect)(()=>{h.length>0&&n(h[0])},[h]),(0,a.jsxs)("div",{className:"w-full min-h-36 py-4 px-8 bg-white  border rounded-md flex flex-col gap-4",children:[(0,a.jsx)("div",{className:"w-full flex flex-col gap-2",children:o&&y.length>0&&y.map(e=>(0,a.jsxs)("div",{className:"w-full grid grid-cols-4 gap-3 min-h-16",children:[(0,a.jsxs)("div",{className:"col-span-2 flex flex-row items-center gap-1",children:[(0,a.jsx)("div",{className:"w-full h-full relative",children:(0,a.jsx)(p.default,{alt:"",layout:"fill",objectFit:"contain",src:e.images?.[0].image_url||"/images/image_placeholder.jpg"})}),(0,a.jsx)("span",{className:"text-sm",children:e.name})]}),(0,a.jsx)("div",{className:"h-full col-span-1 flex items-center justify-center",children:(0,a.jsxs)("span",{className:"text-sm text-muted-foreground",children:["x",e.quantity]})}),(0,a.jsx)("div",{className:"h-full col-span-1 flex items-center justify-center",children:(0,a.jsxs)("span",{className:"text-sm",children:["MMK"," ",(e.quantity*(e.discount_price>0?e.discount_price:e.price)).toLocaleString()]})})]},e.id))}),(0,a.jsx)(l.w,{className:"my-4"}),(0,a.jsxs)("div",{className:"flex flex-col gap-4 w-full",children:[(0,a.jsxs)("div",{className:"w-full flex flex-row items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[(0,a.jsx)("span",{className:"",children:"Subtotal"}),(0,a.jsxs)("span",{className:"text-xs text-muted-foreground",children:["(",o?v:0," items)"]})]}),(0,a.jsxs)("span",{className:"text-sm text-muted-foreground",children:["MMK ",o?b.toLocaleString():0]})]}),(0,a.jsxs)("div",{className:"w-full flex flex-row items-center justify-between",children:[(0,a.jsx)("div",{className:"flex flex-row gap-2 items-center",children:(0,a.jsx)("span",{className:"",children:"Discount"})}),(0,a.jsxs)("span",{className:"text-sm text-muted-foreground",children:["MMK ",0..toLocaleString()]})]}),(0,a.jsxs)("div",{className:"w-full flex flex-row items-center justify-between",children:[(0,a.jsx)("div",{className:"flex flex-row gap-2 items-center",children:(0,a.jsx)("span",{className:"",children:"Delivery"})}),(0,a.jsx)("span",{className:"text-sm text-muted-foreground",children:"Free"})]}),(0,a.jsxs)("div",{className:"w-full flex flex-row items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[(0,a.jsx)("span",{className:"",children:"Tax"}),(0,a.jsx)("span",{className:"text-xs text-muted-foreground",children:"PDV 3% (included)"})]}),(0,a.jsxs)("span",{className:"text-sm text-muted-foreground",children:["MMK ",w]})]})]}),(0,a.jsx)(l.w,{className:"my-4"}),(0,a.jsxs)("div",{className:"w-full flex flex-row items-center justify-between",children:[(0,a.jsx)("div",{className:"flex flex-row gap-2 items-center",children:(0,a.jsx)("span",{className:"",children:"Total:"})}),(0,a.jsxs)("span",{className:"text-muted-foreground font-bold",children:["MMK ",o?j.toLocaleString():"0,000"]})]}),(0,a.jsx)("div",{className:"h-6"}),h.length<1&&!i?(0,a.jsx)("div",{className:"w-full h-28",children:(0,a.jsx)(c,{className:"w-full h-full",onFileSelect:e=>{x(t=>[...t,...Array.from(e)])},multiple:!1})}):null,h.map((e,t)=>(0,a.jsxs)("div",{className:"w-full h-28 border rounded-md relative",children:[(0,a.jsx)(p.default,{objectFit:"contain",layout:"fill",src:URL.createObjectURL(e),alt:"payment"}),(0,a.jsx)("div",{onClick:()=>_(t),className:"absolute top-1 right-2 hover:cursor-pointer",children:(0,a.jsx)(u.A,{size:30,color:"black"})})]},t)),(0,a.jsx)(s.$,{disabled:t,onClick:e,className:"mt-3 flex items-center justify-center",children:t?(0,a.jsx)(m.A,{className:"animate-spin"}):"Place Order"})]})}},74539:(e,t,r)=>{"use strict";r.d(t,{A:()=>eo});var a=r(45512),s=r(17184),l=r(58009),n=r(31412),i=r(29952),o=r(6004),d=r(18055),c=r(31954),u=r(30096),m=r(92828),p=r(13024),f=r(59018),g="rovingFocusGroup.onEntryFocus",h={bubbles:!1,cancelable:!0},x="RovingFocusGroup",[y,v,b]=(0,c.N)(x),[w,j]=(0,o.A)(x,[b]),[_,N]=w(x),k=l.forwardRef((e,t)=>(0,a.jsx)(y.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,a.jsx)(y.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,a.jsx)(A,{...e,ref:t})})}));k.displayName=x;var A=l.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:s,loop:o=!1,dir:c,currentTabStopId:u,defaultCurrentTabStopId:x,onCurrentTabStopIdChange:y,onEntryFocus:b,preventScrollOnEntryFocus:w=!1,...j}=e,N=l.useRef(null),k=(0,i.s)(t,N),A=(0,f.jH)(c),[S=null,E]=(0,p.i)({prop:u,defaultProp:x,onChange:y}),[C,$]=l.useState(!1),q=(0,m.c)(b),R=v(r),D=l.useRef(!1),[I,z]=l.useState(0);return l.useEffect(()=>{let e=N.current;if(e)return e.addEventListener(g,q),()=>e.removeEventListener(g,q)},[q]),(0,a.jsx)(_,{scope:r,orientation:s,dir:A,loop:o,currentTabStopId:S,onItemFocus:l.useCallback(e=>E(e),[E]),onItemShiftTab:l.useCallback(()=>$(!0),[]),onFocusableItemAdd:l.useCallback(()=>z(e=>e+1),[]),onFocusableItemRemove:l.useCallback(()=>z(e=>e-1),[]),children:(0,a.jsx)(d.sG.div,{tabIndex:C||0===I?-1:0,"data-orientation":s,...j,ref:k,style:{outline:"none",...e.style},onMouseDown:(0,n.m)(e.onMouseDown,()=>{D.current=!0}),onFocus:(0,n.m)(e.onFocus,e=>{let t=!D.current;if(e.target===e.currentTarget&&t&&!C){let t=new CustomEvent(g,h);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=R().filter(e=>e.focusable);P([e.find(e=>e.active),e.find(e=>e.id===S),...e].filter(Boolean).map(e=>e.ref.current),w)}}D.current=!1}),onBlur:(0,n.m)(e.onBlur,()=>$(!1))})})}),S="RovingFocusGroupItem",E=l.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:s=!0,active:i=!1,tabStopId:o,...c}=e,m=(0,u.B)(),p=o||m,f=N(S,r),g=f.currentTabStopId===p,h=v(r),{onFocusableItemAdd:x,onFocusableItemRemove:b}=f;return l.useEffect(()=>{if(s)return x(),()=>b()},[s,x,b]),(0,a.jsx)(y.ItemSlot,{scope:r,id:p,focusable:s,active:i,children:(0,a.jsx)(d.sG.span,{tabIndex:g?0:-1,"data-orientation":f.orientation,...c,ref:t,onMouseDown:(0,n.m)(e.onMouseDown,e=>{s?f.onItemFocus(p):e.preventDefault()}),onFocus:(0,n.m)(e.onFocus,()=>f.onItemFocus(p)),onKeyDown:(0,n.m)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){f.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var a;let s=(a=e.key,"rtl"!==r?a:"ArrowLeft"===a?"ArrowRight":"ArrowRight"===a?"ArrowLeft":a);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(s))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(s)))return C[s]}(e,f.orientation,f.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let r=h().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)r.reverse();else if("prev"===t||"next"===t){"prev"===t&&r.reverse();let a=r.indexOf(e.currentTarget);r=f.loop?function(e,t){return e.map((r,a)=>e[(t+a)%e.length])}(r,a+1):r.slice(a+1)}setTimeout(()=>P(r))}})})})});E.displayName=S;var C={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function P(e,t=!1){let r=document.activeElement;for(let a of e)if(a===r||(a.focus({preventScroll:t}),document.activeElement!==r))return}var $=r(38762),q=r(66582),R=r(98060),D="Radio",[I,z]=(0,o.A)(D),[F,L]=I(D),M=l.forwardRef((e,t)=>{let{__scopeRadio:r,name:s,checked:o=!1,required:c,disabled:u,value:m="on",onCheck:p,form:f,...g}=e,[h,x]=l.useState(null),y=(0,i.s)(t,e=>x(e)),v=l.useRef(!1),b=!h||f||!!h.closest("form");return(0,a.jsxs)(F,{scope:r,checked:o,disabled:u,children:[(0,a.jsx)(d.sG.button,{type:"button",role:"radio","aria-checked":o,"data-state":G(o),"data-disabled":u?"":void 0,disabled:u,value:m,...g,ref:y,onClick:(0,n.m)(e.onClick,e=>{o||p?.(),b&&(v.current=e.isPropagationStopped(),v.current||e.stopPropagation())})}),b&&(0,a.jsx)(B,{control:h,bubbles:!v.current,name:s,value:m,checked:o,required:c,disabled:u,form:f,style:{transform:"translateX(-100%)"}})]})});M.displayName=D;var J="RadioIndicator",O=l.forwardRef((e,t)=>{let{__scopeRadio:r,forceMount:s,...l}=e,n=L(J,r);return(0,a.jsx)(R.C,{present:s||n.checked,children:(0,a.jsx)(d.sG.span,{"data-state":G(n.checked),"data-disabled":n.disabled?"":void 0,...l,ref:t})})});O.displayName=J;var B=e=>{let{control:t,checked:r,bubbles:s=!0,...n}=e,i=l.useRef(null),o=(0,q.Z)(r),d=(0,$.X)(t);return l.useEffect(()=>{let e=i.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(o!==r&&t){let a=new Event("click",{bubbles:s});t.call(e,r),e.dispatchEvent(a)}},[o,r,s]),(0,a.jsx)("input",{type:"radio","aria-hidden":!0,defaultChecked:r,...n,tabIndex:-1,ref:i,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function G(e){return e?"checked":"unchecked"}var H=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],T="RadioGroup",[U,K]=(0,o.A)(T,[j,z]),Q=j(),V=z(),[Z,W]=U(T),Y=l.forwardRef((e,t)=>{let{__scopeRadioGroup:r,name:s,defaultValue:l,value:n,required:i=!1,disabled:o=!1,orientation:c,dir:u,loop:m=!0,onValueChange:g,...h}=e,x=Q(r),y=(0,f.jH)(u),[v,b]=(0,p.i)({prop:n,defaultProp:l,onChange:g});return(0,a.jsx)(Z,{scope:r,name:s,required:i,disabled:o,value:v,onValueChange:b,children:(0,a.jsx)(k,{asChild:!0,...x,orientation:c,dir:y,loop:m,children:(0,a.jsx)(d.sG.div,{role:"radiogroup","aria-required":i,"aria-orientation":c,"data-disabled":o?"":void 0,dir:y,...h,ref:t})})})});Y.displayName=T;var X="RadioGroupItem",ee=l.forwardRef((e,t)=>{let{__scopeRadioGroup:r,disabled:s,...o}=e,d=W(X,r),c=d.disabled||s,u=Q(r),m=V(r),p=l.useRef(null),f=(0,i.s)(t,p),g=d.value===o.value,h=l.useRef(!1);return l.useEffect(()=>{let e=e=>{H.includes(e.key)&&(h.current=!0)},t=()=>h.current=!1;return document.addEventListener("keydown",e),document.addEventListener("keyup",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",t)}},[]),(0,a.jsx)(E,{asChild:!0,...u,focusable:!c,active:g,children:(0,a.jsx)(M,{disabled:c,required:d.required,checked:g,...m,...o,name:d.name,ref:f,onCheck:()=>d.onValueChange(o.value),onKeyDown:(0,n.m)(e=>{"Enter"===e.key&&e.preventDefault()}),onFocus:(0,n.m)(o.onFocus,()=>{h.current&&p.current?.click()})})})});ee.displayName=X;var et=l.forwardRef((e,t)=>{let{__scopeRadioGroup:r,...s}=e,l=V(r);return(0,a.jsx)(O,{...l,...s,ref:t})});et.displayName="RadioGroupIndicator";let er=(0,r(41680).A)("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);var ea=r(44195);let es=l.forwardRef(({className:e,...t},r)=>(0,a.jsx)(Y,{className:(0,ea.cn)("grid gap-6",e),...t,ref:r}));es.displayName=Y.displayName;let el=l.forwardRef(({className:e,...t},r)=>(0,a.jsx)(ee,{ref:r,className:(0,ea.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),...t,children:(0,a.jsx)(et,{className:"flex items-center justify-center",children:(0,a.jsx)(er,{className:"h-2.5 w-2.5 fill-current text-current"})})}));el.displayName=ee.displayName;var en=r(45103);function ei({setPayment:e}){return(0,a.jsxs)(es,{onValueChange:t=>e(t),defaultValue:"abfa998a-8e84-4ca0-887e-79f572127bdd",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(el,{value:"abfa998a-8e84-4ca0-887e-79f572127bdd",id:"abfa998a-8e84-4ca0-887e-79f572127bdd"}),(0,a.jsx)(s.J,{htmlFor:"r1",className:"text-muted-foreground",children:"Cash on delivery"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center space-x-2",children:[(0,a.jsx)(el,{value:"5af460bc-bb4c-4183-b655-22d8dcc18d36",id:"5af460bc-bb4c-4183-b655-22d8dcc18d36"}),(0,a.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,a.jsx)("div",{className:"h-12 w-12 relative",children:(0,a.jsx)(en.default,{alt:"kpay",src:"/images/payment/kpay.png",layout:"fill",objectFit:"cover"})}),(0,a.jsxs)("div",{className:"flex flex-col h-12 justify-between",children:[(0,a.jsx)(s.J,{htmlFor:"r2",className:"font-semibold text-sm",children:"KBZ Pay"}),(0,a.jsxs)("div",{className:"flex flow-row items-center gap-1 text-sm text-muted-foreground",children:[(0,a.jsx)("span",{children:"09973854868"}),(0,a.jsx)("span",{children:"(Natsay.com.mm)"})]})]})]})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center space-x-2",children:[(0,a.jsx)(el,{value:"b6447a68-7a77-4365-a23f-6d9232a4ee27",id:"b6447a68-7a77-4365-a23f-6d9232a4ee27"}),(0,a.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,a.jsx)("div",{className:"h-12 w-12 relative",children:(0,a.jsx)(en.default,{alt:"wavepay",src:"/images/payment/wave.jpg",layout:"fill",objectFit:"cover",className:"rounded-md"})}),(0,a.jsxs)("div",{className:"flex flex-col h-12 justify-between",children:[(0,a.jsx)(s.J,{htmlFor:"r2",className:"font-semibold text-sm",children:"Wave Pay"}),(0,a.jsxs)("div",{className:"flex flow-row items-center gap-1 text-sm text-muted-foreground",children:[(0,a.jsx)("span",{children:"09973854868"}),(0,a.jsx)("span",{children:"(Natsay.com.mm)"})]})]})]})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center space-x-2",children:[(0,a.jsx)(el,{value:"d776755c-0120-4831-91fb-a8f8a7e5f233",id:"d776755c-0120-4831-91fb-a8f8a7e5f233"}),(0,a.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,a.jsx)("div",{className:"h-12 w-12 relative",children:(0,a.jsx)(en.default,{alt:"aya",src:"/images/payment/aya.jpg",layout:"fill",objectFit:"contain",className:"rounded-md"})}),(0,a.jsxs)("div",{className:"flex flex-col h-12 justify-between",children:[(0,a.jsx)(s.J,{htmlFor:"r2",className:"font-semibold text-sm",children:"Aya Pay"}),(0,a.jsxs)("div",{className:"flex flow-row items-center gap-1 text-sm text-muted-foreground",children:[(0,a.jsx)("span",{children:"09973854868"}),(0,a.jsx)("span",{children:"(Natsay.com.mm)"})]})]})]})]})]})}let eo=({setPayment:e})=>(0,a.jsxs)("div",{className:"w-full flex flex-col gap-4 pb-4",children:[(0,a.jsx)("h2",{className:"font-semibold text-xl",children:"Payment Method"}),(0,a.jsx)("p",{className:"p-3 leading-5 text-sm rounded-md text-muted-foreground bg-secondary_color/10",children:"Please ensure that your payment details are accurate before proceeding. Incorrect information may delay your order. And be aware that all transactions are final once completed."}),(0,a.jsx)(ei,{setPayment:e})]})},62282:(e,t,r)=>{"use strict";r.d(t,{A:()=>j});var a=r(45512),s=r(58009),l=r(98755),n=r(24849),i=r(39400),o=r(10440),d=r(16873),c=r(44195);r(43264);let u=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)(o.uB,{ref:r,className:(0,c.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",e),...t}));u.displayName=o.uB.displayName;let m=s.forwardRef(({className:e,...t},r)=>(0,a.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,a.jsx)(d.A,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,a.jsx)(o.uB.Input,{ref:r,className:(0,c.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",e),...t})]}));m.displayName=o.uB.Input.displayName;let p=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)(o.uB.List,{ref:r,className:(0,c.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",e),...t}));p.displayName=o.uB.List.displayName;let f=s.forwardRef((e,t)=>(0,a.jsx)(o.uB.Empty,{ref:t,className:"py-6 text-center text-sm",...e}));f.displayName=o.uB.Empty.displayName;let g=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)(o.uB.Group,{ref:r,className:(0,c.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",e),...t}));g.displayName=o.uB.Group.displayName,s.forwardRef(({className:e,...t},r)=>(0,a.jsx)(o.uB.Separator,{ref:r,className:(0,c.cn)("-mx-1 h-px bg-border",e),...t})).displayName=o.uB.Separator.displayName;let h=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)(o.uB.Item,{ref:r,className:(0,c.cn)("relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",e),...t}));h.displayName=o.uB.Item.displayName;var x=r(21587);let y=x.bL,v=x.l9,b=s.forwardRef(({className:e,align:t="center",sideOffset:r=4,...s},l)=>(0,a.jsx)(x.ZL,{children:(0,a.jsx)(x.UC,{ref:l,align:t,sideOffset:r,className:(0,c.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...s})}));b.displayName=x.UC.displayName;var w=r(82281);let j=({options:e,setCategory:t,label:r})=>{let[o,d]=s.useState(!1),[c,x]=s.useState(""),j=s.useRef(null);return(0,a.jsxs)(y,{open:o,onOpenChange:d,children:[(0,a.jsx)(v,{className:"w-full",asChild:!0,children:(0,a.jsxs)(i.$,{ref:j,variant:"outline",role:"combobox","aria-expanded":o,className:"w-full justify-between text-inputname",children:[c?e.find(e=>e.id===c)?.name:r,(0,a.jsx)(l.A,{color:"#796f6f",size:20})]})}),(0,a.jsx)(b,{style:{width:j.current?`${j.current.offsetWidth}px`:"auto"},className:"p-0",children:(0,a.jsxs)(u,{children:[(0,a.jsx)(m,{placeholder:"Search option..."}),(0,a.jsxs)(p,{children:[(0,a.jsx)(f,{children:"No option found."}),(0,a.jsx)(g,{children:e.map(e=>(0,a.jsxs)(h,{id:e.id,onSelect:()=>{x(e.id),d(!1),t(e.name)},children:[(0,a.jsx)(n.A,{className:(0,w.A)("mr-2 h-4 w-4",c===e.id?"opacity-100":"opacity-0")}),e.name]},e.id))})]})]})})]})}},85210:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var a=r(45512),s=r(77722),l=r(17184);let n=({label:e,name:t,type:r,placeHolder:n,value:i,onChange:o,...d})=>(0,a.jsxs)("div",{className:"w-full h-full flex flex-col gap-2",children:[(0,a.jsx)(l.J,{htmlFor:String(t),className:"text-inputlabel",children:e}),(0,a.jsx)(s.p,{className:"focus-visible:ring-offset-0 focus-visible:ring-0",id:String(t),name:String(t),type:r,placeholder:n,value:i,onChange:o,...d})]})},39136:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var a=r(45512),s=r(17184),l=r(58009),n=r(44195);let i=l.forwardRef(({className:e,...t},r)=>(0,a.jsx)("textarea",{className:(0,n.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...t}));i.displayName="Textarea";let o=({label:e,name:t,value:r,placeHolder:l,onChange:n,onFileUpload:o,...d})=>(0,a.jsxs)("div",{className:"w-full h-full flex flex-col gap-2",children:[(0,a.jsx)("div",{className:"w-full flex flex-row justify-between",children:(0,a.jsx)(s.J,{htmlFor:t,className:"text-inputlabel",children:e})}),(0,a.jsx)(i,{id:t,className:"min-h-36 focus-visible:ring-offset-0 focus-visible:ring-0",name:t,placeholder:l,value:r,onChange:n,...d})]})},74156:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var a=r(62740),s=r(27837);function l({children:e}){return(0,a.jsx)(s.A,{children:e})}},25940:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var a=r(62740),s=r(66423);let l=async()=>{try{return(0,a.jsx)("section",{className:"w-full flex flex-col items-center lg:min-h-72",children:(0,a.jsx)("div",{className:"w-full max-w-[1300px] lg:mt-16 md:mt-16 mt-4",children:(0,a.jsx)(s.default,{})})})}catch(e){return console.error("Error fetching data:",e),(0,a.jsx)("div",{children:"Error loading data"})}}},66423:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});let a=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\NextJS\\\\new medical web\\\\natsay_web_client\\\\src\\\\modules\\\\checkout\\\\index.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\new medical web\\natsay_web_client\\src\\modules\\checkout\\index.tsx","default")},7752:(e,t,r)=>{"use strict";r.d(t,{m:()=>n});var a=r(20212),s=r(23331),l=r(35542);function n(e){var t=s.useContext((0,l.l)()),r=e||t.client;return(0,a.V1)(!!r,58),r}},44362:(e,t,r)=>{"use strict";r.d(t,{D$:()=>u,KG:()=>a});var a,s,l=r(20212),n=r(18934),i=r(57107),o=r(80962);function d(e){var t;switch(e){case a.Query:t="Query";break;case a.Mutation:t="Mutation";break;case a.Subscription:t="Subscription"}return t}function c(e){s||(s=new n.A(i.v.parser||1e3));var t,r,o=s.get(e);if(o)return o;(0,l.V1)(!!e&&!!e.kind,70,e);for(var d=[],c=[],u=[],m=[],p=0,f=e.definitions;p<f.length;p++){var g=f[p];if("FragmentDefinition"===g.kind){d.push(g);continue}if("OperationDefinition"===g.kind)switch(g.operation){case"query":c.push(g);break;case"mutation":u.push(g);break;case"subscription":m.push(g)}}(0,l.V1)(!d.length||c.length||u.length||m.length,71),(0,l.V1)(c.length+u.length+m.length<=1,72,e,c.length,m.length,u.length),r=c.length?a.Query:a.Mutation,c.length||u.length||(r=a.Subscription);var h=c.length?c:u.length?u:m;(0,l.V1)(1===h.length,73,e,h.length);var x=h[0];t=x.variableDefinitions||[];var y={name:x.name&&"Name"===x.name.kind?x.name.value:"data",type:r,variables:t};return s.set(e,y),y}function u(e,t){var r=c(e),a=d(t),s=d(r.type);(0,l.V1)(r.type===t,74,a,a,s)}(function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"})(a||(a={})),c.resetCache=function(){s=void 0},!1!==globalThis.__DEV__&&(0,o.D_)("parser",function(){return s?s.size:0})}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[681,692,543,682,138,341],()=>r(60537));module.exports=a})();