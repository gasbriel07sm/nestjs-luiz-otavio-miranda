import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Pessoa } from '../../pessoas/entities/pessoa.entity';

@Entity()
export class Recado {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  texto!: string;

  // muitos recados podem ser enviados por uma única pessoa (emissora)
  @ManyToOne(() => Pessoa, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  // especifica a coluna "de" que armazena o ID da pessoa que enviou o recado
  @JoinColumn({ name: 'de' })
  de!: Pessoa;

  @ManyToOne(() => Pessoa, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  // especifica a coluna "para" que armazena o ID da pessoa que enviou o recado
  @JoinColumn({ name: 'para' })
  para!: Pessoa;

  @Column({ default: false })
  lido!: boolean;

  @Column()
  data!: Date;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;
}
