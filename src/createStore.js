export function createStore(rootReducer, initialState) { //initialState - начальный state
    let state = rootReducer(initialState, {type: '_INIT_'})
    const subscribes = []
 return {
        //action === {type: 'INCREMENT'}
     dispatch(action) {
      state = rootReducer(state, action)
      subscribes.forEach(sub => sub())
     },
     subscribe(callback) {
         subscribes.push(callback)
     },
     getState() {
         return state
     }
 }
}