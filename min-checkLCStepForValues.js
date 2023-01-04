(() => {
    let e = "bmg-data-custom-requirements-passed";
    $('[bmg-element = "Specific Rooms Step"]').each(function () {
        let t = $(this),
            i = t.find('[bmg-element = "Quantity Wrapper"]'),
            n = i.find("input");
        i.each(function () {
            $(this)
                .find('[bmg-element = "Left"], [bmg-element = "Right"]')
                .click(() => {
                    let i;
                    (i = !0),
                        n.each(function () {
                            "0" != ($(this).val() || "0") && (i = !1);
                        }),
                        i ? t.removeAttr(e) : t.attr(e, "Passed!");
                });
        });
    });
})();
