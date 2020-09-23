function format(value, format, lng) {
  if (value instanceof Date) {
    return formatDate(value, format, lng);
  }

  if (typeof value === "number") {
    return formatNumber(value, format, lng);
  }

  return value;
}

function formatDate(value, format, lng) {
  const options = formatToOptions(format);

  return options === null
    ? value
    : new Intl.DateTimeFormat(lng, options).format(value);
}

function formatNumber(value, format, lng) {
  const options = formatToOptions(format);

  return options === null
    ? value
    : new Intl.NumberFormat(lng, options).format(value);
}

function formatToOptions(format) {
  if (format === "default") {
    return {};
  } else {
    try {
      return JSON.parse(jsonCompliant(format));
    } catch (error) {
      console.error(error);

      return null;
    }
  }
}

function jsonCompliant(format) {
  const namesWrappedWithDoubleQuotes = format
    .split(",")
    .map((param) =>
      param
        .split(":")
        .map((name) => `"${name.trim()}"`)
        .join(":"),
    )
    .join(",");

  return `{${namesWrappedWithDoubleQuotes}}`;
}

export default format;
