import 'reflect-metadata';
import FindAllDDDCostService from './FindAllDDDCostService'
import FakeDDDCostRespository from '../infra/typeorm/repositories/fakes/FakeDDDCostRespository'
import DDDCost from '@modules/dddCost/infra/typeorm/entities/DDDCost'

describe('Test in FindAllDDDCostService', () => {
    const fkDDDCostRepository = new FakeDDDCostRespository
    const findAll = new FindAllDDDCostService(fkDDDCostRepository)

    it('should get all dddcost from fake DB', async () => {

        await fkDDDCostRepository.create(
            {
                dddOrigin: "011",
                dddDestination: '021',
                priceMinute: 2.00
            })

        const allDDDCost = await findAll.execute()

        expect(allDDDCost).toBeInstanceOf(Array)
        expect(allDDDCost[0]).toBeInstanceOf(DDDCost)
    })
})