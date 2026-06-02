/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

// CRUD
// Create - POST
// Read - GET
// UPDATE - PATCH / PUT
// DELETE - DELETE

// PATCH - utilizado para atualizar dados de um recurso
// PUT - utilizado para atualizar um recurso inteiro

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

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      ...body,
    };
  }
}
