import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import GuitarBrandsPage from "./Pages/GuitarBrandsPage/GuitarBrandsPage";
import GuitarModelsPage from "./Pages/GuitarModelsPage/GuitarModelsPage";
import GuitarDetailsPage from "./Pages/GuitarDetailsPage/GuitarDetailsPage";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to={"/brands"} />} />
          <Route path="/brands" element={<GuitarBrandsPage />} />
          <Route path="/models/:id" element={<GuitarModelsPage />} />
          <Route path="models/:id/details" element={<GuitarDetailsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
