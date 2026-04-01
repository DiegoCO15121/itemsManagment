import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { ItemSeeder } from "./item.seeder";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const deviceSeed = app.get(ItemSeeder);
  await deviceSeed.run();

  await app.close();
}

bootstrap();
