import{h as c,v as i,j as t,e as _,B as n}from"./index-DADWde2_.js";const d="_layout_s9ybn_1",u="_modal_s9ybn_7",m="_title_s9ybn_26",x="_btns_s9ybn_31",s={layout:d,modal:u,title:m,btns:x},b="_layout_1pato_1",j="_modal_1pato_7",g="_title_1pato_26",y="_btns_1pato_31",l={layout:b,modal:j,title:g,btns:y},h=({children:a})=>{const o=c(),{isAuthenticated:e}=i();return e?t.jsx(_,{to:"/",replace:!0}):t.jsx("div",{className:l.layout,children:t.jsxs("div",{className:l.modal,children:[a,t.jsx(n,{variant:"close",className:l.close,onClick:()=>o(-1)})]})})},p=()=>{const a=c(),{login:o,register:e,isAuthenticated:r}=i();return r&&a("/",{replace:!0}),t.jsx("div",{className:s.layout,children:t.jsx(h,{children:t.jsxs("div",{className:s.wrapper,children:[t.jsx("h2",{className:s.title,children:"Please login or register"}),t.jsxs("div",{className:s.btns,children:[t.jsx(n,{onClick:()=>e(),color:"black",title:"Register"}),t.jsx(n,{onClick:()=>o(),color:"black",title:"Log In"})]})]})})})},N=p;export{N as default};
