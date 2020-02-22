import { Router } from "../modules/routing/router.js"
import * as Dialog from "../modules/dialog/dialogComponent.js"
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

let dialog = new Dialog.Dialog(Dialog.DIALOG_ALIGN_CENTER, Dialog.DIALOG_VALIGN_MIDDLE, 'Test', 80, 80, true, r.basePath, 'home')
dialog.openDialog()