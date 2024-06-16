import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CharacterCreation from "./pages/CharacterCreation.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/character-creation" element={<CharacterCreation />} />
      </Routes>
    </Router>
  );
}

export default App;
