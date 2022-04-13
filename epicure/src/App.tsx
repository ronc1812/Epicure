import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantsPage from "./pages/RestaurantsPage";
import Restaurant from "./components/Restaurant";
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
        <Route
          path="/restaurants/:restaurant"
          element={
            <>
              <Restaurant />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
