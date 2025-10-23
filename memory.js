const mul=(a,b)=>{
    return a*b;
}

const square=(a)=>{
    return mul(a,a);
}

const print=(a)=>{
        let s=square(a);
        console.log(s);
}

print(5);

console.log("first");
Promise.resolve().then(console.log("promises"))
setTimeout(()=>{
    console.log("setTimeout");
},2000);

console.log("last");