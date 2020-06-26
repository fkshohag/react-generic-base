import routes from "../../../AppRouting.Module";
import { RouteList, ChildrenList } from './routeInterface';


class RouteGenerator {
    public static getChildrenRoute(childrenList:Array<ChildrenList>): any {

    }
    public static routes(): any {
        let routelist: Array<RouteList> = [];
        routes.forEach((route) => {
            if(route.children === undefined) {
                routelist.push(route)
            }
            else {

            }
        })
        console.log(routelist)
    }
}
export default RouteGenerator