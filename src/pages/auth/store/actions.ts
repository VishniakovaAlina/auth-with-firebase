import { AuthModelInstance } from './model';

export const AuthActions = (self: AuthModelInstance) => {
    const setData = (data: AuthModelInstance) => {
        self = data;
    };

    return {
        setData,
    };
};
