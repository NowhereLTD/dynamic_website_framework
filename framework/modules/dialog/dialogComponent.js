import * as SiteData from '../site/getSiteData.js'

export const DIALOG_ALIGN_LEFT = 0
export const DIALOG_ALIGN_CENTER = 1
export const DIALOG_ALIGN_RIGHT = 2

export const DIALOG_VALIGN_TOP = 3
export const DIALOG_VALIGN_MIDDLE = 4
export const DIALOG_VALIGN_BOTTOM = 5

class Dialog {

    onclose = function() { return true }
    onnext = function() { return true } 
    onback = function() { return true }
    onfinish = function() { return true }
    open = false

    constructor(align, valign, title, width, height, closeable, rootPath, component) {
        this.align = align
        this.valign = valign
        this.title = title
        this.width = width
        this.height = height
        this.closeable = closeable
        this.rootPath = rootPath
        this.component = component
        document.getElementById('dialog_close').addEventListener('click', () => {
            if(this.onclose() === true) {
                this.closeDialog()
            }
        })
    }

    openDialog() {
        this.open = true
        this.sessionComponent = new this.component(null, this.rootPath, true)
        document.getElementById('dialog_content').innerHTML = SiteData.getSiteData(this.rootPath + '/' + this.sessionComponent.settings.path + '/' + this.sessionComponent.settings.name.toLowerCase() + '.html')
        
        this.sessionComponent.onInit()
        let dialog = document.getElementById('dialog')
        dialog.style.visibility = 'visible'
        dialog.style.width = this.width * 0.8 + '%'
        dialog.style.height = this.height * 0.8 + '%'

        switch(this.align) {
            case DIALOG_ALIGN_CENTER:
                dialog.style.left = Math.round((100 - this.width * 0.8) / 2) + '%'
                break
            case DIALOG_ALIGN_LEFT:
                dialog.style.left = 0
                break
            case DIALOG_ALIGN_RIGHT:
                dialog.style.right = (100 - this.width * 0.8) + '%'
        }

        switch(this.valign) {
            case DIALOG_VALIGN_MIDDLE:
                dialog.style.top = Math.round((100 - this.height * 0.8) / 2) + '%'
                break
            case DIALOG_VALIGN_TOP:
                dialog.style.top = 0
                break
            case DIALOG_VALIGN_BOTTOM:
                dialog.style.top = (100 - this.height * 0.8) + '%'
        }
    }

    closeDialog() {
        this.open = false
        /* Close Kram */
        let dialog = document.getElementById('dialog')
        dialog.style.visibility = 'hidden'
        dialog.style.width = '0'
        dialog.style.height = '0'
        dialog.style.left = 0
        dialog.style.top = 0


        document.getElementById('dialog_content').innerHTML = ''
        this.sessionComponent.onDelete()


    }

}

export { Dialog }