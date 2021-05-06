/* eslint-disable camelcase */
import { Router } from 'express';
import DDDCostController from '../controllers/DDDConstController'

const dddCostRouter = Router();
const dddCostController = new DDDCostController()

dddCostRouter.get('/', dddCostController.findAll);
dddCostRouter.post('/create', dddCostController.create);

export default dddCostRouter;