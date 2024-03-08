import { Navigate, createBrowserRouter } from "react-router-dom";
import { Home } from "./transfers/pages/Home";
import { Transfer } from "./transfers/Transfer";
import { Bookings } from "./transfers/pages/Bookings";
import { DetailBooking } from "./transfers/pages/DetailBooking";
import { AuthRout } from "./Auth/AuthRout";
import { LoginPage } from "./Auth/pages/LoginPage";
import { RegisterPage } from "./Auth/pages/RegisterPage";
import { Validate } from "./Validate";
import { ValidateTokenApi } from "./Helpers/AuthApi";
import { getFilterBaseData } from "./Helpers/TransferApi";
import { LoaderSpinner } from "./shared/components/Loader";

export const Router=createBrowserRouter([
    {
        path:'/',
        element:<Validate/>,
        loader:ValidateTokenApi,
        children:[
            {
                path:'transfers',
                element:<Transfer/>,
                children:[
                    {
                        path:'home',
                        element:<Home/>,
                        loader:getFilterBaseData,
                        hydrateFallbackElement:<h1>Cargando...</h1>
                    },
                    {
                        path:"list",
                        element:<Bookings/>
                    },
                    {
                        path:"detail/:reference",
                        element:<DetailBooking/>
                    },
                    {
                        path:'*',
                        element:<Navigate to="/transfers/home"/>
                    },
                    {
                        path:'',
                        element:<Navigate to="/transfers/home"/>
                    }
                ]
            },
            {
                path:'auth',
                element:<AuthRout/>,
                children:[
                    {
                        path:'login',
                        element:<LoginPage/>
                    },
                    {
                        path:'register',
                        element:<RegisterPage/>
                    },
                    {
                        path:'*',
                        element:<Navigate to="/auth/login"/>
                    },
                    {
                        path:'',
                        element:<Navigate to="/auth/login"/>
                    }
                ]
            },
            {
                path:'/',
                element:<Navigate to="/transfers"/>
            }
        ]
    },
    {
        path:"*",
        element:<Navigate to="/"/>
    }
])
