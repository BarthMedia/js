(()=>{let t=$('[bmg-element = "Type List"], [bmg-element = "Size List"], [bmg-element = "Carpentry List"], [bmg-element = "Natural Stone List"]'),e=$('[bmg-element = "Hover Image"]');t.find(".w-dyn-item").each(function(){let t=$(this),i=$(this).find("img").attr("src");i&&t.hover(()=>{e.attr("src",i),gsap.to(e[0],{opacity:1,duration:0})},()=>{gsap.to(e[0],{opacity:0,duration:0}),e.attr("src","")})})})();