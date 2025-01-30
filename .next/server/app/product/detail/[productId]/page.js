(()=>{var e={};e.id=281,e.ids=[281],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},33873:e=>{"use strict";e.exports=require("path")},11997:e=>{"use strict";e.exports=require("punycode")},27910:e=>{"use strict";e.exports=require("stream")},79551:e=>{"use strict";e.exports=require("url")},74075:e=>{"use strict";e.exports=require("zlib")},5910:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>i.a,__next_app__:()=>x,pages:()=>n,routeModule:()=>m,tree:()=>o});var t=r(70260),l=r(28203),a=r(25155),i=r.n(a),d=r(67292),c={};for(let e in d)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>d[e]);r.d(s,c);let o=["",{children:["product",{children:["detail",{children:["[productId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,66586)),"D:\\NextJS\\medical website\\medical-clinic\\src\\app\\product\\detail\\[productId]\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,86994)),"D:\\NextJS\\medical website\\medical-clinic\\src\\app\\product\\detail\\layout.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,71354)),"D:\\NextJS\\medical website\\medical-clinic\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],n=["D:\\NextJS\\medical website\\medical-clinic\\src\\app\\product\\detail\\[productId]\\page.tsx"],x={require:r,loadChunk:()=>Promise.resolve()},m=new t.AppPageRouteModule({definition:{kind:l.RouteKind.APP_PAGE,page:"/product/detail/[productId]/page",pathname:"/product/detail/[productId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},14949:(e,s,r)=>{Promise.resolve().then(r.bind(r,40589)),Promise.resolve().then(r.bind(r,76360)),Promise.resolve().then(r.bind(r,84677))},28101:(e,s,r)=>{Promise.resolve().then(r.bind(r,11921)),Promise.resolve().then(r.bind(r,46276)),Promise.resolve().then(r.bind(r,3069))},11921:(e,s,r)=>{"use strict";r.d(s,{default:()=>x});var t=r(45512),l=r(39400),a=r(54716),i=r(90455),d=r(91124),c=r(79334),o=r(58009),n=r(92273);let x=({product:e})=>{let s=(0,n.wA)(),[r,x]=(0,o.useState)(1),m=(0,c.useRouter)(),[h,p]=(0,o.useState)(e.price);return(0,o.useEffect)(()=>{},[x,p]),(0,t.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsx)("span",{className:"text-muted-foreground text-xs",children:"Quantity"}),(0,t.jsxs)("div",{className:"flex flex-row flex-shrink-0 max-w-28 border items-center border-gray-400 rounded",children:[(0,t.jsx)(l.$,{onClick:()=>{x(r-1),p((r-1)*e.price)},disabled:1===r,className:"h-full w-1/3 rounded-r-none rounded-l bg-transparent border-r hover:bg-secondary_color hover:text-white text-black",children:"-"}),(0,t.jsx)("div",{className:"w-1/3 h-full text-center flex items-center justify-center",children:(0,t.jsx)("span",{children:r})}),(0,t.jsx)(l.$,{onClick:()=>{x(r+1),p((r+1)*e.price)},disabled:r>=e.quantity,className:"h-full w-1/3 bg-transparent rounded-l-none border-l text-black hover:bg-secondary_color hover:text-white rounded-r",children:"+"})]})]}),(0,t.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,t.jsx)(l.$,{onClick:()=>{s((0,i.bE)({...e,quantity:r})),m.push("/cart")},className:"min-h-3 min-w-[7.5rem] rounded-md bg-transparent text-muted-foreground border border-secondary_color hover:bg-transparent hover:border-black hover:text-black",children:"Buy Now"}),(0,t.jsxs)(l.$,{onClick:()=>{s((0,i.bE)({...e,quantity:r})),(0,a.oR)({description:"Item added to the cart"})},className:"min-h-3 rounded-md bg-secondary_color text-white border border-secondary_color flex flex-row items-center",children:[(0,t.jsx)("span",{children:"Add to cart"}),(0,t.jsx)(d.A,{size:20})]})]})]})}},46276:(e,s,r)=>{"use strict";r.d(s,{default:()=>c});var t=r(45512),l=r(97093),a=r(44195),i=r(45103),d=r(58009);let c=({images:e})=>{let[s,r]=(0,d.useState)("/images/image_placeholder.jpg");return(0,d.useEffect)(()=>{e&&r(e[0].image_url)},[r]),(0,t.jsxs)("div",{className:"w-full h-full flex flex-col gap-0 md:max-h-[27rem] lg:max-h-[30rem]",children:[(0,t.jsx)("div",{className:"relative w-full md:min-h-[17rem] lg:min-h-[20rem] h-[15rem]",children:e?(0,t.jsx)(i.default,{layout:"fill",src:s,alt:"product-image",className:"lg:object-conain md:object-contain object-contain bg-white"}):(0,t.jsx)(l.E,{className:"w-full h-full bg-secondary_color/35"})}),(0,t.jsx)("div",{className:"w-full flex flow-row items-center lg:h-28 md:h-24 h-20 overflow-x-auto scrollbar-thin",children:e?e.map(e=>(0,t.jsx)("div",{onClick:()=>r(e.image_url),className:(0,a.cn)("relative h-full lg:w-[130px] md:w-[100px] w-[80px] flex-shrink-0 hover:cursor-pointer",{"border border-gray-400 rounded overflow-hidden":s===e.image_url}),children:(0,t.jsx)(i.default,{src:e.image_url,alt:`product-thumbnail-${e.id}`,layout:"fill",objectFit:"contain",className:"bg-white"})},e.id)):null})]})}},83238:(e,s,r)=>{"use strict";r.d(s,{A:()=>c});var t=r(76301);let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=(...e)=>e.filter((e,s,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===s).join(" ").trim();var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let d=(0,t.forwardRef)(({color:e="currentColor",size:s=24,strokeWidth:r=2,absoluteStrokeWidth:l,className:d="",children:c,iconNode:o,...n},x)=>(0,t.createElement)("svg",{ref:x,...i,width:s,height:s,stroke:e,strokeWidth:l?24*Number(r)/Number(s):r,className:a("lucide",d),...n},[...o.map(([e,s])=>(0,t.createElement)(e,s)),...Array.isArray(c)?c:[c]])),c=(e,s)=>{let r=(0,t.forwardRef)(({className:r,...i},c)=>(0,t.createElement)(d,{ref:c,iconNode:s,className:a(`lucide-${l(e)}`,r),...i}));return r.displayName=`${e}`,r}},83350:(e,s,r)=>{"use strict";r.d(s,{A:()=>t});let t=(0,r(83238).A)("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]])},66586:(e,s,r)=>{"use strict";r.a(e,async(e,t)=>{try{r.r(s),r.d(s,{default:()=>f});var l=r(62740),a=r(5615),i=r(73404),d=r(64427),c=r(40589),o=r(13923),n=r(76360),x=r(28406),m=r(84677),h=r(66180),p=r(83350),u=e([i]);i=(u.then?(await u)():u)[0];let f=async e=>{let{productId:s}=await e.params;try{let{data:e}=await i.A.query({query:a.Z5,variables:{id:s}}),r=e?.products?.[0],{data:t}=await i.A.query({query:a.ci,fetchPolicy:"no-cache",variables:{category_id:r.category.id||""}}),{orders:u,count:f}=await (0,d.WF)(i.A,{where:{order_items:{product_id:{_eq:s}}},offset:0,limit:10}),g=t.products.filter(e=>e.id!==s);if(!r||!u)return(0,l.jsx)(x.A,{});return(0,l.jsx)("section",{className:"w-full h-full flex flex-col items-center",children:(0,l.jsxs)("div",{className:"w-full max-w-[1300px] py-8 flex flex-col gap-4 items-center justify-center",children:[(0,l.jsxs)("div",{className:"w-full grid lg:gap-4 lg:grid-cols-5 md:grid-cols-5 grid-cols-1",children:[(0,l.jsx)("div",{className:"col-span-2 flex flex-col gap-0 w-full md:max-h-[27rem] lg:max-h-[30rem]",children:(0,l.jsx)(n.default,{images:r.images})}),(0,l.jsxs)("div",{className:"col-span-3 lg:p-4 md:p-3 py-3 px-0 lg:min-h-[35rem] flex flex-col gap-6",children:[(0,l.jsxs)("div",{className:"flex flex-row items-center gap-4",children:[(0,l.jsx)("h2",{className:"font-normal text-2xl",children:r.name}),(0,l.jsx)("div",{className:"rounded-md bg-secondary_color min-w-16 text-whit text-centere flex items-center justify-center",children:(0,l.jsx)("span",{className:"text-xs py-1 px-2 text-white",children:r.category.name})})]}),(0,l.jsxs)("div",{className:"min-h-6 flex lg:flex-row flex-col gap-6",children:[(0,l.jsxs)("div",{className:"flex flex-row gap-4 items-center",children:[(0,l.jsxs)("div",{className:"flex flex-row items-center gap-1 min-w-[7rem]",children:[(0,l.jsx)(o.A,{height:"20px",width:"20px",color:"#cfda31"}),(0,l.jsx)(o.A,{height:"20px",width:"20px",color:"#cfda31"}),(0,l.jsx)(o.A,{height:"20px",width:"20px",color:"#cfda31"}),(0,l.jsx)(o.A,{height:"20px",width:"20px",color:"#cfda31"}),(0,l.jsx)(o.A,{height:"20px",width:"20px",color:"gray"})]}),(0,l.jsx)("span",{className:"text-xs text-muted-foreground",children:"124 reviews"})]}),(0,l.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[(0,l.jsx)(p.A,{color:"#796f6f",size:20}),(0,l.jsxs)("span",{className:"text-xs text-muted-foreground",children:[f," orders"]})]})]}),(0,l.jsxs)("div",{className:"flex flex-row gap-4 items-center",children:[(0,l.jsxs)("h2",{className:"font-bold text-lg",children:["MMK ",r.price.toLocaleString()]}),(0,l.jsxs)("div",{className:"flex flex-row items-center gap-1",children:[(0,l.jsx)("span",{className:"text-lg text-muted-foreground",children:"/"}),(0,l.jsx)("span",{className:"text-xs text-muted-foreground",children:"package"})]})]}),(0,l.jsx)("div",{className:"text-muted-foreground text-sm",children:(0,l.jsx)("p",{children:r.description||"N/A"})}),(0,l.jsxs)("div",{className:"flex flex-col gap-3 mt-3",children:[(0,l.jsxs)("div",{className:"flex flex-row gap-4 items-start rounded-md px-4 py-1 bg-secondary_color/10",children:[(0,l.jsx)("div",{className:"w-20 max-w-20 h-6 text-sm flex items-center justify-start text-muted-foreground",children:"Dosage"}),(0,l.jsx)("div",{className:"w-full h-full",children:(0,l.jsx)("span",{className:"text-sm",children:r.dosage||"No Instruction"})})]}),(0,l.jsxs)("div",{className:"flex flex-row gap-4 items-start rounded-md px-4 py-1",children:[(0,l.jsx)("div",{className:"w-20 max-w-20 h-6 text-sm flex items-center justify-start text-muted-foreground",children:"Usage"}),(0,l.jsx)("div",{className:"w-full h-full",children:(0,l.jsx)("span",{className:"text-sm",children:r.usage||"No Instruction"})})]}),(0,l.jsxs)("div",{className:"flex flex-row gap-4 items-start rounded-md px-4 py-1 bg-secondary_color/10",children:[(0,l.jsx)("div",{className:"w-20 max-w-20 h-6 text-sm flex items-center justify-start text-muted-foreground",children:"Storage"}),(0,l.jsx)("div",{className:"w-full h-full",children:(0,l.jsx)("span",{className:"text-sm",children:r.storage||"No Instruction"})})]})]}),r.quantity<1?(0,l.jsx)("span",{className:"text-red-500 font-semibold",children:"Out of stock"}):(0,l.jsx)(c.default,{product:r})]})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-3 mt-6 w-full",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold",children:"Product Details"}),(0,l.jsx)("p",{className:"text-muted-foreground text-sm leading-8",children:r.description||"N/A"})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-4 mt-6 items-start w-full",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold",children:"Medication Sepcification"}),(0,l.jsxs)("div",{className:"flex flex-col gap-1 items-start text-left",children:[(0,l.jsx)("span",{className:"text-xs text-muted-foreground",children:"Brand"}),(0,l.jsx)("span",{className:"",children:"No Brand"})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1 items-start text-left",children:[(0,l.jsx)("span",{className:"text-xs text-muted-foreground",children:"Age group"}),(0,l.jsx)("span",{className:"",children:"No age group"})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-1 items-start text-left",children:[(0,l.jsx)("span",{className:"text-xs text-muted-foreground",children:"SKU"}),(0,l.jsx)("span",{className:"",children:"100011232_MM"})]}),(0,l.jsx)("div",{className:"w-full mt-6",children:(0,l.jsx)(h.A,{})}),(0,l.jsx)("div",{className:"w-full h-6"}),(0,l.jsx)(m.ProductReel,{products:g})]})]})})}catch(e){return console.error("Error fetching product data:",e),(0,l.jsx)("div",{children:"Error loading product details"})}};t()}catch(e){t(e)}})},86994:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>a});var t=r(62740),l=r(27837);function a({children:e}){return(0,t.jsx)(l.A,{children:e})}},91601:(e,s,r)=>{"use strict";r.d(s,{E:()=>a});var t=r(62740),l=r(43327);function a({className:e,...s}){return(0,t.jsx)("div",{className:(0,l.cn)("animate-pulse rounded-md bg-muted",e),...s})}},5615:(e,s,r)=>{"use strict";r.d(s,{Z5:()=>i,al:()=>a,ci:()=>d,oH:()=>l});var t=r(94499);let l=(0,t.J1)`
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
`,a=(0,t.J1)`
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
`,i=(0,t.J1)`
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
`,d=(0,t.J1)`
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
`;(0,t.J1)`
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
`,(0,t.J1)`
  query getProductById($id: uuid!) {
    products_by_pk(id: $id) {
      id
      quantity
    }
  }
`},73404:(e,s,r)=>{"use strict";r.a(e,async(e,t)=>{try{r.d(s,{A:()=>x});var l=r(5819),a=r(27466),i=r(89981),d=r(17133),c=r.n(d),o=r(43327);let e=async()=>{let e=await (0,o.v)();return e?.token||null},n=await e(),x=new l.R({ssrMode:!0,link:new a.P({uri:"https://api.natsay.com.mm/v1/graphql",fetch:c(),headers:{...n?{Authorization:`Bearer ${n}`}:{}}}),cache:new i.D});t()}catch(e){t(e)}},1)},64427:(e,s,r)=>{"use strict";r.d(s,{WF:()=>a});var t=r(94499);(0,t.J1)`
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
`,(0,t.J1)`
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
`;let l=(0,t.J1)`
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
`,a=async(e,s)=>{try{let{where:r,offset:t,limit:a}=s;if(!l)throw Error("GraphQL query GET_ORDERS is not defined.");let{data:i}=await e.query({query:l,fetchPolicy:"no-cache",variables:{where:r,offset:t,limit:a}});if(!i)throw Error("No data returned from GraphQL query.");return{orders:i.orders||[],count:i.orders_aggregate?.aggregate?.count||0}}catch(e){return console.error("Error fetching orders:",e.message||e),{orders:[],count:0}}}},43327:(e,s,r)=>{"use strict";r.d(s,{cn:()=>a,v:()=>i});var t=r(13673),l=r(47317);function a(...e){return(0,l.QP)((0,t.$)(e))}let i=async()=>(console.log("Skipping session fetch during build time."),null)},40589:(e,s,r)=>{"use strict";r.d(s,{default:()=>t});let t=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\NextJS\\\\medical website\\\\medical-clinic\\\\src\\\\modules\\\\common\\\\add-to-cart\\\\index.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\medical website\\medical-clinic\\src\\modules\\common\\add-to-cart\\index.tsx","default")},13923:(e,s,r)=>{"use strict";r.d(s,{A:()=>l});var t=r(62740);let l=({height:e,width:s,color:r})=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:e,viewBox:"0 0 24 24",fill:"none",children:(0,t.jsx)("path",{d:"M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z",fill:r})})},76360:(e,s,r)=>{"use strict";r.d(s,{default:()=>t});let t=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\NextJS\\\\medical website\\\\medical-clinic\\\\src\\\\modules\\\\common\\\\image-showcase\\\\index.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\medical website\\medical-clinic\\src\\modules\\common\\image-showcase\\index.tsx","default")},28406:(e,s,r)=>{"use strict";r.d(s,{A:()=>a});var t=r(62740),l=r(91601);let a=()=>(0,t.jsx)("section",{className:"w-full h-full flex flex-col items-center",children:(0,t.jsxs)("div",{className:"w-full max-w-[1300px] py-8 flex flex-col gap-4 items-center justify-center",children:[(0,t.jsxs)("div",{className:"w-full grid lg:gap-4 lg:grid-cols-5 md:grid-cols-5 grid-cols-1",children:[(0,t.jsx)("div",{className:"col-span-2 flex flex-col gap-0 w-full md:max-h-[27rem] lg:max-h-[30rem]",children:(0,t.jsx)(l.E,{className:"w-full h-[25rem] bg-secondary_color/35"})}),(0,t.jsxs)("div",{className:"col-span-3 lg:p-4 md:p-3 py-3 px-0 lg:min-h-[35rem] flex flex-col gap-6",children:[(0,t.jsx)(l.E,{className:"w-[120px] h-5 bg-secondary_color/35"}),(0,t.jsx)(l.E,{className:"w-[160px] h-5 bg-secondary_color/35"}),(0,t.jsx)(l.E,{className:"w-[120px] h-8 bg-secondary_color/35"}),(0,t.jsx)(l.E,{className:"w-full h-16 bg-secondary_color/35"}),(0,t.jsx)(l.E,{className:"w-full h-[15rem] bg-secondary_color/35"}),(0,t.jsx)(l.E,{className:"w-[130px] h-[5rem] bg-secondary_color/35"})]})]}),(0,t.jsxs)("div",{className:"w-full flex flex-col mt-5 gap-4",children:[(0,t.jsx)(l.E,{className:"w-[120px] h-[2rem] bg-secondary_color/35"}),(0,t.jsx)(l.E,{className:"w-full h-[5rem] bg-secondary_color/35"})]})]})})},84677:(e,s,r)=>{"use strict";r.d(s,{ProductReel:()=>t});let t=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call ProductReel() from the server but ProductReel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\medical website\\medical-clinic\\src\\modules\\common\\product-reel\\index.tsx","ProductReel")},66180:(e,s,r)=>{"use strict";r.d(s,{A:()=>a});var t=r(62740),l=r(13923);let a=()=>(0,t.jsxs)("div",{className:"w-full flex flex-col gap-3",children:[(0,t.jsx)("h2",{className:"font-semibold text-xl",children:"Rating"}),(0,t.jsxs)("div",{className:"flex lg:flex-row md:flex-row flex-col lg:gap-8 md:gap-8 gap-4",children:[(0,t.jsxs)("div",{className:"flex flex-col items-start justify-center min-h-24",children:[(0,t.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,t.jsx)("h2",{className:"text-2xl font-semibold",children:"4.0"}),(0,t.jsx)("span",{className:"text-xl text-muted-foreground",children:"/"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"5"})]}),(0,t.jsxs)("div",{className:"flex flex-row items-center gap-1 min-w-[7rem]",children:[(0,t.jsx)(l.A,{height:"20px",width:"20px",color:"#cfda31"}),(0,t.jsx)(l.A,{height:"20px",width:"20px",color:"#cfda31"}),(0,t.jsx)(l.A,{height:"20px",width:"20px",color:"#cfda31"}),(0,t.jsx)(l.A,{height:"20px",width:"20px",color:"#cfda31"}),(0,t.jsx)(l.A,{height:"20px",width:"20px",color:"gray"})]})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-0",children:[(0,t.jsxs)("div",{className:"gap-2 lg:min-h-8 flex flex-row items-center",children:[(0,t.jsxs)("div",{className:"flex flex-row items-center gap-1 min-w-[7rem]",children:[(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"#cfda31"}),(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"#cfda31"}),(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"#cfda31"}),(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"#cfda31"}),(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"#cfda31"})]}),(0,t.jsxs)("div",{className:"w-full flex flex-row items-center gap-2",children:[(0,t.jsx)("div",{className:"w-[12rem] h-4 bg-secondary_color/40",children:(0,t.jsx)("div",{className:"h-full w-full bg-[#cfda31]"})}),(0,t.jsx)("span",{children:"1"})]})]}),(0,t.jsxs)("div",{className:"gap-2 lg:min-h-8 flex flex-row items-center",children:[(0,t.jsxs)("div",{className:"flex flex-row items-center gap-1 min-w-[7rem]",children:[(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"#cfda31"}),(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"#cfda31"}),(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"#cfda31"}),(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"#cfda31"}),(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"gray"})]}),(0,t.jsxs)("div",{className:"w-full flex flex-row items-center gap-2",children:[(0,t.jsx)("div",{className:"w-[12rem] h-4 bg-secondary_color/40",children:(0,t.jsx)("div",{className:"h-full w-0 bg-[#cfda31]"})}),(0,t.jsx)("span",{children:"0"})]})]}),(0,t.jsxs)("div",{className:"gap-2 lg:min-h-8 flex flex-row items-center",children:[(0,t.jsxs)("div",{className:"flex flex-row items-center gap-1 min-w-[7rem]",children:[(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"#cfda31"}),(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"#cfda31"}),(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"#cfda31"}),(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"gray"}),(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"gray"})]}),(0,t.jsxs)("div",{className:"w-full flex flex-row items-center gap-2",children:[(0,t.jsx)("div",{className:"w-[12rem] h-4 bg-secondary_color/40",children:(0,t.jsx)("div",{className:"h-full w-0 bg-[#cfda31]"})}),(0,t.jsx)("span",{children:"0"})]})]}),(0,t.jsxs)("div",{className:"gap-2 lg:min-h-8 flex flex-row items-center",children:[(0,t.jsxs)("div",{className:"flex flex-row items-center gap-1 min-w-[7rem]",children:[(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"#cfda31"}),(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"#cfda31"}),(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"gray"}),(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"gray"}),(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"gray"})]}),(0,t.jsxs)("div",{className:"w-full flex flex-row items-center gap-2",children:[(0,t.jsx)("div",{className:"w-[12rem] h-4 bg-secondary_color/40",children:(0,t.jsx)("div",{className:"h-full w-0 bg-[#cfda31]"})}),(0,t.jsx)("span",{children:"0"})]})]}),(0,t.jsxs)("div",{className:"gap-2 lg:min-h-8 flex flex-row items-center",children:[(0,t.jsxs)("div",{className:"flex flex-row items-center gap-1 min-w-[7rem]",children:[(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"#cfda31"}),(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"gray"}),(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"gray"}),(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"gray"}),(0,t.jsx)(l.A,{height:"15px",width:"20px",color:"gray"})]}),(0,t.jsxs)("div",{className:"w-full flex flex-row items-center gap-2",children:[(0,t.jsx)("div",{className:"w-[12rem] h-4 bg-secondary_color/40",children:(0,t.jsx)("div",{className:"h-full w-0 bg-[#cfda31]"})}),(0,t.jsx)("span",{children:"1"})]})]})]})]})]})}};var s=require("../../../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[989,686,77,945,337,832,52,768,69],()=>r(5910));module.exports=t})();