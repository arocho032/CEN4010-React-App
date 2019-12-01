import produce from 'immer';
import { ON_LOGIN_ATTEMPT, ON_CHANGE_RESG_USER, ON_CHANGE_TEMP_USER, ON_LOGOUT, ON_ATTEMPT_USER_CHANGE, ON_HANDSHAKE_REQUEST } from './constants';

export const initialState = {
	server: {
		cert: null, 
		own: {
			cert: null,
			prv: null,
			pub: null,
		},
	},
	curUser: null,
	notification: null, 
	tempUser: {
		username: "",
		password: "",
	},
	regisUser: {
		userName: "",
		userUserName: "",
		userPassword: "",
		userEmail: "",
		confirmpassword: "",
	},
	passwordCheck: null,
	users: {}
};

function getCertificate() {
	var forge = require('node-forge')
	var pki = forge.pki;
	var keys = forge.rsa.generateKeyPair(2048)
	var cert = pki.createCertificate()
	cert.publicKey = keys.publicKey;
	cert.serialNumber = '01';
	cert.validity.notBefore = new Date();
	cert.validity.notAfter = new Date();
	cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 1)
	var attrs = [
			{name: 'commonName', value: 'example.org'}, 
			{name: 'countryName', value: 'US'},
			{shortName: 'ST', value: 'FL'},
			{name: 'localityName', value: 'Miami'},
			{name: 'organizationName', value: 'Test'}, 
			{shortName: 'OU', value: 'Test'}
		];
	cert.setSubject(attrs);
	cert.setIssuer(attrs);
	cert.setExtensions([
		{name: 'basicConstraints', cA: true},
		{name: 'keyUsage', keyCertSign: true, digitalSignature: true, nonRepudiation: true, keyEncipherment: true, dataEncipherment: true}, 
		{name: 'extKeyUsage', serverAuth: true, clientAuth: true, codeSigning: true, emailProtection: true, timeStamping: true},
		{name: 'nsCertType', client: true, server: true, email: true, objsign: true, sslCA: true, emailCA: true, objCA: true},
		{name: 'subjectAltName', altNames: [
											{type: 6, value: 'http://example.org/webid#me'},
											{type: 7, ip: '127.0.0.1'}
										]
		},
		{name: 'subjectKeyIdentifier'}
	]);
	cert.sign(keys.privateKey)
	return {cert: cert, keys: keys}
}

const appReducer = (state = initialState, action) => 
	produce(state, draft => {
		switch (action.type) {
			case ON_HANDSHAKE_REQUEST:

				var forge = require('node-forge');
				const data = JSON.parse(action['data'])
				draft.server.cert = forge.pki.certificateFromPem(data['certificate'])

				const cert = getCertificate()
				draft.server.own.cert = cert.cert
				draft.server.own.prv = cert.keys.privateKey
				draft.server.own.pub = cert.keys.publicKey

				action.callback(forge.pki.certificateToPem(cert.cert))

				process.env.CERT = draft.server.cert
				process.env.OWNPiK = cert.keys.privateKey

				break;
			case ON_LOGOUT:
				draft.curUser = null
				break;
			case ON_CHANGE_TEMP_USER:
				draft.tempUser[action.update.name] = action.update.value 
				break;
			case ON_CHANGE_RESG_USER:
				draft.regisUser[action.update.name] = action.update.value 
				break;	
			case "doLogin":
				draft.curUser = {
								id: action.user.user_name, 
								numId: action.user.user_id,
								name: action.user.name, 
								email: action.user.email,
								priv: action.user.privacy}		
				break;
			case ON_ATTEMPT_USER_CHANGE:
				if(action.payload.req)
					draft.passwordCheck = {
						req: true,
						succ: action.payload.succ,
					}
				else {
					draft.passwordCheck = {
						req: false,
						succ: action.payload.succ
					}
					draft.users[action.payload.tempUser.id] = action.payload.tempUser
					draft.curUser = draft.users[action.payload.tempUser.id]
				}
				break;
		}
	});

export default appReducer;