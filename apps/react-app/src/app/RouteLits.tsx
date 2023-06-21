import { lazy } from "react"
import { Route } from "react-router-dom"
import { publicRoutes, privateRoutes } from "./models"
import { RoutesWithNotFound } from "./utils"

const Login = lazy(() => import("./pages/login/Login"))
const User = lazy(() => import("./pages/user/User"))
const Dashborad = lazy(() => import("./pages/dashboard/Dashborad"))

function RouteLits() {
    return (
        <RoutesWithNotFound>
            <Route path={publicRoutes.HOME} element={<>Home</>} />
            <Route path={publicRoutes.LOGIN} element={<Login />} />
            <Route path={privateRoutes.USER} element={<User />} />
            <Route path={privateRoutes.DASHBOARD} element={<Dashborad />} />
        </RoutesWithNotFound>
    )
}
export default RouteLits;