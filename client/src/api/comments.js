import { api } from "../config/default";

//create comment
const createComment = async ({ recipe, comment, user, token }) => {
  const config = {
    contentType: "application-json",
    authorization: `bearer ${token}`,
  };
  const response = await api.post(
    "/comments",
    { recipe, comment, user },
    { headers: config }
  );
  return response.data;
};
//search comments by recipe
const searchComments = async (label) => {
  const response = await api.get(`/comments/recipe/${label}`);
  return response.data;
};

export default {
  createComment,
  searchComments,
};
