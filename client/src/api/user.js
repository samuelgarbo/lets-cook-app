import { api } from "../config/default";

//create user
const createUser = async ({ firstName, lastName, email, password }) => {
  const config = { contentType: "application-json" };
  const response = await api.post(
    "/users",
    { firstName, lastName, email, password },
    config
  );
  return response.data;
};

//login user
const loginUser = async ({ email, password }) => {
  const config = { contentType: "application-json" };
  const response = await api.post("/users/login", { email, password }, config);
  return response.data
};

export default {
  createUser,
  loginUser,
};
