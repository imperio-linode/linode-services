import { Router } from "express";
import { info, infob } from "../utils/Logger";

const router = Router();

router.get('/test', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/a', function(req, res, next) {
  info("Got request")
  // Logger.log(req.body)
  res.send({elo: "eloa"});
});

router.post('/add-engine', function(req, res, next) {
  info("Got request")
  infob(Object.keys(req.body))

  res.send(req.body);
});

export default router;
