import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundGlow from "./components/BackgroundGlow";

function App() {
  return (
    <LanguageProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
      <BackgroundGlow />
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
