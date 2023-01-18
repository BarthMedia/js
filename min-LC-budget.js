(() => {
    let e = "bmg-data-custom-requirements-passed";
    $('[bmg-element = "Plus Dragger Step"]').each(function () {
        let t = $(this),
            l = t.find("h4"),
            n = t.find('[fs-rangeslider-element = "display-value"], [fs-rangeslider-element = "display-value-2"], [fs-rangeslider-element = "display-value-3"]'),
            i = t.find(".w-checkbox-input");
        t.find('[bmg-form="Continue Button"]').click(() => {
            let r = !0;
            n.each(function (e) {
                let t = $(this),
                    n = l.eq(e)[0],
                    a = parseInt(t.text()),
                    s = 2 == e && i.hasClass("w--redirected-checked");
                0 != a || s ? gsap.to(n, { color: "#333", duration: 0.43 }) : (gsap.to(n, { color: "red", duration: 0.43 }), (r = !1));
            }),
                r ? t.attr(e, !0) : t.removeAttr(e);
        });
    });
})();
