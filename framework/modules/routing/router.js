import * as SiteData from "../site/getSiteData.js"
import * as LocationParser from "../site/locationParser.js"

class Router {

    constructor(/*JSON*/routerList) {
        this.routerList = routerList
        this.basePath = LocationParser.getRootLocation()
        this.data = null
        SiteData.loadDefaults(this.basePath)
        this.goto('')
    }

    goto(path) {
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
        let realPath = this.basePath + 'assets/components/' + componentName
        let css = document.getElementById('component_css')
        css.href = realPath + '/' + componentName + '.css'
        this.data = values
        let component = '../../../assets/components/' + componentName + '/' + componentName + '.js'
        import(component)
            .then((module) => {
                let cc = new module.SComponent(SiteData.getSiteData(realPath + '/' + componentName + '.html'))
                cc.onInit()
            });
    

        document.getElementById('root').innerHTML = SiteData.getSiteData(realPath + '/' + componentName + '.html')

    }

}

export { Router }