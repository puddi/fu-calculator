(this["webpackJsonpfu-calculator"]=this["webpackJsonpfu-calculator"]||[]).push([[0],[,function(e,t,i){e.exports={button:"FuForm_button__HL7v7",activeButton:"FuForm_activeButton__2TPFJ",chiitoiButtonsContainer:"FuForm_chiitoiButtonsContainer__3g2Q6",chiitoiButton:"FuForm_chiitoiButton__2q679",subnote:"FuForm_subnote__2SlDB",meldTitle:"FuForm_meldTitle__rlyxk",meldTypes:"FuForm_meldTypes__17Dpy",meldOptions:"FuForm_meldOptions__31BG6",spacer:"FuForm_spacer__MlICl",meldOptionText:"FuForm_meldOptionText__2xcbe",meldOptionTextActive:"FuForm_meldOptionTextActive__1izmn",meldSimpleOption:"FuForm_meldSimpleOption__HMnKM",meldSimpleOptionHidden:"FuForm_meldSimpleOptionHidden__kGVXQ",waitOptions:"FuForm_waitOptions__3UoZZ",miscOptions:"FuForm_miscOptions__1M9g-",miscCheckbox:"FuForm_miscCheckbox__1N-T1",miscCheckboxChecked:"FuForm_miscCheckboxChecked__3dm8r",submitButton:"FuForm_submitButton__23vY9",floatingContainer:"FuForm_floatingContainer__4joIx",floatingBox:"FuForm_floatingBox__kx2s_",floatingBoxHide:"FuForm_floatingBoxHide__apa7a"}},,,,function(e,t,i){e.exports={content:"FuResultsModal_content__2mtXR",fuHeader:"FuResultsModal_fuHeader__7Rocb",scoringTable:"FuResultsModal_scoringTable__2cooY",options:"FuResultsModal_options__3V-OC",closeOption:"FuResultsModal_closeOption__1VG0t",closeAndResetOption:"FuResultsModal_closeAndResetOption__1w2_t"}},function(e,t,i){e.exports={app:"App_app__1kX79",resultModalContainer:"App_resultModalContainer__2rjd_",resultModalContainerHidden:"App_resultModalContainerHidden__2dj_X"}},,,,,,,,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n,c,a=i(0),s=i(3),o=i.n(s),l=i(8),r=i.n(l),d=(i(14),i(4)),j=i(6),u=i.n(j),O=i(2),b=i(1),m=i.n(b);!function(e){e[e.SEQUENCE=1]="SEQUENCE",e[e.TRIPLET=2]="TRIPLET",e[e.QUAD=3]="QUAD"}(n||(n={})),function(e){e[e.SEQUENCE_TWO_SIDED=1]="SEQUENCE_TWO_SIDED",e[e.SEQUENCE_ONE_SIDED=2]="SEQUENCE_ONE_SIDED",e[e.SEQUENCE_GAP=3]="SEQUENCE_GAP",e[e.PAIR=4]="PAIR",e[e.TRIPLET=5]="TRIPLET"}(c||(c={}));var p=function(e){var t=e.wonByChiitoi,i=e.melds,a=e.wait,s=e.misc,o=s.wonWithTsumo,l=s.wonWithClosedRon,r=s.wonWithYakuhaiPair,d=s.wonWithDoubleYakuhaiPair;if(t)return 25;var j=20;return i.forEach((function(e){var t=e.type,i=e.isOpen,c=e.isSimple;t===n.QUAD?j+=i?c?8:16:c?16:32:t===n.TRIPLET&&(j+=i?c?2:4:c?4:8)})),20!==j||r?(a!==c.SEQUENCE_TWO_SIDED&&a!==c.TRIPLET&&(j+=2),o&&(j+=2),l&&(j+=10),r&&(j+=2,d&&(j+=2)),j):o&&i.every((function(e){return!e.isOpen}))?20:30},h={type:n.SEQUENCE,isOpen:!1,isSimple:!0},x=function(e){var t=e.meld,i=e.setMeld,c=e.title,s=function(e,t,n){i({type:e,isSimple:t,isOpen:n})},o=function(e){return{className:t.type===e?m.a.activeButton:"",onClick:function(){return s(e,t.isSimple,t.isOpen)}}};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{className:m.a.meldTitle,children:c}),Object(a.jsxs)("div",{className:m.a.meldTypes,children:[Object(a.jsx)("div",Object(O.a)(Object(O.a)({},o(n.SEQUENCE)),{},{children:"Sequence"})),Object(a.jsx)("div",Object(O.a)(Object(O.a)({},o(n.TRIPLET)),{},{children:"Triplet"})),Object(a.jsx)("div",Object(O.a)(Object(O.a)({},o(n.QUAD)),{},{children:"Quad"}))]}),Object(a.jsxs)("div",{className:m.a.meldOptions,children:[Object(a.jsx)("div",{className:m.a.spacer}),Object(a.jsxs)("div",{className:m.a.meldOpenOption,onClick:function(){return s(t.type,t.isSimple,!t.isOpen)},children:[Object(a.jsx)("span",{className:[m.a.meldOptionText,t.isOpen&&m.a.meldOptionTextActive].join(" "),children:"Open"}),Object(a.jsx)("span",{className:[m.a.meldOptionText,!t.isOpen&&m.a.meldOptionTextActive].join(" "),children:"Closed"})]}),Object(a.jsxs)("div",{className:[m.a.meldSimpleOption,t.type==n.SEQUENCE&&m.a.meldSimpleOptionHidden].join(" "),onClick:function(){return s(t.type,!t.isSimple,t.isOpen)},children:[Object(a.jsx)("span",{className:[m.a.meldOptionText,t.isSimple&&m.a.meldOptionTextActive].join(" "),children:"Simple"}),Object(a.jsx)("span",{className:[m.a.meldOptionText,!t.isSimple&&m.a.meldOptionTextActive].join(" "),children:"H / T"})]})]})]})},_=function(e){var t=e.wait,i=e.setWait,n=function(e){return{className:t===e?m.a.activeButton:"",onClick:function(){return i(e)}}};return Object(a.jsxs)("div",{className:m.a.waitOptions,children:[Object(a.jsx)("div",Object(O.a)(Object(O.a)({},n(c.SEQUENCE_TWO_SIDED)),{},{children:"Two-sided Sequence Wait"})),Object(a.jsx)("div",Object(O.a)(Object(O.a)({},n(c.SEQUENCE_ONE_SIDED)),{},{children:"One-sided Sequence Wait"})),Object(a.jsx)("div",Object(O.a)(Object(O.a)({},n(c.SEQUENCE_GAP)),{},{children:"Gap Sequence Wait"})),Object(a.jsx)("div",Object(O.a)(Object(O.a)({},n(c.PAIR)),{},{children:"Pair Wait"})),Object(a.jsx)("div",Object(O.a)(Object(O.a)({},n(c.TRIPLET)),{},{children:"Triplet Wait"}))]})},v=function(e){var t=e.submitFu,i=o.a.useState(null),n=Object(d.a)(i,2),c=n[0],s=n[1],l=o.a.useState(Object(O.a)({},h)),r=Object(d.a)(l,2),j=r[0],u=r[1],b=o.a.useState(Object(O.a)({},h)),v=Object(d.a)(b,2),C=v[0],f=v[1],E=o.a.useState(Object(O.a)({},h)),F=Object(d.a)(E,2),S=F[0],N=F[1],T=o.a.useState(Object(O.a)({},h)),k=Object(d.a)(T,2),M=k[0],R=k[1],w=o.a.useState(null),B=Object(d.a)(w,2),g=B[0],D=B[1],y=o.a.useState(!1),P=Object(d.a)(y,2),W=P[0],A=P[1],H=o.a.useState(!1),I=Object(d.a)(H,2),Q=I[0],U=I[1],L=o.a.useState(!1),Y=Object(d.a)(L,2),G=Y[0],q=Y[1],X=o.a.useState(!1),J=Object(d.a)(X,2),V=J[0],Z=J[1],z=null!=c&&(!1!==c||null!=g),K=function(){s(null),u(Object(O.a)({},h)),f(Object(O.a)({},h)),N(Object(O.a)({},h)),R(Object(O.a)({},h)),D(null),A(!1),U(!1),q(!1),Z(!1)};return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Did you win by Chiitoi?"}),Object(a.jsxs)("div",{className:m.a.chiitoiButtonsContainer,children:[Object(a.jsx)("div",{className:[m.a.chiitoiButton,!0===c&&m.a.activeButton].join(" "),onClick:function(){return s(!0!==c||null)},children:"Yes"}),Object(a.jsx)("div",{className:[m.a.chiitoiButton,!1===c&&m.a.activeButton].join(" "),onClick:function(){return s(!1===c&&null)},children:"No"})]}),!1===c&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("hr",{}),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:"What were your melds?"}),Object(a.jsx)("p",{className:m.a.subnote,children:"Remember - completing a meld via Ron means it's open!"}),Object(a.jsx)(x,{meld:j,setMeld:u,title:"First Meld"}),Object(a.jsx)(x,{meld:C,setMeld:f,title:"Second Meld"}),Object(a.jsx)(x,{meld:S,setMeld:N,title:"Third Meld"}),Object(a.jsx)(x,{meld:M,setMeld:R,title:"Fourth Meld"}),Object(a.jsx)("hr",{}),Object(a.jsx)("p",{children:"What was your wait?"}),Object(a.jsx)(_,{wait:g,setWait:D}),Object(a.jsx)("hr",{}),Object(a.jsx)("p",{children:"Misc. - Pick all that apply"}),Object(a.jsxs)("div",{className:m.a.miscOptions,children:[Object(a.jsxs)("div",{onClick:function(){A(!W),Q&&U(!1)},children:[Object(a.jsx)("div",{className:[m.a.miscCheckbox,W&&m.a.miscCheckboxChecked].join(" ")}),Object(a.jsx)("span",{children:"Won via Tsumo"})]}),Object(a.jsxs)("div",{onClick:function(){U(!Q),W&&A(!1)},children:[Object(a.jsx)("div",{className:[m.a.miscCheckbox,Q&&m.a.miscCheckboxChecked].join(" ")}),Object(a.jsx)("span",{children:"Won via Ron with a Closed Hand"})]}),Object(a.jsxs)("div",{onClick:function(){return q(!G)},children:[Object(a.jsx)("div",{className:[m.a.miscCheckbox,G&&m.a.miscCheckboxChecked].join(" ")}),Object(a.jsx)("span",{children:"Yakuhai Pair"})]}),G&&Object(a.jsxs)("div",{onClick:function(){return Z(!V)},children:[Object(a.jsx)("div",{className:[m.a.miscCheckbox,V&&m.a.miscCheckboxChecked].join(" ")}),Object(a.jsx)("span",{children:"Yakuhai Pair is both Round and Seat Wind"})]})]})]})]}),Object(a.jsx)("div",{className:m.a.spacer}),Object(a.jsx)("div",{className:m.a.floatingContainer,children:Object(a.jsx)("div",{className:[m.a.floatingBox,!z&&m.a.floatingBoxHide].join(" "),onClick:function(){return function(){if(z){var e=p({wonByChiitoi:c,melds:[j,C,S,M],wait:g,misc:{wonWithTsumo:W,wonWithClosedRon:Q,wonWithYakuhaiPair:G,wonWithDoubleYakuhaiPair:V}});t(e,K)}}()},children:"Calculate"})})]})},C=i(5),f=i.n(C),E=function(e,t,i){if(e>=70&&3===t)return"Mangan";if(e>=40&&4===t)return"Mangan";var n=function(e){return 100*Math.ceil(e/100)},c=e*Math.pow(2,2+t);return i?"".concat(n(6*c)," (").concat(n(2*c),")"):"".concat(n(4*c)," (").concat(n(c),"/").concat(n(2*c),")")};var F=function(e){var t=e.fu,i=e.closeHandler,n=25===t?25:10*Math.ceil(t/10);return o.a.useEffect((function(){return document.body.style.overflow="hidden",function(){document.body.style.overflow="auto"}}),[]),Object(a.jsxs)("div",{className:f.a.content,children:[Object(a.jsxs)("p",{className:f.a.fuHeader,children:[t," \u2192 ",n," Fu"]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:f.a.scoringTable,children:[Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("p",{children:"\xa0"}),Object(a.jsx)("p",{children:"1 Han"}),Object(a.jsx)("p",{children:"2 Han"}),Object(a.jsx)("p",{children:"3 Han"}),Object(a.jsx)("p",{children:"4 Han"})]}),Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("p",{children:"Dealer:"}),Object(a.jsx)("p",{children:E(n,1,!0)}),Object(a.jsx)("p",{children:E(n,2,!0)}),Object(a.jsx)("p",{children:E(n,3,!0)}),Object(a.jsx)("p",{children:E(n,4,!0)})]}),Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("p",{children:"Non-Dealer:"}),Object(a.jsx)("p",{children:E(n,1,!1)}),Object(a.jsx)("p",{children:E(n,2,!1)}),Object(a.jsx)("p",{children:E(n,3,!1)}),Object(a.jsx)("p",{children:E(n,4,!1)})]})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:f.a.options,children:[Object(a.jsx)("div",{className:f.a.closeOption,onClick:function(){return i(!1)},children:"Close"}),Object(a.jsx)("div",{className:f.a.closeAndResetOption,onClick:function(){return i(!0)},children:"Close + Reset"})]})]})};var S=function(){var e=o.a.useState(0),t=Object(d.a)(e,2),i=t[0],n=t[1],c=o.a.useState(!1),s=Object(d.a)(c,2),l=s[0],r=s[1],j=o.a.useRef();return Object(a.jsxs)("div",{className:u.a.app,children:[Object(a.jsx)(v,{submitFu:function(e,t){j.current=t,n(e),r(!0)}}),Object(a.jsx)("div",{className:[u.a.resultModalContainer,!l&&u.a.resultModalContainerHidden].join(" "),children:l&&Object(a.jsx)(F,{fu:i,closeHandler:function(e){var t;(r(!1),e)&&(null===(t=j.current)||void 0===t||t.call(j))}})})]})},N=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,16)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;i(e),n(e),c(e),a(e),s(e)}))};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),N()}],[[15,1,2]]]);
//# sourceMappingURL=main.9dd8b975.chunk.js.map