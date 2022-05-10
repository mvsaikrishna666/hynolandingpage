import "./App.css";
import Header from "../src/components/Header/Header";
import Section1 from "./components/section1/section1";
import OurTeam from "./components/OurTeam/OurTeam ";
import OurFeatures from "./components/ourFeatures/OurFeatures";
import Section3 from "./components/section3/Section3";
import Footer from "./components/Footer/Footer";
import Section2 from "./components/section2/Section2";
function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <OurFeatures />
      <Section2 />
      <OurTeam />
      <Section3 />
      <Footer />
    </div>
  );
}

export default App;
