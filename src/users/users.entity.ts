import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  mail: string;

  @Column()
  phone: number;
}
