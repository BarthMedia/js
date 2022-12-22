(() => {
    let l = $(".w-checkbox-input:is( [required] )"),
        e = l.closest("label"),
        c = !0,
        a = !1;
    l.val(""),
        e.click(() => {
            !a &&
                ((a = !0),
                setTimeout(() => {
                    a = !1;
                }, 100),
                c ? ((c = !1), l.val("on")) : ((c = !0), l.val("")));
        });
})();
