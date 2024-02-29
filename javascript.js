// window.addEventListener('scroll', function() {
//     var header = document.querySelector('header');

//     if (this.window.scrollY > 0){
//         header.classList.add('onScroll_h');
//     } else{
//         header.classList.remove('onScroll_h');
//     }
// });

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }