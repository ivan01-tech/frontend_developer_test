import { useParams } from "react-router-dom";
import { useAsyncFn } from "../hooks/useAsync";
import { getPostById, getPostComments } from "../services/PostsCrud";
import { useEffect } from "react";

type Props = {};

function PostItem({}: Props) {
  const { postId } = useParams();

  const {
    error: errorPost,
    executeFn: executeFnPost,
    value: post,
    loading: loadPost,
  } = useAsyncFn(getPostById, []);

  const {
    error: errorComment,
    executeFn: executeFnComment,
    value: comments,
    loading: loadComments,
  } = useAsyncFn(getPostComments, []);

  useEffect(() => {
    executeFnPost(postId)
      .then((res) => res)
      .catch((err) => err);
  }, [executeFnPost, postId]);

  useEffect(() => {
    executeFnComment(postId)
      .then((res) => res)
      .catch((err) => err);
  }, [executeFnComment,postId]);

  let contentPost;

  if (loadPost) {
    contentPost = <p>Loading Post...</p>;
  } else if (errorPost) {
    contentPost = <p>{errorPost}</p>;
  } else {
    contentPost = JSON.stringify(post);
  }

  let contentComment;
  if (loadComments) {
    contentComment = <p>Loading Post...</p>;
  } else if (errorComment) {
    contentComment = <p>{errorComment}</p>;
  } else {
    contentComment = JSON.stringify(comments);
  }

  return (
    <div>
      {contentPost}
      {contentComment}
    </div>
  );
}

export default PostItem;
