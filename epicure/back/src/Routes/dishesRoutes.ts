import express = require("express");
import { getAll, getByName, getSignature } from "../Services/dishesService";
export const dishesRoutes = express.Router();

dishesRoutes
  .route("/")
  .get(async (req: express.Request, res: express.Response) => {
    const dishes = await getAll();
    res.send(dishes);
  });

dishesRoutes
  .route("/getByName/:dishName")
  .get(async (req: express.Request, res: express.Response) => {
    const name = req.params.dishName;
    const dishes = await getByName(name);
    res.send(dishes);
  });

dishesRoutes
  .route("/getSignature")
  .get(async (req: express.Request, res: express.Response) => {
    const dishes = await getSignature();
    res.send(dishes);
  });

module.exports = dishesRoutes;
