import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import NavBar from "./component/common/NavBar/NavBar";
import Footer from "./component/common/Footer/Footer";
import Portfolio from "./component/common/Portfolio/Portfolio";
import Blog from "./component/common/Blog/Blog";
import ContactUS from "./component/common/ContactUS/ContactUS";
import Products from "./component/Home/Products";
import Purchase from "./component/user/Purchase";
import ErrorPage from "./component/common/ErrorPage/ErrorPage";
import Login from "./component/Authentication/Login";
import Registration from "./component/Authentication/Registration";
import RequireAuth from "./component/Authentication/RequireAuth";
import Dashboard from "./component/user/Dashboard";
import Orders from "./component/user/Orders";
import Reviews from "./component/user/Reviews";
import MyProfile from "./component/user/MyProfile";

function App() {
  return (
    <div data-theme="dark">
      <div className="px-11">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="portfolio" element={<Portfolio></Portfolio>}></Route>
          <Route path="blog" element={<Blog></Blog>}></Route>
          <Route path="contact" element={<ContactUS></ContactUS>}></Route>
          <Route path="products" element={<Products></Products>}></Route>
          <Route path="dashboard" 
          element={
              <RequireAuth>
                <Dashboard></Dashboard>
              </RequireAuth>
          }>
            <Route index element={<Orders/>}/>
            <Route path="review" element={<Reviews/>}/>
            <Route path="profile" element={<MyProfile/>}/>
          </Route>
          <Route path="purchase/:_id" 
            element={
              <RequireAuth>
                <Purchase></Purchase>
              </RequireAuth>
            }
          ></Route>
          <Route path="register" element={<Registration></Registration>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
