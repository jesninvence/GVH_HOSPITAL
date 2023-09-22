import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import NavigationBar from "./components/NavigationBar";
import Services from "./components/Services";
import Header from "./components/Header";
import Expertise from "./components/Expertise";
import MeetOurDoctos from "./components/MeetOurDoctors";
import AboutUs from "./components/AboutUs";
import Info from "./components/Info";
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
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
