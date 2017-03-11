let Dispatcher = require('flux').Dispatcher;
let assign = require('object-assign');

let AppDispatcher = assign(new Dispatcher(), {
  
  handleViewAction(action) {
    console.log('Dispatch',action.actionType);
    let payload = {
      source: 'VIEW_ACTION',
      action: action
    }
    this.dispatch(payload);
  }
})

module.exports = AppDispatcher;