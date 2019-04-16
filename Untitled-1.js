var getAmazon = (categories) => {
    var title = document.getElementById('productTitle').innerText
    var company = document.getElementById('bylineInfo').innerText
    var price = parseInt(document.getElementById('priceblock_ourprice').innerText.replace("$", "").replace(".", "").replace(",", ""))
    var price_percetage = !document.querySelector('.priceBlockSavingsString') ? 0 : parseInt(document.querySelector('.priceBlockSavingsString').innerText.match(/\((.*)\)/).pop().replace("%", ""))
    var description = document.getElementById('productDescription').children[0].innerText
    var url = 'http://127.0.0.1:5000/products/insert'

    var getimages = () => {
        //document.querySelectorAll('#a-autoid-12-announce')[1].children[0].src.replace('SS40', 'SL1000')
        var nodes = document.querySelectorAll('#a-autoid-12-announce')
        var array = []
        for(var i = 0; i < nodes.length; i++){
            var urlString = nodes[i].children[0].src
            if(urlString){
                if(urlString.includes('SS40')){
                    array.push(urlString.replace('SS40', 'SL1000'))
                }
            }
        }

        return array
    }
    var images = getimages()

    data = {
        title,
        company,
        price,
        price_percetage,
        quantity: 100,
        num_of_shares: 0,
        about: {
            description,
            release_date: Date.now(),
            rating: 0,
        },
        categories: categories.split(';'),
        images
    }

    return data
}
