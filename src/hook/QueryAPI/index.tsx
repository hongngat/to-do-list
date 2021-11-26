import { useMutation, useQueryClient } from 'react-query';
export const useMutationAPI = (options: any, params: any) => {
  const queryClient = useQueryClient();
  const { mutate, mutateAsync, isLoading } = useMutation(options, {
    onSuccess: () => {
      queryClient.invalidateQueries(params);
    },
  });
  return {
    mutate,
    mutateAsync,
    isLoading,
  };
};
