import{e as c,v as i,j as t,d,B as n}from"./index-D7HQqjZP.js";const _="_layout_13e56_1",u="_modal_13e56_7",m="_title_13e56_24",g="_btns_13e56_28",s={layout:_,modal:u,title:m,btns:g},x="_layout_13e56_1",j="_modal_13e56_7",v="_title_13e56_24",h="_btns_13e56_28",l={layout:x,modal:j,title:v,btns:h},b=({children:e})=>{const a=c(),{isAuthenticated:o}=i();return o?t.jsx(d,{to:"/",replace:!0}):t.jsx("div",{className:l.layout,children:t.jsxs("div",{className:l.modal,children:[e,t.jsx(n,{variant:"close",className:l.close,onClick:()=>a(-1)})]})})},N=()=>{const e=c(),{login:a,register:o,isAuthenticated:r}=i();return r&&e("/",{replace:!0}),t.jsx("div",{className:s.layout,children:t.jsx(b,{children:t.jsxs("div",{className:s.wrapper,children:[t.jsx("h2",{className:s.title,children:"Please login or register"}),t.jsxs("div",{className:s.btns,children:[t.jsx(n,{onClick:()=>o(),color:"black",title:"Register"}),t.jsx(n,{onClick:()=>a(),color:"black",title:"Log In"})]})]})})})},y=()=>t.jsx(N,{}),$=y;export{$ as default};
