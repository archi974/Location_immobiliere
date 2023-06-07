import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import APropos from './pages/a_propos_page';
import ErrorPage from './pages/404';
import FicheLogement from './pages/fiche_logement';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/a_propos" exact element={<APropos />}/>
          <Route path="/404" exact element={<ErrorPage />}/>
          <Route path="/fiche_logement" exact element={<FicheLogement />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
