import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import NavigationBar from "./components/NavigationBar";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <NavigationBar></NavigationBar>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
    
    </>
  );
}

export default App;
