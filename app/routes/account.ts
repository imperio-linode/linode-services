import { Router } from "express";
import Logger from "../utils/Logger";
import {endpoints} from "../utils/Constants";
import LinodeClient from "../services/LinodeClient";


const router = Router()
const linode = new LinodeClient()

router.get(endpoints.account, (req, res, next) => {
  linode.linodeUserInfoDetails()
      .then(response => console.log(response))
      .then(response => res.send(response))
})

export default router;
