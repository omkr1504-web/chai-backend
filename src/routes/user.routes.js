import {Router} from "express";
import { registerUser } from "../controllers/user.controller.js";
import {upload} from "../midddlerwares/multer.middleware.js"

const router =Router()

router.route("/register").post(
    upload.fileds([
        {
            name:"avatar",
            maxCount:1
        },{
            name:"coverimage",
            maxCount:1

        }

    ]),
    registerUser
)



export default router