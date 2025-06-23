
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.timeline ul li').forEach(li => {
  const content = li.querySelector('.timeline-content');

  gsap.fromTo(content,
    { autoAlpha: 0, y: 80 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: li,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      onComplete: () => {
        li.classList.add('point-visible');
      },
      onReverseComplete: () => {
        li.classList.remove('point-visible');
      }
    }
  );
});