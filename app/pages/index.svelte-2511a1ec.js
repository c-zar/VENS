import{S as $,i as z,s as J,e as j,k as P,L as V,t as W,c as E,a as _,d as h,n as F,M as C,g as B,b as p,f as M,D as u,E as R,A as ne,N as K,j as Q,m as X,o as Y,x as S,u as G,v as Z,w as oe,F as ae,r as le}from"../chunks/vendor-d0723bdf.js";import{g as ie}from"../chunks/get-posts-22d35cb8.js";import{P as ce}from"../chunks/PostPreview-43067afc.js";import"../chunks/paths-28a87002.js";function he(m){let r,t,e,s,n,g,T,c,y,D,b,d;return{c(){r=j("div"),t=j("span"),e=P(),s=j("span"),n=P(),g=V("svg"),T=V("defs"),c=V("filter"),y=V("feColorMatrix"),D=P(),b=j("div"),d=W("Shoutout to @DotOnion for this sick animation"),this.h()},l(a){r=E(a,"DIV",{id:!0,class:!0});var v=_(r);t=E(v,"SPAN",{id:!0,class:!0}),_(t).forEach(h),e=F(v),s=E(v,"SPAN",{id:!0,class:!0}),_(s).forEach(h),v.forEach(h),n=F(a),g=C(a,"svg",{id:!0,class:!0});var I=_(g);T=C(I,"defs",{});var x=_(T);c=C(x,"filter",{id:!0});var f=_(c);y=C(f,"feColorMatrix",{in:!0,type:!0,values:!0}),_(y).forEach(h),f.forEach(h),x.forEach(h),I.forEach(h),D=F(a),b=E(a,"DIV",{class:!0});var k=_(b);d=B(k,"Shoutout to @DotOnion for this sick animation"),k.forEach(h),this.h()},h(){p(t,"id","text1"),p(t,"class","svelte-ar4y6d"),p(s,"id","text2"),p(s,"class","svelte-ar4y6d"),p(r,"id","container"),p(r,"class","py-10 !text-9xl svelte-ar4y6d"),p(y,"in","SourceGraphic"),p(y,"type","matrix"),p(y,"values",`1 0 0 0 0\r
									0 1 0 0 0\r
									0 0 1 0 0\r
									0 0 0 255 -140`),p(c,"id","threshold"),p(g,"id","filters"),p(g,"class","hidden"),p(b,"class","hidden")},m(a,v){M(a,r,v),u(r,t),m[2](t),u(r,e),u(r,s),m[3](s),M(a,n,v),M(a,g,v),u(g,T),u(T,c),u(c,y),M(a,D,v),M(a,b,v),u(b,d)},p:R,i:R,o:R,d(a){a&&h(r),m[2](null),m[3](null),a&&h(n),a&&h(g),a&&h(D),a&&h(b)}}}const fe=1.5,ee=.1;function ue(m,r,t){let e,s;const n=["VEN","STUDIOS"];ne(()=>{let c=n.length-1,y;n[c%n.length],n[(c+1)%n.length];let D=new Date,b=0,d=ee;function a(){b-=d,d=0;let f=b/fe;f>1&&(d=ee,f=1),v(f)}function v(f){t(1,s.style.filter=`blur(${Math.min(8/f-8,100)}px)`,s),t(1,s.style.opacity=`${Math.pow(f,.4)*100}%`,s),f=1-f,t(0,e.style.filter=`blur(${Math.min(8/f-8,100)}px)`,e),t(0,e.style.opacity=`${Math.pow(f,.4)*100}%`,e),t(0,e.textContent=n[c%n.length],e),t(1,s.textContent=n[(c+1)%n.length],s)}function I(){b=0,t(1,s.style.filter="",s),t(1,s.style.opacity="100%",s),t(0,e.style.filter="",e),t(0,e.style.opacity="0%",e)}function x(){y=requestAnimationFrame(x);let f=new Date,k=d>0,l=(f-D)/1e3;D=f,d-=l,d<=0?(k&&c++,a()):I()}return x(),()=>cancelAnimationFrame(y)});function g(c){K[c?"unshift":"push"](()=>{e=c,t(0,e)})}function T(c){K[c?"unshift":"push"](()=>{s=c,t(1,s)})}return[e,s,g,T]}class de extends ${constructor(r){super();z(this,r,ue,he,J,{})}}function te(m,r,t){const e=m.slice();return e[1]=r[t],e}function re(m){let r,t;return r=new ce({props:{post:m[1].metadata,component:m[1].component,path:"projects"}}),{c(){Q(r.$$.fragment)},l(e){X(r.$$.fragment,e)},m(e,s){Y(r,e,s),t=!0},p(e,s){const n={};s&1&&(n.post=e[1].metadata),s&1&&(n.component=e[1].component),r.$set(n)},i(e){t||(S(r.$$.fragment,e),t=!0)},o(e){G(r.$$.fragment,e),t=!1},d(e){Z(r,e)}}}function me(m){let r,t,e,s,n,g,T,c,y,D,b,d,a,v,I,x,f;e=new de({});let k=m[0],l=[];for(let i=0;i<k.length;i+=1)l[i]=re(te(m,k,i));const se=i=>G(l[i],1,1,()=>{l[i]=null});return{c(){r=j("div"),t=j("div"),Q(e.$$.fragment),s=P(),n=j("div"),g=j("p"),T=W(`The NFT market, like many tech-centric areas, has traditionally been dominated by men. While\r
        the rise of blockchain-based digital artwork is notable, the majority of the artists\r
        responsible for creating today\u2019s most sought after NFTs are men. The ratio of male to\r
        female NFT artists remains unclear, but statistics show that there are considerably less women\r
        involved in the overall crypto sector: A recent survey conducted by cryptocurrency exchange\r
        Gemini found that just 26% of females hold crypto. We are a proud Woman-led NFT Studio with\r
        a focus on collaborations with female artist. Our goal is to increase female engagement in\r
        crypto.`),c=P(),y=j("p"),D=W(`\u201CWomen belong in all places where decisions are being made. It shouldn\u2019t be that women are\r
        the exception\u201D \u2014 Ruth Bader-Ginsburg.`),b=P(),d=j("div"),a=j("h1"),v=W("Projects"),I=P(),x=j("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){r=E(i,"DIV",{class:!0});var w=_(r);t=E(w,"DIV",{class:!0});var o=_(t);X(e.$$.fragment,o),s=F(o),n=E(o,"DIV",{});var N=_(n);g=E(N,"P",{});var q=_(g);T=B(q,`The NFT market, like many tech-centric areas, has traditionally been dominated by men. While\r
        the rise of blockchain-based digital artwork is notable, the majority of the artists\r
        responsible for creating today\u2019s most sought after NFTs are men. The ratio of male to\r
        female NFT artists remains unclear, but statistics show that there are considerably less women\r
        involved in the overall crypto sector: A recent survey conducted by cryptocurrency exchange\r
        Gemini found that just 26% of females hold crypto. We are a proud Woman-led NFT Studio with\r
        a focus on collaborations with female artist. Our goal is to increase female engagement in\r
        crypto.`),q.forEach(h),c=F(N),y=E(N,"P",{});var H=_(y);D=B(H,`\u201CWomen belong in all places where decisions are being made. It shouldn\u2019t be that women are\r
        the exception\u201D \u2014 Ruth Bader-Ginsburg.`),H.forEach(h),N.forEach(h),b=F(o),d=E(o,"DIV",{class:!0});var A=_(d);a=E(A,"H1",{});var L=_(a);v=B(L,"Projects"),L.forEach(h),I=F(A),x=E(A,"DIV",{class:!0});var U=_(x);for(let O=0;O<l.length;O+=1)l[O].l(U);U.forEach(h),A.forEach(h),o.forEach(h),w.forEach(h),this.h()},h(){p(x,"class","flex-grow divide-y divide-gray-300 dark:divide-gray-700"),p(d,"class","pt-10"),p(t,"class","flex-grow"),p(r,"class","flex flex-col flex-grow px-4 max-w-4xl mx-auto")},m(i,w){M(i,r,w),u(r,t),Y(e,t,null),u(t,s),u(t,n),u(n,g),u(g,T),u(n,c),u(n,y),u(y,D),u(t,b),u(t,d),u(d,a),u(a,v),u(d,I),u(d,x);for(let o=0;o<l.length;o+=1)l[o].m(x,null);f=!0},p(i,[w]){if(w&1){k=i[0];let o;for(o=0;o<k.length;o+=1){const N=te(i,k,o);l[o]?(l[o].p(N,w),S(l[o],1)):(l[o]=re(N),l[o].c(),S(l[o],1),l[o].m(x,null))}for(le(),o=k.length;o<l.length;o+=1)se(o);oe()}},i(i){if(!f){S(e.$$.fragment,i);for(let w=0;w<k.length;w+=1)S(l[w]);f=!0}},o(i){G(e.$$.fragment,i),l=l.filter(Boolean);for(let w=0;w<l.length;w+=1)G(l[w]);f=!1},d(i){i&&h(r),Z(e),ae(l,i)}}}const be=!0,we=async()=>({props:{projects:ie()}});function pe(m,r,t){let{projects:e}=r;return m.$$set=s=>{"projects"in s&&t(0,e=s.projects)},[e]}class xe extends ${constructor(r){super();z(this,r,pe,me,J,{projects:0})}}export{xe as default,we as load,be as prerender};
