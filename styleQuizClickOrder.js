(() => { /* Start of: [BMG.studio] Style quiz click order script */

// + Strings +

// Selectors
const stepSelector = '[bmg-element = "Style Quiz"]',
    checkBoxSelector = '.w-checkbox',
    textWrapperSelector = '.pl_service-card-shadow'

// Classes
const numberClass = 'pl_style-quiz_number'

// Attributes
const checkBoxValueAttribute = 'bmg-data-checkbox-name',
    inputAttribute = 'Style Quiz Click Order'


// + Main +
$(stepSelector).each(function()
{
    // Elements
    let $step = $(this),
        $checkBoxes = $step.find(checkBoxSelector)

    // Values
    let clickMemory = []


    // - - - Functions - - -

    // Create hidden input field
    $step.prepend(`<input type="hidden" data-name="${ inputAttribute }" name="${ inputAttribute }">`)

    let $input = $step.find(`[data-name="${ inputAttribute }"]`)

    
    // Checkboxes loop
    $checkBoxes.each(function()
    {
        // Element
        let $checkBox = $(this),
            $textWrapper = $checkBox.find(textWrapperSelector)

        // Values
        let textValue = $textWrapper.text(),
            preventDoubleClick = false

        // Set checkbox name attribute
        $checkBox.attr( checkBoxValueAttribute, textValue )

        // Click event
        $checkBox.click(() => 
        {
            // Prevent double firing
            if ( !preventDoubleClick )
            {
                preventDoubleClick = true

                setTimeout(() => { preventDoubleClick = false }, 10)
            }
            else
            {
                return false // Break
            }

            // Action logic
            if ( !clickMemory.includes(textValue) )
            {
                // Add text string to memory
                clickMemory.push(textValue)
            }
            else
            {
                // Remove text string from memory
                clickMemory.splice( clickMemory.indexOf( textValue ), 1 )
            }

            updateCheckBoxes()
        })
    })

    
    // Update check box numbers
    function updateCheckBoxes()
    {
        // - - Values - -
        let checkBoxArray = []
        

        // - - Functions - -
        
        // Remove existing numbers
        $checkBoxes.find( `.${ numberClass }` ).remove()

        // Clear input
        $input.val('')

        // Find relevant checkboxes
        clickMemory.forEach((textValue, index) => 
        {
            // Populate check box array
            $checkBox = $step.find(`[${ checkBoxValueAttribute } = "${ textValue }"]`)

            checkBoxArray.push($checkBox)

            // Populate style quiz order input field
            $input.val(`${ $input.val() }${ index == 0 ? '' : ', ' }${ index + 1 }: ${ textValue }`)
        })

        // Loop through relevant checkboxes
        checkBoxArray.forEach(($checkBox, index) => 
        {
            $checkBox.append(`<div class="${ numberClass }">${ index + 1 }</div>`)
        })
    }
})

})() /* End of: [BMG.studio] Style quiz click order script */
