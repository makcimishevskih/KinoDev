import{i as l,k as i,j as s,t as n,P as o,N as h,w as p}from"./index-DADWde2_.js";const d="_search_s8tjv_1",m="_wrapper_s8tjv_5",r={search:d,wrapper:m},j=()=>{const{page:a,handlePage:c}=l();i(a);const e=p.docs;if(e&&e.length===0)return null;const t=e.slice(a===1?0:a-1*10,a*10);return s.jsxs("div",{className:r.search,children:[s.jsx("h2",{className:r.title,children:"Searched results:"}),t.length!==0?s.jsxs("div",{className:r.wrapper,children:[s.jsx(n,{films:t}),s.jsx(o,{data:e,handlePage:c,pageDisplayed:3})]}):s.jsx(h,{children:"Фильмы данной категории не найдены"})]})},g=j;export{g as default};
