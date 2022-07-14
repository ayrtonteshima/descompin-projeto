import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import { HomePage } from './pages/Home/HomePage';
import { MinhasPastasPage } from "./pages/MinhasPastas/MinhasPastasPage";
import { HeaderPartial } from './partials/HeaderPartial/HeaderPartial';

import { saveFolder, savePinInFolder } from './services/pinService';

function App() {
  //saveFolder('JavaScript');
  savePinInFolder("f901-fd22", "pin321");
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
