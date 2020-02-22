import * as Http from '../http/Http.js'
import * as LocationParser from './locationParser.js'

function getSiteData(path) {
    let locationData = LocationParser.getLocationData()
    let http = new Http.Http()

    return http.get(path)
}

function loadDefaults(rootLoc) {
    let header = getSiteData(rootLoc + '/assets/defaults/header.html')
    let footer = getSiteData(rootLoc + '/assets/defaults/footer.html')
    let main = getSiteData(rootLoc + '/assets/defaults/main.html')
    let siteMenu = getSiteData(rootLoc + '/assets/defaults/siteMenu.html')

    document.getElementById('header').innerHTML = header;
    document.getElementById('footer').innerHTML = footer;
    document.getElementById('main').innerHTML = main;
    document.getElementById('siteMenu').innerHTML = siteMenu;
}

export { getSiteData, loadDefaults}