"use strict";(self.webpackChunkyoomer=self.webpackChunkyoomer||[]).push([[242],{5242:function(e,n,t){t.r(n),t.d(n,{default:function(){return G}});var r=t(885),s=t(2791),c="FeedView_App__zgsy5",i="FeedView_content__QdOgv",a="FeedView_sortbar__n148y",o=t(2982),u=t(6030),l="CommonFeed_CommonFeed__P8jHF",d="CommonFeed_post__UuYoi",h=t(9110),m=t(4456),f=t(2711),_=t(184),x=function(e){var n=e.sort,t=(0,m.G)(),c=((0,u.v9)((function(e){return e.baseUrl})),(0,s.useState)([])),i=(0,r.Z)(c,2),a=i[0],x=i[1],j=(0,s.useRef)(""),b=(0,m.i)({path:"/".concat(n),callback:function(e,n){var t=e.data;t.after!==j.current&&(j.current=t.after,x((function(e){var r=t.children.map((function(e){return(0,f.UE)(e.data)}));return n?(0,o.Z)(r):[].concat((0,o.Z)(e),(0,o.Z)(r))})))},afterRef:j});return(0,s.useEffect)((function(){j.current=""}),[n]),(0,s.useEffect)((function(){return b(!0)}),[t,n]),a.length?(0,_.jsxs)("div",{className:l,children:[a&&a.map((function(e,n){return(0,_.jsx)("div",{className:d,children:(0,_.jsx)(f.SO,{data:e},n)})})),a&&t&&(0,_.jsx)(h.Qj,{onObserve:function(){return b(!1)},logMessage:"in common feed"})]}):(0,_.jsx)("div",{className:l,"data-center":!0,children:(0,_.jsx)(h.aN,{})})},j="SubredditsSidebar_SubredditsSidebar__1l-VI",b=function(e){return{name:e.display_name_prefixed,icon:e.icon_img||e.community_icon||null}},v="ShowCommunities_communities__Qy+c5",S="ShowCommunities_list__RrZon",p="ShowCommunities_heading__4y0Ky",w="ShowCommunities_subreddit__GJz1H",N="ShowCommunities_icon__5SO-x",g="ShowCommunities_btn__-Pls0",y=t(501),C=function(e){var n=e.fetchSubs,t=e.isAll,r=e.subreddits;return(0,_.jsxs)("div",{className:v,children:[(0,_.jsx)("h5",{className:p,children:"My Subreddits"}),(0,_.jsx)("ul",{className:S,children:r.map((function(e){return(0,_.jsxs)("li",{className:w,children:[e.icon?(0,_.jsx)("img",{src:e.icon,alt:"",width:25,height:25,className:N}):(0,_.jsx)("div",{className:N,"data-placeholder":!0}),(0,_.jsx)(y.rU,{to:e.name,children:e.name})]})}))}),!t&&(0,_.jsx)("button",{onClick:n,className:g,children:"load more"})]})},k=function(){var e=(0,m.G)(),n=(0,u.v9)((function(e){return e.baseUrl})),t=(0,s.useRef)(""),c=(0,s.useState)([]),i=(0,r.Z)(c,2),a=i[0],l=i[1],d=(0,s.useState)(!1),h=(0,r.Z)(d,2),f=h[0],x=h[1],j=function(e){var n=e.data;n.after!==t.current&&(null===n.after&&x(!0),t.current=n.after,l((function(e){return[].concat((0,o.Z)(e),(0,o.Z)(n.children.filter((function(e){return e.data.display_name_prefixed.startsWith("r/")})).map((function(e){return b(e.data)}))))})))},v=function(){if(e&&"error"!==e&&null!==t.current){var r=t?"&after=".concat(t.current):"";fetch("".concat(n,"/subreddits/mine/subscriber?raw_json=1").concat(r),{method:"GET",headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then(j).catch((function(e){return console.log(e)}))}};return(0,s.useEffect)(v,[e]),(0,_.jsx)(C,{fetchSubs:v,isAll:f,subreddits:a})},Z="Search_container__3W0Yp",F="Search_input__0NZSN",U="Search_btn__4nr4M",E="Search_list__vqisp",R=function(){var e=(0,s.useState)(""),n=(0,r.Z)(e,2),t=n[0],c=n[1],i=(0,s.useRef)(null),a=(0,s.useState)([]),o=(0,r.Z)(a,2),u=o[0],l=o[1],d=(0,m.i)({path:"/api/search_subreddits",callback:function(e){var n=e.subreddits.sort((function(e,n){return e.subscriber_count-n.subscriber_count}));l(n);document.addEventListener("click",(function(e){i.current.contains(e.target)||l([])}))},body:new URLSearchParams("exact=false&include_over_18=true&query=".concat(t))});return(0,_.jsxs)("div",{className:Z,children:[(0,_.jsx)("input",{type:"text",value:t,onChange:function(e){return c(e.target.value)},placeholder:"search subreddits",className:F}),(0,_.jsx)("button",{onClick:d,className:U,children:(0,_.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,_.jsx)("circle",{cx:"11",cy:"11",r:"8",stroke:"currentColor",fill:"none"}),(0,_.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65",stroke:"currentColor"})]})}),!(null===u||void 0===u||!u.length)&&(0,_.jsx)("ul",{ref:i,className:E,children:u.map((function(e){return(0,_.jsx)("li",{children:(0,_.jsx)(y.rU,{to:"/r/".concat(e.name),children:e.name})})}))})]})},A=function(){return(0,_.jsxs)("aside",{className:j,children:[(0,_.jsx)(R,{}),(0,_.jsx)("hr",{}),(0,_.jsx)(k,{})]})},G=function(){var e=(0,s.useState)("best"),n=(0,r.Z)(e,2),t=n[0],o=n[1];return(0,_.jsxs)("main",{className:c,children:[(0,_.jsx)(h.JL,{}),(0,_.jsxs)("section",{"data-container":!0,className:i,children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:a,children:(0,_.jsx)(h.Mj,{changeSort:function(e){o(e)},sort:t})}),(0,_.jsx)(x,{sort:t})]}),(0,_.jsx)(A,{})]})]})}}}]);
//# sourceMappingURL=242.f72a6dda.chunk.js.map