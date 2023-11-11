import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <ul className="d-flex gap-5 align-items-center mb-0 ps-5 bg-dark"
                style={{ height: "80px", width: "100%", listStyle: 'none', color: "#FFF" }}>
                <li>
                    <Link to="/home" style={{ textDecoration: "none", color: "white" }}>Home</Link>
                </li>
                <li>
                    <Link to="/about" style={{ textDecoration: "none", color: "white" }}>About</Link>
                </li>
                <li>
                    <Link to="/contact" style={{ textDecoration: "none", color: "white" }}>Contact</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

export default Layout;
