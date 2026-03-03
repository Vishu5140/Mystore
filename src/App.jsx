import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NavLayout from "./Layouts/NavLayout";
import Mystore from "./Components/Mystore";
import SidebarLayout from "./Layouts/SidebarLayout";
import Cart from "./Components/Cart";
import Detail from "./Components/Detail";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Authentication from "./AuthLayout/Authentication";
import LoginLayout from "./AuthLayout/LoginLayout";
import PublicLayout from "./AuthLayout/PublicLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route element={<PublicLayout/>}>
         <Route path="/signup" element={<Signup/>}/>
         <Route element={<LoginLayout/>}>
          <Route path="/login" element={<Login/>}/>
          </Route>
         </Route>

        <Route element={<Authentication/>}>
         <Route path="/" element={<Home />} />

        {/* ⭐ Layout wrapper */}
        <Route element={<NavLayout />}>
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* ⭐ Standalone */}
       
        <Route element={<SidebarLayout/>}>
         <Route path="mystore" element={<Mystore/>}/>
         
        </Route>
        <Route path="cart" element={<Cart/>}/>
      <Route path="detail/:id" element={<Detail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;