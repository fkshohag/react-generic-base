import Box from './components/Box/Box';
import AnotherChild from './anotherChild';
const ChildrenRoutes = [
    {
        path: '/',
        component: Box
    },
    {
        path: '/box',
        component: Box
    },
    {
        path: '/another',
        children: AnotherChild
    }
]

export default ChildrenRoutes