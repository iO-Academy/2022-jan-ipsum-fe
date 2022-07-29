import './normalize.css'
import './App.css';
import Footer from "./Footer/Footer";
import Title from "./Title/Title";
import About from "./About/About";
import ParaGenerate from "./ParaGenerate/ParaGenerate";

function App() {
  return (
      <>
        <Title />
        <About />
        <ParaGenerate />
        <Footer />
      </>
  );
}

export default App;
