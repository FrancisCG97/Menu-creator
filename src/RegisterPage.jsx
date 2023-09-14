import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import Header from './Components/header';
import Register from './Components/register';

const RegisterPage = () => {

  return (
    <>
    <Header></Header>
    <Register></Register>
    </>
  )
}

export default RegisterPage;