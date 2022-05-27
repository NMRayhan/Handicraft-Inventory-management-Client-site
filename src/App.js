// import logo from './logo.svg';
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import NavBar from "./component/common/NavBar/NavBar";
import Footer from "./component/common/Footer/Footer";
import About from "./component/common/About/About";
import Blog from "./component/common/Blog/Blog";
import ContactUS from "./component/common/ContactUS/ContactUS";
import Products from "./component/Home/Products";

function App() {
  return (
    <div data-theme="dark">
      <div className="px-11">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="blog" element={<Blog></Blog>}></Route>
          <Route path="contact" element={<ContactUS></ContactUS>}></Route>
          <Route path="products" element={<Products></Products>}></Route>
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
