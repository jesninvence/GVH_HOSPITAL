import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import NavigationBar from "./components/NavigationBar";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter , Routes , Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={
          <>
            <Header></Header>
            <Content></Content>
          </>
          }></Route>
          {/* <Route path="/" element={}></Route> */}
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
    
    </>
  );
}

export default App;
