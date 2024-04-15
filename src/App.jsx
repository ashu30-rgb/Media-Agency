import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RouteContent from "./route";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Router>
        <div className="relative">
          <div className="absolute top-0 z-[999] overflow-x-hidden max-w-full">
          <Header/>
          </div>
          <RouteContent />
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
