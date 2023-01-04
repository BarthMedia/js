(() => { /* Start of: [BMG.studio] Specific Rooms Step error checking script */

// + Strings +

// Selectors
const stepSelector = '[bmg-element = "Specific Rooms Step"]',
    buttonWrapperSelector = '[bmg-element = "Quantity Wrapper"]',
    quantityButtonSelectors = '[bmg-element = "Left"], [bmg-element = "Right"]'

// Attributes
const requirementsPassedAttribute = 'bmg-data-custom-requirements-passed'


// + Main +
$(stepSelector).each(function()
{
    // Elements
    let $step = $(this),
        $wrappers = $step.find(buttonWrapperSelector),
        $inputs = $wrappers.find('input')

    // Wrapper loop
    $wrappers.each(function()
    {
        // Elements
        let $wrapper = $(this),
            $buttons = $wrapper.find(quantityButtonSelectors)

        // Event listener
        $buttons.click(() => 
        {
            checkAllInputs()
        })
    })
        
    // Check all inputs
    function checkAllInputs()
    {
        // Values
        let allValuesZero = true

        // Loop
        $inputs.each(function()
        {
            let val = $(this).val() || '0'

            if ( val != '0' )
            {
                allValuesZero = false
            }
        })

        // Logic
        if ( allValuesZero )
        {
            $step.removeAttr(requirementsPassedAttribute)
        }
        else
        {
            $step.attr(requirementsPassedAttribute, 'Passed!')
        }
    }
})

})() /* End of: [BMG.studio] Specific Rooms Step error checking script */
