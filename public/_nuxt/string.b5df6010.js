const a=t=>{const e=t.split(" ");let r=[];return e.map(s=>{const n=/[a-zA-Z]+/;r=[...r,{string:n.test(s),content:s}]}),r},c=t=>t.replace(/([A-Z])/g," $1").trim().replace(/^\w/,e=>e.toUpperCase());export{c,a as s};
