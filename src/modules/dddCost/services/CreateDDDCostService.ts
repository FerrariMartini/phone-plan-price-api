
import { injectable, inject } from 'tsyringe'
import IDDDCostRepository from '@modules/dddCost/repositories/IDDDCostRepository'
import IDDDCostDTO from '@modules/dddCost/dtos/IDDDCostDTO'
import DDDCost from '../infra/typeorm/entities/DDDCost'
import AppError from '@shared/errors/AppErrors'

@injectable()
class CreateDDDCostService {

    constructor(
        @inject('DDDCostRepository')
        private dddCostRespository: IDDDCostRepository,
    ) { }

    public async execute({ dddOrigin, dddDestination, priceMinute }: IDDDCostDTO): Promise<DDDCost | undefined> {
        const checkDDDCostExists = await this.dddCostRespository.findOne(dddOrigin, dddDestination)

        if (checkDDDCostExists)
            throw new AppError('DDDCost has already exist');

        const newDDDCost = await this.dddCostRespository.create({ dddOrigin, dddDestination, priceMinute })

        return newDDDCost
    }
}

export default CreateDDDCostService