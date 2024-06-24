import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Homes";
import LoginAndProfile from "./pages/LoginAndProfile";
import ModsPage from "./pages/ModsPage";

function App() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/session" element={<LoginAndProfile />} />
      <Route path="/mods" element={<ModsPage />} />
    </Routes>
  );
}

export default App;
