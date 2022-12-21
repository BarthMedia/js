(() => {
    let t = $('[bmg-element = "Other Input Trigger"]'),
        e = $('[bmg-element = "Other Input Wrapper"]'),
        i = (e.find("input"), t.closest("form")),
        o = { opacity: 0, height: 0, marginTop: "0rem", duration: 0.35 },
        r = { opacity: 1, height: "auto", marginTop: "3rem", duration: 0.35 };
    gsap.set(e[0], { ...o });
    let h = !1,
        g = !1,
        n = 150;
    t.click(() => {
        !g &&
            ((g = !0),
            setTimeout(() => {
                g = !1;
            }, 100),
            h ? ((h = !1), gsap.to(e[0], o), gsap.to(i[0], { duration: 0.35, height: i.height() - n })) : ((h = !0), gsap.to(e[0], r), gsap.to(i[0], { duration: 0.35, height: i.height() + n })));
    });
})();
