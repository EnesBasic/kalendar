import { Schedule } from '../models/Schedule';
import { BaseRepository } from './BaseRepository';
import { Op } from 'sequelize';

export class ScheduleRepository extends BaseRepository<Schedule> {
  constructor() {
    super(Schedule);
  }

  async findByWeekAndYear(weekNumber: number, year: number, includeEntries = false) {
    return this.model.findOne({
      where: {
        week_number: weekNumber,
        year
      },
      include: includeEntries ? ['entries'] : []
    });
  }

  async findBetweenDates(startDate: Date, endDate: Date) {
    return this.model.findAll({
      where: {
        [Op.and]: [
          { year: { [Op.gte]: startDate.getFullYear() } },
          { year: { [Op.lte]: endDate.getFullYear() } },
          { week_number: { [Op.between]: [startDate.getWeek(), endDate.getWeek()] } }
        ]
      },
      include: ['entries']
    });
  }
}