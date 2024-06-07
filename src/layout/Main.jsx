import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="px-12 py-6">
            <Outlet />
        </div>
    );
};

export default Main;