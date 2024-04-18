import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RouteContent from "./route";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <>
      <Router>
        <div className="relative">
          <div className="absolute top-0 z-[999] overflow-x-hidden max-w-full">
          <Header/>
          </div>
          <RouteContent />
          <Footer/>
      <button onClick={scrollToTop} className="rounded-full p-1 px-2 md:p-2 md:px-4 fixed bottom-4 lg:bottom-8 right-4 lg:right-6 bg-white text-4xl h-12 w-12 flex justify-center items-center">
        <span>&#8593;</span>
        </button>
        </div>
      </Router>
    </>
  );
}

export default App;
