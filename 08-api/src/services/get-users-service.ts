import { apiClient } from '@/lib/api-client';
import type { User } from '@/types/user';

export async function getUsersService() {
  const res = await apiClient.get<User[]>('/users');
  return res.data;
}
