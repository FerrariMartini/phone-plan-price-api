/* eslint-disable camelcase */
import DDDCost from '../infra/typeorm/entities/DDDCost';
import AppError from '@shared/errors/AppErrors';
import IDDDCostRepository from '@modules/dddCost/repositories/IDDDCostRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
class FindAllDDDCostService {
    constructor(
        @inject('DDDCostRepository')
        private dddCostRepository: IDDDCostRepository) {
    }

    public async execute(): Promise<DDDCost[]> {
        const findAll = await this.dddCostRepository.findAll()

        if (findAll instanceof Error)
            throw new AppError(`Internal error DB`);

        return findAll;
    }
}

export default FindAllDDDCostService;