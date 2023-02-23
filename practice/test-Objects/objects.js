//1. 
// 'use strict';
// var obj = {
//     x:5,
//     y: 13
// };
// obj.z = 20;
// console.log(obj);  //{ x: 5, y: 13, z: 20 }

//2.
// var obj = { x:5, y: 13};
// console.log(obj.x);  //5

//3.
// var obj = { x:5, y: 13};
// console.log(obj.z); //undefined - jer citamo vrednost sa key-a koji ne postoji, koji nije definisan

//4.
// var obj = Object.create({product: 'mug'});
// //ovim kreiramo objekat uz pomocu ugradjene metode create na klasi Object i zadajemo key
// obj.color = 'red';
// console.log(obj.color);  //red --- kada stampamo radi sve kako treba

//5.
// var obj = Object.create({product: 'mug'});
// obj.color = 'red';
// obj.product = 'teacup';
// console.log(obj.product);  //teacup --- promenilo smo value u key, pregazili smo prvobitnu vrednost

//6.
// Object.prototype.day = 'Monday';
// //Object je ovde taj glavni konstruktor --- kog svi nasledjuju i iz njega poticu svi drugi objekti
// //ako njemu setujemo prototype.day = 'Monday;
// //onda ce svaki drugi objekat imati taj prototype.day
// var plan = { activity: 'JS codding'};
// console.log(plan.day);  //Monday

//7.
// Object.prototype.day = 'Monday';
// var plan = { activity: 'JS codding', day: 'always'};
// console.log(plan.day);   //always
// pregazili smo Monday sa always
//sto je moguce uraditi ukoliko objekta nije zamrznut
//tako da stampa poslednju vrednost

//8.
// var coffee = 'cappucino';
// function orderCoffe(){
//     console.log(this.coffee);  //posto je obicna f-ja, nenalazi se u nekom objektu, this ima vrednost glob objekta
//     // var coffee je globalna varijabla tako da ce citati njenu vrednost
// }
// orderCoffe();  //cappucino


//9.
// function orderCoffe(){
//     console.log(this.coffee);
// }
// orderCoffe();

// var coffee = 'espresso';  //undefined
//hoisting ---- inicijalizacija varijable se penje gore ali vrednost ostaje na liniji 63 gde smo i dodelili vrednost

//10.
// var coffee = 'cappucino';

// var superCoffe = {
//     coffee: 'espresso',
//     strength: 3,
//     orderCoffee: function(){
//         console.log(this.coffee);
//     }
// };
// superCoffe.orderCoffee();  //espresso
//zato sto imamo metodu unutar objekta, ovo this ce ttraziti unutar objekta, i kako je naslo stampace njegovu vrednost
//da nije postojao  key, vratiolo bi undefined


//11.
// var coffee = 'cappucino';

// var superCoffe = {
//     coffee: 'espresso',
//     strength: 3,
//     orderCoffee: function(){
//         console.log(coffee);
//     }
//     //ova metoda stampa samo coffe a ne this.coffee
//     //kako coffe ne postoji unutar f-je, i onda ona trazi prvo u globalnom
//     //kako je nasla onda ce stampati cappucino

// };
// superCoffe.orderCoffee();  //cappucino

//12.
// var coffee = 'cappucino';

// var superCoffe = {
//     coffee: 'espresso',
//     strength: 3,
//     orderCoffee: (function(){
//         return coffee;
//     })()
//ovde je to sampozivajuca f-ja, znaci nije obicna metoda
// }
//     console.log(superCoffe.orderCoffee());  //error

//13.
// var mondayToDo = {
//     activity: 'do the dishes',
//     song: 'lalala',
//     sing: function(){
//         console.log(this.song);
//     }
// };
// var tuesdayToDo = {
//     activity: 'do the ...',
//     song: 'oooo',
// };
// mondayToDo.sing.call(tuesdayToDo);  //ooooo
//nad ovim objektom pozovi metodu sing, ali kao this koristi iz tuesdayToDo


