(this.webpackJsonpwavve=this.webpackJsonpwavve||[]).push([[0],{25:function(e,t,c){},32:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(26),a=c.n(i),r=c(5),j=c(6),l=(c(32),c(0));var o=function(){return Object(l.jsxs)("header",{children:[Object(l.jsx)("nav",{children:Object(l.jsx)("div",{className:"snb w1240",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"\ub85c\uadf8\uc778"}),Object(l.jsx)("li",{children:"\uc774\uc6a9\uad8c"}),Object(l.jsx)("li",{children:"\ucfe0\ud3f0\xb7\ucf54\uc778"}),Object(l.jsx)("li",{children:"\uc6e8\uc774\ube0c\uc628"}),Object(l.jsx)("li",{children:"\uc774\ubca4\ud2b8"})]})})}),Object(l.jsx)("nav",{children:Object(l.jsxs)("div",{className:"gnb w1240",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("img",{src:"./images/\ub85c\uace0.svg",alt:"\ub85c\uace0"})})}),Object(l.jsxs)("ul",{className:"menu",children:[Object(l.jsx)("li",{className:"currentMenu",children:Object(l.jsx)(r.b,{to:"/",children:"\ud648"})}),Object(l.jsx)("li",{children:"\uce74\ud14c\uace0\ub9ac"}),Object(l.jsx)("li",{children:"LIVE"}),Object(l.jsx)("li",{children:"MY"})]}),Object(l.jsx)("div",{className:"search",children:Object(l.jsx)("i",{className:"fas fa-search"})})]})})]})},d=c(9),b=c(56),h=c(51),O=c(52),x=c(53),m=c(54),u=c(57),A=c(55);c(19),c(42);function v(e){var t=e.swiperRef,c=Object(s.useState)(!0),n=Object(d.a)(c,2),i=n[0],a=n[1];return Object(l.jsx)("button",{className:"autoplayBtn",onClick:function(){var e=t.current;i?e.autoplay.stop():e.autoplay.start(),a(!i)},children:i?Object(l.jsx)("i",{className:"fas fa-pause fa-xs"}):Object(l.jsx)("i",{className:"fas fa-play fa-xs"})})}b.a.use([h.a,O.a,x.a,m.a]);var p=function(){var e=Object(s.useRef)(null);return Object(l.jsx)("section",{className:"swipe_section",children:Object(l.jsx)("div",{className:"swiper mainSwiper",children:Object(l.jsxs)(u.a,{className:"mainSwiper",loop:!0,slidesPerView:1.5,centeredSlides:!0,effect:"coverflow",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},autoplay:{delay:4e3,disableOnInteraction:!1},pagination:{clickable:!0},navigation:!0,onSwiper:function(t){e.current=t},children:[Object(l.jsx)(A.a,{children:Object(l.jsxs)(r.b,{to:"/movie/13106",children:[Object(l.jsx)("img",{src:"./images/avengers1.jpg",alt:"id:13106"}),Object(l.jsx)("div",{className:"slide_title",children:"Avengers: Endgame"}),Object(l.jsx)("div",{className:"slide_summary",children:"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions..."})]})}),Object(l.jsx)(A.a,{children:Object(l.jsxs)(r.b,{to:"/movie/3045",children:[Object(l.jsx)("img",{src:"./images/avengers2.jpg",alt:"id:3045"}),Object(l.jsx)("div",{className:"slide_title",children:"The Avengers"}),Object(l.jsx)("div",{className:"slide_summary",children:"Loki, the adopted brother of Thor, teams-up with the Chitauri Army and uses the Tesseract's power to travel from Asgard to Midgard to plot the invasion of Earth and become a king. The director of the agency S.H.I.E.L.D., Nick Fury..."})]})}),Object(l.jsx)(A.a,{children:Object(l.jsxs)(r.b,{to:"/movie/8462",children:[Object(l.jsx)("img",{src:"./images/avengers3.jpg",alt:"id:8462"}),Object(l.jsx)("div",{className:"slide_title",children:"Avengers: Infinity War"}),Object(l.jsx)("div",{className:"slide_summary",children:"s the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect..."})]})}),Object(l.jsx)(A.a,{children:Object(l.jsxs)(r.b,{to:"/movie/4522",children:[Object(l.jsx)("img",{src:"./images/avengers4.jpg",alt:"id:4522"}),Object(l.jsx)("div",{className:"slide_title",children:"Avengers: Age of Ultron"}),Object(l.jsx)("div",{className:"slide_summary",children:"Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, The Avengers go into action to try and defeat a virtually impossible enemy together. Earth's mightiest heroes must come together once again to protect the world from global extinction."})]})}),Object(l.jsx)(v,{swiperRef:e})]})})})},f=c(12),g=c(14);c(25);b.a.use([h.a]);var w=function(){var e=Object(s.useState)(!0),t=Object(d.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)([]),a=Object(d.a)(i,2),j=a[0],o=a[1];return Object(s.useEffect)((function(){var e=!0,t=function(){var t=Object(g.a)(Object(f.a)().mark((function t(){var c,s;return Object(f.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/list_movies.json?sort_by=like_count");case 2:return c=t.sent,t.next=5,c.json();case 5:s=t.sent,e&&(o(s.data.movies),n(!1));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t(),function(){e=!1}}),[]),c?Object(l.jsx)("h1",{className:"w1240",style:{fontSize:"32px",paddingTop:"20px",textAlign:"center"},children:"Loading..."}):Object(l.jsxs)("section",{className:"favorite w1240",children:[Object(l.jsxs)("div",{className:"section_title",children:[Object(l.jsx)("h1",{children:"\ubbff\uace0 \ubcf4\ub294 \uc6e8\uc774\ube0c \uc5d0\ub514\ud130 \ucd94\ucc9c\uc791"}),Object(l.jsxs)("h2",{children:["\ub354\ubcf4\uae30",Object(l.jsx)("i",{class:"fas fa-angle-right"})]})]}),Object(l.jsx)("div",{className:"swiper subSwiper",children:Object(l.jsx)(u.a,{className:"subSwiper",spaceBetween:13,slidesPerView:5,centeredSlides:!1,slidesPerGroup:5,navigation:!0,children:j.map((function(e){return Object(l.jsx)(A.a,{children:Object(l.jsx)(r.b,{to:"/movie/".concat(e.id),children:Object(l.jsx)("img",{src:e.large_cover_image,alt:e.title})})},e.id)}))})})]})};b.a.use([h.a]);var N=function(){var e=Object(s.useState)(!0),t=Object(d.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)([]),a=Object(d.a)(i,2),j=a[0],o=a[1];return Object(s.useEffect)((function(){var e=!0,t=function(){var t=Object(g.a)(Object(f.a)().mark((function t(){var c,s;return Object(f.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/list_movies.json?sort_by");case 2:return c=t.sent,t.next=5,c.json();case 5:s=t.sent,e&&(o(s.data.movies),n(!1));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t(),function(){e=!1}}),[]),c?Object(l.jsx)("h1",{className:"w1240",style:{fontSize:"32px",paddingTop:"20px",textAlign:"center"},children:"Loading..."}):Object(l.jsxs)("section",{className:"favorite w1240",children:[Object(l.jsxs)("div",{className:"section_title",children:[Object(l.jsx)("h1",{children:"\ub530\ub048\ub530\ub048 \uc5c5\ub370\uc774\ud2b8 \uc601\ud654"}),Object(l.jsxs)("h2",{children:["\ub354\ubcf4\uae30",Object(l.jsx)("i",{className:"fas fa-angle-right"})]})]}),Object(l.jsx)("div",{className:"swiper subSwiper",children:Object(l.jsx)(u.a,{className:"subSwiper",spaceBetween:13,slidesPerView:5,centeredSlides:!1,slidesPerGroup:5,navigation:!0,children:j.map((function(e){return Object(l.jsx)(A.a,{children:Object(l.jsx)(r.b,{to:"/movie/".concat(e.id),children:Object(l.jsx)("img",{src:e.large_cover_image,alt:e.title})})},e.id)}))})})]})};c(43);b.a.use([h.a]);var S=function(){var e=Object(s.useState)(!0),t=Object(d.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)([]),a=Object(d.a)(i,2),j=a[0],o=a[1];return Object(s.useEffect)((function(){var e=!0,t=function(){var t=Object(g.a)(Object(f.a)().mark((function t(){var c,s;return Object(f.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:return c=t.sent,t.next=5,c.json();case 5:s=t.sent,e&&(o(s.data.movies),n(!1));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t(),function(){e=!1}}),[]),c?Object(l.jsx)("h1",{className:"w1240",style:{fontSize:"32px",paddingTop:"20px",textAlign:"center"},children:"Loading..."}):Object(l.jsxs)("section",{className:"favorite w1240",children:[Object(l.jsxs)("div",{className:"section_title",children:[Object(l.jsx)("h1",{children:"\uc624\ub298\uc758 top 20"}),Object(l.jsxs)("h2",{children:["\ub354\ubcf4\uae30",Object(l.jsx)("i",{className:"fas fa-angle-right"})]})]}),Object(l.jsx)("div",{className:"swiper subSwiper top20",children:Object(l.jsx)(u.a,{className:"top20",spaceBetween:13,slidesPerView:5,centeredSlides:!1,slidesPerGroup:5,navigation:!0,children:j.map((function(e,t){return Object(l.jsx)(A.a,{children:Object(l.jsxs)(r.b,{to:"/movie/".concat(e.id),children:[Object(l.jsx)("div",{className:"img_container",children:Object(l.jsx)("img",{src:e.large_cover_image,alt:e.title})}),Object(l.jsx)("h1",{className:"rank",children:t+1})]})},e.id)}))})})]})};var y=function(){return Object(l.jsxs)("main",{children:[Object(l.jsx)(p,{}),Object(l.jsx)(w,{}),Object(l.jsx)(N,{}),Object(l.jsx)(S,{})]})};c(44),c(45);var C=function(){return Object(l.jsx)("div",{className:"info_link",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"#",children:"\ud68c\uc0ac\uc18c\uac1c"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"#",children:"\uc778\uc7ac\ucc44\uc6a9"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"#",children:"\uc11c\ube44\uc2a4 \uc18c\uac1c"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"#",children:"\uc774\uc6a9\uc57d\uad00"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"#",children:"\uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\ubc29\uce68"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"#",children:"\uace0\uac1d\uc13c\ud130"})})]})})},_=(c(46),c(24));var B=function(){return Object(l.jsxs)("div",{className:"info_area",children:[Object(l.jsx)("span",{children:"\ucf58\ud150\uce20\uc6e8\uc774\ube0c \uc8fc\uc2dd\ud68c\uc0ac"}),Object(l.jsx)("span",{children:"\ub300\ud45c\uc774\uc0ac \uc774\ud0dc\ud604"}),Object(l.jsx)("span",{className:"last",children:"\uace0\uac1d\uc13c\ud130 1599-3709 (\ud3c9\uc77c 09:00~18:00 / \uc810\uc2ec\uc2dc\uac04 12:00~13:00 / \uc8fc\ub9d0 \ubc0f \uacf5\ud734\uc77c \ud734\ubb34)"}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:"\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 220-88-38020"}),Object(l.jsx)("span",{className:"last",children:"\ud638\uc2a4\ud305\uc11c\ube44\uc2a4\uc81c\uacf5\uc790 : \ub9c8\uc774\ud06c\ub85c\uc18c\ud504\ud2b8 \uc720\ud55c\ud68c\uc0ac, \uad6c\uae00\ud074\ub77c\uc6b0\ub4dc\ucf54\ub9ac\uc544 \uc720\ud55c\ud68c\uc0ac, \uc544\ub9c8\uc874\uc6f9\uc11c\ube44\uc2dc\uc988\ucf54\ub9ac\uc544 \uc720\ud55c\ud68c\uc0ac"}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:"\ud1b5\uc2e0\ud310\ub9e4\uc5c5 \uc2e0\uace0\ubc88\ud638 : \uc81c 2021-\uc11c\uc6b8\uc601\ub4f1\ud3ec-0585\ud638"}),Object(l.jsxs)("span",{className:"last",children:["\ud1b5\uc2e0\ud310\ub9e4\uc5c5 \uc815\ubcf4 \uacf5\uac1c : ",Object(l.jsx)(_.Link,{to:"http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020",target:"_blank",rel:"noopener noreferrer",className:"info-link",children:"http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("address",{children:"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uc601\ub4f1\ud3ec\uad6c \uc5ec\uc758\ub098\ub8e8\ub85c 60 \ud3ec\uc2a4\ud2b8\ud0c0\uc6cc 19\uce35"}),Object(l.jsxs)("span",{className:"last",children:["\uc804\uc790\uc6b0\ud3b8\uc8fc\uc18c : ",Object(l.jsx)(_.Link,{to:"mailto:helpdesk@wavve.com",children:"helpdesk@wavve.com"})]}),Object(l.jsx)("span",{className:"copyright",children:"Copyright\xa9 \ucf58\ud150\uce20\uc6e8\uc774\ube0c(\uc8fc) All rights reserved."})]})};c(47);var k=function(){return Object(l.jsxs)("div",{className:"wavveon",children:[Object(l.jsx)("div",{className:"footer_logo",children:Object(l.jsx)("label",{htmlFor:"wavveon_logo",children:Object(l.jsx)("img",{src:"https://www.wavve.com/img/ico-footer-wavve-on.d4912b54.svg",alt:"Wavve on"})})}),Object(l.jsxs)("select",{id:"wavveon_logo",onChange:function(e){var t=e.target.value;t&&(window.location.href=t)},style:{backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADfSURBVDhPYxgFo4AKICMjowyIpaFcnCA3N1cGpBbKhQMmKA0H////vwTE59LT07WgQhgAJPfr16+zILVQIThghtJwcPbs2TsmJiZPgczFxsbGa4D8jxAZCEhLS5NjZGQ8AGQWz5w5cwNEFAEwDAQBoCFXgIb+BmqcCjR0OZD/DSQONEwESB1iYmLqBRo2DySGDhihNFYANKAJSHmzsLDYg/h///4FuWw70LBaEB8bwGsgCADDazowrDSBzH9AF98GGpYOkcEOMCIFHUhKSmYDqVdA/A7IzgQLjoIRDRgYAMM3S1P54/NdAAAAAElFTkSuQmCC)"},children:[Object(l.jsx)("option",{defaultValue:"",disabled:"disabled",hidden:"hidden",children:"\uc0ac\uc5c5\uc790\uc6a9 \uc6e8\uc774\ube0c \uac00\uc785"}),Object(l.jsx)("option",{value:"http://www.wavveon.com/Index.aspx",children:"\uc6e8\uc774\ube0c\uc628 \uc11c\ube44\uc2a4 \uc18c\uac1c"}),Object(l.jsx)("option",{value:"http://www.wavveon.com/join_pcbang.aspx",children:"\uc6e8\uc774\ube0c\uc628 PC\ubc29 \uc11c\ube44\uc2a4"}),Object(l.jsx)("option",{value:"http://www.wavveon.com/join_library.aspx",children:"\uc6e8\uc774\ube0c\uc628 \ub3c4\uc11c\uad00 \uc11c\ube44\uc2a4"}),Object(l.jsx)("option",{value:"http://www.wavveon.com/join_hospital.aspx",children:"\uc6e8\uc774\ube0c\uc628 \ubcd1\uc6d0 \uc11c\ube44\uc2a4"}),Object(l.jsx)("option",{value:"http://www.wavveon.com/join_movienet.aspx",children:"\uc6e8\uc774\ube0c\uc628 \uc219\ubc15 \uc11c\ube44\uc2a4"}),Object(l.jsx)("option",{value:"http://www.wavveon.com/join_others.aspx",children:"\uc6e8\uc774\ube0c\uc628 \uc77c\ubc18 \uc11c\ube44\uc2a4"})]}),Object(l.jsxs)("div",{className:"footer_sns",children:[Object(l.jsx)(r.b,{to:"https://www.facebook.com/wavve.official/",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUdwTCcnJyYmJiUlJScnJyYmJiYmJiUlJScnJy4uLiUlJVVVVf///ysrKyYmJiYmJiUlJSUlJf///zMzM+bm5rm5uUlJSTw8PJOTk8fHx6Ojo/Dw8GlpaSKgx6gAAAARdFJOUwA3jtT6yH/sXRCpAwEe33P+GdQUZQAAAatJREFUWMOtl9mWwiAMhil7Udumi6067/+cU3EZdSCB4n/Vczz5TEICCWMR1VY71RgpTaOctjXLUsVFBy/qoBO8SrWuWwFBiTbFj1obiMpoCrG3iLlH2D1mf1BASh2Q3BlIkIlm00pIkrRB8x2HZPFdwN5Bhtx/Aocs8c//t5CpjzxUMhcg387iYCBb5qUe9go2SP3VpIVNeqahxgMYjlcNgSAenaUx62XsvZbAj5p2YL6bhwF3F1rEgVOPAaD1ABG3/+lxgPA1hDgw3a0vl0sQABXRBLcMnAe0JZAIpLcfkX9YY6g75Aw94IQAuhqtwgSAxauIBKy15Mo8cCzWiMu46naI168xcmEo1kQA5/5NsaNomEkDxOIwTKYBzrFSSQUsUUAshGGe5+PN+/VrltEQGvIYJ6wOGqbKACqhkFCASyjlCS9lWwawCe084e2MXSg0QOBXGg3g+KVKAyr8WicBgnhYSEBLPG0U4PG66q0ATT7v/mGfKQfKB4zyEad4yCof8zakwX551P3CsF087pcvHKsPpStP+dJVvvaVL55fWH2DyzdkLd956/8vx6XV0bOYnOQAAAAASUVORK5CYII=",alt:"Wavve \ud398\uc774\uc2a4\ubd81",width:"32",height:"32"})}),Object(l.jsx)(r.b,{to:"http://m.post.naver.com/my.nhn?memberNo=12375258",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABOUExURUdwTCYmJicnJyUlJSYmJicnJyYmJiUlJS0tLSYmJiYmJigoKCUlJSUlJf7+/iUlJbm5ufHx8VtbW3h4eOTk5DIyMikpKZ+fn0VFRczMzO6Le3EAAAAOdFJOUwCON9T5YcjsFHvfU6WxjM/C1AAAAa5JREFUWMOtl+uSgyAMhRGRi1qj2Gp9/xdd7bqtFxJw0/OjM52RzyQcJBECka1crUujlCl17SorLklmORyUZzJ1tXWn1SvD2aTlBlCZOKIglr8QBf16DVFpIghpIEEGrWahIEkKSSODZGWh9Te4oBvr/cEYCrioQx2kugpQu72wBi7LbP1w8k8T0MlRVAFSAJ8yBBJIAryTcPA/ADi8gmmANYRAACug67r1JwxYQ8gxQAvwuDc9QIsB8peHgAAMngSAxA7BHwBgJAEZksEGMHgKMOdggQL4YfmHA8CKigT0YwRQBTdxA2g8DXCijgDuDxJQC40D4kZajmRJAGJWnlUKwwMYoXgAxQewUyiBpVJoHkAjRmrPGbSIkcJWnj8kBy2ODFo5fJjAHwEekMNkkeTG/foRecwiH5RZ03b9NCCNG3GvP7sN4Enc8pKzixL7rCcqRy+WfR2xCq4XC94cTHQF37crGsKvnRALfS5XIoRlJ7pnvEfBOyyPWnDfZ+FHsu+Jg5jUZA1DNIFvtHn8RpPf6vKbbX67zx84+CMPf+jij31fGDz5o+8Xhu9r4/8P6gi556iJuXoAAAAASUVORK5CYII=",alt:"Wavve \ub124\uc774\ubc84 \ud3ec\uc2a4\ud2b8",width:"32",height:"32"})})]})]})};var J=function(){return Object(l.jsx)("footer",{children:Object(l.jsxs)("div",{className:"footer_container w1240",children:[Object(l.jsx)(C,{}),Object(l.jsx)(B,{}),Object(l.jsx)(k,{})]})})};c(48);var U=function(){return Object(l.jsxs)("div",{id:"wrapper",children:[Object(l.jsx)(o,{}),Object(l.jsx)(y,{}),Object(l.jsx)(J,{})]})};c(49);var E=function(){var e=Object(s.useState)(!0),t=Object(d.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(1),a=Object(d.a)(i,2),r=a[0],b=a[1],h=Object(s.useState)(!0),O=Object(d.a)(h,2),x=O[0],m=O[1];Object(s.useEffect)((function(){var e=null;if(x)return e=setInterval((function(){b((function(e){return e<3?e+1:1}))}),2500),function(){return clearInterval(e)}}),[x]);var u=Object(s.useState)([]),A=Object(d.a)(u,2),v=A[0],p=A[1],w=Object(j.useParams)().id,N=function(){var e=Object(g.a)(Object(f.a)().mark((function e(){var t,c;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(w,"&with_images=true&with_cast=true"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,p(c.data.movie),n(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){N()}),{id:w}),c?Object(l.jsx)("h1",{children:"Loading..."}):Object(l.jsxs)("div",{id:"wrapper",children:[Object(l.jsx)(o,{}),Object(l.jsxs)("main",{children:[Object(l.jsxs)("section",{className:"poster w1240",children:[Object(l.jsx)("img",{src:v["large_screenshot_image".concat(r)],alt:v.title}),Object(l.jsx)("h1",{children:v.title}),Object(l.jsxs)("h2",{children:[v.genres.join(", "),Object(l.jsxs)("span",{children:["(",v.year,")"]})]}),Object(l.jsx)("h3",{children:v.description_intro.slice(0,99)+"..."}),Object(l.jsx)("button",{onClick:function(){m(!x)},children:x?Object(l.jsx)("i",{className:"fas fa-pause fa-xs"}):Object(l.jsx)("i",{className:"fas fa-play fa-xs"})})]}),Object(l.jsx)("section",{className:"movie_info_tab w1240",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{className:"active",children:"\uc0c1\uc138\uc815\ubcf4"}),Object(l.jsx)("li",{children:"\uad00\ub828\uc601\uc0c1"}),Object(l.jsx)("li",{children:"\ucd94\ucc9c"})]})}),Object(l.jsxs)("section",{className:"description w1240",children:[Object(l.jsx)("h1",{children:v.title}),Object(l.jsx)("h2",{children:v.description_full})]}),Object(l.jsxs)("section",{className:"movie_info w1240",children:[Object(l.jsx)("img",{src:v.medium_cover_image,alt:"medium_cover_img"}),Object(l.jsxs)("table",{className:"info_table",children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"\uc5f0\ub3c4"}),Object(l.jsx)("td",{children:v.year})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"\uc7a5\ub974"}),Object(l.jsx)("td",{children:v.genres.join(", ")})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"\ucd9c\uc5f0"}),Object(l.jsx)("td",{children:Array.isArray(v.cast)?v.cast.map((function(e){return e.name?e.name:null})).join(", "):null})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"\ubc30\uc6b0 \uc815\ubcf4"}),Object(l.jsx)("td",{children:Array.isArray(v.cast)?v.cast.map((function(e){return e.url_small_image?Object(l.jsx)("img",{src:e.url_small_image,alt:"\ubc30\uc6b01",width:"50",height:"50"}):null})):null})]})]})]})]}),Object(l.jsx)(J,{})]})};var I=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)(j.Switch,{children:[Object(l.jsx)(j.Route,{path:"/",exact:!0,component:U}),Object(l.jsx)(j.Route,{path:"/movie/:id",component:E})]})})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,58)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root")),R()}},[[50,1,2]]]);
//# sourceMappingURL=main.66d63571.chunk.js.map