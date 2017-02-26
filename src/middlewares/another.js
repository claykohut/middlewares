export default function({ dispatch }) {
  return next => action => {
    console.log('in another middleware... ', action)
    return next(action)
  }
}
