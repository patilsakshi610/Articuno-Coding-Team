import "./App.css";
import Header from "./Components/Header/header";
import MainSection from "./Components/MainSection/Mainsection";
import LoggedInPage from "./Components/MainSection/LoggedInPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AuthContext from "./Context/AuthContext";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <Header />
        <Routes>
          <Route path="/" exact element={!isAuthenticated && <MainSection />} />
          <Route path="/home" element={isAuthenticated && <LoggedInPage />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
