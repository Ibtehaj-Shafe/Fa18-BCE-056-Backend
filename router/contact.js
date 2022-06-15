import Express from "express";
import { getcontact,postcontact,putcontact,deletecontact,getsinglecontact,getsearchcontact } from "../controller/contact.js";

const router = Express.Router();

router.get("/",getcontact);
router.post("/",postcontact);
router.put("/:id",putcontact);
router.delete("/:id",deletecontact);
router.get("/:id",getsinglecontact);
router.get("/search/:name",getsearchcontact);

export default router;