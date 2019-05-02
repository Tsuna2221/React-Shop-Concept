async function fetchCatAndProducts(catURL, proURL){
    var cat = await fetch(catURL).then(res => res.json()).then(categories => {
        return categories
    })

    var prod = await fetch(proURL).then(res => res.json()).then(products => {
        return products.data
    })
    return {
        categories: cat,
        products: prod
    }
}

export { fetchCatAndProducts }