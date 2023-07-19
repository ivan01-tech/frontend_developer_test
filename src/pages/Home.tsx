import Post from "../components/Post";
import { useAsync } from "../hooks/useAsync";
import { getPost } from "../services/PostsCrud";

type Props = {};

function Home({}: Props) {
  const { error, loading, value: PostsValue } = useAsync(getPost);

  let content;
  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>{error}</p>;
  } else {
    content = PostsValue
      ? PostsValue.map((post) => <Post post={post} />)
      : "pos";
  }

  return content;
}

export default Home;
