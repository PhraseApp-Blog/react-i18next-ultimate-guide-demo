function format(value, format, lng) {
  if (value instanceof Date) {
    return formatDate(value, format, lng);
  }
  return value;
}

function formatDate(value, format, lng) {
  return new Intl.DateTimeFormat(lng).format(value);
}

export default format;
