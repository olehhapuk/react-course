interface PostsListProps {
  children: React.ReactNode;
}

export default function PostsList({ children }: PostsListProps) {
  return <div>{children}</div>;
}
