import Navbar from "./components/Navbar";
import "./Layout.css"

// Los children son las páginas que van a estar activas
const Layout = ({children}) => {
    return (
        <div className="layout">
            <Navbar/>
            <main>{children}</main>
        </div>
    );
};

export default Layout;