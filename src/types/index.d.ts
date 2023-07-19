interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Res {
  status: number;
}
type GlobalRespnse = Post[] | undefined | Comment[] | Post;
interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: stringm;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
