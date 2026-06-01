/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return 'Retorna todos os recados';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Retornando recado específico: ${id}`;
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }
}
