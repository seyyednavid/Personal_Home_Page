// Album for certification
var i;


i = 1;
let element_img = document.getElementById('img');
element_img.setAttribute("src",'https://files.fm/thumb_show.php?i=38cpja4kv');


document.getElementById('next').addEventListener('click', (event) => {
  i = (typeof i === 'number' ? i : 0) + 1;
  if (i == 2) {
    let element_img2 = document.getElementById('img');
    element_img2.setAttribute("src", 'https://files.fm/thumb_show.php?i=u2cxk5d6z');
  } else if (i == 3) {
    let element_img3 = document.getElementById('img');
    element_img3.setAttribute("src", 'https://files.fm/thumb_show.php?i=zdqka7f8z');
  } else if (i == 4) {
    let element_img4 = document.getElementById('img');
    element_img4.setAttribute("src", 'https://files.fm/thumb_show.php?i=umxkhmmfp');
  } else if (i == 5) {
    let element_img5 = document.getElementById('img');
    element_img5.setAttribute("src", 'https://files.fm/thumb_show.php?i=9n7pb2ma2');
  } else if (i == 6) {
    i = 1;
    let element_img6 = document.getElementById('img');
    element_img6.setAttribute("src", 'https://files.fm/thumb_show.php?i=38cpja4kv');
  }

});

document.getElementById('previous').addEventListener('click', (event) => {
  i = (typeof i === 'number' ? i : 0) + -1;
  if (i == 1) {
    let element_img7 = document.getElementById('img');
    element_img7.setAttribute("src", 'https://files.fm/thumb_show.php?i=38cpja4kv');
  } else if (i == 2) {
    let element_img8 = document.getElementById('img');
    element_img8.setAttribute("src", 'https://files.fm/thumb_show.php?i=u2cxk5d6z');
  } else if (i == 3) {
    let element_img9 = document.getElementById('img');
    element_img9.setAttribute("src", 'https://files.fm/thumb_show.php?i=zdqka7f8z');
  } else if (i == 4) {
    let element_img10 = document.getElementById('img');
    element_img10.setAttribute("src", 'https://files.fm/thumb_show.php?i=umxkhmmfp');
  } else if (i == 5) {
    let element_img11 = document.getElementById('img');
    element_img11.setAttribute("src", 'https://files.fm/thumb_show.php?i=9n7pb2ma2');
  } else if (i == 0) {
    i = 5;
    let element_img12 = document.getElementById('img');
    element_img12.setAttribute("src", 'https://files.fm/thumb_show.php?i=9n7pb2ma2');
  }
});

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150){
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

//Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if(this.hash !== ''){
    event.preventDefault();
    const hash = this.hash;
    $('html , body').animate(
      {
        scrollTop: $(hash).offset().top-69
      },
      800
    );
  }
}); 
