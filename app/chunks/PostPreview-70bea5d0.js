import{S as $,i as z,s as F,L as S,e as u,t as j,k,j as G,c as _,a as v,g as L,d as f,n as V,m as J,b as E,f as q,D as l,o as K,h as A,x as N,u as O,v as Q}from"./vendor-6bf17c97.js";import{B as U}from"./get-posts-08df5eed.js";function W(o){let e;return{c(){e=j("Read More")},l(t){e=L(t,"Read More")},m(t,n){q(t,e,n)},d(t){t&&f(e)}}}function X(o){let e,t,n,r,c=o[0].title+"",i,b,g,w=S(new Date(o[0].date),"MMMM d, yyyy")+"",y,H,p,D=o[0].previewHtml+"",I,M,h,d;return h=new U({props:{href:o[1],$$slots:{default:[W]},$$scope:{ctx:o}}}),{c(){e=u("div"),t=u("div"),n=u("h2"),r=u("a"),i=j(c),b=k(),g=u("time"),y=j(w),H=k(),p=u("div"),I=k(),M=u("div"),G(h.$$.fragment),this.h()},l(a){e=_(a,"DIV",{class:!0});var s=v(e);t=_(s,"DIV",{});var m=v(t);n=_(m,"H2",{class:!0});var P=v(n);r=_(P,"A",{href:!0});var T=v(r);i=L(T,c),T.forEach(f),P.forEach(f),b=V(m),g=_(m,"TIME",{});var B=v(g);y=L(B,w),B.forEach(f),m.forEach(f),H=V(s),p=_(s,"DIV",{});var C=v(p);C.forEach(f),I=V(s),M=_(s,"DIV",{class:!0});var R=v(M);J(h.$$.fragment,R),R.forEach(f),s.forEach(f),this.h()},h(){E(r,"href",o[1]),E(n,"class","!mt-0 !mb-1"),E(M,"class","flex justify-end w-full"),E(e,"class","py-8 first:pt-0")},m(a,s){q(a,e,s),l(e,t),l(t,n),l(n,r),l(r,i),l(t,b),l(t,g),l(g,y),l(e,H),l(e,p),p.innerHTML=D,l(e,I),l(e,M),K(h,M,null),d=!0},p(a,[s]){(!d||s&1)&&c!==(c=a[0].title+"")&&A(i,c),(!d||s&2)&&E(r,"href",a[1]),(!d||s&1)&&w!==(w=S(new Date(a[0].date),"MMMM d, yyyy")+"")&&A(y,w),(!d||s&1)&&D!==(D=a[0].previewHtml+"")&&(p.innerHTML=D);const m={};s&2&&(m.href=a[1]),s&8&&(m.$$scope={dirty:s,ctx:a}),h.$set(m)},i(a){d||(N(h.$$.fragment,a),d=!0)},o(a){O(h.$$.fragment,a),d=!1},d(a){a&&f(e),Q(h)}}}function Y(o,e,t){let{post:n}=e,{path:r="posts"}=e,{href:c=`/${r}/${n.slug}`}=e;return o.$$set=i=>{"post"in i&&t(0,n=i.post),"path"in i&&t(2,r=i.path),"href"in i&&t(1,c=i.href)},[n,c,r]}class ee extends ${constructor(e){super();z(this,e,Y,X,F,{post:0,path:2,href:1})}}export{ee as P};
