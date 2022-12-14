import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomeCard from "./components/homePage/HomeCard";
import HomeTextCard from "./components/homePage/HomeTextCard";
import ShopCard from "./components/homePage/ShopCard";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="pages">
        <HomeCard />
        <ShopCard />
        <HomeTextCard />
      </div>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
