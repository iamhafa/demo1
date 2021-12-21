const navLink = document.querySelectorAll('.tab');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab");


tabs.forEach((tab, index) => {
  tab.onclick = function () {
    $(".tab.active").classList.remove("active");

    this.classList.add("active");
  };
});