
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('DOMContentLoaded', () => {
  // Navbar animation
  gsap.from("nav", { y: -80, opacity: 0, duration: 1, ease: "power2.out", delay: 0.5 });
  gsap.from(".homepage .big-title", { y: 60, opacity: 0, duration: 1 });
  gsap.from(".homepage .mid-title, .homepage .subtitle", { y: 40, opacity: 0, duration: 1, stagger: 0.3, delay: 1 });
  gsap.from(".homepage .project-card", { x: -50, opacity: 0, duration: 0.7, stagger: 0.2, delay: 1.5 });


  // Profil section (anime chaque élément séparément pour garder l'alignement)
  gsap.from(".profil h1, .profil h2, .profil h3, .profil p, .profil img", {
    scrollTrigger: {
      trigger: ".profil",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2
  });


  // Compétences (titre)
  gsap.from(".Competences h1", {
    scrollTrigger: {
      trigger: ".Competences",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 60,
    opacity: 0,
    duration: 1
  });

  // Animation sur chaque bloc de compétence
  gsap.utils.toArray('.competence-block').forEach((block, i) => {
    gsap.fromTo(
      block,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: block,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Projets (titre et hr)
  gsap.from(".projets h1, .projets hr", {
    scrollTrigger: {
      trigger: ".projets",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.15
  });

  // Animation sur chaque carte projet
  gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.fromTo(
      card,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // BTS SIO section (titre et général)
  gsap.from("#bts, .bts-general", {
    scrollTrigger: {
      trigger: "#bts",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.15
  });

  // Animation sur les options SISR/SLAM
  gsap.utils.toArray('.bts-option').forEach((el, i) => {
    gsap.fromTo(
      el,
      { x: i % 2 === 0 ? -80 : 80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Veille techno
  gsap.from(".veille-techno h2, .veille-card", {
    scrollTrigger: {
      trigger: ".veille-techno",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2
  });

  // Contact section
  gsap.from("#contact, .contact-wrapper", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 60,
    opacity: 0,
    duration: 1
  });

  // Animation sur chaque lien de contact
  gsap.utils.toArray('.contact-link').forEach((el, i) => {
    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: i * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Animation des hr (hors .hr-profil)
  gsap.utils.toArray("hr:not(.hr-profil)").forEach(hr => {
    gsap.from(hr, {
      scrollTrigger: {
        trigger: hr,
        start: "top 95%",
        toggleActions: "play none none reverse"
      },
      scaleX: 0,
      opacity: 0,
      transformOrigin: "left center",
      duration: 0.7,
      immediateRender: false
    });
  });

  // Animation pour les hr de la section profil
  gsap.utils.toArray(".hr-profil").forEach(hr => {
    gsap.to(hr, {
      scaleX: 1,
      opacity: 1,
      duration: 0.7,
      delay: 0.2
    });
  });

  // Animation sur les H1 entre les parties (ceux entourés de hr)
  gsap.utils.toArray('.section-title').forEach((el, i) => {
    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Animation sur la localisation du profil
  gsap.from(".profil-lieu-text", {
    scrollTrigger: {
      trigger: ".profil-lieu-text",
      start: "top 90%",
      toggleActions: "play none none reverse"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});