import PhonePlan from '../infra/typeorm/entities/PhonePlan';
import IPhonePlanRepository from '@modules/phonePlan/repositories/IPhonePlanRepository'
import { inject, injectable } from 'tsyringe'
import AppError from '@shared/errors/AppErrors'
import IPhonePlanDTO from '@modules/phonePlan/dtos/IPhonePlanDTO'

@injectable()
class CreatePhonePlanService {

    constructor(
        @inject('PhonePlanRepository')
        private phonePlanRepository: IPhonePlanRepository,
    ) { }

    public async execute({ phonePlanCode, type, callFreeMinutes, description }: IPhonePlanDTO,): Promise<PhonePlan | undefined> {
        const checkPhonePlanExists = await this.phonePlanRepository.findOne(phonePlanCode)

        if (checkPhonePlanExists)
            throw new AppError('DDDCost has already exist');

        const newPhonePlan = await this.phonePlanRepository.create({ phonePlanCode, type, callFreeMinutes, description })

        return newPhonePlan
    }
}

export default CreatePhonePlanService