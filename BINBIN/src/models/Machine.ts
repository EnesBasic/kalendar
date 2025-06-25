import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Schedule } from './Schedule';

@Table({
  tableName: 'machines',
  timestamps: true,
  paranoid: true
})
export class Machine extends Model {
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
    type: DataType.STRING(255),
    allowNull: true
  })
  description?: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true
  })
  is_active!: boolean;

  @HasMany(() => Schedule)
  schedules!: Schedule[];
}