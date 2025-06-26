import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { ScheduleEntry } from './ScheduleEntry';

@Table({
  tableName: 'shifts',
  timestamps: true,
  paranoid: true
})
export class Shift extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
  id!: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true
  })
  name!: string; // e.g. "08.00-16.00"

  @Column({
    type: DataType.STRING(255),
    allowNull: true
  })
  description?: string;

  @HasMany(() => ScheduleEntry)
  scheduleEntries!: ScheduleEntry[];
}