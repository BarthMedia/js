(() => {
    let o = $("#Terms-Conditions:is( [required] )"),
        r = o.prev(),
        l = o.closest("label"),
        t = o.closest('[bmg-form = "Form Step"]').find('[bmg-form="Continue Button"]');
    console.log(t);
    let e = !0,
        i = !1;
    o.val(""),
        l.click(() => {
            !i &&
                ((i = !0),
                setTimeout(() => {
                    i = !1;
                }, 100),
                e ? ((e = !1), o.val("on"), gsap.to(r[0], { borderColor: "", duration: 0.35 })) : ((e = !0), o.val("")));
        }),
        t.click(() => {
            "" == o.val() ? gsap.to(r[0], { borderColor: "crimson", duration: 0.35 }) : gsap.to(r[0], { borderColor: "", duration: 0.35 });
        });
})();
