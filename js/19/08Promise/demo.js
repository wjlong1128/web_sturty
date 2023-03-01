// const applyAsync = (acc, val) => acc.then(val);
// const composeAsync = (...funcs) => 
// x => funcs.reduce(applyAsync, Promise.resolve(x));


// Promise.resolve().then(() => console.log(2));
// console.log(1); // 1, 2

// const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// wait().then(() => console.log(4));
// Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
// console.log(1); // 1, 2, 3, 4


// new Promise((resolve,reject)=>{
//     console.log(0);
//     resolve()
// }).then(()=> {console.log(2);})
// .then(()=>{console.log(3);})


// console.log(1);

const afun = async () => {
    let p = await new Promise((resolve, reject) => {
        console.log('async');
        resolve("p")
    }).then(()=>{
        console.log('then...');
    }).catch(()=>{
       console.log('err'); 
    })
    
    console.log(p);
    return 'OK'
}

console.log(afun());