import { getRepository, Repository } from 'typeorm'
import IPhonePlanDTO from "@modules/phonePlan/dtos/IPhonePlanDTO";
import IPhonePlanRepository from "@modules/phonePlan/repositories/IPhonePlanRepository";
import PhonePlan from "../entities/PhonePlan";

class PhonePlanRepository implements IPhonePlanRepository {

    private ormRepository: Repository<PhonePlan>

    constructor() {
        this.ormRepository = getRepository(PhonePlan)
    }


    public async findOne(phonePlanCode: number): Promise<PhonePlan | undefined> {
        const phonePlanFound = await this.ormRepository.findOne({ where: { phonePlanCode } })
        return phonePlanFound
    }

    public async findAll(): Promise<PhonePlan[]> {
        const phonePlane = await this.ormRepository.find();
        return phonePlane
    }

    public async create(data: IPhonePlanDTO): Promise<PhonePlan | undefined> {
        const newPhonePlan = this.ormRepository.create(data)
        await this.ormRepository.save(newPhonePlan)
        return newPhonePlan
    }

    public async delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

    public async update(id: string): Promise<PhonePlan> {
        throw new Error('Method not implemented.');
    }
}

export default PhonePlanRepository;