//14.
// var result = Array.prototype.indexOf.call([1, 3, 5, 2, 11], 3);
// console.log(result);  //1
//pozivamo indexof metodu na prototipu Array, uz pomocu call i dajemo joj kao this  niz nad kojim ce da radi
//trazimo index trojke i to je jedan

//15.
// var result;
// result = String.prototype.concat.call('abc', 'ABC');
// console.log(result);   //abcABC
//samo spajamo dva stringa uz pomocu concat metode 


//16.
// var x = 5;

// try{
//     if(x<10){
//         throw new Error('wrong input');  //bacice ovu gresku
        
//     }
//     console.log(x); // kako je doslo do greske ovo x nikada nece da se odstampa
// } catch(error){
//     console.log(error.message);
// }

//17.

// var x = 5;

// try{
//     x *=3 ;  //15
//     if(x<10){
//         throw new Error('wrong input');  
        
//     }
//     console.log(x); // stampa 15
// } catch(error){
//     console.log(error.message);
// }



//18.
// var x = 5;

// try{
//     x *=3 ;  //15
//     if(x<10){
//         throw new Error('wrong input');  
        
//     }
//     console.log(x); // stampa 15
// } catch(error){
//     console.log(error.message);
// } finally{
//     console.log("done");
// }
//stampa i 15 i done


//19.
// var a = [2, 3, 4, 5];
// var b = [2, 3, 4, 5];
// console.log(a === b); //false
//naizgled ista ali kako s to referentni tipovi podatka i zauzimaju razlicito mesto u memoriji onda nisu jednaki

//20.
// var a = [2, 3, 4, 5];
// var b = a;
// console.log(a === b); //true


//21.
// var array = ['a', 'b', 'c'];

// function transform(array){
//     for(var i=0; i<array.length; i++){
//         array[i] = array[i].toUpperCase();
//     }
// }
// transform(array);
// console.log(array);  // ['A', 'B', 'C']
//tzv prljava metoda jer radi direktno na tom nizu

//primer ciste metode


// function transform(a){
//     var aCopy = [...a]  //spredujemo niz
//     for(var i=0; i<aCopy.length; i++){
//         aCopy[i] = aCopy[i].toUpperCase();
//     }
//     return aCopy;
// }
// var arr = ['a', 'b', 'c'];

// var result = transform(arr);
// console.log(arr, result);

//III nacin preko map

// var arr = ['a','b', 'c'];
// function transform(a){
//     return a.map((letter) => letter.toUpperCase());
// }
// var res = transform(arr);
// console.log(res);



//22.
// var a = 34;
// function transform(a){
//     a = a*2;
//     //f-ja nista ne vraca
// }
// transform(a);
// console.log(a);  //34
//kada stampamo a to je a iz glob scope-a

//23.
// var a = 34;
// function transform(a){
//     return a*2;
//     //fja vraca 68, ali kako nigde ne cekamo i nigde ne spakujemo taj rezultat
//     // a ce na kraju stampati 34
    
// }
// transform(a);
// console.log(a); 

// var a = 34;
// function transform(a){
//     return a*2;
// }
// var res = transform(a);
// console.log(res); //68
// u ovom slucaju bi tek stamapala 68


//24.
// var obj = {x:10, y:5};

// function transform(o){
//     o.x += 2;  //izvrsie transform x u 12
//     o.y = 10;  // y je sada 10
// }
// transform(obj);
// console.log(obj.x + obj.y);  //22


//25.
var a = {x:4, y: 11};
var b = {x:4, y: 11};


//setujemo novu metodu na prototipu objekta
//sto znaci da ce svi nasledjivati tu metodu od njega
Object.prototype.formatting = function(){
    //ovo this ce se odnosti na obj.nad kojim pozovemo tu metodu
    return "{x:" + this.x + "," + this.y + "}";
    //ovo ce na kraju vratiti string
    //kada se uporede ta dva stringa gotovo identicna su
    //i zato vraca true
}
console.log(a.formatting() === b.formatting());  //true






