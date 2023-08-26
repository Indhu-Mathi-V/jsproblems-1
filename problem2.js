//Anagram Checker
//Write a function that takes two strings as input and determines whether they are anagrams of each other 
//(contain the same characters but in a different order).

function anagrams(string1,string2){
    if(string1.length!==string2.length){
        return false;
    }

    for(i=0;i<=string1.length;i++){
        let found= false;
        
        for(j=0;j<=string2.length;j++){
            if(string1[i]==string2[j]){
                found= true;
                break;
            }    
        }
        
        if(!found){
            return false;
        }
       
    }
}
let anagramWords=anagrams("happy","hello")
console.log(anagramWords);

//Problem 8: Array Rotation
//Write a function that rotates the elements of an array to the right by a given number of steps.

function rotateElements(arr,steps){
    let lengths=steps%arr.length
    let slices=arr.slice(-lengths)
    let values=slices.concat(arr.slice(0,-lengths))
    return values
    
}
    

let array=[4,6,7,8,9]
console.log(rotateElements(array,3));

//Prime Number Check
//Write a function that checks whether a given number is prime or not.

function isPrime(num){
    if((num<=3)||(num==5)){
        return "It is a prime number"+num;
    }
    if((num%2!==0) && (num%3 !==0) &&(num%5!==0)){
        return "It is a prime number "+num;
    }else{
        return "It is a not prime number "+num;
    }
}

const primeNumber=isPrime(137)
console.log(primeNumber);