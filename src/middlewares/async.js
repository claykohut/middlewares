export default function({ dispatch }) {
  return next => action => {
    // if action does not have a payload
    // or, if the payload does not have a .then property
    // we dont care about it, send it on
    if(!action.payload || !action.payload.then) {
      console.log('dont care about this action! ', action)
      return next(action)
    }

    console.log('action contains promise...')
    // Make sure the action's promise resolves
    action.payload
      .then((response) => {
        const newAction = {
          ...action,
          payload: response.data
        }
        // dispatch new action through all middleware from top of stack
        dispatch(newAction)
      })
  }
}
