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

function App() {
  return (
    <>
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/drservices" element={<><HospitalService></HospitalService></>}></Route>
        <Route path="/doctor" element={<><Doctors></Doctors></>}></Route>
        <Route path="/laboratory" element={<><Laboratory></Laboratory></>}></Route>
        <Route path="/profile1" element={<><Profile1></Profile1></>}></Route>
        <Route path="/renalunit" element={<><RenalUnit></RenalUnit></>}></Route>
        <Route path="/radiology" element={<><Radiology></Radiology></>}></Route>
        <Route path="/emergency" element={<><EmergencyAc></EmergencyAc></>}></Route>
        <Route path="/heartins" element={<><HeartIns></HeartIns></>}></Route>
        <Route path="/cancercent" element={<><CancerCenter></CancerCenter></>}></Route>
        <Route path="/healthunit" element={<><HealthUnit></HealthUnit></>}></Route>
        <Route path="/sleepdis" element={<><SleepDisorder></SleepDisorder></>}></Route>
        <Route path="/eyeins" element={<><EyeInstitute></EyeInstitute></>}></Route>
        <Route path="/foodservices" element={<><FoodServices></FoodServices></>}></Route>
        <Route path="/neurophy" element={<><Neurophy></Neurophy></>}></Route>
        <Route path="/nursing" element={<><NursingServices></NursingServices></>}></Route>
        <Route path="/pharmacy" element={<><Pharmacy></Pharmacy></>}></Route>
        <Route path="/wellness" element={<><WellnessCenter></WellnessCenter></>}></Route>
        <Route path="/endoscopy" element={<><Endoscopy></Endoscopy></>}></Route>
        <Route path="/admission" element={<><AdmissionProcedure></AdmissionProcedure></>}></Route>
        <Route path="/discharge" element={<><Discharge></Discharge></>}></Route>
        <Route path="/advance" element={<><Advance></Advance></>}></Route>
        <Route path="/medical" element={<><Medical></Medical></>}></Route>
        <Route path="/patientrights" element={<><PatientRights></PatientRights></>}></Route>
        <Route path="/pharmacyinfo" element={<><PharmacyInfo></PharmacyInfo></>}></Route>
        <Route path="/pricelist" element={<><Pricelist></Pricelist></>}></Route>
        <Route path="/visitation" element={<><Visitation></Visitation></>}></Route>
        <Route path="/others" element={<><Others></Others></>}></Route>
        <Route path="/carrers" element={<><Carrers></Carrers></>}></Route>
        <Route path="/finance" element={<><Finance></Finance></>}></Route>
        <Route path="/general" element={<><General></General></>}></Route>
        <Route path="/humanres" element={<><HumanRes></HumanRes></>}></Route>
        <Route path="/infortech" element={<><InforTech></InforTech></>}></Route>
        <Route path="/nursingser" element={<><NursingSer></NursingSer></>}></Route>
        <Route path="/operational" element={<><Operational></Operational></>}></Route>
        <Route path="/internal" element={<><Internal></Internal></>}></Route>
        <Route path="/recidency" element={<><Residency></Residency></>}></Route>
        <Route path="/fellowship" element={<><Fellowship></Fellowship></>}></Route>
        <Route path="/respithera" element={<><RespiratoryTherapist></RespiratoryTherapist></>}></Route>
        <Route path="/radiologic" element={<><Radiologic></Radiologic></>}></Route>
        <Route path="/pharmacist" element={<><Pharmacist></Pharmacist></>}></Route>
        <Route path="/medtech" element={<><Medtech></Medtech></>}></Route>
        <Route path="/hemaphar" element={<><HemaPhar></HemaPhar></>}></Route>
        <Route path="/dietician" element={<><Dietician></Dietician></>}></Route>
        <Route path="/clinicalphar" element={<><ClinicalPhar></ClinicalPhar></>}></Route>
        <Route path="/financeana" element={<><FinanceAnalyst></FinanceAnalyst></>}></Route>
        <Route path="/billingspe" element={<><BillingSpecialist></BillingSpecialist></>}></Route>
        <Route path="/securityoff" element={<><SecurityOfficer></SecurityOfficer></>}></Route>
        <Route path="/hrspecialist" element={<><HrSpecialist></HrSpecialist></>}></Route>
        <Route path="/systemdev" element={<><SystemDev></SystemDev></>}></Route>
        <Route path="/clientsupport" element={<><ClientSupport></ClientSupport></>}></Route>
        <Route path="/networkinf" element={<><Networkinf></Networkinf></>}></Route>
        <Route path="/businessanalyst" element={<><BusinessSystem></BusinessSystem></>}></Route>
        <Route path="/riskspecialist" element={<><RiskSpecialist></RiskSpecialist></>}></Route>
        <Route path="/surgicalass" element={<><SurgicalAssistant></SurgicalAssistant></>}></Route>
        <Route path="/staffnurse" element={<><StaffNurse></StaffNurse></>}></Route>
        <Route path="/midwife" element={<><Midwife></Midwife></>}></Route>
        <Route path="/bpis" element={<><BusinessPis></BusinessPis></>}></Route>
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
