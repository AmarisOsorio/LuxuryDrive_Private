import express from "express";
import servicesProvidedController from "../controllers/servicesProvidedController.js";

const router = express.Router();

router.route("/")
.get(servicesProvidedController.getServicesProvided)
.post(servicesProvidedController.insertServicesProvided)

router.route("/:id")
.put(servicesProvidedController.updateServicesProvided)
.delete(servicesProvidedController.deleteServicesProvided);

export default router;