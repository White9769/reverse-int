module.exports = function reverse (n) {
let r=Math.abs(n).toString()
let m =r.split('');
let arr=[];
for(let i=m.length; i>=0;i--){
arr.push(m[i]);
}
let s=arr.join('')
return s;
}
