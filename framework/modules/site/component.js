class Component {

    settings = {}

    constructor(name, path, html) {
        this.settings = {
            'name': name,
            'path': path
        }
        let s = this.variableChange
        let objects = []
        let render = this.render
        this.variables = new Proxy({}, {
            set: (target, key, value) => {
                target[key] = value
                objects = s(objects, render, key, value, html)
                return true
            }
        })
    }

    variableChange(objects, render, key, value, html) {
        objects[key] = value
        render(objects, html)
        return objects
    }

    render(objects, html) {
        for (var key in objects) {
            html = html.replace(new RegExp('%' + key + '%', 'g'), objects[key])
        }
        document.getElementById('root').innerHTML = html
    }

    onInit() {}
    onDelete() {}

}

export { Component }