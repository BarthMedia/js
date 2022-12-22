(() => { /* Start of: [BMG.studio] Last checkbox */

// + Strings +

// Selectors
const checkboxSelector = '.w-checkbox-input:is( [required] )',
    parentSelector = 'label'

// Elements
const $box = $(checkboxSelector),
    $parent = $box.closest(parentSelector)

// Values
let isOddClick = true,
    isDoubleClick = false

// Init
$box.val('')


// + Main +

// Click event
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
    }
    else
    {
        isOddClick = true

        $box.val('')
    }
})
})() /* End of: [BMG.studio] Last checkbox */
