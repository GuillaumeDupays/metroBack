import { Injectable, NotFoundException } from '@nestjs/common';
import { LignesEntity } from './lignes';
import { InjectRepository } from '@nestjs/typeorm';
import { LigneType } from 'src/types/lignes.type';

import { FindManyOptions, Repository } from 'typeorm';
import { MetrosEntity } from 'src/metros/metros';

@Injectable()
export class LignesService {
  constructor(
    @InjectRepository(LignesEntity)
    private repoLigne: Repository<LignesEntity>,
  ) {}

  async addLigneAndMetros(ligne: LignesEntity): Promise<LignesEntity> {
    return await this.repoLigne.save(ligne);
  }

  async getLignes(
    options?: FindManyOptions<LignesEntity>,
  ): Promise<LignesEntity[]> {
    return await this.repoLigne.find(options);
  }

  async findMetrosByLigne(noLigne: number): Promise<MetrosEntity[]> {
    const ligne = await this.repoLigne.findOne({
      where: { numero_ligne: noLigne },
      relations: { metros: true },
    });

    if (!ligne) {
      throw new NotFoundException(`Ligne avec l'ID ${noLigne} non trouvée`);
    }

    return ligne.metros;
  }
}
