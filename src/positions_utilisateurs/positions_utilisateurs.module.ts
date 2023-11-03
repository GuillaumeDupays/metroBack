import { Module } from '@nestjs/common';
import { PositionsUtilisateursController } from './positions_utilisateurs.controller';
import { PositionsUtilisateursService } from './positions_utilisateurs.service';

@Module({
  controllers: [PositionsUtilisateursController],
  providers: [PositionsUtilisateursService]
})
export class PositionsUtilisateursModule {}
