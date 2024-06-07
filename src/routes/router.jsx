import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Reservation from "../pages/Reservation/Reservation";
import Invoice from "../components/Invoice/Invoice";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Reservation />
            },
            {
                path: '/invoice',
                element: <Invoice />
            }
        ]
    },
    {
        path: '*',
        element: <div>404 Not Found</div>
    }
]);

export default router;