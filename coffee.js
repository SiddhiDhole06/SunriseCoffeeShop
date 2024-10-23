/*for dark theme light theme and its local storage*/
document.addEventListener("DOMContentLoaded", function() {
  var icon = document.getElementById("moon");
  //check localStorage for the theme apply it
  if(localStorage.getItem("theme")=== "dark"){
    document.body.classList.add("dark-theme");
  }
  else{
    document.body.classList.remove("dark-theme");
    icon.src = "img/moon-solid (1).svg";
  }

  icon.onclick = function(){
    document.body.classList.toggle("dark-theme");

    //save the theme preference in localStorage
    if(document.body.classList.contains("dark-theme")){
      icon.src = "img/sun-solid (1).svg";
      localStorage.setItem("theme", "dark");
    }
    else{
      icon.src = "img/moon-solid (1).svg";
      localStorage.setItem("theme", "light");
    }
  };
});



/*for menu*/
document.addEventListener('scroll',() => {
  const nav = document.querySelector('nav');
  if(window.scrollY > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});


/*for menu current page*/
document.querySelectorAll('.nav-linkk').forEach
  (link => {
    if(link.href === window.location.href){
      link.setAttribute('aria-current','page')
    }
  })


  /*go to top btn*/
const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
    if(window.scrollY > 600){
        goTopBtn.style.display = "flex"
    } else {
        goTopBtn.style.display = "none"
    }
}
goTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})


/*contact form start*/

document.getElementById('contact-form').addEventListener('submit', function(event) {
// Prevent the default form submission behavior (i.e., page reload)
event.preventDefault();

// Get form data
const name = document.getElementById('name').value;
const name2 = document.getElementById('name2').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;

// Log the data to the console
console.log('Name:', name);
console.log('Name:', name2);
console.log('Email:', email);
console.log('Message:', message);
});

/* contact form end */







