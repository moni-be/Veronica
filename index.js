/** Ancres page  **/
    $('.ancres,.baseline').on('click', function(){
       const espaceTop = $('header').outerHeight();
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - espaceTop - 160
        },800);
        return false;
    });

/** Navbar selected item timeline  **/
const navLinks = document.querySelectorAll(".ancres");
const divsActif = document.querySelectorAll(".year");

let currentDiv = "#y-2024";
window.addEventListener('scroll', () =>{
   divsActif.forEach(divActif =>{
      if(window.scrollY >= divActif.offsetTop - divActif.clientHeight - 160 ){
         currentDiv = divActif.id;
      }  
   });

   navLinks.forEach(navLink => {
      if(navLink.href.includes(currentDiv)){
         document.querySelector(".active").classList.remove("active");
         navLink.classList.add("active");
      }
   });

});

/** Setting fixed elements while scrolling **/
let $topRef = $("#refTop");
let $scrollNav = $("#nav");
let $parcours = $("#indice");
let $line = $("#line");
let $head = $("#header");
let move = function() {
   let st = $(window).scrollTop();
   let ot = $topRef.offset().top;
   if(st > ot) {
         $scrollNav.css({
             position: "fixed",
             top: "55px",
             opacity:"1"
         });
            $parcours.css({
               position: "fixed",
               top: "145px",
               opacity:"1"             
         });
            $line.css({
               position: "fixed",
               top: "228px",
               opacity:"1"            
         });
            $head.css({
               position: "fixed",
               top: "0",
               zIndex: "1000"
         });
     } else {
         $scrollNav.css({
             position: "relative",
             top: "",
            opacity:"0"
         });
         $parcours.css({
             position: "relative",
             top: "",
               opacity:"0"
         });
         $line.css({
             position: "relative",
             top: "",
            opacity:"0"             
         });
         $head.css({
            position: "sticky",
            top: "0",
            zIndex: "1000"
         });
     }
}
$(window).scroll(move)
move();
