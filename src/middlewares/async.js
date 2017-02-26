export default function({ dispatch }) {
  return next => action => {
    console.log('action: ', action);

    next(action)
  }
}
