import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home';
import APropos from './pages/a_propos_page';
import NotFoundPage from './pages/404';
import ListingDetail from './pages/listingDetails';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/a-propos" exact element={<APropos />}/>
          <Route path="/fiche-logement" exact element={<ListingDetail />}/>
          <Route path="/404" exact element={<NotFoundPage />}/>
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
  );
}

export default App;
