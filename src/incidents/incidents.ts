import { PositionsUtilisateursEntity } from 'src/positions_utilisateurs/positions_utilisateurs';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('incidents')
export class IncidentsEntity {
  @PrimaryGeneratedColumn()
  id_incident: number;

  @Column()
  date_heure: Date;
  @Column()
  statut: string;

  @OneToOne(() => PositionsUtilisateursEntity, { cascade: true })
  @JoinColumn({ name: 'id_position_utilisateur' })
  position_utilisateur_id: PositionsUtilisateursEntity;
}
