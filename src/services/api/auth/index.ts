import { authStore } from 'services/store/auth';

import { IApiSuccess } from 'utils/Types';
import { ApiEndPoints } from 'utils/constants';
import { appLoader } from 'utils/functions';

import apiInstance from '..';
import { ISignInReq, ISignInRes } from './types';

const { actions } = authStore.getState();

export const authAPI = {
  // SignIn
  async signIn(data: ISignInReq): Promise<IApiSuccess<ISignInRes>> {
    appLoader(true);
    return apiInstance
      .post(ApiEndPoints.auth.signIn, data)
      .then((response) => {
        actions.authSuccess(response);
        return response;
      })
      .catch((error) => {
        throw error?.response?.data;
      })
      .finally(() => appLoader(false));
  }
};
