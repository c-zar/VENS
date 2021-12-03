import{S as P,i as z,s as B,e as g,t as S,k as V,c as b,a as k,g as C,d as o,n as A,b as d,f as H,D as h,E as F,F as O,G as Y,j as Z,H as ee,m as te,o as le,I as se,J as ae,K as re,x as Q,u as R,v as ne}from"../chunks/vendor-3b5481f4.js";import{n as N}from"../chunks/info-844534dd.js";import{b as q}from"../chunks/paths-28a87002.js";function T(c,e,s){const n=c.slice();return n[1]=e[s],n}function U(c,e,s){const n=c.slice();return n[1]=e[s],n}function W(c){let e,s,n=c[1].label+"",i,_,f;return{c(){e=g("h1"),s=g("a"),i=S(n),f=V(),this.h()},l(u){e=b(u,"H1",{class:!0});var a=k(e);s=b(a,"A",{href:!0});var m=k(s);i=C(m,n),m.forEach(o),f=A(a),a.forEach(o),this.h()},h(){d(s,"href",_=c[1].href),d(e,"class","text-md px-2 font-bold text-gray-800 dark:text-white")},m(u,a){H(u,e,a),h(e,s),h(s,i),h(e,f)},p:F,d(u){u&&o(e)}}}function X(c){let e,s,n=c[1].label+"",i,_,f;return{c(){e=g("h1"),s=g("a"),i=S(n),f=V(),this.h()},l(u){e=b(u,"H1",{class:!0});var a=k(e);s=b(a,"A",{href:!0});var m=k(s);i=C(m,n),m.forEach(o),f=A(a),a.forEach(o),this.h()},h(){d(s,"href",_=c[1].href),d(e,"class","text-md font-bold text-gray-800 dark:text-white")},m(u,a){H(u,e,a),h(e,s),h(s,i),h(e,f)},p:F,d(u){u&&o(e)}}}function oe(c){let e,s,n,i,_,f,u,a,m,$,I,x,r,E=c[0],v=[];for(let t=0;t<E.length;t+=1)v[t]=W(U(c,E,t));let y=c[0],p=[];for(let t=0;t<y.length;t+=1)p[t]=X(T(c,y,t));return{c(){e=g("div"),s=g("h1"),n=g("a"),i=S(N),_=V(),f=g("div");for(let t=0;t<v.length;t+=1)v[t].c();u=V(),a=g("div"),m=g("h1"),$=g("a"),I=S(N),x=V(),r=g("div");for(let t=0;t<p.length;t+=1)p[t].c();this.h()},l(t){e=b(t,"DIV",{class:!0});var w=k(e);s=b(w,"H1",{class:!0});var l=k(s);n=b(l,"A",{href:!0});var j=k(n);i=C(j,N),j.forEach(o),l.forEach(o),_=A(w),f=b(w,"DIV",{class:!0});var G=k(f);for(let D=0;D<v.length;D+=1)v[D].l(G);G.forEach(o),w.forEach(o),u=A(t),a=b(t,"DIV",{class:!0});var K=k(a);m=b(K,"H1",{class:!0});var J=k(m);$=b(J,"A",{div:!0,class:!0,href:!0});var L=k($);I=C(L,N),L.forEach(o),J.forEach(o),x=A(K),r=b(K,"DIV",{class:!0});var M=k(r);for(let D=0;D<p.length;D+=1)p[D].l(M);M.forEach(o),K.forEach(o),this.h()},h(){d(n,"href",`${q}/`),d(s,"class","text-2xl font-bold text-gray-800 dark:text-white"),d(f,"class","flex h-16 px-4 py-2 justify-between items-center"),d(e,"class","flex h-16 px-4 py-2 justify-between items-center md:hidden"),d($,"div",""),d($,"class","whitespace-nowrap"),d($,"href",`${q}/`),d(m,"class","text-2xl font-bold text-gray-800 dark:text-white flex flex-nowrap"),d(r,"class","flex flex-col h-16 pt-6 justify-between w-full"),d(a,"class","px-4 py-2 items-center hidden flex-col bg-black justify-start md:flex")},m(t,w){H(t,e,w),h(e,s),h(s,n),h(n,i),h(e,_),h(e,f);for(let l=0;l<v.length;l+=1)v[l].m(f,null);H(t,u,w),H(t,a,w),h(a,m),h(m,$),h($,I),h(a,x),h(a,r);for(let l=0;l<p.length;l+=1)p[l].m(r,null)},p(t,[w]){if(w&1){E=t[0];let l;for(l=0;l<E.length;l+=1){const j=U(t,E,l);v[l]?v[l].p(j,w):(v[l]=W(j),v[l].c(),v[l].m(f,null))}for(;l<v.length;l+=1)v[l].d(1);v.length=E.length}if(w&1){y=t[0];let l;for(l=0;l<y.length;l+=1){const j=T(t,y,l);p[l]?p[l].p(j,w):(p[l]=X(j),p[l].c(),p[l].m(r,null))}for(;l<p.length;l+=1)p[l].d(1);p.length=y.length}},i:F,o:F,d(t){t&&o(e),O(v,t),t&&o(u),t&&o(a),O(p,t)}}}function ce(c){return[[{label:"About",href:`${q}/about`},{label:"Projects",href:`${q}/projects`}]]}class fe extends P{constructor(e){super();z(this,e,ce,oe,B,{})}}function ie(c){let e,s,n,i,_,f,u,a,m,$;document.title=e=N,f=new fe({});const I=c[1].default,x=Y(I,c,c[0],null);return{c(){s=g("link"),n=V(),i=g("div"),_=g("div"),Z(f.$$.fragment),u=V(),a=g("main"),m=g("div"),x&&x.c(),this.h()},l(r){const E=ee('[data-svelte="svelte-a389yn"]',document.head);s=b(E,"LINK",{rel:!0,href:!0}),E.forEach(o),n=A(r),i=b(r,"DIV",{class:!0});var v=k(i);_=b(v,"DIV",{class:!0});var y=k(_);te(f.$$.fragment,y),u=A(y),a=b(y,"MAIN",{class:!0});var p=k(a);m=b(p,"DIV",{class:!0});var t=k(m);x&&x.l(t),t.forEach(o),p.forEach(o),y.forEach(o),v.forEach(o),this.h()},h(){d(s,"rel","icon"),d(s,"href",`${q}/favicon.png`),d(m,"class","pb-10"),d(a,"class","flex flex-col w-full flex-grow prose prose-sm sm:prose lg:prose-lg dark:prose-dark"),d(_,"class","mx-auto flex flex-col md:flex-row flex-grow w-full text-justify"),d(i,"class","flex flex-col min-h-screen")},m(r,E){h(document.head,s),H(r,n,E),H(r,i,E),h(i,_),le(f,_,null),h(_,u),h(_,a),h(a,m),x&&x.m(m,null),$=!0},p(r,[E]){(!$||E&0)&&e!==(e=N)&&(document.title=e),x&&x.p&&(!$||E&1)&&se(x,I,r,r[0],$?re(I,r[0],E,null):ae(r[0]),null)},i(r){$||(Q(f.$$.fragment,r),Q(x,r),$=!0)},o(r){R(f.$$.fragment,r),R(x,r),$=!1},d(r){o(s),r&&o(n),r&&o(i),ne(f),x&&x.d(r)}}}function he(c,e,s){let{$$slots:n={},$$scope:i}=e;return c.$$set=_=>{"$$scope"in _&&s(0,i=_.$$scope)},[i,n]}class me extends P{constructor(e){super();z(this,e,he,ie,B,{})}}export{me as default};
