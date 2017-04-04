import * as types from './actionTypes';

export function beginRequestCall() {
  return { type: types.BEGIN_REQUEST_CALL };
}

export function requestCallError() {
  return { type: types.REQUEST_CALL_ERROR };
}
