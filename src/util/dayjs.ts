/* istanbul ignore file */

import dayjs from 'src/util/dayjs';

import 'dayjs/plugin/dayOfYear';
import 'dayjs/plugin/isLeapYear';
import 'dayjs/plugin/isoWeeksInYear';
import 'dayjs/plugin/quarterOfYear';
import 'dayjs/plugin/weekOfYear';

dayjs.extend(require('dayjs/plugin/dayOfYear'));
dayjs.extend(require('dayjs/plugin/isLeapYear'));
dayjs.extend(require('dayjs/plugin/isoWeeksInYear'));
dayjs.extend(require('dayjs/plugin/quarterOfYear'));
dayjs.extend(require('dayjs/plugin/weekOfYear'));

//

export const weeksInCurrentYear = (): number => dayjs().isoWeeksInYear();

export const currentWeek = (): number => dayjs().week();

export const currentQuarter = (): number => dayjs().quarter();

export const weekRange = (week: number): [Date, Date] => {
  const current = dayjs().week(week);
  const begin = current.subtract(current.day(), 'day').add(1, 'day');
  const end = begin.add(4, 'day');
  return [begin.toDate(), end.toDate()];
};

export const periodRange = (period: number): [Date, Date] => {
  const current = dayjs().week(period);
  const begin = current.subtract(current.day(), 'day');
  const end = begin.add(6, 'day');
  return [begin.toDate(), end.toDate()];
};

export const quarterRange = (quarter: number): [Date, Date] => {
  const current = dayjs();
  const begin = current.subtract(current.dayOfYear() - 1, 'day').add(quarter - 1, 'quarter');
  const end = begin.add(1, 'quarter').subtract(1, 'day');
  return [begin.toDate(), end.toDate()];
};

export default dayjs;
