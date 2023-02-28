import { Router } from "express";
import Logger from "../utils/Logger";
import TerraformClient from "../terraform/TerraformClient"

const router = Router();
const terraform = new TerraformClient();

router.get('/test', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/a', function(req, res, next) {
  res.send({elo: "eloa"});
});

router.post('/add-engine', function(req, res, next) {
  Object.keys(req.body).forEach(Logger.info)
  Logger.info("Image: " + req.body['image'])
  terraform.createSingleInstance(req.body)
  res.send(req.body);
});

export default router;
