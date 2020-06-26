import routes from '../../../AppRouting.Module';
import { RouteList } from './routeInterface';


class RouteGenerator {
    private static routelist: Array<RouteList> = [];
    public static getRoute(): any {
        console.log(RouteGenerator.generate(routes));
    }
    private static generate(primaryRouteList:Array<any>): Array<RouteList> {
        
        primaryRouteList.forEach((route) => {
            if(route.children === undefined) {
                this.routelist.push(route)
            }
            else {
                RouteGenerator.generate(route.children);
            }
        })
        return RouteGenerator.routelist
    }
}
export default RouteGenerator