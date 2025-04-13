import{r as l,j as s,d as c,L as h}from"./index-DUFDSFiG.js";import{A as g}from"./ArticlePreview-BYVMrZmC.js";function f(){const[t,i]=l.useState([]),[o,a]=l.useState(1),[r]=l.useState(5);l.useEffect(()=>{(async()=>{const p=await fetch("https://realworld.habsidev.com/api/articles");if(!p.ok)throw new Error("Failed to load articles");const u=await p.json();i(u.articles)})()},[o]);const n=o*r,e=n-r,d=t.slice(e,n);return{totalPosts:t.length,currentPosts:d,page:o,setPage:a,postPerPage:r}}function m({totalPosts:t,postPerPage:i,setPage:o,currentPage:a}){const r=Math.ceil(t/i),n=Array.from({length:r},(e,d)=>d+1);return s.jsxs(b,{children:[s.jsx(x,{onClick:()=>o(e=>Math.max(e-1,1)),disabled:a===1,children:"<"}),n.map(e=>s.jsx(P,{$active:a===e,onClick:()=>o(e),children:e},e)),s.jsx(x,{onClick:()=>o(e=>Math.min(e+1,r)),disabled:a===r,children:">"})]})}const b=c.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin: 10px 0px 20px 0px;
`,x=c.button`
  background-color: transparent;
  padding: 4px 10px;
  cursor: pointer;
  color: #333;
  transition: 0.2s;
  border: none;
  font-size: 24px;
  vertical-align: middle;
  line-height: 1;

  &:hover:not(:disabled) {
    background-color: #eee;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,P=c.span`
  padding: 8px 10px 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  color: ${({$active:t})=>t?"#fff":"#333"};
  background-color: ${({$active:t})=>t?"rgba(24, 144, 255, 1)":"transparent"};
  font-weight: ${({$active:t})=>t?"bold":"normal"};
  transition: 0.2s;

  &:hover {
    background-color: ${({$active:t})=>t?"rgba(24, 144, 255, 1)":"#eee"};
  }
`;function $(){const{totalPosts:t,currentPosts:i,page:o,setPage:a,postPerPage:r}=f();return i.length?s.jsxs(s.Fragment,{children:[s.jsx(j,{children:i.map(n=>s.jsx(k,{to:`/articles/${n.slug}`,children:s.jsx(g,{article:n})},n.slug))}),s.jsx(m,{totalPosts:t,postPerPage:r,setPage:a,currentPage:o})]}):s.jsx("div",{className:"loader"})}const j=c.ul`
  list-style: none;
  padding: 0;
`,k=c(h)`
  text-decoration: none;
  color: inherit;
`;export{$ as default};
