(() => { /* Start of: [BMG.studio] LC budget script */

// + Strings +

// Selectors
const stepSelector = '[bmg-element = "Plus Dragger Step"]',
    textSelector = 'h4',
    valueSelector = '[fs-rangeslider-element = "display-value"], [fs-rangeslider-element = "display-value-2"], [fs-rangeslider-element = "display-value-3"]',
    checkboxSelector = '.w-checkbox-input',
    continueButtonSelector = '[bmg-form="Continue Button"]'

// Attributes
const requirementsPassedAttribute = 'bmg-data-custom-requirements-passed',
    inputMinimumAttribute = 'bmg-input-min'

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

    // Format inputs
    $inputs.on('input', function() {
        $(this).val( formatNumber($(this).val()) )
    })

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
            const sliderVal = parseInt( $value.text().replace(/\D/g, '') ),
                inputVal = parseInt( $input.val().replace(/\D/g, '') || 0 ),
                inputMin = parseInt( $input.attr(inputMinimumAttribute) )


            // Check if it is the third element
            const thirdCheckbox = index != 2 ? false : $checkbox.hasClass( wChecked )

            // Logic
            if ( sliderVal < inputMin && !thirdCheckbox && ( inputVal < inputMin ) )
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


// + Helper +

// Format numbers properly
function formatNumber(input) {
  // Remove all non-digit characters from the input
  let digitsOnly = input.replace(/\D/g, '');

  // Split the string into groups of three digits each, starting from the end
  let groups = digitsOnly.match(/.{1,3}(?=(.{3})*$)/g);

  // Join the groups with a comma between them and return the result
  let result = groups ? groups.join(',') : '';
  
  // Make sure the first digit is not 0
  if (result.startsWith('0')) {
    result = result.slice(1);
  }

  return result;
}

})() /* End of: [BMG.studio] LC budget script */
