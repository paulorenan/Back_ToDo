import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class CreateTasks1646619562662 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tasks',
        columns: [
          new TableColumn({
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          }),
          new TableColumn({
            name: 'description',
            type: 'varchar',
            isNullable: false,
          }),
          new TableColumn({
            name: 'status',
            type: 'boolean',
            isNullable: false,
          }),
          new TableColumn({
            name: 'user_id',
            type: 'int',
            isNullable: true,
          }),
          new TableColumn({
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          }),
          new TableColumn({
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          }),
        ],
      }),
    );

    await queryRunner.createForeignKey('tasks', new TableForeignKey({
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }  

}
