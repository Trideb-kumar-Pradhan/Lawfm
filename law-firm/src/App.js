import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Homepage from './Component/Homepage/Homepage';
import Introduction from './Component/Introduction/Intoduction';
import Whychooseus from './Component/WhyChooseUs/Whychooseus';
import Areaofpractices from './Component/Areaofpractices/Areaofpractices';
import Happyclient from './Component/Happyclient/Happyclient';
import Ourteam from './Component/Ourteam/Ourteam';
import Faq from './Component/FAQ/Faq';
import Subscribenews from './Component/Subscribenews/Subscribenews';
import Footer from './Component/Footer/Footer';
import Between from './Component/Betweennavhome/Between';


function App() {
  return (
    <div>
    <Navbar/>
    <Between/>
    <Homepage/>
    <Introduction/>
    <Whychooseus/>
     <Areaofpractices/>
     <Happyclient/>
     <Ourteam/>
     <Faq/>
     <Subscribenews/>
     <Footer/>
    </div>
  );
}

export default App;
