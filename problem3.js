//Array Intersection
//Write a function findIntersection(arr1, arr2) that takes two arrays as input and returns an array containing the elements that are present in both input arrays. 
//The order of elements in the output array should be the same as they appear in the first array.

function findeIntersection(arr1,arr2){
    let found=[]
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
               found.push(arr2[j])
            }
        }
    }
    return found  
}

const array1=[1,2,3,4,5]
const array2=[3,2,5,6,7]
const numbers=findeIntersection(array1,array2);
console.log(numbers)//Time Complexity: O(n*m) and Space Complexity: O(min(n,m)


//Palindrome Check

//Write a function isPalindrome(str) 
//that takes a string as input and returns true if it's a palindrome (reads the same forwards and backwards), and false otherwise.

function isPalindrome(str){
    const strings=str.split('').reverse().join("")
    const strings1=strings===str
    return strings1
}
console.log(isPalindrome("kayak"))////Time Complexity: O(n) and Space Complexity: O(n)


// Largest Element

//Write a function findLargestElement(arr) that takes an array of numbers as input and returns the largest element in the array.

function isLargest(largeNum){
    const strings=Math.max(null,...largeNum)
    return strings

}
let numbers1=[1,5,5,6,7,8,3]
console.log(isLargest(numbers1))//Time Complexity: O(n) and Space Complexity: O(n)

