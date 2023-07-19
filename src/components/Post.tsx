import { Link, useParams } from "react-router-dom";

type Props = { post: Post };

export default function Post({ post }: Props) {
  const subBody = post.body.substring(0, 70);
  return (
    <article className=" p-3  rounded-[10px] w-[400px] bg-white flex gap-2 flex-col">
      <div className="text-[10px]">By Ivan Silatsa</div>
      <h3 className="text-xl font-semibold">{post.title}</h3>
      <p>
        {subBody + "..."}
      </p>
        <Link to={`/posts/${post.id}`} className="underline hover:no-underline">
          view the post
        </Link>
    </article>
  );
}
