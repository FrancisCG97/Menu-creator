import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Header = () => {

    return (
        <>
            <div id="header-container" className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <nav className="navbar">
                    <div id="nav-container" className="container">
                        <h1 id="title" className="navbar-brand"> Menu creator </h1>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;

