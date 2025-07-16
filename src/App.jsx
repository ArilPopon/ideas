import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Ideas from "./pages/Ideas";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/ideas" element={<Ideas />} />
      </Routes>
    </Router>
  );
}

export default App;
