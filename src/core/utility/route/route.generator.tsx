import routes from '../../../AppRouting.Module';
import { RouteList } from './routeInterface';


class RouteGenerator {
    private static routelist: Array<RouteList> = [];

    public static getRoute(): any {
        return this.generate(routes);
    }

    private static generate(primaryRouteList:Array<any>, initPath? : string): Array<RouteList> {
        
        primaryRouteList.forEach((route) => {
            if(route.children === undefined) {
                if(initPath == null) {
                    this.routelist.push(route)
                } else {
                    if(route.path !== '/') {
                        route.path = initPath + route.path;
                    } else {
                        route.path = initPath
                    }
                    this.routelist.push(route);
                }
            }
            else {
                this.generate(route.children, route.path);
            }
        })
        return this.routelist
    }
}
export default RouteGenerator