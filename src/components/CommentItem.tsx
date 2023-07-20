type Props = { comment: Comments };

function CommentItem({ comment }: Props) {
  return (
    <article className="border border-slate-500 py-2 px-4 rounded">
      <div className="flex items-center justify-between text-[12px]">
        <div className="uppercase">
          by <span className="text-slate-700 font-bold">{comment.name}</span>
        </div>
        <div className="font-bold">{comment.email}</div>
      </div>
      <div className="my-2">{comment.body}</div>
    </article>
  );
}

export default CommentItem;
