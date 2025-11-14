import { cn } from '../lib/cn';

interface PostCardProps {
  username: string;
  isOnline?: boolean;
  className?: string;
}

export default function PostCard({
  username,
  isOnline,
  className,
}: PostCardProps) {
  return (
    <div
      className={cn(
        'text-2xl font-bold text-gray-700 border border-red-500',
        isOnline && 'text-green-500',
        className
      )}
    >
      @{username}
    </div>
  );
}
