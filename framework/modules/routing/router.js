import * as SiteData from "../site/getSiteData.js"
import * as LocationParser from "../site/locationParser.js"

class Router {

    constructor(/*JSON*/routerList) {
        this.routerList = routerList
        this.basePath = LocationParser.getRootLocation()
        this.data = null
        this.component = null
        SiteData.loadDefaults(this.basePath)
        this.goto('')
    }

    goto(path) {
        if (this.component != null) {
            console.log(this.component)
            this.component.onDelete()
        }
        let aPath = path.split('/')
        let bPath = path.split('/')
        path = ''


        let values = []
        let componentName = ''
        aPath.forEach((el, i) => {
            if (el[0] == ':') {
                let split = el.substring(1, el.length).split('=')
                values[split[0]] = split[1]
                aPath[i] = split[1]
            }
            path += '/' + aPath[i]
        });
        let a = this.routerList[aPath[0]];
        for (let i = 1; i < bPath.length; i++) {    
            if (bPath[i][0] == ':') {
                let split = bPath[i].split('=')
                a = a.routes[split[0]]
            } else {
                a =  a.routes[bPath[i]]
            }
        }
        componentName = a.name;
        let locationPath = this.basePath + path.substring(1, path.length)
        window.history.pushState(null, '', locationPath)
        this.data = values
        this.component = new this.routerList[aPath[0]].component(values, this.basePath)

        document.getElementById('root').innerHTML = SiteData.getSiteData(this.basePath + this.component.settings.path + '/' + this.component.settings.name.toLowerCase() + '.html')
        this.component.onInit()
    }

}

export { Router }