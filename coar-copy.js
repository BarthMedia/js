/* Start of: BMG - Arco xano code */

// Global strings
const listSelector = '[bmg-arco = "c-list"]',
    itemSelector = '[bmg-arco = "c-list-item"]',
    thumbnailSelector = '[bmg-arco = "thumbnail"]',
    buttonSelector = '[bmg-arco-button]',
    buttonXanoIdAttribute = 'bmg-arco-xano-id',
    nameSelector = '[bmg-arco = "name"]',
    dateSelector = '[bmg-arco = "date"]',
    xanoUrlString = 'https://xju6-kpzy-l8vj.n7.xano.io/api:4lTavcfO/component_list'

// Main function
$(listSelector).each(function()
{
    // Glocal elements & variables
    let $list = $(this),
        $dynItemPrototype = $list.find(itemSelector).eq(0).clone(),
        request = new XMLHttpRequest()

    // + Glocal functions +

    // Request xano data
    request.open('GET', xanoUrlString, true)
    request.onload = function()
    {
        // Local variables
        let data = JSON.parse(this.response)

        // - Local function -
        if (request.status >= 200 && request.status < 400)
        {
            // Remove prototypes
            $list.empty()
            
            // Data loop
            data.forEach( component =>
            {
                // Local elements
                let $item = $dynItemPrototype.clone(),
                    $thumbnail = $item.find( thumbnailSelector ),
                    $buttons = $item.find( buttonSelector ),
                    $name = $item.find( nameSelector ),
                    $date = $item.find( dateSelector )

                // Change thumbnail
                $thumbnail.attr( 'src', component.thumbnail.url )

                // Prepare buttons
                prepareButtons( $buttons, component.id, component.platforms_in_use ) 

                // Change name
                $name.text( component.name )

                // Change name
                $date.text( component.created_at )
                
                // Append new item
                $list.append( $item )
            })
            
            // Tell the DOM the list is loaded
            $list.attr('bmg-arco-load-status', 'loaded')
        }
        else
        {
            // Tell the DOM the list is not loaded
            $list.attr('bmg-arco-load-status', request.status)
        }
    }

    // Send request to API
    request.send()

    // return true to jump to the next loop in .each()
})


// + Helper functions +

// - Copy to clipboard function -

// Variables
let xanoPlatformBaseUrlString = 'https://xju6-kpzy-l8vj.n7.xano.io/api:4lTavcfO/component_list/',
    copyText = '',
    copyType = ''

// Copy to clipboard function
document.addEventListener("copy", (event) => 
{
    event.clipboardData.setData( copyType, copyText )
    event.preventDefault()
})

// Main button init function
function initButtonCopyFunction( $button, platform, xanoRowId )
{
    // Local elements & variables
    let $icon = $button.find('img').clone()

    // Return to usual styles
    function preLoadStyles( text )
    {
        setTimeout(function()
        {
            $button.text( text )

            setTimeout(function()
            {
                $button.empty()
                $button.append( $icon )
                $button.css({ 'pointer-events': 'auto' })
            }, 1500)
        }, 1500)
    }
    
    $button.click(() => 
    {
        // Local variables
        let request = new XMLHttpRequest()

        // Show loading...
        $button.css({ 'pointer-events': 'none' })
        $button.empty()
        $button.text('Copying...')

        // Request xano data
        request.open('GET', xanoPlatformBaseUrlString + xanoRowId, true)
        request.onload = function()
        {
            // Local variables
            let data = JSON.parse(this.response)

            // - Local function -
            if (request.status >= 200 && request.status < 400)
            {
                // Call & set clipboard function
                copyText = data[platform]
                copyType = data[platform].charAt(0) == '{' ? 'application/json' : 'text/html'
                document.execCommand("copy")

                // Show success
                preLoadStyles( 'Copied!' )
            }
            else
            {
                // Show error
                preLoadStyles( `Error: ${ request.status }` )
            }
        }
        request.send()
    })
}

// Prepare buttons
function prepareButtons( $buttons, xanoRowId, platformsInUseArray  ) 
{   
    // For each button
    $buttons.each(function()
    {
        let platform = $(this).attr( removeSquareBrackets( buttonSelector ) ) || 'none'

        if ( !platformsInUseArray.includes( platform ) )
        {
            // Hide unused buttons
            $(this).remove()
        }
        else
        {
            // Initialize button copy to clipboard function
            initButtonCopyFunction( $(this), platform, xanoRowId )
        }
    })
}

// Removes square brackets
function removeSquareBrackets( string )
{
    return string.replace(/\[/g, '').replace(/\]/g, '')
}

/* End of: BMG - Arco xano code */
