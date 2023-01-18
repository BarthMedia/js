$('[bmg-element = "Specific Rooms Step"]').each(function () {
    let o = $(this),
        t = o.find(".pl_specific-rooms_minus");
    ($numbers = o.find('[bmg-element="Number"]')),
        ($button = o.find('[bmg-form="Continue Button"]')).click(() => {
            "Passed!" != o.attr("bmg-data-custom-requirements-passed")
                ? ($numbers.each(function () {
                      gsap.to(this, { color: "crimson", duration: 0.43 });
                  }),
                  t.each(function () {
                      gsap.to(this, { backgroundColor: "crimson", duration: 0.43 });
                  }))
                : ($numbers.each(function () {
                      gsap.to(this, { color: "black", duration: 0.43 });
                  }),
                  t.each(function () {
                      gsap.to(this, { backgroundColor: "black", duration: 0.43 });
                  }));
        });
});

