import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('geolocations')
export class GeolocationsEntity {
  @PrimaryGeneratedColumn()
  id: number;

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
