import { Router } from "express";
import Logger from "../utils/Logger";


const router = Router();

router.get('/a', function(req, res, next) {
  Logger.info("Got request")
  // Logger.log(req.body)
  res.send({elo: "eloa"});
});

export default router;
