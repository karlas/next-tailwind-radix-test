export const SPACING = Array(100)
  .fill(0)
  .reduce((acc, _value, index) => {
    if (index === 0) {
      return acc
    }
    return { ...acc, [String(index)]: `${index * 0.5}rem` }
  }, {})
