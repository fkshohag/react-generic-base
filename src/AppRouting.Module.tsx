import SignIn from './example/components/SignIn/SignIn';
import Box from './example/components/Box/Box';
const routes = [
    {
        exact: true,
        path: '/',
        component: Box
    },
    {
        exact: false,
        path: '/sing',
        component: SignIn
    }
]

export default routes