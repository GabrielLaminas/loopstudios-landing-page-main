//Selecionando os botões
const menuOpen = document.querySelector('.icon--open');
const menuClose = document.querySelector('.icon--close');
const boxIcon = document.querySelector('.nav__icons');
const boxNavList = document.querySelector('.nav__lista');

boxIcon.addEventListener('click', () =>{
   menuOpen.classList.toggle('activated');
   menuClose.classList.toggle('activated');
   boxNavList.classList.toggle('activated');
});
