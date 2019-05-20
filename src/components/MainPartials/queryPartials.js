var getQueryString = () => window.location.search === '' ? {} : JSON.parse('{"'+ window.location.search.substring(1).replace(/&/g, '","').replace(/=/g, '":"') +'"}')

var getAnchor = (string, query) => {
    var { href } = window.location

    if(href.includes("?")){
        if(!href.includes(string)){
            return href + `&${string}=${query}`  
        }else{
            return href
        }
    }else{
        return href + `?${string}=${query}`
    }
}

export { getQueryString, getAnchor }