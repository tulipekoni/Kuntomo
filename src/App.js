import Asiakastarinat from "./pages/asiakastarinat/Asiakastarinat";
import Hintalaskuri from "./pages/hintalaskuri/Hintalaskuri";
import Koti from "./pages/koti/Koti";
import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  useEffect(() => {
    document.title = "Kuntomo - Kuntosali & valmennus";
  }, []);
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Routes>
            <Route exact path='/Kuntomo' element={<Koti />} />
            <Route
              exact
              path='/Kuntomo/asiakastarinat'
              element={<Asiakastarinat />}
            />
            <Route
              exact
              path='/Kuntomo/hintalaskuri'
              element={<Hintalaskuri />}
            />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
