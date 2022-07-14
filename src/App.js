import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import { HomePage } from './pages/Home/HomePage';
import { MinhasPastasPage } from "./pages/MinhasPastas/MinhasPastasPage";
import { HeaderPartial } from './partials/HeaderPartial/HeaderPartial';

import { saveFolder } from './services/pinService';

function App() {
  saveFolder('JavaScript');
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPartial />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/minhas-pastas" element={<MinhasPastasPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
