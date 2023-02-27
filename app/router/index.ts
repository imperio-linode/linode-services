import { Router } from "express";
import Logger from "../utils/Logger";

const router = Router();

router.get('/test', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/a', function(req, res, next) {
  Logger.info("Got request")
  // Logger.log(req.body)
  res.send({elo: "eloa"});
});

router.post('/add-engine', function(req, res, next) {
  Logger.info("Got request")
  Object.keys(req.body).forEach(Logger.infob)

  res.send(req.body);
});

export default router;
