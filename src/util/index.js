export const formatTime = (time) => {
  let [hh, mm] = time.split(':');
  const period = Number(hh) < 12 ? '오전' : '오후';

  if (period === '오후') {
    hh = Number(hh) - 12;
  }

  return { period: period, hhmm: [hh, mm].join(':') };
}
