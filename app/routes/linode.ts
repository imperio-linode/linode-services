import {Router} from "express";
import LinodeClient from "../services/LinodeClient"
import {endpoints} from "../utils/Constants"
import Logger from "../utils/Logger";


const router = Router()
const linode = new LinodeClient()

router.get(endpoints.empty, (req, res, next) => {
    Logger.log("Test: ");
    const paramValue = req.query.test as string; // Cast the value of `req.query.param` to string
    Logger.log(paramValue);
    res.send({test: "test"});
});

router.post(endpoints.empty, async (req, res) => {
        const {statusCode, body} = await linode.createSingleInstance(req.body)
        res.status(statusCode).send(body)
})

router.delete(endpoints.empty, async (req, res) => {
    const {statusCode, body} = await linode.deleteSingleInstance(req.query.id as string)
    res.status(statusCode).send(body)
})

export default router;
