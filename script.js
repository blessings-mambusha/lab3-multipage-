document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");
    const response = document.getElementById("response");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = nameInput.value.trim();
      const message = messageInput.value.trim();
  
      if (name === "" || message === "") {
        alert("Please fill out all fields.");
      } else {
        // Show personalized thank-you message
        response.innerText = `✅ Thanks, ${name}. We'll get back to you soon!`;
  
        // Optional: reset form
        form.reset();
  
        // Clear message after 5 seconds
        setTimeout(() => {
          response.innerText = "";
        }, 5000);
      }
    });
  });
  
 
// Load Users via Fetch API
 const loadUsersBtn = document.getElementById("loadUsersBtn");
if (loadUsersBtn) {
  loadUsersBtn.addEventListener("click", async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      const userList = document.getElementById("userList");
      userList.innerHTML = "";
      users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = user.name;
        userList.appendChild(li);
      });
    } catch (err) {
      console.error("Failed to load users:", err);
    }
  });
}


//Theme Toggle (Light/Dark Mode)
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
  
 
  
  // FAQ Toggle
  document.querySelectorAll(".question").forEach((q) => {
    q.addEventListener("click", () => {
      q.nextElementSibling.classList.toggle("visible");
    });
  });
  
  // Back to Top Button
  const backToTopBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // Real-Time Clock
  function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();
    clock.textContent = `${date} ${time}`;
  }
  setInterval(updateClock, 1000);
  updateClock();
  
  const hero = document.getElementById("hero");
const images = [
  "images/clepw.webp",
  "images/7.avif",
  "images/9.avif"
];

let current = 0; //  Start from first image

//  Set the first image instantly
hero.style.backgroundImage = `url('${images[current]}')`;

// Start rotating after 5s
setInterval(() => {
  current = (current + 1) % images.length;
  hero.style.backgroundImage = `url('${images[current]}')`;
}, 5000);



 
