(()=>{let e=$('[bmg-custom-list = "prev"]'),t=$('[bmg-custom-list = "next"]');$(".journey-slider_arrow-wrapper").eq(1),$referenceText=$('[bmg-custom-list = "next-slide"]'),$yearLinksWrapper=$(".journey_years"),$dynList=$('[bmg-custom-list = "c-list-wrapper"]').children().eq(0);let r=n();function n(){let e=$yearLinksWrapper.find(".w--current"),t=e.prev().attr("href"),r=e.next().attr("href");return{prev:void 0!=t?t:"/journey",next:void 0!=r?r:"/journey"}}function i(){return parseInt($referenceText.text().split("/")[0])}e.click(()=>{2==i()&&r.prev&&(window.location.href=r.prev)}),t.click(()=>{i()>$dynList.children().length&&r.next&&(window.location.href=r.next)})})();
