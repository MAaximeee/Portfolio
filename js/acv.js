// GSAP est chargé via CDN dans les pages HTML
gsap.registerPlugin(ScrollTrigger);

 gsap.from("nav", { y: -80, opacity: 0, duration: 1, ease: "power2.out", delay: 0.5 });
window.addEventListener('DOMContentLoaded', () => {
  // Animation du logo et du titre dans le hero
  gsap.from(".acv-hero-logo", { y: -60, opacity: 0, duration: 1, ease: "power2.out" });
  gsap.from(".acv-hero-title", { y: 60, opacity: 0, duration: 1, delay: 0.3, ease: "power2.out" });

  // Animation du overlay hero
  gsap.from(".acv-hero-overlay", { scaleX: 0, opacity: 0, duration: 1, delay: 0.7, transformOrigin: "left center", ease: "power2.out" });

  // Animation du bloc principal (main)
  gsap.from(".project-main-info", {
    scrollTrigger: {
      trigger: ".project-main-info",
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

  // Animation de l'image projet
  gsap.from(".project-images img", {
    scrollTrigger: {
      trigger: ".project-images img",
      start: "top 90%",
      toggleActions: "play none none reverse"
    },
    x: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // Animation du lien GitHub
  gsap.from(".github-link", {
    scrollTrigger: {
      trigger: ".github-link",
      start: "top 95%",
      toggleActions: "play none none reverse"
    },
    y: 30,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out"
  });

  // Animation du <hr>
  gsap.from("hr", {
    scrollTrigger: {
      trigger: "hr",
      start: "top 98%",
      toggleActions: "play none none reverse"
    },
    scaleX: 0,
    opacity: 0,
    transformOrigin: "left center",
    duration: 0.7,
    immediateRender: false
  });

  // Animation séquentielle de chaque bloc de la description projet (ignore les vides sauf <a> et <button>)
  gsap.utils.toArray('.project-desc > *').forEach((el) => {
    if (
      el.textContent.trim() !== "" ||
      el.tagName === "A" ||
      el.tagName === "BUTTON"
    ) {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 99%",
            toggleActions: "play none none none",
            once: true
          }
        }
      );
    }
  });
});