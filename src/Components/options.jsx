import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Options = () => {

    return (
        <>
            <div id="menu" className="container">
                <div className="row">
                    <div id="menu-container" className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <nav className="navbar">
                            <div id="nav-container" className="container">
                                <h1 id="menu-title" className="navbar-brand"> Crea tu menú ⬇ </h1>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <section id="info-inputs" className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h5> Opción 1: </h5>
                <div id="option" className="input-group">
                    <input id="option-input" type="text" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"></input>
                    <button className="btn" type="button" id="clean-option"> X </button>
                </div>
                <h5> Opción 2: </h5>
                <div id="option" className="input-group">
                    <input id="option-input" type="text" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"></input>
                    <button className="btn" type="button" id="clean-option"> X </button>
                </div>
                <h5> Opción 3: </h5>
                <div id="option" className="input-group">
                    <input id="option-input" type="text" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"></input>
                    <button className="btn" type="button" id="clean-option"> X </button>
                </div>
            </section>

            <section id="menu-btn" className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div id="add-see">
                    <button id="add-see-btn" type="button" className="btn"> Agregar otra opción </button>
                    <button id="add-see-btn" type="button" className="btn"> Visualizar mi menú en PDF </button>
                </div>
                <div id="clean">
                    <button id="clean-btn" type="button" className="btn"> Limpiar todas las opciones </button>
                </div>
            </section>

        </>
    )
}

export default Options;
