// Language dictionary scaffold
const translations = {
  fr: {
    nav_features: "Atouts",
    nav_testimonials: "Témoignages",
    nav_contact: "Contact",
    hero_title: "Café artisanal, ambiance étudiante",
    hero_subtitle: "Créé pour les penseurs, rêveurs et acteurs.",
    hero_cta: "Venez nous voir",
    features_title: "Pourquoi nous choisir ?",
    feature1_title: "Baristas experts",
    feature1_text: "Notre équipe prépare chaque tasse avec soin et passion.",
    feature2_title: "Espace étudiant",
    feature2_text: "Wi-Fi gratuit et coins confortables pour étudier.",
    feature3_title: "Pâtisseries fraîches",
    feature3_text: "Délices locaux pour accompagner votre café.",
    testimonials_title: "Ce que disent les étudiants",
    testimonial1_text: "“Le meilleur endroit pour recharger entre les cours !”",
    contact_title: "Nous trouver",
    contact_text: "123 rue du Campus, Ville"
  }
};

// Language toggle
const toggleBtn = document.getElementById("lang-toggle");
let currentLang = "en";

toggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "fr" : "en";
  toggleBtn.textContent = currentLang === "en" ? "FR" : "EN";
  applyTranslations();
});

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (currentLang === "fr" && translations.fr[key]) {
      el.textContent = translations.fr[key];
    } else {
      // Fallback to default English (original HTML)
    }
  });
}

// Carousel logic
const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

function showTestimonial(i) {
  testimonials.forEach((t, idx) => t.classList.toggle("active", idx === i));
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
});

// Set dynamic year
document.getElementById("year").textContent = new Date().getFullYear();
