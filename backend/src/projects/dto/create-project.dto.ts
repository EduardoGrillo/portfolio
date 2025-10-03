import { IsArray, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsUrl()
  @IsOptional() 
  imageUrl: string;

  @IsUrl()
  @IsNotEmpty()
  repoUrl: string;

  @IsUrl()
  @IsOptional() 
  siteUrl: string;

  @IsArray()
  @IsString({ each: true }) 
  @IsNotEmpty()
  technologies: string[];
}