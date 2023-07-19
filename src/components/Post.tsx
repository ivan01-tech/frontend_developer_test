import { Link, useParams } from "react-router-dom";

type Props = { post: Post };

export default function Post({ post }: Props) {
  return (
    <p>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>;
    </p>
  );
}
