
function defaultExecute(action, emit, next, dispatch) { // eslint-disable-line no-unused-vars
  // if(!process.env.CERT) {
  //   console.log("Action not emited. Missing backend certificate.")
  //   return next(action)
  // }
  // // Encrypt action
  var eventName = action['type'].split("/", 2)[1]
  // var cert = process.env.CERT
  // var cipher =  cert.publicKey.encrypt(JSON.stringify(action['data']))
  // emit(eventName, btoa(cipher));

  emit(eventName, JSON.stringify(action['data']))
  return next(action);
}

export default function createSocketIoMiddleware(socket, criteria = [],
    { eventName = 'action', execute = defaultExecute } = {}) {
    const emitBound = socket.emit.bind(socket);
    return ({ dispatch }) => {
      // Wire socket.io to dispatch actions sent by the server.
      socket.on(eventName, (action, callback) => {
        // Decrypt action
        // var pik = process.env.OWNPiK
        // if(pik)
        //   action = pik.decrypt(atob(action))

        var actionDict = JSON.parse(action)
        actionDict['callback'] = callback
        alert(actionDict['type'])
        dispatch(actionDict)
      });
      return next => (action) => {
        if (evaluate(action, criteria)) {
          return execute(action, emitBound, next, dispatch);
        }
        return next(action);
      };
    };
  
    function evaluate(action, option) {
      if (!action || !action.type) {
        return false;
      }
  
      const { type } = action;
      let matched = false;
      if (typeof option === 'function') {
        // Test function
        matched = option(type, action);
      } else if (typeof option === 'string') {
        // String prefix
        matched = type.indexOf(option) === 0;
      } else if (Array.isArray(option)) {
        // Array of types
        matched = option.some(item => type.indexOf(item) === 0);
      }
      return matched;
    }

  }
