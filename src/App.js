import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./pages/auth/LoginForm";
import Register from "./pages/auth/Register";
import History from "./pages/History";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import MyNavbar from "./components/MyNavbar";
import Verification from "./pages/auth/Verification";
import { useDispatch, useSelector } from "react-redux";
// import { fetchUserData } from "./features/users/userSlice";
import { useEffect } from "react";
import { checkToken } from "./features/users/userSlice";

function App() {
  // const dispatch = useDispatch();
  const selector = useSelector((state) => state.user.loginUser);
  const userToken = localStorage.getItem("token_shutter");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // alert(userToken);
    dispatch(checkToken(userToken));
  }, []);

  return (
    <div>
      <MyNavbar />
      <Routes>
        {/* public */}
        {!selector.isSuccess ? (
          // apabila berhasil login maka tidak bisa kembali ke login page
          // ataupun ke register page
          <>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
          </>
        ) : (
          // {/* protected pages */}
          // tidak bisa mengakses page2 dibawah ini apabila belum login
          <>
            <Route path="/history" element={<History />} />
            <Route path="/product" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
          </>
          // -----------------------------------------------------------
        )}
        <Route path="/verification/:token" element={<Verification />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
