import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LignesService } from './lignes.service';
import { LigneType } from 'src/types/lignes.type';
import { LignesEntity } from './lignes';
import { MetrosEntity } from 'src/metros/metros';

@Controller('lignes')
export class LignesController {
  constructor(private readonly ligneService: LignesService) {}
  @Post()
  addLigne(@Body() ligne: LignesEntity): Promise<LignesEntity> {
    return this.ligneService.addLigneAndMetros(ligne);
  }
  @Get()
  getLignes(): Promise<LignesEntity[]> {
    return this.ligneService.getLignes();
  }

  @Get(':no_ligne/metros')
  async findMetrosByLigne(
    @Param('no_ligne') noLigne: number,
  ): Promise<MetrosEntity[]> {
    return this.ligneService.findMetrosByLigne(noLigne);
  }
}
