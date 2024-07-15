//Task1 -Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

let val;
for(val=1;val<=100;val++){
    if(val%3==0 && val%5==0){
        document.write(" FizzBuzz "+"<br>");
    }
    else if(val%3==0){
        document.write(" Fizz "+"<br>");
    }
    else if(val%5==0){
        document.write(" Buzz "+"<br>");
    }
    else{
        document.write(val+" "+"<br>");
    }
}

//Task2 - Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).

function Palindrome(str){
    let str1="";
    for(let ind=str.length;ind>=0;ind--){
        str1+=str.charAt(ind);
    }
    if(str==str1){
        document.write("Yes "+str+" is a Palindrome"+"<br>");
    }
    else{
        document.write("No "+str+" is not a Palindrome"+"<br>");
    }
}
Palindrome("racecar");

//Task3 - Write a function that takes an array of numbers and returns the largest number.

function largest(arr){
    let ind;
    let max=arr[0];
    for(ind=0;ind<(arr.length);ind++)
    {
        if(arr[ind]>max){
            max=arr[ind];
        }
    }
    document.write(max+"<br>");
}
largest([10,20,459,209,2388]);

//Task4 - Write a function that takes a string and returns an object with each character as a key and its number of occurrences as the value.






//Task5 - Write a function that takes a string and returns the longest word in the string.

function LongestWord(strng){
    let ind,count=0,max=0;
    let word;
    for(ind=0;ind<strng.length;ind++){
        word="";
        if(strng.charAt(ind)!=" "){
            count++;
            word+=strng.charAt(ind);
        }
        if(count>max){
            max=count;
        }
    }
    document.write(max+"<br>");
    document.write(word);
}
LongestWord("Hello this is Sharmila");



//Task6 - Write a function that takes a number as input and returns its factorial.

function factorial(num){
    let fact=1;
    let itr;
    for(itr=1;itr<=num;itr++){
        fact=fact*itr;
    }
    document.write("Factorial of 5 is "+fact+"<br>");
}
factorial(5);

//Task7 - Write a function that converts a temperature from Celsius to Fahrenheit.

function Fahrenheit(celsius){
    let temp=(9/5)*(celsius)+32;
    document.write("Fahrenheit is "+temp+"<br>");
}
Fahrenheit(50);

//Task8 - Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
