import SignIn from './example/components/SignIn/SignIn';
import Box from './example/components/Box/Box';
import ChildrenRoutes from './example/childrenRoutes';
const routes = [
    {
        exact: true,
        path: '/',
        component: Box,
        children: ChildrenRoutes
    },
    {
        exact: false,
        path: '/sing',
        component: SignIn
    },
    {
        exact: false,
        path: '/children',
        component: SignIn
    }
]

export default routes