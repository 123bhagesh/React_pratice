// let i = 0;

// while(i<=10){
//     console.log("I am Bhagesh Madavi"+" "+ i)
//     i++
// }

// function data(c,d){
//     let a=20;
//     return function(){
//         a+c+d
    
//     }
//     // ram()
// }

// let data11 = data(20,30)

// console.log(data11)

let arr =[1,2,3,4,5,6,7,8,9,10]

let n = Math.floor(arr.length/2)
for(let a=0; a<n; a++){
    let temp = arr[a]
    arr[a] = arr[arr.length-1-a]
    arr[arr.length-1-a] = temp
}

console.log(arr)

let str ='abcdefghi'

for(let a=0; a<str.length; a++){
    for(let b=0; b<str.length; b++){
        let sum = ''
        for(let c=a; c<=b; c++){
           sum = sum+str[c]
        }
        console.log(sum)
    }
}