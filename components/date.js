import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  if (dateString) {
    const date = parseISO(dateString);
    if (date !== 'Invalid Date' && date) {
      return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
    }
  }
}
