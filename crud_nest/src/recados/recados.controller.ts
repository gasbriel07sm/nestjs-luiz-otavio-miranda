import { Controller, Get } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  // encontrar todos os recados
  @Get()
  findAll() {
    return 'Retorna todos os recados';
  }

  // encontrar um recado
  // recados/:id
  @Get(':id')
  findOne() {
    return `Retornando recado específico`;
  }
}
