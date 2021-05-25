const on = document.getElementById('on');
const modal_container = document.getElementById('modal_container');
const off = document.getElementById('off');

on.addEventListener('click', () => { modal_container.classList.add('show');
off.classList.add('show');
 });

 off.addEventListener('click', () => { modal_container.classList.remove('show');
off.classList.remove('show');      
 });

function myFunction(x) {
  if (x.matches) { // If media query matches
      document.title="Modal for Olapic";
  } else {
   document.title="Modal for SocialNative";
  }
}

var x = window.matchMedia("(max-width: 640px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes