/* eslint-disable camelcase */
import PhonePlan from '../infra/typeorm/entities/PhonePlan';
import AppError from '@shared/errors/AppErrors';
import IPhonePlanRepository from '@modules/phonePlan/repositories/IPhonePlanRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
class FindAllPhonePlanService {
    constructor(
        @inject('PhonePlanRepository')
        private phonePlanRepository: IPhonePlanRepository) {
    }

    public async execute(): Promise<PhonePlan[]> {
        const findAll = await this.phonePlanRepository.findAll()

        if (findAll instanceof Error)
            throw new AppError(`Internal error DB`);

        return findAll;
    }
}

export default FindAllPhonePlanService;