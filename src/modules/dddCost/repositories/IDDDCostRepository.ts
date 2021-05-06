import DDDCost from '@modules/dddCost/infra/typeorm/entities/DDDCost'
import IDDDCostDTO from '@modules/dddCost/dtos/IDDDCostDTO'

interface IDDDCostRepository {
    findAll(): Promise<DDDCost[]>;
    findOne(dddOrigin: string, dddDestination: string): Promise<DDDCost | undefined>;
    create(data: IDDDCostDTO): Promise<DDDCost | undefined>;
    delete(dddOrigin: string, dddDestination: string): Promise<void>;
}

export default IDDDCostRepository