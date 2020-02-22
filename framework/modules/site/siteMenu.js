function initMenu() {
    let sitemenu = document.getElementById('siteMenu')
    sitemenu.style.width = '0'
    sitemenu.style.animationName = 'none'
    sitemenu.style.animationDuration = '300ms'

    let menubutton = document.getElementById('menuButton')
    menubutton.style.animationName = 'none'
    menubutton.style.animationDuration = '300ms'
    menubutton.style.transform = 'rotate(0deg)'
}

function openMenu() {
    let sitemenu = document.getElementById('siteMenu')
    sitemenu.style.animationName = 'openMenu'
    sitemenu.style.width = '250px'
    let menubutton = document.getElementById('menuButton')
    menubutton.style.animationName = 'openButtonMenu'
    menubutton.style.transform = 'rotate(90deg)'
}

function closeMenu() {
    let sitemenu = document.getElementById('siteMenu')
    sitemenu.style.animationName = 'closeMenu'
    sitemenu.style.width = '0'
    let menubutton = document.getElementById('menuButton')
    menubutton.style.animationName = 'closeButtonMenu'
    menubutton.style.transform = 'rotate(0deg)'
}

export { initMenu, openMenu, closeMenu }