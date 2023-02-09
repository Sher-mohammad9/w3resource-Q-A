"use strict"

// 1. Write a JavaScript program to display the current day and time in the following format. 

const currentDate = new Date();
const getDay = currentDate.getDay();
const arrDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const currentDay = arrDays[getDay]
let getHour = currentDate.getHours();
let getMinute = currentDate.getMinutes();
let getSecond = currentDate.getSeconds();
let perpand = (getHour >= 12) ? "PM" : "AM";
getHour = (getHour >= 12) ? getHour - 12 : getHour;
if(getHour === 0 && perpand === "PM"){
	if(getHour === 0  && getSecond === 0){
		getHour = 12;
        perpand = "Noon";
	}else {
	getHour = 12;
	perpand = "PM"
}
}

if(getHour === 0 && perpand === "AM"){
	if(getHour === 0  && getSecond === 0){
		getHour = 12;
        perpand = "Noon";
	}else {
	getHour = 12;
	perpand = "AM"
}
}
console.log(`Today is : ${currentDay}, and Time ${getHour} ${perpand} : ${getMinute} : ${getSecond}`)

//2. Write a JavaScript program to print the contents of the current window.

const body = document.getElementById("Perent")
const btn = document.createElement("button");
const btnText = document.createTextNode("Print page")
btn.appendChild(btnText)
body.appendChild(btn)

btn.addEventListener("click", ()=>{
	window.print()
})

// 3. Write a JavaScript program to get the current date.

const date = new Date()
const fullDate = [date.getMonth(),date.getDate(),date.getFullYear()]
console.log(fullDate.join(" - "))
console.log(fullDate.join(" / "))

// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

const side1 = 5;
const side2 = 6;
const side3 = 7;
const totalSides = (side1+side2+side3)/2;
var area =  Math.sqrt(totalSides *((totalSides-side1)*(totalSides-side2)*(totalSides-side3)));
console.log(area);

// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

const body1 = document.getElementById("Perent")
const para = document.createElement("p");
const paraText = document.createTextNode(" Click me")
para.appendChild(paraText)
body1.appendChild(para)
para.style.cursor = "pointer"
para.addEventListener("click", ()=>{
    let textNode = para.childNodes[0];
    let text = textNode.data;
    
    setInterval(()=>{
    	text = text[text.length-1] + text.substring(0, text.length-1);
    	textNode.data = text  	
    },200);
})

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function leapYear(year){
   year % 4 === 0 ? console.log("This is a leap year") : console.log("This is a not leap year"); 
}
leapYear(2024)


//7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.


for(let year=2014; year<=2050; year++){	
 let fullDate1 = new Date(String(year))
 if(fullDate1.getDay() === 0){ 
 	console.log(`1st January is being a Sunday ${year}`)
 }
}

/*

8. Write a JavaScript program where the program takes a random integer between 1 to 10, 
// the user is then prompted to input a guess number. If the user input matches with guess number, 
the program will display a message "Good Work" otherwise display a message "Not matched".
*/


// const input = prompt("Guess the number between 0 and 9 inclusive");
const randomNumber = Math.trunc(Math.random() * 9);
// randomNumber === +input ? alert("Good Luck") : alert("Not matched");

// 9. Write a JavaScript program to calculate days left until next Christmas. 

const toDay = new Date();
const crms = new Date(toDay.getFullYear(), 11, 25);
const day = 1000*60*60*24;
const leftDays = Math.ceil((crms.getTime()-toDay.getTime())/day)
console.log(leftDays);

// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

const body2 = document.getElementById("Perent");
const form = document.createElement("form");
const lable1 = document.createElement("lable");
const node1 = document.createTextNode("calculate : ");
const input1 = document.createElement("input");
const Break = document.createElement("br");
const lable2 = document.createElement("lable");
const node2 = document.createTextNode("Answer : ")
const input2 = document.createElement("input");
input2.style.marginTop = "10px";
body2.appendChild(form);
lable1.appendChild(node1);
form.appendChild(lable1);
form.appendChild(input1);
lable2.appendChild(node2);
form.appendChild(lable2);
form.appendChild(input2);
form.insertBefore(Break,lable2)

const btn1 = document.createElement("button")
const btnText1 = document.createTextNode(" = ")
btn1.appendChild(btnText1)
form.appendChild(btn1)
btn1.style.margin = "10px 0px 0px 60px";
btn1.style.padding = "5px 10px 5px 10px"
btn1.type = "button";
const Break2 = document.createElement("br");
form.insertBefore(Break2,btn1)

