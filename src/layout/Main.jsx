import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="lg:px-12 px-4 py-6">
            <Outlet />
        </div>
    );
};

export default Main;