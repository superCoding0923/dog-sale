const isEmpty = (value: any) => {
  return value === '' ||
    value === null ||
    value === undefined ||
    (typeof value === 'object' && value.keys().length === 0)
}

export default isEmpty;