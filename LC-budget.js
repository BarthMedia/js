(() => { /* Start of: [BMG.studio] LC budget script */

// + Strings +

// Selectors
const stepSelector = '[bmg-element = "Plus Dragger Step"]',
    textSelector = 'h4',
    valueSelector = '[fs-rangeslider-element = "display-value"], [fs-rangeslider-element = "display-value-2"], [fs-rangeslider-element = "display-value-3"]',
    checkboxSelector = '.w-checkbox-input',
    continueButtonSelector = '[bmg-form="Continue Button"]'

// Attributes
const requirementsPassedAttribute = 'bmg-data-custom-requirements-passed'

// Classes
const wChecked = 'w--redirected-checked'


// + Main +
$(stepSelector).each(function()
{
    // Elements
    let $step = $(this),
        $texts = $step.find(textSelector),
        $values = $step.find(valueSelector),
        $checkbox = $step.find(checkboxSelector),
        $button = $step.find(continueButtonSelector)

    // Event listener
    $button.click(() => 
    {
        // Values
        let requirementPassed = true

        // Loop
        $values.each(function(index)
        {
            // Elements
            let $value = $(this),
                text = $texts.eq(index)[0]
            
            // Values
            let val = parseInt( $value.text() )

            // Check if it is the third element
            let thirdCheckbox = index != 2 ? false : $checkbox.hasClass( wChecked )

            // Logic
            if ( val == 0 && !thirdCheckbox )
            {
                // Animation
                gsap.to( text, { color: 'red', duration: .43 } )

                // Update glocal variable
                requirementPassed = false
            }
            else
            {
                // Animation
                gsap.to( text, { color: '#333', duration: .43 } )
            }
        })

        // Logic
        if ( requirementPassed )
        {
            $step.attr(requirementsPassedAttribute, true)
        }
        else
        {
            $step.removeAttr(requirementsPassedAttribute)
        }
    })
})

})() /* End of: [BMG.studio] LC budget script */
