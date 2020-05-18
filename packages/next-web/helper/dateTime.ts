// const currentWeek = require('current-week');

export interface WeekInfo {
  weekNumber: string;
  from: string;
  to: string;
}

//TODO: weekNo format: YYYY-WeekNumber (EX. 202019 202152)
export const getWeekNo = (): string => {
  const thisYear = new Date().getFullYear();
  // const thisWeek = currentWeek.getWeekNumber();
  const thisWeek = 21;
  return thisYear + thisWeek.toString();
};

// export const getWeekInfo = (weekNo?: string): WeekInfo => {
//   const thisYear = new Date().getFullYear();
//   const weekNumber = weekNo.split(thisYear.toString())[1];
//   const from = currentWeek.getFirstWeekDay();
//   const to = currentWeek.getLastWeekDay();
//   return { weekNumber, from, to };
// };

// export const getWeekDescription = (weekNo?: string): string => {
//   const { weekNumber, from, to }: WeekInfo = getWeekInfo(weekNo);
//   return `Week #${weekNumber}  |  from ${from} to ${to}`;
// };
