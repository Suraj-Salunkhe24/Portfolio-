
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll =()=>{
  sections.forEach(sec =>{
      let top = window.scrollY;
      let offset =sec.offsetTop;
      let height =sec.offsetHeight;
      let id =sec.getAttribute('id');

      if(top >= offset && top < offset +height){
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav ul li a [href*-'+id +']').classList.add
            ('active');
        });
      };
  });
};


// ------------------about------------

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
      for(tablink of tablinks){
        tablink.classList.remove("active-link");
      }

      for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab")
}


////.//////////////////////////last footer///////////////////




document.getElementById('likeIcon').addEventListener('click', function() {
  this.classList.toggle('clicked');
});
