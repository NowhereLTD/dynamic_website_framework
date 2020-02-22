import * as SiteData from '../site/getSiteData.js'

export const DIALOG_ALIGN_LEFT = 0
export const DIALOG_ALIGN_CENTER = 1
export const DIALOG_ALIGN_RIGHT = 2

export const DIALOG_VALIGN_TOP = 3
export const DIALOG_VALIGN_MIDDLE = 4
export const DIALOG_VALIGN_BOTTOM = 5

class Dialog {

    constructor(align, valign, title, width, height, closeable, rootPath, componentName) {
        this.align = align
        this.valign = valign
        this.title = title
        this.width = width
        this.height = height

        let dialog = document.getElementById('dialog')
        dialog.style.width = this.width + '%'
        dialog.style.height = this.height + '%'

        switch(this.align) {
            case DIALOG_ALIGN_CENTER:
                dialog.style.left = Math.round((100 - this.width) / 2) + '%'
                break
            case DIALOG_ALIGN_LEFT:
                dialog.style.left = 0
                break
            case DIALOG_ALIGN_RIGHT:
                dialog.style.right = (100 - this.width) + '%'
        }

        switch(this.valign) {
            case DIALOG_VALIGN_MIDDLE:
                dialog.style.top = Math.round((100 - this.height) / 2) + '%'
                break
            case DIALOG_VALIGN_TOP:
                dialog.style.top = 0
                break
            case DIALOG_VALIGN_BOTTOM:
                dialog.style.top = (100 - this.height) + '%'
        }

        this.closeable = closeable
        this.rootPath = rootPath
        this.componentName = componentName
    }

    openDialog() {
        let realPath = this.rootPath + 'assets/components/' + this.componentName
        let css = document.getElementById('dialog_css')
        css.href = realPath + '/' + this.componentName + '.css'
        let component = '../../../assets/components/' + this.componentName + '/' + this.componentName + '.js'
        let cc = {}
        import(component)
            .then((module) => {
                cc = new module.SComponent({}, SiteData.getSiteData(realPath + '/' + this.componentName + '.html'))
                cc.onInit()
            });
        setTimeout(() => {
            this.component = cc
        }, 20);

        document.getElementById('dialog').innerHTML = SiteData.getSiteData(realPath + '/' + this.componentName + '.html')
        /*OpenKram*/

    }

    closeDialog() {
        /* Close Kram */

        this.component.onDelete()
    }

}

export { Dialog }