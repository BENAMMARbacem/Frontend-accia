import{u as f,r as a,j as e,L as d,F as p,a as o,c as x,R as u}from"./index-f451df9c.js";import{P as g}from"./index-29c25e4f.js";import{R as h}from"./index-8e8ceb92.js";import{S as w}from"./index-4fda1331.js";import{b as y}from"./index-e0ffe7f6.js";const S=()=>{f();const[l,r]=a.useState(!1),[n,i]=a.useState([]);return a.useEffect(()=>{(async()=>{try{r(!0);const m={headers:{authorization:`Bearer ${localStorage.getItem("token")||""}`}},c=await y.get("/api/admin/document",m);i(c.data)}catch{console.log("error while reading the documents")}finally{r(!1)}})()},[]),l?e(d,{}):e(p,{children:o("div",{className:"bg-white-A700 flex flex-col font-lexend items-center justify-start mx-auto pb-0.5 w-full",children:[o("div",{className:"flex flex-col justify-start w-full",children:[e(g,{}),e(w,{className:"flex md:flex-col flex-row font-manrope md:gap-5 items-center justify-center  mt-[110px] mx-auto md:px-5 w-full"}),e("div",{className:"font-lexend gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1111px] min-h-[auto] mt-[71px] mx-auto md:px-5 w-full",children:n.map((s,t)=>e(x.Fragment,{children:e(h,{className:"bg-gray-50_01 flex flex-1 flex-col items-center justify-start p-[9px] rounded w-full",...s})},`RapportCard${t}`))}),e("div",{className:"flex flex-row font-manrope md:gap-10 items-start justify-between max-w-[1132px] mt-[67px] mx-auto md:px-5 w-full"})]}),e(u,{path:"/"})]})})};export{S as default};