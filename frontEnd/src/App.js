import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home';
import APropos from './pages/a_propos_page';
import ErrorPage from './pages/404';
import FicheLogement from './pages/fiche_logement';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/a_propos" exact element={<APropos />}/>
          <Route path="/fiche_logement" exact element={<FicheLogement />}/>
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="/404" exact element={<ErrorPage />}/>
        </Routes>
      </Router>
  );
}

export default App;
