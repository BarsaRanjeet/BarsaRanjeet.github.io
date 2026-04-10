import{r as f,j as t}from"./index-BrHEAVjy.js";function n(){return n=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var l in r)({}).hasOwnProperty.call(r,l)&&(a[l]=r[l])}return a},n.apply(null,arguments)}function x(a,e){if(a==null)return{};var r={};for(var l in a)if({}.hasOwnProperty.call(a,l)){if(e.indexOf(l)!==-1)continue;r[l]=a[l]}return r}var le={},se=f.createContext(le),ka=(a,e)=>n({},a,e),Ra=()=>f.useContext(se),W=f.createContext(()=>{});W.displayName="JVR.DispatchShowTools";function Va(){return f.useReducer(ka,le)}function ne(){return f.useContext(W)}var ie=a=>{var{initial:e,dispatch:r,children:l}=a;return t.jsx(se.Provider,{value:e,children:t.jsx(W.Provider,{value:r,children:l})})};ie.displayName="JVR.ShowTools";var oe={},de=f.createContext(oe),Sa=(a,e)=>n({},a,e),Q=()=>f.useContext(de),q=f.createContext(()=>{});q.displayName="JVR.DispatchExpands";function La(){return f.useReducer(Sa,oe)}function Ja(){return f.useContext(q)}var ve=a=>{var{initial:e,dispatch:r,children:l}=a;return t.jsx(de.Provider,{value:e,children:t.jsx(q.Provider,{value:r,children:l})})};ve.displayName="JVR.Expands";var ue={Str:{as:"span","data-type":"string",style:{color:"var(--w-rjv-type-string-color, #cb4b16)"},className:"w-rjv-type",children:"string"},Url:{as:"a",style:{color:"var(--w-rjv-type-url-color, #0969da)"},"data-type":"url",className:"w-rjv-type",children:"url"},Undefined:{style:{color:"var(--w-rjv-type-undefined-color, #586e75)"},as:"span","data-type":"undefined",className:"w-rjv-type",children:"undefined"},Null:{style:{color:"var(--w-rjv-type-null-color, #d33682)"},as:"span","data-type":"null",className:"w-rjv-type",children:"null"},Map:{style:{color:"var(--w-rjv-type-map-color, #268bd2)",marginRight:3},as:"span","data-type":"map",className:"w-rjv-type",children:"Map"},Nan:{style:{color:"var(--w-rjv-type-nan-color, #859900)"},as:"span","data-type":"nan",className:"w-rjv-type",children:"NaN"},Bigint:{style:{color:"var(--w-rjv-type-bigint-color, #268bd2)"},as:"span","data-type":"bigint",className:"w-rjv-type",children:"bigint"},Int:{style:{color:"var(--w-rjv-type-int-color, #268bd2)"},as:"span","data-type":"int",className:"w-rjv-type",children:"int"},Set:{style:{color:"var(--w-rjv-type-set-color, #268bd2)",marginRight:3},as:"span","data-type":"set",className:"w-rjv-type",children:"Set"},Float:{style:{color:"var(--w-rjv-type-float-color, #859900)"},as:"span","data-type":"float",className:"w-rjv-type",children:"float"},True:{style:{color:"var(--w-rjv-type-boolean-color, #2aa198)"},as:"span","data-type":"bool",className:"w-rjv-type",children:"bool"},False:{style:{color:"var(--w-rjv-type-boolean-color, #2aa198)"},as:"span","data-type":"bool",className:"w-rjv-type",children:"bool"},Date:{style:{color:"var(--w-rjv-type-date-color, #268bd2)"},as:"span","data-type":"date",className:"w-rjv-type",children:"date"}},pe=f.createContext(ue),Ta=(a,e)=>n({},a,e),g=()=>f.useContext(pe),H=f.createContext(()=>{});H.displayName="JVR.DispatchTypes";function Ea(){return f.useReducer(Ta,ue)}function Ba(){return f.useContext(H)}function ce(a){var{initial:e,dispatch:r,children:l}=a;return t.jsx(pe.Provider,{value:e,children:t.jsx(H.Provider,{value:r,children:l})})}ce.displayName="JVR.Types";var Ma=["style"];function ye(a){var{style:e}=a,r=x(a,Ma),l=n({cursor:"pointer",height:"1em",width:"1em",userSelect:"none",display:"inline-flex"},e);return t.jsx("svg",n({viewBox:"0 0 24 24",fill:"var(--w-rjv-arrow-color, currentColor)",style:l},r,{children:t.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"})}))}ye.displayName="JVR.TriangleArrow";var me={Arrow:{as:"span",className:"w-rjv-arrow",style:{transform:"rotate(0deg)",transition:"all 0.3s"},children:t.jsx(ye,{})},Colon:{as:"span",style:{color:"var(--w-rjv-colon-color, var(--w-rjv-color))",marginLeft:0,marginRight:2},className:"w-rjv-colon",children:":"},Quote:{as:"span",style:{color:"var(--w-rjv-quotes-color, #236a7c)"},className:"w-rjv-quotes",children:'"'},ValueQuote:{as:"span",style:{color:"var(--w-rjv-quotes-string-color, #cb4b16)"},className:"w-rjv-quotes",children:'"'},BracketsLeft:{as:"span",style:{color:"var(--w-rjv-brackets-color, #236a7c)"},className:"w-rjv-brackets-start",children:"["},BracketsRight:{as:"span",style:{color:"var(--w-rjv-brackets-color, #236a7c)"},className:"w-rjv-brackets-end",children:"]"},BraceLeft:{as:"span",style:{color:"var(--w-rjv-curlybraces-color, #236a7c)"},className:"w-rjv-curlybraces-start",children:"{"},BraceRight:{as:"span",style:{color:"var(--w-rjv-curlybraces-color, #236a7c)"},className:"w-rjv-curlybraces-end",children:"}"}},fe=f.createContext(me),Da=(a,e)=>n({},a,e),S=()=>f.useContext(fe),G=f.createContext(()=>{});G.displayName="JVR.DispatchSymbols";function $a(){return f.useReducer(Da,me)}function Ia(){return f.useContext(G)}var he=a=>{var{initial:e,dispatch:r,children:l}=a;return t.jsx(fe.Provider,{value:e,children:t.jsx(G.Provider,{value:r,children:l})})};he.displayName="JVR.Symbols";var xe={Copied:{className:"w-rjv-copied",style:{height:"1em",width:"1em",cursor:"pointer",verticalAlign:"middle",marginLeft:5}},CountInfo:{as:"span",className:"w-rjv-object-size",style:{color:"var(--w-rjv-info-color, #0000004d)",paddingLeft:8,fontStyle:"italic"}},CountInfoExtra:{as:"span",className:"w-rjv-object-extra",style:{paddingLeft:8}},Ellipsis:{as:"span",style:{cursor:"pointer",color:"var(--w-rjv-ellipsis-color, #cb4b16)",userSelect:"none"},className:"w-rjv-ellipsis",children:"..."},Row:{as:"div",className:"w-rjv-line"},KeyName:{as:"span",className:"w-rjv-object-key"}},je=f.createContext(xe),Fa=(a,e)=>n({},a,e),E=()=>f.useContext(je),X=f.createContext(()=>{});X.displayName="JVR.DispatchSection";function _a(){return f.useReducer(Fa,xe)}function Aa(){return f.useContext(X)}var Ne=a=>{var{initial:e,dispatch:r,children:l}=a;return t.jsx(je.Provider,{value:e,children:t.jsx(X.Provider,{value:r,children:l})})};Ne.displayName="JVR.Section";var ge={objectSortKeys:!1,indentWidth:15},Y=f.createContext(ge);Y.displayName="JVR.Context";var Ce=f.createContext(()=>{});Ce.displayName="JVR.DispatchContext";function Ka(a,e){return n({},a,e)}var _=()=>f.useContext(Y),be=a=>{var{children:e,initialState:r,initialTypes:l}=a,[s,v]=f.useReducer(Ka,Object.assign({},ge,r)),[d,i]=Va(),[o,c]=La(),[u,p]=Ea(),[y,m]=$a(),[j,h]=_a();return f.useEffect(()=>v(n({},r)),[r]),t.jsx(Y.Provider,{value:s,children:t.jsx(Ce.Provider,{value:v,children:t.jsx(ie,{initial:d,dispatch:i,children:t.jsx(ve,{initial:o,dispatch:c,children:t.jsx(ce,{initial:n({},u,l),dispatch:p,children:t.jsx(he,{initial:y,dispatch:m,children:t.jsx(Ne,{initial:j,dispatch:h,children:e})})})})})})})};be.displayName="JVR.Provider";function Oa(a){if(a==null)throw new TypeError("Cannot destructure "+a)}var Ua=["isNumber","value","parentValue","keyName","keys"],Pa=["as","render"],Qa=["as","render"],za=["as","render"],Za=["as","style","render"],Wa=["as","render"],qa=["as","render"],Ha=["as","render"],Ga=["as","render"],z=a=>{var{Quote:e={}}=S(),{isNumber:r,value:l,parentValue:s,keyName:v,keys:d}=a,i=x(a,Ua);if(r)return null;var{as:o,render:c}=e,u=x(e,Pa),p=o||"span",y=n({},i,u);if(typeof y.children=="string"){var m=y.children.trim();y.children=m||void 0}var j={value:l,parentValue:s,keyName:v,keys:d||(v?[v]:[])},h=c&&typeof c=="function"&&c(y,j);return h||t.jsx(p,n({},y))};z.displayName="JVR.Quote";var U=a=>{var{ValueQuote:e={}}=S(),r=n({},(Oa(a),a)),{as:l,render:s}=e,v=x(e,Qa),d=l||"span",i=n({},r,v),o=s&&typeof s=="function"&&s(i,{});return o||t.jsx(d,n({},i))};U.displayName="JVR.ValueQuote";var we=a=>{var{value:e,parentValue:r,keyName:l,keys:s}=a,{Colon:v={}}=S(),{as:d,render:i}=v,o=x(v,za),c=d||"span",u=i&&typeof i=="function"&&i(o,{value:e,parentValue:r,keyName:l,keys:s||(l?[l]:[])});return u||t.jsx(c,n({},o))};we.displayName="JVR.Colon";var ke=a=>{var{Arrow:e={}}=S(),r=Q(),{expandKey:l,style:s,value:v,parentValue:d,keyName:i,keys:o}=a,c=!!r[l],{as:u,style:p,render:y}=e,m=x(e,Za),j=u||"span",h=y&&typeof y=="function",C=n({},m,{"data-expanded":c,style:n({},p,s)}),b={value:v,parentValue:d,keyName:i,keys:o||(i?[i]:[])},k=h&&y(C,b);return k||t.jsx(j,n({},m,{style:n({},p,s)}))};ke.displayName="JVR.Arrow";var Re=a=>{var{isBrackets:e,value:r,parentValue:l,keyName:s,keys:v}=a,{BracketsLeft:d={},BraceLeft:i={}}=S(),o={value:r,parentValue:l,keyName:s,keys:v||(s?[s]:[])};if(e){var{as:c,render:u}=d,p=x(d,Wa),y=c||"span",m=u&&typeof u=="function"&&u(p,o);return m||t.jsx(y,n({},p))}var{as:j,render:h}=i,C=x(i,qa),b=j||"span",k=h&&typeof h=="function"&&h(C,o);return k||t.jsx(b,n({},C))};Re.displayName="JVR.BracketsOpen";var ee=a=>{var{isBrackets:e,isVisiable:r,value:l,parentValue:s,keyName:v,keys:d}=a,i={value:l,parentValue:s,keyName:v,keys:d||(v?[v]:[])};if(!r)return null;var{BracketsRight:o={},BraceRight:c={}}=S();if(e){var{as:u,render:p}=o,y=x(o,Ha),m=u||"span",j=p&&typeof p=="function"&&p(y,i);return j||t.jsx(m,n({},y))}var{as:h,render:C}=c,b=x(c,Ga),k=h||"span",w=C&&typeof C=="function"&&C(b,i);return w||t.jsx(k,n({},b))};ee.displayName="JVR.BracketsClose";var Ve=a=>{var e,{keyName:r,value:l,expandKey:s,parentValue:v,level:d,keys:i=[]}=a,o=Q(),{collapsed:c,shouldExpandNodeInitially:u}=_(),p=typeof c=="boolean"?c:typeof c=="number"?d>c:!1,y=(e=o[s])!=null?e:u?!1:p,m=u&&u(!y,{value:l,keys:i,level:d,keyName:r,parentValue:v});if(u&&c===!1){if(o[s]===void 0&&!m)return null}else if(o[s]===void 0&&m)return null;var j=Object.keys(l).length;if(y||j===0)return null;var h={paddingLeft:4},C={keyName:r,value:l,keys:i,parentValue:v},b=Array.isArray(l),k=l instanceof Set;return t.jsx("div",{style:h,children:t.jsx(ee,n({isBrackets:b||k},C,{isVisiable:!0}))})};Ve.displayName="JVR.NestedClose";var Xa=["as","render"],Ya=["as","render"],er=["as","render"],ar=["as","render"],rr=["as","render"],tr=["as","render"],lr=["as","render"],sr=["as","render"],nr=["as","render"],ir=["as","render"],or=["as","render"],dr=["as","render"],vr=["as","render"],Z=a=>{if(a===void 0)return"0n";if(typeof a=="string")try{a=BigInt(a)}catch{return"0n"}return a?a.toString()+"n":"0n"},Se=a=>{var{value:e,keyName:r}=a,{Set:l={},displayDataTypes:s}=g(),v=e instanceof Set;if(!v||!s)return null;var{as:d,render:i}=l,o=x(l,Xa),c=i&&typeof i=="function",u=c&&i(o,{type:"type",value:e,keyName:r});if(u)return u;var p=d||"span";return t.jsx(p,n({},o))};Se.displayName="JVR.SetComp";var Le=a=>{var{value:e,keyName:r}=a,{Map:l={},displayDataTypes:s}=g(),v=e instanceof Map;if(!v||!s)return null;var{as:d,render:i}=l,o=x(l,Ya),c=i&&typeof i=="function",u=c&&i(o,{type:"type",value:e,keyName:r});if(u)return u;var p=d||"span";return t.jsx(p,n({},o))};Le.displayName="JVR.MapComp";var B={opacity:.75,paddingRight:4},Je=a=>{var{children:e="",keyName:r,keys:l}=a,{Str:s={},displayDataTypes:v}=g(),{shortenTextAfterLength:d=30,stringEllipsis:i="..."}=_(),{as:o,render:c}=s,u=x(s,er),p=e,[y,m]=f.useState(d&&p.length>d);f.useEffect(()=>m(d&&p.length>d),[d]);var j=o||"span",h=n({},B,s.style||{});d>0&&(u.style=n({},u.style,{cursor:p.length<=d?"initial":"pointer"}),p.length>d&&(u.onClick=()=>{m(!y)}));var C=y?""+p.slice(0,d)+i:p,b=c&&typeof c=="function",k=b&&c(n({},u,{style:h}),{type:"type",value:e,keyName:r,keys:l}),w=y?"w-rjv-value w-rjv-value-short":"w-rjv-value",V=b&&c(n({},u,{children:C,className:w}),{type:"value",value:e,keyName:r,keys:l});return t.jsxs(f.Fragment,{children:[v&&(k||t.jsx(j,n({},u,{style:h}))),V||t.jsxs(f.Fragment,{children:[t.jsx(U,{}),t.jsx(j,n({},u,{className:w,children:C})),t.jsx(U,{})]})]})};Je.displayName="JVR.TypeString";var Te=a=>{var{children:e,keyName:r,keys:l}=a,{True:s={},displayDataTypes:v}=g(),{as:d,render:i}=s,o=x(s,ar),c=d||"span",u=n({},B,s.style||{}),p=i&&typeof i=="function",y=p&&i(n({},o,{style:u}),{type:"type",value:e,keyName:r,keys:l}),m=p&&i(n({},o,{children:e,className:"w-rjv-value"}),{type:"value",value:e,keyName:r,keys:l});return t.jsxs(f.Fragment,{children:[v&&(y||t.jsx(c,n({},o,{style:u}))),m||t.jsx(c,n({},o,{className:"w-rjv-value",children:e==null?void 0:e.toString()}))]})};Te.displayName="JVR.TypeTrue";var Ee=a=>{var{children:e,keyName:r,keys:l}=a,{False:s={},displayDataTypes:v}=g(),{as:d,render:i}=s,o=x(s,rr),c=d||"span",u=n({},B,s.style||{}),p=i&&typeof i=="function",y=p&&i(n({},o,{style:u}),{type:"type",value:e,keyName:r,keys:l}),m=p&&i(n({},o,{children:e,className:"w-rjv-value"}),{type:"value",value:e,keyName:r,keys:l});return t.jsxs(f.Fragment,{children:[v&&(y||t.jsx(c,n({},o,{style:u}))),m||t.jsx(c,n({},o,{className:"w-rjv-value",children:e==null?void 0:e.toString()}))]})};Ee.displayName="JVR.TypeFalse";var Be=a=>{var{children:e,keyName:r,keys:l}=a,{Float:s={},displayDataTypes:v}=g(),{as:d,render:i}=s,o=x(s,tr),c=d||"span",u=n({},B,s.style||{}),p=i&&typeof i=="function",y=p&&i(n({},o,{style:u}),{type:"type",value:e,keyName:r,keys:l}),m=p&&i(n({},o,{children:e,className:"w-rjv-value"}),{type:"value",value:e,keyName:r,keys:l});return t.jsxs(f.Fragment,{children:[v&&(y||t.jsx(c,n({},o,{style:u}))),m||t.jsx(c,n({},o,{className:"w-rjv-value",children:e==null?void 0:e.toString()}))]})};Be.displayName="JVR.TypeFloat";var Me=a=>{var{children:e,keyName:r,keys:l}=a,{Int:s={},displayDataTypes:v}=g(),{as:d,render:i}=s,o=x(s,lr),c=d||"span",u=n({},B,s.style||{}),p=i&&typeof i=="function",y=p&&i(n({},o,{style:u}),{type:"type",value:e,keyName:r,keys:l}),m=p&&i(n({},o,{children:e,className:"w-rjv-value"}),{type:"value",value:e,keyName:r,keys:l});return t.jsxs(f.Fragment,{children:[v&&(y||t.jsx(c,n({},o,{style:u}))),m||t.jsx(c,n({},o,{className:"w-rjv-value",children:e==null?void 0:e.toString()}))]})};Me.displayName="JVR.TypeInt";var De=a=>{var{children:e,keyName:r,keys:l}=a,{Bigint:s={},displayDataTypes:v}=g(),{as:d,render:i}=s,o=x(s,sr),c=d||"span",u=n({},B,s.style||{}),p=i&&typeof i=="function",y=p&&i(n({},o,{style:u}),{type:"type",value:e,keyName:r,keys:l}),m=p&&i(n({},o,{children:e,className:"w-rjv-value"}),{type:"value",value:e,keyName:r,keys:l});return t.jsxs(f.Fragment,{children:[v&&(y||t.jsx(c,n({},o,{style:u}))),m||t.jsx(c,n({},o,{className:"w-rjv-value",children:Z(e==null?void 0:e.toString())}))]})};De.displayName="JVR.TypeFloat";var $e=a=>{var{children:e,keyName:r,keys:l}=a,{Url:s={},displayDataTypes:v}=g(),{as:d,render:i}=s,o=x(s,nr),c=d||"span",u=n({},B,s.style),p=i&&typeof i=="function",y=p&&i(n({},o,{style:u}),{type:"type",value:e,keyName:r,keys:l}),m=p&&i(n({},o,{children:e==null?void 0:e.href,className:"w-rjv-value"}),{type:"value",value:e,keyName:r,keys:l});return t.jsxs(f.Fragment,{children:[v&&(y||t.jsx(c,n({},o,{style:u}))),m||t.jsxs("a",n({href:e==null?void 0:e.href,target:"_blank"},o,{className:"w-rjv-value",children:[t.jsx(U,{}),e==null?void 0:e.href,t.jsx(U,{})]}))]})};$e.displayName="JVR.TypeUrl";var Ie=a=>{var{children:e,keyName:r,keys:l}=a,{Date:s={},displayDataTypes:v}=g(),{as:d,render:i}=s,o=x(s,ir),c=d||"span",u=n({},B,s.style||{}),p=i&&typeof i=="function",y=p&&i(n({},o,{style:u}),{type:"type",value:e,keyName:r,keys:l}),m=e instanceof Date?e.toLocaleString():e,j=p&&i(n({},o,{children:m,className:"w-rjv-value"}),{type:"value",value:e,keyName:r,keys:l});return t.jsxs(f.Fragment,{children:[v&&(y||t.jsx(c,n({},o,{style:u}))),j||t.jsx(c,n({},o,{className:"w-rjv-value",children:m}))]})};Ie.displayName="JVR.TypeDate";var Fe=a=>{var{children:e,keyName:r,keys:l}=a,{Undefined:s={},displayDataTypes:v}=g(),{as:d,render:i}=s,o=x(s,or),c=d||"span",u=n({},B,s.style||{}),p=i&&typeof i=="function",y=p&&i(n({},o,{style:u}),{type:"type",value:e,keyName:r,keys:l}),m=p&&i(n({},o,{children:e,className:"w-rjv-value"}),{type:"value",value:e,keyName:r,keys:l});return t.jsxs(f.Fragment,{children:[v&&(y||t.jsx(c,n({},o,{style:u}))),m]})};Fe.displayName="JVR.TypeUndefined";var _e=a=>{var{children:e,keyName:r,keys:l}=a,{Null:s={},displayDataTypes:v}=g(),{as:d,render:i}=s,o=x(s,dr),c=d||"span",u=n({},B,s.style||{}),p=i&&typeof i=="function",y=p&&i(n({},o,{style:u}),{type:"type",value:e,keyName:r,keys:l}),m=p&&i(n({},o,{children:e,className:"w-rjv-value"}),{type:"value",value:e,keyName:r,keys:l});return t.jsxs(f.Fragment,{children:[v&&(y||t.jsx(c,n({},o,{style:u}))),m]})};_e.displayName="JVR.TypeNull";var Ae=a=>{var{children:e,keyName:r,keys:l}=a,{Nan:s={},displayDataTypes:v}=g(),{as:d,render:i}=s,o=x(s,vr),c=d||"span",u=n({},B,s.style||{}),p=i&&typeof i=="function",y=p&&i(n({},o,{style:u}),{type:"type",value:e,keyName:r,keys:l}),m=p&&i(n({},o,{children:e==null?void 0:e.toString(),className:"w-rjv-value"}),{type:"value",value:e,keyName:r,keys:l});return t.jsxs(f.Fragment,{children:[v&&(y||t.jsx(c,n({},o,{style:u}))),m]})};Ae.displayName="JVR.TypeNan";var ur=a=>Number(a)===a&&a%1!==0||isNaN(a),Ke=a=>{var{value:e,keyName:r,keys:l}=a,s={keyName:r,keys:l};return e instanceof URL?t.jsx($e,n({},s,{children:e})):typeof e=="string"?t.jsx(Je,n({},s,{children:e})):e===!0?t.jsx(Te,n({},s,{children:e})):e===!1?t.jsx(Ee,n({},s,{children:e})):e===null?t.jsx(_e,n({},s,{children:e})):e===void 0?t.jsx(Fe,n({},s,{children:e})):e instanceof Date?t.jsx(Ie,n({},s,{children:e})):typeof e=="number"&&isNaN(e)?t.jsx(Ae,n({},s,{children:e})):typeof e=="number"&&ur(e)?t.jsx(Be,n({},s,{children:e})):typeof e=="bigint"?t.jsx(De,n({},s,{children:e})):typeof e=="number"?t.jsx(Me,n({},s,{children:e})):null};Ke.displayName="JVR.Value";function $(a,e,r){var l=Ia(),s=[a.className,e.className].filter(Boolean).join(" "),v=n({},a,e,{className:s,style:n({},a.style,e.style),children:e.children||a.children});f.useEffect(()=>l({[r]:v}),[e])}function L(a,e,r){var l=Ba(),s=[a.className,e.className].filter(Boolean).join(" "),v=n({},a,e,{className:s,style:n({},a.style,e.style),children:e.children||a.children});f.useEffect(()=>l({[r]:v}),[e])}function A(a,e,r){var l=Aa(),s=[a.className,e.className].filter(Boolean).join(" "),v=n({},a,e,{className:s,style:n({},a.style,e.style),children:e.children||a.children});f.useEffect(()=>l({[r]:v}),[e])}var pr=["as","render"],Oe=a=>{var{KeyName:e={}}=E();return A(e,a,"KeyName"),null};Oe.displayName="JVR.KeyName";var Ue=a=>{var{children:e,value:r,parentValue:l,keyName:s,keys:v}=a,d=typeof e=="number",i={color:d?"var(--w-rjv-key-number, #268bd2)":"var(--w-rjv-key-string, #002b36)"},{KeyName:o={}}=E(),{as:c,render:u}=o,p=x(o,pr);p.style=n({},p.style,i);var y=c||"span",m=u&&typeof u=="function"&&u(n({},p,{children:e}),{value:r,parentValue:l,keyName:s,keys:v||(s?[s]:[])});return m||t.jsx(y,n({},p,{children:e}))};Ue.displayName="JVR.KeyNameComp";var cr=["children","value","parentValue","keyName","keys"],yr=["as","render","children"],Pe=a=>{var{Row:e={}}=E();return A(e,a,"Row"),null};Pe.displayName="JVR.Row";var Qe=a=>{var{children:e,value:r,parentValue:l,keyName:s,keys:v}=a,d=x(a,cr),{Row:i={}}=E(),{as:o,render:c}=i,u=x(i,yr),p=o||"div",y=c&&typeof c=="function"&&c(n({},d,u,{children:e}),{value:r,keyName:s,parentValue:l,keys:v});return y||t.jsx(p,n({},d,u,{children:e}))};Qe.displayName="JVR.RowComp";function mr(a){var e=f.useRef();return f.useEffect(()=>{e.current=a}),e.current}function fr(a){var{value:e,highlightUpdates:r,highlightContainer:l}=a,s=mr(e),v=f.useMemo(()=>{if(!r||s===void 0)return!1;if(typeof e!=typeof s)return!0;if(typeof e=="number")return isNaN(e)&&isNaN(s)?!1:e!==s;if(Array.isArray(e)!==Array.isArray(s))return!0;if(typeof e=="object"||typeof e=="function")return!1;if(e!==s)return!0},[r,e]);f.useEffect(()=>{l&&l.current&&v&&"animate"in l.current&&l.current.animate([{backgroundColor:"var(--w-rjv-update-color, #ebcb8b)"},{backgroundColor:""}],{duration:1e3,easing:"ease-in"})},[v,e,l])}var hr=["keyName","value","parentValue","expandKey","keys","beforeCopy"],xr=["as","render"],ae=a=>{var{keyName:e,value:r,parentValue:l,expandKey:s,keys:v,beforeCopy:d}=a,i=x(a,hr),{onCopied:o,enableClipboard:c,beforeCopy:u}=_(),p=Ra(),y=p[s],[m,j]=f.useState(!1),{Copied:h={}}=E(),C=h==null?void 0:h.beforeCopy;if(c===!1||!y)return null;var b=I=>{I.stopPropagation();var T="";typeof r=="number"&&r===1/0?T="Infinity":typeof r=="number"&&isNaN(r)?T="NaN":typeof r=="bigint"?T=Z(r):r instanceof Date?T=r.toLocaleString():T=JSON.stringify(r,(K,O)=>typeof O=="bigint"?Z(O):O,2);var D=d||C||u;D&&typeof D=="function"&&(T=D(T,e,r,l,s,v)),o&&o(T,r),j(!0);var P=navigator.clipboard||{writeText(K){return new Promise((O,wa)=>{var F=document.createElement("textarea");F.style.position="absolute",F.style.opacity="0",F.style.left="-99999999px",F.value=K,document.body.appendChild(F),F.select(),document.execCommand("copy")?O():wa(),F.remove()})}};P.writeText(T).then(()=>{var K=setTimeout(()=>{j(!1),clearTimeout(K)},3e3)}).catch(K=>{})},k={style:{display:"inline-flex"},fill:m?"var(--w-rjv-copied-success-color, #28a745)":"var(--w-rjv-copied-color, currentColor)",onClick:b},{render:w}=h,V=x(h,xr),R=n({},V,i,k,{style:n({},V.style,i.style,k.style)}),J=w&&typeof w=="function",M=J&&w(n({},R,{"data-copied":m}),{value:r,keyName:e,keys:v,parentValue:l});return M||(m?t.jsx("svg",n({viewBox:"0 0 32 36"},R,{children:t.jsx("path",{d:"M27.5,33 L2.5,33 L2.5,12.5 L27.5,12.5 L27.5,15.2249049 C29.1403264,13.8627542 29.9736597,13.1778155 30,13.1700887 C30,11.9705278 30,10.0804982 30,7.5 C30,6.1 28.9,5 27.5,5 L20,5 C20,2.2 17.8,0 15,0 C12.2,0 10,2.2 10,5 L2.5,5 C1.1,5 0,6.1 0,7.5 L0,33 C0,34.4 1.1,36 2.5,36 L27.5,36 C28.9,36 30,34.4 30,33 L30,26.1114493 L27.5,28.4926435 L27.5,33 Z M7.5,7.5 L10,7.5 C10,7.5 12.5,6.4 12.5,5 C12.5,3.6 13.6,2.5 15,2.5 C16.4,2.5 17.5,3.6 17.5,5 C17.5,6.4 18.8,7.5 20,7.5 L22.5,7.5 C22.5,7.5 25,8.6 25,10 L5,10 C5,8.5 6.1,7.5 7.5,7.5 Z M5,27.5 L10,27.5 L10,25 L5,25 L5,27.5 Z M28.5589286,16 L32,19.6 L21.0160714,30.5382252 L13.5303571,24.2571429 L17.1303571,20.6571429 L21.0160714,24.5428571 L28.5589286,16 Z M17.5,15 L5,15 L5,17.5 L17.5,17.5 L17.5,15 Z M10,20 L5,20 L5,22.5 L10,22.5 L10,20 Z"})})):t.jsx("svg",n({viewBox:"0 0 32 36"},R,{children:t.jsx("path",{d:"M27.5,33 L2.5,33 L2.5,12.5 L27.5,12.5 L27.5,20 L30,20 L30,7.5 C30,6.1 28.9,5 27.5,5 L20,5 C20,2.2 17.8,0 15,0 C12.2,0 10,2.2 10,5 L2.5,5 C1.1,5 0,6.1 0,7.5 L0,33 C0,34.4 1.1,36 2.5,36 L27.5,36 C28.9,36 30,34.4 30,33 L30,29 L27.5,29 L27.5,33 Z M7.5,7.5 L10,7.5 C10,7.5 12.5,6.4 12.5,5 C12.5,3.6 13.6,2.5 15,2.5 C16.4,2.5 17.5,3.6 17.5,5 C17.5,6.4 18.8,7.5 20,7.5 L22.5,7.5 C22.5,7.5 25,8.6 25,10 L5,10 C5,8.5 6.1,7.5 7.5,7.5 Z M5,27.5 L10,27.5 L10,25 L5,25 L5,27.5 Z M22.5,21.5 L22.5,16.5 L12.5,24 L22.5,31.5 L22.5,26.5 L32,26.5 L32,21.5 L22.5,21.5 Z M17.5,15 L5,15 L5,17.5 L17.5,17.5 L17.5,15 Z M10,20 L5,20 L5,22.5 L10,22.5 L10,20 Z"})})))};ae.displayName="JVR.Copied";function ze(){var a=f.useRef(null);return a.current===null&&(a.current="custom-id-"+Math.random().toString(36).substr(2,9)),a.current}var Ze=a=>{var e,{keyName:r,value:l,expandKey:s="",level:v,keys:d=[],parentValue:i}=a,o=Q(),{objectSortKeys:c,indentWidth:u,collapsed:p,shouldExpandNodeInitially:y}=_(),m=typeof p=="boolean"?p:typeof p=="number"?v>p:!1,j=(e=o[s])!=null?e:y?!1:m,h=y&&y(!j,{value:l,keys:d,level:v,keyName:r,parentValue:i});if(y&&p===!1){if(o[s]===void 0&&!h)return null}else if(o[s]===void 0&&h)return null;if(j)return null;var C=Array.isArray(l),b=C?Object.entries(l).map(w=>[Number(w[0]),w[1]]):Object.entries(l);c&&(b=c===!0?b.sort((w,V)=>{var[R]=w,[J]=V;return typeof R=="string"&&typeof J=="string"?R.localeCompare(J):0}):b.sort((w,V)=>{var[R,J]=w,[M,I]=V;return typeof R=="string"&&typeof M=="string"?c(R,M,J,I):0}));var k={borderLeft:"var(--w-rjv-border-left-width, 1px) var(--w-rjv-line-style, solid) var(--w-rjv-line-color, #ebebeb)",paddingLeft:u,marginLeft:6};return t.jsx("div",{className:"w-rjv-wrap",style:k,children:b.map((w,V)=>{var[R,J]=w;return t.jsx(We,{parentValue:l,keyName:R,keys:[...d,R],value:J,level:v},V)})})};Ze.displayName="JVR.KeyValues";var re=a=>{var{keyName:e,parentValue:r,keys:l,value:s}=a,{highlightUpdates:v}=_(),d=typeof e=="number",i=f.useRef(null);fr({value:s,highlightUpdates:v,highlightContainer:i});var o={keyName:e,value:s,keys:l,parentValue:r};return t.jsxs(f.Fragment,{children:[t.jsxs("span",{ref:i,children:[t.jsx(z,n({isNumber:d,"data-placement":"left"},o)),t.jsx(Ue,n({},o,{children:e})),t.jsx(z,n({isNumber:d,"data-placement":"right"},o))]}),t.jsx(we,n({},o))]})};re.displayName="JVR.KayName";var We=a=>{var{keyName:e,value:r,parentValue:l,level:s=0,keys:v=[]}=a,d=ne(),i=ze(),o=Array.isArray(r),c=r instanceof Set,u=r instanceof Map,p=r instanceof Date,y=r instanceof URL,m=r&&typeof r=="object"&&!o&&!c&&!u&&!p&&!y,j=m||o||c||u;if(j){var h=c?Array.from(r):u?Object.fromEntries(r):r;return t.jsx(te,{keyName:e,value:h,parentValue:l,initialValue:r,keys:v,level:s+1})}var C={onMouseEnter:()=>d({[i]:!0}),onMouseLeave:()=>d({[i]:!1})};return t.jsxs(Qe,n({className:"w-rjv-line",value:r,keyName:e,keys:v,parentValue:l},C,{children:[t.jsx(re,{keyName:e,value:r,keys:v,parentValue:l}),t.jsx(Ke,{keyName:e,value:r,keys:v}),t.jsx(ae,{keyName:e,value:r,keys:v,parentValue:l,expandKey:i})]}))};We.displayName="JVR.KeyValuesItem";var jr=["value","keyName"],Nr=["as","render"],qe=a=>{var{CountInfoExtra:e={}}=E();return A(e,a,"CountInfoExtra"),null};qe.displayName="JVR.CountInfoExtra";var He=a=>{var{value:e={},keyName:r}=a,l=x(a,jr),{CountInfoExtra:s={}}=E(),{as:v,render:d}=s,i=x(s,Nr);if(!d&&!i.children)return null;var o=v||"span",c=d&&typeof d=="function",u=n({},i,l),p=c&&d(u,{value:e,keyName:r});return p||t.jsx(o,n({},u))};He.displayName="JVR.CountInfoExtraComps";var gr=["value","keyName"],Cr=["as","render"],Ge=a=>{var{CountInfo:e={}}=E();return A(e,a,"CountInfo"),null};Ge.displayName="JVR.CountInfo";var Xe=a=>{var{value:e={},keyName:r}=a,l=x(a,gr),{displayObjectSize:s}=_(),{CountInfo:v={}}=E();if(!s)return null;var{as:d,render:i}=v,o=x(v,Cr),c=d||"span";o.style=n({},o.style,a.style);var u=Object.keys(e).length;o.children||(o.children=u+" item"+(u===1?"":"s"));var p=n({},o,l),y=i&&typeof i=="function",m=y&&i(n({},p,{"data-length":u}),{value:e,keyName:r});return m||t.jsx(c,n({},p))};Xe.displayName="JVR.CountInfoComp";var br=["as","render"],Ye=a=>{var{Ellipsis:e={}}=E();return A(e,a,"Ellipsis"),null};Ye.displayName="JVR.Ellipsis";var ea=a=>{var{isExpanded:e,value:r,keyName:l}=a,{Ellipsis:s={}}=E(),{as:v,render:d}=s,i=x(s,br),o=v||"span",c=d&&typeof d=="function"&&d(n({},i,{"data-expanded":e}),{value:r,keyName:l});return c||(!e||typeof r=="object"&&Object.keys(r).length==0?null:t.jsx(o,n({},i)))};ea.displayName="JVR.EllipsisComp";var aa=a=>{var e,{keyName:r,expandKey:l,keys:s=[],initialValue:v,value:d,parentValue:i,level:o}=a,c=Q(),u=Ja(),{onExpand:p,collapsed:y,shouldExpandNodeInitially:m}=_(),j=typeof y=="boolean"?y:typeof y=="number"?o>y:!1,h=(e=c[l])!=null?e:m?!1:j,C=m&&m(!h,{value:d,keys:s,level:o,keyName:r,parentValue:i});c[l]===void 0&&m&&(h=!C);var b=()=>{var P={expand:!h,value:d,keyid:l,keyName:r};p&&p(P),u({[l]:P.expand})},k={display:"inline-flex",alignItems:"center"},w={transform:"rotate("+(h?"-90":"0")+"deg)",transition:"all 0.3s"},V=Object.keys(d).length,R=typeof d=="object",J=Array.isArray(d),M=d instanceof Set,I=V!==0&&(J||M||R),T={style:k};I&&(T.onClick=b);var D={keyName:r,value:d,keys:s,parentValue:i};return t.jsxs("span",n({},T,{children:[I&&t.jsx(ke,n({style:w,expandKey:l},D)),(r||typeof r=="number")&&t.jsx(re,n({},D)),t.jsx(Se,{value:v,keyName:r}),t.jsx(Le,{value:v,keyName:r}),t.jsx(Re,n({isBrackets:J||M},D)),t.jsx(ea,{keyName:r,value:d,isExpanded:h}),t.jsx(ee,n({isVisiable:h||!I,isBrackets:J||M},D)),t.jsx(Xe,{value:d,keyName:r}),t.jsx(He,{value:d,keyName:r}),t.jsx(ae,{keyName:r,value:d,expandKey:l,parentValue:i,keys:s})]}))};aa.displayName="JVR.NestedOpen";var wr=["className","children","parentValue","keyid","level","value","initialValue","keys","keyName"],te=f.forwardRef((a,e)=>{var{className:r="",parentValue:l,level:s=1,value:v,initialValue:d,keys:i,keyName:o}=a,c=x(a,wr),u=ne(),p=ze(),y=[r,"w-rjv-inner"].filter(Boolean).join(" "),m={onMouseEnter:()=>u({[p]:!0}),onMouseLeave:()=>u({[p]:!1})};return t.jsxs("div",n({className:y,ref:e},c,m,{children:[t.jsx(aa,{expandKey:p,value:v,level:s,keys:i,parentValue:l,keyName:o,initialValue:d}),t.jsx(Ze,{expandKey:p,value:v,level:s,keys:i,parentValue:l,keyName:o}),t.jsx(Ve,{expandKey:p,value:v,level:s,keys:i,parentValue:l,keyName:o})]}))});te.displayName="JVR.Container";var ra=a=>{var{BraceLeft:e={}}=S();return $(e,a,"BraceLeft"),null};ra.displayName="JVR.BraceLeft";var ta=a=>{var{BraceRight:e={}}=S();return $(e,a,"BraceRight"),null};ta.displayName="JVR.BraceRight";var la=a=>{var{BracketsLeft:e={}}=S();return $(e,a,"BracketsLeft"),null};la.displayName="JVR.BracketsLeft";var sa=a=>{var{BracketsRight:e={}}=S();return $(e,a,"BracketsRight"),null};sa.displayName="JVR.BracketsRight";var na=a=>{var{Arrow:e={}}=S();return $(e,a,"Arrow"),null};na.displayName="JVR.Arrow";var ia=a=>{var{Colon:e={}}=S();return $(e,a,"Colon"),null};ia.displayName="JVR.Colon";var oa=a=>{var{Quote:e={}}=S();return $(e,a,"Quote"),null};oa.displayName="JVR.Quote";var da=a=>{var{ValueQuote:e={}}=S();return $(e,a,"ValueQuote"),null};da.displayName="JVR.ValueQuote";var va=a=>{var{Bigint:e={}}=g();return L(e,a,"Bigint"),null};va.displayName="JVR.Bigint";var ua=a=>{var{Date:e={}}=g();return L(e,a,"Date"),null};ua.displayName="JVR.Date";var pa=a=>{var{False:e={}}=g();return L(e,a,"False"),null};pa.displayName="JVR.False";var ca=a=>{var{Float:e={}}=g();return L(e,a,"Float"),null};ca.displayName="JVR.Float";var ya=a=>{var{Int:e={}}=g();return L(e,a,"Int"),null};ya.displayName="JVR.Int";var ma=a=>{var{Map:e={}}=g();return L(e,a,"Map"),null};ma.displayName="JVR.Map";var fa=a=>{var{Nan:e={}}=g();return L(e,a,"Nan"),null};fa.displayName="JVR.Nan";var ha=a=>{var{Null:e={}}=g();return L(e,a,"Null"),null};ha.displayName="JVR.Null";var xa=a=>{var{Set:e={}}=g();return L(e,a,"Set"),null};xa.displayName="JVR.Set";var ja=a=>{var{Str:e={}}=g();return L(e,a,"Str"),null};ja.displayName="JVR.StringText";var Na=a=>{var{True:e={}}=g();return L(e,a,"True"),null};Na.displayName="JVR.True";var ga=a=>{var{Undefined:e={}}=g();return L(e,a,"Undefined"),null};ga.displayName="JVR.Undefined";var Ca=a=>{var{Url:e={}}=g();return L(e,a,"Url"),null};Ca.displayName="JVR.Url";var ba=a=>{var{Copied:e={}}=E();return A(e,a,"Copied"),null};ba.displayName="JVR.Copied";var kr=["className","style","value","children","collapsed","shouldExpandNodeInitially","indentWidth","displayObjectSize","shortenTextAfterLength","stringEllipsis","highlightUpdates","enableClipboard","displayDataTypes","objectSortKeys","onExpand","onCopied","beforeCopy"],N=f.forwardRef((a,e)=>{var{className:r="",style:l,value:s,children:v,collapsed:d=!1,shouldExpandNodeInitially:i,indentWidth:o=15,displayObjectSize:c=!0,shortenTextAfterLength:u=30,stringEllipsis:p,highlightUpdates:y=!0,enableClipboard:m=!0,displayDataTypes:j=!0,objectSortKeys:h=!1,onExpand:C,onCopied:b,beforeCopy:k}=a,w=x(a,kr),V=n({lineHeight:1.4,fontFamily:"var(--w-rjv-font-family, Menlo, monospace)",color:"var(--w-rjv-color, #002b36)",backgroundColor:"var(--w-rjv-background-color, #00000000)",fontSize:13},l),R=["w-json-view-container","w-rjv",r].filter(Boolean).join(" ");return t.jsxs(be,{initialState:{value:s,objectSortKeys:h,indentWidth:o,shouldExpandNodeInitially:d===!1?i:void 0,displayObjectSize:c,collapsed:d,enableClipboard:m,shortenTextAfterLength:u,stringEllipsis:p,highlightUpdates:y,onCopied:b,onExpand:C,beforeCopy:k},initialTypes:{displayDataTypes:j},children:[t.jsx(te,n({value:s},w,{ref:e,className:R,style:V})),v]})});N.Bigint=va;N.Date=ua;N.False=pa;N.Float=ca;N.Int=ya;N.Map=ma;N.Nan=fa;N.Null=ha;N.Set=xa;N.String=ja;N.True=Na;N.Undefined=ga;N.Url=Ca;N.ValueQuote=da;N.Arrow=na;N.Colon=ia;N.Quote=oa;N.Ellipsis=Ye;N.BraceLeft=ra;N.BraceRight=ta;N.BracketsLeft=la;N.BracketsRight=sa;N.Copied=ba;N.CountInfo=Ge;N.CountInfoExtra=qe;N.KeyName=Oe;N.Row=Pe;N.displayName="JVR.JsonView";const Vr=()=>{const[a,e]=f.useState(""),r=l=>{e(JSON.parse(l.target.value))};return t.jsxs(t.Fragment,{children:[t.jsx("style",{children:`
        .json-page {
          --bg: #ffffff;
          --surface: #ffffff;
          --surface-2: #fafafa;
          --border: rgba(0, 0, 0, 0.22);
          --text: rgba(0, 0, 0, 0.92);
          --muted: rgba(0, 0, 0, 0.58);
          --accent: #111111;
          --accent-soft: rgba(0, 0, 0, 0.05);
          --shadow: rgba(0, 0, 0, 0.18);
          --header-bg: #111111;
          --header-text: #ffffff;
          --header-muted: rgba(255, 255, 255, 0.72);

          min-height: 100vh;
          min-height: 100dvh;
          height: 100vh;
          height: 100dvh;
          padding: 0.75rem 1rem 1rem;
          background: var(--bg);
          color: var(--text);
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          width: 100%;
          max-width: none;
        }
        .json-page *,
        .json-page *::before,
        .json-page *::after { box-sizing: border-box; }

        .json-inner {
          width: 100%;
          max-width: none;
          margin: 0;
          flex: 1;
          min-height: 0;
          display: flex;
          flex-direction: column;
        }

        .json-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.55fr) minmax(0, 1.45fr);
          gap: 1rem;
          margin-top: 0;
          align-items: stretch;
          flex: 1;
          min-height: 0;
          width: 100%;
          overflow: hidden;
        }

        .panel {
          border: 1px solid var(--border);
          background: var(--surface);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 22px 60px -48px var(--shadow);
          min-height: 0;
          height: 100%;
          max-height: 100%;
          display: flex;
          flex-direction: column;
        }
        .panel-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.95rem 1rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.35);
          background: var(--header-bg);
          color: var(--header-text);
        }
        .panel-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.95rem;
          font-weight: 650;
          margin: 0;
        }
        .panel-title svg { width: 18px; height: 18px; color: var(--header-text); }
        .panel-meta {
          font-size: 0.8rem;
          color: var(--header-muted);
          white-space: nowrap;
        }

        .panel-body {
          padding: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
          overflow: hidden;
        }

        .json-input {
          width: 100%;
          flex: 1;
          min-height: 0;
          resize: none;
          padding: 0.95rem 1rem;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.12);
          background: var(--surface-2);
          color: var(--text);
          outline: none;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 0.9rem;
          line-height: 1.55;
          overflow: auto;
          overscroll-behavior: contain;
        }
        .json-input::placeholder { color: rgba(0,0,0,0.40); }

        .viewer-split {
          display: grid;
          grid-template-rows: auto 1fr;
          gap: 0.85rem;
          height: 100%;
        }

        .viewer-tabs {
          display: inline-flex;
          padding: 0.25rem;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.02);
          gap: 0.25rem;
        }
        .viewer-tab {
          padding: 0.45rem 0.7rem;
          border-radius: 10px;
          font-size: 0.82rem;
          font-weight: 650;
          color: var(--muted);
          border: 0;
          background: transparent;
          cursor: default;
        }
        .viewer-tab.active {
          color: var(--text);
          background: rgba(0, 0, 0, 0.06);
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.14);
        }

        .viewer-box {
          border: 1px solid rgba(0, 0, 0, 0.12);
          background: var(--surface-2);
          border-radius: 12px;
          padding: 0.95rem 1rem;
          flex: 1;
          min-height: 0;
          overflow: auto;
          overscroll-behavior: contain;
        }

        .codeblock {
          margin: 0;
          white-space: pre;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 0.88rem;
          line-height: 1.6;
          color: rgba(0,0,0,0.88);
        }

        .tree {
          list-style: none;
          padding-left: 0;
          margin: 0;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 0.88rem;
          line-height: 1.7;
          color: rgba(0,0,0,0.88);
        }
        .tree li { margin: 0.1rem 0; }
        .tree .k { color: rgba(0,0,0,0.86); }
        .tree .t { color: rgba(0,0,0,0.78); }
        .tree .v { color: rgba(0,0,0,0.62); }
        .tree .indent { padding-left: 1.05rem; border-left: 1px dashed rgba(0,0,0,0.16); margin-left: 0.35rem; }

        @media (max-width: 900px) {
          .json-layout {
            grid-template-columns: 1fr;
            grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
            overflow: hidden;
          }
          .panel { max-height: none; }
        }
      `}),t.jsx("div",{className:"json-page",children:t.jsx("div",{className:"json-inner",children:t.jsxs("div",{className:"json-layout",children:[t.jsxs("section",{className:"panel","aria-label":"JSON input",children:[t.jsxs("div",{className:"panel-head",children:[t.jsxs("h2",{className:"panel-title",children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":!0,children:[t.jsx("path",{d:"M7 8h10M7 12h7M7 16h10"}),t.jsx("path",{d:"M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z"})]}),"Input JSON"]}),t.jsx("span",{className:"panel-meta",children:"Paste • Upload • Validate"})]}),t.jsx("div",{className:"panel-body",children:t.jsx("textarea",{onChange:r,className:"json-input",placeholder:`Paste your JSON here…

Example:
{
  "name": "Ranjeet",
  "skills": ["Node.js", "React"],
  "active": true
}`})})]}),t.jsxs("section",{className:"panel","aria-label":"JSON output viewer",children:[t.jsxs("div",{className:"panel-head",children:[t.jsxs("h2",{className:"panel-title",children:[t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":!0,children:[t.jsx("path",{d:"M12 2l10 6-10 6L2 8l10-6z"}),t.jsx("path",{d:"M2 16l10 6 10-6"}),t.jsx("path",{d:"M2 12l10 6 10-6"})]}),"Output"]}),t.jsx("span",{className:"panel-meta",children:"Formatter • Viewer"})]}),t.jsx("div",{className:"panel-body",children:t.jsx("div",{className:"viewer-box","aria-label":"Viewer canvas",children:t.jsx("div",{style:{display:"grid",gap:"0.9rem"},children:a?t.jsx(N,{value:a,displayDataTypes:!1}):t.jsx("div",{"aria-label":"Formatted JSON",children:t.jsx("pre",{className:"codeblock",children:`{
  "name": "Ranjeet",
  "skills": [
    "Node.js",
    "React"
  ],
  "active": true
}`})})})})})]})]})})})]})};export{Vr as default};
