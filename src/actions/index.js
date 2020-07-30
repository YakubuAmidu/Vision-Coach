import { SIGN_IN } from '../constants';

export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email
  }
}
