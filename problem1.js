//Reverse Words in a Sentence

function reverseString(strings){
    let splits=strings.split(" ")
    let reverses=splits.reverse()
    return reverses.join(" ")
    

}

const str="hiii eveyone "
console.log(reverseString(str));

// Factorial  Sequence

function factorial(n){
    if(n===0){
        return 1
    }else{
        return n*factorial(n-1)
    }
}

console.log(factorial(0));

//fibonacci series

function fibo(num){
    let values=[0,1]
    for(let i=2;i<num;i++){
        const values1=values[i-1]+values[i-2]
        values.push(values1)
    }
    return values
}
let fibonacci=fibo(3)
console.log(fibonacci);