export const pluralizeNumber = (value: number, singular: string, plural?: string) => {
  return value === 1 ? `${value} ${singular}` : plural ? `${value} ${plural}` : `${value} ${singular}s`
}