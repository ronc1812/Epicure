import express = require("express");
import {
  getAll,
  getByChef,
  getByName,
  getPopular,
} from "../Services/restaurantService";
export const restaurantsRoutes = express.Router();

restaurantsRoutes
  .route("/getByName/:resName")
  .get(async (req: express.Request, res: express.Response) => {
    const name = req.params.resName;
    const restaurant = await getByName(name);
    res.send(restaurant);
  });

restaurantsRoutes
  .route("/getByChef/:chefName")
  .get(async (req: express.Request, res: express.Response) => {
    const name = req.params.chefName;
    const restaurant = await getByChef(name);
    res.send(restaurant);
  });

restaurantsRoutes
  .route("/")
  .get(async (req: express.Request, res: express.Response) => {
    const restaurants = await getAll();
    res.send(restaurants);
  });

restaurantsRoutes
  .route("/getPopular")
  .get(async (req: express.Request, res: express.Response) => {
    const restaurants = await getPopular();
    res.send(restaurants);
  });

module.exports = restaurantsRoutes;
