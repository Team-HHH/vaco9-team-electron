export const formatTime = (time) => {
  let [hh, mm] = time.split(':').map(Number);
  const period = hh < 12 ? '오전' : '오후';

  if (period === '오후') {
    hh = hh - 12;
  }

  return { period: period, hhmm: [hh, mm].join(':') };
}
