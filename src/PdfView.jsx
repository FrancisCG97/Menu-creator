import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import Header from './Components/header';
import Generator from "./Components/PdfGenerator";

const PdfView = () => {

  return (
    <>
    <Header></Header>
    <Generator></Generator>
    </>
  )
}

export default PdfView;