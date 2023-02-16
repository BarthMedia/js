(()=>{gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);let t='[animate = "none"]',e=$('h1, [animate = "h1"], [animate = "text"]').not(t),n=$('h2, [animate = "h2"]').not(t);function a(t,e=!1){let n=i(t);new SplitText(n,{type:"lines"}),new SplitText(n,{type:"lines"}),t.children().css({overflow:"hidden"});let a=new gsap.timeline;t.each(function(){let t=$(this).children().children(),n=i(t);function o(){a.to(n,{opacity:1,y:0,duration:1,stagger:.2},">-.8")}gsap.set(n,{opacity:0,y:t.parent().outerWidth()}),e||new ScrollTrigger.create({trigger:this,start:"top bottom",once:!0,onEnter:()=>o()}),e&&o()})}function i(t){let e=[];return t.each(function(){e.push(this)}),e}$("head").append(`
<style>
.main-wrapper {
  padding-top: 6.5rem;
}
@media only screen and (max-width: 767px) {
  .main-wrapper {
    padding-top: 4rem;
  }
}
</style>`),"off"!=$("body").attr("smooth-scroll")&&ScrollSmoother.create({smooth:1,content:".main-wrapper"}),"none"!=$("body").attr("animate")&&a(e,!0),"home"==$("body").attr("animate")&&a(n,!1)})();
