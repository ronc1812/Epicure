import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantsPage from "./pages/RestaurantsPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
            </>
          }
        ></Route>
        <Route
          path="/restaurants"
          element={
            <>
              <RestaurantsPage />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
