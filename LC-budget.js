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
    const $step = $(this),
        $texts = $step.find(textSelector),
        $values = $step.find(valueSelector),
        $checkbox = $step.find(checkboxSelector),
        $button = $step.find(continueButtonSelector),
        $inputs = $step.find('.input');

    // Event listener
    $button.click(() => 
    {
        // Values
        let requirementPassed = true

        // Loop
        $values.each(function(index)
        {
            // Elements
            const $value = $(this),
                $input = $inputs.eq(index),
                text = $texts.eq(index)[0]
            
            // Values
            const val = parseInt( $value.text() ),
                inputVal = $input.val()

            console.log(inputVal)

            // Check if it is the third element
            const thirdCheckbox = index != 2 ? false : $checkbox.hasClass( wChecked )

            // Logic
            if ( val == 0 && !thirdCheckbox && inputVal == undefined )
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
