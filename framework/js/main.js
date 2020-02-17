import { Router } from "../modules/routing/router.js"

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

r.goto('room')