// import logo from './logo.svg';
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import NavBar from "./component/common/NavBar/NavBar";
import Footer from "./component/common/Footer/Footer";

function App() {
  return (
    <div data-theme="dark">
      <div className="px-11">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
