import {constants} from '../meta/constants';


// ===============================================
// START: actionCreators


export const errorsAction = (errorMsg) => {
	return {
		type: constants.ADD_ERROR,
		payload: errorMsg
	}
}


//  END:  actionCreators
// ===============================================
// START: reducers


export const errors = (state = [], action) => {
	switch (action.type) {
		case constants.ADD_ERROR:
			return [...state, action.payload];
			// break;
		case constants.REMOVE_ERROR:
			return state.filter((error, i) => (i === action.payload)?false:true);
			// break;
		default:
			return state;
	}
}

//  END:  reducers
// ===============================================