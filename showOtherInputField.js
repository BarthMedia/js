(() => { 
/* Start of: [BMG.studio] Growing Input Field */

// + Strings +

// Selectors
const triggerSelector = '[bmg-element = "Other Input Trigger"]',
    inputWrapperSelector = '[bmg-element = "Other Input Wrapper"]'


// + Elements +
const $trigger = $(triggerSelector),
    $inputWrapper = $(inputWrapperSelector),
    $input = $inputWrapper.find('input'),
    $form = $trigger.closest('form')


// + Styling + 

// Objects
const cssHide = { opacity: 0, height: 0, marginTop: '0rem', duration: .35 },
    cssShow = { opacity: 1, height: 'auto', marginTop: '3rem', duration: .35 }

// Base
gsap.set($inputWrapper[0], { ...cssHide })


// + Main +

// Other option click
let doubleClick = false,
    fastClick = false,
    heightPlus = 150

// Event listener
$trigger.click(() =>
{
    // Too fast click
    if ( !fastClick )
    {
        fastClick = true

        setTimeout(() => { fastClick = false }, 100)
    }
    else
    {
        return
    }
    

    // Double click
    if ( !doubleClick )
    {
        doubleClick = true 

        gsap.to($inputWrapper[0], cssShow)
        gsap.to($form[0], { duration: .35, height: $form.height() + heightPlus })
    }
    else
    {
        doubleClick = false 

        gsap.to($inputWrapper[0], cssHide)
        gsap.to($form[0], { duration: .35, height: $form.height() - heightPlus })
    }
})

/* End of: [BMG.studio] Growing Input Field */
 })()
