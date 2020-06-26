import SignIn from './example/components/SignIn/SignIn';
import Box from './example/components/Box/Box';
import ChildrenRoutes from './example/childrenRoutes';
const routes = [
    {
        exact: true,
        path: '/',
        component: Box,
    },
    {
        exact: false,
        path: '/sing',
        component: SignIn
    },
    {
        path: '/children',
        children: ChildrenRoutes
    }
]

export default routes