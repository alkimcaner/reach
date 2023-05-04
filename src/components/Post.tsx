interface Props {
  id: string;
  userId: string;
  title: string;
  body: string;
  createdAt: Date;
}

export default function Post(props: Props) {
  return <div>Post</div>;
}
