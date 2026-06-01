import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosAutomaticoService {
  solucionaHome(): string {
    return 'Home do Conceitos Automáticos';
  }
}
