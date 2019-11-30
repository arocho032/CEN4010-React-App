import produce from 'immer';
import { ADD_ORGANIZATION, MODAL_STATE, SET_LOADED, ON_CHANGE_TEMP_ORG } from './constants';

export const initialState = {
	modalOpen: false,
	tempOrg: {
		name: "", 
		description: "", 
		requirements: true, 
		privacy: "PUBLIC",
	},
	pageState: {
		isLoaded: false,
		startIndex: 0,
	},
	orgs: [],
	// orgs: [
	// 	{
	// 		hostId: 1,
	// 		name: "Dead Poets Society",
	// 		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum, purus pretium ultrices feugiat, elit dolor mattis orci, eu mattis metus nunc et sem. In sed elementum ligula. Maecenas rhoncus pretium massa, hendrerit lobortis enim tristique vel.",
	// 		img: null,
	// 		members: [ "jdoe001", "johns2" ],
	// 		roles: {
	// 			"jdoe001": "createEvent",
	// 		}
	// 	},
	// 	{
	// 		hostId: 2,
	// 		name: "YPE",
	// 		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum, purus pretium ultrices feugiat, elit dolor mattis orci, eu mattis metus nunc et sem. In sed elementum ligula. Maecenas rhoncus pretium massa, hendrerit lobortis enim tristique vel.",
	// 		img: null, 
	// 		members: [ "johns2" ],
	// 		roles: {
	// 			"johns2": "createEvent",
	// 		}
	// 	},
	// 	{
	// 		hostId: 3,
	// 		name: "ACM",
	// 		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum, purus pretium ultrices feugiat, elit dolor mattis orci, eu mattis metus nunc et sem. In sed elementum ligula. Maecenas rhoncus pretium massa, hendrerit lobortis enim tristique vel.",
	// 		img: null, 
	// 		members: [ "jdoe001", "johns2" ],
	// 		roles: {
	// 			"johns2": "createEvent",
	// 		}
	// 	},
	// 	{
	// 		hostId: 4,
	// 		name: "Cinema @ FIU",
	// 		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum, purus pretium ultrices feugiat, elit dolor mattis orci, eu mattis metus nunc et sem. In sed elementum ligula. Maecenas rhoncus pretium massa, hendrerit lobortis enim tristique vel.",
	// 		img: null, 
	// 		members: [ "jdoe001", "johns2" ],
	// 		roles: {
	// 			"jdoe001": "createEvent",
	// 		}
	// 	},
	// 	{
	// 		hostId: 5,
	// 		name: "Track & Field Club",
	// 		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum, purus pretium ultrices feugiat, elit dolor mattis orci, eu mattis metus nunc et sem. In sed elementum ligula. Maecenas rhoncus pretium massa, hendrerit lobortis enim tristique vel.",
	// 		img: null, 
	// 		members: [ "johns2" ],
	// 		roles: {
	// 			"johns2": "createEvent",
	// 		}
	// 	}
	// ]
};

const organizationsReducer = (state = initialState, action) => 
	produce(state, draft => {
		console.log(action)
		switch (action.type) {
			case "successCreatingOrganization":
				draft.modalOpen = false;
				draft.tempOrg = {
						name: "", 
						description: "", 
						requirements: true, 
						privacy: "PUBLIC",
					}
				draft.pageState.isLoaded = false;
				break;
			case "updateOrgs":
				draft.orgs = []
				console.log(action.org)
				for(var org of action.org) {
					draft.orgs.push({organization_id: org.organization_id, name: org.name, desc: org.description, img: null})
				}
				break
			case SET_LOADED:
				draft.pageState.isLoaded = action.value
				break;
			case MODAL_STATE:
				draft.modalOpen = action.setState
				break;
			case ON_CHANGE_TEMP_ORG:
				draft.tempOrg[action.update.name] = action.update.value 
				break;
		}
	})

export default organizationsReducer;