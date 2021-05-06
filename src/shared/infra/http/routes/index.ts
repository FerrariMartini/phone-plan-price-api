import { Router } from 'express'
import dddCostRouter from '@modules/dddCost/infra/http/routes/dddcost.routes'
import planRouter from '@modules/phonePlan/infra/http/routes/phonePlan.routes'


const routes = Router();

routes.use('/dddcost', dddCostRouter)
routes.use('/plan', planRouter)

export default routes;