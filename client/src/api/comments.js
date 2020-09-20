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
const searchComments = async (id) => {
  const response = await api.get(`/comments/recipe/${id}`);
  return response.data;
};

export default {
  createComment,
  searchComments,
};
