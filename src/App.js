import { Routes, Route } from "react-router-dom";

import "./css/App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
  return (
      <div className="App">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        {/* Routes */}
      </div>
  );
}

export default App;
