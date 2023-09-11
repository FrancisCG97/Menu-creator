import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import Header from './Components/header';
import Login from './Components/login';

const Home = () => {

  return (
    <>
    <Header></Header>
    <Login></Login>
    </>
  )
}

export default Home;
