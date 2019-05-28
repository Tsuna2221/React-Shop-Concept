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

const checkIfArgs = (sub) => {
    let { type, manufacturer, page } = getQueryString()
    let parsed_page = (parseInt(page || 1) * 20) - 20 || 0

    let { t, p, m, s } = {
        t: type ? `type: "${type}"` : '',
        p: parsed_page ? `offset: ${parsed_page}` : '',
        m: manufacturer ? `company: "${manufacturer}"` : '',
        s: sub ? `sub: "${sub}"`: ''
    }

    if(t || p || m || s){
        return `(${t} ${p} ${m} ${s})`
    }
    return ''
}

export { getQueryString, getAnchor, checkIfArgs }