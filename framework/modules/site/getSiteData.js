import * as Http from '../http/Http.js'
import * as LocationParser from './locationParser.js'

function getSiteData(path) {
    let locationData = LocationParser.getLocationData()
    let http = new Http.Http()

    return http.get(path)
}

export { getSiteData }