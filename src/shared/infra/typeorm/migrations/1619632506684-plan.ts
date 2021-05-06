import { MigrationInterface, QueryRunner, Table, Unique } from "typeorm";

export class plan1619632506684 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "phone_plan",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'phonePlanCode',
                        type: 'numeric',
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'callFreeMinutes',
                        type: 'numeric(6,2)',
                        isNullable: false
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: true
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
        await queryRunner.dropTable("phone_plan")
    }

}