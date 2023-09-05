import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Header() {

    return (
        <>
            <div id="header" className="container">
                <div className="row">
                    <div id="header-container" className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <nav className="navbar">
                            <div id="nav-container" className="container">
                                <h1 id="title" className="navbar-brand"> Menu creator </h1>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;

