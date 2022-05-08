import React from "react";
import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantsPage from "./pages/restaurantPage/RestaurantsPage";
import Restaurant from "./components/restaurant/Restaurant";
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
