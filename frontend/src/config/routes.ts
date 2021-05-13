import HomePage from '../pages/home'
import IRoute from '../interface/route'

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true
    }
]

export default routes;