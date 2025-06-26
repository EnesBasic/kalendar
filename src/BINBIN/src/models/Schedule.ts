import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Machine } from './Machine';

@Table({
  tableName: 'schedules',
  timestamps: true,
  paranoid: true
})
export class Schedule extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
  id!: number;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false
  })
  date!: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  shift!: string;

  @ForeignKey(() => Machine)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  machineId!: number;

  // Add other fields and associations as needed
}