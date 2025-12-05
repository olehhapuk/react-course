import { useEffect, useState } from 'react';

export function useFetch<Data = unknown>(
  defaultValue: Data | null,
  serviceFn: () => Promise<Data>
) {
  const [data, setData] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);

    serviceFn()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err.response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}
