import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Schedule } from './Schedule';
import { Operator } from './Operator';
import { Machine } from './Machine';

@Table({
  tableName: 'schedule_entries',
  timestamps: true,
  paranoid: true
})
export class ScheduleEntry extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
  id!: number;

  @ForeignKey(() => Schedule)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  scheduleId!: number;

  @ForeignKey(() => Operator)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  operatorId!: number;

  @ForeignKey(() => Machine)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  machineId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  shift!: string;

  @BelongsTo(() => Schedule)
  schedule!: Schedule;

  @BelongsTo(() => Operator)
  operator!: Operator;

  @BelongsTo(() => Machine)
  machine!: Machine;
}