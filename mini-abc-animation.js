(()=>{gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);let e='[animate = "none"]',t=$('h1, [animate = "h1"]').not(e),n=$('h2, [animate = "h2"]').not(e);function a(e,t=!1){let n=i(e);new SplitText(n,{type:"lines"}),new SplitText(n,{type:"lines"}),e.children().css({overflow:"hidden"}),e.each(function(){let e=$(this).children().children(),n=i(e);function a(){gsap.to(n,{y:0,duration:1,stagger:.2})}gsap.set(n,{y:e.parent().outerWidth()}),t||new ScrollTrigger.create({trigger:this,start:"top bottom",once:!0,onEnter:()=>a()}),t&&a()})}function i(e){let t=[];return e.each(function(){t.push(this)}),t}$("head").append(`
<styles>
.main-wrapper {
  padding-top: 6.5rem;
}

@media only screen and (max-width: 767px) {
  .main-wrapper {
    padding-top: 4rem;
  }
}
</styles>`),ScrollSmoother.create({smooth:1,content:".main-wrapper"}),"none"!=$("body").attr("animate")&&a(t,!0),"home"==$("body").attr("animate")&&a(n,!1)})();
