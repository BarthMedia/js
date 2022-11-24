(() => { /* Start of: Custom GSAP archieve script */

// Init
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// Global strings & elements
const lastSection = document.querySelector('.section_abraxo'),
    logo = document.querySelector('.logo.w-embed'),
    links = document.querySelectorAll('.nav__text')

// Main function
ScrollTrigger.create({
    trigger: lastSection,
    start: "top 10%",
    onEnter: () => 
    {
        let $button = $('.section_abraxo').find('a[aria-controls="w-tabs-0-data-w-pane-0"]')

        if ( $button.attr('aria-selected') == 'true' )
        {
            gsap.to([logo, links], { color: 'rgb(0, 0, 0)', duration: 1 })
        }
        else
        {
            gsap.to([logo, links], { color: 'rgb(255, 255, 255)', duration: 1 })
        }
    }
})

})()/* End of: Custom GSAP archieve script */
