import { Router, Routes } from "react-router-dom"
import Register from "../Pages.jsx/Register"
import SignUp from "../Pages.jsx/SignUp"
import Home from "../Pages.jsx/Home"

function NavRoutes(){

    return(
<Routes>
<Router path="/" element={<Home />}/>
<Router  path="/register" element={<Register/>}/>
<Router path="SignUp" element={<SignUp/>}/>
</Routes>
    )
}
export default NavRoutes