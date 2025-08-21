export const formatDate = (dateString: string, format: 'short' | 'long' = 'short') => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: format === 'long' ? 'long' : 'short',
    day: 'numeric',
  };
  // A simple hack to ensure UTC date is interpreted correctly without timezone shifts
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  return new Intl.DateTimeFormat('en-US', options).format(date);
};
