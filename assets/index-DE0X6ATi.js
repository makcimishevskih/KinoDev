import{j as s,L as x}from"./index-D7HQqjZP.js";import{a as h}from"./mockActor-DGLhCWTJ.js";import{b as d,g as p,A as j,c as b}from"./AboutInfoContainer-DgbNWJP2.js";const g="_actor_xb9p0_1",v="_media_xb9p0_11",f="_media__imgContainer_xb9p0_14",u="_media__img_xb9p0_14",N="_info_xb9p0_25",y="_title_xb9p0_25",P="_subtitle_xb9p0_33",w="_wrapper_xb9p0_44",k="_details_xb9p0_50",C="_film_xb9p0_58",I="_list_xb9p0_71",A="_link_xb9p0_76",i={actor:g,media:v,media__imgContainer:f,media__img:u,info:N,title:y,subtitle:P,wrapper:w,details:k,film:C,list:I,link:A},S=({data:e})=>{const{day:r,month:o,year:n}=d(e.birthday||""),m=p(n),c=e.movies&&e.movies.length>10?e.movies.slice(0,10):e.movies,_=[{title:"Рост",value:String(e.growth).slice(0,1)+"."+String(e.growth).slice(1)+" м"},{title:"Дата рождения",value:s.jsxs("ul",{style:{display:"flex",gap:20},children:[s.jsxs("li",{children:[r," ",o,", ",n]}),s.jsxs("li",{style:{listStyle:"initial"},children:[m," лет(года)"]}),s.jsx("span",{})]})},{title:"Место рождения",value:s.jsx("ul",{className:"line-clamp-2",style:{display:"flex",gap:8},children:e.birthPlace&&e.birthPlace.map((l,t)=>{var a;return s.jsxs("li",{children:[l.value,e.birthPlace&&t===((a=e.birthPlace)==null?void 0:a.length)-1?"":","]},l.value)})})},{title:"Всего фильмов",value:e.movies&&(e==null?void 0:e.movies.length)||0}];return s.jsxs("div",{className:i.actor,children:[s.jsx("div",{className:i.media,children:s.jsx("div",{className:i.media__link,children:s.jsx("div",{className:i.media__imgContainer,children:s.jsx("img",{className:i.media__img,src:e.photo||"",alt:"film"})})})}),s.jsxs("div",{className:i.info,children:[s.jsx("h1",{className:i.title,children:e.name}),s.jsx("h2",{className:i.subtitle,children:e.enName}),s.jsxs("div",{className:i.wrapper,children:[s.jsxs("div",{className:i.details,children:[s.jsx("h2",{className:i.subtitle,children:"О персоне"}),_.map(({title:l,value:t})=>s.jsx(j,{title:l,children:t},l))]}),s.jsxs("div",{className:i.film,children:[s.jsxs("h3",{className:i.title,children:[b("фильмы"),":"]}),s.jsx("ul",{className:i.list,children:c&&c.map(({id:l,name:t})=>s.jsx(x,{to:`/film/${l}`,className:i.link,children:t},l))})]})]})]})]})},D=()=>{const e=h;return s.jsx(S,{data:e})},z=D;export{z as default};
