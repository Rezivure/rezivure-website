(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[457],{2736:function(r,l,n){Promise.resolve().then(n.bind(n,1182))},1182:function(r,l,n){"use strict";let d,c;n.r(l),n.d(l,{default:function(){return RootLayout}});var m,u=n(7437),h=n(5697),x=n.n(h),g=n(9844),components_Footer=()=>(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("footer",{className:"border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection",children:(0,u.jsxs)("div",{className:"mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0",children:[(0,u.jsx)("div",{className:"py-20 lg:py-25",children:(0,u.jsxs)("div",{className:"flex flex-wrap gap-8 lg:justify-between lg:gap-0",children:[(0,u.jsxs)(g.E.div,{variants:{hidden:{opacity:0,y:-20},visible:{opacity:1,y:0}},initial:"hidden",whileInView:"visible",transition:{duration:1,delay:.5},viewport:{once:!0},className:"animate_top w-1/2 lg:w-1/4",children:[(0,u.jsx)("p",{className:"mb-1.5 text-sectiontitle uppercase tracking-[5px]",children:"contact"}),(0,u.jsx)("a",{href:"#",className:"text-itemtitle font-medium text-black dark:text-white",children:"contact@rezivure.com"})]}),(0,u.jsxs)("div",{className:"flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12",children:[(0,u.jsxs)(g.E.div,{variants:{hidden:{opacity:0,y:-20},visible:{opacity:1,y:0}},initial:"hidden",whileInView:"visible",transition:{duration:1,delay:.1},viewport:{once:!0},className:"animate_top",children:[(0,u.jsx)("h4",{className:"mb-9 text-itemtitle2 font-medium text-black dark:text-white",children:"Quick Links"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"#",className:"mb-3 inline-block hover:text-primary",children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"#",className:"mb-3 inline-block hover:text-primary",children:"Product"})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"#",className:"mb-3 inline-block hover:text-primary",children:"Careers"})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"#",className:"mb-3 inline-block hover:text-primary",children:"Github"})})]})]}),(0,u.jsxs)(g.E.div,{variants:{hidden:{opacity:0,y:-20},visible:{opacity:1,y:0}},initial:"hidden",whileInView:"visible",transition:{duration:1,delay:.1},viewport:{once:!0},className:"animate_top",children:[(0,u.jsx)("h4",{className:"mb-9 text-itemtitle2 font-medium text-black dark:text-white",children:"Support"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"#",className:"mb-3 inline-block hover:text-primary",children:"Company"})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"#",className:"mb-3 inline-block hover:text-primary",children:"Press media"})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"https://x.com/rezivure",className:"mb-3 inline-block hover:text-primary",children:"News"})}),(0,u.jsx)("li",{children:(0,u.jsx)("a",{href:"#",className:"mb-3 inline-block hover:text-primary",children:"Contact Us"})})]})]}),(0,u.jsx)(g.E.div,{})]})]})}),(0,u.jsxs)("div",{className:"flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0",children:[(0,u.jsx)(g.E.div,{variants:{hidden:{opacity:0,y:-20},visible:{opacity:1,y:0}},initial:"hidden",whileInView:"visible",transition:{duration:1,delay:.1},viewport:{once:!0},className:"animate_top"}),(0,u.jsx)(g.E.div,{variants:{hidden:{opacity:0,y:-20},visible:{opacity:1,y:0}},initial:"hidden",whileInView:"visible",transition:{duration:1,delay:.1},viewport:{once:!0},className:"animate_top",children:(0,u.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," Rezivure LLC, All rights reserved."]})}),(0,u.jsx)(g.E.div,{})]})]})})}),v=n(1396),w=n.n(v),k=n(4033),_=n(2265);let N=["light","dark"],E="(prefers-color-scheme: dark)",C="undefined"==typeof window,L=(0,_.createContext)(void 0),O={setTheme:r=>{},themes:[]},y=()=>{var r;return null!==(r=(0,_.useContext)(L))&&void 0!==r?r:O},$=r=>(0,_.useContext)(L)?_.createElement(_.Fragment,null,r.children):_.createElement(f,r),z=["light","dark"],f=({forcedTheme:r,disableTransitionOnChange:l=!1,enableSystem:n=!0,enableColorScheme:d=!0,storageKey:c="theme",themes:m=z,defaultTheme:u=n?"system":"light",attribute:h="data-theme",value:x,children:g,nonce:v})=>{let[w,k]=(0,_.useState)(()=>S(c,u)),[C,O]=(0,_.useState)(()=>S(c)),F=x?Object.values(x):m,P=(0,_.useCallback)(r=>{let c=r;if(!c)return;"system"===r&&n&&(c=p());let m=x?x[c]:c,g=l?b():null,v=document.documentElement;if("class"===h?(v.classList.remove(...F),m&&v.classList.add(m)):m?v.setAttribute(h,m):v.removeAttribute(h),d){let r=N.includes(u)?u:null,l=N.includes(c)?c:r;v.style.colorScheme=l}null==g||g()},[]),H=(0,_.useCallback)(r=>{k(r);try{localStorage.setItem(c,r)}catch(r){}},[r]),V=(0,_.useCallback)(l=>{let d=p(l);O(d),"system"===w&&n&&!r&&P("system")},[w,r]);(0,_.useEffect)(()=>{let r=window.matchMedia(E);return r.addListener(V),V(r),()=>r.removeListener(V)},[V]),(0,_.useEffect)(()=>{let e=r=>{r.key===c&&H(r.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[H]),(0,_.useEffect)(()=>{P(null!=r?r:w)},[r,w]);let R=(0,_.useMemo)(()=>({theme:w,setTheme:H,forcedTheme:r,resolvedTheme:"system"===w?C:w,themes:n?[...m,"system"]:m,systemTheme:n?C:void 0}),[w,H,r,C,n,m]);return _.createElement(L.Provider,{value:R},_.createElement(A,{forcedTheme:r,disableTransitionOnChange:l,enableSystem:n,enableColorScheme:d,storageKey:c,themes:m,defaultTheme:u,attribute:h,value:x,children:g,attrs:F,nonce:v}),g)},A=(0,_.memo)(({forcedTheme:r,storageKey:l,attribute:n,enableSystem:d,enableColorScheme:c,defaultTheme:m,value:u,attrs:h,nonce:x})=>{let g="system"===m,v="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${h.map(r=>`'${r}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,w=c?N.includes(m)&&m?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${m}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",$=(r,l=!1,d=!0)=>{let m=u?u[r]:r,h=l?r+"|| ''":`'${m}'`,x="";return c&&d&&!l&&N.includes(r)&&(x+=`d.style.colorScheme = '${r}';`),"class"===n?x+=l||m?`c.add(${h})`:"null":m&&(x+=`d[s](n,${h})`),x},k=r?`!function(){${v}${$(r)}}()`:d?`!function(){try{${v}var e=localStorage.getItem('${l}');if('system'===e||(!e&&${g})){var t='${E}',m=window.matchMedia(t);if(m.media!==t||m.matches){${$("dark")}}else{${$("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${$(u?"x[e]":"e",!0)}}${g?"":"else{"+$(m,!1,!1)+"}"}${w}}catch(e){}}()`:`!function(){try{${v}var e=localStorage.getItem('${l}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${$(u?"x[e]":"e",!0)}}else{${$(m,!1,!1)};}${w}}catch(t){}}();`;return _.createElement("script",{nonce:x,dangerouslySetInnerHTML:{__html:k}})},()=>!0),S=(r,l)=>{let n;if(!C){try{n=localStorage.getItem(r)||void 0}catch(r){}return n||l}},b=()=>{let r=document.createElement("style");return r.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(r),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(r)},1)}},p=r=>(r||(r=window.matchMedia(E)),r.matches?"dark":"light");var F=n(6691),P=n.n(F),Header_ThemeToggler=()=>{let{theme:r,setTheme:l}=y();return(0,u.jsxs)("button",{"aria-label":"theme toggler",onClick:()=>l("dark"===r?"light":"dark"),className:"bg-gray-2 dark:bg-dark-bg absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white lg:static",children:[(0,u.jsx)(P(),{src:"/images/icon/icon-moon.svg",alt:"logo",width:21,height:21,className:"dark:hidden"}),(0,u.jsx)(P(),{src:"/images/icon/icon-sun.svg",alt:"logo",width:22,height:22,className:"hidden dark:block"})]})},H=[{id:1,title:"Home",newTab:!1,path:"/"},{id:2,title:"About",newTab:!1,path:"/about"},{id:2.1,title:"News",newTab:!1,path:"https://x.com/rezivure"},{id:3,title:"Our Projects",newTab:!1,submenu:[{id:31,title:"Grid",newTab:!1,path:"https://mygrid.app"}]},{id:4,title:"Contact",newTab:!1,path:"/support"}],components_Header=()=>{let[r,l]=(0,_.useState)(!1),[n,d]=(0,_.useState)(!1),[c,m]=(0,_.useState)(!1),h=(0,k.usePathname)(),handleStickyMenu=()=>{window.scrollY>=80?m(!0):m(!1)};return(0,_.useEffect)(()=>{window.addEventListener("scroll",handleStickyMenu)}),(0,u.jsx)("header",{className:"fixed left-0 top-0 z-99999 w-full py-7 ".concat(c?"bg-white !py-4 shadow transition duration-100 dark:bg-black":""),children:(0,u.jsxs)("div",{className:"relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0",children:[(0,u.jsxs)("div",{className:"flex w-full items-center justify-between xl:w-1/4",children:[(0,u.jsx)("a",{href:"/",className:"flex items-center",children:(0,u.jsx)("span",{className:"text-xl font-bold text-black dark:text-white",children:"Rezivure"})}),(0,u.jsx)("button",{"aria-label":"hamburger Toggler",className:"block xl:hidden",onClick:()=>l(!r),children:(0,u.jsxs)("span",{className:"relative block h-5.5 w-5.5 cursor-pointer",children:[(0,u.jsxs)("span",{className:"absolute right-0 block h-full w-full",children:[(0,u.jsx)("span",{className:"relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ".concat(r?"w-0":"!w-full delay-300")}),(0,u.jsx)("span",{className:"relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ".concat(r?"w-0":"delay-400 !w-full")}),(0,u.jsx)("span",{className:"relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ".concat(r?"w-0":"!w-full delay-500")})]}),(0,u.jsxs)("span",{className:"du-block absolute right-0 h-full w-full rotate-45",children:[(0,u.jsx)("span",{className:"absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ".concat(r?"h-full":"!h-0 delay-[0]")}),(0,u.jsx)("span",{className:"delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ".concat(r?"h-0.5":"!h-0 delay-200")})]})]})})]}),(0,u.jsxs)("div",{className:"invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ".concat(r&&"navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"),children:[(0,u.jsx)("nav",{children:(0,u.jsx)("ul",{className:"flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10",children:H.map((r,l)=>(0,u.jsx)("li",{className:r.submenu&&"group relative",children:r.submenu?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("button",{onClick:()=>d(!n),className:"flex cursor-pointer items-center justify-between gap-3 hover:text-primary",children:[r.title,(0,u.jsx)("span",{children:(0,u.jsx)("svg",{className:"h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,u.jsx)("path",{d:"M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"})})})]}),(0,u.jsx)("ul",{className:"dropdown ".concat(n?"flex":""),children:r.submenu.map((r,l)=>(0,u.jsx)("li",{className:"hover:text-primary",children:(0,u.jsx)(w(),{href:r.path||"#",children:r.title})},l))})]}):(0,u.jsx)(w(),{href:"".concat(r.path),className:h===r.path?"text-primary hover:text-primary":"hover:text-primary",children:r.title})},l))})}),(0,u.jsxs)("div",{className:"mt-7 flex items-center gap-6 xl:mt-0",children:[(0,u.jsx)(Header_ThemeToggler,{}),(0,u.jsx)(w(),{href:"https://github.com/rezivure",className:"flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho",children:"Github \uD83C\uDF1F"})]})]})]})})},components_Lines=()=>(0,u.jsxs)("div",{className:"fixed left-0 top-0 -z-20 flex h-full w-full items-center justify-around",children:[(0,u.jsx)("span",{className:"flex h-full w-[1px] animate-line1 bg-stroke dark:bg-strokedark"}),(0,u.jsx)("span",{className:"flex h-full w-[1px] animate-line2 bg-stroke dark:bg-strokedark"}),(0,u.jsx)("span",{className:"flex h-full w-[1px] animate-line3 bg-stroke dark:bg-strokedark"})]});function ScrollToTop(){let[r,l]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let toggleVisibility=()=>{window.scrollY>300?l(!0):l(!1)};return window.addEventListener("scroll",toggleVisibility),()=>window.removeEventListener("scroll",toggleVisibility)},[]),(0,u.jsx)("div",{className:"fixed bottom-8 right-8 z-[99]",children:r&&(0,u.jsxs)("div",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},"aria-label":"scroll to top",className:"hover:shadow-signUp flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80",children:[(0,u.jsx)("span",{className:"mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"}),(0,u.jsx)("span",{className:"sr-only",children:"scroll to top"})]})})}n(2853);let V={data:""},t=r=>"object"==typeof window?((r?r.querySelector("#_goober"):window._goober)||Object.assign((r||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:r||V,R=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,U=/\/\*[^]*?\*\/|  +/g,Y=/\n+/g,o=(r,l)=>{let n="",d="",c="";for(let m in r){let u=r[m];"@"==m[0]?"i"==m[1]?n=m+" "+u+";":d+="f"==m[1]?o(u,m):m+"{"+o(u,"k"==m[1]?"":l)+"}":"object"==typeof u?d+=o(u,l?l.replace(/([^,])+/g,r=>m.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,r):r?r+" "+l:l)):m):null!=u&&(m=/^--/.test(m)?m:m.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=o.p?o.p(m,u):m+":"+u+";")}return n+(l&&c?l+"{"+c+"}":c)+d},K={},s=r=>{if("object"==typeof r){let l="";for(let n in r)l+=n+s(r[n]);return l}return r},goober_modern_i=(r,l,n,d,c)=>{var m;let u=s(r),h=K[u]||(K[u]=(r=>{let l=0,n=11;for(;l<r.length;)n=101*n+r.charCodeAt(l++)>>>0;return"go"+n})(u));if(!K[h]){let l=u!==r?r:(r=>{let l,n,d=[{}];for(;l=R.exec(r.replace(U,""));)l[4]?d.shift():l[3]?(n=l[3].replace(Y," ").trim(),d.unshift(d[0][n]=d[0][n]||{})):d[0][l[1]]=l[2].replace(Y," ").trim();return d[0]})(r);K[h]=o(c?{["@keyframes "+h]:l}:l,n?"":"."+h)}let x=n&&K.g?K.g:null;return n&&(K.g=K[h]),m=K[h],x?l.data=l.data.replace(x,m):-1===l.data.indexOf(m)&&(l.data=d?m+l.data:l.data+m),h},goober_modern_p=(r,l,n)=>r.reduce((r,d,c)=>{let m=l[c];if(m&&m.call){let r=m(n),l=r&&r.props&&r.props.className||/^go/.test(r)&&r;m=l?"."+l:r&&"object"==typeof r?r.props?"":o(r,""):!1===r?"":r}return r+d+(null==m?"":m)},"");function goober_modern_u(r){let l=this||{},n=r.call?r(l.p):r;return goober_modern_i(n.unshift?n.raw?goober_modern_p(n,[].slice.call(arguments,1),l.p):n.reduce((r,n)=>Object.assign(r,n&&n.call?n(l.p):n),{}):n,t(l.target),l.g,l.o,l.k)}goober_modern_u.bind({g:1});let B,q,Q,X=goober_modern_u.bind({k:1});function j(r,l){let n=this||{};return function(){let d=arguments;function a(c,m){let u=Object.assign({},c),h=u.className||a.className;n.p=Object.assign({theme:q&&q()},u),n.o=/ *go\d+/.test(h),u.className=goober_modern_u.apply(n,d)+(h?" "+h:""),l&&(u.ref=m);let x=r;return r[0]&&(x=u.as||r,delete u.as),Q&&x[0]&&Q(u),B(x,u)}return l?l(a):a}}var W=r=>"function"==typeof r,T=(r,l)=>W(r)?r(l):r,et=(d=0,()=>(++d).toString()),dist_b=()=>{if(void 0===c&&"u">typeof window){let r=matchMedia("(prefers-reduced-motion: reduce)");c=!r||r.matches}return c},ea=new Map,dist_$=r=>{if(ea.has(r))return;let l=setTimeout(()=>{ea.delete(r),dist_u({type:4,toastId:r})},1e3);ea.set(r,l)},J=r=>{let l=ea.get(r);l&&clearTimeout(l)},dist_v=(r,l)=>{switch(l.type){case 0:return{...r,toasts:[l.toast,...r.toasts].slice(0,20)};case 1:return l.toast.id&&J(l.toast.id),{...r,toasts:r.toasts.map(r=>r.id===l.toast.id?{...r,...l.toast}:r)};case 2:let{toast:n}=l;return r.toasts.find(r=>r.id===n.id)?dist_v(r,{type:1,toast:n}):dist_v(r,{type:0,toast:n});case 3:let{toastId:d}=l;return d?dist_$(d):r.toasts.forEach(r=>{dist_$(r.id)}),{...r,toasts:r.toasts.map(r=>r.id===d||void 0===d?{...r,visible:!1}:r)};case 4:return void 0===l.toastId?{...r,toasts:[]}:{...r,toasts:r.toasts.filter(r=>r.id!==l.toastId)};case 5:return{...r,pausedAt:l.time};case 6:let c=l.time-(r.pausedAt||0);return{...r,pausedAt:void 0,toasts:r.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+c}))}}},ei=[],es={toasts:[],pausedAt:void 0},dist_u=r=>{es=dist_v(es,r),ei.forEach(r=>{r(es)})},er={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(r={})=>{let[l,n]=(0,_.useState)(es);(0,_.useEffect)(()=>(ei.push(n),()=>{let r=ei.indexOf(n);r>-1&&ei.splice(r,1)}),[l]);let d=l.toasts.map(l=>{var n,d;return{...r,...r[l.type],...l,duration:l.duration||(null==(n=r[l.type])?void 0:n.duration)||(null==r?void 0:r.duration)||er[l.type],style:{...r.style,...null==(d=r[l.type])?void 0:d.style,...l.style}}});return{...l,toasts:d}},G=(r,l="blank",n)=>({createdAt:Date.now(),visible:!0,type:l,ariaProps:{role:"status","aria-live":"polite"},message:r,pauseDuration:0,...n,id:(null==n?void 0:n.id)||et()}),dist_h=r=>(l,n)=>{let d=G(l,r,n);return dist_u({type:2,toast:d}),d.id},dist_n=(r,l)=>dist_h("blank")(r,l);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=r=>{dist_u({type:3,toastId:r})},dist_n.remove=r=>dist_u({type:4,toastId:r}),dist_n.promise=(r,l,n)=>{let d=dist_n.loading(l.loading,{...n,...null==n?void 0:n.loading});return r.then(r=>(dist_n.success(T(l.success,r),{id:d,...n,...null==n?void 0:n.success}),r)).catch(r=>{dist_n.error(T(l.error,r),{id:d,...n,...null==n?void 0:n.error})}),r};var Z=(r,l)=>{dist_u({type:1,toast:{id:r,height:l}})},ee=()=>{dist_u({type:5,time:Date.now()})},D=r=>{let{toasts:l,pausedAt:n}=I(r);(0,_.useEffect)(()=>{if(n)return;let r=Date.now(),d=l.map(l=>{if(l.duration===1/0)return;let n=(l.duration||0)+l.pauseDuration-(r-l.createdAt);if(n<0){l.visible&&dist_n.dismiss(l.id);return}return setTimeout(()=>dist_n.dismiss(l.id),n)});return()=>{d.forEach(r=>r&&clearTimeout(r))}},[l,n]);let d=(0,_.useCallback)(()=>{n&&dist_u({type:6,time:Date.now()})},[n]),c=(0,_.useCallback)((r,n)=>{let{reverseOrder:d=!1,gutter:c=8,defaultPosition:m}=n||{},u=l.filter(l=>(l.position||m)===(r.position||m)&&l.height),h=u.findIndex(l=>l.id===r.id),x=u.filter((r,l)=>l<h&&r.visible).length;return u.filter(r=>r.visible).slice(...d?[x+1]:[0,x]).reduce((r,l)=>r+(l.height||0)+c,0)},[l]);return{toasts:l,handlers:{updateHeight:Z,startPause:ee,endPause:d,calculateOffset:c}}},eo=X`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,el=X`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,en=X`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ed=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${r=>r.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${eo} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${el} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${r=>r.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${en} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ec=X`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,em=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${r=>r.secondary||"#e0e0e0"};
  border-right-color: ${r=>r.primary||"#616161"};
  animation: ${ec} 1s linear infinite;
`,eu=X`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,eh=X`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ep=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${r=>r.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${eu} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${eh} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${r=>r.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ef=j("div")`
  position: absolute;
`,eb=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ex=X`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,eg=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ex} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:r})=>{let{icon:l,type:n,iconTheme:d}=r;return void 0!==l?"string"==typeof l?_.createElement(eg,null,l):l:"blank"===n?null:_.createElement(eb,null,_.createElement(em,{...d}),"loading"!==n&&_.createElement(ef,null,"error"===n?_.createElement(ed,{...d}):_.createElement(ep,{...d})))},ye=r=>`
0% {transform: translate3d(0,${-200*r}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=r=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*r}%,-1px) scale(.6); opacity:0;}
`,ey=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ev=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(r,l)=>{let n=r.includes("top")?1:-1,[d,c]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:l?`${X(d)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${X(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ew=_.memo(({toast:r,position:l,style:n,children:d})=>{let c=r.height?Ae(r.position||l||"top-center",r.visible):{opacity:0},m=_.createElement(M,{toast:r}),u=_.createElement(ev,{...r.ariaProps},T(r.message,r));return _.createElement(ey,{className:r.className,style:{...c,...n,...r.style}},"function"==typeof d?d({icon:m,message:u}):_.createElement(_.Fragment,null,m,u))});m=_.createElement,o.p=void 0,B=m,q=void 0,Q=void 0;var Ee=({id:r,className:l,style:n,onHeightUpdate:d,children:c})=>{let m=_.useCallback(l=>{if(l){let i=()=>{d(r,l.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[r,d]);return _.createElement("div",{ref:m,className:l,style:n},c)},Re=(r,l)=>{let n=r.includes("top"),d=r.includes("center")?{justifyContent:"center"}:r.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dist_b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${l*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...d}},ej=goober_modern_u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ie=({reverseOrder:r,position:l="top-center",toastOptions:n,gutter:d,children:c,containerStyle:m,containerClassName:u})=>{let{toasts:h,handlers:x}=D(n);return _.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...m},className:u,onMouseEnter:x.startPause,onMouseLeave:x.endPause},h.map(n=>{let m=n.position||l,u=Re(m,x.calculateOffset(n,{reverseOrder:r,gutter:d,defaultPosition:l}));return _.createElement(Ee,{id:n.id,key:n.id,onHeightUpdate:x.updateHeight,className:n.visible?ej:"",style:u},"custom"===n.type?T(n.message,n):c?c(n):_.createElement(ew,{toast:n,position:m}))}))},ToastContext=()=>(0,u.jsx)("div",{children:(0,u.jsx)(Ie,{position:"top-center",reverseOrder:!1})});function RootLayout(r){let{children:l}=r;return(0,u.jsx)("html",{lang:"en",suppressHydrationWarning:!0,children:(0,u.jsx)("body",{className:"dark:bg-black ".concat(x().className),children:(0,u.jsxs)($,{enableSystem:!1,attribute:"class",defaultTheme:"light",children:[(0,u.jsx)(components_Lines,{}),(0,u.jsx)(components_Header,{}),(0,u.jsx)(ToastContext,{}),l,(0,u.jsx)(components_Footer,{}),(0,u.jsx)(ScrollToTop,{})]})})})}},2853:function(){},5697:function(r){r.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}},1396:function(r,l,n){r.exports=n(8326)},4033:function(r,l,n){r.exports=n(94)}},function(r){r.O(0,[413,486,326,971,472,744],function(){return r(r.s=2736)}),_N_E=r.O()}]);