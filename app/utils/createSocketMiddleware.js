const forge = require('node-forge');

function defaultExecute(action, emit, next, dispatch) {
  // eslint-disable-line no-unused-vars
  if (!process.env.CERT) {
    console.log('Action not emited. Missing backend certificate.');
    return next(action);
  }
  // // Encrypt action
  const eventName = action.type.split('/', 2)[1];
  console.log(JSON.stringify(action));

  const key = forge.random.getBytesSync(16);
  const iv = forge.random.getBytesSync(16);
  const cipher = forge.cipher.createCipher('AES-CBC', key);
  cipher.start({ iv });

  cipher.update(forge.util.createBuffer(JSON.stringify(action.data)));
  cipher.finish();

  const cert = process.env.CERT;
  // var cipher =  cert.publicKey.encrypt(JSON.stringify(action['data']))

  const msg = {
    key: btoa(cert.publicKey.encrypt(key)),
    iv: btoa(cert.publicKey.encrypt(iv)),
    text: btoa(cipher.output.getBytes()),
  };

  emit(eventName, JSON.stringify(msg));

  // emit(eventName, JSON.stringify(action['data']))
  return next(action);
}

export default function createSocketIoMiddleware(
  socket,
  criteria = [],
  { eventName = 'action', execute = defaultExecute } = {},
) {
  const emitBound = socket.emit.bind(socket);
  return ({ dispatch }) => {
    // Wire socket.io to dispatch actions sent by the server.
    socket.on(eventName, (action, callback) => {
      var actionDict = JSON.parse(action);

      // Decrypt action
      const pik = process.env.OWNPiK;
      if (pik) {
        const key = pik.decrypt(atob(actionDict.key));
        const iv = pik.decrypt(atob(actionDict.iv));
        const cipher = forge.cipher.createDecipher('AES-CBC', key);
        cipher.start({ iv });
        cipher.update(forge.util.createBuffer(atob(actionDict.text)));
        // action = decipher.output.
        const s = cipher.output.getBytes();
        action = s.substring(0, s.lastIndexOf('}') + 1);
      }

      var actionDict = JSON.parse(action);
      actionDict.callback = callback;
      // alert(actionDict['type'])
      dispatch(actionDict);
    });
    return next => action => {
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
