import { getRepository, Repository } from 'typeorm'
import IDDDCostDTO from "@modules/dddCost/dtos/IDDDCostDTO";
import IDDDCostRepository from "@modules/dddCost/repositories/IDDDCostRepository";
import DDDCost from "../../entities/DDDCost";

class FakeDDDCostRepository implements IDDDCostRepository {


    private fakePostgresDB: DDDCost[] = []

    public async findOne(dddOrigin: string, dddDestination: string): Promise<DDDCost | undefined> {
        const dddCostFound = this.fakePostgresDB.find(dddCost => {
            dddCost.dddOrigin === dddOrigin && dddCost.dddDestination === dddDestination
        })

        return dddCostFound
    }



    public async findAll(): Promise<DDDCost[]> {
        const allDDDCost = await this.fakePostgresDB;
        return allDDDCost
    }

    public async create({ dddOrigin, dddDestination, priceMinute }: IDDDCostDTO): Promise<DDDCost> {
        const newDDDCost = new DDDCost()

        Object.assign(newDDDCost, {
            dddOrigin,
            dddDestination,
            priceMinute,
        })

        this.fakePostgresDB.push(newDDDCost)

        return newDDDCost
    }

    public async delete(dddOrigin: string, dddDestination: string): Promise<void> {

        const indexFound = this.fakePostgresDB.findIndex(dddCost => {
            dddCost.dddOrigin === dddOrigin && dddCost.dddDestination === dddDestination
        })

        this.fakePostgresDB.splice(indexFound, 1)
    }
}

export default FakeDDDCostRepository;