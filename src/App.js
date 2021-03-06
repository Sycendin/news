import "./App.css";
import Home from "./components/Home/Home";
import BannerPage from "./BannerPages/BannerPage";
import Header from "./components/Home/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import ArticleTopPage from "./components/Articles/ArticleTop";
import ArticleGuidePage from "./components/Articles/ArticleGuides";
import ArticleFiltersPage from "./components/Articles/ArticleFilters";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/gallery/video" element={<DrawingVideo />} /> */}
          <Route path="*" element={<NotFound />} />
          <Route path="/news/" element={<Home />} />
          <Route path="/news/banner/:article" element={<BannerPage />} />
          <Route path="/news/article/:article" element={<ArticleTopPage />} />
          <Route path="/news/guide/:article" element={<ArticleGuidePage />} />
          <Route
            path="/news/filter/:type/:article/"
            element={<ArticleFiltersPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
