import { getPostsService } from '@/services/get-posts-service';
import { Spinner } from './ui/spinner';
import { Alert, AlertTitle } from './ui/alert';
import { AlertCircleIcon } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

export default function Posts() {
  const {
    data: posts = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPostsService,
  });

  return (
    <div className="max-w-[1440px] mx-auto p-4">
      <h1 className="text-2xl font-bold">Posts</h1>

      {isLoading && <Spinner />}

      {error && (
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>{error.message}</AlertTitle>
        </Alert>
      )}

      <ul className="list-disc pl-4">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
