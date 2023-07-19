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
