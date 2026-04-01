import { NestFactory } from '@nestjs/core';
import { SeedModule } from './seed.module';
import { UserSeeder } from './users/user.seeder';
import { ItemSeeder } from './items/item.seeder';
import { AssignmentSeeder } from './assignments/assignments.seeder';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(SeedModule);

  const userSeeder = app.get(UserSeeder);
  const itemSeeder = app.get(ItemSeeder);
  const assignmentSeeder = app.get(AssignmentSeeder);

  await userSeeder.run();
  console.log('Users');

  await itemSeeder.run();
  console.log('Items');

  await assignmentSeeder.run();
  console.log('Assignments');

  console.log('Seeds completed');

  await app.close();
}

bootstrap();