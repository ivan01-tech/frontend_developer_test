import { useParams } from "react-router-dom";
import { useAsyncFn } from "../hooks/useAsync";
import { getPostById, getPostComments } from "../services/PostsCrud";
import { useEffect } from "react";
import CommentItem from "./CommentItem";

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
  }, [executeFnComment, postId]);

  let contentPost;

  if (loadPost) {
    contentPost = <p>Loading Post...</p>;
  } else if (errorPost) {
    contentPost = <p>{errorPost}</p>;
  } else {
    const newPost = post as Post;
    contentPost = (
      <section>
        <div className="py-8 flex flex-col items-center gap-4">
          <h1 className="text-slate-900 text-3xl sm:text-2xl md:text-6xl font-extralight text-center capitalize">
            {newPost.title}
          </h1>
          <p className="text-center uppercase text-[12px] font-bold">
            by Ivan Silatsa
          </p>
        </div>
        <p>{newPost.body}</p>
      </section>
    );
  }

  let contentComment;
  if (loadComments) {
    contentComment = <p>Loading Comments...</p>;
  } else if (errorComment) {
    contentComment = <p>{errorComment}</p>;
  } else if (!comments) {
    contentComment = <p>Not Found !</p>;
  } else {
    contentComment = (
      <section className="m-4">
        <h2 className="text-2xl font-bold py-4">Comments</h2>
        <div className="flex flex-col gap-4 ">
          {(comments as Comment[]).map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <div>
      {contentPost}
      {contentComment}
    </div>
  );
}

export default PostItem;
