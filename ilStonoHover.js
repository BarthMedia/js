(() => { /* Start of: [BMG.studio] Il Granito hover image script */

// + Global Values +

// - Selectors -

// Custom
const typeListSelector = '[bmg-element = "Type List"]',
    sizeListSelector = '[bmg-element = "Size List"]',
    carpentryListSelector = '[bmg-element = "Carpentry List"]',
    natturalStoneSelector = '[bmg-element = "Natural Stone List"]',
    hoverImageSelector = '[bmg-element = "Hover Image"]'

// Webflow 
const wDynItemSelector = '.w-dyn-item'

// Elements
let $lists = $(`${ typeListSelector }, ${ sizeListSelector }, ${ carpentryListSelector }, ${ natturalStoneSelector }`),
    $hoverImage = $(hoverImageSelector)

// Variables
let timeOutStorage
    

// + Functions +

// Loop through the list's items
$lists.find(wDynItemSelector).each(function()
{
    // Elements
    let $item = $(this),
        imgUrl = $(this).find('img').attr('src')

    // Action
    if (imgUrl) $item.hover( () =>
    {
        $hoverImage.attr('src', imgUrl)
        gsap.to( $hoverImage[0], { opacity: 1, duration: 0 } )
    }, () => 
    {
        gsap.to( $hoverImage[0], { opacity: 0, duration: 0 } )
        $hoverImage.attr('src', '')
    })
})

})() /* End of: [BMG.studio] Il Granito hover image script */
