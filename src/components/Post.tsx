import { useParams } from "react-router-dom";
import { useAsyncFn } from "../hooks/useAsync";
import { getPostById } from "../services/PostsCrud";
import { useEffect } from "react";

type Props = { post: Post };

export default function Post({ post }: Props) {
  const { postId } = useParams();

  const { error, executeFn, value, loading } = useAsyncFn(getPostById, [
    Number(postId),
  ]);

  // useEffect(() => {
  //   executeFn()
  //     .then((res) => res)
  //     .catch((err) => err);
  // }, []);
  console.log(" : ", error, value, loading);
  return <div>{JSON.stringify(post)}</div>;
}
