console.log('To do list');

//DOM
let ullistTasks = document.querySelector('ul');
//console.log(ullistTasks);

let liAllTasks = document.querySelectorAll('li');
console.log(liAllTasks);

let inputTask = document.getElementById('enterData');
let addTaskBeggining = document.getElementById('addBegginig');
let addTaskEnd = document.getElementById('addAtEnd');
let buttonAdd = document.querySelector('button');

buttonAdd.addEventListener('click', function(event){
  event.preventDefault();
  console.log('KLik');

  let inputTaskText = inputTask.value;
  //validation
  //if we do not enter anything ---alert message
  if(inputTaskText == '' || inputTaskText == null){
    alert('Please insert data');

    //what to do with input data
  } else {
    let liNewtask = document.createElement('li');
    liNewtask.textContent= inputTaskText ;
    liNewtask.setAttribute('style', 'list-style: none; border: 1px dashed black; background-color:lightblue; margin:5px');

    //here we check  if we will add data at the begging or add at end --- radio button Value
    let radioAdd = document.querySelector("input[name=task]:checked");
    if(radioAdd.id == 'addBegginig'){
      ullistTasks.prepend(liNewtask);
    } else if(radioAdd.id == 'addAtEnd'){
      liNewtask.style.backgroundColor = "pink";
      ullistTasks.appendChild(liNewtask);
    }
    
  }

  //here we empty what we have entered
  inputTask.value = '';
})


//dodajemo da cela lista regauje na dogadjaj
//da kada kliknemo na li taj isti se obrise iz liste
//i u konzoli ispisemo sta smo obrisali
ullistTasks.addEventListener('click', (event) => {
  // console.log(event);
  // console.log('kliknuto na UL');
  console.log(event.target.nodeName);
  if(event.target.nodeName == 'LI'){
    event.target.remove()
    //console.log('kliknuto na LI');
    console.log(event.target.innerHTML);  }
})

//primer
// event bubbling
//kliktanje na jedan od elem htmla odrazava se na ceo dokument i ide od roditelja do roditelja dok na kraju ne stigne do document u domu
// document.querySelector('body').addEventListener('click', (event) => {
//   console.log('kliknuli smo na body');
// })