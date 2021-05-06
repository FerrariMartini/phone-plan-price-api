import 'reflect-metadata';
import CreateDDDCostService from './CreateDDDCostService'
import FakeDDDCostRespository from '../infra/typeorm/repositories/fakes/FakeDDDCostRespository'
import DDDCost from '@modules/dddCost/infra/typeorm/entities/DDDCost'

describe('Test in CreateDDDCostService', () => {
    const fkDDDCostRepository = new FakeDDDCostRespository
    const createDDDCostService = new CreateDDDCostService(fkDDDCostRepository)

    it('should able to create a new dddcost into fake postgresDB', async () => {
        const newDDDCost = await createDDDCostService.execute(
            {
                dddOrigin: '011',
                dddDestination: '012',
                priceMinute: 3.90
            })

        expect(newDDDCost).toBeInstanceOf(DDDCost)
    })
})