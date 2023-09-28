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
import Doctors from "./pages/Doctors";
import Profile1 from "./pages/Profile1";
import HospitalService from "./pages/HospitalService";
import Laboratory from "./pages/Laboratory";
import RenalUnit from "./pages/RenalUnit";
import Radiology from "./pages/Radiology";
import EmergencyAc from "./pages/EmergencyAc";
import HeartIns from "./pages/HeartIns";
import CancerCenter from "./pages/CancerCenter";
import HealthUnit from "./pages/HealthUnit";
import SleepDisorder from "./pages/SleepDisorder";
import EyeInstitute from "./pages/EyeInstitute";
import FoodServices from "./pages/FoodServices";
import Neurophy from "./pages/Neurophy";
import NursingServices from "./pages/NursingServices";
import Pharmacy from "./pages/Pharmacy";
import WellnessCenter from "./pages/WellnessCenter";
import Endoscopy from "./pages/Endoscopy";
import AdmissionProcedure from "./pages/AdmissionProcedure";
import Discharge from "./pages/Discharge";
import Advance from "./pages/Advance";
import Medical from "./pages/Medical";
import PatientRights from "./pages/PatientRights";
import PharmacyInfo from "./pages/PharmacyInfo";
import Pricelist from "./pages/Pricelist";
import Visitation from "./pages/Visitation";
import Others from "./pages/Others";
import Carrers from "./pages/Carrers";
import CarrersLink from "./pages/CarrersLink";
import Finance from "./pages/Finance";
import General from "./pages/General";
import HumanRes from "./pages/HumanRes";
import InforTech from "./pages/InforTech";
import NursingSer from "./pages/NursingSer";
import Operational from "./pages/Operational";
import Internal from "./pages/Internal";
import Residency from "./pages/Residency";
import Fellowship from "./pages/Fellowship";
import RespiratoryTherapist from "./pages/RespiratoryTherapist";
import Radiologic from "./pages/Radiologi";
import Pharmacist from "./pages/Pharmacist";
import Medtech from "./pages/Medtech";
import HemaPhar from "./pages/HemaPhar";
import Dietician from "./pages/Dietician";
import ClinicalPhar from "./pages/ClinicalPhar";
import FinanceAnalyst from "./pages/FinanceAnalyst";
import BillingSpecialist from "./pages/BillingSpecialist";
import SecurityOfficer from "./pages/SecurityOfficer";
import HrSpecialist from "./pages/HrSpecialist";
import SystemDev from "./pages/SystemDev";
import ClientSupport from "./pages/ClientSupport";
import Networkinf from "./pages/Networkinf";
import BusinessSystem from "./pages/BusinessSystem";
import RiskSpecialist from "./pages/RiskSpecialist";
import SurgicalAssistant from "./pages/SurgicalAssistant";
import StaffNurse from "./pages/StaffNurse";
import Midwife from "./pages/Midwife";
import BusinessPis from "./pages/BusinessPis";
import Doctors2 from "./pages/Doctors2";
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import {DashMain , DashDoctors , DashPatients , DashAppointments , DashQueue , DashPharmacy , DashInventory , DashLaboratory , DashInbox , DashChat , DashLogout , DashDoctorAdd} from "./pages/Dashboard/Contents";
import Book from "./pages/Book";
import Resetpassword from "./pages/Resetpassword";
import Loader from "./components/Loader";
import PatientsProfile from "./pages/PatientsProfile";
import "flatpickr/dist/themes/material_blue.css";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/drservices" element={<> <NavigationBar></NavigationBar><HospitalService></HospitalService><Footer></Footer></>}></Route>
        <Route path="/doctor" element={<> <NavigationBar></NavigationBar><Doctors></Doctors><Footer></Footer></>}></Route>
        <Route path="/laboratory" element={<> <NavigationBar></NavigationBar><Laboratory></Laboratory><Footer></Footer></>}></Route>
        <Route path="/profile1" element={<> <NavigationBar></NavigationBar><Profile1></Profile1><Footer></Footer></>}></Route>
        <Route path="/renalunit" element={<> <NavigationBar></NavigationBar><RenalUnit></RenalUnit><Footer></Footer></>}></Route>
        <Route path="/radiology" element={<> <NavigationBar></NavigationBar><Radiology></Radiology><Footer></Footer></>}></Route>
        <Route path="/emergency" element={<> <NavigationBar></NavigationBar><EmergencyAc></EmergencyAc><Footer></Footer></>}></Route>
        <Route path="/heartins" element={<> <NavigationBar></NavigationBar><HeartIns></HeartIns><Footer></Footer></>}></Route>
        <Route path="/cancercent" element={<> <NavigationBar></NavigationBar><CancerCenter></CancerCenter><Footer></Footer></>}></Route>
        <Route path="/healthunit" element={<> <NavigationBar></NavigationBar><HealthUnit></HealthUnit><Footer></Footer></>}></Route>
        <Route path="/sleepdis" element={<> <NavigationBar></NavigationBar><SleepDisorder></SleepDisorder><Footer></Footer></>}></Route>
        <Route path="/eyeins" element={<> <NavigationBar></NavigationBar><EyeInstitute></EyeInstitute><Footer></Footer></>}></Route>
        <Route path="/foodservices" element={<> <NavigationBar></NavigationBar><FoodServices></FoodServices><Footer></Footer></>}></Route>
        <Route path="/neurophy" element={<> <NavigationBar></NavigationBar><Neurophy></Neurophy><Footer></Footer></>}></Route>
        <Route path="/nursing" element={<> <NavigationBar></NavigationBar><NursingServices></NursingServices><Footer></Footer></>}></Route>
        <Route path="/pharmacy" element={<> <NavigationBar></NavigationBar><Pharmacy></Pharmacy><Footer></Footer></>}></Route>
        <Route path="/wellness" element={<> <NavigationBar></NavigationBar><WellnessCenter></WellnessCenter><Footer></Footer></>}></Route>
        <Route path="/endoscopy" element={<> <NavigationBar></NavigationBar><Endoscopy></Endoscopy><Footer></Footer></>}></Route>
        <Route path="/admission" element={<> <NavigationBar></NavigationBar><AdmissionProcedure></AdmissionProcedure><Footer></Footer></>}></Route>
        <Route path="/discharge" element={<> <NavigationBar></NavigationBar><Discharge></Discharge><Footer></Footer></>}></Route>
        <Route path="/advance" element={<> <NavigationBar></NavigationBar><Advance></Advance><Footer></Footer></>}></Route>
        <Route path="/medical" element={<> <NavigationBar></NavigationBar><Medical></Medical><Footer></Footer></>}></Route>
        <Route path="/patientrights" element={<> <NavigationBar></NavigationBar><PatientRights></PatientRights><Footer></Footer></>}></Route>
        <Route path="/pharmacyinfo" element={<> <NavigationBar></NavigationBar><PharmacyInfo></PharmacyInfo><Footer></Footer></>}></Route>
        <Route path="/pricelist" element={<> <NavigationBar></NavigationBar><Pricelist></Pricelist><Footer></Footer></>}></Route>
        <Route path="/visitation" element={<> <NavigationBar></NavigationBar><Visitation></Visitation><Footer></Footer></>}></Route>
        <Route path="/others" element={<> <NavigationBar></NavigationBar><Others></Others><Footer></Footer></>}></Route>
        <Route path="/carrers" element={<> <NavigationBar></NavigationBar><Carrers></Carrers><Footer></Footer></>}></Route>
        <Route path="/finance" element={<> <NavigationBar></NavigationBar><Finance></Finance><Footer></Footer></>}></Route>
        <Route path="/general" element={<> <NavigationBar></NavigationBar><General></General><Footer></Footer></>}></Route>
        <Route path="/humanres" element={<> <NavigationBar></NavigationBar><HumanRes></HumanRes><Footer></Footer></>}></Route>
        <Route path="/infortech" element={<> <NavigationBar></NavigationBar><InforTech></InforTech><Footer></Footer></>}></Route>
        <Route path="/nursingser" element={<> <NavigationBar></NavigationBar><NursingSer></NursingSer><Footer></Footer></>}></Route>
        <Route path="/operational" element={<> <NavigationBar></NavigationBar><Operational></Operational><Footer></Footer></>}></Route>
        <Route path="/internal" element={<> <NavigationBar></NavigationBar><Internal></Internal><Footer></Footer></>}></Route>
        <Route path="/recidency" element={<> <NavigationBar></NavigationBar><Residency></Residency><Footer></Footer></>}></Route>
        <Route path="/fellowship" element={<> <NavigationBar></NavigationBar><Fellowship></Fellowship><Footer></Footer></>}></Route>
        <Route path="/respithera" element={<> <NavigationBar></NavigationBar><RespiratoryTherapist></RespiratoryTherapist><Footer></Footer></>}></Route>
        <Route path="/radiologic" element={<> <NavigationBar></NavigationBar><Radiologic></Radiologic><Footer></Footer></>}></Route>
        <Route path="/pharmacist" element={<> <NavigationBar></NavigationBar><Pharmacist></Pharmacist><Footer></Footer></>}></Route>
        <Route path="/medtech" element={<> <NavigationBar></NavigationBar><Medtech></Medtech><Footer></Footer></>}></Route>
        <Route path="/hemaphar" element={<> <NavigationBar></NavigationBar><HemaPhar></HemaPhar><Footer></Footer></>}></Route>
        <Route path="/dietician" element={<> <NavigationBar></NavigationBar><Dietician></Dietician><Footer></Footer></>}></Route>
        <Route path="/clinicalphar" element={<> <NavigationBar></NavigationBar><ClinicalPhar></ClinicalPhar><Footer></Footer></>}></Route>
        <Route path="/financeana" element={<> <NavigationBar></NavigationBar><FinanceAnalyst></FinanceAnalyst><Footer></Footer></>}></Route>
        <Route path="/billingspe" element={<> <NavigationBar></NavigationBar><BillingSpecialist></BillingSpecialist><Footer></Footer></>}></Route>
        <Route path="/securityoff" element={<> <NavigationBar></NavigationBar><SecurityOfficer></SecurityOfficer><Footer></Footer></>}></Route>
        <Route path="/hrspecialist" element={<> <NavigationBar></NavigationBar><HrSpecialist></HrSpecialist><Footer></Footer></>}></Route>
        <Route path="/systemdev" element={<> <NavigationBar></NavigationBar><SystemDev></SystemDev><Footer></Footer></>}></Route>
        <Route path="/clientsupport" element={<> <NavigationBar></NavigationBar><ClientSupport></ClientSupport><Footer></Footer></>}></Route>
        <Route path="/networkinf" element={<> <NavigationBar></NavigationBar><Networkinf></Networkinf><Footer></Footer></>}></Route>
        <Route path="/businessanalyst" element={<> <NavigationBar></NavigationBar><BusinessSystem></BusinessSystem><Footer></Footer></>}></Route>
        <Route path="/riskspecialist" element={<> <NavigationBar></NavigationBar><RiskSpecialist></RiskSpecialist><Footer></Footer></>}></Route>
        <Route path="/surgicalass" element={<> <NavigationBar></NavigationBar><SurgicalAssistant></SurgicalAssistant><Footer></Footer></>}></Route>
        <Route path="/staffnurse" element={<> <NavigationBar></NavigationBar><StaffNurse></StaffNurse><Footer></Footer></>}></Route>
        <Route path="/midwife" element={<> <NavigationBar></NavigationBar><Midwife></Midwife><Footer></Footer></>}></Route>
        <Route path="/bpis" element={<> <NavigationBar></NavigationBar><BusinessPis></BusinessPis><Footer></Footer></>}></Route>
        <Route path="/doctors2" element={<> <NavigationBar></NavigationBar><Doctors2></Doctors2><Footer></Footer></>}></Route>
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
        <Route path="/book" element={<Book></Book>}></Route>
        <Route path="/resetpassword" element={<Resetpassword></Resetpassword>}></Route>
        <Route path="/patientsprofile" element={<PatientsProfile></PatientsProfile>}></Route>
      </Routes>
      {/* <Loader></Loader> */}
    </BrowserRouter>
    
    </>
  );
}

export default App;
