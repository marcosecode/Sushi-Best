const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');

  if (burger.classList.contains('fa-bars')) {
    burger.classList.remove('fa-bars');
    burger.classList.add('fa-times');
  } else {
    burger.classList.remove('fa-times');
    burger.classList.add('fa-bars');
  }
});

const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    let current = 0;

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[index].classList.add("active");
    }

    nextBtn.onclick = () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    };

    prevBtn.onclick = () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    };
    
    var templateParams = {
  name: 'James',
  notes: 'Check this out!',
};

emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  },
);

const form = document.querySelector(".form");
  const submitBtn = document.querySelector(".form-submit-btn");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    submitBtn.textContent = "Envoi...";

    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      submitBtn.textContent = "✅ Message envoyé avec succès";
      form.reset();
    } else {
      submitBtn.textContent = "❌ Erreur, réessayez";
    }
  });
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate"); // allows repeat
      }
    });
  }, {
    threshold: 0.2,
  });

  sections.forEach(section => {
    observer.observe(section);
  });