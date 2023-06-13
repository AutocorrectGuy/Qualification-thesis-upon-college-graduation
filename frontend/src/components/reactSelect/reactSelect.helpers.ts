export type optionType = { label: string; value: string }

export const createOptionValuesAsIndexes = (values: string[]) =>
  values.map((value, i) => ({ value: i.toString(), label: value }))

export const createNumberOptions = ({from, to}: {from: number, to: number}) => 
  [...Array(to)].map((_x, i) => ({ value: (i + from).toString(), label: (i + from).toString() }))