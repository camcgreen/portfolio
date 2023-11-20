export const findProjIndex = (obj, id) => {
  const keys = Object.keys(obj)
  return keys.findIndex((key) => key === id)
}
