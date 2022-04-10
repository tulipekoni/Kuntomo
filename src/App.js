import Asiakastarinat from "./pages/asiakastarinat/Asiakastarinat";
import Hintalaskuri from "./pages/hintalaskuri/Hintalaskuri";
import Koti from "./pages/koti/Koti";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Routes>
            <Route exact path='/' element={<Koti />} />
            <Route exact path='/asiakastarinat' element={<Asiakastarinat />} />
            <Route exact path='/hintalaskuri' element={<Hintalaskuri />} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
