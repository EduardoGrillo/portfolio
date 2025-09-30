import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projects') 
export class Project {
  @PrimaryGeneratedColumn('uuid') 
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ name: 'image_url', nullable: true }) 
  imageUrl: string;

  @Column({ name: 'repo_url' })
  repoUrl: string;

  @Column({ name: 'site_url', nullable: true }) 
  siteUrl: string;

  @Column('text', { array: true }) 
  technologies: string[];
}