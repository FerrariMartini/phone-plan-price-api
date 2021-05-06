
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class dddCost1619621463453 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "ddd_cost",
                columns: [
                    {
                        name: 'dddOrigin',
                        type: 'varchar',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'dddDestination',
                        type: 'varchar',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'priceMinute',
                        type: 'numeric(6,2)',
                        isNullable: false
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'now()',
                        isNullable: false
                    },
                    {
                        name: 'updatedAt',
                        type: 'timestamp',
                        default: 'now()',
                        isNullable: false
                    },
                ]
            })
        )
    }



    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('ddd_cost')
    }

}