(()=>{function t(t){let e=[];return t.each(function(){e.push(this)}),e}$('[bmg-element = "IG Grid"]').each(function(){let e=$(this),n=t(e.children());gsap.set(n,{scale:.2}),new ScrollTrigger.create({trigger:e[0],start:"top bottom",once:!0,onEnter:()=>void gsap.to(n,{scale:1,duration:1,stagger:.1})})})})();
