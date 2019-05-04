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

async function fetchProducts(proURL){
    var prod = await fetch(proURL).then(res => res.json()).then(products => {
        return products.data.products[0]
    })
    return prod
}

export { fetchCatAndProducts, fetchProducts }