btn1.addEventListener("click", ()=>{
	const evalFn = input1.value;
	input2.value = eval(evalFn);
})


//11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

function cToF(celsius) 
{
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  const message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}
cToF(47);

//12. Write a JavaScript program to get the website URL (loading page).

const body3 = document.getElementById("Perent");
const btn2 = document.createElement("button");
const btnNode = document.createTextNode("Get Website URL")
const Break3 = document.createElement("br");
body3.appendChild(btn2);
btn2.appendChild(btnNode);
body3.insertBefore(Break3,btn2);
btn2.type = "button";
btn2.style.padding = "5px 10px 5px 10px";

btn2.addEventListener("click", ()=>{
	alert(document.URL)
})


//13. Write a JavaScript exercise to create a variable using a user-defined name.

let var_name = 'abcd';
let n = 120;
var_name = n;
console.log(var_name)

//14. Write a JavaScript exercise to get the extension of a filename.

const fileName = "W3Resource.js";
console.log(`This file is ${fileName.split(".").pop()}`);


//15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

function diff(num){
	if(num > 13){
		num = 13 - num;
	}else{
		num = (num-13)*2;
	}
	console.log(num)
}
diff(2);

//16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum

function sum(num1,num2){
let totalNum = num1 + num2;
if(num1 === num2){
	totalNum *=  3;
}
console.log(totalNum);
}
sum(5,15)

//17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19

function diffSum(num){
	if(num > 19){
			return (num - 19) * 3;
	}
}
console.log(diffSum(23))

//18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function sumFn(num1, num2){
  if(num1 + num2 === 50 || num1 === 50 || num2 === 50){
  	return true;
  }
}

//19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

function chreckNum(num){
	return 100 - num <= 20 || 400 - num <= 20
}
console.log(chreckNum(90))

//20.Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

function positiveNa(num1, num2){
	if((num1 > 0 && num2 < 0) || (num2 > 0 && num1 < 0)){
		return true;
	}else{
		return false; 
	}
} 
console.log(positiveNa(10, -10));


//21. Write a JavaScript program to create a new string adding "Py" in front of a given string.
 // If the given string begins with "Py" then return the original string. 

function strAdd(str){
	if(str.toLowerCase().startsWith("py")){
		return str;
	}else{
		return "Py" + str;
	}
}
console.log(strAdd("Python"))

//22. Write a JavaScript program to remove a character at the specified. 
// position of a given string and return the new string.

function newStr(str, num){
	let str1 = str.substring(0,num);
	let str2 = str.substring(num+1, str.length)
	return str1+str2;
}
console.log(newStr("Python", 0));
console.log(newStr("Python", 3))

//23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters.
 // The string length must be greater than or equal to 1.

function newStr1(str){
	if(str.length >= 1){
		return str.charAt(str.length-1) + str.substring(1,str.length-1) + str.charAt(0);
	}
	   return str;
}
console.log(newStr1("Hassan"));

//24. Write a JavaScript program to create a new string from a given
 // string with the first character of the given string added at the front and back.

function newStr2(str){
  let str1 = str.charAt(0);
  return str1+str+str1;
}
console.log(newStr2("Hassan"));

//25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

function checkNum(num){
	if(num % 3 === 0 && num % 7 === 0){
		return num + " number divid by 3 amd 7";
	}else if(num % 3 === 0){
      return num + " number divid by 3";
	}else if (num % 7 === 0) {
		return num + " number divid by 7"
	}else{
		return num + " number not divid by 3 amd 7"
	}
}
console.log(checkNum(12));


//26. Write a JavaScript program to create a new string from a given string taking the last 3 characters
 // and added at both the front and back. The string length must be 3 or more.

function newStr3(str){
	if(str.length >= 3){
		let str1 = str.substr(str.length-3);
		 return str1+str+str1;
	}
	    return str;
}
console.log(newStr3("Hassan"));

//27. Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.

function checkStr4(str){
	return str.toLowerCase().startsWith("java") ?  true :  false;
}
console.log(checkStr4("JavaScript"))

//28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). 
// Return true if either of them are in the said range. 

function checkNum2(num1,num2){
  if((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)){
  	    return true;
  }else{
  	    return false;
  }
}
console.log(checkNum2(55,54))


//29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive).
// Return true if one or more of them are in the said range. 

