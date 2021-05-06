import 'reflect-metadata';
import FindAllPhonePlanService from './FindAllPhonePlanService'
import FakePhonePlanRepository from '../infra/typeorm/repositories/fakes/FakePhonePlanRepository'
import PhonePlan from '@modules/phonePlan/infra/typeorm/entities/PhonePlan'

describe('Test in FindAllPhonePlanService', () => {
    const FkPhonePlanRepository = new FakePhonePlanRepository
    const findAllPhonePlanService = new FindAllPhonePlanService(FkPhonePlanRepository)

    it('should get all Phone Plans from fake DB', async () => {
        for (let i = 1; i < 4; i++) {
            const newPhonePlan = {
                phonePlanCode: i * 10,
                type: `FaleMais-${i.toString()}0`,
                callFreeMinutes: i * 10,
                description: `Vc tem ${i.toString()}0 minutos para falar a vontade`,

            }
            FkPhonePlanRepository.create(newPhonePlan)
        }

        const allphonePlan = await findAllPhonePlanService.execute()

        expect(allphonePlan).toBeInstanceOf(Array)
        expect(allphonePlan[0]).toBeInstanceOf(PhonePlan)
    })

})