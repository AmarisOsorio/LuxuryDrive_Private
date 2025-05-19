import express from "express";
import RoleController from "../controllers/RoleController.js";

const router = express.Router();

router.route("/").get(RoleController.getRole)
.post(RoleController.insertRole)

router.route("/:id")
.put(RoleController.updateRole)
.delete(RoleController.deleteRole);

export default router;