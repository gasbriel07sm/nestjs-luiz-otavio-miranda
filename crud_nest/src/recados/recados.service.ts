import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
import { Recado } from './entities/recado.entity';

@Injectable()
export class RecadosService {
  constructor(
    @InjectRepository(Recado)
    private readonly recadoRepository: Repository<Recado>,
  ) {}

  private lastId = 1;
  private recados: Recado[] = [
    {
      id: 1,
      texto: 'Este é um recado de teste',
      de: 'João',
      para: 'Maria',
      lido: false,
      data: new Date(),
    },
  ];

  async findAll() {
    const recados = await this.recadoRepository.find();
    return recados;
  }

  async findOne(id: number) {
    // const recado = this.recados.find(recado => recado.id === id);
    const recado = await this.recadoRepository.findOne({
      where: {
        id,
      },
    });

    if (recado) return recado;

    throw new NotFoundException(`Recado não encontrado`);
  }

  create(createRecadoDto: CreateRecadoDto) {
    this.lastId++;
    const id = this.lastId;
    const novoRecado = {
      id,
      ...createRecadoDto,
      lido: false,
      data: new Date(),
    };
    this.recados.push(novoRecado);

    return novoRecado;
  }

  update(id: number, updateRecadoDto: UpdateRecadoDto) {
    const recadoExistenteIndex = this.recados.findIndex(item => item.id === id);

    if (recadoExistenteIndex < 0) {
      throw new NotFoundException(`Recado não encontrado`);
    }
    const recadoExistente = this.recados[recadoExistenteIndex];

    this.recados[recadoExistenteIndex] = {
      ...recadoExistente,
      ...updateRecadoDto,
    };

    return this.recados[recadoExistenteIndex];
  }

  remove(id: number) {
    const recadoExistenteIndex = this.recados.findIndex(item => item.id === id);

    if (recadoExistenteIndex < 0) {
      throw new NotFoundException(`Recado não encontrado`);
    }

    const recado = this.recados.splice(recadoExistenteIndex, 1);

    return recado;
  }
}