function checkNum2(num1,num2, num3){
  if((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99) || (num3 >= 50 && num3 <= 99)){
  	    return true;
  }else{
  	    return false;
  }
}
console.log(checkNum2(55,54,51))

//30. Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string,
// if "Script" presents in the string return the string without "Script" otherwise return the original one.

function checkStr5(str){
	return str.toLowerCase().substring(5, 11) === "script" ? str.substring(0,5) + str.substr(11) : str;
}
console.log(checkStr5("HelloScripthi"))

//31. Write a JavaScript program to find the largest of three given integers.

function checkNum5(num1, num2, num3){
	 let num4 = num1
    if(num2 > num1 && num2 > num3){
    	  num4 = num2
    }
    if(num3 > num1 && num3 > num2){
        num4 = num3;
    }
    return num4 + " largest"
}
console.log(checkNum5(34,15,112))

//32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

function checkNum6(num1, num2){
	let nearest1 = 100 - num1;
	let nearest2 = 100 - num2;
   return nearest1 > nearest2 ? num2 + " nearest 100" : num1 + " nearest 100"
}
console.log(checkNum6(90, 95))

//33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

function checkNum7(num1, num2){
	if(num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60){
		return "Numbers is rang of 40 and 60";
	}else if(num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100){
      return "Numbers is rang of 70 and 100";
	}
}
console.log(checkNum7(75,80))


//34.  Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

function checkNum8(num1, num2){
	if(num1 > num2 && num1 >= 40 && num1 <= 60){
       return num1 + " nunber is largest and under rang of 40 ,60"
	}else if(num2 > num1 && num1 >= 40 && num2 <= 60){
		 return num2 + " nunber is largest and under rang of 40 ,60"
	}else if(num1 === num2){
		 return "Numbers are the same"
	}else{
		 return "Numbers don't fit in range"
	}
}
console.log(checkNum8(55, 50))


//35.  Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.

function newStr6(str){
	let count = 0;
  for(let i=0; i < str.length-1; i++){
  	if(str[i].toLowerCase() === "s"){
  		return true;
  		break;
  	}
  }
}
console.log(newStr6("Hassan"))


//36. Write a JavaScript program to check whether the last digit of the three given positive integers is same.

function checkNum9(...num){
   if(num[0] > 0 && num[1] > 0 && num[2] > 0){
   	 return (num[0] % 10 === num[1] % 10 && num[1] % 10 === num[2] % 10 && num[2] % 10 === num[0] % 10) ? true : false; 
   }
}
console.log(checkNum9(123,123,123))

//37. Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. 
// If the string length is less than 3 convert all the characters in upper case.

function newStr7(str){
   if(str.length <= 3){
        return str.toUpperCase();
   }else{
   	    return str.substring(0,3).toLowerCase().concat(str.slice(3))
   }
}
console.log(newStr7("shRK"))

/*
38. Write a JavaScript program to check the total marks of a student in various examinations. 
The student will get A+ grade if the total marks are in the range 89..100 inclusive, 
if the examination is "Final-exam." the student will get A+ grade and total marks must 
be greater than or equal to 90. Return true if the student get A+ grade or false otherwise
*/

function checkNum10(exam, num){
	let grade = "";
	if(num >= 89 && num <= 100){
		grade =  "A+ grade"
	}
	if(num >= 90 && grade && exam.toLowerCase() === "final-exam"){
		   return true;
	}else{
		   return false;
	}
}
console.log(checkNum10("Final-exam", 90))

//39. Write a JavaScript program to compute the sum of the two given integers,
// If the sum is in the range 50..80 return 65 other wise return 80. 

function checkNum11(...num){
   if(num[0] + num[1] >= 50 && num[0] + num[1] <= 80){
   	   return 65;
   }else{
   	   return 80;
   }
}
console.log(checkNum11(25,56))

//40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

function checkNum12(...num){
	if(num[0] > 0 && num[1] > 0){
	if((num[0] === 8 || num[1] === 8) || (num[0] + num[1] === 8) || (Math.abs(num[0] - num[1]) === 8)){
      return true;
	}else{
		  return false;
	}
 }
      return false;
}
console.log(checkNum12(6,14));

//41. . Write a JavaScript program to check three given numbers, if the three numbers are same return 30 
// otherwise return 20 and if two numbers are same return 40. 

