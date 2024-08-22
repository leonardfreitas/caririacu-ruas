import { Router } from "express";
import { StreetController } from "../controllers/StreetController";

const routes = Router()
const streetController = new StreetController()

routes.post('/streets', streetController.create)

export { routes }
