(()=>{var e={};e.id=281,e.ids=[281],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},33873:e=>{"use strict";e.exports=require("path")},11997:e=>{"use strict";e.exports=require("punycode")},27910:e=>{"use strict";e.exports=require("stream")},79551:e=>{"use strict";e.exports=require("url")},74075:e=>{"use strict";e.exports=require("zlib")},85805:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var s=r(70260),a=r(28203),l=r(25155),i=r.n(l),o=r(67292),n={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);r.d(t,n);let d=["",{children:["product",{children:["detail",{children:["[productId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,66586)),"D:\\NextJS\\new medical web\\natsay_web_client\\src\\app\\product\\detail\\[productId]\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,86994)),"D:\\NextJS\\new medical web\\natsay_web_client\\src\\app\\product\\detail\\layout.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,71354)),"D:\\NextJS\\new medical web\\natsay_web_client\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"]}],c=["D:\\NextJS\\new medical web\\natsay_web_client\\src\\app\\product\\detail\\[productId]\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/product/detail/[productId]/page",pathname:"/product/detail/[productId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},87994:(e,t,r)=>{Promise.resolve().then(r.bind(r,40589)),Promise.resolve().then(r.bind(r,76360)),Promise.resolve().then(r.bind(r,78763)),Promise.resolve().then(r.bind(r,84677))},22274:(e,t,r)=>{Promise.resolve().then(r.bind(r,11921)),Promise.resolve().then(r.bind(r,46276)),Promise.resolve().then(r.bind(r,40895)),Promise.resolve().then(r.bind(r,3069))},49220:(e,t,r)=>{"use strict";r.d(t,{Lt:()=>E,Rx:()=>O,Zr:()=>F,EO:()=>S,$v:()=>z,ck:()=>J,wd:()=>L,r7:()=>M,tv:()=>D});var s=r(45512),a=r(58009),l=r(6004),i=r(29952),o=r(32958),n=r(31412),d=r(12705),c="AlertDialog",[u,m]=(0,l.A)(c,[o.Hs]),x=(0,o.Hs)(),p=e=>{let{__scopeAlertDialog:t,...r}=e,a=x(t);return(0,s.jsx)(o.bL,{...a,...r,modal:!0})};p.displayName=c;var h=a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...a}=e,l=x(r);return(0,s.jsx)(o.l9,{...l,...a,ref:t})});h.displayName="AlertDialogTrigger";var f=e=>{let{__scopeAlertDialog:t,...r}=e,a=x(t);return(0,s.jsx)(o.ZL,{...a,...r})};f.displayName="AlertDialogPortal";var g=a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...a}=e,l=x(r);return(0,s.jsx)(o.hJ,{...l,...a,ref:t})});g.displayName="AlertDialogOverlay";var w="AlertDialogContent",[v,y]=u(w),j=a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,children:l,...c}=e,u=x(r),m=a.useRef(null),p=(0,i.s)(t,m),h=a.useRef(null);return(0,s.jsx)(o.G$,{contentName:w,titleName:b,docsSlug:"alert-dialog",children:(0,s.jsx)(v,{scope:r,cancelRef:h,children:(0,s.jsxs)(o.UC,{role:"alertdialog",...u,...c,ref:p,onOpenAutoFocus:(0,n.m)(c.onOpenAutoFocus,e=>{e.preventDefault(),h.current?.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault(),children:[(0,s.jsx)(d.xV,{children:l}),(0,s.jsx)(A,{contentRef:m})]})})})});j.displayName=w;var b="AlertDialogTitle",N=a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...a}=e,l=x(r);return(0,s.jsx)(o.hE,{...l,...a,ref:t})});N.displayName=b;var _="AlertDialogDescription",C=a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...a}=e,l=x(r);return(0,s.jsx)(o.VY,{...l,...a,ref:t})});C.displayName=_;var k=a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...a}=e,l=x(r);return(0,s.jsx)(o.bm,{...l,...a,ref:t})});k.displayName="AlertDialogAction";var R="AlertDialogCancel",$=a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...a}=e,{cancelRef:l}=y(R,r),n=x(r),d=(0,i.s)(t,l);return(0,s.jsx)(o.bm,{...n,...a,ref:d})});$.displayName=R;var A=({contentRef:e})=>{let t=`\`${w}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${w}\` by passing a \`${_}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${w}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return a.useEffect(()=>{document.getElementById(e.current?.getAttribute("aria-describedby"))||console.warn(t)},[t,e]),null},q=r(44195),P=r(39400);let E=p,D=h,I=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(g,{className:(0,q.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:r}));I.displayName=g.displayName;let S=a.forwardRef(({className:e,...t},r)=>(0,s.jsxs)(f,{children:[(0,s.jsx)(I,{}),(0,s.jsx)(j,{ref:r,className:(0,q.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...t})]}));S.displayName=j.displayName;let L=({className:e,...t})=>(0,s.jsx)("div",{className:(0,q.cn)("flex flex-col space-y-2 text-center sm:text-left",e),...t});L.displayName="AlertDialogHeader";let J=({className:e,...t})=>(0,s.jsx)("div",{className:(0,q.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});J.displayName="AlertDialogFooter";let M=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(N,{ref:r,className:(0,q.cn)("text-lg font-semibold",e),...t}));M.displayName=N.displayName;let z=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(C,{ref:r,className:(0,q.cn)("text-sm text-muted-foreground",e),...t}));z.displayName=C.displayName;let O=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(k,{ref:r,className:(0,q.cn)((0,P.r)(),e),...t}));O.displayName=k.displayName;let F=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)($,{ref:r,className:(0,q.cn)((0,P.r)({variant:"outline"}),"mt-2 sm:mt-0",e),...t}));F.displayName=$.displayName},85314:(e,t,r)=>{"use strict";r.d(t,{Carousel:()=>m,CarouselContent:()=>x,CarouselItem:()=>p,CarouselNext:()=>f,CarouselPrevious:()=>h});var s=r(45512),a=r(58009),l=r(97203),i=r(35668),o=r(15907),n=r(44195),d=r(39400);let c=a.createContext(null);function u(){let e=a.useContext(c);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let m=a.forwardRef(({orientation:e="horizontal",opts:t,setApi:r,plugins:i,className:o,children:d,...u},m)=>{let[x,p]=(0,l.A)({...t,axis:"horizontal"===e?"x":"y"},i),[h,f]=a.useState(!1),[g,w]=a.useState(!1),v=a.useCallback(e=>{e&&(f(e.canScrollPrev()),w(e.canScrollNext()))},[]),y=a.useCallback(()=>{p?.scrollPrev()},[p]),j=a.useCallback(()=>{p?.scrollNext()},[p]),b=a.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),y()):"ArrowRight"===e.key&&(e.preventDefault(),j())},[y,j]);return a.useEffect(()=>{p&&r&&r(p)},[p,r]),a.useEffect(()=>{if(p)return v(p),p.on("reInit",v),p.on("select",v),()=>{p?.off("select",v)}},[p,v]),(0,s.jsx)(c.Provider,{value:{carouselRef:x,api:p,opts:t,orientation:e||(t?.axis==="y"?"vertical":"horizontal"),scrollPrev:y,scrollNext:j,canScrollPrev:h,canScrollNext:g},children:(0,s.jsx)("div",{ref:m,onKeyDownCapture:b,className:(0,n.cn)("relative",o),role:"region","aria-roledescription":"carousel",...u,children:d})})});m.displayName="Carousel";let x=a.forwardRef(({className:e,...t},r)=>{let{carouselRef:a,orientation:l}=u();return(0,s.jsx)("div",{ref:a,className:"overflow-hidden",children:(0,s.jsx)("div",{ref:r,className:(0,n.cn)("flex","horizontal"===l?"":"-mt-4 flex-col",e),...t})})});x.displayName="CarouselContent";let p=a.forwardRef(({className:e,...t},r)=>{let{orientation:a}=u();return(0,s.jsx)("div",{ref:r,role:"group","aria-roledescription":"slide",className:(0,n.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===a?"":"pt-4",e),...t})});p.displayName="CarouselItem";let h=a.forwardRef(({className:e,variant:t="outline",size:r="icon",...a},l)=>{let{orientation:o,scrollPrev:c,canScrollPrev:m}=u();return(0,s.jsxs)(d.$,{ref:l,variant:t,size:r,className:(0,n.cn)(" h-8 w-8 rounded-md","horizontal"===o?"":"-top-12 left-1/2 -translate-x-1/2 rotate-90",{"bg-secondary_color text-white":m,className:e}),disabled:!m,onClick:c,...a,children:[(0,s.jsx)(i.A,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});h.displayName="CarouselPrevious";let f=a.forwardRef(({className:e,variant:t="outline",size:r="icon",...a},l)=>{let{orientation:i,scrollNext:c,canScrollNext:m}=u();return(0,s.jsxs)(d.$,{ref:l,variant:t,size:r,className:(0,n.cn)("h-8 w-8 rounded-md","horizontal"===i?"":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",{"bg-secondary_color text-white":m,className:e}),disabled:!m,onClick:c,...a,children:[(0,s.jsx)(o.A,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Next slide"})]})});f.displayName="CarouselNext"},97093:(e,t,r)=>{"use strict";r.d(t,{E:()=>l});var s=r(45512),a=r(44195);function l({className:e,...t}){return(0,s.jsx)("div",{className:(0,a.cn)("animate-pulse rounded-md bg-muted",e),...t})}},98738:(e,t,r)=>{"use strict";r.d(t,{qJ:()=>l});var s=r(37713);(0,s.J1)`
  query GetProductRatings($productId: uuid!) {
    product_ratings(where: { product_id: { _eq: $productId } }) {
      id
      rating
      review
      created_at
      user_id
    }
    products_by_pk(id: $productId) {
      average_rating
      review_count
    }
  }
`;let a=(0,s.J1)`
  mutation InsertProductRating($input: product_ratings_insert_input!) {
    insert_product_ratings_one(object: $input) {
      id
      rating
      review
      created_at
    }
  }
`,l=async(e,t)=>{try{let{data:r}=await e.mutate({mutation:a,variables:{input:t}});if(!r?.insert_product_ratings_one)throw Error("Failed to insert rating");return r.insert_product_ratings_one}catch(e){return console.error("Error inserting product rating:",e.message||e),null}}},11921:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var s=r(45512),a=r(39400),l=r(54716),i=r(90455),o=r(91124),n=r(79334),d=r(58009),c=r(92273);let u=({product:e})=>{let t=(0,c.wA)(),[r,u]=(0,d.useState)(1),m=(0,n.useRouter)(),[x,p]=(0,d.useState)(e.price);return(0,d.useEffect)(()=>{},[u,p]),(0,s.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("span",{className:"text-muted-foreground text-xs",children:"Quantity"}),(0,s.jsxs)("div",{className:"flex flex-row flex-shrink-0 max-w-28 border items-center border-gray-400 rounded",children:[(0,s.jsx)(a.$,{onClick:()=>{u(r-1),p((r-1)*e.price)},disabled:1===r,className:"h-full w-1/3 rounded-r-none rounded-l bg-transparent border-r hover:bg-secondary_color hover:text-white text-black",children:"-"}),(0,s.jsx)("div",{className:"w-1/3 h-full text-center flex items-center justify-center",children:(0,s.jsx)("span",{children:r})}),(0,s.jsx)(a.$,{onClick:()=>{u(r+1),p((r+1)*e.price)},disabled:r>=e.quantity,className:"h-full w-1/3 bg-transparent rounded-l-none border-l text-black hover:bg-secondary_color hover:text-white rounded-r",children:"+"})]})]}),(0,s.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,s.jsx)(a.$,{onClick:()=>{t((0,i.bE)({...e,quantity:r})),m.push("/cart")},className:"min-h-3 min-w-[7.5rem] rounded-md bg-transparent text-muted-foreground border border-secondary_color hover:bg-transparent hover:border-black hover:text-black",children:"Buy Now"}),(0,s.jsxs)(a.$,{onClick:()=>{t((0,i.bE)({...e,quantity:r})),(0,l.oR)({description:"Item added to the cart"})},className:"min-h-3 rounded-md bg-secondary_color text-white border border-secondary_color flex flex-row items-center",children:[(0,s.jsx)("span",{children:"Add to cart"}),(0,s.jsx)(o.A,{size:20})]})]})]})}},55407:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var s=r(45512);let a=({height:e,width:t,color:r})=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:e,viewBox:"0 0 24 24",fill:"none",children:(0,s.jsx)("path",{d:"M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z",fill:r})})},46276:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var s=r(45512),a=r(97093),l=r(44195),i=r(45103),o=r(58009);let n=({images:e})=>{let[t,r]=(0,o.useState)("/images/image_placeholder.jpg");return(0,o.useEffect)(()=>{e&&r(e[0].image_url)},[r]),(0,s.jsxs)("div",{className:"w-full h-full flex flex-col gap-0 md:max-h-[27rem] lg:max-h-[30rem]",children:[(0,s.jsx)("div",{className:"relative w-full md:min-h-[17rem] lg:min-h-[20rem] h-[15rem]",children:e?(0,s.jsx)(i.default,{layout:"fill",src:t,alt:"product-image",className:"lg:object-conain md:object-contain object-contain bg-white"}):(0,s.jsx)(a.E,{className:"w-full h-full bg-secondary_color/35"})}),(0,s.jsx)("div",{className:"w-full flex flow-row items-center lg:h-28 md:h-24 h-20 overflow-x-auto scrollbar-thin",children:e?e.map(e=>(0,s.jsx)("div",{onClick:()=>r(e.image_url),className:(0,l.cn)("relative h-full lg:w-[130px] md:w-[100px] w-[80px] flex-shrink-0 hover:cursor-pointer",{"border border-gray-400 rounded overflow-hidden":t===e.image_url}),children:(0,s.jsx)(i.default,{src:e.image_url,alt:`product-thumbnail-${e.id}`,layout:"fill",objectFit:"contain",className:"bg-white"})},e.id)):null})]})}},40895:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{RatingDialog:()=>x});var a=r(45512),l=r(58009),i=r(49220),o=r(39400),n=r(98738),d=r(54716),c=r(44195),u=r(23792),m=e([u]);u=(m.then?(await m)():m)[0];let x=({productId:e,productName:t,userId:r})=>{let[s,m]=(0,l.useState)(0),[x,p]=(0,l.useState)(""),[h,f]=(0,l.useState)(!1),[g,w]=(0,l.useState)(null),[v,y]=(0,l.useState)(!0);console.log("RatingDialog rendered"),(0,l.useEffect)(()=>{(async()=>{try{let e=await (0,c.v)();w(e)}catch(e){console.error("Error fetching session data:",e),w(null)}finally{y(!1)}})()},[]);let j=r||g?.userId,b=async()=>{if(!j){(0,d.oR)({description:"Please log in to submit a rating.",variant:"destructive"});return}f(!0);try{await (0,n.qJ)(u.A,{product_id:e,user_id:j,rating:s,review:x||void 0})?((0,d.oR)({description:"Rating submitted successfully!"}),m(0),p("")):(0,d.oR)({description:"Failed to submit rating"})}catch(e){console.error("Error submitting rating:",e),(0,d.oR)({description:"An error occurred while submitting your rating."})}finally{f(!1)}};return v?(0,a.jsx)("p",{}):(0,a.jsxs)(i.Lt,{children:[(0,a.jsx)(i.tv,{asChild:!0,children:g?.userId?(0,a.jsx)(o.$,{variant:"outline",className:"border-none bg-transparent",children:"Rate Product"}):(0,a.jsx)("p",{className:"text-sm text-muted-foreground"})}),j&&(0,a.jsxs)(i.EO,{children:[(0,a.jsxs)(i.wd,{children:[(0,a.jsxs)(i.r7,{children:["Rate ",t]}),(0,a.jsx)(i.$v,{children:"Share your feedback by rating this product and leaving a review."})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-4 py-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"text-sm font-medium",children:"Rating (1-5):"}),(0,a.jsx)("input",{type:"number",min:"1",max:"5",value:s,onChange:e=>m(Number(e.target.value)),className:"w-full mt-1 p-2 border rounded-md",disabled:h})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"text-sm font-medium",children:"Review (optional):"}),(0,a.jsx)("textarea",{value:x,onChange:e=>p(e.target.value),className:"w-full mt-1 p-2 border rounded-md",rows:3,placeholder:"Write your review here...",disabled:h})]})]}),(0,a.jsxs)(i.ck,{children:[(0,a.jsx)(i.Zr,{disabled:h,children:"Cancel"}),(0,a.jsx)(i.Rx,{onClick:b,disabled:h||s<1||s>5||""===x,children:h?"Submitting...":"Submit Rating"})]})]})]})};s()}catch(e){s(e)}})},3069:(e,t,r)=>{"use strict";r.d(t,{ProductReel:()=>g});var s=r(45512),a=r(58009),l=r(85314),i=r(44195),o=r(97093),n=r(39400),d=r(45103),c=r(55407),u=r(92273),m=r(90455),x=r(54716),p=r(79334),h=r(82281);let f=e=>{let[t,r]=(0,a.useState)(null),[l,i]=(0,a.useState)(1),[o,f]=(0,a.useState)(e.product.price),g=(0,u.wA)(),w=(0,p.useRouter)();(0,a.useEffect)(()=>{e&&e.product.images&&r(e.product.images)},[r]),(0,a.useEffect)(()=>{},[i,f]);let v=Math.round(e.product.average_rating||0),y=Math.round(e.product.review_count||0);return(0,s.jsx)("div",{className:(0,h.A)("w-full p-4 border bg-white rounded-md group h-full lg:h-[21.5rem] scale-95 hover:h-full hover:shadow-lg transition-all overflow-hidden",{"brightness-90 hover:cursor-not-allowed":e.product.quantity<1}),children:(0,s.jsxs)("div",{className:"w-full h-full flex flex-col gap-3 group",children:[(0,s.jsx)("div",{onClick:()=>w.push(`/product/detail/${e.product.id}`),className:"relative w-full min-h-[10rem] hover:cursor-pointer",children:(0,s.jsx)(d.default,{layout:"fill",alt:"product.img",src:t?.[0].image_url||"/image_placeholder.jpg",className:"object-contain"})}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("h2",{className:"font-bold",children:e.product.name}),(0,s.jsxs)("div",{className:"flex lg:flex-row md:flex-row flex-col gap-3",children:[(0,s.jsx)("div",{className:"flex flex-row items-center gap-1 min-w-[7rem]",children:[,,,,,].fill(0).map((e,t)=>(0,s.jsx)(c.A,{height:"20",width:"20",color:t<v?"#cfda31":"gray"},t))}),(0,s.jsxs)("span",{className:"text-sm text-muted-foreground",children:[y," reviews"]})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,s.jsxs)("h1",{className:"text-secondary_color",children:["MMK ",e.product.price.toLocaleString()]}),(0,s.jsx)("div",{className:"w-full h-1 border border-gray-300",children:(0,s.jsx)("div",{className:"h-full w-2/3 bg-yellow-300"})}),(0,s.jsx)("span",{className:"text-sm text-muted-foreground",children:e.product.quantity<1?(0,s.jsx)("span",{className:"text-red-500 font-semibold",children:"Out of stock"}):`${e.product.quantity} left`})]}),(0,s.jsxs)("div",{className:"lg:flex lg:flex-row hidden h-5 gap-3 items-center mt-5",children:[(0,s.jsxs)("div",{className:"flex flex-row border items-center border-gray-400 rounded",children:[(0,s.jsx)(n.$,{onClick:()=>{i(l-1),f((l-1)*e.product.price)},disabled:1===l,className:"w-7 h-full rounded-none bg-transparent border-r hover:bg-secondary_color hover:text-white text-black",children:"-"}),(0,s.jsx)("div",{className:"min-w-9 h-full text-center flex items-center justify-center",children:(0,s.jsx)("span",{children:l})}),(0,s.jsx)(n.$,{onClick:()=>{i(l+1),f((l+1)*e.product.price)},disabled:l>=e.product.quantity,className:"w-7 h-full bg-transparent rounded-none border-l text-black hover:bg-secondary_color hover:text-white",children:"+"})]}),(0,s.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,s.jsx)("span",{className:"font-semibold text-gray-600 text-sm",children:"Total - "}),(0,s.jsxs)("span",{className:"text-sm text-secondary_color",children:[" ",o," MMK"]})]})]}),(0,s.jsx)(n.$,{disabled:e.product.quantity<1,onClick:()=>{g((0,m.bE)({...e.product,quantity:l})),(0,x.oR)({description:"Item added to the cart"})},className:(0,h.A)("w-full lg:block hidden transition-all min-h-8 rounded-md mt-4 bg-secondary_color text-white",{"hover:cursor-not-allowed":e.product.quantity<1}),children:"Add to cart"})]})})};function g({products:e}){let[t,r]=a.useState(null);return a.useEffect(()=>{e&&r(e)},[r,e]),console.log("related products:",t),(0,s.jsxs)(l.Carousel,{className:"w-full h-full flex flex-col gap-4",children:[(0,s.jsxs)("div",{className:"w-full min-h-16 flex flex-row items-center justify-between",children:[(0,s.jsx)("div",{className:"flex flex-row gap-4 items-center",children:(0,s.jsx)("h1",{className:"font-semibold text-xl",children:"Related products"})}),(0,s.jsxs)("div",{className:"flex flex-row gap-2 h-full items-center",children:[(0,s.jsx)("div",{className:"",children:(0,s.jsx)(l.CarouselPrevious,{className:"bg-gray-300 rounded-md hover:bg-gray-400 transition"})}),(0,s.jsx)("div",{className:"",children:(0,s.jsx)(l.CarouselNext,{className:(0,i.cn)(" bg-gray-300 rounded-md hover:bg-gray-400 transition",{})})})]})]}),t?(0,s.jsx)(l.CarouselContent,{className:"w-full h-full",children:t.map((e,t)=>(0,s.jsx)(l.CarouselItem,{className:"md:basis-1/3 lg:basis-[20%] basis-1/2",children:(0,s.jsx)("div",{className:"",children:(0,s.jsx)(f,{product:e})})},t))}):(0,s.jsx)(l.CarouselContent,{children:Array.from({length:5}).map((e,t)=>(0,s.jsx)(l.CarouselItem,{className:"md:basis-1/3 lg:basis-[20%]",children:(0,s.jsx)("div",{className:"p-2",children:(0,s.jsx)(o.E,{className:"bg-secondary_color/35 h-[21.8rem] w-full"})})},t))})]})}},83238:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var s=r(76301);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,s.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:o="",children:n,iconNode:d,...c},u)=>(0,s.createElement)("svg",{ref:u,...i,width:t,height:t,stroke:e,strokeWidth:a?24*Number(r)/Number(t):r,className:l("lucide",o),...c},[...d.map(([e,t])=>(0,s.createElement)(e,t)),...Array.isArray(n)?n:[n]])),n=(e,t)=>{let r=(0,s.forwardRef)(({className:r,...i},n)=>(0,s.createElement)(o,{ref:n,iconNode:t,className:l(`lucide-${a(e)}`,r),...i}));return r.displayName=`${e}`,r}},83350:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(83238).A)("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]])},66586:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>w});var a=r(62740),l=r(5615),i=r(73404),o=r(64427),n=r(43327),d=r(40589),c=r(13923),u=r(76360),m=r(11648),x=r(78763),p=r(84677),h=r(66180),f=r(83350),g=e([i,h]);[i,h]=g.then?(await g)():g;let w=async e=>{let{productId:t}=await e.params;try{let{data:e}=await i.A.query({query:l.Z5,variables:{id:t}}),r=e?.products?.[0],s=Math.round(r.average_rating||0),g=Math.round(r.review_count||0);if(!r)return(0,a.jsx)(m.A,{});let[{data:w},{orders:v,count:y}]=await Promise.all([i.A.query({query:l.ci,fetchPolicy:"no-cache",variables:{category_id:r.category.id||""}}),(0,o.WF)(i.A,{where:{order_items:{product_id:{_eq:t}}},offset:0,limit:10}),(0,n.v)()]);if(!v)return(0,a.jsx)(m.A,{});let j=w.products.filter(e=>e.id!==t);return(0,a.jsx)("section",{className:"w-full h-full flex flex-col items-center",children:(0,a.jsxs)("div",{className:"w-full max-w-[1300px] py-8 flex flex-col gap-4 items-center justify-center",children:[(0,a.jsxs)("div",{className:"w-full grid lg:gap-4 lg:grid-cols-5 md:grid-cols-5 grid-cols-1",children:[(0,a.jsx)("div",{className:"col-span-2 flex flex-col gap-0 w-full md:max-h-[27rem] lg:max-h-[30rem]",children:(0,a.jsx)(u.default,{images:r.images})}),(0,a.jsxs)("div",{className:"col-span-3 lg:p-4 md:p-3 py-3 px-0 lg:min-h-[35rem] flex flex-col gap-6",children:[(0,a.jsxs)("div",{className:"flex flex-row items-center gap-4",children:[(0,a.jsx)("h2",{className:"font-normal text-2xl",children:r.name}),(0,a.jsx)("div",{className:"rounded-md bg-secondary_color min-w-16 text-whit text-centere flex items-center justify-center",children:(0,a.jsx)("span",{className:"text-xs py-1 px-2 text-white",children:r.category.name})})]}),(0,a.jsxs)("div",{className:"min-h-6 flex lg:flex-row flex-col gap-6",children:[(0,a.jsxs)("div",{className:"flex flex-row gap-4 items-center",children:[(0,a.jsx)("div",{className:"flex flex-row items-center gap-1 min-w-[7rem]",children:[,,,,,].fill(0).map((e,t)=>(0,a.jsx)(c.A,{height:"20",width:"20",color:t<s?"#cfda31":"gray"},t))}),(0,a.jsxs)("span",{className:"text-xs text-muted-foreground",children:[g," reviews"]})]}),(0,a.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[(0,a.jsx)(f.A,{color:"#796f6f",size:20}),(0,a.jsxs)("span",{className:"text-xs text-muted-foreground",children:[y," orders"]})]})]}),(0,a.jsxs)("div",{className:"flex flex-row gap-4 items-center",children:[(0,a.jsxs)("h2",{className:"font-bold text-lg",children:["MMK ",r.price.toLocaleString()]}),(0,a.jsxs)("div",{className:"flex flex-row items-center gap-1",children:[(0,a.jsx)("span",{className:"text-lg text-muted-foreground",children:"/"}),(0,a.jsx)("span",{className:"text-xs text-muted-foreground",children:"package"})]})]}),(0,a.jsx)("div",{className:"text-muted-foreground text-sm",children:(0,a.jsx)("p",{children:r.description||"N/A"})}),(0,a.jsxs)("div",{className:"flex flex-col gap-3 mt-3",children:[(0,a.jsxs)("div",{className:"flex flex-row gap-4 items-start rounded-md px-4 py-1 bg-secondary_color/10",children:[(0,a.jsx)("div",{className:"w-20 max-w-20 h-6 text-sm flex items-center justify-start text-muted-foreground",children:"Dosage"}),(0,a.jsx)("div",{className:"w-full h-full",children:(0,a.jsx)("span",{className:"text-sm",children:r.dosage||"No Instruction"})})]}),(0,a.jsxs)("div",{className:"flex flex-row gap-4 items-start rounded-md px-4 py-1",children:[(0,a.jsx)("div",{className:"w-20 max-w-20 h-6 text-sm flex items-center justify-start text-muted-foreground",children:"Usage"}),(0,a.jsx)("div",{className:"w-full h-full",children:(0,a.jsx)("span",{className:"text-sm",children:r.usage||"No Instruction"})})]}),(0,a.jsxs)("div",{className:"flex flex-row gap-4 items-start rounded-md px-4 py-1 bg-secondary_color/10",children:[(0,a.jsx)("div",{className:"w-20 max-w-20 h-6 text-sm flex items-center justify-start text-muted-foreground",children:"Storage"}),(0,a.jsx)("div",{className:"w-full h-full",children:(0,a.jsx)("span",{className:"text-sm",children:r.storage||"No Instruction"})})]})]}),r.quantity<1?(0,a.jsx)("span",{className:"text-red-500 font-semibold",children:"Out of stock"}):(0,a.jsx)(d.default,{product:r})]})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-3 mt-6 w-full",children:[(0,a.jsx)("h2",{className:"text-xl font-semibold",children:"Product Details"}),(0,a.jsx)("p",{className:"text-muted-foreground text-sm leading-8",children:r.description||"N/A"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-4 mt-6 items-start w-full",children:[(0,a.jsx)("h2",{className:"text-xl font-semibold",children:"Medication Sepcification"}),(0,a.jsxs)("div",{className:"flex flex-col gap-1 items-start text-left",children:[(0,a.jsx)("span",{className:"text-xs text-muted-foreground",children:"Brand"}),(0,a.jsx)("span",{className:"",children:"No Brand"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-1 items-start text-left",children:[(0,a.jsx)("span",{className:"text-xs text-muted-foreground",children:"Age group"}),(0,a.jsx)("span",{className:"",children:"No age group"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-1 items-start text-left",children:[(0,a.jsx)("span",{className:"text-xs text-muted-foreground",children:"SKU"}),(0,a.jsx)("span",{className:"",children:"100011232_MM"})]}),(0,a.jsxs)("div",{className:"w-full mt-6",children:[(0,a.jsx)(h.A,{productId:t}),(0,a.jsx)("div",{className:"w-full mt-6",children:(0,a.jsx)(x.RatingDialog,{productId:t,productName:r.name})})]}),(0,a.jsx)("div",{className:"w-full h-6"}),(0,a.jsx)(p.ProductReel,{products:j})]})]})})}catch(e){return console.error("Error fetching product data:",e),(0,a.jsx)("div",{children:"Error loading product details"})}};s()}catch(e){s(e)}})},86994:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(62740),a=r(27837);function l({children:e}){return(0,s.jsx)(a.A,{children:e})}},5615:(e,t,r)=>{"use strict";r.d(t,{Z5:()=>i,al:()=>l,ci:()=>o,kb:()=>n,oH:()=>a});var s=r(94499);let a=(0,s.J1)`
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
`,l=(0,s.J1)`
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
`,i=(0,s.J1)`
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
`,o=(0,s.J1)`
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
`,n=(0,s.J1)`
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
`;(0,s.J1)`
  query getProductById($id: uuid!) {
    products_by_pk(id: $id) {
      id
      quantity
    }
  }
`},73404:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{A:()=>u});var a=r(5819),l=r(27466),i=r(89981),o=r(17133),n=r.n(o),d=r(43327);let e=async()=>{let e=await (0,d.v)();return e?.token||null},c=await e(),u=new a.R({ssrMode:!0,link:new l.P({uri:"https://api.natsay.com.mm/v1/graphql",fetch:n(),headers:{...c?{Authorization:`Bearer ${c}`}:{}}}),cache:new i.D});s()}catch(e){s(e)}},1)},64427:(e,t,r)=>{"use strict";r.d(t,{WF:()=>l});var s=r(94499);(0,s.J1)`
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
`,(0,s.J1)`
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
`;let a=(0,s.J1)`
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
`,l=async(e,t)=>{try{let{where:r,offset:s,limit:l}=t;if(!a)throw Error("GraphQL query GET_ORDERS is not defined.");let{data:i}=await e.query({query:a,fetchPolicy:"no-cache",variables:{where:r,offset:s,limit:l}});if(!i)throw Error("No data returned from GraphQL query.");return{orders:i.orders||[],count:i.orders_aggregate?.aggregate?.count||0}}catch(e){return console.error("Error fetching orders:",e.message||e),{orders:[],count:0}}}},19356:(e,t,r)=>{"use strict";r.d(t,{mh:()=>l});var s=r(94499);let a=(0,s.J1)`
  query GetProductRatings($productId: uuid!) {
    product_ratings(where: { product_id: { _eq: $productId } }) {
      id
      rating
      review
      created_at
      user_id
    }
    products_by_pk(id: $productId) {
      average_rating
      review_count
    }
  }
`;(0,s.J1)`
  mutation InsertProductRating($input: product_ratings_insert_input!) {
    insert_product_ratings_one(object: $input) {
      id
      rating
      review
      created_at
    }
  }
`;let l=async(e,t)=>{try{let{data:r}=await e.query({query:a,variables:{productId:t},fetchPolicy:"no-cache"});if(!r?.product_ratings)return{averageRating:0,reviewCount:0,distribution:{5:0,4:0,3:0,2:0,1:0}};let s=r.product_ratings,l=s.length;if(0===l)return{averageRating:0,reviewCount:0,distribution:{5:0,4:0,3:0,2:0,1:0}};let i=s.reduce((e,t)=>e+t.rating,0),o=Number((i/l).toFixed(1)),n=s.reduce((e,t)=>(e[t.rating]=(e[t.rating]||0)+1,e),{5:0,4:0,3:0,2:0,1:0});return{averageRating:o,reviewCount:l,distribution:n}}catch(e){return console.error("Error fetching rating summary:",e),{averageRating:0,reviewCount:0,distribution:{5:0,4:0,3:0,2:0,1:0}}}}},43327:(e,t,r)=>{"use strict";r.d(t,{cn:()=>l,v:()=>i});var s=r(13673),a=r(47317);function l(...e){return(0,a.QP)((0,s.$)(e))}let i=async()=>(console.log("Skipping session fetch during build time."),null)},40589:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\NextJS\\\\new medical web\\\\natsay_web_client\\\\src\\\\modules\\\\common\\\\add-to-cart\\\\index.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\new medical web\\natsay_web_client\\src\\modules\\common\\add-to-cart\\index.tsx","default")},13923:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var s=r(62740);let a=({height:e,width:t,color:r})=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:e,viewBox:"0 0 24 24",fill:"none",children:(0,s.jsx)("path",{d:"M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z",fill:r})})},76360:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\NextJS\\\\new medical web\\\\natsay_web_client\\\\src\\\\modules\\\\common\\\\image-showcase\\\\index.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\new medical web\\natsay_web_client\\src\\modules\\common\\image-showcase\\index.tsx","default")},11648:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var s=r(62740),a=r(43327);function l({className:e,...t}){return(0,s.jsx)("div",{className:(0,a.cn)("animate-pulse rounded-md bg-muted",e),...t})}let i=()=>(0,s.jsx)("section",{className:"w-full h-full flex flex-col items-center",children:(0,s.jsxs)("div",{className:"w-full max-w-[1300px] py-8 flex flex-col gap-4 items-center justify-center",children:[(0,s.jsxs)("div",{className:"w-full grid lg:gap-4 lg:grid-cols-5 md:grid-cols-5 grid-cols-1",children:[(0,s.jsx)("div",{className:"col-span-2 flex flex-col gap-0 w-full md:max-h-[27rem] lg:max-h-[30rem]",children:(0,s.jsx)(l,{className:"w-full h-[25rem] bg-secondary_color/35"})}),(0,s.jsxs)("div",{className:"col-span-3 lg:p-4 md:p-3 py-3 px-0 lg:min-h-[35rem] flex flex-col gap-6",children:[(0,s.jsx)(l,{className:"w-[120px] h-5 bg-secondary_color/35"}),(0,s.jsx)(l,{className:"w-[160px] h-5 bg-secondary_color/35"}),(0,s.jsx)(l,{className:"w-[120px] h-8 bg-secondary_color/35"}),(0,s.jsx)(l,{className:"w-full h-16 bg-secondary_color/35"}),(0,s.jsx)(l,{className:"w-full h-[15rem] bg-secondary_color/35"}),(0,s.jsx)(l,{className:"w-[130px] h-[5rem] bg-secondary_color/35"})]})]}),(0,s.jsxs)("div",{className:"w-full flex flex-col mt-5 gap-4",children:[(0,s.jsx)(l,{className:"w-[120px] h-[2rem] bg-secondary_color/35"}),(0,s.jsx)(l,{className:"w-full h-[5rem] bg-secondary_color/35"})]})]})})},78763:(e,t,r)=>{"use strict";r.d(t,{RatingDialog:()=>s});let s=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call RatingDialog() from the server but RatingDialog is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\new medical web\\natsay_web_client\\src\\modules\\common\\product-rating-popup\\index.tsx","RatingDialog")},84677:(e,t,r)=>{"use strict";r.d(t,{ProductReel:()=>s});let s=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call ProductReel() from the server but ProductReel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\new medical web\\natsay_web_client\\src\\modules\\common\\product-reel\\index.tsx","ProductReel")},66180:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{A:()=>d});var a=r(62740),l=r(73404),i=r(13923),o=r(19356),n=e([l]);l=(n.then?(await n)():n)[0];let d=async({productId:e})=>{let{averageRating:t,reviewCount:r,distribution:s}=await (0,o.mh)(l.A,e),n=e=>r>0?e/r*192:0,d=Math.round(t);return(0,a.jsxs)("div",{className:"w-full flex flex-col gap-3",children:[(0,a.jsx)("h2",{className:"font-semibold text-xl",children:"Rating"}),(0,a.jsxs)("div",{className:"flex lg:flex-row md:flex-row flex-col lg:gap-8 md:gap-8 gap-4",children:[(0,a.jsxs)("div",{className:"flex flex-col items-start justify-center min-h-24",children:[(0,a.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold",children:t.toFixed(1)}),(0,a.jsx)("span",{className:"text-xl text-muted-foreground",children:"/"}),(0,a.jsx)("span",{className:"text-muted-foreground",children:"5"})]}),(0,a.jsx)("div",{className:"flex flex-row items-center gap-1 min-w-[7rem]",children:[,,,,,].fill(0).map((e,t)=>(0,a.jsx)(i.A,{height:"20",width:"20",color:t<d?"#cfda31":"gray"},t))})]}),(0,a.jsx)("div",{className:"flex flex-col gap-0",children:[5,4,3,2,1].map(e=>(0,a.jsxs)("div",{className:"gap-2 lg:min-h-8 flex flex-row items-center",children:[(0,a.jsx)("div",{className:"flex flex-row items-center gap-1 min-w-[7rem]",children:[,,,,,].fill(0).map((t,r)=>(0,a.jsx)(i.A,{height:"15",width:"20",color:r<e?"#cfda31":"gray"},r))}),(0,a.jsxs)("div",{className:"w-full flex flex-row items-center gap-2",children:[(0,a.jsx)("div",{className:"w-[12rem] h-4 bg-secondary_color/40",children:(0,a.jsx)("div",{className:"h-full bg-[#cfda31]",style:{width:`${n(s[e])}px`}})}),(0,a.jsx)("span",{children:s[e]})]})]},e))})]})]})};s()}catch(e){s(e)}})}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[681,692,543,337,832,138,341],()=>r(85805));module.exports=s})();