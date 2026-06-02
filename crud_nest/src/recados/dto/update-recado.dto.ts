/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsOptional } from 'class-validator';
import { CreateRecadoDto } from './create-recado.dto';

export class UpdateRecadoDto extends PartialType(CreateRecadoDto) {
  // podemos sobreescrever campos
  // @IsNotEmpty()
  // @IsString()
  // @MinLength(5)
  // @MaxLength(255)
  // readonly texto!: string;

  @IsBoolean()
  @IsOptional()
  readonly lido?: boolean;
}
