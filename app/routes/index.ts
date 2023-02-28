import { Router } from "express";
import Logger from "../utils/Logger";
import LinodeClient from "../cloud/services/LinodeClient"
import {endpoints} from "../cloud/object/Constants"


const router = Router();
const terraform = new LinodeClient();

router.post(endpoints.addEngine, function(req, res, next) {
  Object.keys(req.body).forEach(Logger.info)
  Logger.info("Image: " + req.body['image'])
  terraform.createSingleInstance(req.body)
  res.send(req.body);
});

export default router;
