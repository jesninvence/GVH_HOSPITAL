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
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import Doctors from "./pages/Doctors";
import Dashboard from "./pages/Dashboard/Dashboard";
import {DashMain , DashDoctors , DashPatients , DashAppointments , DashQueue , DashPharmacy , DashInventory , DashLaboratory , DashInbox , DashChat , DashLogout , DashDoctorAdd} from "./pages/Dashboard/Contents";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/doctor" element={
        <> 
          <NavigationBar></NavigationBar>
          <Doctors></Doctors>
          <Footer></Footer>
        </>
        }></Route>
        <Route path="/" element={
          <>
             <NavigationBar></NavigationBar>
            <Header></Header>
            <Services></Services>
            <Expertise></Expertise>
            <MeetOurDoctos></MeetOurDoctos>
            <AboutUs></AboutUs>
            <Info></Info>
            <Footer></Footer>
          </>
        }></Route>
        <Route path="/signup" element={
          <>
             <NavigationBar></NavigationBar>
            <Signup/>
            <Footer></Footer>
          </>
        }></Route>
        <Route path="/login" element={
          <>
             <NavigationBar></NavigationBar>
            <Login/>
            <Footer></Footer>
          </>
        }></Route>
        <Route path="/user" element={<Dashboard content={<DashMain></DashMain>}></Dashboard>}></Route>
        <Route path="/user/doctors" element={<Dashboard content={<DashDoctors></DashDoctors>}></Dashboard>}></Route>
        <Route path="/user/patients" element={<Dashboard content={<DashPatients></DashPatients>}></Dashboard>}></Route>
        <Route path="/user/appointments" element={<Dashboard content={<DashAppointments></DashAppointments>}></Dashboard>}></Route>
        <Route path="/user/queue" element={<Dashboard content={<DashQueue></DashQueue>}></Dashboard>}></Route>
        <Route path="/user/pharmacy" element={<Dashboard content={<DashPharmacy></DashPharmacy>}></Dashboard>}></Route>
        <Route path="/user/inventory" element={<Dashboard content={<DashInventory></DashInventory>}></Dashboard>}></Route>
        <Route path="/user/laboratory" element={<Dashboard content={<DashLaboratory></DashLaboratory>}></Dashboard>}></Route>
        <Route path="/user/inbox" element={<Dashboard content={<DashInbox></DashInbox>}></Dashboard>}></Route>
        <Route path="/user/chat" element={<Dashboard content={<DashChat></DashChat>}></Dashboard>}></Route>
        <Route path="/user/doctors/add" element={<Dashboard content={<DashDoctorAdd></DashDoctorAdd>}></Dashboard>}></Route>
        <Route path="/user/logout" element={<DashLogout></DashLogout>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;