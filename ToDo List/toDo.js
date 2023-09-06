console.log('To do list');

//DOM
let ullistTasks = document.querySelector('ul');
//console.log(ullistTasks);

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