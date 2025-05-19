import express from "express";
import servicesController from "../controllers/servicesController.js";

const router = express.Router();

router.route("/")
.get(servicesController.getServices)
.post(servicesController.insertServices)

router.route("/:id")
.put(servicesController.updateServices)
.delete(servicesController.deleteServices);

export default router;