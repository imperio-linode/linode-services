import { Router } from "express";
import Logger from "../utils/Logger";
import LinodeClient from "../services/LinodeClient"
import {endpoints} from "../object/Constants"


const router = Router()
const linode = new LinodeClient()



export default router;
