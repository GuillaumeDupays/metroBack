import { MetrosEntity } from 'src/metros/metros';
import { PositionsEntity } from 'src/positions/positions';
import { UserEntity } from 'src/users/users.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity('lignes')
export class LignesEntity {
  @PrimaryGeneratedColumn()
  id_ligne: number;

  @Column()
  numero_ligne: number;

  // @OneToMany(() => MetrosEntity, (metro) => metro.id_metro, { cascade: true })
  // metros: MetrosEntity[];
  @OneToMany(() => MetrosEntity, (metro) => metro.ligne, { cascade: true })
  @JoinColumn({ name: 'id_ligne' })
  metros: MetrosEntity[];
}
