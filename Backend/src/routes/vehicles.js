import express from "express";
import vehiclesController from "../controllers/vehiclesController.js";

const router = express.Router();

router.route("/")
.get(vehiclesController.getVehicles)
.post(vehiclesController.insertVehicles);

router.route("/:id")
.put(vehiclesController.updateEvaluation)
.delete(vehiclesController.deleteVehicles);

export default router;