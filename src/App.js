import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NewsList from "./components/News/News";
import About from "./components/About/About";
import Artists from "./components/Artists/Artists";
import Navbar from "./components/Navbar/Navbar";
import NewsDetail from "./components/News/NewsDetails";
import ArtistMain from "./components/Artists/ArtistMain";
import Services from "./components/Services/Services";
import WhatsAppButton from "./components/WhatsappButton/WhatsappButton";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/clients" element={<Artists />} />
          <Route path="/services" element={<Services />} />
          <Route path="/artist/:artistName" element={<ArtistMain />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
