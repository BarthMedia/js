(()=>{let e='[bmg-element = "Target Rich Text"]',t='[bmg-element = "Target Image"]',n='[bmg-element = "BGS Events Section"]',i='[bmg-element = "Rich Text"]',o='[bmg-element = "Image"]',d=".w-slider-nav";function r(){$(n).each(function(){let n=$(this),r=n.find(e).clone(),s=n.find(e),m=n.find(t).clone(),f=n.find(t).parent(),u=n.find(".w-dyn-item"),p=n.find(".w-slider-arrow-left, .w-slider-arrow-right"),g=n.find(".w-slide"),y=l(g.children().children().not(i).not(o)),b=[],w=0;h(b,u),a(b[0],s,f,y,w,m,r),p.click(()=>{setTimeout(()=>{let e=c(n.find(d).children());w!=e&&a(b[w=e],s,f,y,w,m,r)},10)}),g.each(function(e){let t=$(this),i=n.find(d).children().eq(e);t.click(()=>{w=e,i.click(),setTimeout(()=>{a(b[e],s,f,y,e,m,r)},10)})})})}function c(e){let t;return e.each(function(e){$(this).hasClass("w-active")&&(t=e)}),t}function a(e,t,n,i,o,d,r){gsap.to(t[0],{opacity:0,duration:.25}),setTimeout(()=>{e.$richtext.hasClass("w-dyn-bind-empty")?(t.empty(),t.append(r)):(t.empty(),t.append(e.$richtext)),gsap.to(t[0],{opacity:1,duration:.25})},250),n.children().last().attr("src")!=d.attr("src")&&gsap.to(n[0],{opacity:0,duration:.25}),setTimeout(()=>{e.$image.hasClass("w-dyn-bind-empty")?(n.empty(),n.append(d)):(n.empty(),n.append(e.$image)),gsap.to(n[0],{opacity:1,duration:.25})},250);let c=gsap.timeline();c.to(i,{duration:.49,borderColor:"#d4d5de"}),c.to(i,{duration:0,borderColor:""}),gsap.to(i[o],{duration:.49,borderColor:"#0f55bd"})}function l(e){let t=[];return e.each(function(){t.push(this)}),t}function h(e,t){t.each(function(){let t=$(this),n=t.find(i).clone(),d=t.find(o).clone();n.removeClass("hide"),d.removeClass("hide"),e.push({$richtext:n,$image:d})})}function s(){0==$(n).last().find(".w-dyn-items").children().length?r():setTimeout(s,100)}s()})();
