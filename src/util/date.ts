import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import 'dayjs/locale/ko';

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.extend(isLeapYear);
dayjs.locale('ko');
dayjs.updateLocale('ko', {
  relativeTime: {
    future: '%s 전',
    past: '%s 후',
    s: '방금',
    m: '1 분',
    mm: '%d 분',
    h: '한 시간',
    hh: '%d 시간',
    d: '어제',
    dd: '%d 일',
    M: '한 달',
    MM: '%d 달',
    y: '1 년',
    yy: '%d 년'
  }
});

export default dayjs;
