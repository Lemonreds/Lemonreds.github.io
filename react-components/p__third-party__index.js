(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"1EQ7":function(e,t,a){"use strict";var n=(e,t)=>new Promise((a=>{setTimeout((()=>a(e())),t)}));t["a"]=n},3:function(e,t){},4:function(e,t){},"4T8v":function(e,t,a){},5:function(e,t){},6:function(e,t){},7:function(e,t){},8:function(e,t){},CPl0:function(e,t,a){e.exports={root:"root___33f24",front:"front___Pz72T",label:"label___3soUH",time:"time___udqxe",content:"content___1yoPg"}},FKhJ:function(e,t,a){},JhWu:function(e,t,a){},SBRE:function(e,t,a){e.exports={tabsWrap:"tabsWrap___3o9af",deafultTabs:"deafultTabs___1xkIx",tabList:"tabList___3bu_7",tab:"tab___2dz15",active:"active___1qo7A",indicator:"indicator___1QSHS"}},Tj5L:function(e,t,a){"use strict";var n=a("arx1"),r=a("DREN"),l=a("Nx7n"),c=a("xwgP"),o=a.n(c),i=a("jK+o"),s=a.n(i);function u(e){var t=e.activeStyle,a=e.activeClassName,i=e.style,u=e.className,m=e.children,d=Object(l["a"])(e,["activeStyle","activeClassName","style","className","children"]),p=Object(c["useState"])(!1),f=Object(r["a"])(p,2),b=f[0],v=f[1],h=Object(n["a"])({},i);return b&&(h=Object(n["a"])(Object(n["a"])({},h),t)),o.a.cloneElement(m,Object(n["a"])(Object(n["a"])({},m.props),{},{style:h,className:s()(u,b?[a]:void 0),onMouseDown:()=>v(!0),onMouseUp:()=>v(!1),onMouseMove:()=>v(!1),onTouchStart:()=>v(!0),onTouchMove:()=>v(!1),onTouchEnd:()=>v(!1)},d))}t["a"]=u},Xa7E:function(e,t,a){"use strict";var n=a("xwgP"),r=a.n(n),l=e=>{var t=e.href,a=e.text,n=e.children;return r.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},a||n||t)};t["a"]=l},YkaV:function(e,t,a){e.exports={root:"root___kOfBI"}},hWs2:function(e,t,a){e.exports={pageControl:"pageControl___3BS5P",button:"button___1zihu",active:"active___2bo5A",text:"text___2L2Rf"}},kUTx:function(e,t,a){"use strict";var n=a("xwgP"),r=a.n(n),l=a("jK+o"),c=a.n(l),o=a("YkaV"),i=a.n(o);class s extends r.a.Component{render(){var e=this.props,t=e.children,a=e.className;return r.a.createElement("div",{className:c()(i.a.root,a)},t)}}var u=s;t["a"]=u},lgAU:function(e,t,a){"use strict";a.r(t);var n=a("xwgP"),r=a.n(n),l=a("tiwV"),c=a("sEgR"),o=a("kUTx"),i=a("Xa7E"),s=a("arx1"),u=a("DREN"),m=a("jK+o"),d=a.n(m);function p(){var e=window.navigator.userAgent,t=e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1,a=e.indexOf("Edge")>-1&&!t,n=e.indexOf("Trident")>-1&&e.indexOf("rv:11.0")>-1;if(t){var r=new RegExp("MSIE (\\d+\\.\\d+);");r.test(e);var l=parseFloat(RegExp["$1"]);return 7===l?7:8===l?8:9===l?9:10===l?10:6}return a?"edge":n?11:-1}var f=p(),b=-1!==f&&"edge"!==f,v=(e,t,a)=>{if(e){var n=e.style;n[t]=a}},h=(a("JhWu"),e=>{var t=e.style,a=void 0===t?{}:t,l=e.className,c=void 0===l?"":l,o=e.play,i=void 0===o||o,m=e.pauseOnHover,p=void 0!==m&&m,f=e.pauseOnClick,h=void 0!==f&&f,g=e.direction,E=void 0===g?"left":g,y=e.speed,w=void 0===y?20:y,O=e.delay,j=void 0===O?0:O,_=e.loop,x=void 0===_?0:_,P=e.onFinish,C=e.onCycleComplete,N=e.children,k=Object(n["useState"])(0),S=Object(u["a"])(k,2),R=S[0],T=S[1],A=Object(n["useState"])(0),I=Object(u["a"])(A,2),L=I[0],M=I[1],B=Object(n["useState"])(0),U=Object(u["a"])(B,2),D=U[0],z=U[1],q=Object(n["useState"])(!1),F=Object(u["a"])(q,2),H=F[0],V=F[1],W=Object(n["useRef"])(null),K=Object(n["useRef"])(null),Y=Object(n["useRef"])(null),J=()=>{K.current&&W.current&&(T(W.current.getBoundingClientRect().width),M(K.current.getBoundingClientRect().width)),z(L<R?R/w:L/w),b&&Q()},Q=()=>{setTimeout((()=>{if(D){var e=x?"".concat(x):"infinite",t=Math.round(D),a="scroll ".concat(t,"s linear ").concat(j,"s ").concat(e);v(K.current,"animation",a),v(Y.current,"animation",a)}else v(K.current,"animation","none"),v(Y.current,"animation","none")}),0)};Object(n["useEffect"])((()=>(J(),window.addEventListener("resize",J),()=>{window.removeEventListener("resize",J)}))),Object(n["useEffect"])((()=>{V(!0)}),[]);var X={["--play"]:i?"running":"paused",["--direction"]:"left"===E?"normal":"reverse",["--duration"]:"".concat(D,"s"),["--delay"]:"".concat(j,"s"),["--iteration-count"]:x?"".concat(x):"infinite"};return r.a.createElement(n["Fragment"],null,H?r.a.createElement("div",{ref:W,style:Object(s["a"])(Object(s["a"])({},a),{},{["--pause-on-hover"]:p?"paused":"running",["--pause-on-click"]:h?"paused":"running"}),className:d()(c,"marquee-container")},r.a.createElement("div",{ref:K,style:X,className:d()("marquee",{"marquee-default":!b}),onAnimationIteration:C,onAnimationEnd:P},N),r.a.createElement("div",{style:X,ref:Y,className:d()("marquee",{"marquee-default":!b})},N)):null)}),g=h,E=g,y=()=>r.a.createElement(c["a"],{label:"react-fast-marquee \u6587\u5b57\u8dd1\u9a6c\u706f",time:"2022-02-15"},r.a.createElement(E,null,"Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed erat diam, blandit eget felis aliquam, rhoncus varius urna. Donec tellus sapien, sodales eget ante vitae, feugiat ullamcorper urna. Praesent auctor dui vitae dapibus eleifend. Proin viverra mollis neque, ut ullamcorper elit posuere eget."),r.a.createElement(i["a"],{href:"https://github.com/justin-chu/react-fast-marquee"},"react-fast-marquee github"),r.a.createElement(o["a"],null,"\u4fee\u6539\u4e86\u90e8\u5206\u4ee3\u7801\uff0c\u517c\u5bb9\u4e86IE11\u3002")),w=()=>r.a.createElement(c["a"],{label:"m-pull-to-refresh",time:"2021-06-24"},r.a.createElement(i["a"],{href:"https://lemonreds.github.io/demo/m-pull-to-refresh/index.html"},"LIVE DEMO"),r.a.createElement("br",null),r.a.createElement(i["a"],{href:"https://github.com/Lemonreds/m-pull-to-refresh"},"Github Repo"),r.a.createElement(o["a"],null,"\u4e00\u4e2a\u652f\u6301\u4e0b\u62c9\u5237\u65b0\u3001\u4e0a\u62c9\u52a0\u8f7d\u7684 React \u79fb\u52a8\u7aef\u7ec4\u4ef6\u3002")),O=a("r3Ns");class j extends n["Component"]{shouldComponentUpdate(e){return e.shouldUpdate}render(){var e=this.props.render;return e()}}var _=a("nOi+"),x=e=>{var t=Object(n["useRef"])();return Object(n["useEffect"])((()=>{t.current=e}),[e]),t.current},P=x,C=()=>{var e=Object(n["useState"])("\u6211\u662f propA"),t=Object(u["a"])(e,2),a=t[0],l=t[1],i=Object(n["useState"])("\u6211\u662f propB"),s=Object(u["a"])(i,2),m=s[0],d=s[1],p=P(a);return r.a.createElement(c["a"],{label:"StaticRenderer\uff0c\u624b\u52a8\u89e6\u53d1react\u7684\u66f4\u65b0\u65f6\u673a",time:"2021-05-24"},r.a.createElement(O["a"],null,"\u6837\u4f8b\uff1a"),r.a.createElement("pre",null,"\n        <StaticRenderer\n          propA={propA}\n          propB={propB}\n          shouldUpdate={shouldUpdate}\n          render={() => {\n            window.console.log('rendered');\n            return <div>{propA}</div>;\n          }}\n        />\n\n        const [propA, setPropA] = useState('\u6211\u662f propA');\n        const [propB, setPropB] = useState('\u6211\u662f propB');\n        const prevPropA = usePrevious(propA);\n\n        const shouldUpdate = prevPropA !== propA;\n        \u53ea\u4f1a\u5728propA\u6539\u53d8\u7684\u65f6\u5019\u91cd\u65b0render\uff0c\u5176\u4ed6\u65f6\u673a\u4e0d\u4f1arender\n        "),r.a.createElement(O["a"],null,"\u7ec4\u4ef6\u6e32\u67d3\u5185\u5bb9\uff1a"),r.a.createElement(j,{propA:a,propB:m,shouldUpdate:p!==a,render:()=>(window.console.log("rendered"),r.a.createElement("div",null,a))}),r.a.createElement("div",{style:{height:40}}),r.a.createElement(_["a"],{onClick:()=>l("\u66f4\u65b0propA, ".concat(Math.random().toFixed(4))),style:{marginRight:24}},"\u66f4\u65b0propA"),r.a.createElement(_["a"],{onClick:()=>d("\u66f4\u65b0propB, ".concat(Math.random().toFixed(4)))},"\u66f4\u65b0propB"),r.a.createElement(o["a"],null,"react\u7ec4\u4ef6\u4e2d\uff0c props\u6216state\u53d1\u751f\u53d8\u5316\u540e\uff0c\u90fd\u4f1a\u91cd\u65b0\u6267\u884c\u7ec4\u4ef6\u7684render\u65b9\u6cd5\uff0c\u8ba1\u7b97dom\u5dee\u5f02\uff0c\u7136\u540e\u5c06\u5dee\u5f02\u66f4\u65b0\u5230\u89c6\u56fe\u4e0a\u3002 \u4e00\u4e9b\u7ec4\u4ef6\u7528\u4e0d\u5230\u7684props,state\u6539\u53d8\u540e\uff0c\u4e5f\u540c\u6837\u4f1a\u6267\u884crender\u3002\u5982\u4f55\u6709\u6548\u5730\u51cf\u5c11\u8fd9\u4e9b\u65e0\u7528\u7684render\u6b21\u6570\uff0c\u662freact\u7ec4\u4ef6\u6027\u80fd\u4f18\u5316\u7684\u4e00\u4e2a\u5b9e\u6218\u3002 taticRenderer\uff0c\u662f\u4ee5\u4e0a\u60c5\u51b5\u7684\u4e00\u4e2a\u901a\u7528\u66b4\u529b\u7684\u65b9\u6cd5\uff0c\u5b83\u662f\u4e00\u4e2a\u8fd9\u6837\u7684\u7ec4\u4ef6\uff0c\u901a\u8fc7\u4f20\u5165\u4e00\u4e2ashouldUpdate\u51fd\u6570\uff0c\u6765\u8986\u76d6React\u4e2d\u9ed8\u8ba4\u7684shouldComponentUpdate\u6765\u5b9e\u73b0\uff0c\u8be5\u7ec4\u4ef6\u53ea\u4f1a\u5728shouldUpdate\u8fd4\u56detrue\u7684\u65f6\u5019\u91cd\u65b0\u6e32\u67d3\u3002"))},N=a("YsHx"),k=a("HKMg"),S=a("MvNr"),R=a("rezH"),T=a.n(R);N["a"].use(k["a"]),N["a"].use(S["a"]);var A=Object(n["memo"])((e=>{var t,a=e.beforePullDown,n=e.isPullingDown;return t=a?"\u4e0b\u62c9\u53ef\u4ee5\u5237\u65b0":n?"\u52a0\u8f7d\u4e2d...":"\u52a0\u8f7d\u6210\u529f",t}),((e,t)=>{var a=e.beforePullDown,n=e.isPullingDown;return a===t.beforePullDown&&n===t.isPullingDown})),I=Object(n["memo"])((e=>{var t=e.isPullUpLoad,a=t?"\u52a0\u8f7d\u4e2d....":"\u52a0\u8f7d\u66f4\u591a";return a}),((e,t)=>{var a=e.isPullUpLoad;return a===t.isPullUpLoad})),L=800,M=60,B=56;function U(e){var t=e.children,a=e.refresh,l=e.loadMore,c=Object(n["useRef"])(),o=Object(n["useRef"])(null),i=Object(n["useState"])(!0),s=Object(u["a"])(i,2),m=s[0],d=s[1],p=Object(n["useState"])(!1),f=Object(u["a"])(p,2),b=f[0],v=f[1],h=Object(n["useState"])(!1),g=Object(u["a"])(h,2),E=g[0],y=g[1],w=()=>{d(!1),v(!0),a().then((()=>{v(!1),setTimeout((()=>{d(!0),o.current.finishPullDown(),o.current.refresh()}),L)}))},O=()=>{y(!0),l().then((()=>{y(!1),o.current.finishPullUp(),o.current.refresh()}))};return Object(n["useEffect"])((()=>{var e={scrollY:!0,bounceTime:L,useTransition:!1,click:!0};a&&(e.pullDownRefresh={threshold:M,stop:B}),l&&(e.pullUpLoad=!0);var t=new N["a"](c.current,e);return o.current=t,t.on("pullingDown",w),t.on("pullingUp",O),()=>{t.off("pullingDown",w),t.off("pullingUp",O)}}),[]),r.a.createElement("div",{className:T.a.container},r.a.createElement("div",{className:T.a.bswrapper,ref:c},r.a.createElement("div",{className:T.a.inner},a&&r.a.createElement("div",{className:T.a.header},r.a.createElement(A,{beforePullDown:m,isPullingDown:b})),r.a.createElement("div",{className:T.a.children},t),l&&r.a.createElement("div",{className:T.a.footer},r.a.createElement(I,{isPullUpLoad:E})))))}for(var D=U,z=a("1EQ7"),q=[],F=0;F<15;F+=1)q.push({label:F});var H=()=>{var e=Object(n["useState"])(q),t=Object(u["a"])(e,2),a=t[0],l=t[1];Object(n["useEffect"])((()=>{}),[]);var i=()=>Object(z["a"])((()=>{l(q)}),1e3),s=()=>Object(z["a"])((()=>{for(var e=[...a],t=0;t<5;t+=1)e.push({label:a.length+t});l(e)}),1e3);return r.a.createElement(c["a"],{label:"better-scroll\u7684react\u5c01\u88c5",time:"2021-05-19"},r.a.createElement(O["a"],null,"\u4f7f\u7528pull-down/pull-up,\u4e0b\u62c9\u5237\u65b0\u4ee5\u53ca\u4e0a\u62c9\u52a0\u8f7d\u76842\u4e2a\u63d2\u4ef6"),r.a.createElement("div",{style:{height:280}},r.a.createElement(D,{refresh:i,loadMore:s},a.map((e=>{var t=e.label;return r.a.createElement("div",{key:t,onClick:()=>{window.console.log(e)},style:{textAlign:"center",height:40,lineHeight:"40px"}},t)})))),r.a.createElement(o["a"],null,"better-scroll\u7684demo"))},V=a("hF+B"),W=a("Nx7n"),K=a("e1fA"),Y=a("NC0D"),J=a("z5qh"),Q=a("jW5+"),X=a("JVD1");a("Pkkh"),a("4T8v");K["a"].use([Y["a"],J["a"]]);var G=a("SBRE"),Z=a.n(G);function $(e){var t=e.tabs,a=e.current,l=e.page,c=e.onTabChange,o=t.length,i=Object(n["useMemo"])((()=>{var e=100/l,t=Math.round(l/2),n=0,r=o-1,c=0,i=a<n+t,s=a>r-t;c=i?0:s?r-t-1:a-1,c=Math.max(0,c);var u=(a-c)%l*e;return[e,c,u]}),[t,l,a]),s=Object(u["a"])(i,3),m=s[0],p=s[1],f=s[2];return r.a.createElement("div",{className:Z.a.deafultTabs},r.a.createElement("div",{className:Z.a.tabsWrap},r.a.createElement("div",{className:Z.a.tabList,style:{transform:"translate3d(-".concat(p*m,"%, 0px, 0px)")}},t.map(((e,t)=>{var n=e.title,l=e.key,o=void 0===l?t:l,i=a===t;return r.a.createElement("div",{className:d()(Z.a.tab,{[Z.a.active]:i}),key:o,style:{width:"".concat(m,"%")},onClick:()=>c(t)},n)}))),r.a.createElement(ee,{width:m,left:f})))}function ee(e){var t=e.width,a=e.left;return r.a.createElement("div",{className:Z.a.indicator,style:{width:"calc(0.5 * ".concat(t,"%)"),left:"calc(0.25 * ".concat(t,"% + ").concat(a,"%)")}})}function te(e){var t=e.children,a=e.className,l=e.style,c=e.tabs,o=e.page,i=void 0===o?4:o,s=Object(W["a"])(e,["children","className","style","tabs","page"]),m=Object(n["useRef"])(null),p=Object(n["useState"])(0),f=Object(u["a"])(p,2),b=f[0],v=f[1],h=()=>{var e,t;(null===(e=m.current)||void 0===e?void 0:e.current)!==b&&v(null===(t=m.current)||void 0===t?void 0:t.activeIndex)},g=e=>{v(e),m.current.slideTo(e)};return r.a.createElement("div",{className:d()(Z.a.tabsWrap,a),style:l},r.a.createElement($,{tabs:c,current:b,page:i,onTabChange:g}),r.a.createElement("div",{className:Z.a.content},r.a.createElement(Q["a"],Object(V["a"])({},s,{onSlideChange:function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];h(a),e.onSlideChange&&e.onSlideChange(a)},onSwiper:t=>{m.current=t,e.onSwiper&&e.onSwiper(t)}}),r.a.Children.map(t,((e,t)=>{var a;return r.a.createElement(X["a"],{key:(null===(a=c[t])||void 0===a?void 0:a.key)||t},e)})))))}var ae=te,ne=ae,re=["#8868ff","#24cdd0","#ffc84e","#fe657f","#748cfd"],le=[{title:"Tab - 0",key:"0"},{title:"Tab - 1",key:"1"},{title:"Tab - 2",key:"2"},{title:"Tab - 3",key:"3"},{title:"Tab - 4",key:"4"},{title:"Tab - 5",key:"5"},{title:"Tab - 6",key:"6"},{title:"Tab - 7",key:"7"},{title:"Tab - 8",key:"8"}],ce=()=>r.a.createElement(c["a"],{label:"Swiper.js",time:"-"},r.a.createElement(ne,{tabs:le,page:4},new Array(le.length).fill(!0).map(((e,t)=>r.a.createElement("div",{style:{background:re[t%re.length],height:220,fontSize:14,display:"flex",alignItems:"center",justifyContent:"center"}},t)))),r.a.createElement(o["a"],null,"[2021-05-26] \u57fa\u4e8eSwiper\u5c01\u88c5\u7684Tabs\u7ec4\u4ef6"),r.a.createElement(Q["a"],{spaceBetween:20,slidesPerView:1,pagination:{clickable:!0},height:220},new Array(re.length).fill(!0).map(((e,t)=>r.a.createElement(X["a"],{key:t},r.a.createElement("div",{style:{background:re[t],height:300,fontSize:14,display:"flex",alignItems:"center",justifyContent:"center"}},t))))),r.a.createElement(o["a"],null,"[2021-05-14] \u57fa\u7840\u8f6e\u64ad\u56fe"));function oe(e){return new Promise((t=>{var a=document.createElement("script");a.src=e,a.setAttribute("charset","utf-8"),document.body.appendChild(a),a.onload=()=>{t()}}))}function ie(e){return new Promise((t=>{var a=document.createElement("link");a.type="text/css",a.rel="stylesheet",a.href=e,document.head.appendChild(a),a.onload=()=>{t()}}))}var se={stylelink:"https://g.alicdn.com/de/prismplayer/2.9.3/skins/default/aliplayer-min.css",script:"https://g.alicdn.com/de/prismplayer/2.9.3/aliplayer-min.js"},ue=[{name:"bigPlayButton",align:"cc"},{name:"H5Loading",align:"cc"},{name:"errorDisplay",align:"tlabs",x:0,y:0},{name:"infoDisplay"},{name:"tooltip",align:"blabs",x:0,y:56},{name:"thumbnail"},{name:"controlBar",align:"blabs",x:0,y:0,children:[{name:"progress",align:"blabs",x:0,y:44},{name:"playButton",align:"tl",x:15,y:12},{name:"timeDisplay",align:"tl",x:10,y:7},{name:"fullScreenButton",align:"tr",x:10,y:12},{name:"volume",align:"tr",x:5,y:10}]}],me=()=>window.Aliplayer?Promise.resolve():Promise.all([ie(se.stylelink),oe(se.script)]),de=(a("FKhJ"),r.a.forwardRef(((e,t)=>{var a=e.id,l=e.config,c=e.onInstance,o=Object(W["a"])(e,["id","config","onInstance"]),i=Object(n["useRef"])(null);return Object(n["useImperativeHandle"])(t,(()=>({getAliPlayerInstance:()=>i.current,init:()=>{window.Aliplayer&&new window.Aliplayer(Object(s["a"])({id:a,skinLayout:ue},l),(e=>{i.current=e,window.console.log("init player success"),c&&c(i.current)}))}})),[]),r.a.createElement("div",Object(V["a"])({id:a},o))}))),pe=de,fe=pe,be={width:"100%",height:"200px",source:"//player.alicdn.com/video/aliyunmedia.mp4",autoplay:!1,isLive:!1,rePlay:!1,showBuffer:!0,snapshot:!1,showBarTime:5e3,useFlashPrism:!1,playsinline:!0,preload:!0},ve=()=>{var e=Object(n["useRef"])(null);return Object(n["useEffect"])((()=>{me().then((()=>{var t;null===(t=e.current)||void 0===t||t.init()}))}),[]),r.a.createElement(c["a"],{label:"AliPlayer \u89c6\u9891\u64ad\u653e\u5668",time:"2021-05-10"},r.a.createElement(fe,{id:"aplayer",ref:e,style:{borderRadius:8,height:220},config:be}),r.a.createElement(o["a"],null,"AliPlayer,\u57fa\u4e8ealiplayer\u7684\u4e00\u4e2areact\u5c01\u88c5\u4f8b\u5b50\uff0c\u53ef\u4ee5\u624b\u52a8\u9009\u62e9\u52a0\u8f7daliplayerSDK(\u5305\u62ecjs\u548ccss)\u7684\u65f6\u673a\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u5199\u5728\u5168\u5c40\u7684index.html\u6a21\u7248\u4e2d\u3002"))},he=a("5xpe"),ge=a("Tj5L"),Ee=a("hWs2"),ye=a.n(Ee),we=e=>{var t=e.pageNumber,a=e.numPages,n=e.onPrev,l=e.onNext,c=1!==t,o=t!==a;return r.a.createElement("div",{className:ye.a.pageControl},r.a.createElement(ge["a"],{activeClassName:ye.a.active},r.a.createElement("button",{className:ye.a.button,type:"button",onClick:()=>{c&&n&&n()}},"prev")),r.a.createElement("span",{className:ye.a.text},t,"of",a),r.a.createElement(ge["a"],{activeClassName:ye.a.active},r.a.createElement("button",{className:ye.a.button,type:"button",onClick:()=>{o&&l&&l()}},"next")))},Oe=we,je=Oe;he["c"].GlobalWorkerOptions.workerSrc="/pdf.worker.js";var _e=e=>{var t=e.url,a=Object(n["useRef"])(null),l=Object(n["useState"])(1),c=Object(u["a"])(l,2),o=c[0],i=c[1],s=Object(n["useState"])(null),m=Object(u["a"])(s,2),d=m[0],p=m[1];function f(e){var t=e.numPages;p(t)}return r.a.createElement(he["a"],{file:t,onLoadSuccess:f,loading:"\u52a0\u8f7d\u4e2d...",error:"\u52a0\u8f7d\u5931\u8d25",noData:"\u6682\u65e0\u8bb0\u5f55"},d&&r.a.createElement(je,{pageNumber:o,numPages:d,onPrev:()=>i(o-1),onNext:()=>i(o+1)}),r.a.createElement(he["b"],{inputRef:a,pageNumber:o}))},xe=_e,Pe=xe,Ce=()=>r.a.createElement(c["a"],{label:"PdfViewer PDF\u9605\u8bfb\u5668",time:"2021-05-10"},r.a.createElement(Pe,{url:"/test.pdf"}),r.a.createElement(o["a"],null,"PdfViewer,\u4f7f\u7528react-pdf\u7684\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u5e76\u505a\u4e86\u4e00\u4e2a\u5206\u9875\u5668\u3002")),Ne=e=>{var t=e.children;return r.a.createElement("span",{style:{color:"#d23669"}},t)},ke=a("9kvl"),Se=a("RDb2"),Re=a("Lvw/"),Te=a("w3la"),Ae=a("q5+0"),Ie={"zh-CN":{content:"\u8c6b\u7ae0\u6545\u90e1\uff0c\u6d2a\u90fd\u65b0\u5e9c\u3002\u661f\u5206\u7ffc\u8f78\uff0c\u5730\u63a5\u8861\u5e90\u3002",desc:"\u6211\u662f\u4e00\u6bb5\u5185\u5bb9"},"zh-MO":{content:"\u8c6b\u7ae0\u6545\u90e1\uff0c\u6d2a\u90fd\u65b0\u5e9c\u3002\u661f\u5206\u7ffc\u8eeb\uff0c\u5730\u63a5\u8861\u5eec\u3002",desc:"\u6211\u662f\u4e00\u6bb5\u5167\u5bb9"},"en-US":{content:"The old county of Yuzhang, the new mansion of Hongdu. The star points to Wing Zhen, and the ground connects to Heng Lu.",desc:"I am a piece of content"}},Le={"zh-CN":"\u7b80\u4f53","zh-MO":"\u7e41\u9ad4","en-US":"English"},Me=e=>{if(!Le[e])throw new Error("locale [".concat(e,"] must one of [zh-CN,zh-MO,en-US] "));return e},Be=r.a.createContext({locale:"zh-MO",lang:"\u7e41\u9ad4",setLocale:()=>{}}),Ue=Object(Se["c"])(),De=e=>{var t=Me(e);return window.localStorage.setItem("intl-locale",t),Object(Re["a"])({locale:t,messages:Ie[t]},Ue)},ze=()=>window.localStorage.getItem("intl-locale")||"zh-MO",qe=e=>{var t=e.children,a=Object(Ae["k"])(),l=a.query,c=Object(n["useState"])((()=>ze(l))),o=Object(u["a"])(c,2),i=o[0],s=o[1],m=Object(n["useState"])((()=>De(i))),d=Object(u["a"])(m,2),p=d[0],f=d[1],b=e=>{var t=Me(e);t!==i&&(s(t),f(De(t)))};return r.a.createElement(Be.Provider,{value:{locale:i,lang:Le[i],setLocale:b}},r.a.createElement(Te["b"],{value:p},t))},Fe=r.a.memo(qe),He=De(ze());console.log(He.formatMessage({id:"content"}));var Ve=()=>{var e=Object(ke["c"])(),t=r.a.useContext(Be);return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement(Ne,null,"\u5f53\u524d\u8bed\u8a00\uff1a"),t.lang),r.a.createElement("p",null,r.a.createElement(Ne,null,"\u591a\u8bed\u8a00\u6587\u672c1\uff1a"),e.formatMessage({id:"content"})),r.a.createElement("p",null,r.a.createElement(Ne,null,"\u591a\u8bed\u8a00\u6587\u672c2\uff1a"),e.formatMessage({id:"desc"})),r.a.createElement("button",{type:"button",onClick:()=>{t.setLocale("zh-CN")},style:{marginBottom:38,display:"inline-block",width:200,height:100,marginRight:12,background:"#e4edf7"}},"\u66f4\u6539\u8bed\u8a00\u6210 zhCN"),r.a.createElement("button",{type:"button",onClick:()=>{t.setLocale("zh-MO")},style:{marginBottom:38,display:"inline-block",width:200,height:100,marginRight:12,background:"#e4edf7"}},"\u66f4\u6539\u8bed\u8a00\u6210 zhMo"),r.a.createElement("button",{type:"button",onClick:()=>{t.setLocale("en-US")},style:{marginBottom:38,display:"inline-block",width:200,height:100,marginRight:12,background:"#e4edf7"}},"\u66f4\u6539\u8bed\u8a00\u6210 en-US"))},We=()=>r.a.createElement(Fe,null,r.a.createElement(Ve,null)),Ke=()=>r.a.createElement(c["a"],{label:"react-intl \u7684\u591a\u8bed\u8a00\u65b9\u6848",time:"2021-04-14"},r.a.createElement(We,null),r.a.createElement(O["a"],null,"\u7ec4\u4ef6\u5185\u8c03\u7528"),r.a.createElement("pre",null,"\n        import IntlProvider, { IntlContext, getIntl, getLocale } from './IntlProvider';\n        const Component = () => {\n            const intl = useIntl();\n            const intlCtx = React.useContext(IntlContext);\n            return <div> {intl.formatMessage({ id: 'content' })}</div>\n        }\n        "),r.a.createElement(O["a"],null,"\u975e\u7ec4\u4ef6\u8c03\u7528"),r.a.createElement("pre",null,"\n        import IntlProvider, { IntlContext, getIntl, getLocale } from './IntlProvider';\n        const _intl = getIntl(getLocale());\n        _intl.formatMessage({\n          id: 'content',\n        });\n        "),r.a.createElement(o["a"],null,"react-intl\u591a\u8bed\u8a00\u5c01\u88c5\u7684\u65b9\u6848\uff0c\u63d0\u4f9b\u4e86",r.a.createElement(Ne,null,"\u7ec4\u4ef6\u5185\u8c03\u7528"),"\u4ee5\u53ca",r.a.createElement(Ne,null,"\u975e\u7ec4\u4ef6\u8c03\u7528"),"\u4e24\u79cd\u65b9\u5f0f\u5c55\u793a\u6587\u6848; \u901a\u8fc7",r.a.createElement(Ne,null,"useContext(IntlContext).setLocale(zh-en) "),"\u6765\u5207\u6362\u591a\u8bed\u8a00")),Ye=[y,w,C,H,ce,ve,Ce,Ke];t["default"]=()=>r.a.createElement(l["a"],{comps:Ye})},"nOi+":function(e,t,a){"use strict";var n=a("hF+B"),r=a("Nx7n"),l=a("xwgP"),c=a.n(l),o=a("sRPu"),i=a.n(o),s=(e,t,a)=>{var n=t.getBoundingClientRect(),r={x:e.clientX-n.left,y:e.clientY-n.top},l=r.x,c=r.y,o=document.createElement("span");o.className=i.a.unit,o.style.left="".concat(l,"px"),o.style.top="".concat(c,"px"),a.appendChild(o);var s=setTimeout((()=>{a.removeChild(o),clearTimeout(s)}),450);return s},u="--ripple-color";function m(e){var t=e.children,a=e.style,o=e.onClick,m=e.rippleColor,d=Object(r["a"])(e,["children","style","onClick","rippleColor"]),p=Object(l["useRef"])(null),f=Object(l["useRef"])(null);Object(l["useEffect"])((()=>{if(m){var e=p.current;e.style.setProperty(u,m)}}),[]);var b=e=>{s(e,p.current,f.current),o instanceof Function&&o(e)};return c.a.createElement("button",Object(n["a"])({ref:p,className:i.a.root,type:"button",onClick:b,style:a},d),c.a.createElement("span",{className:i.a.children},t),c.a.createElement("span",{className:i.a.ripple,ref:f}))}var d=m;t["a"]=d},orjh:function(e,t,a){e.exports={root:"root___2edV8"}},r3Ns:function(e,t,a){"use strict";var n=a("xwgP"),r=a.n(n),l=a("wiyY"),c=a.n(l);t["a"]=e=>{var t=e.children;return r.a.createElement("div",{className:c.a.root},t)}},rezH:function(e,t,a){e.exports={container:"container___1S5yK",bswrapper:"bswrapper___1UKQs",header:"header___2qIvm",footer:"footer___3gePB"}},sEgR:function(e,t,a){"use strict";var n=a("xwgP"),r=a.n(n),l=a("jK+o"),c=a.n(l),o=a("CPl0"),i=a.n(o),s=e=>{var t=e.label,a=e.time,n=e.children,l=e.className;return r.a.createElement("section",{className:c()(l,i.a.root)},r.a.createElement("div",{className:i.a.front},r.a.createElement("h3",{className:i.a.label,id:t},t),r.a.createElement("time",{className:i.a.time},a)),r.a.createElement("div",{className:i.a.content},n))};t["a"]=s},sRPu:function(e,t,a){e.exports={root:"root___2v93X",ripple:"ripple____PcgI",unit:"unit___CVlnE"}},tiwV:function(e,t,a){"use strict";var n=a("xwgP"),r=a.n(n),l=a("orjh"),c=a.n(l);t["a"]=e=>{var t=e.comps,a=e.children;return r.a.createElement("div",{className:c.a.root},t?t.map(((e,t)=>r.a.createElement(e,{key:t}))):a)}},wiyY:function(e,t,a){e.exports={root:"root___1h4ZC"}}}]);