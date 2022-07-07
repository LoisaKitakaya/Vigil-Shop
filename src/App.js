import { Routes, Route } from "react-router-dom";

import "./css/App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* Routes */}
    </div>
  );
}

export default App;
