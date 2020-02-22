import { Component } from '../../../framework/modules/site/component.js'

class SComponent extends Component {

    constructor(html) {
        super('Home', 'assets/components/home', html)
    }

    onInit() {
    }

}

export { SComponent }