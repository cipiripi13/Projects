//proveravamo da li imamo pristup data varijabli
console.log(data);

//selektovali oba nasa linka
let accountsViewButton = document.querySelector('[href="accounts-view"]');
let addAccountsViewButton = document.querySelector('[href="add-accounts-view"]');

let addAccountView = document.getElementById('add-accounts-view');
let accountView = document.getElementById('accounts-view');

addAccountsViewButton.addEventListener('click', function(e){
  e.preventDefault();
  addAccountView.style.display='block';
  accountView.style.display = 'none';
})

accountsViewButton.addEventListener('click', function(e){
  e.preventDefault();
  addAccountView.style.display='none';
  accountView.style.display = 'block';
})


//selektovali smo table-body jer zelimo da dinamicno unutar tela unosimo podatke iz samog javascripta
let accountsTableBody = document.getElementById('accounts-table-body');

createAccountTable();
//pravimo f-ju gde cemo dinamicki unositi podatke unutar tabele
function createAccountTable(){
  //unutar f-je pravimo html koji ce odgovarati nasem html-u koji smo dobili u pattern-u
  let htmlAccounts = ``;
  //prolazimo petljom kroz data array iz data.js, citavom duzinom niza
  for(let i=0; i<data.length; i++){
    const account = data[i];
    htmlAccounts += `
    <tr>
    <td>${account.id}</td>
    <td>${account.name}</td>
    <td>${account.lastname}</td>
    <td>${account.email}</td>
    <td>${account.phone}</td>
    </tr>
    `
  }
  console.log(htmlAccounts);
  accountsTableBody.innerHTML = htmlAccounts;
}