export const initialAuthState = { firstName: "", lastName: "", userClicks: 1 };

export function AuthReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return initialAuthState;
    default:
      throw new Error();
  }
}
