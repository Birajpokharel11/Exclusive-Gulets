import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import axios from 'axios';

import * as types from './siteCoordinator.types';
import * as actions from './siteCoordinator.actions';

export function* checkDomainAsync({ payload: { domainName } }: AnyAction) {
  console.log(domainName);
  try {
    const { data } = yield axios.get(
      'http://3.109.159.153:8080/api/checkDomain',
      {
        params: {
          site: domainName
        }
      }
    );

    const finalData = data?.detail?.data;
    if (!finalData.isExists) {
      yield put(actions.checkDomainFail('Domain not found!!'));
      return;
    }

    yield put(
      actions.checkDomainSuccess({
        name: domainName,
        isExists: finalData.isExists,
        data: finalData.broker
      })
    );
  } catch (err) {
    console.error('error received>>>', err);
    yield put(actions.checkDomainFail(err));
  }
}

export function* watchCheckDomain() {
  yield takeLatest(types.CHECK_DOMAIN_START, checkDomainAsync);
}

export function* siteCoordinatorSagas() {
  yield all([call(watchCheckDomain)]);
}
