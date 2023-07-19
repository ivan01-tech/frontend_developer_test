import { useAsync } from "../hooks/useAsync"
import { getPost } from "../services/Blogs"

type Props = {}

function Home({}: Props) {
  const {error,loading,value} = useAsync(getPost)
  
  return (
    <div>Home</div>
  )
}

export default Home