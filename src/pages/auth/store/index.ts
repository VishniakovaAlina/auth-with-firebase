import { Instance } from 'mobx-state-tree';

import { AuthModel } from './model';
import { AuthActions } from './actions';

export const AuthStore = AuthModel.actions(AuthActions);

export type AuthStoreInstance = Instance<typeof AuthStore>;
