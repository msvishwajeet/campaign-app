
import {updateData } from '../utility/helpers';

export const reducer = (
	state,
	action
  )=> {
	switch (action.type) {
	  case 'SET_LANGUAGE':
		return {
		  ...state,
		  languageType: action.payload
		};
	  case 'SET_CAMPAIGN_DATA':
		return {
		  ...state,
		  campaignsData: updateData(action.payload)
		};
	  case 'SET_MODAL':
		return {
		  ...state,
		  modal: action.payload
		};
	  default:
		throw new Error(`Unhandled action type: ${action.type}`);
	}
  };
