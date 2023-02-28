import {Router} from "express";
import LinodeClient from "../cloud/services/LinodeClient"
import {endpoints} from "../cloud/object/Constants"


const router = Router();
const terraform = new LinodeClient();

router.get(endpoints.empty, function (req, res, next) {
    // terraform.createSingleInstance(req.body)
    res.send({test: "test"});
});

router.get(endpoints.account, function (req, res, next) {
    terraform.linodeUserInfoDetails()
        .then(response => console.log(response))
        .then(response => res.send(response));
});

export default router;
