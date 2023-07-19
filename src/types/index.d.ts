interface Post {
  userId: number;
  id: number;
  title: string;
  body: stringo;
}

interface Res {
  status: number;
}
type GlobalRespnse = Post[] | undefined | Res | Comment[];
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
