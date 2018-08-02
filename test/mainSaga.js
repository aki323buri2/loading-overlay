import { put, call, fork } from 'redux-saga/effects';
import loadingOverlaySaga from '../lib/loadingOverlaySaga';
export const mainSaga = function *()
{
	yield fork(loadingOverlaySaga);
};
export default mainSaga;