import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PositionsUtilisateursModule } from './positions_utilisateurs/positions_utilisateurs.module';
import { LignesModule } from './lignes/lignes.module';
import { MetrosModule } from './metros/metros.module';
import { PositionsModule } from './positions/positions.module';
import { IncidentsModule } from './incidents/incidents.module';
import { UserEntity } from './users/users.entity';
import { PositionsEntity } from './positions/positions';
import { PositionsUtilisateursEntity } from './positions_utilisateurs/positions_utilisateurs';
import { MetrosEntity } from './metros/metros';
import { LignesEntity } from './lignes/lignes';
import { IncidentsEntity } from './incidents/incidents';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Personne15!',
      database: 'metrodb',
      entities: [
        UserEntity,
        PositionsEntity,
        PositionsUtilisateursEntity,
        MetrosEntity,
        LignesEntity,
        IncidentsEntity,
      ],
      synchronize: true,
    }),

    UsersModule,
    PositionsUtilisateursModule,
    LignesModule,
    MetrosModule,
    PositionsModule,
    IncidentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
