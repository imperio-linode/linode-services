import {Router} from "express";
import LinodeClient from "../services/LinodeClient"
import {endpoints} from "../object/Constants"
import Logger from "../utils/Logger";


const router = Router()
const linode = new LinodeClient()

router.get(endpoints.empty, (req, res, next) => {
    res.send({test: "test"});
});

router.get(endpoints.account, (req, res, next) => {
    linode.linodeUserInfoDetails()
        .then(response => console.log(response))
        .then(response => res.send(response))
})

router.post(endpoints.addInstance, async (req, res) => {
    try {
        const {statusCode} = await linode.createSingleInstance(req.body)
        res.status(statusCode).send({test: "test"})
    } catch (error) {
        res.status(500).send(error)
    }
})


export default router;
