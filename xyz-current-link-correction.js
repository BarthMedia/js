(() => {
// XYZ - Overlapping texts correction script

// Element
let $theCurrent

// Loop
$('.w--current').each(function()
{
    if ( $(this).hasClass('inner-nav_menu-link') ) $theCurrent = $(this)
})

// Elements
let $theContent = $theCurrent.next(),
    $theOtherLinks = $theCurrent
        .closest('.w-tab-pane')
        .find('.inner-nav_menu-link')
        .not($theCurrent)

// Hover event listener
$theOtherLinks.mouseover(function()
{
    // Only fire once
    $theOtherLinks.unbind('mouseover')

    // Logic
    gsap.to( $theContent[0], { opacity: 0, duration: 0.3 } )
})
})()
