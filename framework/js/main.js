import { Router } from "../modules/routing/router.js"
import * as SiteMenu from "../modules/site/siteMenu.js"

let r = new Router({
    '': {
        name: 'home'
    },
    'room': {
        name: 'room',
        routes: 
        {
            ':id': {
                name: 'room',
                number: true
            }
        }
    }
})

SiteMenu.initMenu()


var menuOpen = false
document.getElementById('menuButton').addEventListener('click', () => {
    if (menuOpen) {
        SiteMenu.closeMenu()
        menuOpen = false
    } else {
        SiteMenu.openMenu()
        menuOpen = true
    }
})