import { container } from 'tsyringe'
import IDDDCostRepository from '@modules/dddCost/repositories/IDDDCostRepository'
import DDDCostRepository from '@modules/dddCost/infra/typeorm/repositories/DDDCostRespository'

import IPhonePlanRepository from '@modules/phonePlan/repositories/IPhonePlanRepository'
import PhonePlanRepository from '@modules/phonePlan/infra/typeorm/repositories/PhonePlanRespository'


container.registerSingleton<IDDDCostRepository>('DDDCostRepository', DDDCostRepository)
container.registerSingleton<IPhonePlanRepository>('PhonePlanRepository', PhonePlanRepository)