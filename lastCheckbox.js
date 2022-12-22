(() => { /* Start of: [BMG.studio] Last checkbox */

// + Strings +

// Selectors
const checkboxSelector = '#Terms-Conditions:is( [required] )',
    parentSelector = 'label',
    stepSelector = '[bmg-form = "Form Step"]',
    buttonSelector = '[bmg-form="Continue Button"]'

// Elements
const $box = $(checkboxSelector),
    $fakeBox = $box.prev(),
    $parent = $box.closest(parentSelector),
    $button = $box.closest(stepSelector).find(buttonSelector)

    console.log($button)

// Values
let isOddClick = true,
    isDoubleClick = false

// Init
$box.val('')


// + Main +

// - Checkbox click event -
$parent.click(() => 
{
    // Double click prevention
    if ( !isDoubleClick )
    {
        isDoubleClick = true

        setTimeout(() => { isDoubleClick = false }, 100)
    }
    else
    {
        return // Break / Prevention
    }

    // Logic
    if ( isOddClick )
    {
        isOddClick = false

        $box.val('on')
        gsap.to($fakeBox[0], { borderColor: '', duration: .35 })
    }
    else
    {
        isOddClick = true

        $box.val('')
    }
})

    
// - Button click event -
$button.click(() => 
{
    if ( $box.val() == '' )
    {
        gsap.to($fakeBox[0], { borderColor: 'crimson', duration: .35 })
    }
    else
    {
        gsap.to($fakeBox[0], { borderColor: '', duration: .35 })
    }
})
    
})() /* End of: [BMG.studio] Last checkbox */
