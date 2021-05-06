import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn
} from 'typeorm';

@Entity('ddd_cost')
export default class DDDCost {

    @PrimaryColumn()
    dddOrigin: string

    @PrimaryColumn()
    dddDestination: string

    @Column()
    priceMinute: number

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;
}
