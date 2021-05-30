export const isLongText = (text: string, upperLimitLength?: number): boolean => {
  if (!upperLimitLength) {
    return false;
  }
  return text.length > upperLimitLength;
}

export const transformText = (text: string, displayLength: number): string => {
  return `${text.slice(0, displayLength)}...`
}