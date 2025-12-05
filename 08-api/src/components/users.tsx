import { Spinner } from './ui/spinner';
import { Alert, AlertTitle } from './ui/alert';
import { AlertCircleIcon } from 'lucide-react';
import { getUsersService } from '@/services/get-users-service';
import { useQuery } from '@tanstack/react-query';

export default function Users() {
  const {
    data: users = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsersService,
  });

  return (
    <div className="max-w-[1440px] mx-auto p-4">
      <h1 className="text-2xl font-bold">Users</h1>

      {isLoading && <Spinner />}

      {error && (
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>{error.message}</AlertTitle>
        </Alert>
      )}

      <ul className="list-disc pl-4">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
