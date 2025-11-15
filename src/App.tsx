import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
