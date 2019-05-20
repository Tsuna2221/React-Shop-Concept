const parsePrice = (price) => {
    var priceString = price ? 
        new Intl.NumberFormat('en-US', {
            style: 'currency', 
            currency: 'USD',
            minimumFractionDigits: 2 
        }).format(parseInt(price.toFixed().substr(0, price.toFixed().length - 2)))
        : ""

    return priceString
}

export { parsePrice }