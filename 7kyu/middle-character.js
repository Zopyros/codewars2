// Instructions 


// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// My Solution


function getMiddle(s)
{
  let arr = s.split('')

let lengthy = arr.length

let odd
let even
let oddResult
let evenResult
let even1
let even2 

if(lengthy % 2 === 1){
     odd = (lengthy -1)/2
     arr.forEach((x,i) => {
        if (i === odd){
            oddResult = x
        }

     })
     return oddResult;
    }

    

    else{
        
    even = (lengthy/2) - 1 
    evenResult =  arr.forEach((x,i) => {
        if (i === even ){
        even1 = x
    }
        else if( i === even + 1 ){
            even2 = x 
        }
    
   
    })
        evenResult = even1 + even2
    }
    return evenResult;
}