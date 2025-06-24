import { Model, FindOptions, CreateOptions, UpdateOptions, DestroyOptions } from 'sequelize';

export abstract class BaseRepository<T extends Model> {
  constructor(protected model: new () => T) {}

  async findAll(options?: FindOptions): Promise<T[]> {
    return this.model.findAll(options);
  }

  async findById(id: string, options?: FindOptions): Promise<T | null> {
    return this.model.findByPk(id, options);
  }

  async create(data: Partial<T>, options?: CreateOptions): Promise<T> {
    return this.model.create(data, options);
  }

  async update(id: string, data: Partial<T>, options?: Omit<UpdateOptions, 'where'>): Promise<[number, T[]]> {
    return this.model.update(data, {
      where: { id },
      returning: true,
      ...options
    });
  }

  async delete(id: string, options?: Omit<DestroyOptions, 'where'>): Promise<number> {
    return this.model.destroy({
      where: { id },
      ...options
    });
  }

  // Secure version with user context
  async secureFindAll(userId: string, options?: FindOptions): Promise<T[]> {
    return this.model.findAll({
      ...options,
      where: {
        ...options?.where,
        created_by: userId
      }
    });
  }
}