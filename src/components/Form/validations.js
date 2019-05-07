const isEmpty = str => str.length === 0;
const isLongerThan = length => (value) => {
  return value.length > length;
};

export const emptiness = {
  func: isEmpty, 
  message: 'Your to do should have a title'
}

export const length = { 
  func: isLongerThan(25), 
  message: 'Your description is too long, consider splitting this to do into several smaller to dos :)'
}

export const accrueErrors = validations => (input) => {
  return validations.reduce((acc, validation) => {
    if(!validation.func(input)) {
      return acc
    }

    return (
      { 
        ...acc,
        errors: [...acc.errors, validation.message]
      })
    }, { errors: []})
}