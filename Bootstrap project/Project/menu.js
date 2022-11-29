const hamburger = document.querySelector(".hamburger");  /*preko queri selektora hvatamo hamburger klasu u html*/
const navMenu = document.querySelector(".nav-menu");

/*dodajemo sta se desava kada kliknemo na hamburger---- pojavi se x i ceo meni*/
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
} )