import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('messages') 
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column('text') 
  message: string;

  @Column({ default: false }) 
  read: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}