//transform (2,4, square);
//1.
// function transform(a, b, f){
//     var result;
//     result = f(a) + f(b);
//     console.log(result);
// }

// var square = function(x){
//     return x * x;
// }

//2.
// var input = 12;
// function f(){
//     input = 15;
// }
// console.log(input);  //12 --- jer ova fja nista ne vraca,  i nigde je ne pozivamo

//pr kako bi vratila 15
// var input = 12;
// function f(){
//      input = 15;
// } 
// f();
// console.log(input)

//3.

// var a = 12;
// var b = 3;
// var result;

// function add(){
//     return a + b;
// }
// result = add(2, 11);
// console.log(result);  //15 - fji nismo prosledili parametre kada smo je kreirali pa uzima vrednosti iz glob.promenljive

// var a1 = 12;
// var b1 = 3;
// var result1;

// function add1(a, b){
//     return a + b;
// }
// result1 = add1(2, 11);
// console.log(result1); //13

//4.
// function f(){
//     return function(a, b){
//         return a + b;
//     }
// }
// var result = f();  //[Function (anonymous)]
// console.log(result);  
// var res = f()(1,4);
// console.log(res);  //5


// 5.
// function outer (x){
//     function inner(y){
//         return y + 1;
//     }
//     return x + inner(x);
// }
// var result = outer(5);
// console.log(result);  //11

//6.
// var r;
// r = (function(a,b){
//     return a + b;
// }) (2,11);
// console.log(r); //13

//7.
//console.log(console.log('js'));
//js stampa prvi console.log
// dok druga izjava ne vraca nista pa je undefined


//8.
// function transform(a, b, f){
//     var result;
//     result = f(a) + f(b);
//     console.log(result);
// }
// transform(2, 4, function(x){
//     return x + 1;
// })  //8

//9.
// var a = 20;
//  function f(n){
//     var result = a + n;
//     var a = 30;
//     return result;
// }
// console.log(f(5)); //naN
// // zato sto a inicijalizujemo u block scoope fje tek nakon sto smo rekli sta da nam vratu result

// var a = 20;
//  function f(n){
//     var result = a + n;
//     return result;
// }
// console.log(f(5)) // 25
// // u ovom slicaju vraca 25 jer fja sada a trazi globalno

// var a = 20;
//  function f(n){
//     var a = 30;
//     var result = a + n;
//     return result;
// }
// console.log(f(5)) //35


//  function f(n){
//     var result = a + n;
//     return result;
// }
// var a = 20;
// console.log(f(5)) //25


//10.
// function f(){
//     return function(a,b){
//         return a + b;
//     }
// }
//  var result = f();
//  console.log(result); //[Function (anonymous)]

//11.
// var a = 12;
// var b = 3;
// var result;

// function add(a, b){
//     return a + b;
// }
//  result = add();
//  console.log(result); //NaN
 // nismo joj prosledili nikakve argumente sa kojima bi radila

 //12.
//  var a, b;

//  function calculate (a,b){
//     var rb = b%10;
//     var ra = a%10;

//     a = a - ra + rb;
//     b = b - rb + ra;
//  }
//  calculate(123, 45);
//  console.log(a, b); // undefined, undefined


//13.
// console.log(n);
// var n = 5; //undefined


//14.
// var result;

// function add(a, b){
//     return a + b;
// }
// result = add(2);
// console.log(result); //NaN
// console.log(add); //function : add


//15.
// function calculate (a,b){
//         var rb = b%10;
//         var ra = a%10;
    
//         a = a - ra + rb;
//         b = b - rb + ra;
//         console.log(a,b);
//      }
//      calculate(123, 45)  //125, 43


//16.
// 'use strict'

// var x = 1;

// function f(){
//     return x * 2;
// }
// f(4);
// console.log(x);  //1


//17.
// var r;
//  (function (a, b){
//     return a + b;
//  }) (2, 11);

//  console.log(r);  //undefined

//18.
// var result;
// function add(a, b){
//     return a + b;
// }
// result = add(2);
// console.log(result); //NaN

//19.
// (function(s){
//     console.log(s);
// }) ('Js'); //Js

//20.
// console.log(mul(2,3));
// var mul = function (x, y){
//     return x*y;
// }  ///This code will result in an error because the function mul() is defined after it is called.
//zbog hoistinga je greska, pozvali smo varijablu mul koja sadrzi fju pre nego sto smo je inicijalizovali
//hoisting podize samo varijablu na vrhu, ali ono sto je unutar nje ostaje na linije gde je deklarisana


// var mul = function (x, y){
//     return x*y;
// }
// console.log(mul(2,3)); //6
// u ovom slucaju nece biti greske

//21
// 'use strict'

// var x = 1;

// function f(){
//     y = 3
//     return x * y;
// }
// f(4);
// console.log(x);  //ReferenceError: y is not defined
// cak i da smo definisali y sa var, stampalo bi 1, ne vraca vrednost iz fje...

//22.
// var a = [3, 4, 1, 2];

// function addOne(array){
//     for(var i=0; i<array.length; i++){
//         array[i] +=1;
//     }
// }
// addOne(a);
// console.log(a); //[ 4, 5, 2, 3 ]
// The function addOne() does not need to have a return statement in order to modify the elements in the array. By passing in the array a as a parameter, the values of the elements in the array a are modified when the function addOne() is called. The changes to the elements in the array are then reflected when the array is logged to the console.

//23.
// console.log(sum(2,3));
// function sum(x,y){
//     return x + y + 1;
// }  //6

//24.
// (function(){
//     console.log('spring time');
// })();   //spring time

//25.
// var input = 12;

// function f(){
//     input = 15;
// }
// console.log(input);  //12

//26
// var input = 12;

// function f(){
//     input = 15;
// }
// f(); //razlika je sto smo ovde pozvali f-ju
// console.log(input); //

//27.
// function transform(a, b, f){
//     var result;
//     result = f(a) + f(b);
//     console.log(result);
// }
// function double(x){
//     return 2 * x;
// }
// transform(2,4, double) //12

//28.
// (function(a,b, condition){
//     if(condition(a,b)){
//         console.log(a);
//     } else{
//         console.log(b);
//     }
// }) (2, 6, function(x,y){
//     return x>y;
// })  //6

//29.
// function f1(a, b){
//     var result = a + b;
// }
// console.log(f1(2,1)); //undefined
// // nema return 

// function f(a, b){
//     var result = a + b;
//     return result;
// }
// console.log(f(2,1)); //3

//30.
// var a = 20;

// function f(n){
//     var result = a + n;
//      a = 30;
//     return result;
// }
// console.log(f(5)); //25

// var a = 20;

// function f(n){
//     var result = a + n;
//     var a = 30;
//     return result;
// }
// console.log(f(5)); //NaN

//31.
// var a = 10;
// function f(a,b){
//     a++;
//     b--;
//     console.log(a,b); //11,1 ovde stampa
// }
// f(a,2);
// console.log(a); //10 ovde









