import { useMemo, useState } from "react";
import Post from "../components/Post";
import { useAsync } from "../hooks/useAsync";
import { getPost } from "../services/PostsCrud";
import SearchForm from "../components/SearchForm";

type Props = {};

function Home({}: Props) {
  const [page, setPage] = useState(0);

  const [search, setSearch] = useState("");

  // const

  const { error, loading, value: PostsValue } = useAsync(getPost);

  // to display posts base on the current user input
  const filteredPosts = useMemo(() => {
    return (PostsValue as Post[]).filter((post) => {
      return (
        search == "" || post.title.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [PostsValue, search]);

  let content;
  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>{error}</p>;
  } else if (!PostsValue) {
    content = <p>Not Found !</p>;
  } else {
    content = filteredPosts
      .map((post) => <Post key={post.id} post={post} />)
      .slice(page, page + 10);
  }

  return (
    <section>
      <SearchForm onChange={(e) => setSearch(e.target.value)} search={search} />
      <h2 className="uppercase text-center text-4xl font-extrabold my-16">
        List of Posts
      </h2>
      <div className="flex gap-4 flex-wrap justify-center">{content}</div>
      <div className="flex justify-between my-8 text-white">
        <button
          className="disabled:cursor-not-allowed"
          disabled={loading || page <= 0}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous Posts
        </button>
        <button
          disabled={loading || page > 10}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next Posts
        </button>
      </div>
    </section>
  );
}

export default Home;
