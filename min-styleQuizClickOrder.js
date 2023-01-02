(() => {
    let e = "pl_style-quiz_number",
        i = "bmg-data-checkbox-name",
        t = "Style Quiz Click Order";
    $('[bmg-element = "Style Quiz"]').each(function () {
        let a = $(this),
            n = a.find(".w-checkbox"),
            d = [];
        a.prepend(`<input type="hidden" data-name="${t}" name="${t}">`);
        let l = a.find(`[data-name="${t}"]`);
        n.each(function () {
            let t = $(this),
                c = t.find(".pl_service-card-shadow").text(),
                h = !1;
            t.attr(i, c),
                t.click(() => {
                    if (h) return !1;
                    (h = !0),
                        setTimeout(() => {
                            h = !1;
                        }, 10);
                    let t;
                    d.includes(c) ? d.splice(d.indexOf(c), 1) : d.push(c),
                        (t = []),
                        n.find(`.${e}`).remove(),
                        l.val(""),
                        d.forEach((e, n) => {
                            ($checkBox = a.find(`[${i} = "${e}"]`)), t.push($checkBox), l.val(`${l.val()}${0 == n ? "" : ", "}${n + 1}: ${e}`);
                        }),
                        t.forEach((i, t) => {
                            i.append(`<div class="${e}">${t + 1}</div>`);
                        });
                });
        });
    });
})();
