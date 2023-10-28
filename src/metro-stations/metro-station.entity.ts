import { GeolocationsEntity } from 'src/geolocation/geolocation.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('metrostations')
export class MetroStationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  station: string;

  @OneToOne(() => GeolocationsEntity, { cascade: true })
  @JoinColumn({ name: 'geolocationId' })
  geolocation: GeolocationsEntity;
}
