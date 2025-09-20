import { Outlet, Link } from "react-router-dom";

export default function FrontLayout() {
    return (
        <>
            <Link to="/dashboard">Dashboard</Link>
            <Outlet />
        </>
    )
}