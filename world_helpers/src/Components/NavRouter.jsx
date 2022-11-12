import { Route, Routes } from "react-router-dom"
import Register from "../Pages.jsx/Register"
import SignUp from "../Pages.jsx/SignUp"
import Home from "../Pages.jsx/Home"

function NavRouter(){

    return(
<Routes>
<Route path="/" element={<Home />}/>
<Route  path="/register" element={<Register/>}/>
<Route path="SignUp" element={<SignUp/>}/>
</Routes>
    )
}
export default NavRouter