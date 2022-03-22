import "./App.css";
import Test from "./components/TestPage";
import Home from "./components/Home/Home";
import BannerPage from "./BannerPages/BannerPage";
import Header from "./components/Home/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/gallery/video" element={<DrawingVideo />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/banner/:article" element={<BannerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
