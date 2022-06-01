import { Instance, types } from 'mobx-state-tree';

export const AuthModel = types.model({
    localId: types.maybe(types.string),
    email: types.maybe(types.string),
    displayName: types.maybe(types.string),
    idToken: types.maybe(types.string),
    registered: types.maybe(types.boolean),
    refreshToken: types.maybe(types.string),
    expiresIn: types.maybe(types.number)
});

export type AuthModelInstance = Instance<typeof AuthModel>;
