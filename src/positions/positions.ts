import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('positions')
export class PositionsEntity {
  @PrimaryGeneratedColumn()
  id_positions: number;

  @Column({ type: 'double' })
  latitude: number;

  @Column({ type: 'double' })
  longitude: number;

  @Column({ type: 'double' })
  precision: number;

  @Column({ type: 'double' })
  cap: number;

  @Column()
  vitesse: number;
}
