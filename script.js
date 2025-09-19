const sendBtn = document.querySelector('.send-btn');

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const fname = document.getElementById("fname") + " " + document.getElementById("lname")
var typed = new Typed('#element', {
  strings: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  typeSpeed: 100,
  backSpeed: 150,
  backDelay: 1000,
  loop: true
});

sendBtn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent form submit (remove this if needed)
  const icon = sendBtn.querySelector('i');
  // Add animation class
  sendBtn.classList.add('fly');
  // Remove after animation
  setTimeout(() => {
    sendBtn.classList.remove('fly');
  }, 900); // slightly more than animation time
  const form = document.getElementById('contact-form');
  // const TemplateValue = {
  //     name: fname,
  //     email: document.getElementById("email"),
  //     title: "Freelance Website Project",
  //     message: document.getElementById("message")
  // }
  if (document.getElementById("fname").value !== "" && document.getElementById("lname").value !== "" && document.getElementById("message") && document.getElementById("email")) {
    emailjs.sendForm("service_ku2ip8v", "template_56f93vn", form)
      .then(function (response) {
        alert("Message sent successfully!");
        document.getElementById("email").innerText = " "
        document.getElementById("fname").innerText = " "
        document.getElementById("lname").innerText = " "
        document.getElementById("message").innerText = " "
      }, function (error) {
        alert("Failed to send message. Please try again.");
        console.log(error);
      });
  }
  else {
    alert("Please Fill the form First !!!..");
  }

});

// document.getElementById("contact-form").addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent default form submission

// });
window.addEventListener("scroll", () => {
  let current = "";
  if (scrollY < 100) {
    current = "home";
  }

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("link-active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("link-active");
    }
  });
});

particlesJS("particles-js", {
  "particles": {
    "number": { "value": 100 },
    "size": { "value": 2 },
    "color": { "value": "#00ff00" },
    "line_linked": {
      "enable": true,
      "distance": 200,
      "color": "#00ff00",
      "opacity": 0.4,
      "width": 1
    },
    "move": { "enable": true, "speed": 4 }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    }
  }
});
// particlesJS("particles-js", {
//   "particles": {
//     "number": { "value": 80 },
//     "size": { "value": 5 },
//     "opacity": { "value": 0.5 },
//     "move": {
//       "enable": true,
//       "speed": 1,
//       "direction": "top",
//       "random": true,
//       "out_mode": "out"
//     }
//   },
//   "interactivity": {
//     "events": {
//       "onhover": { "enable": true, "mode": "bubble" }
//     },
//     "modes": {
//       "bubble": { "distance": 200, "size": 10, "opacity": 1 }
//     }
//   }
// });

