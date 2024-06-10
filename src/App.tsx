import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Homes";
import LoginAndProfile from "./pages/LoginAndProfile";

function App() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginAndProfile />} />
    </Routes>
  );
}

export default App;
