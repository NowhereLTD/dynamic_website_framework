function getLocationData() {
    let search = window.location.search
    search = search.substring(1, search.length)

    let parameter = search.split('&')

    let result = [];

    parameter.forEach((param) =>  {
        let paramData = param.split('=')
        let key = paramData[0]
        let value = paramData[1]
        result[key] = value
    })

    return result
}

function getRootLocation() {
    return window.location.origin + window.location.pathname.replace('/index.html', '')
}


export { getLocationData, getRootLocation }