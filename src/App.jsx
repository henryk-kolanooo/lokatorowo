import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import ContactAgent from "./components/ContactAgent";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Hero />
        <SearchBar />
        <Features />
        <Testimonials />
        <ContactAgent />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
