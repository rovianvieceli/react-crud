import Home from './Pages/Home/index'
import User from './Pages/User/index'

const Routes = [
    {
        path: '/',
        component: Home,
        exact: true
    }, {
        path: '/user',
        component: User,
        exact: true
    }
]

export default Routes
