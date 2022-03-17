import "./App.css";
import Test from "./components/TestPage";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/gallery/video" element={<DrawingVideo />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
