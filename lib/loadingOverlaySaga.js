import { put, call, fork, takeLatest } from 'redux-saga/effects';
export const loadingOverlaySaga = function *()
{
	yield fork(function *()
	{
		yield put({ type: 'LOADING_OVERLAY_ACTIVE', payload: true });
	});
};
export default loadingOverlaySaga;