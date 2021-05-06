import 'reflect-metadata';
import CreatePhonePlanService from './CreatePhonePlanService'
import FakePhonePlanRepository from '../infra/typeorm/repositories/fakes/FakePhonePlanRepository'
import PhonePlan from '@modules/phonePlan/infra/typeorm/entities/PhonePlan'

describe('Test in FindAllPhonePlanService', () => {
    const FkPhonePlanRepository = new FakePhonePlanRepository
    const createPhonePlanService = new CreatePhonePlanService(FkPhonePlanRepository)

    it('should able to create a new Phone Plans into fake postgresDB', async () => {

        const phonePlanCode = 43
        const type = `FaleMais-30`
        const callFreeMinutes = 30
        const description = `Vc tem 30 minutos para falar a vontade`

        const newPhonePlane = await createPhonePlanService.execute({
            phonePlanCode,
            type,
            callFreeMinutes,
            description
        })

        expect(newPhonePlane).toBeInstanceOf(PhonePlan)
    })
})

