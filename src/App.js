import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import NavigationBar from "./components/NavigationBar";
import Services from "./components/Services";
import Header from "./components/Header";
import Expertise from "./components/Expertise";
import MeetOurDoctos from "./components/MeetOurDoctors";
import AboutUs from "./components/AboutUs";
import Info from "./components/Info";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Doctors from "./pages/Doctors";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/doctor" element={
        <>
          <Doctors></Doctors>

        </>
        }></Route>
        <Route path="/" element={
          <>
            <Header></Header>
            <Services></Services>
            <Expertise></Expertise>
            <MeetOurDoctos></MeetOurDoctos>
            <AboutUs></AboutUs>
            <Info></Info>
          </>
        }></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    
    </>
  );
}

export default App;
