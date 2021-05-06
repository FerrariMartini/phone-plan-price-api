import { getRepository, Repository } from 'typeorm'
import IDDDCostDTO from "@modules/dddCost/dtos/IDDDCostDTO";
import IDDDCostRepository from "@modules/dddCost/repositories/IDDDCostRepository";
import DDDCost from "../entities/DDDCost";

class DDDCostRespository implements IDDDCostRepository {

    private ormRepository: Repository<DDDCost>

    constructor() {
        this.ormRepository = getRepository(DDDCost)
    }

    public async findOne(dddOrigin: string, dddDestination: string): Promise<DDDCost | undefined> {
        const dddCostFound = await this.ormRepository.findOne(
            {
                where:
                {
                    dddOrigin,
                    dddDestination
                }
            });
        return dddCostFound
    }

    public async findAll(): Promise<DDDCost[]> {
        const allDDDCost = await this.ormRepository.find();
        return allDDDCost
    }

    public async create({ dddOrigin, dddDestination, priceMinute }: IDDDCostDTO): Promise<DDDCost | undefined> {
        const newDDDCost = this.ormRepository.create({ dddOrigin, dddDestination, priceMinute })
        await this.ormRepository.save(newDDDCost)
        return newDDDCost
    }

    public async delete(dddOrigin: string, dddDestination: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
}

export default DDDCostRespository;