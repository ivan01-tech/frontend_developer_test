import makeRequest from "../utils/makeRequest";

/**
 * a function to get  posts
 * @returns
 */
export async function getPost() {
  return makeRequest(`/posts`, {
    method: "GET",
  })
    .then((res: Post[]) => res)
    .catch((err) => err);
}

/**
 * a function to get a post
 * @returns
 */
export async function getPostById(args: unknown[]) {
  const postId = args[0];
  console.log("params : ", postId);
  return makeRequest(`/posts/${postId}`, {
    method: "GET",
  })
    .then((res: Post) => res)
    .catch((err) => err);
}
