import express = require("express");
import { getAll, getByName } from "../Services/chefService";

export const chefRoutes = express.Router();

chefRoutes
  .route("/")
  .get(async (req: express.Request, res: express.Response) => {
    const chefs = await getAll();
    res.send(chefs);
  });

chefRoutes
  .route("/getByName/:chefName")
  .get(async (req: express.Request, res: express.Response) => {
    const name = req.params.chefName;
    const chefs = await getByName(name);
    res.send(chefs);
  });

module.exports = chefRoutes;
