import IPhonePlanDTO from "@modules/phonePlan/dtos/IPhonePlanDTO";
import IPhonePlanRepository from "@modules/phonePlan/repositories/IPhonePlanRepository";
import PhonePlan from "../../entities/PhonePlan";

class FakePhonePlanRepository implements IPhonePlanRepository {

    private fakePostgresDB: PhonePlan[] = []

    public async findOne(phonePlanCode: number): Promise<PhonePlan | undefined> {
        const phonePlanFound = this.fakePostgresDB.find(phonePlan => {
            phonePlan.phonePlanCode === phonePlanCode
        })
        return phonePlanFound
    }

    public async findAll(): Promise<PhonePlan[]> {
        const allPhonePlan = await this.fakePostgresDB;
        return allPhonePlan
    }

    public async create(data: IPhonePlanDTO): Promise<PhonePlan> {
        const newPhonePlan = new PhonePlan()

        Object.assign(newPhonePlan, data)

        this.fakePostgresDB.push(newPhonePlan)

        return newPhonePlan
    }

    public async delete(id: string): Promise<void> {
        const indexFound = this.fakePostgresDB.findIndex(phonePlan => phonePlan.id === id)
        this.fakePostgresDB.splice(indexFound, 1)
    }

    public async update(id: string): Promise<PhonePlan> {
        throw new Error("Method not implemented.");
    }

}

export default FakePhonePlanRepository;