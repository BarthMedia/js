(() => { /* Start of: [BMG.studio] Il Granito Filter script */

// + Global Values +

// - Selectors -

// Custom
const collectionItemListSelector = '[bmg-element = "Item Data List"]',
    typeListSelector = '[bmg-element = "Type List"]',
    sizeListSelector = '[bmg-element = "Size List"]',
    carpentryListSelector = '[bmg-element = "Carpentry List"]',
    natturalStoneSelector = '[bmg-element = "Natural Stone List"]'

// Webflow 
const wDynItemSelector = '.w-dyn-item'


// - Attributes -
const fsFilterAttribute = 'fs-cmsfilter-field',
    bmg_2ndFsFilterAttribute = 'bmg-cmsfilter-field',
    redirectUrlAttribute = 'bmg-data-redirect-url'


// - Elements -
const $collectionItemList = $(collectionItemListSelector),
    $sizeList = $(sizeListSelector),
    $urlDiv = $(`[${ redirectUrlAttribute }]`)


// - Values -
let filterByObject = {}


// + Main Functions +

// - - - Radio Lists - - -
$(typeListSelector).add(sizeListSelector).add(carpentryListSelector).add(natturalStoneSelector).each(function()
{
    // - - Values - -

    // Elements
    let $list = $(this),
        $items = $list.find(wDynItemSelector)


    // - - Functions - -

    // Loop through items
    $items.each(function()
    {
        // Elements
        let $item = $(this),
            $filter = $item.find(`[${ fsFilterAttribute }]`),
            filterValue = $filter.text(),
            filterType = $filter.attr(fsFilterAttribute)

        // Action
        $item.click(() =>
        {
            filterByObject[filterType] = filterValue
        })
    })
})


// - - - Type List Shall Filter Size List - - -

// Elements
let $sizeListBmgFilters = $sizeList.find(`[${ bmg_2ndFsFilterAttribute }]`)

// Function
$(typeListSelector).find(wDynItemSelector).each(function()
{
    // Elements
    let $item = $(this),
        $filter = $item.find(`[${ fsFilterAttribute }]`),
        filterValue = $filter.text()

    // Action
    $item.click(() =>
    {
        $sizeListBmgFilters.each(function()
        {
            // Elements
            let $sizeFilter = $(this),
                $parentDynItem = $sizeFilter.closest(wDynItemSelector),
                sizeFilterValue = $sizeFilter.text()

            // Logic
            if ( filterValue == sizeFilterValue )
            {
                $parentDynItem.show()
            }
            else
            {
                $parentDynItem.hide()
            }
        })
    })
})


// - - - Last List Click - Filter Collection Item List - - -
$(natturalStoneSelector).click(() => 
{
    // Variables
    let $filteredItem = $()

    // Loop
    $collectionItemList.find(wDynItemSelector).each(function()
    {
        // Elements & variables
        let $item = $(this),
            $filters = $item.find(`[${ fsFilterAttribute }]`),
            isFilteredItem = true

        // Compare loop
        $filters.each(function()
        {
            // Elements & variables
            let $filter = $(this),
                filterValue = $filter.text(),
                filterType = $filter.attr(fsFilterAttribute)
                
            // Logic
            if ( filterValue != '' && filterByObject[filterType] != filterValue )
            {
                isFilteredItem = false
            }
        })

        // Loigc
        if ( isFilteredItem )
        {
            $filteredItem = $item
        }
    })

    // Value
    let href = $filteredItem.find('a').attr('href')

    // Action
    $urlDiv.attr(redirectUrlAttribute, href)
})


})() /* End of: [BMG.studio] Il Granito Filter script */
