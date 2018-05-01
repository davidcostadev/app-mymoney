const USER_FULL = 'user/full';

export const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_FULL:
      return payload;
    default:
      return state;
  }
};
