import {RouteProps} from "react-router-dom";
import {HomePage} from "pages/HomePage";
import {AboutPage} from "pages/AboutPage";

export  enum AppRoutes{
    MAIN = 'main',
    ABOUT = 'about',
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]:{
        path: RouterPath.main,
        element: <HomePage/>
    },
    [AppRoutes.ABOUT]:{
        path: RouterPath.about,
        element: <AboutPage/>
    }
}