import DDDCostRepository from '@modules/dddCost/infra/typeorm/repositories/DDDCostRespository'
import PhonePlanRepository from '@modules/phonePlan/infra/typeorm/repositories/PhonePlanRespository'
import dddCostMock from '@modules/dddCost/infra/typeorm/repositories/fakes/DDDCostMock'
import phonePlaMock from '@modules/phonePlan/infra/typeorm/repositories/fakes/PhonePlanMock'

const seeds = async (isConnected: boolean) => {

    if (isConnected) {
        console.log('>>> Cheking if tables ddd_cost and phone_plan are seeded await please...')
        const dddCostRepo = new DDDCostRepository()
        const phonePlanRepo = new PhonePlanRepository()

        const [dddCost, phonePlan] = await Promise.all([
            dddCostRepo.findAll(),
            phonePlanRepo.findAll()

        ])

        if (dddCost.length <= 0) {
            console.log('>>> Table ddd_cost is seeding await...')
            dddCostMock.forEach(dddcost => {
                dddCostRepo.create(dddcost)
            })
            console.log('>>> Table ddd_cost has already seeded')
        }

        if (phonePlan.length <= 0) {
            console.log('>>> Table phone_plan is seeding await...')
            phonePlaMock.forEach(phonePlan => {
                phonePlanRepo.create(phonePlan)
            })
            console.log('>>> Table phone_plan has already seeded')
            return;
        }

        console.log('>>> All tables (ddd_cost, phone_plan) have already seeded')
    }
}

export default seeds