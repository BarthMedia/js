(() => { /* Start of: [BMG.studio] BGS events slider code */

// + Strings +

// Selectors
const targetRichtextSelector = '[bmg-element = "Target Rich Text"]',
    targetImageSelector = '[bmg-element = "Target Image"]',
    sectionSelector = '[bmg-element = "BGS Events Section"]',
    dynItemSelector = '.w-dyn-item',
    sourceRichtextSelector = '[bmg-element = "Rich Text"]',
    sourceImageSelector = '[bmg-element = "Image"]',
    slideNavSelector = '.w-slider-nav',
    arrowWrapperSelector = '.w-slider-arrow-left, .w-slider-arrow-right',
    slideSelector = '.w-slide'


// + Main +
function main() { $(sectionSelector).each(function() 
{
    // Elements
    let $section = $(this),
        $targetRichtext = $section.find(targetRichtextSelector),
        $targetImage = $section.find(targetImageSelector),
        $dynItems = $section.find(dynItemSelector),
        $arrowWrapper = $section.find(arrowWrapperSelector),
        $slides = $section.find(slideSelector),
        borderItems = returnVanillaElements( $slides.children().children().not(sourceRichtextSelector).not(sourceImageSelector) )
        

    // Values
    let dynData = [],
        activeIndex = 0

    // - Functions -

    // Populate dynData
    populateDynData( dynData, $dynItems )

    // Show first item
    showNthDynItem( dynData[0], $targetRichtext, $targetImage, borderItems, activeIndex )

    // Event listener
    $arrowWrapper.click(() => 
    {
        setTimeout(() => {
            // Elements
            let $nav = $section.find(slideNavSelector)

            // Value
            let activeInt = findActiveSlide( $nav.children() )

            // Logic
            if ( activeIndex == activeInt ) return
            else
            {
                // Update
                activeIndex = activeInt

                // Show active item
                showNthDynItem( dynData[activeIndex], $targetRichtext, $targetImage, borderItems, activeIndex )
        }
        }, 10)
    })

    // Event loop for slides
    $slides.each(function(index)
    {
        // Elements
        let $slide = $(this),
            $navDot = $section.find(slideNavSelector).children().eq(index)

        // Event listener
        $slide.click(() => 
        {
            // Fire webflow slider
            $navDot.click()

            // Call gsap animation
            setTimeout(() => {
                showNthDynItem( dynData[index], $targetRichtext, $targetImage, borderItems, index )
            }, 10)
        })
    })
}) }


// + Helper +

// Find active dot
function findActiveSlide( $es )
{
    // Values
    let int

    // Loop
    $es.each(function(index)
    {
        if ( $(this).hasClass('w-active') ) { int = index }
    })

    // Return
    return int
}

// Replace placeholders
function showNthDynItem( obj, $targetRichtext, $targetImage, slides, n )
{
    // Richtext
    if ( !obj.$richtext.hasClass('w-dyn-bind-empty') )
    {
        $targetRichtext.empty()
        $targetRichtext.append( obj.$richtext )
    }

    // Image
    if ( !obj.$image.hasClass('w-dyn-bind-empty') )
    {
        $targetImage.parent().children().hide()
        $targetImage.parent().append( obj.$image )
    }

    // Borders
    let tl = gsap.timeline()

    tl.to(slides, { duration: .49, borderColor: '#d4d5de' })
    tl.to(slides, { duration: 0, borderColor: '' })
    gsap.to(slides[n], { duration: .49, borderColor: '#0f55bd' })
}

// Return vanilla JS elements / nodelist
function returnVanillaElements( $es )
{
    // Values
    let arr = []

    // Loop
    $es.each(function()
    {
        arr.push(this)
    })

    // Return
    return arr
}

// Populate dynamic data array
function populateDynData( arr, $es )
{
    // Loop
    $es.each(function()
    {
        // Elements
        let $e = $(this),
            $r = $e.find(sourceRichtextSelector).clone(),
            $i = $e.find(sourceImageSelector).clone()

        // Manipulate
        $r.removeClass('hide')
        $i.removeClass('hide')

        // Populate
        arr.push(
        {
            $richtext: $r,
            $image: $i
        })
    })
}


// + Loader +
function loader()
{
    // Elements
    let $children = $(sectionSelector).last().find('.w-dyn-items').children()

    // Values
    let i = $children.length

    // Logic & loop
    if ( i == 0 ) { main() }
    else
    {
        setTimeout( loader, 100 )
    }
}
loader()

})() /* End of: [BMG.studio] BGS events slider code */
