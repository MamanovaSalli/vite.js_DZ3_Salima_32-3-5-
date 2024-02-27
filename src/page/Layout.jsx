import {Outlet} from "react-router-dom";

const Layout = () => {
    return(
        <div className="cont">
            <Outlet/>
        </div>
    )
}
export default Layout