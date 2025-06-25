import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Schedule } from './Schedule';

@Table({
  tableName: 'operators',
  timestamps: true,
  paranoid: true
})
export class Operator extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true
  })
  name!: string;

  @Column({
    type: DataType.STRING(7),
    allowNull: true
  })
  color?: string;

  @HasMany(() => Schedule)
  schedules!: Schedule[];
}