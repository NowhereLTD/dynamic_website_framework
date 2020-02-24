import * as SiteData from "./getSiteData.js"

class Component {

    settings = {}

    constructor(name, path, basePath, dialog) {
        this.settings = {
            'name': name,
            'path': path
        }
        this.basePath = basePath;
        let html = SiteData.getSiteData(this.basePath + this.settings.path + '/' + this.settings.name.toLowerCase() + '.html')
        let css = document.getElementById('dialog_css')
        css.href = this.basePath + this.settings.path + '/' + this.settings.name.toLowerCase() + '.css'
        let s = this.variableChange
        let objects = []
        let render = this.render
        this.variables = new Proxy({}, {
            set: (target, key, value) => {
                target[key] = value
                objects = s(objects, render, key, value, html, dialog)
                return true
            }
        })
    }

    variableChange(objects, render, key, value, html, dialog) {
        objects[key] = value
        render(objects, html, dialog)
        return objects
    }

    render(objects, html, dialog) {
        for (var key in objects) {
            html = html.replace(new RegExp('%' + key + '%', 'g'), objects[key])
        }
        if(dialog === true) {
            document.getElementById('dialog_content').innerHTML = html
        } else {
            document.getElementById('root').innerHTML = html
        }
    }

    onInit() {}
    onDelete() {}

}

export { Component }