import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { AssignmentSeeder } from "./assignments.seeder";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const deviceSeed = app.get(AssignmentSeeder);
  await deviceSeed.run();

  await app.close();
}

bootstrap();
