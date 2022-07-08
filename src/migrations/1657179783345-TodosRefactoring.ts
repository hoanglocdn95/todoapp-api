import { MigrationInterface, QueryRunner } from 'typeorm';

export class TodosRefactoring1657179783345 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "todoEntity" RENAME COLUMN "title" TO "name"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "todoEntity" RENAME COLUMN "name" TO "title"`,
    );
  }
}
