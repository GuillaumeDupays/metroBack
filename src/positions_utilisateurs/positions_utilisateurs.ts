import { MetrosEntity } from 'src/metros/metros';
import { PositionsEntity } from 'src/positions/positions';
import { UserEntity } from 'src/users/users.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('positions_utilisateurs')
export class PositionsUtilisateursEntity {
  @PrimaryGeneratedColumn()
  id_position_utilisateur: number;

  @Column()
  date_heure_position: Date;

  @OneToOne(() => PositionsEntity, { cascade: true })
  @JoinColumn({ name: 'id_position' })
  position_id: PositionsEntity;
  @OneToOne(() => UserEntity, { cascade: true })
  @JoinColumn({ name: 'id_user' })
  utilisateur_id: UserEntity;
  @OneToOne(() => MetrosEntity, { cascade: true })
  @JoinColumn({ name: 'id_metro' })
  dernier_metro_id: MetrosEntity;
}
