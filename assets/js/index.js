const menuOpen = document.querySelector('.icon--open');
const menuClose = document.querySelector('.icon--close');
const boxIcon = document.querySelector('.nav__icons');
const boxNavList = document.querySelector('.nav__lista');

boxIcon.addEventListener('click', () =>{
   menuOpen.classList.toggle('activated');
   menuClose.classList.toggle('activated');
   boxNavList.classList.toggle('activated');
   document.body.classList.toggle('activated');
});

window.addEventListener('resize', function(e){
   let widthWindow = document.body.clientWidth;
   
   if(widthWindow > 768){
      boxNavList.classList.remove('activated');
      menuOpen.classList.remove('activated');
      menuClose.classList.remove('activated');
      document.body.classList.remove('activated');
   }
})