import { LignesEntity } from 'src/lignes/lignes';
import { PositionsEntity } from 'src/positions/positions';
import { LigneType } from 'src/types/lignes.type';
import { UserEntity } from 'src/users/users.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity('metros')
export class MetrosEntity {
  @PrimaryGeneratedColumn()
  id_metro: number;

  @Column()
  nom_metro: string;

  @OneToOne(() => PositionsEntity, { cascade: true })
  @JoinColumn({ name: 'position_id' })
  position: PositionsEntity;

  @ManyToOne(() => LignesEntity, (ligne) => ligne.metros)
  @JoinColumn({ name: 'ligne_id' })
  ligne: LignesEntity;
}
