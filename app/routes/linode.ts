import {Router} from "express";
import LinodeClient from "../services/LinodeClient"
import {endpoints} from "../object/Constants"


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

router.get(endpoints.addEngine, (req, res) => {
    linode.createSingleInstance(req.body)
    res.send({test: "test"})

})


export default router;
