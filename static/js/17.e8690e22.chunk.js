"use strict";(self.webpackChunkyoomer=self.webpackChunkyoomer||[]).push([[17],{17:function(e,r,t){t.r(r),t.d(r,{default:function(){return O}});var n=t(885),s=t(2791),a=t(6030),i=t(6871),o=t(5340),c="Profile_profile__hNwTQ",l="Profile_content__f1yCB",u="Profile_sortbar__PTttC",d=t(6396),h="ProfileSort_profileSort__eP3sO",f="ProfileSort_active__O0pVW",m="ProfileSort_panel__tHKJK",x="ProfileSort_btn__JqojT",j=t(184),v=function(e){var r=e.changeSort,t=e.username,a=e.sort,i=(0,o.Z)(),c=(0,s.useState)(!1),l=(0,n.Z)(c,2),u=l[0],v=l[1],p=(0,s.useRef)(null);(0,s.useEffect)((0,d.Z)({path:"/api/v1/me",callback:function(e){e.name===t&&v(!0)}}),[i]);var _=function(e){return{backgroundColor:e===a?"var(--accent-color)":"transparent",color:e===a?"var(--gray-0)":"var(--primary-color-1)"}};return(0,j.jsxs)("nav",{className:h,children:[(0,j.jsxs)("h6",{onClick:function(e){window.matchMedia("(max-width: 576px)").matches&&(e.currentTarget.classList.toggle(f),p.current.style.maxHeight?p.current.style.maxHeight="":p.current.style.maxHeight=p.current.scrollHeight+"px")},children:["Show",(0,j.jsx)("span",{"data-mobile":!0,children:(0,j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,j.jsx)("line",{x1:"12",y1:"19",x2:"12",y2:"5",stroke:"currentColor"}),"'",(0,j.jsx)("polyline",{points:"5 12 12 5 19 12",stroke:"currentColor"})]})})]}),(0,j.jsxs)("div",{className:m,ref:p,children:[(0,j.jsx)("button",{onClick:function(){return r("overview")},style:_("overview"),className:x,children:" Overview "}),(0,j.jsx)("button",{onClick:function(){return r("posts")},style:_("posts"),className:x,children:" Posts "}),(0,j.jsx)("button",{onClick:function(){return r("comments")},style:_("comments"),className:x,children:" Comments "}),u&&(0,j.jsx)("button",{onClick:function(){return r("saved")},style:_("saved"),className:x,children:"Saved"})]})]})},p=t(2982),_=t(3218),w=t(1),k={profileComment:"ProfileComment_profileComment__FY4Uu",furtherBtn:"ProfileComment_furtherBtn__89hOQ"},b=t(501),g=function(e){var r=e.data;return(0,j.jsxs)("div",{className:k.profileComment,children:[(0,j.jsxs)("div",{className:k.wrapper,children:[(0,j.jsxs)("h6",{children:["In r/",r.subreddit]}),(0,j.jsx)("p",{children:r.body})]}),(0,j.jsx)(b.rU,{to:"/post/".concat(r.linkId),className:k.furtherBtn,children:(0,j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,j.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,j.jsx)("polyline",{points:"12 5 19 12 12 19"})]})})]})},y=function(e){return{body:e.body,subreddit:e.subreddit,permalink:e.permalink,linkId:e.link_id}},C=t(9598),S={item:"ProfileFeed_item__mVJig"},N=function(e){var r=e.sort,t=e.username,i=(0,o.Z)(),c=(0,a.v9)((function(e){return e.baseUrl})),l=(0,s.useRef)(null),u=(0,s.useState)([]),d=(0,n.Z)(u,2),h=d[0],f=d[1],m=(0,s.useRef)(!1),x=function(e){if(i&&"error"!==i&&(!m.current||e)){e&&(m.current=!1,l.current=null);var n="";switch(r){case"overview":case"comments":case"saved":n=r;break;default:n="submitted"}var s=l.current?"&after=".concat(l.current):"";fetch("".concat(c,"/user/").concat(t,"/").concat(n,".json?raw_json=1").concat(s),{method:"GET",headers:{Authorization:"Bearer ".concat(i)}}).then((function(e){return e.json()})).then((function(r){return function(e,r){null===e.data.after&&(m.current=!0),l.current=e.data.after,f(r?e.data.children:function(r){return[].concat((0,p.Z)(r),(0,p.Z)(e.data.children))})}(r,e)})).catch((function(e){return console.log(e)}))}};return(0,s.useEffect)((function(){return x(!0)}),[i,r]),(0,j.jsxs)("div",{className:S.profileFeed,children:[h&&h.map((function(e,r){switch(e.kind){case"t3":return(0,j.jsx)("div",{className:S.item,children:(0,j.jsx)(w.Z,{data:(0,_.Z)(e.data)},r)});case"t1":return(0,j.jsx)("div",{className:S.item,children:(0,j.jsx)(g,{data:y(e.data)},r)});default:return null}})),!m.current&&i&&h&&(0,j.jsx)(C.Z,{onObserve:function(){return x(!1)},logMessage:"in profile feed"})]})},Z={profileSidebar:"ProfileSidebar_profileSidebar__agEnj"},P=function(e){var r=e.username,t=(0,o.Z)(),a=(0,s.useState)(),i=(0,n.Z)(a,2),c=i[0],l=i[1],u=(0,s.useState)(),h=(0,n.Z)(u,2),f=h[0],m=h[1],x=(0,s.useState)(),v=(0,n.Z)(x,2),p=v[0],_=v[1];return(0,s.useEffect)((0,d.Z)({path:"/user/".concat(r,"/about"),callback:function(e){var r=new Date(1e3*e.data.created);l(e.data.total_karma),m(e.data.icon_img),_("".concat(r.getDate(),".").concat(r.getMonth()+1,".").concat(r.getFullYear()))}}),[t]),(0,j.jsxs)("aside",{style:{border:"pink"},className:Z.profileSidebar,children:[(0,j.jsx)("h5",{className:Z.username,children:r}),f&&(0,j.jsx)("img",{src:f,alt:""}),c&&(0,j.jsxs)("div",{children:[(0,j.jsx)("h6",{children:c}),(0,j.jsx)("i",{children:"Karma"})]}),p&&(0,j.jsxs)("div",{children:[(0,j.jsx)("h6",{children:p}),(0,j.jsx)("i",{children:"Cake day"})]})]})},B=t(2013),O=function(){(0,o.Z)(),(0,a.v9)((function(e){return e.baseUrl}));var e=(0,i.UO)().name,r=(0,s.useState)("overview"),t=(0,n.Z)(r,2),d=t[0],h=t[1];return(0,j.jsxs)("main",{className:c,children:[(0,j.jsx)(B.Z,{}),(0,j.jsxs)("section",{"data-container":!0,className:l,children:[(0,j.jsxs)("section",{children:[(0,j.jsx)("div",{className:u,children:(0,j.jsx)(v,{changeSort:function(e){h(e)},username:e,sort:d})}),(0,j.jsx)(N,{sort:d,username:e})]}),(0,j.jsx)(P,{username:e})]})]})}}}]);
//# sourceMappingURL=17.e8690e22.chunk.js.map