export function getDynamicTextSize(value) {
  const length = value.length;

  if (length <= 9) {
    return 55;
  } else if (length <= 14) {
    return 35;
  } else if (length <= 19) {
    return 26;
  } else {
    return 16;
  }
}
