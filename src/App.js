import './App.css';
import Goverment from './Components/Goverment';
import Alllists from './Components/Alllists';

import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import Navbar from './Utils/Navbar';
import Wildcart from './Components/Wildcart';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Goverment />} />
        <Route path="lists" element={<Alllists />} />
        <Route
          path="*"
          element={
            <Wildcart />
          }
        />
      </Routes>

    </>

  );
}

export default App;
