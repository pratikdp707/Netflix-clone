import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";
const BaseURL = "http://localhost:4000/api"
export const login = async (user, dispatch) => {
  console.log(user)
  dispatch(loginStart());
  try {
    const res = await axios.post(BaseURL+"/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};