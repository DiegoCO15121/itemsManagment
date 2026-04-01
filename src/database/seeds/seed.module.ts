import { Module } from '@nestjs/common';
import { AssignmentsModule } from 'src/core/assignments/assignments.module';
import { ItemsModule } from 'src/core/items/items.module';
import { UserModule } from 'src/core/user/user.module';
import { UserSeeder } from './users/user.seeder';
import { AssignmentSeeder } from './assignments/assignments.seeder';
import { ItemSeeder } from './items/item.seeder';
import { User } from 'src/core/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assignment } from 'src/core/assignments/entities/assignment.entity';
import { Item } from 'src/core/items/entities/item.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        database: configService.get<string>('DB_NAME'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),

    UserModule,
    AssignmentsModule,
    ItemsModule,
    TypeOrmModule.forFeature([User, Assignment, Item]),
  ],
  providers: [UserSeeder, AssignmentSeeder, ItemSeeder],
})
export class SeedModule {}
