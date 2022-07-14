import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { HomePage } from './pages/Home/HomePage';
import { HeaderPartial } from './partials/HeaderPartial/HeaderPartial';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPartial />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/minhas-pastas" element={<h1>Minhas pastas!!!!</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
