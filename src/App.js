import logo from './logo.svg';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Homescreen from './Screens/Home/home';
import Navbar from './Components/Home/navbar';



function App() {
  return (
    <>
      <Navbar />
      <Homescreen />

    </>

  );
}

export default App;
