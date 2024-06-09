var typeData = new Typed(".role", {
  strings: [
    "Front-End Developer.",
    'Programmer.',
    "Coder.",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});


// toggle 

let navItems = document.querySelector('.nav-items');

document.querySelector('#menu-btn').addEventListener('click', () => {
    navItems.classList.toggle('active');
    let navbar = document.querySelector('.nav-items');
      navbar.style.backgroundColor = '#fff';
})


document.addEventListener('DOMContentLoaded', () => {
const sections = document.querySelectorAll('.container'); // Corrected selector
const navItems = document.querySelectorAll('.nav-items div a');

const options = {
threshold: 0.22
};

let observer = new IntersectionObserver(navCheck, options);

sections.forEach(section => {
observer.observe(section);
});

function navCheck(entries) {
entries.forEach(entry => {
  const id = entry.target.getAttribute('id');
  const navItem = document.querySelector(`.nav-items div a[href="#${id}"]`);
  if (entry.isIntersecting) {
      console.log(`Section ${id} is intersecting`);
      navItems.forEach(item => {
          item.classList.remove('active');
      });
      navItem.classList.add('active');

  }
});
}
});

 // Smooth Scroll for In-Page Links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// refresh page behaviour

// window.addEventListener('beforeunload', function() {
//       localStorage.setItem('scrollPosition', window.scrollY);
//   });

//   // Restore the scroll position when the page loads
//   window.addEventListener('load', function() {
//       const scrollPosition = localStorage.getItem('scrollPosition');
//       if (scrollPosition) {
//           window.scrollTo(0, parseInt(scrollPosition, 10));
//       }
//   });



// window.addEventListener("beforeunload", function() {
//   localStorage.setItem("scrollPosition", window.scrollY);
//   console.log("Scroll position saved:", window.scrollY); // Debugging line
// });

// // Restore the scroll position from localStorage when the page loads
// window.addEventListener("load", function() {
//   const scrollPosition = localStorage.getItem("scrollPosition");
//   console.log("Scroll position loaded:", scrollPosition); // Debugging line
//   if (scrollPosition !== null) {
//     window.scrollTo(0, parseInt(scrollPosition, 10));
//     console.log("Scrolling to position:", parseInt(scrollPosition, 10)); // Debugging line
//   }
// }); 


// smooth scolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// scroll position saved add restore

window.addEventListener("beforeunload", function() {
  localStorage.setItem("scrollPosition", window.scrollY);
});

window.addEventListener("load", function() {
  const scrollPosition = localStorage.getItem("scrollPosition");
  if (scrollPosition !== null) {
    window.scrollTo(0, parseInt(scrollPosition, 10));
  }
});


// botton hover 

document.querySelectorAll('.btn-pink').forEach(button => {
  button.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#ff4d4d';
  });
  button.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
  }); 
});

// form validation

document.querySelector('.form').addEventListener('submit', function(e) {
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const subject = document.querySelector('input[name="subject"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  if (!name || !email || !subject || !message) {
    alert('Please fill in all fields');
    e.preventDefault();
  }
});


