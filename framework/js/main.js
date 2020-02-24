import { Router } from "../modules/routing/router.js"
import * as Dialog from "../modules/dialog/dialogComponent.js"
import * as SiteMenu from "../modules/site/siteMenu.js"
import { Home } from "../../assets/components/home/home.js"
import { Room } from "../../assets/components/room/room.js"
 
let r = new Router({
    '': {
        name: 'home',
        component: Home
    },
    'room': {
        name: 'room',
        component: Room,
        routes: 
        {
            ':id': {
                name: 'room',
                component: Room,
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

let dialog = new Dialog.Dialog(Dialog.DIALOG_ALIGN_CENTER, Dialog.DIALOG_VALIGN_MIDDLE, 'Test', 100, 100, true, r.basePath, Home)
document.getElementById('userIcon').addEventListener('click', () => {
    dialog.open ? dialog.closeDialog() : dialog.openDialog()
})