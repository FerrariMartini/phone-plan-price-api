import PhonePlan from '@modules/phonePlan/infra/typeorm/entities/PhonePlan'
import IPlanDTO from '@modules/phonePlan/dtos/IPhonePlanDTO'

interface IPlanRepository {
    findAll(): Promise<PhonePlan[]>;
    findOne(phonePlanCode: number): Promise<PhonePlan | undefined>;
    create(data: IPlanDTO): Promise<PhonePlan | undefined>;
    delete(id: string): Promise<void>;
    update(id: string): Promise<PhonePlan>
}

export default IPlanRepository