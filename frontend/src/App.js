import "./App.css";
import {
  Routes,
  Route
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import RaiseDonation from "./components/RaiseDonation";
import Navbar from "./components/Navbar";
import DonateMain from "./components/DonateMain";
import DonateMonthly from "./components/DonateMonthly";
import Login from "./components/Login";
import Register from "./components/Register";
import Donate from "./components/Donate";
import DonateCardsPage from "./components/DonateCardsPage";
import Payment from "./components/Payment";
import BlogPage from "./components/BlogPage";

function App() {
  return (
    <>
      <div className="">
        <Navbar title="Donate4Good" link1="Home" link2="Donate" link3="Raise donation" link5="About" link6="Login/SignUp" link7="Blog" />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donateCardsPage/*" element={<DonateCardsPage />} />
        <Route path="/donate/:id" element={<Donate />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/about" element={<About />} />
        <Route path="/raise donation" element={<RaiseDonation />} />
        <Route path="/doante monthly" element={<DonateMonthly />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </>
  );
}

export default App;