function checkNum13(num1, num2, num3){
	if(num1 === num2 && num2 === num3 && num3 === num1){
		  return 30;
	}
	if(num1 === num2 || num2 === num3 || num3 === num1){
		  return 40;
	}
	    return 20;
}
console.log(checkNum13(11,11,25))

//42.  Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.

function checkNum14(...num){
	if(num[0] < num[1] && num[1] < num[2]){
		  return "Increasing in strict mode"
	}
	if(num[1] < num[2]){
	    return "Increasing in soft mode"
	}
	    return "undefined";    
}
console.log(checkNum14(12,13,3))

//43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

function checkNum15(num1, num2,num3){
	if(num1 > 0 && num2 > 0 && num3 > 0){
	if((num1 % 10 === num2 % 10) || (num2 % 10 === num3 % 10) || (num3 % 10 === num1 % 1)){
	   return true;
	}
 }
}
console.log(checkNum15(12,22,42));

//44. Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.

function checkNum16(num1,num2,num3){
	if((num1 >= 20 && (num1 < num2 || num1 < num3)) || (num2 >= 20 && (num2 < num1 || num2 < num3)) || (num3 >= 20 && (num3 < num2 || num3 < num1))){
		return true;
	}
}
console.log(checkNum16(21,23,25))

//45. Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.

function checkNum17(num1,num2){
	if(num1 === 15 || num2 === 15 || num1 + num2 === 15 || Math.abs(num1 - num2) === 15){
		 return true;
	}
}
console.log(checkNum17(12,27))

//46. Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.

function checkNum18(num1, num2){
	if(num1 % 7 === 0 || num2 % 11 === 0 || num2 % 7 === 0 || num1 % 11 === 0){
		     return true;
	}
}
console.log(checkNum18(14, 20));

//47. Write a JavaScript program to check whether a given number is presents in the range 40..10000.

function checkNum19(num){
return num > 40 && num < 10000 ? true : false;
}

//48. Write a JavaScript program to reverse a given string.

function newStr8(str){
	let str1 = ""
	for(let i = 1; i <= str.length; i++){
		str1 += str.at(-i)
	}
	return str1;
}
console.log(newStr8("hassan"))

//49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

function newStr9(str){
	let str1 = str.split("");
	for(let i = 0; i < str1.length; i++){
			switch(str1[i]){
			case " ":
				break;
			case "z":
			 str1[i] = "a";
			  break;
			case "Z":
			 str1[i] = "A";
			  break;
			default:
			  str1[i] = String.fromCharCode(1 + str1[i].charCodeAt(0))
	}
}	
return str1.join("");
}
console.log(newStr9("hello"))

//50. Write a JavaScript program to capitalize the first letter of each word of a given string.

function newStr10(str){
	let str1 = str.split(" ");
	let arr = [];
	for(let val of str1){
		arr.push(val.charAt(0).toUpperCase().concat(val.slice(1)));
	}
	return arr.join(" ");
}
console.log(newStr10("hello everyone"))




















// 36.  Trigno, Apti, Math, Quant  Mathmetics  English, Tense, Active, Passive  English true JavaScript false Java 
// Turkey, India, Japan  Country Rajasthan  Biggest State  Delhi Capital 18 Adult 11 Minor default case Hello JavaScript

const input = "India";
switch(input.toLowerCase()){
case "trigno":
case "apti":
case "math":
case "quant":
   console.log("Math");
break;

case "english":
case "tense":
case "active":
case "passive":
   console.log("English")  
break;

case true:
  console.log("JavaScript");
break;
case false:
  console.log("Java")  
break;

case "turkey":
case "india":
case "japan":
  console.log("Country");
break;

case "rajasthan":
   console.log("Biggest state");
break;

case "delhi":
   console.log("Capital");
break;

case 18:
   console.log("Adult");
break;

case 11:
    console.log("Minor");
break;

default:
  console.log("Hello JavaScript");       

}

//37. 1 to 50 print krvana hai Number odd hai to continue krna hai Even number and 40 < hai to print number krdo 
// otherwise loop ko break krdo

for(let i=1; i <= 50; i++){
   if(i % 2 != 0){
   	continue;
   }
   if(i > 40){
   	break;
   }
   console.log(i)
}

//38. Write a program to print Fibonacci series of n terms where n is input by user :

let a = 1;
let b = 1;
let c = 0;
for(let i=1; i<=200; i++){
console.log(c)
a = b;
b = c;
c = a+b;
if(c > 200){
	break;
}
}