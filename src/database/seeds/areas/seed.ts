import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { AreaSeeder } from "./areas.seeder";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const deviceSeed = app.get(AreaSeeder);
  await deviceSeed.run();

  await app.close();
}

bootstrap();
