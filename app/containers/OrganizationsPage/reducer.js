import produce from 'immer';
import { ADD_ORGANIZATION, MODAL_STATE, ON_CHANGE_TEMP_ORG } from './constants';

export const initialState = {
	modalOpen: false,
	tempOrg: {
		name: "", 
		desc: "", 
		req: true, 
		priv: "", 
	},
	orgs: [
		{
			name: "Dead Poets Society",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum, purus pretium ultrices feugiat, elit dolor mattis orci, eu mattis metus nunc et sem. In sed elementum ligula. Maecenas rhoncus pretium massa, hendrerit lobortis enim tristique vel.",
			img: null, 
		},
		{
			name: "YPE",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum, purus pretium ultrices feugiat, elit dolor mattis orci, eu mattis metus nunc et sem. In sed elementum ligula. Maecenas rhoncus pretium massa, hendrerit lobortis enim tristique vel.",
			img: null, 
		},
		{
			name: "ACM",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum, purus pretium ultrices feugiat, elit dolor mattis orci, eu mattis metus nunc et sem. In sed elementum ligula. Maecenas rhoncus pretium massa, hendrerit lobortis enim tristique vel.",
			img: null, 
		},
		{
			name: "Cinema @ FIU",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum, purus pretium ultrices feugiat, elit dolor mattis orci, eu mattis metus nunc et sem. In sed elementum ligula. Maecenas rhoncus pretium massa, hendrerit lobortis enim tristique vel.",
			img: null, 
		},
		{
			name: "Track & Field Club",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum, purus pretium ultrices feugiat, elit dolor mattis orci, eu mattis metus nunc et sem. In sed elementum ligula. Maecenas rhoncus pretium massa, hendrerit lobortis enim tristique vel.",
			img: null, 
		}
	]
};


const organizationsReducer = (state = initialState, action) => 
	produce(state, draft => {
		switch (action.type) {
			case ADD_ORGANIZATION:
				draft.orgs.push({name: state.tempOrg.name, desc: state.tempOrg.desc, img: null})
				draft.modalOpen = false;
				draft.tempOrg = {
						name: "", 
						desc: "", 
						req: true, 
						priv: "", 
					}
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