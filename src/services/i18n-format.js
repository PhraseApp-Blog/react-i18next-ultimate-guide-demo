function format(value, format, lng) {
  if (value instanceof Date) {
    return formatDate(value, format, lng);
  }

  return value;
}

function formatDate(value, format, lng) {
  const options = dateOptions(format);

  return options === null
    ? value
    : new Intl.DateTimeFormat(lng, options).format(value);
}

function dateOptions(format) {
  if (format === "default") {
    return {};
  } else {
    try {
      return JSON.parse(jsonCompliant(format));
    } catch (err) {
      console.error(err);

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
