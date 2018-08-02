export const loadingOverlayReducers = {
	loadingOverlayActive: (state = false, action) =>
	{
		if (action.type === 'LOADING_OVERLAY_ACTIVE') return action.payload;
		return state;
	}, 
};
export default loadingOverlayReducers;