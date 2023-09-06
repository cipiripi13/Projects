//hvatanje osnovnih dom el
let inputNum1 = document.getElementById('num1');
let inputNum2 = document.getElementById('num2');
//ovde kazemo, selektuj mi sva input polja ciji je name=op
let radios = document.querySelectorAll("input[name='cd']");
//let radioChecked = document.querySelector("input[name='cd']:checked");
let form = document.querySelector('form');
let pRes = document.getElementById('res');

console.log(radios);  //prvo vraca node listu kroz koju mozemo da prodjemo
//console.log(radioChecked); // drugo vraca samo elem koji smo cekirali

//radimo validaciju
//da li su uneti podaci br
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let num1 = inputNum1.value;
  let num2 = inputNum2.value;
  // console.log(typeof num1);//vrati da je tip string, jer se radi o input polju
  //da bismo pretvorili u broj koristimo ugradjenu metodu

  //ovo je tzv. konverzija iz stringa u number
  num1 = Number(num1);
  num2 = Number(num2);
  console.log(typeof num2);

  //RADIMO VALIDACIJU
  //proveravamo da li su unosi u zeljenom formatu

  //Number.isInteger(num1) --- proverava da li je ceo br
  //Number.isFinite(num1)  --- proverava da li je ceo ili decimalan broj
  if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
    alert('Please enter valid number');

  } else {
    //Racunamo ako je proslo validaciju
    console.log('You can do your math');
    let radioChecked = document.querySelector("input[name='cd']:checked");
    let radioValue = radioChecked.value;
    console.log(radioChecked);  //ispisujecelo input polje
    console.log(radioValue);   //cita samo njegovu vrednost iz value
    let res = 0;
    if (radioValue == '+') {
      res = num1 + num2;
    } else if (radioValue == '-') {
      res = num1 - num2;
    } else if (radioValue == '*') {
      res = num1 * num2;
    } else {
      if (num2 == 0) {
        alert('Cant divide by zero!');
        res = '...';
      } else {
        res = num1 / num2;
      }
    }
    console.log(res);
    pRes.innerHTML = num1 + radioValue + num2 + ' = ' + res;
  }
 inputNum1.value = 0;
 inputNum2.value = 0;
})