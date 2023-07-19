import { useAsync } from "../hooks/useAsync";
import { getPost } from "../services/Blogs";

type Props = {};

function Home({}: Props) {
  const { error, loading, value } = useAsync(getPost);
  let content;
  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>Error</p>;
  } else {
    content = JSON.stringify(value);
  }

  return content;
}

export default Home;
