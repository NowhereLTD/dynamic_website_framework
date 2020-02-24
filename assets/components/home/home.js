import { Component } from '../../../framework/modules/site/component.js'

class Home extends Component {

    constructor(data, basePath, dialog) {
        super('Home', 'assets/components/home', basePath, dialog)
    }

    onInit() {
        this.variables.title = "Hello"
    }

}

export { Home }