import { createBrowserRouter } from "react-router-dom"
import Cadastro from "./Pages/Cadastro/Cadastro"
import Login from "./Pages/Login/Login"
import Index from "./Pages/Index"

const MyRouter = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
        children: [
            {
                path: "/cadastro",
                element: <Cadastro />
            },
            {
                path: "/",
                element: <Login />
            },
        ]
    }
])

export default MyRouter