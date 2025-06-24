import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Operator } from './Operator';
import { Schedule } from './Schedule';

@Table({
  tableName: 'users',
  timestamps: true,
  paranoid: true
})
export class User extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  id!: string;

  @Column({
    type: DataType.STRING(255),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  })
  email!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  password_hash!: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    validate: {
      isIn: [['admin', 'manager', 'operator']]
    }
  })
  role!: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true
  })
  is_active!: boolean;

  @Column(DataType.DATE)
  last_login!: Date;

  @HasMany(() => Operator)
  operators!: Operator[];

  @HasMany(() => Schedule)
  schedules!: Schedule[];
}